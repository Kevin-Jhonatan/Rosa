#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script MEJORADO para extraer el MÁXIMO de preguntas posibles del PDF
Objetivo: Encontrar TODAS las 1000 preguntas
"""

import re
import json

def clean_text(text):
    """Limpia el texto"""
    if not text:
        return ""
    text = str(text).replace('\x0c', '\n')
    text = re.sub(r'\s+', ' ', text)
    text = text.strip()
    text = text.replace('\\', '\\\\').replace('"', '\\"').replace('`', '\\`')
    return text

def extract_questions_aggressive(content):
    """Extrae preguntas de manera agresiva usando múltiples estrategias"""
    all_questions = []
    seen_questions = set()
    question_id = 1
    
    # ESTRATEGIA 1: "Pregunta X:" explícito
    pattern1 = r'Pregunta\s+(\d+):\s*(.*?)(?=Sustento|Pregunta\s+\d+:|$)'
    matches1 = re.finditer(pattern1, content, re.DOTALL | re.IGNORECASE)
    
    for match in matches1:
        q_text = clean_text(match.group(2))
        if len(q_text) > 10:
            q_hash = q_text[:150].lower()
            if q_hash not in seen_questions:
                seen_questions.add(q_hash)
                
                # Buscar sustento
                resto = content[match.end():match.end()+3000]
                sustento_match = re.search(r'Sustento\s+(.*?)(?=Pregunta\s+\d+:|Pregunta|$|\n\d+\.\s+[A-Z])', resto, re.DOTALL)
                sustento = clean_text(sustento_match.group(1)) if sustento_match else ""
                
                all_questions.append({
                    'id': question_id,
                    'question': q_text,
                    'options': ["Opción A", "Opción B", "Opción C", "Opción D"],
                    'answer': 0,
                    'explanation': sustento,
                    'source': 'Pregunta X:'
                })
                question_id += 1
    
    # ESTRATEGIA 2: Líneas que terminan con ? (preguntas directas)
    lines = content.split('\n')
    current_context = []
    
    for i, line in enumerate(lines):
        line_stripped = line.strip()
        
        # Si la línea tiene ? y es significativa
        if '?' in line_stripped and len(line_stripped) > 15:
            # Construir pregunta completa con contexto
            pregunta_completa = line_stripped
            
            # Agregar 2-3 líneas anteriores si parecen parte de la pregunta
            context_lines = []
            for j in range(max(0, i-3), i):
                prev_line = lines[j].strip()
                if prev_line and len(prev_line) > 10:
                    # Evitar números de página y títulos
                    if not re.match(r'^\d+$', prev_line) and not re.match(r'^[A-ZÁÉÍÓÚÑ\s]+$', prev_line[:30]):
                        context_lines.append(prev_line)
            
            if context_lines:
                # Agregar contexto solo si parece parte de la pregunta
                for ctx in reversed(context_lines[-2:]):
                    if any(word in ctx.lower() for word in ['qué', 'cuál', 'cómo', 'dónde', 'cuándo', 'por qué', 'según', 'del', 'la', 'el']):
                        pregunta_completa = ctx + ' ' + pregunta_completa
                        break
            
            pregunta_completa = clean_text(pregunta_completa)
            
            # Verificar que no sea duplicado
            q_hash = pregunta_completa[:150].lower()
            if q_hash not in seen_questions and len(pregunta_completa) > 20:
                # Filtrar líneas que no son preguntas reales
                if not re.match(r'^\d+\s*$', pregunta_completa):
                    seen_questions.add(q_hash)
                    
                    # Buscar sustento después
                    resto_after = '\n'.join(lines[i+1:min(len(lines), i+50)])
                    sustento_match = re.search(r'Sustento\s+(.*?)(?=Pregunta|^\d+\.\s+[A-Z]|$|\n\n)', resto_after, re.DOTALL)
                    sustento = clean_text(sustento_match.group(1)) if sustento_match else ""
                    
                    all_questions.append({
                        'id': question_id,
                        'question': pregunta_completa,
                        'options': ["Opción A", "Opción B", "Opción C", "Opción D"],
                        'answer': 0,
                        'explanation': sustento,
                        'source': 'Línea con ?'
                    })
                    question_id += 1
    
    # ESTRATEGIA 3: Números seguidos de texto que termina en ?
    pattern3 = r'^(\d+)\.\s+([^.]*?\?)(.*?)(?=^\d+\.\s+|Sustento|$)'
    matches3 = re.finditer(pattern3, content, re.MULTILINE | re.DOTALL)
    
    for match in matches3:
        q_text = clean_text(match.group(2))
        if len(q_text) > 15:
            q_hash = q_text[:150].lower()
            if q_hash not in seen_questions:
                seen_questions.add(q_hash)
                
                # Buscar sustento
                resto = content[match.end():match.end()+3000]
                sustento_match = re.search(r'Sustento\s+(.*?)(?=^\d+\.\s+[A-Z]|Pregunta|$)', resto, re.DOTALL | re.MULTILINE)
                sustento = clean_text(sustento_match.group(1)) if sustento_match else ""
                
                all_questions.append({
                    'id': question_id,
                    'question': q_text,
                    'options': ["Opción A", "Opción B", "Opción C", "Opción D"],
                    'answer': 0,
                    'explanation': sustento,
                    'source': 'Número. Pregunta'
                })
                question_id += 1
    
    return all_questions, question_id

def organize_by_component(questions, content):
    """Organiza preguntas por componente de manera inteligente"""
    organized = []
    
    # Dividir contenido por componentes
    comp_pattern = r'COMPONENTE: ([A-ZÁÉÍÓÚÑ ]+)'
    comp_matches = list(re.finditer(comp_pattern, content))
    
    if not comp_matches:
        # Si no hay componentes claros, organizar todo junto
        organized.append({
            'component': 'TODAS LAS PREGUNTAS',
            'title': 'Repositorio Completo',
            'text': 'Todas las preguntas extraídas del PDF',
            'fullText': '',
            'questions': questions
        })
        return organized
    
    # Dividir preguntas por componentes (aproximado)
    q_idx = 0
    
    for i, comp_match in enumerate(comp_matches):
        component_name = comp_match.group(1).strip()
        start_pos = comp_match.end()
        end_pos = comp_matches[i+1].start() if i+1 < len(comp_matches) else len(content)
        
        comp_content = content[start_pos:end_pos]
        
        # Contar preguntas esperadas en este componente
        preguntas_in_comp = len(re.findall(r'Pregunta\s+\d+:', comp_content))
        preguntas_in_comp += len(re.findall(r'\n\d+\.\s+[A-ZÁÉÍÓÚÑ¿].*?\?', comp_content))
        
        # Para COMPRENSIÓN LECTORA, agrupar por textos
        if 'COMPRENSIÓN LECTORA' in component_name:
            # Agrupar preguntas en bloques de 30 (aproximadamente por texto)
            textos = re.split(r'\n\d+\s*\n', comp_content)
            texto_idx = 0
            
            for texto in textos[1:]:
                if len(texto.strip()) > 200:
                    lines = texto.split('\n')
                    title = ""
                    for line in lines[:20]:
                        if len(line.strip()) > 30 and not line.strip().isdigit():
                            if not re.match(r'^[A-ZÁÉÍÓÚÑ\s,]+$', line.strip()[:50]):
                                title = clean_text(line)
                                break
                    
                    if not title:
                        title = f"Texto {texto_idx + 1}"
                    
                    # Tomar preguntas para este texto
                    preguntas_texto = []
                    preguntas_por_texto = min(30, len(questions) - q_idx)
                    
                    for j in range(preguntas_por_texto):
                        if q_idx < len(questions):
                            preguntas_texto.append(questions[q_idx])
                            q_idx += 1
                    
                    if preguntas_texto:
                        organized.append({
                            'component': 'COMPRENSIÓN LECTORA',
                            'title': title,
                            'text': clean_text(texto[:200]),
                            'fullText': clean_text(texto[:5000]),
                            'questions': preguntas_texto
                        })
                    texto_idx += 1
        else:
            # Para otros componentes, tomar preguntas
            preguntas_comp = []
            preguntas_por_comp = min(preguntas_in_comp if preguntas_in_comp > 0 else 50, len(questions) - q_idx)
            
            for j in range(preguntas_por_comp):
                if q_idx < len(questions):
                    preguntas_comp.append(questions[q_idx])
                    q_idx += 1
            
            if preguntas_comp:
                title = component_name.replace('COMPONENTE: ', '')
                organized.append({
                    'component': component_name,
                    'title': title,
                    'text': f'Preguntas de {title}',
                    'fullText': '',
                    'questions': preguntas_comp
                })
    
    # Si quedan preguntas, agregarlas
    if q_idx < len(questions):
        remaining = questions[q_idx:]
        if remaining:
            organized.append({
                'component': 'PREGUNTAS ADICIONALES',
                'title': 'Preguntas Adicionales',
                'text': 'Preguntas adicionales del repositorio',
                'fullText': '',
                'questions': remaining
            })
    
    return organized

def main():
    print("=" * 70)
    print("EXTRACCIÓN AGRESIVA DE PREGUNTAS - OBJETIVO: 1000 PREGUNTAS")
    print("=" * 70)
    
    print("\n1. Leyendo PDF extraído...")
    with open('pdf_full_text.txt', 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"   Total de caracteres: {len(content):,}")
    
    print("\n2. Extrayendo TODAS las preguntas (múltiples estrategias)...")
    all_questions, last_id = extract_questions_aggressive(content)
    
    print(f"   ✅ Total de preguntas encontradas: {len(all_questions)}")
    
    if len(all_questions) < 900:
        print(f"\n   ⚠️  ADVERTENCIA: Se encontraron {len(all_questions)} preguntas")
        print("   El PDF puede tener preguntas en formato no estándar.")
    
    print("\n3. Organizando preguntas por componente...")
    organized = organize_by_component(all_questions, content)
    
    total_organized = sum(len(sec['questions']) for sec in organized)
    print(f"   Preguntas organizadas: {total_organized}")
    print(f"   Secciones creadas: {len(organized)}")
    
    print("\n4. Generando questions_data.js...")
    
    js_lines = ["const questionsData = ["]
    
    for i, section in enumerate(organized):
        js_lines.append("    {")
        js_lines.append(f'        component: "{section["component"]}",')
        js_lines.append(f'        title: "{section["title"]}",')
        js_lines.append(f'        text: "{section["text"]}",')
        if section.get('fullText'):
            js_lines.append(f'        fullText: `{section["fullText"]}`,')
        else:
            js_lines.append(f'        fullText: ``,')
        js_lines.append("        questions: [")
        
        for q in section['questions']:
            js_lines.append("            {")
            js_lines.append(f'                id: {q["id"]},')
            js_lines.append(f'                question: "{q["question"]}",')
            js_lines.append('                options: ["Opción A", "Opción B", "Opción C", "Opción D"],')
            js_lines.append(f'                answer: {q["answer"]},')
            js_lines.append(f'                explanation: "{q["explanation"]}"')
            js_lines.append("            },")
        
        js_lines.append("        ]")
        js_lines.append("    }" + ("," if i < len(organized) - 1 else ""))
    
    js_lines.append("];")
    
    js_content = "\n".join(js_lines)
    
    # Guardar
    output_file = 'questions_data.js'
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"\n✅ Archivo {output_file} generado exitosamente!")
    print(f"   📊 Total de preguntas: {total_organized}")
    print(f"   📁 Total de secciones: {len(organized)}")
    
    print("\n" + "=" * 70)
    print("⚠️  NOTA IMPORTANTE:")
    print("=" * 70)
    print("1. Las opciones son PLACEHOLDER - necesitas el PDF para completarlas")
    print("2. Todas las respuestas están en 'answer: 0' (primera opción)")
    print("3. El sustento (explanation) debería estar correcto")
    print(f"4. Se encontraron {total_organized} preguntas del objetivo de 1000")
    if total_organized < 1000:
        print(f"5. Faltan aproximadamente {1000 - total_organized} preguntas")
        print("   - Pueden estar en formato no estándar en el PDF")
        print("   - Pueden necesitar extracción manual adicional")
    print("=" * 70)

if __name__ == '__main__':
    main()
