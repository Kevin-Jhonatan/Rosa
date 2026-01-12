#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script COMPLETO para extraer TODAS las preguntas del PDF (objetivo: 1000 preguntas)
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
    # Escapar comillas para JavaScript
    text = text.replace('\\', '\\\\').replace('"', '\\"').replace('`', '\\`')
    return text

def extract_all_questions(content):
    """Extrae TODAS las preguntas del contenido usando múltiples patrones"""
    all_questions = []
    question_id = 1
    
    # PATRÓN 1: "Pregunta X:"
    pattern1 = r'Pregunta\s+(\d+):\s*(.*?)(?=Sustento|Pregunta\s+\d+:|$)'
    matches1 = re.finditer(pattern1, content, re.DOTALL | re.IGNORECASE)
    for match in matches1:
        q_text = clean_text(match.group(2))
        if len(q_text) > 10:  # Solo preguntas significativas
            # Buscar sustento después
            resto = content[match.end():match.end()+2000]
            sustento_match = re.search(r'Sustento\s+(.*?)(?=Pregunta\s+\d+:|Pregunta|$)', resto, re.DOTALL)
            sustento = clean_text(sustento_match.group(1)) if sustento_match else ""
            
            all_questions.append({
                'id': question_id,
                'question': q_text,
                'options': ["Opción A", "Opción B", "Opción C", "Opción D"],
                'answer': 0,
                'explanation': sustento
            })
            question_id += 1
    
    # PATRÓN 2: "X." seguido de pregunta (para secciones sin "Pregunta X:")
    # Buscar en secciones específicas donde sabemos que hay preguntas
    pattern2 = r'^(\d+)\.\s+([A-ZÁÉÍÓÚÑ¿].*?)(?=\n\d+\.\s+[A-Z]|\n\d+\.\s*$|Sustento|$|\nPregunta)'
    matches2 = re.finditer(pattern2, content, re.MULTILINE | re.DOTALL)
    found_in_sections = set()
    
    # Filtrar para evitar duplicados y solo en secciones relevantes
    sections_keywords = [
        'FÍSICA', 'MATEMÁTICA', 'QUÍMICA', 'GEOGRAFÍA', 'PSICOLOGÍA',
        'FILOSOFÍA', 'HISTORIA', 'BIOLOGÍA', 'TÉCNICA', 'LENGUAJE',
        'Observa', 'En una', 'Una', 'Del análisis', 'Según', 'La lectura'
    ]
    
    for match in matches2:
        q_num = match.group(1)
        q_text = clean_text(match.group(2))
        
        # Filtrar preguntas significativas
        if len(q_text) > 15 and any(kw in q_text for kw in sections_keywords):
            # Evitar duplicados
            q_hash = q_text[:100]
            if q_hash not in found_in_sections:
                found_in_sections.add(q_hash)
                
                # Buscar sustento
                resto = content[match.end():match.end()+2000]
                sustento_match = re.search(r'Sustento\s+(.*?)(?=\n\d+\.\s+|\nPregunta|$)', resto, re.DOTALL)
                sustento = clean_text(sustento_match.group(1)) if sustento_match else ""
                
                # Verificar que no sea un título de sección
                if not re.match(r'^[A-ZÁÉÍÓÚÑ\s]+$', q_text[:50]):  # No solo mayúsculas
                    all_questions.append({
                        'id': question_id,
                        'question': q_text,
                        'options': ["Opción A", "Opción B", "Opción C", "Opción D"],
                        'answer': 0,
                        'explanation': sustento
                    })
                    question_id += 1
    
    return all_questions, question_id

