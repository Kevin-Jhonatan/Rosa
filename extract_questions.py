#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para extraer preguntas del PDF y generar questions_data.js
"""

import re
import json

def extract_questions_from_pdf():
    """Extrae todas las preguntas del PDF procesado"""
    
    with open('pdf_full_text.txt', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Dividir por componentes principales
    components = {
        'COMPRENSIÓN LECTORA': content.split('COMPONENTE: COMPRENSIÓN LECTORA')[1].split('COMPONENTE: RAZONAMIENTO LÓGICO')[0] if 'COMPONENTE: RAZONAMIENTO LÓGICO' in content else content.split('COMPONENTE: COMPRENSIÓN LECTORA')[1],
        'RAZONAMIENTO LÓGICO': content.split('COMPONENTE: RAZONAMIENTO LÓGICO')[1].split('COMPONENTE: CONOCIMIENTOS GENERALES')[0] if 'COMPONENTE: CONOCIMIENTOS GENERALES' in content else '',
        'CONOCIMIENTOS GENERALES': content.split('COMPONENTE: CONOCIMIENTOS GENERALES')[1].split('COMPONENTE: HABILIDADES SOCIOEMOCIONALES')[0] if 'COMPONENTE: HABILIDADES SOCIOEMOCIONALES' in content else '',
        'HABILIDADES SOCIOEMOCIONALES': content.split('COMPONENTE: HABILIDADES SOCIOEMOCIONALES')[1] if 'COMPONENTE: HABILIDADES SOCIOEMOCIONALES' in content else ''
    }
    
    print(f"Componentes encontrados: {list(components.keys())}")
    print("Procesando PDF... Este proceso puede tardar varios minutos debido al tamaño del archivo.")
    
    # Procesar cada componente
    questions_data = []
    
    # Por ahora, vamos a procesar manualmente las secciones más importantes
    # debido a la complejidad del parsing
    
    return questions_data

if __name__ == '__main__':
    print("Extrayendo preguntas del PDF...")
    questions = extract_questions_from_pdf()
    print(f"Total de preguntas extraídas: {len(questions)}")
