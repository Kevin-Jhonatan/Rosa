#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para extraer TODAS las preguntas del PDF y generar questions_data.js completo
"""

import re
import json

def clean_text(text):
    """Limpia el texto de caracteres extraños"""
    text = text.replace('\x0c', '\n')  # Form feed
    text = re.sub(r'\s+', ' ', text)  # Múltiples espacios
    return text.strip()

def extract_reading_sections(content):
    """Extrae secciones de comprensión lectora"""
    sections = []
    
    # Patrón para encontrar textos de comprensión lectora
    # Buscar entre "COMPONENTE: COMPRENSIÓN LECTORA" y el siguiente componente
    pattern = r'COMPONENTE: COMPRENSIÓN LECTORA(.*?)(?=COMPONENTE: RAZONAMIENTO LÓGICO|$)'
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        lectura_content = match.group(1)
        
        # Buscar títulos de textos (líneas que parecen títulos)
        # Los textos suelen comenzar después de un número de página o título
        textos = re.split(r'\n\d+\s*\n', lectura_content)
        
        for texto in textos[1:]:  # Saltar el primer elemento
            if len(texto.strip()) > 200:  # Solo textos significativos
                # Buscar título (primera línea significativa)
                lines = texto.split('\n')
                title = ""
                for line in lines[:10]:
                    if len(line.strip()) > 20 and not line.strip().isdigit():
                        title = clean_text(line)
                        break
                
                if title:
                    # Extraer resumen o texto completo
                    full_text = clean_text(texto[:2000])  # Primeros 2000 caracteres
                    
                    # Extraer preguntas de este texto
                    preguntas = extract_questions_from_text(texto)
                    
                    if preguntas:
                        sections.append({
                            'component': 'COMPRENSIÓN LECTORA',
                            'title': title,
                            'text': full_text[:200],
                            'fullText': full_text,
                            'questions': preguntas
                        })
    
    return sections

def extract_questions_from_text(text):
    """Extrae preguntas de un texto dado"""
    questions = []
    
    # Buscar patrones de preguntas
    # Patrón 1: "Pregunta X:" o "X."
    patterns = [
        r'Pregunta\s+(\d+):\s*(.*?)(?=Sustento|Pregunta|\d+\.|$)',
        r'^(\d+)\.\s+(.*?)(?=Sustento|Pregunta|\d+\.|$)',
    ]
    
    for pattern in patterns:
        matches = re.finditer(pattern, text, re.MULTILINE | re.DOTALL)
        for match in matches:
            q_num = match.group(1)
            q_text = clean_text(match.group(2))
            
            # Buscar el sustento después de la pregunta
            resto = text[match.end():]
            sustento_match = re.search(r'Sustento\s+(.*?)(?=Pregunta|\d+\.|$)', resto, re.DOTALL)
            sustento = clean_text(sustento_match.group(1)) if sustento_match else ""
            
            if q_text and len(q_text) > 10:
                questions.append({
                    'id': int(q_num),
                    'question': q_text,
                    'options': ["Opción A", "Opción B", "Opción C", "Opción D"],  # Placeholder
                    'answer': 0,  # Placeholder - necesita ser determinado
                    'explanation': sustento
                })
    
    return questions

def extract_logic_questions(content):
    """Extrae preguntas de razonamiento lógico"""
    questions = []
    
    pattern = r'COMPONENTE: RAZONAMIENTO LÓGICO(.*?)(?=COMPONENTE: CONOCIMIENTOS GENERALES|$)'
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        logic_content = match.group(1)
        preguntas = extract_questions_from_text(logic_content)
        
        for q in preguntas:
            questions.append({
                'component': 'RAZONAMIENTO LÓGICO',
                'title': 'Razonamiento Lógico',
                'text': 'Preguntas de razonamiento lógico',
                'fullText': '',
                'questions': [q]
            })
    
    return questions

def extract_knowledge_questions(content):
    """Extrae preguntas de conocimientos generales"""
    sections = []
    
    pattern = r'COMPONENTE: CONOCIMIENTOS GENERALES(.*?)(?=COMPONENTE: HABILIDADES SOCIOEMOCIONALES|$)'
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        knowledge_content = match.group(1)
        
        # Buscar disciplinas
        disciplines = re.finditer(r'Disciplina:\s+([A-ZÁÉÍÓÚÑ ]+)(.*?)(?=Disciplina:|$)', knowledge_content, re.DOTALL)
        
        for disc_match in disciplines:
            discipline = clean_text(disc_match.group(1))
            disc_content = disc_match.group(2)
            
            preguntas = extract_questions_from_text(disc_content)
            
            if preguntas:
                sections.append({
                    'component': 'CONOCIMIENTOS GENERALES',
                    'title': f'Conocimientos Generales - {discipline}',
                    'text': f'Preguntas de {discipline}',
                    'fullText': '',
                    'questions': preguntas
                })
    
    return sections

def extract_socioemotional_questions(content):
    """Extrae preguntas de habilidades socioemocionales"""
    questions = []
    
    pattern = r'COMPONENTE: HABILIDADES SOCIOEMOCIONALES(.*?)$'
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        se_content = match.group(1)
        preguntas = extract_questions_from_text(se_content)
        
        if preguntas:
            questions.append({
                'component': 'HABILIDADES SOCIOEMOCIONALES',
                'title': 'Habilidades Socioemocionales',
                'text': 'Preguntas situacionales de habilidades socioemocionales',
                'fullText': '',
                'questions': preguntas
            })
    
    return questions

def main():
    print("Leyendo PDF extraído...")
    with open('pdf_full_text.txt', 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("Extrayendo preguntas de COMPRENSIÓN LECTORA...")
    reading_sections = extract_reading_sections(content)
    print(f"  Encontradas {len(reading_sections)} secciones de lectura")
    
    print("Extrayendo preguntas de RAZONAMIENTO LÓGICO...")
    logic_sections = extract_logic_questions(content)
    print(f"  Encontradas {len(logic_sections)} secciones de lógica")
    
    print("Extrayendo preguntas de CONOCIMIENTOS GENERALES...")
    knowledge_sections = extract_knowledge_questions(content)
    print(f"  Encontradas {len(knowledge_sections)} disciplinas")
    
    print("Extrayendo preguntas de HABILIDADES SOCIOEMOCIONALES...")
    se_sections = extract_socioemotional_questions(content)
    print(f"  Encontradas {len(se_sections)} secciones socioemocionales")
    
    # Combinar todas las secciones
    all_sections = reading_sections + logic_sections + knowledge_sections + se_sections
    
    # Contar total de preguntas
    total_questions = sum(len(sec['questions']) for sec in all_sections)
    print(f"\nTotal de preguntas extraídas: {total_questions}")
    
    # Generar JavaScript
    print("\nGenerando questions_data.js...")
    js_content = "const questionsData = [\n"
    
    for i, section in enumerate(all_sections):
        js_content += "    {\n"
        js_content += f'        component: "{section["component"]}",\n'
        js_content += f'        title: "{section["title"]}",\n'
        js_content += f'        text: "{section["text"]}",\n'
        js_content += f'        fullText: `{section.get("fullText", "")}`,\n'
        js_content += "        questions: [\n"
        
        for q in section['questions']:
            js_content += "            {\n"
            js_content += f'                id: {q["id"]},\n'
            js_content += f'                question: "{q["question"].replace('"', '\\"')}",\n'
            js_content += '                options: ["Opción A", "Opción B", "Opción C", "Opción D"],\n'
            js_content += f'                answer: {q["answer"]},\n'
            js_content += f'                explanation: "{q["explanation"].replace('"', '\\"')}"\n'
            js_content += "            },\n"
        
        js_content += "        ]\n"
        js_content += "    }"
        if i < len(all_sections) - 1:
            js_content += ","
        js_content += "\n"
    
    js_content += "];\n"
    
    # Guardar
    with open('questions_data_new.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Archivo questions_data_new.js generado con {total_questions} preguntas")
    print("\nNOTA: Las opciones y respuestas correctas son placeholders.")
    print("Necesitarás revisar y completar las opciones correctas basándote en el PDF original.")

if __name__ == '__main__':
    main()