def organize_questions_by_component(questions, content):
    """Organiza las preguntas por componente"""
    organized = []
    
    # Dividir contenido por componentes
    components_pattern = r'COMPONENTE: ([A-ZÁÉÍÓÚÑ ]+)(.*?)(?=COMPONENTE: |$)'
    components = list(re.finditer(components_pattern, content, re.DOTALL))
    
    current_q_idx = 0
    
    for i, comp_match in enumerate(components):
        component_name = comp_match.group(1).strip()
        comp_content = comp_match.group(2)
        
        # Contar preguntas en este componente (aproximado)
        preguntas_in_comp = len(re.findall(r'Pregunta\s+\d+:', comp_content))
        
        if preguntas_in_comp == 0:
            # Para componentes sin "Pregunta X:", contar números seguidos de mayúsculas
            preguntas_in_comp = len(re.findall(r'\n\d+\.\s+[A-ZÁÉÍÓÚÑ¿]', comp_content))
        
        # Para COMPRENSIÓN LECTORA, buscar textos específicos
        if 'COMPRENSIÓN LECTORA' in component_name:
            # Buscar textos con títulos
            textos = re.split(r'\n\d+\s*\n', comp_content)
            for texto in textos[1:]:
                if len(texto.strip()) > 500:
                    lines = texto.split('\n')
                    title = ""
                    for line in lines[:15]:
                        if len(line.strip()) > 30 and not line.strip().isdigit():
                            title = clean_text(line)
                            break
                    
                    if title:
                        # Extraer preguntas de este texto
                        preguntas_texto = []
                        for q in questions[current_q_idx:current_q_idx+50]:
                            preguntas_texto.append(q)
                            current_q_idx += 1
                            if current_q_idx >= len(questions):
                                break
                        
                        if preguntas_texto:
                            organized.append({
                                'component': 'COMPRENSIÓN LECTORA',
                                'title': title,
                                'text': clean_text(texto[:200]),
                                'fullText': clean_text(texto[:5000]),
                                'questions': preguntas_texto
                            })
        else:
            # Para otros componentes, agrupar preguntas
            preguntas_comp = []
            for j in range(min(preguntas_in_comp, len(questions) - current_q_idx)):
                if current_q_idx < len(questions):
                    preguntas_comp.append(questions[current_q_idx])
                    current_q_idx += 1
            
            if preguntas_comp:
                if 'RAZONAMIENTO' in component_name:
                    organized.append({
                        'component': component_name,
                        'title': 'Razonamiento Lógico',
                        'text': 'Preguntas de razonamiento lógico',
                        'fullText': '',
                        'questions': preguntas_comp
                    })
                elif 'CONOCIMIENTOS' in component_name:
                    # Buscar disciplinas
                    disciplines = re.findall(r'Disciplina:\s+([A-ZÁÉÍÓÚÑ ]+)', comp_content)
                    for disc in disciplines[:10]:  # Máximo 10 disciplinas
                        if current_q_idx < len(questions):
                            preguntas_disc = questions[current_q_idx:current_q_idx+20]
                            current_q_idx += len(preguntas_disc)
                            if preguntas_disc:
                                organized.append({
                                    'component': 'CONOCIMIENTOS GENERALES',
                                    'title': f'Conocimientos Generales - {disc.strip()}',
                                    'text': f'Preguntas de {disc.strip()}',
                                    'fullText': '',
                                    'questions': preguntas_disc
                                })
                elif 'HABILIDADES' in component_name:
                    organized.append({
                        'component': component_name,
                        'title': 'Habilidades Socioemocionales',
                        'text': 'Preguntas situacionales',
                        'fullText': '',
                        'questions': preguntas_comp
                    })
    
    # Si quedan preguntas sin organizar, agregarlas
    if current_q_idx < len(questions):
        remaining = questions[current_q_idx:]
        if remaining:
            organized.append({
                'component': 'OTROS',
                'title': 'Preguntas Adicionales',
                'text': 'Preguntas adicionales del repositorio',
                'fullText': '',
                'questions': remaining
            })
    
    return organized

def main():
    print("=" * 60)
    print("EXTRACCIÓN COMPLETA DE PREGUNTAS DEL PDF")
    print("Objetivo: 1000 preguntas")
    print("=" * 60)
    
    print("\n1. Leyendo PDF extraído...")
    with open('pdf_full_text.txt', 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"   Total de caracteres: {len(content):,}")
    
    print("\n2. Extrayendo TODAS las preguntas...")
    all_questions, last_id = extract_all_questions(content)
    
    print(f"   Total de preguntas encontradas: {len(all_questions)}")
    
    if len(all_questions) < 800:
        print("\n   ⚠️  ADVERTENCIA: Se encontraron menos de 800 preguntas.")
        print("   El PDF puede tener preguntas en formato que no se extrajo correctamente.")
        print("   Continuando con las preguntas encontradas...")
    
    print("\n3. Organizando preguntas por componente...")
    organized = organize_questions_by_component(all_questions, content)
    
    total_in_organized = sum(len(sec['questions']) for sec in organized)
    print(f"   Preguntas organizadas: {total_in_organized}")
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
    print(f"   Total de preguntas: {total_in_organized}")
    print(f"   Total de secciones: {len(organized)}")
    
    print("\n" + "=" * 60)
    print("⚠️  IMPORTANTE:")
    print("=" * 60)
    print("1. Las opciones de respuesta son PLACEHOLDER (Opción A, B, C, D)")
    print("2. Todas las respuestas están en 'answer: 0' (PRIMERA OPCIÓN)")
    print("3. Necesitarás:")
    print("   - Revisar el PDF original para obtener las opciones correctas")
    print("   - Determinar la respuesta correcta (0=A, 1=B, 2=C, 3=D)")
    print("   - Actualizar manualmente o con otro script")
    print("\n4. El sustento (explanation) debería estar correcto")
    print("5. Las preguntas deberían estar todas presentes")
    print("=" * 60)

if __name__ == '__main__':
    main()
