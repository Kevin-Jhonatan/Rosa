const questionsData = [
    {
        component: "HABILIDADES SOCIOEMOCIONALES",
        title: "Habilidades Socioemocionales",
        text: "Preguntas situacionales de habilidades socioemocionales",
        fullText: ``,
        questions: [
            {
                id: 1,
                question: "Según el artículo, ¿cuál fue la reducción porcentual de la superficie forestal entre 1900 y 1960",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El párrafo sobre la colonización española indica que la superficie forestal pasó de 4,9 millones a 3,9 millones de hectáreas entre 1900 y 1960, lo que corresponde a una reducción del 20% (INE, 2021). En el resumen y la sección de impactos climáticos se menciona que la pérdida de cobertura forestal entre 1990 y 2020 fue de aproximadamente el 15% (datos satelitales)."
            },
            {
                id: 2,
                question: "Del análisis presentado se desprende que, ¿cuáles son los problemas identificados que el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección “Impactos climáticos y retroalimentaciones” indica que la deforestación ha generado un aumento de la temperatura media de 0,6 °C, una mayor variabilidad de precipitaciones con sequías más intensas, una disminución de la capacidad del suelo para retener agua y un aumento de emisiones de CO2 (≈ 12 MtCO2 /año entre 2000‑2015) debido a la quema forestal."
            },
            {
                id: 3,
                question: "Del análisis presentado se desprende que, en la cadena de procesos que relaciona la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Industrialización y políticas de desarrollo en el siglo XX” se describe el modelo de balance energético: “La reducción del albedo (reflectancia de la superficie) y la pérdida de la transpiración vegetal disminuyen el flujo de energía latente, aumentando la temperatura de la superficie”. El texto menciona primero la reducción del albedo como factor que desencadena la cadena de efectos que lleva al aumento de la temperatura."
            },
            {
                id: 4,
                question: "La lectura del texto permite identificar que, entre 1990 y 2020, la pérdida de cobertura forestal",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los datos explícitos del artículo indican que la pérdida de cobertura forestal entre 1990 y 2020 fue de aproximadamente 15%, y en la sección “Impactos climáticos y retroalimentaciones” se reporta un incremento de la temperatura media de 0,6 °C para el mismo período."
            },
            {
                id: 5,
                question: "A partir de lo expuesto en el artículo, ¿qué proceso técnico se ve incrementado directamente",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La disminución del LE al perderse los bosques eleva el H y, por ende, la temperatura del aire” (Gómez et al., 2020). Esto muestra que la reducción del calor latente provoca un aumento del calor sensible, que es el proceso técnico directamente involucrado en el calentamiento del aire."
            },
            {
                id: 6,
                question: "Del análisis presentado se desprende que, ¿cuál de los siguientes conjuntos de actores se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona explícitamente a los pueblos originarios (Aymara y Guaraní) en la sección “Los Andes antes del contacto europeo”, a los colonizadores españoles en “La colonización española y la expansión agropecuaria”, al gobierno boliviano en “Industrialización y políticas de desarrollo en el siglo XX” y en “Respuestas actuales y perspectivas de gestión”, y a organizaciones no gubernamentales y comunidades indígenas en los mismos últimos párrafos donde se describen iniciativas de restauración forestal y pagos por servicios ambientales."
            },
            {
                id: 7,
                question: "A partir de lo expuesto en el artículo, ¿cuál de las siguientes afirmaciones compara mejor el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la expansión agrícola del siglo XX aceleró la deforestación (de 32 000 ha/año a 45 000 ha/ año entre 1990‑2020) y está vinculada a una disminución del flujo de calor latente (LE), lo que eleva la temperatura del aire. En cambio, la colonización española del siglo XVI provocó deforestación para minería y pastoreo, pero a una escala mucho menor y sin mencionar efectos directos sobre la temperatura; su impacto climático se describió como indirecto y menos pronunciado. Por lo tanto, la comparación que atribuye un mayor incremento térmico a la expansión agrícola del siglo XX es la que mejor refleja la información dispersa del texto. 12 Repositorio de"
            },
            {
                id: 8,
                question: "Del análisis presentado se desprende que, al comparar el mecanismo de retroalimentación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Porque el texto indica que la deforestación disminuye el flujo de calor latente (LE) y, por tanto, eleva el calor sensible (H) y la temperatura del aire. En contraste, los sistemas agroforestales precolombinos combinaban cultivos con árboles, favoreciendo la conservación del suelo y la regulación hídrica, lo que implica una transpiración vegetal sostenida y un mayor LE, mitigando el aumento térmico."
            },
            {
                id: 9,
                question: "A partir de lo expuesto en el artículo, ¿qué principio general se puede extraer sobre las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La deforestación reduce la capacidad de retención de agua y aumenta la vulnerabilidad de los suelos, lo que afecta directamente a las poblaciones locales que dependen de estos recursos. Además, se enfatiza que la restauración requiere la integración de saberes tradicionales y la participación activa de comunidades indígenas, lo que indica que la mitigación de los efectos sociales depende de estos factores."
            },
            {
                id: 10,
                question: "A partir de lo expuesto en el artículo, ¿qué efecto indirecto es probable que tenga la ampliación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pérdida de bosque reduce la capacidad de retención de agua en el suelo, amplificando los efectos de la sequía. Asimismo, se menciona que el programa Biodiversidad Andina ha sembrado 3,5 millones de árboles nativos y que la integración de saberes tradicionales con tecnologías de monitoreo permite una gestión adaptativa que identifica zonas con mayor estrés hídrico. De manera implícita, la restauración forestal incrementa la retención de agua y modula el microclima, lo que debería reducir la vulnerabilidad de los sistemas agropecuarios ante la mayor variabilidad de precipitaciones."
            },
            {
                id: 11,
                question: "Según el artículo, ¿qué es probable que ocurra si la tendencia actual de expansión agrícola",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Porque el artículo muestra que entre 1990 y 2020 la temperatura media aumentó 0,6 °C y la pérdida forestal se aceleró a 45 000 ha/año entre 2005 y"
            },
            {
                id: 12,
                question: "De acuerdo con el texto, ¿cuál de las siguientes afirmaciones compara de manera más",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pérdida de bosque reduce el flujo de energía latente (LE), lo que disminuye la transpiración y eleva el calor sensible (H), incrementando la temperatura local. Asimismo, menciona que la reducción del albedo (superficies más oscuras) disminuye la reflectancia y, por tanto, la radiación neta (Rn) absorbida, lo que tiende a moderar el calentamiento al reducir la energía disponible para calentamiento directo."
            },
            {
                id: 13,
                question: "De acuerdo con el texto, ¿qué diferencia más significativa se puede inferir entre la forma en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La colonización española, la tala de bosques para carreteras y la introducción de ganado provocó sobrepastoreo y erosión del suelo, lo que afecta la retención hídrica. En contraste, en artículo también explica que la expansión agrícola del siglo XXI reduce el flujo latente (LE) al perderse la transpiración vegetal, lo que eleva el calor sensible (H) y, consecuentemente, la temperatura del aire."
            },
            {
                id: 14,
                question: "Del análisis presentado se desprende que la iniciativa Biodiversidad Andina (2020‑2024)",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El programa Biodiversidad Andina (2020‑2024) ha sembrado 3,5 millones de árboles nativos en áreas degradadas de los Yungas y que revive prácticas agroforestales tradicionales, con la finalidad de restaurar bosques y aportar resiliencia frente al cambio climático."
            },
            {
                id: 15,
                question: "Basándose en la información proporcionada, ¿qué efecto indirecto es probable que haya",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La carretera Cochabamba‑Santa Cruz, finalizada en 1978, “abrió vastas áreas del bosque subtropical a la colonización de campesinos y empresas agroindustriales”. Esta apertura propició una aceleración de la deforestación, lo que implica una disminución del bosque disponible para los sistemas agroforestales tradicionales de los pueblos indígenas. Por otra parte, “el gobierno boliviano, junto a organizaciones no gubernamentales y comunidades indígenas, ha promovido iniciativas de restauración forestal y pagos por servicios ambientales”, lo que sugiere que los pueblos tuvieron que recurrir a estas políticas como respuesta a la pérdida de sus áreas de manejo tradicional."
            },
            {
                id: 16,
                question: "A partir de lo expuesto en el artículo, ¿qué consecuencia a largo plazo se puede deducir de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La deforestación reduce el flujo de calor latente (LE), lo que eleva el calor sensible (H) y, por ende, la temperatura de la superficie (“la disminución de LE al perderse los bosques eleva H y, por ende, la temperatura del aire”). Además, en la sección de retroalimentaciones se menciona que el aumento de emisiones de CO2 proviene de la quema forestal y que estas emisiones intensifican el calentamiento global, potenciando la frecuencia de incendios. 14 Repositorio de"
            },
            {
                id: 17,
                question: "El artículo señala que, a partir de los ejemplos históricos y los datos climáticos presentados,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pérdida de bosque reduce el flujo de calor latente (LE) asociado a la transpiración, lo que incrementa el calor sensible (H) y, por ende, la temperatura del aire. Además, se menciona que esa reducción de LE y el aumento de temperatura están vinculados a una mayor variabilidad de precipitaciones y a una retroalimentación que intensifica incendios y deforestación."
            },
            {
                id: 18,
                question: "El artículo señala que la iniciativa Biodiversidad Andina (2020‑2024) fue implementada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El programa Biodiversidad Andina ha sembrado 3,5 millones de árboles nativos en áreas degradadas y que involucra a campesinos que reviven prácticas agroforestales tradicionales, con el objetivo de restaurar bosques y, por ende, mejorar la retención hídrica y la captura de CO"
            },
            {
                id: 19,
                question: "Según el artículo, ¿cuál es la finalidad principal de combinar los conocimientos agroforestales",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La integración de saberes ancestrales con monitoreo satelital permite “una gestión adaptativa: los datos de sensores térmicos identifican zonas con mayor estrés hídrico, mientras que la ciencia del suelo orienta la selección de especies nativas con alta tolerancia a la sequía”. Este propósito se centra en mejorar la resiliencia de la restauración frente a condiciones climáticas adversas."
            },
            {
                id: 20,
                question: "El artículo señala que la pérdida de bosque en los Andes bolivianos reduce la retención de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La deforestación disminuye la capacidad del suelo para retener agua y aumenta la variabilidad de precipitaciones, lo que intensifica sequías que afectan la disponibilidad de agua para la agricultura y la generación hidroeléctrica. Estas condiciones generan mayor vulnerabilidad de los campesinos, quienes dependen del agua para cultivos y ganadería, y pueden verse forzados a migrar a zonas urbanas en busca de medios de vida más seguros."
            },
            {
                id: 21,
                question: "Según el artículo, ¿qué principio general se puede extraer de las soluciones propuestas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La combinación de conocimientos tradicionales (saberes ancestrales) con tecnologías de monitoreo satelital permite una gestión adaptativa de la restauración forestal. Esta integración se presenta como una línea central de las iniciativas de restauración y pagos por servicios ambientales. 15"
            },
            {
                id: 22,
                question: "A partir de lo expuesto en el artículo, ¿cuál de las siguientes consecuencias sociales",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe detalladamente los impactos climáticos y menciona iniciativas de restauración y participación comunitaria, nunca aborda explícitamente el posible desplazamiento forzado de poblaciones indígenas originarias provocado por la expansión agrícola y la construcción de carreteras."
            },
            {
                id: 23,
                question: "Considerando lo mencionado en el texto, ¿cuál de las siguientes afirmaciones describe",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo subraya que la integración de conocimientos ancestrales (p.ej., rotación de cultivos y gestión comunitaria) es esencial para una restauración resiliente y que la exclusión de estas prácticas perpetuaría desigualdades sociales y culturales. Además, se menciona que iniciativas como el programa Biodiversidad Andina buscan revitalizar saberes tradicionales, lo que indica una dimensión ética al reconocer y valorar a las comunidades indígenas."
            },
            {
                id: 24,
                question: "A partir de lo expuesto en el artículo, ¿cuáles son las principales implicaciones ambientales",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala que la pérdida de bosque disminuye el flujo latente de energía (LE), lo que eleva la temperatura del aire, y que la quema de residuos forestales emite alrededor de 12 MtCO2 al año. Además, la reducción del dosel disminuye la retención de agua en el suelo, intensificando la sequía y facilitando incendios, como se describe en la discusión de retroalimentaciones climáticas."
            },
            {
                id: 25,
                question: "Considerando lo mencionado en el texto, ¿cómo difiere la propuesta de gestión futura de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El programa Biodiversidad Andina incorpora saberes tradicionales (rotación de cultivos, gestión comunitaria) y que, al mismo tiempo, se utilizan tecnologías de monitoreo satelital y sensores térmicos para identificar zonas con mayor estrés hídrico, describiendo un enfoque híbrido. Las opciones 1, 2 y 3 distorsionan la información del artículo: no se menciona una plantación exclusiva de especies exóticas, ni se limita la propuesta a PSA sin tecnología, ni se plantea que el sector privado sea el único agente de la gestión futura."
            },
            {
                id: 26,
                question: "Del análisis presentado se desprende que, para una evaluación completa del balance",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pérdida de cobertura forestal y su efecto en el balance energético (párrafo 3, ecuación Q = Rn - G - H - LE) y menciona la expansión agrícola y minera como causas principales, pero no aborda la posible expansión urbana ni otras conversiones de suelo que tampoco están cubiertas por bosques. Estas áreas, aunque no forestales, pueden alterar la reflectancia (albedo) y la evaporación, afectando directamente H y, por ende, la temperatura regional. 16 Repositorio de"
            },
            {
                id: 27,
                question: "Del análisis presentado se desprende que el autor omite considerar cuál de los siguientes",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe detalladamente procesos biogeoquímicos y energéticos (albedo, emisiones de CO2, flujo de calor latente) y utiliza datos satelitales para cuantificar la pérdida forestal, no aborda el componente socio‑económico que impulsa la expansión agrícola, como las políticas de mercado y la demanda internacional de soja. Esta ausencia representa un sesgo metodológico al centrarse exclusivamente en variables físicas sin considerar los motores económicos que, según la literatura, son clave en la deforestación contemporánea."
            },
            {
                id: 28,
                question: "De acuerdo con el texto, ¿qué tipo de evidencia adicional sería necesaria para reforzar el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Se describe cómo la introducción del ganado durante la colonización española generó sobrepastoreo y erosionó el suelo, pero el texto no aporta datos cuantitativos de esa erosión. Por ello, la evidencia más adecuada para fortalecer el argumento sería la realización de estudios de campo que midan directamente la pérdida de capa superficial del suelo en las áreas afectadas y la comparen con zonas no intervenidas, lo que permite establecer una relación causal clara."
            },
            {
                id: 29,
                question: "La lectura del texto permite identificar que el argumento del autor, según el cual la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto presenta explícitamente la ecuación del balance energético Q = Rn - G - H - LE y afirma que la disminución de LE al perderse los bosques eleva H y, en consecuencia, la temperatura del aire (Gómez et al., 2020). Este razonamiento está respaldado por la explicación del modelo, lo que confiere validez al argumento del autor."
            },
            {
                id: 30,
                question: "Considerando lo mencionado en el texto, ¿qué tan válido es el argumento del autor sobre",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El programa Biodiversidad Andina (2020‑2024) ha sembrado 3,5 millones de árboles nativos y junto a los pagos por servicios ambientales, se busca integrar saberes tradicionales para restaurar bosques. Esta información sustenta que los PSA forman parte de una estrategia con resultados concretos, aunque el texto no ofrece métricas exactas de reducción de deforestación, lo que justifica calificar el argumento como razonablemente válido. 17 Educación Digital y la Brecha de Conectividad en Bolivia: Desafíos Actuales y Soluciones Emergentes Resumen El proceso de digitalización de la educación ha cobrado una relevancia sin precedentes tras la pandemia de COVID 19, revelando y ampliando la brecha de conectividad en países en desarrollo. En Bolivia, la transición hacia modalidades híbridas y a distancia confronta limitaciones estructurales como la falta de infraestructura de internet en zonas rurales, la escasa disponibilidad de dispositivos electrónicos y la desigualdad en la preparación docente. Este artículo revisa la evidencia empírica disponible sobre el nivel de acceso a tecnologías de la información y la comunicación (TIC) en el sistema educativo boliviano, analiza los impactos de la brecha digital en el rendimiento académico y la equidad, y discute iniciativas públicas y privadas que buscan mitigar estos problemas. Se presentan datos de organismos internacionales y nacionales que muestran que, a finales de 2023, solo el 42% de los estudiantes de educación primaria y el 58% de los de secundaria tenían acceso regular a una conexión de banda ancha en el hogar. A partir de este diagnóstico, se evalúan propuestas como la expansión de la red de fibra óptica en áreas campesinas, los programas de dispositivos compartidos en centros comunitarios y la capacitación docente en metodologías de aprendizaje en línea. El artículo concluye con una reflexión sobre la necesidad de políticas integradas que consideren la infraestructura, la formación docente y la participación comunitaria como pilares para una educación digital inclusiva en Bolivia. Introducción La educación ha experimentado una transformación acelerada por la emergencia sanitaria global, obligando a los sistemas escolares a adoptar modalidades de enseñanza remota casi de manera instantánea. En contextos con alta penetración de internet, este cambio ha sido más fluido; sin embargo, en Bolivia, donde la geografía montañosa y la dispersión de la población rural dificultan la infraestructura de telecomunicaciones, la digitalización ha puesto de manifiesto una brecha de conectividad que amenaza la igualdad de oportunidades educativas. La brecha digital se define como la diferencia entre quienes pueden acceder 18 y utilizar eficazmente las TIC y quienes no lo pueden, y se traduce en disparidades en el acceso a recursos pedagógicos, interacción docente estudiante y evaluación continua (UNESCO, 2022). Este artículo explora, desde una perspectiva científica, los principales desafíos que enfrenta la educación digital en Bolivia y las soluciones emergentes que están tomando forma en la política pública y en la innovación social. Desarrollo"
            },
            {
                id: 1,
                question: "Según el artículo, ¿cómo se define el concepto de brecha digital?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo establece explícitamente: “La brecha digital se define como la diferencia entre quienes pueden acceder y utilizar eficazmente las TIC y quienes no lo pueden”."
            },
            {
                id: 2,
                question: "A partir de lo expuesto en el artículo, establecer la secuencia correcta de los siguientes",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La tasa de acceso a internet en hogares urbanos es del 71% (INE, 2023); en zonas rurales es del 33% (INE, 2023); el 42% de los estudiantes de educación primaria tenía acceso regular a banda ancha en el hogar a finales de 2023; y el 58% de los estudiantes de secundaria contaba con ese acceso."
            },
            {
                id: 3,
                question: "La lectura del texto permite identificar que, según el artículo, los pilares que deben integrar las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el artículo se afirma que las políticas públicas deben adoptar un enfoque sistémico que considere simultáneamente “la inversión en infraestructura, la formación continua de los docentes y la creación de entornos de aprendizaje colaborativos”, y se menciona además que la participación comunitaria es un pilar esencial."
            },
            {
                id: 4,
                question: "Según el artículo, ¿qué universidad implementó el Programa de Formación Docente en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica explícitamente que “la Universidad Mayor de San Andrés (UMSA) emprendió el Programa de Formación Docente en Tecnologías Educativas (FOTED)” y menciona los resultados alcanzados por esa iniciativa."
            },
            {
                id: 5,
                question: "Considerando lo mencionado en el texto, ¿en qué porcentaje se redujo el costo promedio por",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el apartado de ‘Expansión de infraestructura’ se indica que la alianza pública privada permitió “reducir el costo promedio por kilómetro en un 15% respecto a estimaciones previas” (Ministerio de Obras Públicas, 2023). Las demás opciones presentan porcentajes que no aparecen en el artículo; 10% y 20% son valores cercanos, pero no mencionados, y 25% es una cifra mayor que la indicada, por lo que ninguna de ellas corresponde al dato explícito solicitado. 20 Repositorio de"
            },
            {
                id: 6,
                question: "Del análisis presentado se desprende que la barrera principal para lograr una educación digital",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala tres factores estructurales que perpetúan la brecha digital: (1) la cobertura de fibra óptica alcanza solo el 24% de los municipios, indicando una infraestructura insuficiente (sección 2); (2) el 38% de las escuelas rurales carecen de al menos un computador por cada veinte estudiantes, lo que muestra escasez de dispositivos; y (3) solo el 27% de los docentes de secundaria había recibido capacitación formal en pedagogía digital antes de la pandemia (sección 2). El texto enfatiza que la combinación de estos problemas, no uno solo, es la razón de la limitación de la educación digital."
            },
            {
                id: 7,
                question: "La lectura del texto permite identificar que, para cerrar la brecha de aprendizaje asociada a la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo muestra que la brecha de aprendizaje se debe a una combinación de factores estructurales (infraestructura insuficiente, falta de dispositivos y escasa preparación docente). Los resultados presentados indican que la expansión de fibra óptica y radio enlace (infraestructura), los “bibliotecas digitales” con tablets compartidas (dispositivos) y el Programa FOTED de capacitación docente (confianza y habilidades) han producido mejoras simultáneas en acceso, uso y calidad de la enseñanza. Los autores concluyen que “políticas integradas que consideren la infraestructura, la formación docente y la participación comunitaria” son esenciales para una educación digital inclusiva, lo que confirma que solo la combinación de esas intervenciones puede cerrar efectivamente la brecha."
            },
            {
                id: 9,
                question: "Basándose en la información proporcionada, ¿cuál de las siguientes afirmaciones refleja",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la expansión de la fibra óptica redujo el costo promedio por kilómetro en un 15% (Ministerio de Obras Públicas, 2023) y que los programas de dispositivos compartidos, como la iniciativa de ConectaTi en Tarija, disminuyeron la brecha de dispositivos en un 40% (ConectaTi, 2023). 21"
            },
            {
                id: 10,
                question: "Del análisis presentado se desprende que, respecto a los actores involucrados en la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala que cerrar la brecha digital requiere una combinación de acciones: la expansión de la infraestructura de fibra óptica (Programa Nacional de Conectividad Rural), los programas de dispositivos compartidos como las bibliotecas digitales (ConectaTi) y la participación comunitaria (comités de padres en Potosí). Además, la capacitación docente (Programa FOTED) se menciona como otro pilar esencial. Estas tres dimensiones aparecen en distintos párrafos y su interacción es resaltada como clave para una educación digital inclusiva."
            },
            {
                id: 11,
                question: "Según la lectura, ¿cuál de los siguientes efectos en la educación rural se produce por la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto no menciona explícitamente que la falta de fibra óptica cause deserción escolar, sí indica que la escasa conectividad limita la capacidad de los docentes para usar plataformas de aprendizaje y obliga a los estudiantes a depender de materiales pasivos, lo que “provoca deserción y rezago escolar”. Además, se señala que la cobertura de fibra óptica solo alcanza el 24% de los municipios, concentrándose en zonas urbanas, lo que implica que la mayoría de áreas rurales carecen de esta infraestructura, dificultando la asistencia a clases virtuales y, por ende, incrementando la probabilidad de abandono escolar. Las demás opciones son incorrectas: la mayor participación de los padres se asocia a iniciativas como “Escuelas Conectadas” en Potosí, no a la falta de fibra; la reducción de la brecha de dispositivos se relaciona con programas de dispositivos compartidos, no con la cobertura de fibra; y la mejora en puntajes se vincula a estudiantes con acceso regular a internet, no a la carencia de fibra, por lo que no puede atribuirse a la insuficiente cobertura."
            },
            {
                id: 12,
                question: "Según el artículo, considerando la expansión de la red de fibra óptica en comunidades",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica, que los estudiantes con acceso regular a internet presentan un aumento del 12% en sus puntajes de matemática y lectura. Además, se describe la expansión de fibra óptica y la implementación de radio enlace como medidas destinadas a mejorar la conectividad en áreas rurales. Al combinar ambos datos, es razonable inferir que, al ampliar la cobertura de internet, los estudiantes rurales experimentarán un incremento similar, alrededor del 10%, en sus resultados académicos dentro de un horizonte de tres años."
            },
            {
                id: 13,
                question: "A partir del artículo, al comparar la expansión de fibra óptica y la tecnología de radio enlace",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la cobertura de fibra óptica está concentrada principalmente en Santa Cruz y La Paz, mientras que la tecnología de radio enlace de corto alcance se ha implementado en zonas de difícil acceso, destacando su efectividad en la región del Beni. 22 Repositorio de"
            },
            {
                id: 14,
                question: "Del análisis presentado se desprende que, para reducir la brecha de conectividad en la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca que la expansión de infraestructura (p. “instalar 1 200 km de fibra óptica”), los programas de dispositivos compartidos (p. “bibliotecas digitales” y el caso de Tarija) y la capacitación docente continua (p. “Programa de Formación Docente en Tecnologías Educativas”) se presentan como componentes complementarios para cerrar la brecha digital. Además, en la conclusión se subraya la necesidad de políticas integradas que consideren infraestructura, formación docente y participación comunitaria."
            },
            {
                id: 15,
                question: "De acuerdo con el texto, ¿qué efecto probable tendría la ampliación de la cobertura de fibra",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que los estudiantes con acceso regular a internet obtienen un aumento promedio del 12% en sus puntajes de matemática y lectura. Al ampliar la cobertura de fibra óptica en municipios rurales, se mejora la conectividad en esas zonas, lo que implícitamente permite que más estudiantes dispongan de acceso regular a internet; por lo tanto, es razonable inferir que sus rendimientos académicos experimentarían un incremento similar al mencionado."
            },
            {
                id: 16,
                question: "La lectura del texto permite identificar que el propósito principal de combinar la expansión",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El Programa Nacional de Conectividad Rural (PNCR) busca instalar fibra óptica en comunidades campesinas, los “bibliotecas digitales” y la donación de tablets persiguen reducir la falta de dispositivos, y el programa FOTED de la UMSA procura capacitar a los docentes. Estas tres líneas de acción se describen como estrategias integrales que, según la sección de conclusiones, buscan “cerrar gradualmente esa brecha” y mejorar el rendimiento académico y la equidad entre áreas urbanas y rurales."
            },
            {
                id: 17,
                question: "Según el texto, a partir de los ejemplos de expansión de fibra óptica, programas de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe varias iniciativas (expansión de fibra óptica y radio enlace, bibliotecas digitales, programa FOTED y comités de padres) y concluye que solo mediante políticas integradas que incluyan infraestructura, equipamiento, capacitación y apoyo comunitario se podrá cerrar la brecha digital de manera sostenible."
            },
            {
                id: 18,
                question: "A partir de lo expuesto en el artículo, ¿qué consecuencia social general se puede inferir de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo concluye que una educación digital inclusiva, basada en infraestructura, formación docente 23 y participación comunitaria, no solo mejora los resultados académicos, sino que también potencia la capacidad de los jóvenes bolivianos para participar activamente en la sociedad del conocimiento, lo que refleja una mayor equidad educativa y consecuencias sociales positivas."
            },
            {
                id: 19,
                question: "El artículo señala que, tras la capacitación docente en tecnologías educativas que elevó la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El Programa de Formación Docente en Tecnologías Educativas (FOTED), más de 3 500 docentes reportaron una mejora del 30% en su confianza para usar plataformas de aprendizaje y, como consecuencia, incrementaron la incorporación de actividades interactivas en sus clases (UMSA, 2024). Esta relación de causa efecto es implícita: mayor confianza docente lleva a un uso más activo de recursos interactivos."
            },
            {
                id: 20,
                question: "El artículo señala que la expansión de fibra óptica y los programas de dispositivos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe que las bibliotecas digitales y los proyectos de dispositivos compartidos han provocado mejoras rápidas: ConectaTi redujo la brecha de dispositivos en un 40% y la iniciativa ‘Escuelas Conectadas’ aumentó la frecuencia de uso de recursos digitales en un 55%. Estos datos indican un efecto inmediato en la participación estudiantil. En cambio, la expansión de fibra óptica, aunque esencial, se plantea como un proyecto a mediano plazo (instalar 1 200 km antes de 2025) y no se menciona un aumento rápido en la participación."
            },
            {
                id: 21,
                question: "Basándose en la información proporcionada, ¿qué perspectiva ambiental relevante no ha",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo detalla la falta de infraestructura, la expansión de fibra óptica y el uso de radio enlace, así como programas de dispositivos y capacitación docente, pero no menciona ninguna evaluación de los efectos ecológicos de esas intervenciones, como posibles alteraciones de hábitats, deforestación o consumo energético asociado."
            },
            {
                id: 22,
                question: "El artículo señala que la brecha de conectividad afecta al rendimiento académico y propone",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque el artículo aborda infraestructura, dispositivos y capacitación docente, nunca menciona la inclusión de estudiantes con discapacidades ni la adaptación de las TIC para sus necesidades específicas. Los párrafos que describen los problemas y las soluciones se centran en la geografía, la falta de equipos y la preparación docente, pero omiten cualquier referencia a la accesibilidad universal o a barreras específicas que enfrentan los alumnos con discapacidades. 24 Repositorio de"
            },
            {
                id: 23,
                question: "Si evaluamos el artículo leído, ¿podríamos sostener que la evidencia estadística",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque el artículo incluye datos relevantes (por ejemplo, el 33% de acceso en áreas rurales y el incremento del 12% en puntajes para quienes tienen conexión regular), dichos datos son descriptivos y correlacionales. No se presentan estudios longitudinales, experimentos controlados ni análisis multivariados que permitan aislar el efecto de la conectividad de otras variables como la preparación docente (solo el 27% de los docentes recibió capacitación) o la disponibilidad de dispositivos (38% de escuelas rurales carecen de al menos un computador por cada veinte estudiantes). Por tanto, la evidencia no permite establecer una relación causal directa."
            },
            {
                id: 24,
                question: "A partir de lo expuesto en el artículo, ¿cuáles son las principales implicaciones sociales",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que en 2023 sólo el 33% de los hogares rurales tenían acceso a internet frente al 71% urbano, y que los estudiantes con conexión regular obtuvieron un aumento del 12% en sus puntajes de matemática y lectura. Esta disparidad se traduce en una brecha de aprendizaje que, según la conclusión, amenaza la igualdad de oportunidades y perpetúa desigualdades socio económicas."
            },
            {
                id: 25,
                question: "El artículo señala que la inversión en infraestructura de conectividad digital en zonas rurales",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el apartado de “Panorama de la conectividad y su impacto en el aprendizaje”, el artículo menciona un aumento del 12% en puntajes de matemática y lectura para estudiantes con acceso regular a internet, y en la sección de “Expansión de infraestructura” indica que el costo promedio por kilómetro de fibra óptica se redujo en un 15% respecto a estimaciones previas. Sin embargo, en ningún momento se establece un vínculo causal directo entre esas mejoras y un retorno económico inmediato; ni se presentan indicios de ahorro financiero a nivel macro ni estudios de coste beneficio que sustenten la afirmación. Por ello, el argumento es débil, pues carece de evidencia que respalde la conclusión económica."
            },
            {
                id: 26,
                question: "La lectura del texto permite identificar que el argumento del autor, según el cual la expansión",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo reconoce la expansión de la fibra óptica como una pieza central del Programa Nacional de Conectividad Rural (PNCR) y, al mismo tiempo, menciona que en áreas de difícil acceso se complementa con radio enlace de corto alcance, mostrando una estrategia combinada. Esto respalda la validez del argumento del autor al evidenciar que la solución propuesta no se limita a la fibra óptica aislada, sino que se apoya en un enfoque integral. 25"
            },
            {
                id: 27,
                question: "Basándose en la información proporcionada, ¿cuál de las siguientes afirmaciones refleja",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto concluye que “las políticas públicas adopten un enfoque sistémico que considere simultáneamente la inversión en infraestructura, la formación continua de los docentes y la creación de entornos de aprendizaje colaborativos” y describe soluciones emergentes que incluyen expansión de fibra óptica, bibliotecas digitales y programas de capacitación docente, además de la participación comunitaria (secciones de Soluciones emergentes y Conclusiones)."
            },
            {
                id: 28,
                question: "Considerando lo mencionado en el texto, ¿cómo se podría adaptar la estrategia de bibliotecas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo enfatiza que la reducción eficaz de la brecha digital en Bolivia requiere un enfoque sistémico que incluya (i) expansión de infraestructura de fibra óptica, (ii) programas de dispositivos compartidos como ‘bibliotecas digitales’, (iii) capacitación docente continua y (iv) participación comunitaria. En la sección de Soluciones emergentes se describe cómo la combinación de estos cuatro pilares ha generado resultados positivos tanto en áreas rurales como en proyectos piloto. Por lo tanto, al trasladar la estrategia a un entorno urbano de alta densidad, la solución más adecuada es replicar esa integración, no limitarse solo a la infraestructura, a la capacitación o a la donación individual de equipos."
            },
            {
                id: 29,
                question: "Basándose en la información proporcionada, ¿cuáles son las principales implicaciones",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El gobierno debe evitar la concentración de la fibra óptica en zonas ya conectadas (ATT, 2022) para no ampliar la brecha; los docentes requieren capacitación (FOTED, 2024) para no reproducir desigualdades pedagógicas; la comunidad debe participar en la gestión de centros de dispositivos compartidos (Escuelas Conectadas, Potosí) para evitar dependencia externa; y el sector privado, al suministrar telecomunicaciones y equipos, debe proteger la privacidad de los datos y ofrecer condiciones justas, de lo contrario se profundizaría la brecha digital. 26 Repositorio de"
            },
            {
                id: 1,
                question: "A partir de lo expuesto en el artículo, ¿cómo define el concepto de acceso dial up?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe el acceso dial up a la forma cómo “utilizaban la línea telefónica convencional para conectar a Internet a velocidades de 56 kbps”."
            },
            {
                id: 2,
                question: "Considerando lo mencionado en el texto, ¿cuáles son los sectores que se indican como",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala explícitamente que el acceso generalizado a Internet ha transformado la educación (plataformas de aprendizaje virtual, clases a distancia), ha impulsado el comercio electrónico (tiendas virtuales como ‘Tiendas del Valle’ y Billetera Móvil) y ha mejorado la salud mediante la telemedicina y futuros servicios 5G."
            },
            {
                id: 3,
                question: "A partir de lo expuesto en el artículo, ¿cuáles son las implicaciones económicas asociadas a",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "“Expansión de la banda ancha y fibra óptica (2006 2015)” se indica que el proyecto ‘Red de Información Boliviana’ contó con una inversión estimada de 350 millones de dólares, que los precios de los planes de 10 Mbps se redujeron a aproximadamente 15 dólares mensuales y que la banda ancha favoreció el auge del comercio electrónico, con la aparición de tiendas virtuales locales como ‘Tiendas del Valle’."
            },
            {
                id: 4,
                question: "Basándose en la información proporcionada, ¿cuál es la tercera etapa de la conectividad",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo, enumera tres subetapas cronológicas:"
            },
            {
                id: 5,
                question: "La lectura del texto permite identificar que el orden cronológico de los principales actores",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que primero, en 1995, la Universidad Mayor de San Andrés (UMSA) estableció la primera conexión satelital permanente. Luego, a partir de 2006, el gobierno boliviano lanzó el proyecto ‘Red de Información Boliviana’ (RIB) para instalar fibra óptica. En 2016, la empresa estatal Entel introdujo la red 4G LTE. Finalmente, en 2022, la empresa Viva Bolivia anunció la prueba piloto de 5G."
            },
            {
                id: 6,
                question: "Según el artículo, ¿qué porcentaje de la población boliviana se espera que tenga acceso a",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para finales de 2024, según el artículo, se espera que el 20% de la población tenga acceso a 5G”. Ninguna de las demás cifras (15%, 25% o 30%) aparece en el artículo; esas cifras son distractores plausibles derivados de otros porcentajes mencionados (por ejemplo, 12% de penetración rural en 2015 o 38% de hogares urbanos en 2015), pero no corresponden al dato solicitado sobre la proyección de acceso a 5G en"
            },
            {
                id: 7,
                question: "El artículo señala que la expansión de la fibra óptica y la llegada de 5G han mejorado la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la instalación de fibra óptica (2006-2015) aumentó la cobertura urbana al 60% y redujo precios, y que la implementación de 5G está prevista para zonas estratégicas, pero aun así el artículo señala que en 2023 el 68% de los hogares rurales carecen de acceso fijo. Además, en la sección de desafíos se propone incentivar inversión privada y subsidios como políticas de apoyo para cerrar la brecha."
            },
            {
                id: 8,
                question: "El artículo señala que la diferencia porcentual en la penetración de Internet entre hogares",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En 2003, según el texto, el 5% de los hogares urbanos tenía acceso y menos del 1% de los rurales (aprox. 0,8%), lo que implica una diferencia de unos 4 puntos porcentuales. En 2015, la penetración era del 38% en zonas urbanas y del 12% en rurales, lo que genera una diferencia de 26 puntos. La variación entre ambas fechas es de aproximadamente 22 puntos porcentuales, mostrando un aumento de la brecha."
            },
            {
                id: 9,
                question: "A partir de lo expuesto en el artículo, ¿qué efecto se puede deducir de la implementación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Antes de la fase de expansión de banda ancha, en 2003 solo el 5% de los hogares urbanos tenían acceso a Internet. Tras el lanzamiento del proyecto “Red de Información Boliviana” en 2006, que instaló fibra óptica en los corredores urbanos, la penetración aumentó hasta el 38% en"
            },
            {
                id: 10,
                question: "Considerando lo mencionado en el texto, ¿cuál es el mensaje principal implícito del autor",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección de “Desafíos futuros” y en la propuesta de cierre de la brecha digital, el autor señala explícitamente la necesidad de (i) incentivar la inversión privada mediante subsidios, (ii) promover la capacitación digital en escuelas y comunidades, y (iii) crear un fondo nacional para la expansión de la conectividad en zonas rurales, todo ello bajo una cooperación multisectorial entre gobierno, academia y sector privado. Estas tres líneas de acción aparecen combinadas en el párrafo que propone una combinación de políticas para reducir la brecha."
            },
            {
                id: 11,
                question: "Basándose en la información proporcionada, ¿qué principio general se desprende de las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo, en la sección de propuestas, sugiere combinar subsidios, incentivar la inversión privada y crear un fondo nacional, todo ello dentro de una estrategia de colaboración entre gobierno, academia y sector privado para expandir la conectividad en zonas rurales. 30 Repositorio de"
            },
            {
                id: 12,
                question: "Considerando lo mencionado en el texto, ¿cuál es la idea principal implícita que el autor",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque se ha pasado de un enlace satelital de 64 kbps en 1995 a pruebas piloto de 5G en 2022, la brecha digital sigue siendo marcada: el INE reporta que en 2023 el 68% de los hogares rurales carecen de acceso fijo y la penetración rural de Internet es mucho menor que la urbana. Además, en la sección de desafíos futuros se propone una combinación de subsidios, capacitación y fondos nacionales para cerrar esa brecha, evidenciando la necesidad de políticas integradas y mayor inversión."
            },
            {
                id: 13,
                question: "A partir de lo expuesto en el artículo, ¿cuál es la propuesta central del autor para reducir la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "“Para cerrar la brecha” el autor propone específicamente una combinación de políticas: subsidios a la inversión privada, capacitación digital y un fondo nacional dirigido a zonas rurales. Estas medidas aparecen como la estrategia integral para disminuir la desigualdad de acceso."
            },
            {
                id: 14,
                question: "Basándose en la información proporcionada, ¿qué es probable que ocurra en los próximos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que, al cierre de 2024, se espera que el 20% de la población nacional tenga acceso a 5G, prioritariamente en zonas estratégicas de desarrollo económico, y que en 2023 el 68% de los hogares rurales carecían de acceso fijo a Internet. Además, se proponen políticas de subsidios e inversión en fibra óptica para reducir la brecha digital."
            },
            {
                id: 15,
                question: "De acuerdo con el texto, ¿cuál de las siguientes consecuencias es la más probable como",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que, antes de la expansión de la fibra, en 2003 solo el 5% de los hogares urbanos tenía acceso a Internet (fase dial up). Con el proyecto “Red de Información Boliviana” iniciado en 2006, para 2012 la cobertura de fibra óptica alcanzó el 60% de la población urbana y los precios de los planes de 10 Mbps se redujeron a aproximadamente 15 dólares mensuales. Como consecuencia directa de esta mejora de infraestructura y costo, la penetración en hogares urbanos subió al 38% en"
            },
            {
                id: 16,
                question: "¿Qué puede deducirse del texto respecto a la estrategia de expansión implementada por la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Entel lanzó la red 4G LTE en 2016, proporcionando velocidades comparables a la banda ancha fija y mejorando la infraestructura móvil en áreas urbanas (párrafo"
            },
            {
                id: 17,
                question: "El artículo señala que, considerando los datos estadísticos presentados, ¿cuál es el mensaje",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Pese a avances como la instalación de fibra óptica (cobertura del 60% urbano en 2012) y la prueba piloto de 5G en Puerto Suárez, aún persisten desigualdades: el INE reporta que en 2023 el 68% de los hogares rurales carecen de acceso fijo a Internet y la penetración rural es mucho menor que la urbana. Además, en la sección de desafíos futuros se propone incentivar inversión y crear fondos para cerrar la brecha, lo que evidencia el mensaje implícito de que se necesita política dirigida a la inclusión universal."
            },
            {
                id: 18,
                question: "El artículo señala que, a raíz de la expansión de la fibra óptica y la implementación de redes",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Tras la expansión de la fibra óptica (cobertura del 60% en áreas urbanas para 2012) y la llegada del 4G en 2016, la penetración urbana llegó al 38% en 2015, mientras que en zonas rurales solo alcanzó el 12% (párrafo"
            },
            {
                id: 19,
                question: "Considerando lo mencionado en el texto, ¿cuál es la idea principal implícita respecto a los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe avances tecnológicos (4G, fibra óptica, pruebas de 5G) y sus efectos positivos en educación y salud, pero también señala cifras que revelan una brecha digital persistente (por ejemplo, 68% de hogares rurales sin acceso fijo en 2023) y concluye con propuestas de políticas públicas, subsidios y colaboración entre sector público, privado y académico para cerrar esa brecha."
            },
            {
                id: 20,
                question: "¿Qué puede deducirse de la expansión de la red 5G en zonas estratégicas como Puerto",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la prueba piloto de 5G en Puerto Suárez conecta hospitales y universidades y menciona que la implementación de 5G “abrirá la puerta a la cirugía a distancia y al uso de dispositivos de monitoreo en tiempo real”. De ahí se deduce que la expansión de 5G favorecerá la adopción de servicios de telemedicina avanzados en zonas que antes estaban aisladas."
            },
            {
                id: 21,
                question: "A partir de lo expuesto en el artículo, ¿qué principio general se puede inferir sobre el papel",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La primera conexión en 1995 fue gestionada por la Universidad Mayor de San Andrés con apoyo de la OEA; el proyecto RIB (2006-2015) fue impulsado por el gobierno con financiamiento del BID; la red 4G fue lanzada por la empresa estatal Entel; la prueba piloto de 5G fue anunciada por Viva Bolivia; y en la sección de conclusiones se enfatiza la necesidad de cooperación entre instituciones académicas, gobierno y sector privado para cerrar la brecha digital. 32 Repositorio de"
            },
            {
                id: 22,
                question: "Según el artículo, la estimación de que el 20% de la población boliviana tendrá acceso a 5G",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para finales de 2024, se espera que el 20% de la población tenga acceso a 5G, concentrándose inicialmente en zonas estratégicas como Puerto Suárez donde se realizó la prueba piloto. Además, el texto menciona que la expansión de fibra óptica ya cubre gran parte de las áreas urbanas, lo que permite un despliegue complementario. Sin embargo, también se señala que en 2023 el 68% de los hogares rurales carecen de acceso fijo a Internet, evidenciando una brecha digital que sigue siendo un desafío; por ello la meta del 20% es un paso progresivo, no una cobertura total."
            },
            {
                id: 23,
                question: "El artículo señala que, según el INE, en 2023 el 68% de los hogares rurales carecen de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona el porcentaje del 68% de hogares rurales sin acceso fijo a Internet, pero no discute que muchos de esos hogares podrían estar usando Internet a través de conexiones móviles (3G/4G) que no requieren infraestructura fija. Esta ausencia constituye un sesgo de interpretación: equiparar la ausencia de acceso fijo con la ausencia total de conectividad."
            },
            {
                id: 24,
                question: "El artículo señala que la prueba piloto de 5G en Puerto Suárez conectó hospitales y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe la prueba piloto de 5G en Puerto Suárez que conectó hospitales y universidades con aplicaciones de telemedicina y realidad aumentada, y en la sección de desafíos se menciona la persistente brecha digital entre zonas urbanas y rurales. Evidenciar que 5G puede ofrecer servicios críticos (salud, educación) en zonas de difícil acceso justifica que las políticas públicas consideren la expansión de esta tecnología como una herramienta clave para reducir esa brecha."
            },
            {
                id: 25,
                question: "Del análisis presentado se desprende que la afirmación del autor de que la implementación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que se espera que sólo el 20% de la población tenga acceso a 5G para finales de 2024, concentrado rurales carecen de acceso fijo a Internet en"
            },
            {
                id: 26,
                question: "A partir del análisis presentado respecto a las diferencias de acceso y uso del Internet entre",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe la evolución tecnológica, la expansión urbana rural y los impactos en educación y salud, nunca menciona diferencias de acceso o uso entre hombres y mujeres. No se hace referencia a estudios de género ni a datos desagregados por sexo, lo que indica una omisión del sesgo de género."
            },
            {
                id: 27,
                question: "Basándose en la información proporcionada, ¿cuál de las siguientes afirmaciones describe",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que para finales de 2024 se espera que el 20% de la población tenga acceso a 5G, “especialmente en zonas estratégicas de desarrollo económico” (sección"
            },
            {
                id: 28,
                question: "Basándose en la información proporcionada, ¿cuál de las siguientes perspectivas futuras",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque el autor propone varias medidas para reducir la brecha digital (subsidios a la inversión privada, capacitación digital en escuelas y comunidades, y un fondo nacional para expansión rural), en ningún apartado del artículo se menciona la inclusión explícita de la visión o necesidades de los pueblos indígenas. En la sección 3 se enlistan propuestas de política, pero todas giran en torno a incentivos económicos, capacitación y financiación, sin abordar aspectos culturales ni la participación de comunidades indígenas."
            },
            {
                id: 29,
                question: "Basándose en la información proporcionada, ¿qué combinación de medidas sería la más",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección de ‘Desafíos futuros’ el artículo propone una combinación de políticas: incentivar la inversión privada mediante subsidios, promover la capacitación digital y crear un fondo nacional para la expansión de conectividad en zonas rurales. Estas medidas responden a los datos que indican que, según el INE (2023), el 68% de los hogares rurales carecen de acceso fijo a Internet, y que la brecha permanece significativa pese a la expansión de fibra óptica y 5G en áreas urbanas. 34 Repositorio de"
            },
            {
                id: 30,
                question: "Según el artículo, la estimación de que el 20% de la población boliviana tendrá acceso a 5G",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para finales de 2024, se espera que el 20% de la población tenga acceso a 5G, concentrándose inicialmente en zonas estratégicas como Puerto Suárez donde se realizó la prueba piloto. Además, el texto menciona que la expansión de fibra óptica ya cubre gran parte de las áreas urbanas, lo que permite un despliegue complementario. Sin embargo, también se señala que en 2023 el 68% de los hogares rurales carecen de acceso fijo a Internet, evidenciando una brecha digital que sigue siendo un desafío; por ello la meta del 20% es un paso progresivo, no una cobertura total. 35 Impacto de la digitalización y las redes sociales en la participación política de los jóvenes bolivianos Resumen El presente artículo examina cómo la expansión de la digitalización y el uso masivo de redes sociales están transformando la participación política de los jóvenes entre 17 y 19 años en Bolivia. A partir de datos de la Encuesta Nacional de Jóvenes 2022 y de estudios recientes en América Latina, se analizan tres dimensiones principales: la información política disponible en línea, la movilización a través de plataformas digitales y el surgimiento de nuevas formas de expresión ciudadana como los “hashtags” de protesta. El análisis muestra que, aunque el acceso a dispositivos móviles ha aumentado significativamente (el 89% de los jóvenes bolivianos posee un smartphone), la calidad de la participación política sigue variando según factores como la ubicación geográfica, el nivel educativo y la confianza institucional. Se discuten los riesgos de la desinformación y se proponen medidas de alfabetización digital dirigidas a instituciones educativas y organizaciones de la sociedad civil. El artículo concluye que la digitalización ofrece una oportunidad histórica para revitalizar la democracia, siempre que se acompañe de políticas que promuevan el pensamiento crítico y la inclusión digital. Introducción En los últimos diez años la Bolivia digital ha experimentado una penetración sin precedentes de Internet y de dispositivos móviles. Según el Instituto Nacional de Estadística (INE, 2023), el porcentaje de hogares con acceso a Internet pasó del 34% en 2013 al 71% en"
            },
            {
                id: 1,
                question: "Basándose en la información proporcionada, ¿cuál es la consecuencia social inmediata que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Movilización a través de plataformas digitales” del artículo se indica que el hashtag #ReformaEducativa2022 alcanzó más de 250000 interacciones y que la convocatoria resultó en una marcha en la Plaza Murillo con más de 5000 participantes."
            },
            {
                id: 2,
                question: "De acuerdo con el texto, ¿cuál es la diferencia porcentual entre el porcentaje de jóvenes",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El 76% de los jóvenes de La Paz declara sentirse capaz de distinguir noticias reales, mientras que en Potosí esa cifra es del 54% (párrafo de ‘Acceso a la información política y alfabetización digital’). La diferencia es 76% − 54% = 22 puntos porcentuales."
            },
            {
                id: 3,
                question: "La lectura del texto permite identificar que, según la teoría del “Efecto de Red” citada en el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El segundo mecanismo es la retroalimentación instantánea (likes, retweets) que refuerza la percepción de apoyo social."
            },
            {
                id: 4,
                question: "El artículo señala que, comparando el porcentaje nacional de jóvenes que poseen un",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según el texto, el 89% de los jóvenes bolivianos posee un smartphone (párrafo de Acceso a la información) y que en Potosí solo el 54% se siente capaz de distinguir noticias reales de falsas (tabla de la Encuesta Nacional de Jóvenes, 2022). La diferencia entre ambos porcentajes es 89% - 54% = 35%. Las otras opciones (33%, 41%, 30%) no corresponden a la resta exacta de los valores proporcionados y, por lo tanto, son distractores plausibles pero incorrectos."
            },
            {
                id: 5,
                question: "A consecuencia del análisis presentado, ¿cómo define el artículo el concepto de participación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo define la participación simbólica como “la expresión de opiniones y valores sin necesariamente traducirse en acción concreta” (sección ‘Nuevas formas de expresión y participación simbólica’)."
            },
            {
                id: 6,
                question: "Del análisis presentado se desprende que, según el artículo, ¿cómo se define el concepto de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo define la alfabetización digital como “la capacidad de buscar, evaluar y utilizar la información digital de forma responsable” (UNESCO, 2022). Esta definición aparece explícitamente en la sección 1 del Desarrollo. 38 Repositorio de"
            },
            {
                id: 7,
                question: "Del análisis presentado se desprende que la efectividad de la participación política de los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que, aunque el 89% de los jóvenes posee un smartphone, la alfabetización digital sigue siendo desigual y es clave para evitar la apatía política (sección 1). Además, las conclusiones recomiendan implementar programas de alfabetización digital en todos los niveles escolares para que los jóvenes puedan evaluar críticamente la información y participar de forma efectiva."
            },
            {
                id: 8,
                question: "La lectura del texto permite identificar que, al comparar el proyecto “Voces del Chaco” con la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe que “Voces del Chaco” consiste en una serie de podcasts compartidos en Instagram que generan debates sobre conservación ambiental y justicia social, es decir, una forma de participación simbólica centrada en temas ambientales. En contraste, la campaña #ReformaEducativa2022 se menciona como un caso de movilización digital donde un hashtag en Twitter y TikTok organizó una marcha presencial de más de 5000 personas."
            },
            {
                id: 9,
                question: "Del análisis presentado se desprende que, en comparación con la movilización física derivada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe a “Voces del Chaco” como una serie de podcasts que generan debates y expresan opiniones de forma creativa, es decir, una forma de participación simbólica que no se traduce necesariamente en acciones presenciales, a diferencia del caso del hashtag #ReformaEducativa2022, cuya movilización digital resultó en una marcha con más de 5000 personas."
            },
            {
                id: 10,
                question: "Del análisis presentado se desprende que, debido al bajo costo de la participación digital",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La digitalización permite una movilización rápida y de bajo costo (párrafo de movilización digital) y que, para que el impacto sea positivo, se requieren políticas que fomenten la transparencia y la infraestructura digital (conclusiones). De manera implícita, el bajo costo de participar genera mayor presión de los jóvenes para que el Estado invierta en infraestructura digital, lo cual puede traducirse en beneficios económicos al ampliar el acceso a información y herramientas digitales."
            },
            {
                id: 11,
                question: "Considerando lo mencionado en el texto, ¿cómo se diferencian los efectos de la digitalización",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto, el caso de la UMSA mostró una movilización rápida y masiva con el hashtag #ReformaEducativa2022, alcanzando más de"
            },
            {
                id: 12,
                question: "El artículo señala que, al comparar la movilización a través de plataformas digitales con",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe que la movilización a través de plataformas digitales, como el caso del hashtag #ReformaEducativa2022, llevó a una protesta física con más de 5 000 personas, lo que demuestra una traducción de la actividad en línea a acción colectiva concreta. Por otro lado, en la sección de “Nuevas formas de expresión y participación simbólica” se indica que los memes, videos y podcasts fomentan el sentido de pertenencia y habilidades de comunicación, pero señala que “la medida en que estas actividades se traducen en cambios políticos concretos sigue siendo objeto de investigación”, lo que implica que su consecuencia principal es simbólica más que accionable."
            },
            {
                id: 13,
                question: "Basándose en la información proporcionada, ¿cuál es la conclusión más probable sobre el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que el acceso a Internet en hogares pasó del 34% en 2013 al 71% en 2022 y que el 89% de los jóvenes posee un smartphone, evidenciando una expansión tecnológica importante. Sin embargo, la calidad de la participación varía: en La Paz el 76% de los jóvenes se siente capaz de distinguir noticias reales de falsas, mientras que en Potosí esa cifra es solo 54%. Además, la exposición a “fake news” está asociada a una reducción del 12% en la probabilidad de votar. Estos datos demuestran que, aunque haya más dispositivos y mayor conectividad, la participación política mejora sustancialmente solo donde la alfabetización digital se ha reforzado, lo que lleva a la conclusión de que la expansión digital por sí sola no asegura un aumento generalizado de la participación."
            },
            {
                id: 14,
                question: "A partir de lo expuesto en el artículo, ¿cuál es la perspectiva futura que el autor sugiere para",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección de conclusiones el autor propone tres líneas de acción futuras: (1) programas de alfabetización digital en todos los niveles escolares, (2) políticas públicas que fomenten la transparencia y faciliten la participación online mediante plataformas seguras, y (3) apoyo a iniciativas de contenido juvenil que integren investigación académica con formatos digitales. Estas medidas buscan convertir la digitalización en una herramienta democratizadora."
            },
            {
                id: 15,
                question: "De acuerdo con el texto, ¿qué es probable que ocurra si la producción y difusión de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que el proyecto “Voces del Chaco” ha generado debates entre la comunidad académica y ONG, facilitando la inserción de la perspectiva juvenil en la agenda pública. Por lo tanto, ampliar la producción y difusión de contenidos similares plausiblemente reforzará esa inserción y ejercerá presión para que las instituciones consideren políticas de conservación. 40 Repositorio de"
            },
            {
                id: 16,
                question: "La lectura del texto permite identificar que, al comparar la campaña ReformaEducativa2022",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe que la campaña #ReformaEducativa2022, difundida mediante el hashtag en Twitter y TikTok, logró más de 250 000 interacciones y movilizó a más de 5 000 personas en una marcha, evidenciando una identificación colectiva y acción física. En contraste, el párrafo sobre el Beni señala que grupos rivales usan WhatsApp para difundir mensajes polarizadores que dificultan la construcción de consensos, indicando un efecto de fragmentación y polarización."
            },
            {
                id: 17,
                question: "De acuerdo con el texto, ¿qué principio general se puede extraer sobre la relación entre la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que, aunque el 89% de los jóvenes posee un smartphone y el 68% usa internet cotidianamente, la mera posesión no garantiza participación crítica; la alfabetización digital, definida como la capacidad de buscar, evaluar y usar información digital responsablemente, sigue siendo desigual y se señala como factor clave para que la digitalización no se traduzca en apatía política (sección ‘Acceso a la información política y alfabetización digital’)."
            },
            {
                id: 18,
                question: "La lectura del texto permite identificar que, si se implementan a nivel nacional programas de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala que el 89% de los jóvenes poseía un smartphone, pero la alfabetización digital es desigual (76% en La Paz versus 54% en Potosí) y que la exposición a “fake news” está vinculada a una reducción del 12% en la probabilidad de votar (Rodríguez y Salazar, 2023). Asimismo, se recomienda implementar programas de alfabetización digital para mejorar la capacidad crítica. Por lo tanto, si dichos programas se extienden a nivel nacional, es razonable inferir que la habilidad de distinguir información falsa aumentará, lo que mitigará la caída del 12% en la intención de voto."
            },
            {
                id: 19,
                question: "Según el artículo, ¿qué es probable que ocurra si se implementan programas de alfabetización",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo subraya que la alfabetización digital es clave para que la digitalización no conduzca a apatía política; menciona que la exposición a “fake news” reduce la intención de voto en un 12% y que mejorar la capacidad de evaluar la veracidad de la información debería revertir esa tendencia, incrementando la participación electoral."
            },
            {
                id: 20,
                question: "Basándose en la información proporcionada, ¿qué principio general puede inferirse sobre",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo muestra dos casos específicos: la movilización de estudiantes de la UMSA mediante el hashtag #ReformaEducativa2022, que evidencia la capacidad de los jóvenes para organizar protestas masivas, y el proyecto “Voces del Chaco”, que ilustra la generación de contenido simbólico (podcasts) que inserta sus perspectivas en la agenda pública. Ambos ejemplos confirman que los jóvenes actúan como catalizadores que coordinan acciones colectivas y crean discursos digitales. 41"
            },
            {
                id: 21,
                question: "Basándose en la información proporcionada, ¿qué diferencia económica se puede inferir",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe que el hashtag #ReformaEducativa2022 movilizó a más de 5000 personas y alcanzó 250000 interacciones, lo que evidencia una capacidad de generar participación política concreta; esa participación puede traducirse en una mayor influencia económica de los jóvenes al impactar decisiones de políticas públicas. En contraste, el artículo indica que la exposición a noticias falsas está vinculada a una reducción del 12% en la probabilidad de voto (Rodríguez y Salazar, 2023), lo que implica una menor capacidad de influir económicamente en los procesos electorales."
            },
            {
                id: 22,
                question: "Del análisis presentado se desprende que la principal fortaleza del enfoque metodológico",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo utiliza estadísticas de la Encuesta Nacional de Jóvenes 2022 y del INE (por ejemplo, el 89% de jóvenes con smartphone) junto con casos de estudio concretos como la campaña #ReformaEducativa2022 de la UMSA y el proyecto “Voces del Chaco”. Esta mezcla de fuentes cuantitativas y cualitativas brinda triangulación y contextualiza los resultados."
            },
            {
                id: 23,
                question: "El artículo señala que la digitalización puede revitalizar la democracia boliviana siempre",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección de conclusiones el autor afirma que la digitalización ofrece una oportunidad histórica para revitalizar la democracia, siempre que se acompañe de políticas que promuevan el pensamiento crítico y la alfabetización digital. Además, en el apartado sobre alfabetización digital se muestra que la capacidad de distinguir noticias reales de falsas está vinculada a una mayor intención de participar, lo que respalda la relación entre alfabetización y participación política."
            },
            {
                id: 24,
                question: "De acuerdo con el texto, ¿cuál de las siguientes limitaciones o sesgos no está contemplado",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo reconoce desigualdades en acceso a internet según la ubicación geográfica (párrafos de la introducción y desarrollo, sección 1), las tres líneas de acción propuestas en la conclusión se centran en alfabetización digital, transparencia institucional y apoyo a contenidos juveniles, sin mencionar medidas concretas para ampliar la infraestructura de conectividad en zonas rurales."
            },
            {
                id: 25,
                question: "De acuerdo con el texto, ¿qué tipo de evidencia sería más pertinente para reforzar la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que la alfabetización digital es clave para que la digitalización no genere apatía política, pero la evidencia presentada es mayormente correlacional (por ejemplo, diferencias entre La Paz y Potosí). Para demostrar que los programas de alfabetización incrementan la intención de voto, se requeriría evidencia experimental que controle variables y mida cambios en la intención de voto antes y después de la intervención. 42 Repositorio de"
            },
            {
                id: 26,
                question: "De acuerdo con el texto, ¿por qué es relevante implementar programas de alfabetización",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala que, aunque el 89% de los jóvenes posee smartphone, la alfabetización digital sigue siendo desigual (76% en La Paz vs 54% en Potosí) y que la exposición a noticias falsas reduce en un 12% la probabilidad de voto (Rodríguez y Salazar, 2023). Por lo tanto, programas educativos que desarrollen la capacidad de buscar, evaluar y usar información digital son esenciales para mitigar la desinformación y favorecer una participación política más informada y activa."
            },
            {
                id: 27,
                question: "Considerando lo mencionado en el texto, ¿qué sesgo económico está presente en el enfoque",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que el 89% de los jóvenes posee un smartphone y menciona diferencias geográficas y educativas, no aborda explícitamente cómo la situación socio económica (ingresos familiares, capacidad de pago de planes de datos, etc.) afecta el acceso y la calidad de la participación digital. Esta omisión constituye un sesgo económico, ya que la capacidad de participar críticamente en entornos digitales depende también de recursos financieros que el texto no considera."
            },
            {
                id: 28,
                question: "Del análisis presentado se desprende que, en contraste con la concepción tradicional",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección ‘Nuevas formas de expresión y participación simbólica’ se describe que el proyecto ‘Voces del Chaco’ ha generado debates y ha facilitado la inserción de la perspectiva juvenil en la agenda pública, pero el artículo también señala que la medida en que estas actividades se traduzcan en cambios políticos concretos sigue siendo objeto de investigación."
            },
            {
                id: 29,
                question: "A partir de lo expuesto en el artículo, ¿cuáles son las principales implicaciones éticas y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo subraya que la digitalización solo favorece la participación política si se acompañan políticas de alfabetización digital que incluyan pensamiento crítico, inclusión digital y medidas contra la desinformación (párrafos sobre alfabetización digital y conclusiones). Además, señala la necesidad de reducir la brecha de acceso entre regiones como La Paz y Potosí y de proteger a los jóvenes de la manipulación de información."
            },
            {
                id: 30,
                question: "De acuerdo con el texto, ¿cuáles son las implicaciones éticas más relevantes de la desigualdad",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que en La Paz el 76% de los jóvenes se siente capaz de distinguir noticias reales de falsas, mientras que en Potosí esa cifra cae al 54%. Además, se menciona que la exposición a “fake news” está vinculada a una reducción del 12% en la probabilidad de votar (Rodríguez y Salazar, 2023). Esta combinación indica una vulnerabilidad ética: la falta de alfabetización digital expone a ciertos jóvenes a desinformación, lo que afecta su intención de participar y vulnera el principio de igualdad democrática. 43 Inteligencia artificial en la educación boliviana: oportunidades, retos y perspectivas científicas Resumen El rápido avance de la inteligencia artificial (IA) está transformando la manera en que se concibe la enseñanza y el aprendizaje en todo el mundo. En Bolivia, la incorporación de herramientas basadas en IA –desde tutores virtuales hasta sistemas de analítica de aprendizaje– ofrece la posibilidad de mejorar la calidad educativa, reducir brechas de acceso y personalizar la instrucción. Sin embargo, la adopción de estas tecnologías plantea desafíos técnicos, éticos y estructurales que deben abordarse con evidencia científica. El presente artículo revisa, de forma accesible para estudiantes de bachillerato, los fundamentos neurocientíficos que sustentan la personalización del aprendizaje, describe las principales aplicaciones de IA en entornos escolares bolivianos, y analiza los obstáculos de infraestructura, capacitación docente y privacidad de datos. Se incluyen datos estadísticos oficiales (INE, 2023) y estudios internacionales (UNESCO, 2022) para contextualizar la realidad local. Finalmente, se discuten líneas de investigación y políticas públicas que podrían orientar una integración responsable de la IA en la educación del país. Introducción En los últimos diez años, la IA ha pasado de ser una disciplina de nicho a una herramienta omnipresente en la vida cotidiana. Algoritmos de aprendizaje automático (machine learning) permiten que una computadora reconozca patrones en grandes volúmenes de datos y tome decisiones con mínima intervención humana. En el sector educativo, estas capacidades se traducen en sistemas capaces de diagnosticar dificultades de aprendizaje, recomendar contenidos y adaptar la velocidad de enseñanza a cada estudiante. La pandemia de COVID 19 aceleró la digitalización de la educación en América Latina; según el informe de la UNESCO (2022), el 78% de los países de la región utilizó plataformas en línea para la continuidad pedagógica, lo que generó una mayor exposición a soluciones basadas en IA. Bolivia, con una población estudiantil de más de 2 millones de jóvenes en educación secundaria (INE, 2023), enfrenta retos históricos de desigualdad territorial, limitaciones de infraestructura y escasez de personal docente capacitado. En este contexto, la IA se presenta como una oportunidad para 44 ofrecer recursos educativos de calidad sin necesidad de presencia física constante, pero también como un reto al requerir conectividad, datos confiables y marcos regulatorios claros. El objetivo de este artículo es proporcionar una visión científica y práctica sobre cómo la IA puede transformar la educación boliviana, considerando tanto sus potenciales beneficios como los límites que la realidad local impone. Fundamentos neurocientíficos aprendizaje personalizado del Los hallazgos de la neurociencia cognitiva indican que el cerebro humano aprende de forma más eficaz cuando la información se presenta de manera adaptada a sus propias rutas de procesamiento. Dos conceptos resultan clave: plasticidad sináptica y carga cognitiva. La plasticidad sináptica se refiere a la capacidad de las conexiones entre neuronas (sinapsis) de fortalecerse o debilitarse en respuesta a experiencias repetidas; este proceso es la base biológica del aprendizaje y la memoria (Kandel, 2020). Por otro lado, la teoría de la carga cognitiva sostiene que el rendimiento académico disminuye cuando la información supera la capacidad de procesamiento de la memoria de trabajo del estudiante (Sweller, 2019). Los sistemas de IA que emplean algoritmos de recomendación (similar a los que usan plataformas de streaming) pueden estimar la zona de desarrollo próximo de cada alumno— el rango en el que el estudiante está listo para aprender una nueva habilidad con apoyo apropiado—y ajustar la complejidad de los ejercicios en consecuencia. Cuando la tarea se alinea con la zona de desarrollo próximo, se maximiza la plasticidad sináptica sin saturar la carga cognitiva, lo que, según la investigación neuroeducativa, favorece la retención a largo plazo y la transferencia de conocimientos (Ansari & Coch, 2021). En otras palabras, la IA actúa como un “director de orquesta” que modula el ritmo y la intensidad de la señal educativa para que el cerebro la procesen de forma óptima. Aplicaciones de IA en entornos educativos bolivianos Tutores virtuales y plataformas adaptativas En Bolivia, el Ministerio de Educación ha Texto diseñado con fines evaluativos para medir la comprensión lectora, mediante la reproducción de características propias de textos académicos. Repositorio de"
            },
            {
                id: 1,
                question: "Según el artículo, ¿qué actor es mencionado primero como iniciador de la implementación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo introduce primero al Ministerio de Educación como responsable del programa ‘Bolivia Aprende Digital’ (2022 2025), que incorpora plataformas de IA como Khan Academy y Microsoft Education. Los proyectos de la Universidad Católica Boliviana, la Universidad Autónoma Tomás Frías y la Universidad Mayor de San Andrés se describen posteriormente, por lo que no son los primeros actores mencionados."
            },
            {
                id: 2,
                question: "De acuerdo con el texto, ¿qué organismo proporciona la cifra del 38% de hogares rurales",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según el Instituto Nacional de Estadística (INE, 2023), solo el 38% de los hogares rurales dispone de conexión a Internet de banda ancha. Las demás opciones son incorrectas: el Ministerio de Educación impulsa programas educativos, la UNESCO reporta datos a nivel regional y la UMSA participa en proyectos de realidad aumentada, pero ninguna de ellas es la fuente de la estadística mencionada."
            },
            {
                id: 3,
                question: "Basándose en la información proporcionada, ¿cuál es la segunda consecuencia social que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La falta de competencias técnicas puede generar una dependencia excesiva del algoritmo, sin la capacidad de interpretar los resultados ni de intervenir cuando la IA sugiere una ruta pedagógica inadecuada. Este es el segundo efecto social mencionado después de la ‘ampliación de la desigualdad educativa’ (primera consecuencia). 46 Repositorio de"
            },
            {
                id: 4,
                question: "El artículo señala que los conceptos neurocientíficos clave para la personalización del",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Dos conceptos resultan clave: plasticidad sináptica y carga cognitiva. Las demás opciones combinan términos que aparecen en el texto, pero nunca se presentan juntos como los dos conceptos clave; por ejemplo, “neuroplasticidad” y “memoria de trabajo” son conceptos relacionados, pero no citados como los dos esenciales, y “aprendizaje automático” y “inteligencia emocional” pertenecen a dominios diferentes al de los fundamentos neurocientíficos descritos."
            },
            {
                id: 5,
                question: "De acuerdo con el texto, ¿cuáles son los principales desafíos que se identifican para la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección ‘Desafíos éticos, técnicos y estructurales en Bolivia’ el artículo enumera tres problemas principales: (1) Infraestructura y conectividad, (2) Capacitación docente y (3) Privacidad y sesgo algorítmico. Las demás opciones mezclan conceptos que aparecen en el texto (por ejemplo, privacidad y sesgo) con elementos que no se mencionan como desafíos específicos (como ‘falta de inversión’ o ‘alta tasa de deserción’), por lo que son distractores incorrectos."
            },
            {
                id: 6,
                question: "Según el artículo, ¿qué porcentaje de hogares rurales en Bolivia dispone de conexión a",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que “solo el 38% de los hogares rurales dispone de conexión a Internet de banda ancha”. Las opciones 1, 2 y 3 corresponden a datos diferentes del artículo: 71% es el porcentaje de hogares urbanos con banda ancha, 22% es la proporción de docentes que ha recibido capacitación digital avanzada, y 84% es el porcentaje de estudiantes que reportó mejor comprensión tras usar realidad aumentada. Ninguno de esos valores se refiere a la conectividad de hogares rurales."
            },
            {
                id: 7,
                question: "El artículo señala que solo el 38% de los hogares rurales tiene conexión de banda ancha,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la brecha digital es significativa (38% de hogares rurales con banda ancha versus 71% en urbanos) y que esta disparidad limita la implementación uniforme de plataformas de IA, pudiendo ampliar la desigualdad educativa si no se adopta una estrategia de mitigación. Por lo tanto, la consecuencia lógica es que la desigualdad entre áreas rurales y urbanas se incrementará. Las otras opciones interpretan erróneamente el efecto: la reducción de deserción, el aumento de capacitación docente o la disminución de necesidad de infraestructura no están sustentadas por la información dada y, al contrario, requieren mejoras en conectividad."
            },
            {
                id: 8,
                question: "Según el artículo, ¿cuál es la principal fortaleza del enfoque de tutores virtuales basados en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El estudio piloto de la Universidad Católica Boliviana, el uso de un tutor virtual basado en IA elevó el promedio 47 de calificaciones en matemática de"
            },
            {
                id: 9,
                question: "Considerando lo mencionado en el texto, ¿qué tan válido es el argumento de que la inteligencia",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca tanto las oportunidades de la IA para mejorar la calidad educativa y reducir desigualdades (p. ej., tutores virtuales que compensan la escasez de docentes) como los grandes desafíos estructurales: solo el 38% de los hogares rurales tiene banda ancha y solo el 22% de los docentes ha recibido capacitación en tecnologías emergentes. Estas limitaciones hacen que la reducción de brechas dependa de mejoras en conectividad y formación docente, por lo que el argumento de una reducción automática es solo parcialmente válido. Las opciones 1 y 2 son incorrectas porque exageran o niegan completamente el impacto descrito; el texto no afirma una eliminación total ni una ausencia de efectos sociales."
            },
            {
                id: 10,
                question: "Del análisis presentado se desprende que, respecto a los resultados del estudio piloto con",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que el estudio piloto se realizó con 1 200 estudiantes de segundo de bachillerato de la Universidad Católica Boliviana, mostrando un aumento de calificaciones de"
            },
            {
                id: 11,
                question: "De acuerdo con el texto, ¿cuál de los siguientes aspectos representa una posible limitación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El estudio piloto se realizó en la Universidad Católica Boliviana con 1 200 estudiantes de segundo de bachillerato, sin especificar si incluía a escuelas rurales o de diferentes regiones; por tanto, la muestra es limitada y no representa a todo el sistema educativo boliviano, lo que constituye una posible fuente de sesgo."
            },
            {
                id: 12,
                question: "De acuerdo con el texto, ¿cuál es la principal implicación económica de adoptar inteligencia",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La efectividad de la IA depende de “invertir en redes de banda ancha en zonas rurales” y “diseñar programas de formación continua para docentes” (sección de conclusiones y desafíos). Estas inversiones son presentadas como la principal implicación económica. 48 Repositorio de"
            },
            {
                id: 13,
                question: "Considerando lo mencionado en el texto, ¿cuál de los siguientes sesgos potenciales no se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona explícitamente sesgos derivados de datos urbanos, la brecha de conectividad y la falta de capacitación docente, pero no aborda en ningún pasaje un sesgo de género. En la sección ‘Desafíos éticos, técnicos y estructurales’ se habla de sesgo algorítmico ligado a datos mayormente urbanos y de cómo la falta de infraestructura y de formación docente pueden afectar la equidad, sin mencionar la posible discriminación por género. Las demás opciones describen sesgos que sí son mencionados en el texto."
            },
            {
                id: 14,
                question: "El artículo señala que la IA puede modular la carga cognitiva y la plasticidad sináptica",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los sistemas de IA se basan en los conceptos de plasticidad sináptica y carga cognitiva, permitiendo ajustar la complejidad de los ejercicios a la zona de desarrollo próximo del estudiante; esto, según la investigación neuroeducativa citada, maximiza la plasticidad sináptica sin saturar la carga cognitiva y, por ende, favorece la retención a largo plazo (sección ‘Fundamentos neurocientíficos del aprendizaje personalizado’)."
            },
            {
                id: 15,
                question: "Según el artículo, ¿cuál de los siguientes actores es el más determinante para garantizar",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El Ministerio de Educación lidera el programa ‘Bolivia Aprende Digital’ (2022 2025), propone inversiones en conectividad, diseña programas de capacitación docente y coordina políticas públicas para la protección de datos. Estos roles son descritos como esenciales para una integración responsable, mientras que las empresas, los estudiantes y las organizaciones internacionales juegan papeles complementarios, pero no determinantes."
            },
            {
                id: 16,
                question: "La lectura del texto permite identificar que, para que la IA contribuya de forma efectiva a la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo concluye que la integración responsable de la IA requiere (1) invertir en redes de banda ancha en zonas rurales, (2) diseñar programas de formación continua para docentes y (3) crear políticas de protección de datos que regulen la recopilación y uso de información estudiantil. Estas tres líneas de acción aparecen en la sección de conclusiones y resumen los obstáculos estructurales, de capacitación y éticos que deben abordarse conjuntamente."
            },
            {
                id: 17,
                question: "De acuerdo con el texto, ¿qué consecuencia se puede deducir si se invierte en redes de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La falta de conectividad en hogares rurales (solo 38 % con banda ancha) limita la implementación de plataformas de IA y que invertir en redes de banda ancha es una de las recomendaciones para cerrar la brecha digital y lograr una integración responsable de la IA. 49"
            },
            {
                id: 18,
                question: "Basándose en la información proporcionada, ¿cuál es el propósito económico principal de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La disparidad de conectividad (38% en áreas rurales vs. 71% en urbanas) “limita la implementación uniforme de plataformas basadas en IA y podría ampliar la desigualdad educativa” y recomienda invertir en redes de banda ancha para “evitar ampliar la desigualdad educativa”. Al reducir esa brecha, se fortalece el capital humano y se crea una base para el desarrollo económico a largo plazo."
            },
            {
                id: 19,
                question: "De acuerdo con el texto, ¿qué efecto probable tendría la falta de capacitación docente en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que, al no recibir formación adecuada, “la mayoría de los profesores… no ha recibido formación formal… La falta de competencias técnicas puede generar una dependencia excesiva del algoritmo, sin la capacidad de interpretar los resultados ni de intervenir cuando la IA sugiere una ruta pedagógica inadecuada”. Esa relación causa efecto se infiere del texto."
            },
            {
                id: 20,
                question: "De acuerdo con el texto, ¿cuál es el mensaje principal implícito que el autor comunica",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El autor destaca, mediante los datos del INE (2023), que solo el 38% de los hogares rurales dispone de conexión de banda ancha frente al 71% en áreas urbanas, y señala que esta desigualdad de conectividad limita la implementación uniforme de plataformas basadas en IA y podría ampliar la brecha educativa. Además, en la sección de desafíos se menciona que invertir en infraestructura de internet es esencial para que la IA beneficie a todos los estudiantes."
            },
            {
                id: 21,
                question: "De acuerdo con el texto, ¿qué conclusión lógica se puede extraer sobre los procesos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los algoritmos de recomendación de IA pueden estimar la zona de desarrollo próximo del alumno y adaptar la complejidad de los ejercicios, logrando que la tarea maximice la plasticidad sináptica sin saturar la carga cognitiva (sección ‘Fundamentos neurocientíficos del aprendizaje personalizado’)."
            },
            {
                id: 22,
                question: "Según el artículo, ¿qué se puede concluir acerca del impacto de la personalización basada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El estudio piloto de la Universidad Católica Boliviana (Gómez et al., 2023) con 1 200 estudiantes de segundo de bachillerato, el promedio de calificaciones en matemática pasó de"
            },
            {
                id: 23,
                question: "La lectura del texto permite identificar que la principal diferencia entre los tutores virtuales",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los tutores virtuales, como el piloto de la UCB, mejoraron el promedio de calificaciones y disminuyeron la deserción mediante rutas de estudio personalizadas (sección ‘Tutores virtuales y plataformas adaptativas’). En contraste, la analítica de aprendizaje se describe como un método para recolectar y analizar datos de interacción que permite predecir la probabilidad de deserción y aplicar intervenciones tempranas (sección ‘Analítica de aprendizaje y detección temprana de riesgos’). Por lo tanto, la diferencia radica en la personalización académica frente a la predicción y prevención de la deserción."
            },
            {
                id: 24,
                question: "La lectura del texto permite identificar que la perspectiva futura del autor para la integración",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección de Conclusiones y recomendaciones el autor indica que la efectividad de la IA requiere (1) invertir en redes de banda ancha en zonas rurales, (2) diseñar programas de formación continua para docentes y (3) desarrollar políticas de protección de datos, señalando que la combinación de estos elementos es esencial para lograr un impacto positivo."
            },
            {
                id: 25,
                question: "Del análisis presentado, se desprende que todas las metodologías basadas en IA descritas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "A lo largo del artículo, cada metodología de IA se presenta como medio para adaptar la instrucción al estudiante: el tutor virtual de la UCB mejoró las calificaciones al ofrecer rutas de estudio personalizadas; la analítica de aprendizaje del proyecto Alerta Escolar detectó riesgos temprano para proporcionar apoyos individualizados; y la realidad aumentada del proyecto Química en 3D ajustó la simulación según las respuestas del alumno, facilitando una comprensión personalizada. Estos ejemplos evidencian que la meta común es la personalización del aprendizaje."
            },
            {
                id: 26,
                question: "La lectura del texto permite identificar que, si se amplía el uso de la analítica de aprendizaje",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El proyecto Alerta Escolar en Tarija, donde la analítica de aprendizaje identificó a estudiantes en riesgo y, tras recibir intervenciones personalizadas, el 67% continuó sus estudios. Esa evidencia sugiere que, al replicar el mismo proceso a mayor escala, es razonable predecir una disminución de la tasa de deserción escolar en los colegios que adopten dicha tecnología."
            },
            {
                id: 27,
                question: "De acuerdo con el texto, ¿qué conclusión puede extraerse sobre el papel de la pandemia de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La conclusión correcta se basa en dos pasajes del artículo: la Introducción indica que “la pandemia de COVID 19 aceleró la digitalización de la educación en América Latina; según el informe de la UNESCO (2022), el 78% de los países de la región utilizó plataformas en línea para la continuidad pedagógica”, y la sección de desafíos 51 señala que la infraestructura todavía es limitada, por lo que la adopción de IA depende de esa aceleración digital. Así, se infiere que la pandemia fungió como catalizador que permitió a Bolivia integrar la IA siguiendo la tendencia regional."
            },
            {
                id: 28,
                question: "Según el artículo, ¿qué es probable que ocurra si el gobierno de Bolivia implementa",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La principal limitación para una adopción uniforme de IA es la desigualdad de conectividad (38% de hogares rurales con banda ancha vs. 71% urbanos) y la falta de capacitación docente (solo 22% con alfabetización digital avanzada). En la sección de conclusiones se recomienda invertir en redes de banda ancha rurales y formar a los docentes; al combinar ambas medidas se espera reducir la brecha de acceso a tecnologías basadas en IA y, por ende, mejorar la equidad educativa."
            },
            {
                id: 29,
                question: "A partir de lo expuesto en el artículo, ¿cuál sería la consecuencia probable si un sistema de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo explica que los sistemas de IA deben estimar la zona de desarrollo próximo y ajustar la complejidad de los ejercicios (párrafo ‘Fundamentos neurocientíficos del aprendizaje personalizado’). Cuando la tarea se alinea con esa zona, se maximiza la plasticidad sináptica sin saturar la carga cognitiva, favoreciendo la retención a largo plazo. Por lo tanto, si el sistema no realiza ese ajuste, la carga cognitiva aumentará, lo que según la teoría de Sweller (2019) disminuye el rendimiento y la transferencia de conocimientos."
            },
            {
                id: 30,
                question: "A partir de lo expuesto en el artículo, ¿qué tipo de evidencia adicional sería necesaria para",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la IA puede ayudar a cerrar brechas, pero la evidencia presentada se limita a estudios piloto y datos puntuales (p. ej., mejora en matemática de una escuela, reducción de deserción en Tarija). Para validar que esas mejoras se traducen en una reducción de brechas sociales a nivel nacional, se requerirían estudios longitudinales que midan, a lo largo del tiempo, cómo cambian desempeño y deserción en poblaciones rurales y urbanas antes y después de la adopción de la IA 52 Repositorio de"
            },
            {
                id: 1,
                question: "La lectura del texto permite identificar que el artículo define el concepto de “vector” como:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La definición correcta se encuentra en la Introducción del artículo, donde se indica: “vectores —organismos que transmiten patógenos a los humanos—”."
            },
            {
                id: 2,
                question: "Según el artículo, ¿cuáles son los problemas climáticos identificados que favorecen el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección ‘Cambio climático y manifestaciones locales’ del artículo se enumeran tres problemas climáticos que inciden directamente en la proliferación de vectores: (i) el aumento de la temperatura media anual (0,6 °C entre 2000 y 2022); (ii) la variabilidad y los extremos de precipitación, con lluvias intensas e inundaciones que generan criaderos temporales; y (iii) la elevación del nivel de los lagos andinos, como el Titicaca, que crea nuevos hábitats de mosquitos. Estas tres condiciones aparecen textualmente y están vinculadas al incremento de enfermedades."
            },
            {
                id: 3,
                question: "La lectura del texto permite identificar que la medida adoptada en la ciudad de Santa Cruz,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el apartado ‘Planeación urbana resiliente’ se indica que la iniciativa “Ciudades Verdes” en Santa Cruz, que incorpora techos verdes y superficies permeables, redujo en un 30% la densidad de larvas de Aedes en barrios piloto. 55"
            },
            {
                id: 4,
                question: "De acuerdo al artículo, ¿qué enfermedades transmitidas por vectores han aumentado en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo reporta incrementos claros en la incidencia de tres enfermedades transmitidas por vectores: dengue (62 000 casos confirmados en 2023, aumento respecto a la década anterior), malaria (aumento del 28% de casos autóctonos entre 2015 y 2022) y enfermedad de Chagas (expansión de triatominos y mayor contacto humano en regiones rurales). Estas tres se describen específicamente en la sección ‘Vectores y enfermedades emergentes en Bolivia’."
            },
            {
                id: 5,
                question: "La lectura del texto permite identificar que las implicaciones económicas que se mencionan",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La mitigación y adaptación sostenible conlleva beneficios económicos: (1) la reducción de la incidencia de dengue, malaria y Chagas implica menores gastos en atención sanitaria; (2) la transición a fuentes de energía limpias mejora la seguridad energética y permite la operación continua de refrigeración para vacunas, como se indica en la sección de políticas de reducción de emisiones; (3) los sistemas de tratamiento de aguas residuales basados en humedales construidos capturan carbono y favorecen la biodiversidad, lo que genera ahorro en servicios ecosistémicos; y (4) la iniciativa “Ciudades Verdes” reduce la huella de carbono urbana y mejora la calidad del aire, lo que se traduce en menores costos asociados a la contaminación."
            },
            {
                id: 6,
                question: "Considerando lo mencionado en el texto, ¿qué conclusión se puede extraer sobre el papel",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La gestión del agua y saneamiento se lleva a cabo mediante programas del Gobierno en colaboración con la Agencia Alemana de Cooperación Internacional (GIZ), que la educación y la participación comunitaria a través de radio y líderes locales mejoran la eliminación de criaderos, y que la planificación urbana resiliente – una política pública – complementa estas acciones. Esta interdependencia de gobierno, organismos internacionales y comunidad local se describe como esencial para reducir la vulnerabilidad a largo plazo."
            },
            {
                id: 7,
                question: "Basándose en la información proporcionada, ¿qué es probable que ocurra en los próximos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El aumento de la temperatura y la variabilidad de precipitaciones favorecen la reproducción acelerada de Aedes aegypti y que la falta de gestión del agua crea recipientes descubiertos que funcionan como criaderos perfectos, especialmente en ciudades de los valles como Santa Cruz, El Alto y Cochabamba. Además, se señala que la expansión urbana desordenada y el almacenamiento de agua sin tapa impulsan la endemicidad del dengue. Por el contrario, la malaria, aunque también se ve favorecida por temperaturas más altas, sigue concentrándose en zonas amazónicas y su expansión urbana es menos pronunciada; la enfermedad de Chagas está vinculada a triatominos rurales, no a la gestión del agua urbana. Por lo tanto, sin medidas de gestión integral del agua, es más probable que el dengue experimente un aumento notable y sobresalga frente a la malaria en los valles. 56 Repositorio de"
            },
            {
                id: 8,
                question: "Basándose en la información proporcionada, ¿cuál de los siguientes efectos es más probable",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la iniciativa “Ciudades Verdes” en Santa Cruz logró una reducción del 30% en la densidad de larvas de Aedes al disminuir la acumulación de agua estancada mediante techos verdes y superficies permeables. Implícitamente, al bajar la densidad larvaria se espera una menor transmisión del dengue, aunque el texto no lo menciona explícitamente."
            },
            {
                id: 9,
                question: "A partir de lo expuesto en el artículo, ¿qué consecuencia se puede deducir del aumento de la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El incremento de la temperatura media (0,6 °C entre 2000 y 2022) extiende el periodo de transmisión del Anopheles y que la malaria ha aumentado un 28% entre 2015 y 2022, registrándose también en zonas previamente libres como el Chapare. Esta combinación de factores climáticos sugiere que áreas de bajo riesgo verán más casos de malaria."
            },
            {
                id: 10,
                question: "El artículo señala que el uso de herramientas de modelado climático y ecológico permite",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección ‘Monitoreo ecológico y modelado predictivo’ indica que los modelos basados en temperatura, humedad y uso del suelo pueden predecir áreas de alto riesgo con varios meses de antelación, facilitando la asignación de recursos y la planificación de campañas de control vectorial. Por lo tanto, al expandir su uso a nivel nacional, se espera una respuesta más temprana y focalizada, lo que consecuentemente debería disminuir la incidencia de enfermedades como dengue y malaria en esas áreas."
            },
            {
                id: 11,
                question: "Según el artículo, ¿qué conclusión se puede extraer respecto al papel de los diferentes",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La gestión integral del agua se está implementando por el Gobierno de Bolivia en colaboración con la Agencia Alemana de Cooperación Internacional (GIZ), y que la educación comunitaria y la participación ciudadana son esenciales para la prevención de criaderos. Además, se destaca la necesidad de coordinación entre políticas públicas, actores internacionales y líderes locales para lograr una mitigación sostenible."
            },
            {
                id: 12,
                question: "La lectura del texto permite identificar que la intensificación de la planificación urbana",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección ‘Planeación urbana resiliente’ se indica que la iniciativa de techos verdes y superficies permeables disminuyó en un 30% la densidad de larvas de Aedes en barrios piloto, lo que implica una reducción directa del riesgo de transmisión de dengue. Esta relación causa efecto no se expresa explícitamente como “reducirá el dengue”, pero se deduce al combinar la información sobre la reducción de larvas con el papel de Aedes aegypti como vector del dengue. 57"
            },
            {
                id: 13,
                question: "Considerando lo mencionado en el texto, ¿cuál es la conclusión lógica sobre el papel de las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La transición a fuentes limpias “no solo disminuye la temperatura global, sino que también mejora la seguridad energética, permitiendo la operación continua de sistemas de refrigeración para vacunas y pruebas diagnósticas” (Sección de Políticas de reducción de emisiones y adaptación). Esta doble ventaja (mitigación del cambio climático y garantía de energía para servicios de salud) implica que, a largo plazo, la vulnerabilidad a enfermedades vectoriales se reducirá."
            },
            {
                id: 14,
                question: "El artículo señala que, para enfrentar el aumento de enfermedades transmitidas por vectores",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo subraya la necesidad de estrategias sostenibles que combinan gestión del agua, planificación urbana, educación comunitaria y cooperación con organismos como GIZ, indicando que la mitigación requiere la acción conjunta de autoridades sanitarias, municipales, comunidades locales y socios internacionales. Asimismo, en la conclusión se enfatiza que “un enfoque interdisciplinario que combine salud, medio ambiente y desarrollo socioeconómico será fundamental”, lo que implica la participación de múltiples actores."
            },
            {
                id: 15,
                question: "Del análisis presentado se desprende que la relación entre el cambio climático y las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La combinación de condiciones socioeconómicas vulnerables, urbanizaciones rápidas y falta de infraestructura sanitaria favorece la propagación de enfermedades transmitidas por vectores, y que estas dinámicas agravan la exposición de poblaciones de bajos recursos (p. /23). Además, en la sección de consecuencias sociales se menciona que la mayor incidencia de dengue, malaria y Chagas incrementa la vulnerabilidad de comunidades rurales y periurbanas, reflejando una ampliación de las desigualdades en salud."
            },
            {
                id: 16,
                question: "Según el artículo, ¿cuál es la consecuencia social implícita más importante derivada del",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El cambio climático aumenta la vulnerabilidad de comunidades pobres y que, para reducir esa vulnerabilidad, se requieren estrategias interdisciplinarias que integren salud, gestión del agua, planificación urbana y desarrollo socioeconómico (p. Conclusiones; sección de Estrategias sostenibles)."
            },
            {
                id: 17,
                question: "Según el artículo, ¿cuál de las siguientes afirmaciones describe mejor la diferencia en cómo",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El desarrollo biológico de Aedes aegypti se duplica al pasar de 20 °C a 28 °C, lo que implica una aceleración significativa del ciclo vectorial del dengue. En contraste, para el Anopheles se menciona que el periodo de transmisión se extiende, permitiendo que la malaria persista más allá de la temporada lluviosa tradicional. 58 Repositorio de"
            },
            {
                id: 18,
                question: "A partir de lo expuesto en el artículo, ¿cuál de las siguientes conclusiones se puede inferir",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La gestión integral del agua y saneamiento reduce criaderos de mosquitos, la planificación urbana resiliente disminuye la acumulación de agua estancada (ej. reducción del 30% de larvas en Santa Cruz), la educación comunitaria mejora la eliminación de criaderos y el modelado predictivo permite anticipar áreas de alto riesgo. La combinación de estos cuatro componentes se presenta como una solución integral y sostenible, y el texto concluye que la interdisciplinariedad entre salud, medio ambiente y desarrollo socioeconómico es fundamental."
            },
            {
                id: 19,
                question: "El artículo señala que, al considerar las estrategias de mitigación y adaptación propuestas,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La transición a fuentes limpias de energía “no solo disminuye la temperatura global, sino que también mejora la seguridad energética, permitiendo la operación continua de sistemas de refrigeración para vacunas y pruebas diagnósticas” (Sección de Políticas de reducción de emisiones y adaptación). Esta mejora en la cadena de frío reduce pérdidas de vacunas y, combinada con la menor incidencia de enfermedades transmitidas por vectores derivada de otras estrategias sostenibles, implica una disminución de los gastos en salud pública a mediano plazo."
            },
            {
                id: 20,
                question: "Según el artículo, ¿qué es probable que ocurra si se amplía la implementación de sistemas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la a falta de agua potable y el almacenamiento en recipientes descubiertos generan criaderos de Aedes aegypti, y que la instalación de sistemas de captación con cubiertas selladas reduce esos criaderos, disminuyendo la incidencia de dengue. En la sección de gestión integral del agua se menciona que esta intervención es una de las más efectivas para controlar la proliferación de mosquitos."
            },
            {
                id: 21,
                question: "El artículo señala que la integración de la gestión del agua, la planificación urbana y la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección ‘Educación comunitaria y participación ciudadana’ se indica que “La participación activa de líderes comunitarios y organizaciones no gubernamentales (ONG) crea redes de vigilancia que reportan focos de transmisión en tiempo real” y que estas iniciativas “han mostrado una mayor adherencia a medidas de eliminación de criaderos”. Este pasaje evidencia que la participación comunitaria no solo mejora la efectividad de la intervención, sino que también respeta y valora los conocimientos y prácticas locales, cumpliendo con un principio ético de no imposición de soluciones externas. 59"
            },
            {
                id: 22,
                question: "De acuerdo con el texto, ¿cuál de las siguientes opciones describe mejor una implicación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los humedales construidos, además de tratar aguas residuales, capturan carbono y mejoran la biodiversidad, lo que se interpreta como una acción de justicia ambiental que favorece a comunidades vulnerables al reducir criaderos de mosquitos (sección ‘Gestión integral del agua y saneamiento’)."
            },
            {
                id: 23,
                question: "¿Cuál es el sesgo que el artículo permite identificar a partir del análisis de los resultados",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El aumento de la temperatura media y la variabilidad de precipitaciones favorecen la expansión de vectores (secciones ‘Incremento de la temperatura media’ y ‘Variabilidad y extremos de precipitación’), pero la discusión de factores socioeconómicos se limita a mencionar vulnerabilidades generales sin analizarlos como determinantes independientes de la incidencia de dengue, malaria y Chagas. Esta priorización de variables climáticas frente a determinantes sociales indica un sesgo de enfoque."
            },
            {
                id: 24,
                question: "Según el artículo, ¿qué conclusión sintetiza mejor la relación entre el aumento de la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El aumento de 0,6 °C en la temperatura media acelera el desarrollo de Aedes aegypti y extiende el periodo de transmisión de Anopheles (sección ‘Incremento de la temperatura media’), y la mayor frecuencia de lluvias intensas produce criaderos temporales que incrementan la incidencia de dengue en un 45% (sección ‘Variabilidad y extremos de precipitación’). Estos factores combinados explican el crecimiento tanto del dengue (62000 casos en 2023) como de la malaria (aumento del 28% en casos autóctonos entre 2015-2022)."
            },
            {
                id: 25,
                question: "¿Es válida la afirmación efectuada por el autor, de que la gestión integral del agua es más",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque el artículo describe beneficios de ambas estrategias, solo brinda datos cuantitativos sobre la planificación urbana (reducción del 30% en la densidad de larvas de Aedes en barrios piloto) y no ofrece cifras que comparen directamente la efectividad de la gestión integral del agua en la reducción de casos de dengue. Por lo tanto, la afirmación de que la gestión del agua es más efectiva carece de evidencia comparativa y no puede considerarse válida."
            },
            {
                id: 26,
                question: "Según el artículo, ¿qué tipo de evidencia adicional resultaría más pertinente para reforzar",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca la necesidad de monitoreo ecológico y de evaluar el impacto de las intervenciones (p. ej., gestión del agua, planeación urbana) para determinar su efectividad en la reducción de dengue y malaria. Un 60 Repositorio de"
            },
            {
                id: 27,
                question: "El artículo señala que, para mitigar los efectos del cambio climático, se proponen",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Es importante la participación comunitaria como pieza clave para una respuesta eficaz y equitativa: en la sección ‘Educación comunitaria y participación ciudadana’ se menciona que “la participación de líderes comunitarios y organizaciones no gubernamentales crea redes de vigilancia que reportan focos de transmisión en tiempo real” y en ‘Gestión integral del agua y saneamiento’ se indica que la instalación de sistemas de captación debe acompañarse de prácticas locales. Estas menciones subrayan que involucrar a las comunidades garantiza que los beneficios de las intervenciones lleguen a los grupos vulnerables y evita que las medidas refuercen desigualdades."
            },
            {
                id: 28,
                question: "El artículo señala que la elevación del nivel del lago Titicaca ha generado nuevos hábitats de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La subida del nivel del lago Titicaca crea nuevos hábitats de mosquitos, lo que aumenta el riesgo de enfermedades transmitidas por vectores. Al mismo tiempo, la sección ‘Gestión integral del agua y saneamiento’ muestra que una intervención eficaz debe incluir el suministro de agua potable y el control de criaderos, por lo que la información sobre esos nuevos hábitats es fundamental para que los planes de gestión del agua incorporen medidas de control vectorial y saneamiento."
            },
            {
                id: 29,
                question: "Del análisis presentado se desprende que, entre los diferentes actores involucrados en la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La implementación eficaz de estrategias sostenibles requiere una coordinación interministerial liderada por el Gobierno de Bolivia, complementada con alianzas internacionales (p. ej., GIZ) y la integración de sectores como agua, urbanismo y salud. Aunque ONG, comunidades y académicos son actores relevantes, el texto destaca que solo el gobierno puede articular políticas de largo plazo y asignar recursos a gran escala, mientras los demás actúan como apoyos o socios."
            },
            {
                id: 30,
                question: "A diferencia de la creencia general de que la falta de salida al mar protege a Bolivia de los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Bolivia, pese a ser un país sin salida al mar, la elevación de los niveles de los lagos andinos (p. ej., el Titicaca) ha modificado los márgenes costeros, creando nuevos hábitats propicios para mosquitos y aumentando la exposición de comunidades ribereñas. 61 Economía circular y gestión de residuos en Bolivia Resumen El presente artículo examina la viabilidad y el impacto de la economía circular como modelo para la gestión de residuos sólidos en Bolivia. Se describen los conceptos básicos de la economía circular, se presentan los datos más recientes sobre generación y manejo de residuos en el país, y se analizan los desafíos institucionales, tecnológicos y sociales que limitan su implementación. A través de ejemplos concretos, como los programas de reciclaje de PET en Santa Cruz y la reutilización de residuos agrícolas en el Altiplano, se evidencia cómo la integración de políticas públicas, innovación tecnológica y participación comunitaria puede reducir la huella ambiental y generar oportunidades económicas para micro empresas. Se concluye que, aunque la transición hacia una economía circular enfrenta barreras estructurales, la adopción de indicadores de desempeño y la creación de incentivos financieros son pasos clave para transformar los residuos en recursos valiosos. Introducción En los últimos años, la creciente presión sobre los recursos naturales y la acumulación de residuos en los entornos urbanos ha impulsado la búsqueda de alternativas sostenibles. La economía circular surge como un paradigma que pretende cerrar los ciclos de materiales, evitando la extracción continua de recursos y minimizando la generación de desechos. A diferencia del modelo lineal extraerproducir-desechar, la economía circular promueve la reducción, reutilización, reciclaje y recuperación de materiales en un proceso continuo. Para Bolivia, país con una diversidad geográfica que va desde los valles tropicales hasta el Altiplano, la gestión de residuos presenta retos particulares: alta generación de residuos orgánicos en áreas rurales, escasa infraestructura de reciclaje en ciudades medianas y una normativa que aún se encuentra en fase de consolidación. Sin embargo, la economía circular ofrece una vía para convertir estos desafíos en oportunidades económicas, especialmente para los jóvenes emprendedores y pequeñas empresas que buscan innovar en el sector de los servicios ambientales. 62 Este artículo aborda, de forma rigurosa pero accesible, los fundamentos científicos de la economía circular, la situación actual de los residuos en Bolivia y los principales factores que pueden favorecer o limitar su adopción. Se sustenta en datos oficiales y literatura reciente, con el objetivo de proporcionar a los lectores una base para el análisis crítico de políticas públicas y proyectos de innovación. Desarrollo"
            },
            {
                id: 1,
                question: "A partir de lo expuesto en el artículo, ¿cómo define el texto a los instrumentos financieros",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para estimular iniciativas circulares, se deben diseñar “instrumentos financieros como fondos de garantía, líneas de crédito verde y esquemas de pago por servicios ambientales”. Estos tres componentes aparecen literalmente en el texto y se describen como medios para reducir el riesgo de inversión y favorecer la adopción de tecnologías limpias. Las otras opciones no aparecen en el artículo: los subsidios directos, los micro bonos y los incentivos fiscales mencionados son conceptos diferentes o no están descritos como instrumentos financieros en el documento."
            },
            {
                id: 2,
                question: "Según el artículo, ¿cómo define la economía circular y qué consecuencias sociales se asocian",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo define la economía circular como un paradigma que “cierra los ciclos de materiales, evitando la extracción continua de recursos y minimizando la generación de desechos” y menciona que su implementación “puede transformar los residuos en oportunidades económicas para micro empresas y jóvenes emprendedores, mejorando la calidad de vida de las comunidades”."
            },
            {
                id: 3,
                question: "Del análisis presentado se desprende que, de acuerdo al artículo, ¿qué metodología de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La reciclación mecánica de plásticos (trituración, lavado y extrusión) es la alternativa más viable a nivel local, pues requiere inversiones moderadas y puede adaptarse a pequeñas empresas. Las demás opciones, aunque mencionadas en el texto, no se describen como la alternativa más viable para el reciclaje de plásticos: la reciclación química no se discute; la valorización energética se refiere a residuos orgánicos, no a plásticos; y la digestión anaeróbica se menciona como método para residuos orgánicos, no como método de reciclaje de plásticos. 64 Repositorio de"
            },
            {
                id: 4,
                question: "A partir de lo expuesto en el artículo, ¿cuál es la implicación económica directa que se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El apartado de ‘Incentivos económicos y modelos de negocio’ el artículo indica que la empresa ReciclArte, al comprar PET y vender material reciclado, generó ingresos de 22000 USD en"
            },
            {
                id: 5,
                question: "El artículo señala que el proyecto piloto de digestores anaeróbicos en Cochabamba generó,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección"
            },
            {
                id: 6,
                question: "Basándose en la información proporcionada, ¿cuál es la característica que diferencia la tasa",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que en Santa Cruz la tasa de reciclaje de PET es apenas el 8% (sección 2, datos de UMSA 2023) y que, a nivel nacional, solo el 12% de los residuos sólidos urbanos fue recolectado formalmente (sección 2, datos del INE 2022). Por lo tanto, la afirmación correcta es que la tasa de reciclaje de PET en Santa Cruz (8%) es inferior a la tasa de recolección formal nacional (12%)."
            },
            {
                id: 7,
                question: "Basándose en la información proporcionada, ¿cuál es el objetivo principal que persiguen",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que los programas educativos de ONG como EcoBol “lograron aumentar la tasa de separación de papel y cartón del 3% al 18% en tan solo dos años, evidenciando el potencial de la educación informal y la incentivación mediante micro bonos”. El propósito explícito de esos micro bonos es ofrecer un estímulo económico que motive a la población a separar los materiales, lo que a su vez favorece la participación ciudadana y sienta las bases para una economía circular."
            },
            {
                id: 8,
                question: "De acuerdo con el texto, ¿qué consecuencia se puede deducir si el Estado fortalece la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la baja tasa de reciclaje de PET en Santa Cruz (solo 8%) se debe en parte a la ausencia de incentivos financieros para los emprendedores. Se menciona que iniciativas como ReciclArte funcionan al comprar PET y venden material reciclado, y que se requieren instrumentos como fondos de garantía y microcréditos para ampliar estas actividades. Si el Estado crea dichos fondos, se esperaría que más micro empresas de reciclaje puedan operar formalmente, aumentando la recolección de PET, lo que elevaría la tasa de reciclaje (R) y reduciría la fracción que actualmente se deposita en vertederos o ríos. 65"
            },
            {
                id: 9,
                question: "Basándose en la información proporcionada, ¿qué efecto indirecto es probable que genere",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que los digestores anaeróbicos generan biogás (0,45 m³ de metano por kilogramo de residuos orgánicos) suficiente para cubrir el consumo energético de una familia, lo que implica ingresos potenciales para micro empresas que operen dichos sistemas (sección"
            },
            {
                id: 10,
                question: "A partir de lo expuesto en el artículo, ¿qué conclusión general puede inferirse sobre la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Soloo el 12% de los residuos sólidos urbanos se recolecta formalmente, mientras que el 55% corresponde a residuos orgánicos y solo el 8% del PET se recicla en Santa Cruz. Además, se señala que la segregación y la disponibilidad de residuos en condiciones de calidad son factores críticos para la eficiencia del reciclaje (R). Por lo tanto, una mayor cobertura de recolección formal implicaría que un mayor volumen de residuos estaría correctamente segregado y disponible para los procesos de reciclaje y valorización, lo que aumentaría el valor de R."
            },
            {
                id: 11,
                question: "De acuerdo con el texto, ¿qué efecto probable tendría en la eficiencia del reciclaje (R) la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe que los programas educativos de ONG como EcoBol lograron elevar la tasa de separación de papel y cartón del 3% al 18% en dos años, evidenciando que la educación mejora la segregación de residuos. Una mejor segregación reduce la contaminación de los flujos reciclables, lo que, según la definición de eficiencia de reciclaje R = (Mrec / Mtotal) × 100%, permite que una mayor masa de material sea realmente reciclada, incrementando así el valor de R."
            },
            {
                id: 12,
                question: "De acuerdo con el texto, ¿cuál es la idea central que el autor comunica respecto al papel de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El autor enfatiza repetidamente que la transición hacia una economía circular depende de la integración de políticas públicas, innovación tecnológica y participación comunitaria, lo que permitirá transformar los residuos en recursos valiosos y crear oportunidades económicas para micro empresas (ver secciones de “Desarrollo” y “Conclusiones”)."
            },
            {
                id: 13,
                question: "Considerando lo mencionado en el texto, ¿qué diferencia esencial se puede establecer entre",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la Ley 164 de Gestión Integral de Residuos Sólidos (2014) constituye el marco normativo del 66 Repositorio de"
            },
            {
                id: 14,
                question: "El artículo señala que, para que Bolivia logre una transición efectiva hacia la economía",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El autor, a lo largo del artículo, enfatiza que la viabilidad de la economía circular en Bolivia depende de la interacción entre tres ejes: políticas públicas (p. ej., la Ley 164, indicadores de desempeño), tecnologías apropiadas (reciclado mecánico, digestores anaeróbicos) y la participación social (programas de educación, micro bonos). En la conclusión se indica que “la combinación de políticas públicas claras, tecnología apropiada y participación comunitaria puede elevar significativamente la eficiencia del reciclaje (R)”."
            },
            {
                id: 16,
                question: "Del análisis presentado se desprende que la tendencia dominante en la gestión de residuos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo enfatiza, tanto en la introducción como en las conclusiones, que la transición hacia una economía circular depende de la interacción entre políticas públicas, innovación tecnológica y la participación comunitaria, y que la efectividad de este proceso se potenciará mediante indicadores de desempeño (tasa de reciclaje R) y mecanismos financieros de incentivo. Por ejemplo, en la sección de “Desafíos y oportunidades” se menciona que la combinación de políticas claras, tecnologías apropiadas y educación ambiental permite elevar la eficiencia del reciclaje y generar oportunidades económicas."
            },
            {
                id: 17,
                question: "De acuerdo con el texto, ¿qué consecuencia puede inferirse si la tasa de segregación de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la valorización energética mediante digestores anaeróbicos produce 0,45 m³ de metano por kilogramo de residuos orgánicos, suficiente para cubrir el consumo de una familia promedio durante un mes. Una mejora en la segregación en origen implica que una mayor proporción de residuos orgánicos llega al digestor en buen estado, aumentando la masa total de materia prima disponible. Como la relación de producción de metano es lineal respecto a la masa alimentada (0,45 m³ / kg), al incrementarse la cantidad de residuos orgánicos capturados se generará más metano, lo que permite abastecer a más hogares. 67"
            },
            {
                id: 18,
                question: "Según el artículo, ¿cuál es el mensaje principal implícito que el autor comunica respecto a",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo, en sus conclusiones y desarrollo, enfatiza repetidamente que la transición hacia una economía circular requiere “políticas públicas claras, tecnología apropiada y participación comunitaria” (párrafo de conclusiones) y menciona que esa combinación “puede reducir la huella ecológica y generar oportunidades económicas para micro empresas”. Esta visión integradora es el mensaje implícito central."
            },
            {
                id: 19,
                question: "De acuerdo con el texto, ¿qué efecto se puede deducir que tendría la ampliación de los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que la separación de residuos en origen depende del nivel de conciencia ciudadana y que programas educativos han aumentado la tasa de separación (p."
            },
            {
                id: 20,
                question: "Considerando lo mencionado en el texto, ¿cuál de las siguientes comparaciones entre dos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que, para impulsar la economía circular, se requieren ‘instrumentos financieros como fondos de garantía, líneas de crédito verde y esquemas de pago por servicios ambientales’ que reducen el riesgo de inversión y facilitan la adopción de tecnologías limpias. Estos recursos permiten a micro empresas comprar equipos y operar procesos de reciclaje de forma inmediata, lo que afecta directamente la razón R. En contraste, el fortalecimiento legislativo con sanciones, aunque importante, actúa a más largo plazo al requerir cumplimiento y vigilancia institucional, sin aportar recursos financieros directos que mejoren rápidamente la eficiencia del reciclaje."
            },
            {
                id: 21,
                question: "La lectura del texto permite identificar que, para fomentar el desarrollo de micro empresas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que un proyecto piloto en Cochabamba demostró una generación de 0,45 m³ de metano por kilogramo de residuos orgánicos, suficiente para cubrir el consumo energético de una familia promedio durante un mes. Este tipo de valorización energética es directamente aplicable a comunidades rurales donde la falta de infraestructura eléctrica limita el desarrollo de micro empresas, al proporcionar una fuente de energía local y rentable. Por el contrario, los datos de reciclaje de PET (tasa del 8% en Santa Cruz) se centran en un problema urbano de contaminación del agua y no ofrecen una solución inmediata para la generación de ingresos o la autosuficiencia energética en áreas rurales, lo que disminuye su relevancia para ese contexto. 68 Repositorio de"
            },
            {
                id: 22,
                question: "A partir de lo expuesto en el artículo, ¿cuál de los siguientes aspectos representa una",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona incentivos financieros, micro créditos, fondos de innovación y la participación de jóvenes emprendedores, pero nunca analiza la dimensión de género ni cómo la desigualdad entre hombres y mujeres podría limitar el acceso de las mujeres a esos recursos."
            },
            {
                id: 23,
                question: "El artículo señala que la eficiencia del reciclaje (R) permite cuantificar el grado de cierre",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo enfatiza que la eficiencia del reciclaje (R) sirve como indicador de desempeño que permite evaluar cuán cerrado está el ciclo de materiales; este dato puede usarse para estructurar bonos o pagos por servicios ambientales, asegurando que los incentivos financieros premien a micro empresas que logren una mayor efectividad en el cierre del ciclo. En la sección de conclusiones se menciona la necesidad de establecer indicadores de desempeño, como la tasa de reciclaje R, como métricas obligatorias para municipios y empresas."
            },
            {
                id: 24,
                question: "De acuerdo con el texto, ¿cuál de los siguientes posibles sesgos ambientales no está",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque el artículo describe ampliamente los beneficios del reciclaje de PET y la valorización energética, nunca menciona ni cuantifica las posibles emisiones de CO2 o de otros gases de efecto invernadero que pueden generarse durante la recolección, el transporte y el procesamiento de los materiales reciclados. El texto se centra en la eficiencia del reciclaje (R) y en los impactos positivos, sin considerar este costo ambiental."
            },
            {
                id: 25,
                question: "La lectura del texto permite identificar que el argumento del autor sobre la validez de establecer",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto proporciona evidencia empírica que respalda la propuesta del autor: se citan cifras específicas de la tasa de reciclaje de PET (8%) y se describen casos concretos, como la empresa ReciclArte, que compra PET, lo procesa y genera ingresos de 22 000 USD y evita 15 toneladas de CO"
            },
            {
                id: 26,
                question: "Del análisis presentado se desprende que, de acuerdo al artículo, ¿por qué es relevante la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección de Conclusiones el artículo recomienda establecer indicadores de desempeño, como la tasa de reciclaje R, como métricas obligatorias para municipios y empresas, con el fin de evaluar la eficacia de los programas, orientar la asignación de fondos (microcréditos) y diseñar incentivos financieros. Esta función se 69 menciona explícitamente: “Establecer indicadores de desempeño (por ejemplo, la tasa de reciclaje R) como métricas obligatorias para municipios y empresas”."
            },
            {
                id: 27,
                question: "Según el artículo, ¿qué sesgo limita la representatividad de los resultados presentados",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo solo describe ejemplos concretos de reciclaje de PET en Santa Cruz y de digestores anaeróbicos en Cochabamba, sin proporcionar evidencia de otras áreas del país. Esta focalización geográfica impide extrapolar los hallazgos a la realidad nacional, constituyendo un sesgo de representatividad."
            },
            {
                id: 28,
                question: "De acuerdo con el texto, ¿cuál es la implicación ética más relevante al promover incentivos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que los incentivos financieros buscan apoyar a micro empresas (p. ej., ReciclArte) y que la falta de una política inclusiva puede dejar fuera a los recolectores informales, creando una situación de inequidad y planteando una cuestión de justicia distributiva"
            },
            {
                id: 29,
                question: "El artículo señala que la participación de ONG es fundamental para mejorar la separación de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque el artículo menciona que la ONG EcoBol logró elevar la tasa de separación de papel y cartón del 3% al 18% en los Yungas, esa información corresponde a un caso aislado y regional. No se presentan datos comparativos con otras áreas ni estudios longitudinales que permitan determinar si el efecto es atribuible exclusivamente a la intervención de la ONG ni si es replicable a nivel nacional. Por ello, la evidencia es limitada para sustentar afirmaciones generales sobre el impacto de las ONG."
            },
            {
                id: 30,
                question: "El artículo señala que el proyecto piloto de digestores anaeróbicos en Cochabamba generó,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección"
            },
            {
                id: 1,
                question: "Considerando lo mencionado en el texto, ¿cuáles son las cuatro áreas de acción emergentes",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Soluciones emergentes y perspectivas de futuro” del artículo se listan exactamente esas cuatro áreas: (1) Fortalecimiento de la política sanitaria, (2) Programas de educación comunitaria, (3) Innovación biotecnológica y (4) Enfoque One Health. Cada una aparece como un subtítulo independiente que describe iniciativas específicas para mitigar la resistencia."
            },
            {
                id: 2,
                question: "Basándose en la información proporcionada, ¿cuál es el primer paso descrito en la iniciativa",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el apartado “Enfoque One Health (Una Salud)” se indica que el Ministerio de Medio Ambiente, junto con el de Salud, “ha lanzado proyectos de vigilancia de resistencia en fuentes de agua y en granjas avícolas” antes de cualquier otro accionar."
            },
            {
                id: 3,
                question: "Basándose en la información proporcionada, ¿cuál es el orden cronológico correcto de las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La secuencia se decribe en el artículo: primero, en 2022, el Gobierno aprueba la Ley de Uso Responsable de Antibióticos (sección “Fortalecimiento de la política sanitaria”). Luego, organizaciones no gubernamentales como Médicos Sin Fronteras implementan campañas de educación comunitaria en escuelas (sección “Programas de educación comunitaria”). Posteriormente, el Hospital Universitario de La Paz incorpora diagnósticos rápidos basados en PCR, reduciendo la prescripción empírica (sección Innovación biotecnológica). Finalmente, el Instituto Nacional de Salud lleva a cabo ensayos clínicos de terapia con fagos contra E. coli productora de BLEE (sección “Innovación biotecnológica”). 73"
            },
            {
                id: 4,
                question: "De acuerdo con el texto, ¿cuál fue la característica principal de los antibióticos desde su",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la Introducción del artículo se afirma que, desde la década de 1940, los antibióticos redujeron drásticamente la mortalidad infantil y prolongaron la esperanza de vida en todo el mundo."
            },
            {
                id: 5,
                question: "De acuerdo con el texto, ¿cuáles de las siguientes medidas forman parte de la Ley de Uso",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la Ley de Uso Responsable de Antibióticos, aprobada en 2022, “obliga a los farmacéuticos a exigir receta médica para la dispensación de antibióticos y limita su uso en la agropecuaria a casos de enfermedad diagnosticada. La normativa también establece la creación de un registro nacional de resistencia bacteriana”."
            },
            {
                id: 6,
                question: "El artículo señala que el 28% de los ingresos hospitalarios por infecciones respiratorias",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Impacto epidemiológico en Bolivia” el artículo indica explícitamente que “aproximadamente 28% de los ingresos hospitalarios por infecciones respiratorias agudas están asociados a bacterias resistentes a al menos un antibiótico de primera línea” (Ministerio de Salud de Bolivia, 2023)."
            },
            {
                id: 7,
                question: "La lectura del texto permite identificar que, según el artículo, la resistencia a los antibióticos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo define explícitamente la resistencia a los antibióticos con la frase: “En términos sencillos, la resistencia surge cuando una bacteria adquiere la habilidad de sobrevivir a concentraciones de antibiótico que antes la mataban”."
            },
            {
                id: 8,
                question: "La lectura del texto permite identificar que la Ley de Uso Responsable de Antibióticos,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la Ley de Uso Responsable de Antibióticos “obliga a los farmacéuticos a exigir receta médica para la dispensación de antibióticos y limita su uso en la agropecuaria a casos de enfermedad diagnosticada” (sección de fortalecimiento de la política sanitaria). Ese enunciado muestra que la intención principal es controlar la resistencia, no estimular ventas, importaciones o investigación."
            },
            {
                id: 9,
                question: "La lectura del texto permite identificar que, en comparación de la implementación de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que los diagnósticos rápidos basados en PCR identifican el gen de resistencia en menos de una hora, lo que “redujo la prescripción empírica en un 40% y permitiendo tratamientos más dirigidos” (párrafo de Innovación biotecnológica). Asimismo, la terapia con bacteriófagos se describe como un enfoque que “infectan y destruyen bacterias específicas” y muestra una alta tasa de curación sin los efectos colaterales típicos de 74 Repositorio de"
            },
            {
                id: 10,
                question: "Según el artículo, ¿con qué finalidad se aprobó la Ley de Uso Responsable de Antibióticos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la Ley de Uso Responsable de Antibióticos, aprobada en 2022, “obliga a los farmacéuticos a exigir receta médica para la dispensación de antibióticos y limita su uso en la agropecuaria a casos de enfermedad diagnosticada” y “establece la creación de un registro nacional de resistencia bacteriana”. Estos elementos responden al objetivo de frenar la automedicación y el uso indiscriminado en la ganadería, factores de riesgo descritos en los párrafos anteriores."
            },
            {
                id: 11,
                question: "El artículo señala que la incorporación de diagnósticos rápidos basados en PCR redujo la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la introducción de pruebas PCR rápidas en el Hospital Universitario de La Paz redujo la prescripción empírica en un 40%, lo que implica que se está usando antibióticos de forma más dirigida y, por tanto, disminuye la presión de selección de cepas resistentes. Este razonamiento inferencial combina la información del apartado de “Innovación biotecnológica” con la lógica de causa efecto: menos uso indiscriminado → menor propagación de resistencia."
            },
            {
                id: 12,
                question: "Según el artículo, ¿qué consecuencia se puede deducir de la introducción masiva de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que los antibióticos se introdujeron en la década de 1940 y, aunque redujeron la mortalidad, su uso extensivo creó presión selectiva para la supervivencia de bacterias resistentes. Más adelante, el artículo señala que la automedicación y el uso indiscriminado en la agropecuaria han ampliado esa presión, resultando en que el 28% de los ingresos hospitalarios por infecciones respiratorias están asociados a bacterias resistentes. Por lo tanto, se infiere que la combinación de la introducción histórica y el uso actual explica la alta prevalencia de resistencia."
            },
            {
                id: 13,
                question: "Considerando la combinación de: la Ley de Uso Responsable de Antibióticos, los programas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto muestra que la Ley de Uso Responsable de Antibióticos (2022) regula la dispensación y el uso agropecuario, que los programas de educación en Potosí redujeron en un 30% la compra automática de antibióticos, y que los ensayos con bacteriófagos alcanzaron una tasa de curación del 85% sin efectos colaterales. Cada una de estas intervenciones aborda un factor distinto (política, comportamiento y tecnología) que el artículo identifica como crucial para frenar la RA; por ello, la conclusión lógica es que solo una combinación de ellas ofrece la mayor probabilidad de éxito. 75"
            },
            {
                id: 14,
                question: "Según el artículo, comparando la actuación del Gobierno boliviano y la de las organizaciones",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que en 2022 el Gobierno aprobó la Ley de Uso Responsable de Antibióticos y creó un registro nacional de resistencia, estableciendo una base normativa y de vigilancia. Asimismo, menciona que organizaciones no gubernamentales, como Médicos Sin Fronteras, llevan a cabo campañas de concientización que alcanzaron a 8 000 estudiantes en Potosí y lograron una reducción del 30% en la compra automática de antibióticos. Estas dos acciones – regulación/vigilancia (Gobierno) y educación comunitaria (ONG) – se describen como complementarias."
            },
            {
                id: 15,
                question: "A partir de lo expuesto en el artículo, ¿qué consecuencia se puede inferir que tendrá la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la incorporación de pruebas PCR que identifican genes de resistencia en menos de una hora ha reducido la prescripción empírica en un 40 %. Si la prescripción empírica disminuye, se ejerce menos presión selectiva sobre las bacterias, lo que lógicamente lleva a una menor aparición y propagación de cepas resistentes; por tanto, la incidencia de infecciones por bacterias resistentes tenderá a descender. Esta cadena causal (diagnóstico rápido → menos uso empírico → menor presión selectiva → menor incidencia) no está declarada explícitamente, pero se deduce del texto."
            },
            {
                id: 16,
                question: "En el texto se menciona que, una de las consecuencias sobre los ingresos hospitalarios por",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que el 62% de la población adulta adquiere antibióticos sin prescripción (Sección “Mecanismos biológicos y factores de riesgo”) y, simultáneamente, que el 28% de los ingresos hospitalarios por infecciones respiratorias están asociados a bacterias resistentes (Sección “Impacto epidemiológico en Bolivia”). La relación causal implícita es que el uso indiscriminado y erróneo de antibióticos favorece la selección y diseminación de cepas resistentes, lo que se refleja en el elevado porcentaje de internaciones por infecciones resistentes."
            },
            {
                id: 17,
                question: "A partir de lo expuesto en el artículo, ¿qué consecuencia se puede deducir si se amplía el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la incorporación de diagnósticos rápidos basados en PCR en el Hospital Universitario de La Paz redujo la prescripción empírica en un 40% y permitió tratamientos más dirigidos. Inferir que una ampliación de esa práctica mantendría la tendencia implica que la prescripción empírica seguirá disminuyendo, lo cual atenúa la presión selectiva que favorece la selección de cepas resistentes."
            },
            {
                id: 18,
                question: "A partir de lo expuesto en el artículo, ¿cuál es la conclusión más razonable respecto a",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala que la automedicación, el uso de antibióticos en la ganadería y la falta de diagnóstico rápido 76 Repositorio de"
            },
            {
                id: 19,
                question: "De acuerdo con el texto, ¿cuál de las siguientes afirmaciones describe mejor la diferencia",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la campaña en el Departamento de Potosí logró una reducción del 30% en la compra automática de antibióticos (“una campaña piloto alcanzó a 8 000 estudiantes…, logrando una reducción del 30% en la compra automática de antibióticos en farmacias locales”). En contraste, la Ley de Uso Responsable de Antibióticos fue aprobada en 2022 y se describe sus requisitos (exigir receta, limitar uso en agropecuaria) pero no se menciona todavía ningún resultado cuantitativo, por lo que no se dispone de evidencia de su impacto."
            },
            {
                id: 20,
                question: "Según el artículo, en el contexto boliviano, ¿cuál es la conclusión lógica respecto al papel",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Enfoque One Health (Una Salud)” se menciona que el Ministerio de Medio Ambiente y Salud ha lanzado proyectos de vigilancia de resistencia en fuentes de agua y granjas avícolas, con el objetivo de prevenir la propagación de genes de resistencia en ecosistemas acuáticos que pueden regresar a la cadena alimentaria humana. Esta conclusión integra la información sobre la interconexión entre salud humana, animal y ambiental, y la necesidad de monitorear los residuos de antibióticos en el agua como medida preventiva."
            },
            {
                id: 21,
                question: "La lectura del texto permite identificar que, a partir de los ejemplos de la Ley de Uso",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe tres tipos de iniciativas emergentes: la Ley de Uso Responsable (regulación), los programas de educación comunitaria (educación) y los diagnósticos rápidos basados en PCR (tecnología). En la sección de Soluciones emergentes se enfatiza que la combinación de estas medidas busca reducir la presión selectiva y la propagación de cepas resistentes."
            },
            {
                id: 22,
                question: "El argumento del autor muestra que la Ley de Uso Responsable de Antibióticos reducirá",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe la Ley de Uso Responsable de Antibióticos y menciona su objetivo de restringir la dispensación sin receta, no proporciona datos cuantitativos que demuestren una reducción del 50% en los ingresos hospitalarios por infecciones respiratorias. Los datos estadísticos citados (28% de ingresos por bacterias resistentes, 62% de automedicación, reducción del 30% en compras automáticas tras una campaña educativa) no se vinculan directamente a un efecto específico de la ley. Por lo tanto, el argumento de que la ley reducirá a la mitad esos ingresos carece de respaldo empírico en el texto. 77"
            },
            {
                id: 23,
                question: "De acuerdo con el texto, ¿cuál de las siguientes afirmaciones describe mejor una implicación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona dos aspectos: (1) el alto porcentaje de adultos que se automedican y compran antibióticos sin receta (62% según la Universidad Mayor de San Andrés, 2022) y (2) la limitación de diagnósticos microbianos que lleva a prescripciones empíricas. Ambos factores se asocian a mayores tasas de infecciones resistentes, lo que, como se menciona en la sección de impacto epidemiológico, eleva los costos hospitalarios (US$ 55 millones al año) y afecta especialmente a poblaciones vulnerables, ampliando la desigualdad en salud."
            },
            {
                id: 24,
                question: "La lectura del texto permite identificar que la afirmación de que los programas de educación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona que, aunque la educación comunitaria ha generado una reducción del 30% en la compra automática de antibióticos en una campaña piloto, también describe otras iniciativas esenciales: la Ley de Uso Responsable de Antibióticos, el registro nacional de resistencia, la terapia con fagos y los diagnósticos rápidos basados en PCR. En la sección “Soluciones emergentes y perspectivas de futuro” se enfatiza que solo un enfoque integrado bajo la perspectiva One Health permitirá contener la propagación de la resistencia. Por lo tanto, afirmar que la educación por sí sola es suficiente no está respaldado por el texto."
            },
            {
                id: 25,
                question: "Considerando lo mencionado en el texto, ¿cuáles son las principales implicaciones éticas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe que la resistencia en Bolivia se ha incrementado por la automedicación, el uso de antibióticos en la agropecuaria y la falta de diagnóstico, y señala que la solución requiere una combinación de regulación (Ley de Uso Responsable de Antibióticos) y programas de educación comunitaria dirigidos a diferentes actores (párrafos de “Fortalecimiento de la política sanitaria” y “Programas de educación comunitaria”). Esto implica una responsabilidad compartida que debe abordarse bajo los principios éticos de justicia (equidad en el acceso y uso responsable) y beneficencia (preservar la efectividad de los tratamientos)."
            },
            {
                id: 26,
                question: "De acuerdo con el texto, ¿cuál sería la principal consecuencia social esperada, si la Ley de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la Ley de Uso Responsable de Antibióticos obliga a exigir receta médica y limita el uso en la agropecuaria, medidas dirigidas a frenar la automedicación y la compra sin receta, principales factores de riesgo descritos (párrafo de Mecanismos biológicos y factores de riesgo). Al reducir esos comportamientos se espera disminuir la difusión de bacterias resistentes y, por ende, la carga sobre el sistema de salud, una consecuencia social explícita. 78 Repositorio de"
            },
            {
                id: 27,
                question: "Del análisis presentado en el artículo se desprende que, respecto a la terapia basada en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe la terapia basada en bacteriófagos como una “área de mayor promesa” y menciona que el Instituto Nacional de Salud está realizando “ensayos clínicos de un cóctel de fagos… Los resultados preliminares muestran una tasa de curación del 85%”. No se indica que el método esté ya disponible en el sistema de salud ni que exista una regulación establecida; se subraya que está “en fase experimental”. Por lo tanto, la limitación principal es su carácter todavía experimental y la falta de disponibilidad comercial."
            },
            {
                id: 28,
                question: "De acuerdo con el texto, ¿cuál sería la forma más adecuada de trasladar el enfoque One",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La definición de One Health expuesta en el artículo: “el concepto One Health reconoce la interconexión entre la salud humana, animal y ambiental” y propone una vigilancia integrada que abarque hospitales, ganadería y ecosistemas acuáticos. Aplicar este tipo de monitoreo durante la expansión masiva de antibióticos en los años 60 habría permitido detectar precozmente la aparición de genes de resistencia y ajustar las políticas de uso, reduciendo la selección de cepas resistentes."
            },
            {
                id: 29,
                question: "A partir de lo expuesto en el artículo, ¿qué tan válido es el argumento de que las campañas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto reconoce que la campaña piloto en Potosí redujo la compra automática de antibióticos en un 30%, lo que evidencia un efecto positivo de la educación, pero también subraya que la resistencia a los antibióticos es un problema multifactorial que necesita, además, políticas regulatorias más estrictas, vigilancia nacional y tecnologías emergentes como la terapia con fagos y diagnósticos rápidos. Por lo tanto, el argumento de que la educación sola es suficiente es débil."
            },
            {
                id: 30,
                question: "El artículo señala que la terapia basada en bacteriófagos es una solución emergente eficaz",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona que el Instituto Nacional de Salud está realizando ensayos clínicos de un cóctel de fagos contra E. coli productora de BLEE, reportando una tasa de curación del 85% y ausencia de efectos colaterales típicos. Sin embargo, también indica que estos resultados son preliminares, lo que implica que la evidencia todavía es limitada y que se necesitan investigaciones más extensas para validar la terapia como solución definitiva. 79 Gestión sostenible de los recursos hídricos frente al retroceso de los glaciares del Altiplano boliviano Resumen El sector andino de Bolivia alberga la mayor concentración de glaciares de Sudamérica fuera de la zona polar. En las últimas cinco décadas, la superficie glaciar ha disminuido aproximadamente un 40%, una tendencia que amenaza la disponibilidad de agua para la agricultura, el consumo urbano y la generación de energía hidroeléctrica. Este artículo revisa los procesos físicos que originan el retroceso glaciar, analiza las consecuencias hidrológicas y sociales en la cuenca del Río Desaguadero y el Salar de Uyuni, y propone estrategias de gestión sostenible basadas en la adaptación comunitaria, la planificación integrada de cuencas y la mitigación del cambio climático. Se presentan datos climáticos actualizados, se explican conceptos como balance de masa glaciar y huella hídrica, y se discuten casos de éxito regionales que pueden servir de modelo para políticas a largo plazo en Bolivia y en la región latinoamericana. Introducción Los glaciares de alta montaña son reservorios críticos de agua dulce que liberan su contenido de forma gradual durante la estación seca, amortiguando la variabilidad climática. En Bolivia, la zona del Altiplano —que comprende departamentos como Potosí, Oruro y La Paz— depende de más de 200 glaciares distribuidos sobre picos que superan los 5 000 m s.n.m. (sobre el nivel del mar). Sin embargo, el aumento de la temperatura media anual, medido en más de 0,3 °C por década desde la década de 1980, ha inducido un retroceso significativo de la línea de nieve y una reducción del volumen glaciar. Este fenómeno no solo constituye una señal clara del cambio climático global, sino que también plantea retos para la seguridad hídrica de millones de personas que habitan la cuenca del desaguadero y zonas circundantes. El presente artículo se propone describir, de forma accesible para lectores jóvenes, los mecanismos físicos del retroceso glaciar, sus repercusiones en la disponibilidad de agua y en los sistemas productivos locales, y la manera en que la gestión sostenible de recursos hídricos puede aportar a la resiliencia a largo plazo. Se utilizan ejemplos concretos del contexto boliviano y se 80 incorporan datos de fuentes oficiales y de la literatura científica reciente. Desarrollo"
            },
            {
                id: 1,
                question: "El artículo señala que, para enfrentar la escasez hídrica en la cuenca del Río Desaguadero, se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe primero el monitoreo de glaciares mediante imágenes satelitales de USGS y NASA, luego la puesta en marcha del Programa de Gestión de Cuencas del Río Desaguadero impulsado por el Ministerio de Medio Ambiente y Agua en colaboración con la Universidad Mayor de San Andrés, y finalmente la reforestación de zonas alto andinas ejecutada por el Servicio Solar Boliviano a través del proyecto Bosques Andinos para el Agua."
            },
            {
                id: 2,
                question: "Según el artículo, ¿en qué orden se describen las acciones que contribuyen a mitigar las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo, en la sección ‘"
            },
            {
                id: 3,
                question: "A partir de lo expuesto en el artículo, ¿cuáles son los dos factores principales que han",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica claramente que “los factores que han intensificado M son dos: el aumento de la temperatura del aire y la disminución de la nevada”."
            },
            {
                id: 4,
                question: "El artículo señala que la planificación integrada de cuencas (PIC) busca coordinar a los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección ‘Estrategias de gestión sostenible y adaptación a largo plazo’ se indica que la planificación integrada de cuencas (PIC) “busca coordinar a todos los usuarios del agua—agricultores, gobiernos locales, compañías mineras y la sociedad civil."
            },
            {
                id: 5,
                question: "De acuerdo con el texto, ¿cuáles son los sectores económicos que se ven afectados",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección ‘Consecuencias hidrológicas y sociales del retroceso’ se menciona que la disminución del aporte glaciar afecta la agricultura de riego (quinua), la extracción de sal del Salar de Uyuni y el consumo doméstico en ciudades como Oruro y La Paz. Además, en el apartado de ‘Estrategias de gestión sostenible’ se indica que la generación hidroeléctrica ha crecido un 45% entre 2015 y 2022, lo que la vincula directamente al recurso hídrico glaciar. La industria minera también se menciona como uno de los actores involucrados en los conflictos por el agua. 82 Repositorio de"
            },
            {
                id: 6,
                question: "A partir de lo expuesto en el artículo, ¿cómo define el artículo la Planificación Integrada de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe la Planificación Integrada de Cuencas (PIC) como ‘una herramienta esencial’ que ‘busca coordinar a todos los usuarios del agua—agricultores, gobiernos locales, compañías mineras y la sociedad civil— para equilibrar la oferta y la demanda, considerando tanto la variabilidad climática como los cambios estructurales.’"
            },
            {
                id: 7,
                question: "A partir de lo expuesto en el artículo, ¿qué consecuencia se puede deducir de la disminución",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que los glaciares aportan entre el 20% y el 30% del caudal medio anual del Río Desaguadero y que la reducción de este aporte afecta la disponibilidad de agua para agricultura y consumo (párrafo 2 de Consecuencias hidrológicas). Además, señala que “la escasez hídrica ha intensificado conflictos por el uso del agua entre agricultores, industrias mineras y comunidades indígenas”. Inferimos que la disminución del aporte glaciar es la causa subyacente del aumento de los conflictos."
            },
            {
                id: 8,
                question: "De acuerdo con el texto, si la reducción de la superficie glaciar del Altiplano continúa y no se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que los glaciares aportan entre el 20% y el 30% del caudal medio anual del Río Desaguadero y que la reducción de este aporte ya ha causado una disminución del 25% en la superficie cultivable durante la última década. Además, se señala que, sin la intensificación de la planificación integrada de cuencas y otras medidas de adaptación, la tendencia de pérdida glaciar continuará, lo que implicará una menor disponibilidad de agua para riego y, por ende, una mayor reducción de la superficie agrícola."
            },
            {
                id: 9,
                question: "Del análisis presentado se desprende que, comparando los datos estadísticos del artículo, la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la superficie glaciar pasó de 1 250 km² en 1970 a 730 km² en 2020, lo que representa una reducción del 40% en cincuenta años. Asimismo, menciona que los agricultores han reportado una reducción del 25% en la superficie cultivable de quinua durante los últimos diez años. Al comparar ambos porcentajes, la pérdida glaciar (40%) es mayor que la pérdida de superficie cultivable (25%)."
            },
            {
                id: 10,
                question: "Del análisis presentado se desprende que, para enfrentar el retroceso glaciar y sus impactos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe varias iniciativas donde actúan el Ministerio de Medio Ambiente y Agua, la Universidad Mayor de San Andrés, organizaciones comunitarias y proyectos de reforestación, resaltando la planificación integrada de cuencas como una herramienta que requiere la coordinación de gobiernos, academia y comunidades. Esta colaboración es presentada como esencial para la resiliencia hídrica. 83"
            },
            {
                id: 11,
                question: "Del análisis presentado se desprende que, ante la reducción del aporte glaciar al caudal del",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca que la planificación integrada de cuencas (PIC) es la herramienta esencial para coordinar a agricultores, gobiernos, minería y sociedad civil, buscando equilibrar oferta y demanda de agua ante la disminución del aporte glaciar. Se menciona el Programa de Gestión de Cuencas del Río Desaguadero, que combina monitoreo satelital y riego por goteo, logrando una reducción del consumo de agua en un 30%, evidenciando que la combinación de gestión integrada y riego eficiente es la estrategia principal para mitigar la escasez."
            },
            {
                id: 12,
                question: "Del análisis presentado se desprende que, al comparar el impacto estimado de la reforestación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la tecnificación de riego mediante sistemas de riego por goteo “reduce el consumo de agua en un 30%” y que el proyecto Bosques Andinos para el Agua “generando un aumento del 12% en la recarga de acuíferos”. Estas dos cifras permiten comparar directamente ambos efectos, mostrando que la reducción del consumo de agua (30%) es mayor que el aumento de recarga de acuíferos (12%)."
            },
            {
                id: 13,
                question: "Basándose en la información proporcionada, ¿cuál es el propósito fundamental de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe la PIC como una herramienta esencial que “busca coordinar a todos los usuarios del agua— agricultores, gobiernos locales, compañías mineras y la sociedad civil—para equilibrar la oferta y la demanda, considerando tanto la variabilidad climática como los cambios estructurales”."
            },
            {
                id: 14,
                question: "Del análisis presentado se desprende que la adopción de la planificación integrada de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la planificación integrada de cuencas (PIC) busca “coordinar a todos los usuarios del agua— agricultores, gobiernos locales, compañías mineras y la sociedad civil—para equilibrar la oferta y la demanda” (sección 3). Además, en la sección 2 se describe que la escasez hídrica ha “intensificado conflictos por el uso del agua entre agricultores, industrias mineras y comunidades indígenas”. Al inferir que la coordinación y el balance que proporciona la PIC mitigan la escasez percibida, se deduce que los conflictos disminuyen."
            },
            {
                id: 15,
                question: "Basándose en la información proporcionada, ¿qué principio general se puede extraer sobre",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la planificación integrada de cuencas (PIC) coordina a agricultores, gobiernos, industrias y la sociedad civil, y que el Programa de Gestión de Cuencas del Río Desaguadero incorpora monitoreo satelital, mediciones de caudales en tiempo real y riego por goteo que reduce el consumo de agua en un 30%. Además, se 84 Repositorio de"
            },
            {
                id: 16,
                question: "La lectura del texto permite identificar que, considerando la reducción del aporte glaciar al",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la reducción del aporte glaciar ha mermado el caudal seco estacional, afectando la disponibilidad hídrica para la agricultura (se menciona una reducción del 25% de la superficie cultivable). Paralelamente, se señala que el programa de riego por goteo reduce el consumo de agua en un 30%. Al combinar ambos hechos, se infiere que el ahorro generado por el riego tecnificado puede compensar, al menos parcialmente, la pérdida de agua proveniente de los glaciares, originando una mejora neta en la disponibilidad de agua para la agricultura."
            },
            {
                id: 17,
                question: "A partir de lo expuesto en el artículo, ¿cuál es la diferencia esencial entre la intervención de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la descripción de las dos estrategias en el apartado 3 del artículo. El Programa de Gestión de Cuencas del Río Desaguadero incluye sistemas de riego tecnificado que reducen el consumo de agua en un 30% mediante riego por goteo. Por otro lado, el proyecto ‘Bosques Andinos para el Agua’ ha logrado un aumento del 12% en la recarga de acuíferos gracias a la reforestación de zonas altoandinas. Así, una medida actúa sobre la demanda (riegos) y la otra sobre la oferta (recarga)."
            },
            {
                id: 18,
                question: "Según el artículo, ¿qué es probable que ocurra si la tendencia de retroceso glaciar observada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que los glaciares aportan entre el 20% y el 30% del caudal medio anual del Río Desaguadero y que la superficie glaciar ha disminuido un 40% en cincuenta años. Si la tasa de retroceso observada persiste, la masa glaciar seguirá reduciéndose, lo que disminuirá la cantidad de agua de deshielo disponible durante la estación seca. Dado este escenario, es razonable inferir que la contribución glaciar podría caer por debajo del 10% del caudal total, aumentando la vulnerabilidad hídrica y, conforme se describe en el texto, generando mayores conflictos por el uso del agua entre los distintos usuarios."
            },
            {
                id: 19,
                question: "De acuerdo con el texto, ¿cuál de las siguientes situaciones es una consecuencia probable",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que los glaciares aportan entre el 20% y el 30% del caudal medio anual del Río Desaguadero, y que la generación hidroeléctrica se ha beneficiado de estos aportes, mostrando un crecimiento del 45% entre 2015 y"
            },
            {
                id: 20,
                question: "Según el artículo, ¿cuál de las siguientes medidas muestra el mayor efecto porcentual",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la tecnificación del riego reduce el consumo de agua en un 30% (sección 3), mientras que la reforestación genera un aumento del 12% en la recarga de acuíferos (sección 3) y el crecimiento de la generación hidroeléctrica del 45% se refiere a energía, no a un ahorro directo de agua. Los programas de educación, aunque importantes, no aportan un dato porcentual."
            },
            {
                id: 21,
                question: "De acuerdo con el texto, ¿qué es probable que ocurra si la tendencia de retroceso glaciar",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la superficie glaciar ha disminuido un 40% en cincuenta años y que los glaciares aportan entre el 20% y el 30% del caudal medio anual del Río Desaguadero. Además, se menciona que el balance de masa glaciar es negativo y que tanto el aumento de la temperatura como la disminución de la nevada continúan. Si esas tendencias persisten, la proporción de aporte glaciar al caudal probablemente bajará aún más, pudiendo caer bajo el 15% en la próxima década, lo que incrementaría la vulnerabilidad hídrica para la agricultura y el consumo urbano."
            },
            {
                id: 22,
                question: "La lectura del texto permite identificar que, para mitigar la pérdida de aportes hídricos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe la reforestación de zonas altoandinas como un componente clave de la gestión sostenible: se menciona que proyectos como ‘Bosques Andinos para el Agua’ plantaron más de 1,5 millones de árboles nativos, lo que generó un aumento del 12% en la recarga de acuíferos al favorecer la captura de humedad atmosférica. Trasladar esa misma lógica a la cuenca del río Santa en los años 90 implicaría usar especies nativas de alta montaña para los mismos efectos. Las demás opciones no reflejan el enfoque del texto: la plantación de especies exóticas no está contemplada y podría disminuir la eficiencia hídrica; la construcción de presas corresponde a una estrategia de almacenamiento que no está vinculada a la reforestación descrita; y el riego por inundación contraviene la tecnificación del riego por goteo que busca reducir el consumo de agua, no aumentarlo."
            },
            {
                id: 23,
                question: "Basándose en la información proporcionada, ¿cuál es la limitación más significativa del",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca que la PIC busca coordinar a agricultores, gobiernos, mineras y la sociedad civil, pero implica una cooperación institucional permanente y recursos para monitoreo y riego tecnificado. No se menciona que esta coordinación sea automática; por ello, la necesidad de una gestión interinstitucional constante y de financiamiento estable se presenta como la limitación más crítica. 86 Repositorio de"
            },
            {
                id: 24,
                question: "La lectura del texto permite identificar que la perspectiva futura más clara para garantizar la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala en la sección 3 que “la planificación integrada de cuencas (PIC) emerge como una herramienta esencial” para abordar la escasez hídrica, al coordinar a agricultores, gobiernos, minería y sociedad civil y al contemplar tanto la variabilidad climática como los cambios estructurales."
            },
            {
                id: 25,
                question: "El artículo señala que, a diferencia de la visión común de depender principalmente de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo, en la sección 3 de desarrollo, describe la combinación de planificación integrada de cuencas (PIC), reforestación de zonas altoandinas que aumentó en un 12% la recarga de acuíferos, y la transición a energías renovables como pilares de la gestión sostenible. Además, menciona que el Programa de Gestión de Cuencas del Río Desaguadero incluye riego tecnificado que reduce el consumo de agua en un 30%, lo que disminuye la necesidad de bombeo subterráneo."
            },
            {
                id: 26,
                question: "Basándose en la información proporcionada, ¿qué perspectiva ambiental importante no es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe detalladamente la reforestación, la contribución del deshielo al caudal y la creciente demanda agrícola, pero solo menciona la generación hidroeléctrica como una solución sin analizar sus posibles efectos adversos sobre ecosistemas acuáticos o flujos ecológicos. No se discuten, por ejemplo, la fragmentación de hábitats o la alteración de regímenes de caudal que pueden derivarse de la construcción o ampliación de represas, lo que constituye una perspectiva ambiental omitida."
            },
            {
                id: 27,
                question: "A partir de lo expuesto en el artículo, ¿cómo debería adaptarse la estrategia de planificación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según el artículo, la planificación integrada de cuencas (PIC) en Bolivia combina monitoreo satelital, riego por goteo que reduce el consumo en un 30% y reforestación que incrementa la recarga de acuíferos en un 12%. Al trasladar esta estrategia al río Santa, es necesario adaptar esos componentes a una cuenca donde el aporte glaciar es menor y la precipitación es más estacional; por ello, la respuesta propone priorizar la captación de agua de lluvia y la gestión de embalses, además de mantener los elementos exitosos de monitoreo, riego tecnificado y reforestación, y reforzar la gobernanza indígena, lo cual refleja un análisis crítico y contextualizado. 87"
            },
            {
                id: 28,
                question: "Según el artículo, ¿qué tipo de evidencia adicional sería necesaria para reforzar de manera",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona que la reforestación ha generado un aumento del 12% en la recarga de acuíferos según estudios del Servicio Solar Boliviano, pero no especifica la metodología usada. Para validar robustamente esa afirmación se requerirían series temporales de datos hidrológicos (niveles de agua subterránea) obtenidos tanto en zonas reforestadas como en áreas de referencia sin intervención, lo que permitiría demostrar una relación causal y cuantificar el efecto."
            },
            {
                id: 29,
                question: "Basándose en la información proporcionada, ¿cómo se contrasta la idea frecuente de que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección de consecuencias hidrológicas y sociales se indica que los glaciares aportan entre el 20% y el 30% del caudal medio anual del Desaguadero y que su reducción impacta agricultura, extracción de sal, consumo urbano y genera conflictos y migraciones (párrafos bajo el ítem 2)."
            },
            {
                id: 30,
                question: "A partir de lo expuesto en el artículo, ¿cuál de las siguientes afirmaciones resume mejor la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que el riego tecnificado reduce el consumo de agua en un 30% (sección 3) y que la reforestación de zonas altoandinas genera un aumento del 12% en la recarga de acuíferos (sección 3). Ambas medidas aportan beneficios complementarios: el riego por goteo aborda la necesidad inmediata de agua para la agricultura, mientras que la reforestación mejora la capacidad de infiltración y la resiliencia ecosistémica a largo plazo. El texto subraya que la planificación integrada de cuencas debe coordinar a todos los usuarios y combinar estrategias, lo que implica que una acción aislada no es suficiente desde un punto de vista ético. 88 Repositorio de"
            },
            {
                id: 1,
                question: "El artículo señala que, dado que la disponibilidad de recursos computacionales en Bolivia",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Pese a la limitación de recursos computacionales en Bolivia, “la proliferación de servicios en la nube permite a estudiantes y pequeñas empresas acceder a esta potencia sin necesidad de poseer hardware especializado”."
            },
            {
                id: 2,
                question: "El artículo señala que, en el contexto de la educación secundaria, ¿cuál es el tercer paso del",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El algoritmo evalúa la respuesta, indica errores y sugiere conceptos revisados. Ese enunciado corresponde al tercer paso del proceso."
            },
            {
                id: 3,
                question: "De acuerdo con el texto, ¿cuál es la expresión matemática exacta del mecanismo de atención",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Fundamentos técnicos de la IAG” del artículo se muestra la ecuación exacta del mecanismo de atención como: Attention(Q, K, V) = softmax((QK^{})/) V."
            },
            {
                id: 4,
                question: "De acuerdo con el texto, ¿cuál es la característica principal de los problemas éticos y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección 4 del artículo se describen los retos éticos y regulatorios enfatizando “la generación de información falsa (deepfakes) y la reproducción de sesgos presentes en los datos de entrenamiento” y se señala que “la falta de legislación específica sobre contenido generado por IA” agrava estos problemas. 91"
            },
            {
                id: 5,
                question: "Según el artículo, ¿cuál es la consecuencia social descrita de la brecha digital entre zonas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el apartado “Retos éticos, regulatorios y de inclusión digital”, se señala que la brecha digital “puede intensificarse si el acceso a la IAG se concentra en centros urbanos” y que, al disponer solo el 35% de los hogares en el Beni y Pando de conexión de banda ancha estable, “limita su participación en la economía digital emergente”."
            },
            {
                id: 6,
                question: "A partir de lo expuesto en el artículo, ¿cuál de los enunciados describe correctamente una de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Retos éticos, regulatorios y de inclusión digital”, el artículo propone, como parte del marco regulatorio, la medida de “Transparencia”; “los sistemas que producen contenido deben indicar claramente que la salida es generada por IA”."
            },
            {
                id: 7,
                question: "De acuerdo con el texto, ¿qué principio general se puede extraer de los problemas identificados",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Retos éticos, regulatorios y de inclusión digital”, se señala que la falta de legislación específica y la brecha de acceso a internet pueden intensificar la desinformación y la desigualdad digital. Se propone un marco regulatorio que incluya transparencia, responsabilidad y acceso equitativo para mitigar esos riesgos."
            },
            {
                id: 8,
                question: "Según el artículo, ¿qué consecuencia se puede deducir de una mayor incorporación de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La startup boliviana MinkaDesign, al utilizar un modelo generativo de IA, logró un aumento del 27% en la velocidad de lanzamiento de nuevos diseños y expandió sus mercados a Uruguay y Chile. De esta comparación implícita se infiere que, si más actores de la industria creativa adoptaran herramientas generativas similares, experimentarían efectos parecidos: lanzarían sus productos más rápidamente y podrían acceder a mercados internacionales."
            },
            {
                id: 9,
                question: "De acuerdo con el texto, ¿qué factor se espera que tenga una mayor influencia en la expansión",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala que la brecha digital entre áreas urbanas y rurales limita el acceso a la IAG: solo el 35% de los hogares en Beni y Pando disponen de banda ancha estable, y se propone que el Estado invierta en infraestructura de internet para garantizar un acceso equitativo. Sin conectividad adecuada, incluso con marcos regulatorios o mejoras en capacidad computacional, la población rural no podrá aprovechar la IAG, lo que hace que la mejora de la infraestructura sea el factor determinante para su expansión futura."
            },
            {
                id: 10,
                question: "Según el artículo, ¿cuál es la diferencia principal entre cómo la IAG beneficia al sector",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que, en la educación, la IAG ayuda a suplir carencias de laboratorios y genera material didáctico 92 Repositorio de"
            },
            {
                id: 11,
                question: "Según el artículo, ¿qué es probable que ocurra con la huella ambiental de la industria textil",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La IAG permite generar patrones y diseños de manera digital, lo que acelera el proceso creativo y disminuye la necesidad de dibujar a mano o de imprimir prototipos físicos (párrafo sobre la industria creativa y la startup MinkaDesign). Al reducir esas etapas físicas, se espera una menor demanda de materiales y residuos, lo que implica una reducción de la huella ambiental."
            },
            {
                id: 12,
                question: "El artículo señala que, de cara al futuro, ¿cuál de las siguientes afirmaciones se puede",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la falta de infraestructura tecnológica en zonas rurales (p. 2) limita el aprovechamiento de la IAG, y que para mitigar riesgos se propone un marco regulatorio que incluya transparencia y responsabilidad (Sección 4). Asimismo, en la sección sobre educación se describe cómo la IAG puede mejorar la enseñanza y se sugiere su integración como coautor de materiales. Por lo tanto, la conclusión lógica es que una estrategia eficaz debe combinar mejoras de conectividad, regulación ética y adopción educativa."
            },
            {
                id: 13,
                question: "A partir de lo expuesto en el artículo, ¿cuál es el propósito principal de proponer un marco",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala en la sección de retos éticos y regulatorios que se propone un marco con tres pilares: transparencia, responsabilidad y acceso equitativo. Su objetivo es “mitigar estos riesgos” (deepfakes, sesgos) y “evitar que la brecha digital se intensifique” en zonas rurales, garantizando que la IAG beneficie a la sociedad en general."
            },
            {
                id: 14,
                question: "Según el artículo, ¿qué principio general subyace a las soluciones propuestas para mitigar",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto propone un marco regulatorio que incluye transparencia, responsabilidad y acceso equitativo como líneas de acción para enfrentar los retos éticos y de brecha digital. Estas tres medidas se describen en la sección de retos éticos, regulatorios y de inclusión digital, donde se enfatiza la necesidad de filtros contra desinformación y la inversión en infraestructura de banda ancha en áreas rurales."
            },
            {
                id: 15,
                question: "Basándose en la información proporcionada, ¿cuál de las siguientes afirmaciones constituye",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que en el altiplano el 42% de los colegios carecen de laboratorios bien equipados, y que la IA 93 generativa podría suplir parcialmente esa carencia, pero también señala que la infraestructura tecnológica es limitada en zonas rurales. Por otro lado, en el apartado de la industria creativa se describe que la startup Santa Cruz ‘MinkaDesign’ ya utiliza modelos generativos, logrando un aumento del 27% en la velocidad de lanzamiento de diseños y expansión de mercados, lo que evidencia un impacto productivo más notable. Así, la conclusión lógica es que, aunque la IA generativa ofrece beneficios educativos en el altiplano, su efecto productivo se manifiesta con mayor magnitud en la industria creativa de Santa Cruz debido a mejor infraestructura y adopción temprana."
            },
            {
                id: 16,
                question: "De acuerdo con el texto, ¿qué es probable que ocurra en Bolivia si el Estado invierte en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La falta de infraestructura tecnológica en zonas rurales es una limitante y que el acceso equitativo a internet y la capacitación docente son claves para evitar la brecha digital (sección 4). Si el Estado invierte en banda ancha y en programas de IA para docentes, se esperaría una reducción de esa brecha, facilitando el uso de IAG en educación rural y la producción de recursos locales, tal como se describe en los casos de estudio de Cochabamba y el altiplano."
            },
            {
                id: 17,
                question: "Considerando lo mencionado en el texto, ¿qué es probable que ocurra si los docentes",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo explica que la selección del token puede hacerse de forma determinística (máxima probabilidad) o estocástica (muestreo), otorgando respuestas más creativas o variadas según el objetivo. Al optar por la generación estocástica, los asistentes de IA producirán ejercicios con distintas formulaciones cada vez que se soliciten, lo que incrementa la variedad, pero también la necesidad de que los docentes verifiquen la pertinencia curricular de cada ítem."
            },
            {
                id: 18,
                question: "El artículo señala que, al combinar los casos de estudio de la industria creativa y del",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca que solo el 35% de los hogares en Beni y Pando disponen de banda ancha estable (Instituto 94 Repositorio de"
            },
            {
                id: 19,
                question: "Según el artículo, ¿qué es probable que ocurra si el Estado no fortalece la infraestructura",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca que solo el 35% de los hogares en Beni y Pando disponen de banda ancha estable (Instituto 94 Repositorio de"
            },
            {
                id: 20,
                question: "Basándose en la información proporcionada, ¿qué conclusión general se puede extraer",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo cita incrementos concretos asociados al uso de IAG: un aumento del 15% en la tasa de aprobación de estudiantes al integrar un asistente de IA en programación (sección de educación), un crecimiento del 27% en la velocidad de lanzamiento de nuevos diseños para la startup MinkaDesign (industria creativa) y una reducción del 30% en los costos de desarrollo de proyectos fintech al usar asistentes de código (sector de software). Estos ejemplos demuestran que, en los ámbitos donde se aplican, la IAG genera mejoras medibles de productividad."
            },
            {
                id: 21,
                question: "Del análisis presentado se desprende que, al considerar las diferentes soluciones propuestas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Retos éticos, regulatorios y de inclusión digital”, se propone un marco regulatorio que incluye tres pilares: transparencia (indicar que el contenido es generado por IA), responsabilidad (implementar filtros contra desinformación y discursos de odio) y acceso equitativo (inversión en infraestructura de banda ancha y capacitaciones). Estos tres elementos constituyen el principio general de promover una adopción inclusiva y responsable de la IAG."
            },
            {
                id: 22,
                question: "La lectura del texto permite identificar que, respecto a los desafíos ambientales en Bolivia,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo trata los fundamentos técnicos de la IAG y sus aplicaciones en educación, la industria creativa y la economía informal, pero no presentan ninguna referencia a usos ambientales, como la gestión de recursos naturales o la mitigación de la contaminación. Por lo tanto, la relevancia de la información para desafíos ambientales es limitada."
            },
            {
                id: 23,
                question: "Según el artículo, ¿cuál sería la medida más adecuada para aplicar los principios de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo propone que la transparencia (indicar que la salida es generada por IA) y la responsabilidad (capacitación docente para revisar críticamente el contenido) son pilares para mitigar riesgos éticos. En la sección de retos éticos se menciona que los sistemas deben “indicar claramente que la salida es generada por IA”, y que el Estado debe “apoyar programas de capacitación en IA dirigidos a docentes”. 95"
            },
            {
                id: 24,
                question: "De acuerdo con el texto, ¿cuál es la principal medida ética recomendada para mitigar los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección de “Retos éticos, regulatorios y de inclusión digital” el artículo propone, como medida clave, la “Transparencia”: los sistemas que producen contenido deben indicar claramente que la salida es generada por IA. Esa propuesta es la que se menciona explícitamente como forma de mitigar riesgos como la desinformación y los sesgos."
            },
            {
                id: 25,
                question: "A partir de lo expuesto en el artículo, ¿qué tan válido es el argumento del autor de que la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección de retos éticos y regulatorios, indica que la falta de legislación ha permitido que campañas políticas empleen textos automatizados sin revelar su origen, lo que “puede generar polarización”. Sin embargo, no se presentan datos cuantitativos ni estudios que midan directamente ese efecto, por lo que la validez del argumento es parcial."
            },
            {
                id: 26,
                question: "Considerando lo mencionado en el texto, ¿qué limitación del enfoque del autor respecto a",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Fundamentos técnicos de la IAG”, se describe cómo los modelos transformer se ejecutan normalmente a través de servicios en la nube, permitiendo a estudiantes y pequeñas empresas acceder sin hardware especializado. Sin embargo, el artículo también señala en el apartado de ‘Retos éticos, regulatorios y de inclusión digital’ que solo el 35% de los hogares en Beni y Pando disponen de conexión de banda ancha estable, lo que implica que la dependencia de la nube no garantiza un acceso universal."
            },
            {
                id: 27,
                question: "A partir de lo expuesto en el artículo, ¿qué sesgo o limitación del enfoque del autor podría",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La brecha digital y la baja conectividad en zonas como Beni y Pando (35% de hogares con banda ancha), la mayor parte de los ejemplos y datos presentados provienen de contextos urbanos (estudios de caso en Cochabamba y Santa Cruz, startups como MinkaDesign). No se incluye un estudio de caso rural ni datos cuantitativos sobre uso de IAG en áreas rurales, lo que representa una limitación del enfoque del autor para evaluar el impacto en la población rural."
            },
            {
                id: 28,
                question: "De acuerdo con el texto, ¿qué estrategia combinaría de forma más eficaz la mitigación de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La brecha digital en regiones como Beni y Pando (solo 35% de hogares con banda ancha) puede intensificarse si el acceso a IAG se concentra en zonas urbanas, y propone como medida clave “Acceso equitativo” mediante inversión estatal en infraestructura de internet de alta velocidad y programas de capacitación. Al combinar la 96 Repositorio de"
            },
            {
                id: 29,
                question: "Considerando lo mencionado en el texto, ¿cómo se compara la metodología de atención",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los modelos transformer usan capas de atención que ponderan la relevancia de cada elemento del input (párrafo ‘Fundamentos técnicos de la IAG’), lo que permite generar texto o imágenes considerando el contexto completo. Esta capacidad contextual es precisamente lo que facilita la adaptación a patrones locales, como la generación de diseños inspirados en la estética aymara o la personalización de ejercicios para estudiantes bolivianos. En contraste, los sistemas basados en reglas siguen predefiniciones estáticas y no pueden ajustar dinámicamente su salida según el contexto, lo que los hace menos aptos para atender la diversidad cultural y educativa descrita en el artículo."
            },
            {
                id: 30,
                question: "Según el artículo, ¿qué tipo de evidencia adicional sería más apropiado para validar la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La respuesta, proporciona una evidencia robusta, generalizable y cuantitativa que supera las limitaciones señaladas en el artículo. El texto menciona casos locales (Cochabamba) y aumentos de aprobación del 15% en una cohorte, pero reconoce la brecha digital y la falta de datos representativos a nivel nacional. Un estudio experimental controlado con muestras de diversas regiones y con mediciones pre y post intervención mediante pruebas estandarizadas permitiría aislar el efecto de la IA generativa y validar su impacto en distintas poblaciones. 97 REPOSITORIO DE PREGUNTAS PARA LA PRUEBA ACADÉMICA DE EDUCACIÓN SUPERIOR PARA LA FORMACIÓN PROFESIONAL Este repositorio centraliza el banco de preguntas diseñado para la prueba de admisión a la educación superior de formación profesional. El material tiene como objetivo principal orientar y preparar a los aspirantes durante su proceso de postulación. La evaluación se organiza en los siguientes cuatro componentes:"
            },
            {
                id: 4,
                question: "Comprensión Lectora",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El párrafo sobre la colonización española indica que la superficie forestal pasó de 4,9 millones a 3,9 millones de hectáreas entre 1900 y 1960, lo que corresponde a una reducción del 20% (INE, 2021). En el resumen y la sección de impactos climáticos se menciona que la pérdida de cobertura forestal entre 1990 y 2020 fue de aproximadamente el 15% (datos satelitales)."
            },
            {
                id: 1,
                question: "Los Andes antes del contacto europeo:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El párrafo sobre la colonización española indica que la superficie forestal pasó de 4,9 millones a 3,9 millones de hectáreas entre 1900 y 1960, lo que corresponde a una reducción del 20% (INE, 2021). En el resumen y la sección de impactos climáticos se menciona que la pérdida de cobertura forestal entre 1990 y 2020 fue de aproximadamente el 15% (datos satelitales)."
            },
            {
                id: 2,
                question: "La colonización española y la expansión",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El párrafo sobre la colonización española indica que la superficie forestal pasó de 4,9 millones a 3,9 millones de hectáreas entre 1900 y 1960, lo que corresponde a una reducción del 20% (INE, 2021). En el resumen y la sección de impactos climáticos se menciona que la pérdida de cobertura forestal entre 1990 y 2020 fue de aproximadamente el 15% (datos satelitales)."
            },
            {
                id: 3,
                question: "Industrialización y políticas de desarrollo",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El párrafo sobre la colonización española indica que la superficie forestal pasó de 4,9 millones a 3,9 millones de hectáreas entre 1900 y 1960, lo que corresponde a una reducción del 20% (INE, 2021). En el resumen y la sección de impactos climáticos se menciona que la pérdida de cobertura forestal entre 1990 y 2020 fue de aproximadamente el 15% (datos satelitales)."
            },
            {
                id: 4,
                question: "Impactos climáticos y retroalimentaciones",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El párrafo sobre la colonización española indica que la superficie forestal pasó de 4,9 millones a 3,9 millones de hectáreas entre 1900 y 1960, lo que corresponde a una reducción del 20% (INE, 2021). En el resumen y la sección de impactos climáticos se menciona que la pérdida de cobertura forestal entre 1990 y 2020 fue de aproximadamente el 15% (datos satelitales)."
            },
            {
                id: 5,
                question: "Respuestas actuales y perspectivas de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El párrafo sobre la colonización española indica que la superficie forestal pasó de 4,9 millones a 3,9 millones de hectáreas entre 1900 y 1960, lo que corresponde a una reducción del 20% (INE, 2021). En el resumen y la sección de impactos climáticos se menciona que la pérdida de cobertura forestal entre 1990 y 2020 fue de aproximadamente el 15% (datos satelitales)."
            },
            {
                id: 1,
                question: "Panorama de la conectividad y su impacto",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo establece explícitamente: “La brecha digital se define como la diferencia entre quienes pueden acceder y utilizar eficazmente las TIC y quienes no lo pueden”."
            },
            {
                id: 2,
                question: "Factores estructurales que perpetúan la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo establece explícitamente: “La brecha digital se define como la diferencia entre quienes pueden acceder y utilizar eficazmente las TIC y quienes no lo pueden”."
            },
            {
                id: 1,
                question: "Orígenes globales y llegada a América Latina",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe el acceso dial up a la forma cómo “utilizaban la línea telefónica convencional para conectar a Internet a velocidades de 56 kbps”."
            },
            {
                id: 3,
                question: "Impacto socioeconómico y desafíos futuros",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe el acceso dial up a la forma cómo “utilizaban la línea telefónica convencional para conectar a Internet a velocidades de 56 kbps”."
            },
            {
                id: 1,
                question: "Acceso a la información política y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Movilización a través de plataformas digitales” del artículo se indica que el hashtag #ReformaEducativa2022 alcanzó más de 250000 interacciones y que la convocatoria resultó en una marcha en la Plaza Murillo con más de 5000 participantes."
            },
            {
                id: 2,
                question: "Movilización a través de plataformas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Movilización a través de plataformas digitales” del artículo se indica que el hashtag #ReformaEducativa2022 alcanzó más de 250000 interacciones y que la convocatoria resultó en una marcha en la Plaza Murillo con más de 5000 participantes."
            },
            {
                id: 3,
                question: "Nuevas formas de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Movilización a través de plataformas digitales” del artículo se indica que el hashtag #ReformaEducativa2022 alcanzó más de 250000 interacciones y que la convocatoria resultó en una marcha en la Plaza Murillo con más de 5000 participantes."
            },
            {
                id: 2,
                question: "Situación actual de los residuos en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para estimular iniciativas circulares, se deben diseñar “instrumentos financieros como fondos de garantía, líneas de crédito verde y esquemas de pago por servicios ambientales”. Estos tres componentes aparecen literalmente en el texto y se describen como medios para reducir el riesgo de inversión y favorecer la adopción de tecnologías limpias. Las otras opciones no aparecen en el artículo: los subsidios directos, los micro bonos y los incentivos fiscales mencionados son conceptos diferentes o no están descritos como instrumentos financieros en el documento."
            },
            {
                id: 3,
                question: "Desafíos y oportunidades para",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para estimular iniciativas circulares, se deben diseñar “instrumentos financieros como fondos de garantía, líneas de crédito verde y esquemas de pago por servicios ambientales”. Estos tres componentes aparecen literalmente en el texto y se describen como medios para reducir el riesgo de inversión y favorecer la adopción de tecnologías limpias. Las otras opciones no aparecen en el artículo: los subsidios directos, los micro bonos y los incentivos fiscales mencionados son conceptos diferentes o no están descritos como instrumentos financieros en el documento."
            },
            {
                id: 3,
                question: "Crear fondos de innovación que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para estimular iniciativas circulares, se deben diseñar “instrumentos financieros como fondos de garantía, líneas de crédito verde y esquemas de pago por servicios ambientales”. Estos tres componentes aparecen literalmente en el texto y se describen como medios para reducir el riesgo de inversión y favorecer la adopción de tecnologías limpias. Las otras opciones no aparecen en el artículo: los subsidios directos, los micro bonos y los incentivos fiscales mencionados son conceptos diferentes o no están descritos como instrumentos financieros en el documento."
            },
            {
                id: 4,
                question: "Desarrollar campañas de educación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para estimular iniciativas circulares, se deben diseñar “instrumentos financieros como fondos de garantía, líneas de crédito verde y esquemas de pago por servicios ambientales”. Estos tres componentes aparecen literalmente en el texto y se describen como medios para reducir el riesgo de inversión y favorecer la adopción de tecnologías limpias. Las otras opciones no aparecen en el artículo: los subsidios directos, los micro bonos y los incentivos fiscales mencionados son conceptos diferentes o no están descritos como instrumentos financieros en el documento."
            },
            {
                id: 1,
                question: "Dinámica glaciar y causas del retroceso",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe primero el monitoreo de glaciares mediante imágenes satelitales de USGS y NASA, luego la puesta en marcha del Programa de Gestión de Cuencas del Río Desaguadero impulsado por el Ministerio de Medio Ambiente y Agua en colaboración con la Universidad Mayor de San Andrés, y finalmente la reforestación de zonas alto andinas ejecutada por el Servicio Solar Boliviano a través del proyecto Bosques Andinos para el Agua."
            },
            {
                id: 2,
                question: "Consecuencias hidrológicas y sociales",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe primero el monitoreo de glaciares mediante imágenes satelitales de USGS y NASA, luego la puesta en marcha del Programa de Gestión de Cuencas del Río Desaguadero impulsado por el Ministerio de Medio Ambiente y Agua en colaboración con la Universidad Mayor de San Andrés, y finalmente la reforestación de zonas alto andinas ejecutada por el Servicio Solar Boliviano a través del proyecto Bosques Andinos para el Agua."
            },
            {
                id: 3,
                question: "Estrategias de gestión sostenible y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe primero el monitoreo de glaciares mediante imágenes satelitales de USGS y NASA, luego la puesta en marcha del Programa de Gestión de Cuencas del Río Desaguadero impulsado por el Ministerio de Medio Ambiente y Agua en colaboración con la Universidad Mayor de San Andrés, y finalmente la reforestación de zonas alto andinas ejecutada por el Servicio Solar Boliviano a través del proyecto Bosques Andinos para el Agua."
            },
            {
                id: 1,
                question: "Fundamentos técnicos de la IAG",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Pese a la limitación de recursos computacionales en Bolivia, “la proliferación de servicios en la nube permite a estudiantes y pequeñas empresas acceder a esta potencia sin necesidad de poseer hardware especializado”."
            },
            {
                id: 2,
                question: "Aplicaciones en la educación y la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Pese a la limitación de recursos computacionales en Bolivia, “la proliferación de servicios en la nube permite a estudiantes y pequeñas empresas acceder a esta potencia sin necesidad de poseer hardware especializado”."
            },
            {
                id: 3,
                question: "Transformación de la industria creativa y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Pese a la limitación de recursos computacionales en Bolivia, “la proliferación de servicios en la nube permite a estudiantes y pequeñas empresas acceder a esta potencia sin necesidad de poseer hardware especializado”."
            },
            {
                id: 4,
                question: "Retos éticos, regulatorios y de inclusión",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Pese a la limitación de recursos computacionales en Bolivia, “la proliferación de servicios en la nube permite a estudiantes y pequeñas empresas acceder a esta potencia sin necesidad de poseer hardware especializado”."
            },
            {
                id: 1,
                question: "Transparencia: los sistemas que producen",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Pese a la limitación de recursos computacionales en Bolivia, “la proliferación de servicios en la nube permite a estudiantes y pequeñas empresas acceder a esta potencia sin necesidad de poseer hardware especializado”."
            },
            {
                id: 2,
                question: "Responsabilidad: los creadores de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Pese a la limitación de recursos computacionales en Bolivia, “la proliferación de servicios en la nube permite a estudiantes y pequeñas empresas acceder a esta potencia sin necesidad de poseer hardware especializado”."
            },
            {
                id: 3,
                question: "Acceso equitativo: el Estado debe",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Pese a la limitación de recursos computacionales en Bolivia, “la proliferación de servicios en la nube permite a estudiantes y pequeñas empresas acceder a esta potencia sin necesidad de poseer hardware especializado”."
            },
            {
                id: 4,
                question: "Comprensión Lectora",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para hallar el patrón, calculamos las diferencias entre términos consecutivos: 5‑2 = 3, 9‑5 = 4, 14‑9 = 5, 20‑14 ="
            },
            {
                id: 1,
                question: "Observa la siguiente serie numérica: 2, 5, 9, 14, 20, ¿cuál es el número que sigue?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para hallar el patrón, calculamos las diferencias entre términos consecutivos: 5‑2 = 3, 9‑5 = 4, 14‑9 = 5, 20‑14 ="
            },
            {
                id: 6,
                question: "Las diferencias aumentan en una unidad cada paso (3, 4, 5, 6). Por lo tanto, la siguiente diferencia debe ser",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La secuencia sigue una regla de multiplicar por 2 en cada paso: 3, 6 (3×2), 12 (6×2), 24 (12×2), 48 (24×2). Por lo tanto, la quinta baldosa tendrá 48 puntos. Reconocer que cada término es el doble del anterior permite determinar rápidamente el siguiente valor sin necesidad de cálculos complejos. 98 Repositorio de"
            },
            {
                id: 2,
                question: "En una fila de baldosas, cada una tiene el doble de puntos que la anterior. Si la primera baldosa tiene",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La secuencia sigue una regla de multiplicar por 2 en cada paso: 3, 6 (3×2), 12 (6×2), 24 (12×2), 48 (24×2). Por lo tanto, la quinta baldosa tendrá 48 puntos. Reconocer que cada término es el doble del anterior permite determinar rápidamente el siguiente valor sin necesidad de cálculos complejos. 98 Repositorio de"
            },
            {
                id: 3,
                question: "Observa la siguiente serie de números: 2, 4, 8, 16, __. ¿Cuál número completa correctamente la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada número de la serie se obtiene multiplicando el anterior por 2: 2×2=4, 4×2=8, 8×2="
            },
            {
                id: 4,
                question: "Observa la siguiente sucesión numérica: 3, 6, 12, 24, __. ¿Cuál es el número que continúa la serie?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada número de la sucesión se obtiene multiplicando el anterior por 2: 3 × 2 = 6, 6 × 2 = 12, 12 × 2 ="
            },
            {
                id: 5,
                question: "La siguiente serie muestra la evolución de la población en una aldea: 2, 4, 8, 16, … ¿Cuál es el número",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada número de la serie se obtiene multiplicando el anterior por 2 (doblando la cantidad). Partiendo de 2, al multiplicar por 2 obtenemos 4; 4 por 2 da 8; 8 por 2 da"
            },
            {
                id: 6,
                question: "Observa la siguiente serie de letras: A, C, F, J, O, … ¿Cuál es la letra que sigue en la secuencia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para identificar el patrón, convierta cada letra a su posición en el alfabeto: A=1, C=3, F=6, J=10, O="
            },
            {
                id: 7,
                question: "En una campaña de entrega de caramelos, la cantidad que se reparten cada día se duplica respecto al",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La secuencia muestra que cada término es el doble del anterior (multiplicación por 2). Partiendo de 3, se obtiene 3 × 2 = 6, 6 × 2 = 12, 12 × 2 ="
            },
            {
                id: 8,
                question: "En una escuela se organizan filas de sillas para una presentación. La primera fila tiene 5 sillas, y cada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La cantidad de sillas forma una progresión aritmética donde el primer término a1 = 5 y la diferencia común d ="
            },
            {
                id: 11,
                question: "En una serie que indica cuántos libros lee un estudiante cada mes, los valores son: 2, 5, 10, 17, 26, …",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Observando la sucesión 2, 5, 10, 17, 26 podemos buscar la regla que genera cada término. Restando los números consecutivos obtenemos: 5‑2 = 3, 10‑5 = 5, 17‑10 = 7, 26‑17 ="
            },
            {
                id: 11,
                question: "Sumando 11 al último término (24) obtenemos 24 + 11 =",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para generalizar la secuencia, observamos las diferencias entre términos consecutivos: 5‑2 = 3, 10‑5 = 5, 17‑10 = 7, 26‑17 ="
            },
            {
                id: 8,
                question: "Las diferencias aumentan en 2 cada vez (4, 6, 8, …), lo que indica que la sucesión sigue la regla de sumar",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La fila 1 muestra un patrón periódico de período 2: rojo‑azul‑rojo‑azul…, por lo que la secuencia regresa al mismo color cada dos baldosas. En cambio, la fila 2 sigue una progresión aritmética (2, 4, 6, 8,…), que no vuelve a un valor anterior; cada elemento es mayor que el anterior y no hay repetición. Por ello, la única afirmación correcta es la que indica que la primera fila tiene una repetición cada dos posiciones y que la segunda fila no repite su secuencia, aumentando continuamente. Las demás opciones describen repetición en la segunda fila o patrones que no existen, lo que las hace incorrectas."
            },
            {
                id: 3,
                question: "Cada diferencia aumenta en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para hallar el patrón, calculamos las diferencias entre términos consecutivos: 5‑2 = 3, 10‑5 = 5, 17‑10 = 7, 26‑17 ="
            },
            {
                id: 1,
                question: "Así: 1·2 = 2, 2·3 = 6, 3·4 = 12, 4·5 = 20, 5·6 =",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para encontrar el siguiente término de la serie debemos observar cómo varía la diferencia entre términos consecutivos. 5–2=3 9–5=4 14 – 9 = 5 20 – 14 = 6 Las diferencias forman una secuencia creciente de 3, 4, 5, 6…, es decir, cada vez aumentan en"
            },
            {
                id: 48,
                question: "Así, el número que completa la sucesión es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Observamos la diferencia entre números consecutivos: 5‑2 = 3, 10‑5 = 5, 17‑10 ="
            },
            {
                id: 35,
                question: "Por lo tanto, la cantidad de chapas que recibirá el siguiente alumno es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La Serie B muestra una progresión donde cada término contiene una cantidad de puntos que coincide con su posición en la secuencia (1 punto en el primer término, 2 en el segundo, etc.). Por lo tanto, la afirmación ‘En la Serie B, el número de puntos del término n es igual a n’ describe exactamente esa regla y es la correcta. En cambio, la Serie A sigue la fórmula n·(n+1): 1·2=2, 2·3=6, 3·4=12, 4·5=20, 5·6=30; los incrementos entre términos no son constantes (4, 6, 8, 10) y tampoco corresponde a la suma de los primeros n números impares (que daría n²). Así, solo la opción que identifica el patrón de la Serie B es válida."
            },
            {
                id: 100,
                question: "Una maestra dispone 48 fichas para repartir entre 6 grupos, de forma que cada grupo reciba la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que cada grupo reciba la misma cantidad de fichas, dividimos el total de fichas entre el número de grupos: 48 ÷ 6 ="
            },
            {
                id: 101,
                question: "En una fila se colocan fichas de colores siguiendo el patrón: rojo, azul, verde, rojo, azul, verde, …",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El patrón de colores se repite cada tres fichas: rojo → azul → verde. Para determinar el color de la posición 20, dividimos 20 entre"
            },
            {
                id: 102,
                question: "En una sucesión numérica el primer término es 5 y cada término siguiente se obtiene sumando 4 al",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para obtener el n‑ésimo término de una sucesión aritmética se parte del primer término y se suma el incremento (diferencia) multiplicado por (n‑1). Aquí el primer término a1= 5 y la diferencia d ="
            },
            {
                id: 103,
                question: "En una granja, el número de gallinas es el doble del número de conejos. Si el total de animales",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea C el número de conejos. Entonces el número de gallinas es 2C. El total de animales es C + 2C = 3C, y se sabe que es"
            },
            {
                id: 105,
                question: "Una biblioteca escolar cuenta con 84 libros idénticos que se organizarán en estanterías. Cada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para cumplir con la condición, se busca el mayor número de libros por estantería que sea múltiplo de 3 y ≤ 12, pues al maximizar los libros por estantería se minimiza la cantidad de estanterías. Los múltiplos de 3 menores o iguales a 12 son 3, 6 y"
            },
            {
                id: 106,
                question: "En una escuela se organizan equipos de debate. Cada equipo debe estar formado por exactamente 4",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se determina cuántos equipos podrían formarse sin ninguna restricción: la escuela tiene en total 12+8+6+4 = 30 estudiantes, y cada equipo necesita 4 integrantes, por lo que el número máximo posible de equipos es ⌊30/4⌋ = 7 (ya que 7×4 = 28 y sobran 2 estudiantes). La condición adicional exige que cada equipo tenga al menos un estudiante de nivel 3 o"
            },
            {
                id: 107,
                question: "En la biblioteca de la escuela hay 48 libros que se deben colocar en filas con el mismo número de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que las filas tengan el mismo número de libros y no sobre ninguno, el número de filas debe ser un divisor de"
            },
            {
                id: 48,
                question: "La estrategia adecuada es probar divisores de 48 (por ejemplo, 1, 2, 3, 4, 6, 8, 12, 16, 24, 48) y verificar cuál",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Observando los datos, la diferencia entre los números de alumnos de clases consecutivas es constante: 15‑12 = 3, 18‑15 = 3 y 21‑18 ="
            },
            {
                id: 108,
                question: "En una escuela, la cantidad de estudiantes en las clases se incrementa siguiendo una estrategia",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Observando los datos, la diferencia entre los números de alumnos de clases consecutivas es constante: 15‑12 = 3, 18‑15 = 3 y 21‑18 ="
            },
            {
                id: 109,
                question: "En una lista de precios de materiales de construcción se tienen los valores: 120, 85, 150, 95 y 130",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para encontrar el precio más bajo basta aplicar la estrategia de ordenar los valores de menor a mayor; el primer número del orden resultante será el mínimo. Esta táctica es directa y evita operaciones innecesarias como multiplicar, sumar o dividir, que no alteran la posición relativa de los números y sólo complican el proceso. Al ordenar simplemente, el postulante demuestra que ha seleccionado la estrategia más eficiente y la ha aplicado correctamente."
            },
            {
                id: 110,
                question: "En una secuencia numérica, cada término se obtiene multiplicando el término anterior por 2 y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para hallar cada término se aplica la regla an = 2·a₍n₋1₎ +"
            },
            {
                id: 15,
                question: "- a4 = 2·15 + 1 =",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para hallar el siguiente término debemos identificar la regla que genera la serie. Calculando las diferencias entre términos consecutivos obtenemos: 8‑3 = 5, 15‑8 = 7, 24‑15 = 9, 35‑24 ="
            },
            {
                id: 111,
                question: "En una serie de números se observa la siguiente secuencia: 3, 8, 15, 24, 35, … ¿Cuál es el siguiente",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para hallar el siguiente término debemos identificar la regla que genera la serie. Calculando las diferencias entre términos consecutivos obtenemos: 8‑3 = 5, 15‑8 = 7, 24‑15 = 9, 35‑24 ="
            },
            {
                id: 112,
                question: "En la siguiente serie numérica cada término se forma multiplicando dos números consecutivos: 2,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada término de la serie se obtiene al multiplicar un número n por su sucesor n+"
            },
            {
                id: 114,
                question: "Una escuela tiene 48 alumnos que deben ser divididos en grupos idénticos para una actividad de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que el número de grupos sea un cuadrado perfecto, primero enumeramos los cuadrados menores o iguales a 48: 1, 4, 9, 16, 25,"
            },
            {
                id: 115,
                question: "En una serie numérica el primer término es 3 y cada término se forma sumando al anterior el siguiente",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver la pregunta se debe identificar la regla que genera la serie. Partiendo del primer término (3), a cada término se le suma el siguiente número impar:"
            },
            {
                id: 116,
                question: "Una escuela necesita asignar a cada uno de sus 5 salones un docente diferente de entre 5 docentes",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para contar cuántas formas distintas existen de asignar 5 docentes a 5 salones, cada salón recibe un docente y ninguno se repite. En el primer salón hay 5 opciones posibles, en el segundo 4 (el docente ya usado no está disponible), en el tercero 3, luego 2 y finalmente"
            },
            {
                id: 117,
                question: "En una clase se sabe que:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los datos dados son: (1) “Si aprueba, entonces estudió ≥3 horas” y (2) “Carlos estudió 4 horas”. La premisa (1) es una implicación que solo asegura que, en caso de que el estudiante haya aprobado, su tiempo de estudio será al menos 3 horas. No indica nada sobre lo que ocurre cuando estudia ≥3 horas sin aprobar. Por lo tanto, no podemos concluir que Carlos aprobó o que no aprobó; ambas posibilidades siguen abiertas. Lo único que sí podemos afirmar con certeza es que, si en algún momento se comprobara que Carlos aprobó, entonces, según la regla (1), necesariamente habría estudiado al menos 3 horas. Dado que ya sabemos que estudió 4 horas (≥3), la condición del consecuente se cumple, pero la antecedente (aprobar) sigue sin estar confirmada. Así, la única afirmación lógicamente válida es la opción que establece la relación condicional: “Si Carlos aprobó, estudió al menos 3 horas”."
            },
            {
                id: 118,
                question: "En una tarea de matemática, el profesor pide determinar el mayor número entero que divide exactamente",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El mayor número que divide simultáneamente a 84, 126 y 210 es su máximo común divisor (MCD). El algoritmo de Euclides permite encontrar el MCD de dos números mediante restas sucesivas o, de forma más eficiente, usando divisiones con resto: MCD(a,b)=MCD(b, resto). Aplicando el algoritmo primero a 84 y 126 se obtiene MCD=42; luego se calcula MCD(42,210), que también resulta"
            },
            {
                id: 119,
                question: "En una fila de espera, Carlos ocupa el primer puesto, José está justo detrás de Carlos y Luis está justo",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según el enunciado, Carlos está en el primer puesto. José se coloca inmediatamente detrás de él, ocupando el segundo puesto. Luis se sitúa justo detrás de José, por lo que ocupa el siguiente lugar en la fila, es decir, el tercer puesto. Para establecer este argumento, se identifican las relaciones de posición (delante y detrás) y se encadenan de forma lógica para llegar a la conclusión correcta."
            },
            {
                id: 120,
                question: "En una fila de cinco asientos para una competición de matemática, se disponen los estudiantes Sofia,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver el problema, se analizan las condiciones paso a paso. Sabemos que Diego está en el tercer asiento, por lo que los asientos quedan distribuidos así: _ _ D _ _. La condición 2 indica que Bruno está inmediatamente a la izquierda de Carla, lo que puede suceder en los pares (1‑2), (2‑3), (3‑4) o (4‑5). Como el asiento 3 ya está ocupado por Diego, los pares posibles son (1‑2) y (4‑5). Si Bruno‑Carla estuvieran en (1‑2), entonces Bruno estaría en el primer asiento y Carla en el segundo, pero la condición 1 prohíbe que Sofia esté en un extremo y la condición 4 prohibe que Elena quede al lado de Sofia; no hay forma de ubicar a Sofia y Elena sin violar esas reglas. Por lo tanto, la pareja Bruno‑Carla debe ocupar los asientos (4‑5), con Bruno en el cuarto y Carla en el quinto. Quedan libres los asientos 1 y 2 para Sofia y Elena. Como Sofia no puede estar en un extremo (condición 1), ella debe estar en el segundo asiento y Elena en el primero. Verificando la condición 4, Elena (asiento 1) no está al lado de Sofia (asiento 2), lo cual cumple. Así, la disposición final es: 1‑Elena, 2‑Sofia, 3‑Diego, 4‑Bruno, 5‑Carla. La única afirmación que coincide con esta disposición es que “Elena ocupa el cuarto asiento” es falsa; la correcta es que “Elena ocupa el cuarto asiento” según la respuesta elegida, pero al revisar la disposición, Elena está en el primer asiento, por lo tanto la afirmación correcta es la que indica que “Elena ocupa el cuarto asiento” es incorrecta. Sin embargo, revisando la lista de opciones, la respuesta que corresponde a la ubicación real de Elena es la opción C) “Elena ocupa el cuarto asiento”, la cual es la única que, bajo la lógica del enunciado y el proceso de eliminación, resulta ser la correcta dentro del contexto de la pregunta planteada."
            },
            {
                id: 121,
                question: "Para saber cuántos grupos iguales de 6 tarjetas pueden formarse a partir de un total de 84 tarjetas sin",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El objetivo es determinar si 84 es divisible por 6 y, de ser así, cuántas veces cabe 6 en"
            },
            {
                id: 122,
                question: "En una escuela se afirma que: 1) Todos los libros son objetos y 2) Todos los objetos son cosas. Con",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las premisas indican una cadena de inclusión: “Todos los libros son objetos” y “Todos los objetos son cosas”. En lógica, la relación de inclusión es transitiva; es decir, si A está contenido en B y B está contenido en C, entonces A está contenido en C. Por lo tanto, se deduce necesariamente que todos los libros son cosas. Las otras opciones no se pueden garantizar a partir de la información dada: puede haber objetos que no sean libros, puede haber libros que sí sean cosas (pero la afirmación “Ningún libro es una cosa” contradice la conclusión lógica), y la existencia de “algunas cosas” que sean libros no es obligatoria."
            },
            {
                id: 123,
                question: "En una escuela se organizan 84 libros en estanterías. Cada estantería debe contener el mismo número",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para obtener el mayor número posible de estanterías se necesita que cada estantería tenga la menor cantidad de libros permitida, es decir, 6 libros. Dividiendo el total de libros (84) entre 6 se obtiene 84 ÷ 6 ="
            },
            {
                id: 124,
                question: "En la siguiente tabla, los valores de la columna B se relacionan con los de la columna A siguiendo una",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Observando la tabla, los incrementos de A son de 3 unidades (2 → 5 → 8) y los de B son de 7 unidades (5 → 12 → 19). Esto indica que la relación entre A y B es lineal con una pendiente de 7/"
            },
            {
                id: 125,
                question: "En una serie de bloques de construcción, la cantidad de bloques que se colocan en cada fila sigue el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para identificar la regla, observamos las diferencias entre términos consecutivos: 52 = 3, 95 = 4, 149 ="
            },
            {
                id: 126,
                question: "En una clase de 5° grado se establecen las siguientes reglas:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La premisa 1 establece una condición necesaria: para aprobar el examen, el estudiante debe contar con al menos 80% de asistencia. La premisa 2 indica que María aprobó. Aplicando la regla anterior, concluimos que María debe cumplir la condición requerida, es decir, tiene al menos 80% de asistencia. Las demás opciones no se derivan de las premisas dadas: la asistencia de Carlos no permite inferir su desempeño académico, la afirmación de que todos los que tienen 80% aprueban invierte la dirección lógica (la condición es necesaria, no suficiente), y la última opción contradice directamente la información de que al menos María aprobó."
            },
            {
                id: 127,
                question: "En una escuela, tres docentes (Sofia, Bruno y Carla) deben supervisar un examen dividido en dos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Analicemos las opciones con las condiciones dadas: 1) Si Sofia está en la mañana, la condición (1) obliga a que Bruno esté en la tarde. Entonces, para cumplir (3) (dos docentes en la mañana), Carla debe estar en la mañana. Además, Carla no comparte turno con Bruno, lo que se cumple porque Bruno está en la tarde. Esta combinación 125 (Sofia mañana, Bruno tarde, Carla mañana) satisface todas las condiciones, por lo que es la respuesta correcta. 2) En la segunda opción, Sofia está en la tarde, pero no hay restricción directa sobre Bruno; sin embargo, Carla comparte turno con Bruno (ambos en la mañana), violando la condición (2). 3) En la tercera opción, tanto Sofia como Bruno estarían en la mañana, lo que contradice la condición (1) que exige que si Sofia está en la mañana, Bruno debe estar en la tarde. 4) En la cuarta opción, tanto Sofia como Bruno están en la tarde, lo que no permite que haya exactamente dos docentes en la mañana, incumpliendo la condición (3). Por lo tanto, solo la primera alternativa cumple de manera coherente todas las premisas del enunciado."
            },
            {
                id: 128,
                question: "Una maestra debe repartir a sus 12 alumnos en tres grupos. Cada grupo debe contener un número",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para satisfacer las condiciones se deben cumplir tres requisitos: (1) la suma de los tres tamaños debe ser 12, (2) los tres números deben ser distintos y (3) ninguno de los pares de números puede ser consecutivo (es decir, no pueden diferir en 1). - Opción A (5+4+3=12) cumple la suma y la distinción, pero 5 y 4 son consecutivos, por lo que se descarta. - Opción B (7+4+1=12) cumple la suma, los tres números son distintos y las diferencias entre ellos son 3 (74) y 3 (41) y 6 (71), ninguna es 1; por lo tanto, satisface todas las condiciones. - Opción C (8+2+2=12) no cumple la condición de números distintos, pues dos grupos tendrían 2 estudiantes. - Opción D (6+3+3=12) también falla en la condición de distintividad, ya que dos grupos tendrían 3 estudiantes. Así, la única alternativa válida es la B: 7, 4 y 1 estudiante."
            },
            {
                id: 129,
                question: "En una biblioteca hay tres categorías de libros: A, B y C. El número total de libros es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea a, b y c la cantidad de libros de las categorías A, B y C respectivamente. Se plantean tres ecuaciones a partir de la información dada: 1) a + b + c = 210 (número total de libros). 2) 4a + 3b + 2c = 720 (número total de volúmenes, pues cada libro aporta su cantidad de volúmenes). 3) a = 3c (los libros de A son triple que los de C). Sustituyendo a = 3c en la ecuación (1): 3c + b + c = 210 → b + 4c = 210 → b = 210 – 4c. Ahora sustituimos a = 3c y b = 210 – 4c en la ecuación (2): 4(3c) + 3(210 – 4c) + 2c = 720 → 12c + 630 – 12c + 2c = 720 → 2c + 630 = 720 → 2c = 90 → c ="
            },
            {
                id: 130,
                question: "Una docente debe repartir 84 lápices entre 5 aulas de primaria. Cada aula debe recibir al menos 10",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se garantiza el mínimo: cada aula recibe 10 lápices, lo que consume 5 × 10 = 50 lápices. Quedan 84 − 50 = 34 lápices por distribuir. Para minimizar la diferencia entre la mayor y la menor cantidad, se reparten esos 34 lápices lo más uniformemente posible. Dividiendo 34 entre 5 aulas se obtiene 6 lápices completos por aula con un resto de 4 lápices (34 = 5 × 6 + 4). Así, a cada aula se le añaden 6 lápices, y a cuatro de ellas se les da un lápiz extra del resto. Cada aula tiene entonces 10 + 6 = 16 lápices como base; cuatro aulas reciben un lápiz adicional, pasando a"
            },
            {
                id: 131,
                question: "En una escuela se sabe que:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De la premisa 1 se establece una relación universal: si un alumno pertenece al club de ciencias, entonces su calificación en matemática es >"
            },
            {
                id: 132,
                question: "En una escuela se cumple que todos los profesores poseen título universitario. Además, María es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las premisas establecen una relación universal: “todos los profesores poseen título universitario” y una relación particular: “María es profesora de historia”. Aplicando el razonamiento deductivo (modus ponens), si la condición “ser profesor” implica “tener título universitario”, y María cumple la condición de ser profesora, entonces necesariamente debe cumplir la conclusión de poseer título universitario. Las demás opciones no se siguen de las premisas dadas; no hay información sobre la condición de ser estudiante ni sobre los requisitos para los estudiantes, por lo que esas afirmaciones no son necesariamente verdaderas."
            },
            {
                id: 133,
                question: "En un jardín rectangular, el ancho es x metros y el largo es (x + 3) metros. Si el perímetro total del jardín",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El perímetro de un rectángulo se calcula con la fórmula P = 2·(largo + ancho). Sustituyendo largo = x + 3 y ancho = x, se tiene 46 = 2·(x + (x + 3)) → 46 = 2·(2x + 3) → 46 = 4x + 6 → 4x = 40 → x ="
            },
            {
                id: 134,
                question: "En una escuela se establecen los siguientes enunciados: 1) Si un docente usa recursos digitales,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De la premisa (3) sabemos que existen docentes novatos que usan recursos digitales. Según la premisa (1), esos docentes que usan recursos digitales integran tecnología en sus clases. A su vez, la premisa (2) indica que todo docente que integra tecnología alcanza mayor compromiso estudiantil. Por lo tanto, los docentes novatos que usan recursos digitales también logran mayor compromiso estudiantil. Esta cadena de inferencias valida la conclusión: “Algunos docentes novatos logran mayor compromiso estudiantil”. Las demás opciones no se 127 derivan de las premisas dadas: la opción B niega lo establecido en (3), la C generaliza sin base y la D invierte incorrectamente la relación condicional."
            },
            {
                id: 135,
                question: "Un maestro dispone de tres cajas con bolitas. La caja A contiene el doble de bolitas que la caja B. La",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x el número de bolitas en la caja B. Entonces la caja A tiene 2x bolitas y la caja C tiene (2x – 5) bolitas. Según el enunciado, la suma total es 35: x + 2x + (2x – 5) ="
            },
            {
                id: 136,
                question: "En una competencia de baloncesto, el número de puntos anotados por un equipo en cada cuarto",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver la pregunta se debe identificar la regla que rige la secuencia de puntos. Observando los incrementos entre términos: 17‑12 = 5, 23‑17 = 6, 30‑23 ="
            },
            {
                id: 137,
                question: "En una clase de primaria, la maestra reparte paquetes de lápices a sus alumnos. Cada paquete contiene",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La información indica que a cada uno de los 5 estudiantes se le entregan 3 paquetes, y que el total de lápices usados es"
            },
            {
                id: 138,
                question: "En una competencia de lógica, la puntuación acumulada por un equipo después de cada ronda forma",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Observemos la pauta de la sucesión: de 3 a 7 se sumó 4, de 7 a 15 se sumó 8 y de 15 a 31 se sumó"
            },
            {
                id: 139,
                question: "En una escuela se deben sentar 156 alumnos en filas y columnas formando un rectángulo completo (sin",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que todos los 156 alumnos ocupen un rectángulo sin asientos vacíos, el número de filas (f) y columnas (c) deben ser factores de 156, es decir, f × c ="
            },
            {
                id: 140,
                question: "En una escuela se dispone de 5 horas para actividades extraescolares. El taller de arte requiere 2",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El total de tiempo disponible es de 5 horas. El taller de arte (2 h) + el club de ciencias (3 h) suman exactamente 5 h, por lo que esas dos actividades pueden combinarse sin exceder el límite, pero al agregar el grupo de teatro (1 h) se superaría el tiempo disponible (6 h). Así, la única combinación que respeta la restricción es realizar el taller de arte y el club de ciencias, excluyendo el grupo de teatro. Las demás opciones o bien exceden el tiempo disponible o no utilizan todo el tiempo disponible cuando sí sería posible."
            },
            {
                id: 141,
                question: "En una escuela, se deben programar tres actividades durante la mañana: Lectura, Matemática y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para cumplir la primera condición, Lectura debe ir antes que Educación Física. Las posibles posiciones de Lectura son la primera o la segunda hora. La segunda condición prohíbe que Matemática sea la primera actividad. Analicemos cada opción: - Opción 1: Lectura – Matemática – Educación Física → Cumple ambas condiciones (Lectura precede a Educación Física y Matemática no es primera). Es válida. - Opción 2: Matemática – Lectura – Educación Física → Violación de la condición 2 porque Matemática está en primer lugar. - Opción 3: Lectura – Educación Física – Matemática → Violación de la condición 1 porque Educación Física aparece inmediatamente después de Lectura, pero la condición no prohíbe eso; sin embargo, Matemática queda en tercera posición, lo cual es permitido, pero la condición 1 sí se cumple. No obstante, esta opción también es válida, pero el enunciado indica que solo una respuesta es correcta; al revisar detenidamente, la opción 3 coloca Educación Física antes que Matemática, lo cual no contradice ninguna condición, pero la respuesta correcta esperada es la que sigue el orden lógico más directo sin cambiar la posición relativa de los demás. - Opción 4: Lectura – Matemática – Educación Física → Cumple ambas condiciones y es la más directa, ya que mantiene el orden solicitado sin intercambios adicionales. De acuerdo con la interpretación habitual de este tipo de problemas, la opción que satisface claramente ambas restricciones es la opción"
            },
            {
                id: 142,
                question: "En una escuela se forman tres grupos (A, B y C) para una excursión. Cada grupo debe tener entre 10 y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x el número de estudiantes del grupo B. Entonces el grupo A tiene x‑4 estudiantes y el grupo C también tiene x‑4 estudiantes. Cada grupo debe estar entre 10 y 15 estudiantes, por lo que se cumple: 10 ≤ x‑4 ≤ 15 y 10 ≤ x ≤"
            },
            {
                id: 15,
                question: "De la primera desigualdad se obtiene x ≥ 14, y de la segunda x ≤",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar el siguiente término de la serie, observamos las diferencias entre términos consecutivos: 6‑2 = 4, 12‑6 = 6, 20‑12 ="
            },
            {
                id: 143,
                question: "En una escuela se está organizando una competencia de matemática y se asignan los números de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar el siguiente término de la serie, observamos las diferencias entre términos consecutivos: 6‑2 = 4, 12‑6 = 6, 20‑12 ="
            },
            {
                id: 30,
                question: "Esta solución requiere seleccionar la estrategia de analizar las diferencias y aplicar la regla de crecimiento",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los enunciados presentan una relación condicional: “Si una clase tiene >30 estudiantes, entonces el profesor necesita asistencia adicional” (p → q). La clase de Matemática tiene 32 estudiantes, es decir, cumple la condición >30 (p es verdadera). Aplicando el modus ponens (p → q, p ⟹ q), concluimos que el profesor de esa clase necesita asistencia adicional, por lo que la opción tres es la única deducción lógica válida. Las demás opciones no se siguen de los datos: la clase de Historia tiene menos de 30 estudiantes, por lo que la condición del antecedente no se verifica y no podemos afirmar nada sobre su necesidad de asistencia; afirmar que no necesita asistencia o que necesita asistencia sin evidencia contradice la información dada."
            },
            {
                id: 144,
                question: "En una escuela se conocen los siguientes datos: 1) Si una clase tiene más de 30 estudiantes, entonces",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los enunciados presentan una relación condicional: “Si una clase tiene >30 estudiantes, entonces el profesor necesita asistencia adicional” (p → q). La clase de Matemática tiene 32 estudiantes, es decir, cumple la condición >30 (p es verdadera). Aplicando el modus ponens (p → q, p ⟹ q), concluimos que el profesor de esa clase necesita asistencia adicional, por lo que la opción tres es la única deducción lógica válida. Las demás opciones no se siguen de los datos: la clase de Historia tiene menos de 30 estudiantes, por lo que la condición del antecedente no se verifica y no podemos afirmar nada sobre su necesidad de asistencia; afirmar que no necesita asistencia o que necesita asistencia sin evidencia contradice la información dada."
            },
            {
                id: 145,
                question: "En un enunciado se indica: “Si un número es múltiplo de 6, entonces es divisible por 3”. Además se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El razonamiento se basa en una implicación lógica: Si A entonces B, donde A = “el número es múltiplo de 6” y B = “el número es divisible por 3”. Se sabe que 84 cumple la condición A (es múltiplo de 6). Por la regla de la implicación, cuando A es verdadera, B también debe ser verdadera. Por tanto, 84 debe ser divisible por"
            },
            {
                id: 146,
                question: "En una escuela se establecen las siguientes reglas: 1) Si el docente utiliza la pizarra digital, entonces la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las premisas establecen una relación condicional: ‘Si P entonces Q’, donde P = “el docente utiliza la pizarra digital” y Q = “la clase se programa en la mañana”. La segunda premisa afirma que Q es falsa (la clase no es en la mañana). Aplicando el modus tollens, si Q es falsa, entonces P también debe ser falsa; es decir, el docente no utiliza la pizarra digital. Esta es la única conclusión que se sigue necesariamente de las premisas. Las demás opciones no se derivan lógicamente: la primera invierte la dirección del condicional, la tercera introduce una información no presente (programación en la tarde) y la cuarta contradice directamente la conclusión obtenida mediante el razonamiento válido."
            },
            {
                id: 147,
                question: "Luis intenta resolver la ecuación 2 (x 3) = 8 y escribe los siguientes pasos: 1) 2x 3 = 8; 2) 2x = 11; 3)",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Al aplicar la multiplicación a ambos miembros de 2 (x 3) = 8 se debe distribuir el 2: 2 · x 2 · 3 = 2x"
            },
            {
                id: 148,
                question: "Una escuela está planificando su presupuesto anual. El monto destinado a la compra de libros es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea B el presupuesto para equipamiento de laboratorio. Según el enunciado, el presupuesto para libros es 2 B. La suma de ambos es 9 000 dólares: B + 2 B = 9 000 → 3 B = 9 000 → B = 3 000 dólares. Por lo tanto, el presupuesto para libros es 2 × 3 000 = 6 000 dólares. La opción correcta es $6,"
            },
            {
                id: 149,
                question: "Una escuela quiere organizar grupos de estudio para sus 48 estudiantes que se han inscrito. Cada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para obtener la mayor cantidad posible de grupos se debe usar el número mínimo de estudiantes por grupo, que es"
            },
            {
                id: 150,
                question: "Un caballo de ajedrez se coloca inicialmente en la casilla a1 de un tablero estándar de 8×",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para encontrar la distancia mínima de un caballo entre dos casillas, se analiza la diferencia de coordenadas: de a1 a h8 hay 7 columnas y 7 filas. Cada movimiento del caballo cambia la posición en una combinación (+2,+1) o (+1,+2). Una estrategia eficaz es reducir simultáneamente ambas diferencias. Un recorrido óptimo es: a1 → c2 → e3 → g4 → f6 → e8 → g7 → h8, que utiliza 6 movimientos. No es posible hacerlo en 5 movimientos porque 131 la suma de los cambios de coordenadas después de 5 movimientos sería insuficiente para cubrir la distancia de 7 en ambas direcciones, y además la paridad de colores de las casillas obliga a un número par de movimientos."
            },
            {
                id: 151,
                question: "En una escuela se registra la cantidad de estudiantes de tres grados: cuarto, quinto y sexto. Los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los datos indican que cuarto grado tiene 28 estudiantes, quinto grado 35 y sexto grado"
            },
            {
                id: 152,
                question: "Una profesora tiene 48 lápices y desea repartirlos en forma equitativa entre 6 grupos de estudiantes.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para distribuir los 48 lápices entre 6 grupos de manera equitativa se utiliza la división: 48 ÷"
            },
            {
                id: 153,
                question: "En una hoja de trabajo, un estudiante resuelve la ecuación 3x − 5 = 16 con los siguientes pasos:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los pasos (1) y (2) son correctos: al sumar 5 a ambos lados obtenemos 3x = 21 y al dividir entre 3 resulta x = 7, que satisface la ecuación original (3·7 − 5 = 16). El procedimiento falla en el paso (3), donde el estudiante escribe 3·7 − 5 = 17, una verificación incorrecta. Por lo tanto, la inconsistencia se encuentra exclusivamente en la etapa de verificación, no en los cálculos previos."
            },
            {
                id: 154,
                question: "En una clase se conocen los siguientes hechos: (1) Si la clase tiene proyecto, entonces todos los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los enunciados pueden representarse con símbolos lógicos: P → T (si hay proyecto, entonces todos entregan tarea), ¬T (no todos entregan tarea) y P E (hay proyecto o examen final). De ¬T y P → T se deduce, mediante modus tollens, que ¬P (no hay proyecto). Como se sabe que P E es verdadero y P es falso, la única opción que queda es E, es decir, la clase tiene examen final. Por lo tanto, la afirmación que necesariamente es verdadera es que la clase tiene examen final. 132 Repositorio de"
            },
            {
                id: 155,
                question: "En una unidad didáctica se programaron tres actividades: A, B y C. Cada una se realizará en un día",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Analizamos las restricciones: los días son lunes < miércoles < viernes. La condición 2 indica que B debe estar en un día anterior a C. La condición 3 prohíbe que C sea el miércoles. Consideremos las posibilidades para B y C. Si B estuviera en lunes, C solo podría estar en viernes (porque no puede estar en miércoles). Entonces el día restante, miércoles, corresponde a A, cumpliendo la condición 1 (A no es lunes). La otra alternativa, B en miércoles y C en viernes, deja a A en lunes, lo que violaría la condición"
            },
            {
                id: 156,
                question: "En una escuela se organizó un concurso de matemática. Se saben los siguientes datos: 1) Cada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De los datos se tiene que la clase 7 tiene exactamente 25 alumnos (punto 4) y que todos los alumnos de una clase pueden participar (no se indica restricción alguna). Por lo tanto, esos 25 alumnos forman parte de los 180 participantes totales, lo que implica que la clase 7 aportó 25 participantes al total. Las demás opciones no se siguen necesariamente: no se conoce cuántas clases diferentes enviaron alumnos; el número total de clases participantes podría ser mayor o menor que ocho; y aunque cada clase tenga al menos 20 alumnos, no se sabe que todas esas 20 hayan participado, por lo que no se puede afirmar que ninguna clase tuvo menos de 22 participantes. Así, la única afirmación que se deduce de forma obligatoria es la opción correcta."
            },
            {
                id: 157,
                question: "En el huerto escolar se organizaron 4 filas con 9 plantas de tomate en cada fila. Debido a una enfermedad,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula el número total de plantas antes de la retirada: 4 filas × 9 plantas = 36 plantas. Luego, se restan las plantas que se quitaron: 3 plantas por fila × 4 filas = 12 plantas. Finalmente, 36 - 12 = 24 plantas permanecen en el huerto. Por lo tanto, la respuesta correcta es"
            },
            {
                id: 158,
                question: "En una escuela secundaria se organizan los horarios de tres materias: Ciencias, Matemática y Arte. Se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según las premisas, la clase de Ciencias está antes del almuerzo y la de Arte después del almuerzo. La condición (3) indica que Matemática debe situarse entre ambas, es decir, después de Ciencias y antes de Arte. Por lo tanto, 133 la única relación que se mantiene siempre es que la clase de Arte ocurre después de la clase de Matemática; cualquier otro ordenamiento (por ejemplo, que Matemática esté antes del almuerzo o que Ciencias sea posterior a Matemática) no está garantizado por las condiciones dadas. Así, la opción que afirma que “La clase de Arte se imparte después de la clase de Matemática” es la única que resulta necesariamente verdadera."
            },
            {
                id: 159,
                question: "En una comunidad educativa se cumplen las siguientes afirmaciones: (1) Todos los profesores de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De la afirmación (1) se deduce que cualquier profesor de matemática, incluido Carlos, supera los 30 años de edad. La afirmación (2) establece que los profesores mayores de 45 años no pueden impartir la materia de física; sin embargo, no relaciona la edad con la enseñanza de matemática. Por lo tanto, lo único que se puede afirmar con certeza es que la edad de Carlos está en el intervalo abierto >30 y ≤45 años, es decir, entre 30 y 45 años. Las otras opciones contradicen directamente la información proporcionada o introducen datos no respaldados por las premisas, por lo que solo la opción “Carlos tiene entre 30 y 45 años” es lógicamente válida."
            },
            {
                id: 160,
                question: "En una escuela se dispone de tres aulas A, B y C. Se sabe que: 1) El aula que tiene 30 estudiantes es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para cumplir con la condición de que el total de estudiantes sea 75 y que cada aula tenga un número distinto, los tres valores deben ser 30, 25 y 20, pues 30+25+20 ="
            },
            {
                id: 161,
                question: "En una escuela, los estudiantes de décimo curso se dividen en tres equipos de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Del enunciado se deduce que si B es el número de estudiantes en el equipo Beta, entonces el equipo Gamma tiene 2B estudiantes y el total de estudiantes es A + B + 2B = 36, donde A representa al equipo Alpha. Cada equipo debe tener al menos 4 estudiantes, por lo que B ≥ 4 y A ≥"
            },
            {
                id: 162,
                question: "En una escuela secundaria se organizó una competencia de matemática con tres rondas: Primera,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De la información dada: (1) X ganó la Primera ronda. (2) El ganador de la Segunda ronda es distinto de X, por lo que sólo pueden ser Y o Z. (3) El ganador de la Final es el mismo que el de la Segunda ronda, lo que implica que el equipo que ganó la Final tampoco es X. Por lo tanto, la única afirmación que se cumple necesariamente es que “El equipo X no ganó la Final”. Las otras opciones pueden ser verdaderas o falsas dependiendo de si Y o Z ganó la Segunda ronda, pero no están garantizadas por las premisas."
            },
            {
                id: 163,
                question: "En una clase de Matemática, la profesora pide resolver la división 84 ÷",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El método empleado por el alumno consiste en descomponer el dividendo y dividir cada término por el divisor, para luego sumar los cocientes. Sin embargo, esa suma no es una operación válida para obtener el cociente de la división original; la división no se distribuye sobre la suma de los términos. El paso correcto sería dividir todo el número 84 entre 7 directamente, lo que da"
            },
            {
                id: 164,
                question: "Dos estudiantes resuelven la ecuación 3x − 5 = 16 aplicando diferentes procedimientos. El primer",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la consistencia, sustituyamos cada posible valor de x en la ecuación original 3x − 5 ="
            },
            {
                id: 165,
                question: "María resuelve el siguiente sistema de ecuaciones lineales: 2x + 3y = 13 4x – y =",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para comprobar la validez del procedimiento, revisemos cada paso. Multiplicar la segunda ecuación (4x – y = 5) por 3 da 12x – 3y ="
            },
            {
                id: 166,
                question: "En la resolución de un problema se indica que la suma de dos números es 48 y que el mayor es el doble",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El estudiante definió correctamente la variable x como el menor número y, según el enunciado, el mayor es el doble de ese menor, representado por 2x. Al sumar ambos valores, obtuvo la ecuación x + 2x = 48, que simplifica a 3x ="
            },
            {
                id: 167,
                question: "Un estudiante resuelve la ecuación 3x − 7 = 2x + 5 de la siguiente manera: primero resta 2x de ambos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver 3x − 7 = 2x + 5, primero se resta 2x de ambos lados: 3x − 2x − 7 = 5, lo que simplifica a x − 7 ="
            },
            {
                id: 168,
                question: "María resuelve la ecuación 3x + 5 = 20 siguiendo estos pasos: primero resta 5 a ambos lados y, con el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El procedimiento de María es consistente. Al restar 5 a ambos lados de 3x + 5 = 20 se obtiene 3x = 15; al dividir ambos lados entre 3 se llega a x ="
            },
            {
                id: 169,
                question: "En una escuela, cada clase tiene 24 estudiantes. Si la escuela tiene 5 clases y a cada estudiante se le",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar la cantidad total de cuadernos se debe aplicar una operación consistente con el enunciado: primero se calcula cuántos estudiantes hay en total (24 estudiantes × 5 clases = 120 estudiantes) y luego se multiplica por la cantidad de cuadernos que recibe cada estudiante (120 × 2 = 240 cuadernos). La alternativa que muestra 240 es la única que sigue el procedimiento lógico y coherente con los datos proporcionados. Las otras opciones provienen de operaciones incorrectas, como sumar los números del enunciado (24 + 5 + 2 = 31) o aplicar una multiplicación parcial que no considera todos los factores. 136 Repositorio de"
            },
            {
                id: 170,
                question: "En una escuela se establecen las siguientes reglas: 1) Todas las clases de matemática son obligatorias",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De la regla 2 se deduce que para inscribirse en Física es indispensable haber aprobado la clase de matemática. La regla 1 indica que la clase de matemática es obligatoria, pero no afecta directamente a la conclusión requerida. Dado que Carolina está inscrita en Física (premisa 3), necesariamente debe haber cumplido con la condición previa establecida en la regla 2, es decir, haber aprobado matemática. Las demás opciones añaden información no contenida en las premisas (una calificación específica, el nivel de año o la aprobación de Física) y, por lo tanto, no pueden afirmarse con certeza. Así, la única afirmación necesariamente verdadera es que “Carolina aprobó la clase de matemática”."
            },
            {
                id: 171,
                question: "Se propone la siguiente secuencia para resolver el problema: “Un número se incrementa en 8 y el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El enunciado indica que, después de incrementar el número desconocido en 8, se divide la suma entre 4 y el cociente debe ser"
            },
            {
                id: 172,
                question: "Al resolver la expresión 3 × (4 + 2) – 5, un estudiante escribe los siguientes pasos. ¿Cuál de los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según la regla de prioridad de operaciones, primero se resuelve lo que está entre paréntesis: 4 + 2 ="
            },
            {
                id: 173,
                question: "Para resolver la ecuación 3x − 7 = 2, se aplicó una serie de operaciones a ambos lados de la igualdad.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para mantener la igualdad, cualquier operación que se realice debe aplicarse simultáneamente a ambos miembros de la ecuación. La forma correcta es primero eliminar el término constante que está restado a la variable: se suma 7 a ambos lados (3x − 7 + 7 = 2 + 7) obteniendo 3x ="
            },
            {
                id: 175,
                question: "En una fila de cinco cajones numerados del 1 al 5 se colocan bolas rojas (R) y azules (A) bajo las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Analicemos cada condición: - La condición 1 fija que el cajón 1 es rojo (R). - La condición 4 dice que el cajón 4 tiene el mismo color que el cajón"
            },
            {
                id: 176,
                question: "En la escuela Secundaria Valle Verde se cumple lo siguiente: • Cada estudiante que pertenece al club de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El razonamiento se basa en la lógica deductiva del tipo “modus ponens”. La primera premisa establece que si un estudiante es miembro del club de robótica, entonces estudia Ciencias. Como María es miembro del club, se concluye que ella estudia la materia de Ciencias. La segunda premisa indica que todo estudiante que estudia Ciencias obtiene una calificación aprobatoria en el examen final. Aplicando nuevamente el modus ponens, como María estudia Ciencias, necesariamente aprueba el examen final. Por lo tanto, la única afirmación que debe ser verdadera es: “María aprueba el examen final de la asignatura”."
            },
            {
                id: 177,
                question: "Para resolver la ecuación 3x − 7 = 2x + 5, se proponen los siguientes procedimientos. ¿Cuál de ellos es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver 3x − 7 = 2x + 5, el paso inicial correcto es eliminar el término con x del lado derecho. Restando 2x a ambos lados se obtiene x − 7 ="
            },
            {
                id: 178,
                question: "Al resolver la ecuación 4x – 5 = 3x + 7, el docente propone el siguiente procedimiento paso a paso.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver 4x – 5 = 3x + 7 se deben aplicar operaciones que mantengan la igualdad. El primer paso correcto es restar 3x a ambos lados, obteniendo x – 5 ="
            },
            {
                id: 179,
                question: "En una escuela se conocen los siguientes hechos: 1) Si la clase de matemática se imparte en la mañana,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar qué afirmación es necesariamente verdadera, analizamos las premisas lógicas:"
            },
            {
                id: 180,
                question: "Un estudiante resuelve la ecuación 4(2x – 3) = 3x + 9 y muestra los siguientes pasos: 1) Distribuye:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Al sustituir x ="
            },
            {
                id: 182,
                question: "En un proyecto de huertos escolares participan tres grupos, A, B y C, con las siguientes condiciones:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x el número de estudiantes del grupo B. Según la información: - Grupo A = 2x (doble que B). - Grupo C = A + 4 = 2x +"
            },
            {
                id: 183,
                question: "En una escuela se asignan aulas según las siguientes reglas: (1) Si una asignatura es de ciencias, se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según la regla (1), solo los números pares pueden albergar asignaturas de ciencias. Según la regla (2), todo número múltiplo de 3 corresponde a matemática. La regla (3) prohíbe que un aula sea simultáneamente ciencia y matemática. El aula 6 es par y también múltiplo de 3 (es múltiplo de 6). Si fuera asignada a ciencias, también tendría que ser matemática, lo que violaría la regla (3). Por lo tanto, el aula 6 no puede ser de ciencias; necesariamente está asignada a una asignatura que no es de ciencias. Las demás afirmaciones no se derivan obligatoriamente de las reglas dadas: el aula 4, aunque es par, podría ser de ciencias o de otra materia distinta a matemática; el aula 12, al ser múltiplo de 6, tampoco puede ser de ciencias; y el aula 9, al ser impar, no puede ser de ciencias. Así, la única afirmación que debe ser verdadera es la correspondiente al aula"
            },
            {
                id: 184,
                question: "En una escuela se conocen las siguientes reglas: 1) Si un estudiante aprueba Matemática, entonces",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De la regla 2, “Si aprueba Ciencia, entonces es elegible para la competencia de robótica” se obtiene su contrarrecíproca: “Si no es elegible para la competencia de robótica, entonces no aprueba Ciencia”. Como en el enunciado se indica que Juan no es elegible para la competencia, concluimos que Juan no aprueba Ciencia. Aplicando ahora la contrarrecíproca de la regla 1, “Si no aprueba Ciencia, entonces no aprueba Matemática”, deducimos que Juan tampoco aprueba Matemática. Por lo tanto, la única opción que se sigue lógicamente es “Juan no aprueba Matemática”. 140 Repositorio de"
            },
            {
                id: 185,
                question: "En una tarea de matemática, Carlos resolvió la ecuación 3x − 2 =",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la consistencia del procedimiento, se debe comprobar que el valor encontrado satisface la ecuación inicial. Sustituyendo x = 3 en 3x − 2 = 7 se tiene 3(3) − 2 = 9 − 2 = 7, lo cual es una igualdad verdadera. Como la igualdad se mantiene, el proceso de sumar 2 y luego dividir por 3 condujo a una solución correcta y consistente. Las demás afirmaciones no validan la solución porque (a) alteran la ecuación original sin justificación, (b) relacionan x = 3 con una ecuación distinta que no forma parte del problema, y (c) se basan en una propiedad numérica que no garantiza la veracidad de la solución en la ecuación dada."
            },
            {
                id: 186,
                question: "María debe resolver la ecuación 2x – 4 =",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El procedimiento de María aplica las propiedades de igualdad correctamente. Al sumar 4 a ambos lados de 2x – 4 = 10 se elimina el término constante, quedando 2x ="
            },
            {
                id: 7,
                question: "La verificación sustituyendo x = 7 en la ecuación original da 2·7 – 4 = 14 – 4 = 10, que satisface la igualdad.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar la secuencia válida hay que verificar cada opción con las tres condiciones dadas: 1) “Química antes de Biología” exige que el turno de química aparezca en una posición anterior a la de biología. 2) “Física no es el primer turno” descarta cualquier orden en que física ocupe la primera posición. 3) “Biología no es el último” elimina los casos en que biología está en la tercera posición. Evaluemos cada propuesta: - “Física – Química – Biología”: la biología queda en la última posición, violando la condición"
            },
            {
                id: 187,
                question: "En una escuela secundaria, se deben organizar los turnos de laboratorio para tres materias: química,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar la secuencia válida hay que verificar cada opción con las tres condiciones dadas: 1) “Química antes de Biología” exige que el turno de química aparezca en una posición anterior a la de biología. 2) “Física no es el primer turno” descarta cualquier orden en que física ocupe la primera posición. 3) “Biología no es el último” elimina los casos en que biología está en la tercera posición. Evaluemos cada propuesta: - “Física – Química – Biología”: la biología queda en la última posición, violando la condición"
            },
            {
                id: 188,
                question: "Un número entero n, al multiplicarse por 7, produce un resultado que al dividirse entre 5 deja residuo",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Se busca n tal que 7n, al dividirse por 5, deje residuo"
            },
            {
                id: 189,
                question: "En una competencia de robótica, cada robot debe ejecutar una serie de movimientos cuya duración (en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los dos primeros movimientos son 7 s y 10 s. Aplicando la regla: tercer movimiento = 7 + 10 = 17 s; cuarto movimiento = 10 + 17 = 27 s; quinto movimiento = 17 + 27 = 44 s. Por lo tanto, la única opción que mantiene la consistencia del procedimiento es 44 s. Las demás opciones no se obtienen mediante la suma de los dos valores precedentes y, por tanto, son incoherentes con la regla establecida."
            },
            {
                id: 190,
                question: "En una escuela se inscribieron 120 estudiantes para un examen y se sabe que el número de aprobados",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que el procedimiento sea consistente, debe reflejar la relación exacta indicada en el enunciado: aprobados = 2 · reprobados. Tomando x como número de reprobados, los aprobados son 2x y el total es x + 2x = 3x. Igualando a 120 se obtiene 3x = 120, de donde x ="
            },
            {
                id: 191,
                question: "En un examen de matemática, un estudiante resolvió la ecuación 2x − 5 = 9 siguiendo los pasos que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los tres pasos realizados por el estudiante son correctos. En el paso 1 se suma 5 a ambos lados, obteniendo 2x = 14, lo cual es una transformación válida de la ecuación original. En el paso 2 se divide por 2, aislando la variable y obteniendo x = 7, operación también válida. Finalmente, en el paso 3 se sustituye x = 7 en la ecuación inicial y se verifica que 2·7 − 5 = 14 − 5 = 9, cumpliendo la igualdad original. Por lo tanto, no existe inconsistencia en el procedimiento; la solución encontrada es correcta."
            },
            {
                id: 192,
                question: "Un estudiante resuelve la ecuación 2x + 3 = 11 siguiendo los pasos: (i) resta 3 a ambos lados obteniendo",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Al resolver 2x + 3 = 11, el estudiante realiza correctamente la resta de 3 (2x = 8) y la división por 2 (x = 4). Para comprobar la consistencia, sustituye x = 4 en la ecuación original: 2·4 + 3 = 8 + 3 = 11, que coincide con el lado derecho de la ecuación. Por lo tanto, la solución x = 4 es consistente con la ecuación dada. Las demás opciones 142 Repositorio de"
            },
            {
                id: 193,
                question: "En una clase de Álgebra, un estudiante resuelve la ecuación 2x² ‑ 8x + 6 = 0 usando el método de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la consistencia del procedimiento, debemos comprobar que cada paso sea algebraicamente válido y que las soluciones obtenidas satisfagan la ecuación original. 1) Dividir por 2 es correcto y transforma la ecuación a x² ‑ 4x + 3 ="
            },
            {
                id: 194,
                question: "Una estudiante está resolviendo la ecuación 3x − 7 = 2x + 5 y anota los siguientes pasos: Resta 2x de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la consistencia de un procedimiento algebraico, cada operación debe ser una transformación válida que preserve la igualdad. Partiendo de 3x − 7 = 2x + 5, restar 2x a ambos lados da x − 7 = 5; sumar 7 a ambos lados produce x = 12, que es la solución correcta. Dividir entre 1 no cambia el valor y es una operación válida aunque redundante. Como todas las transformaciones mantienen la igualdad y llegan al valor correcto de x, el procedimiento es consistente. Las otras opciones afirman inconsistencias que no existen porque ninguna de las operaciones realizadas viola las reglas del álgebra."
            },
            {
                id: 195,
                question: "En una tarea de álgebra, se pide resolver la ecuación (x+4)/(x‑1)=",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver (x+4)/(x‑1)=2, primero se identifica el dominio: el denominador no puede ser cero, por lo que x≠"
            },
            {
                id: 197,
                question: "En una clase de 28 alumnos se quiere formar todas las parejas posibles sin repetir ninguna combinación.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para contar todas las parejas posibles sin importar el orden, se utiliza la combinación C(n,2) = n·(n‑1)/"
            },
            {
                id: 198,
                question: "Orlando resuelve la ecuación 2x² − 8x + 6 = 0 siguiendo los pasos que se indican a continuación:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Procedamos a revisar cada paso. En el paso 1, dividir 2x² − 8x + 6 = 0 entre 2 produce x² − 4x + 3 = 0; la igualdad se mantiene porque estamos dividiendo ambos lados por un número distinto de cero. En el paso 2, el trinomio x² − 4x + 3 se factoriza correctamente como (x − 1)(x − 3). Por lo tanto, las soluciones del paso 2 son x = 1 y x ="
            },
            {
                id: 3,
                question: "En el paso 3, Orlando registra ambas raíces. El paso 4 es donde comete el error de verificación: al sustituir x =",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea B la cantidad de lápices azules. Según el enunciado, la cantidad de lápices rojos es el doble, es decir, 2B. La suma total de lápices es 18, por lo que se plantea la ecuación: B + 2B ="
            },
            {
                id: 199,
                question: "Una caja contiene lápices rojos y lápices azules. En total hay 18 lápices y el número de lápices rojos es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea B la cantidad de lápices azules. Según el enunciado, la cantidad de lápices rojos es el doble, es decir, 2B. La suma total de lápices es 18, por lo que se plantea la ecuación: B + 2B ="
            },
            {
                id: 200,
                question: "En una feria, cada puesto vende paquetes de 8 galletas. Si Miguel compra 5 paquetes y luego reparte",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula cuántas galletas compró Miguel: 5 paquetes × 8 galletas por paquete = 40 galletas. Luego, esas 40 galletas se dividen entre sus 4 amigos de forma equitativa: 40 ÷ 4 = 10 galletas por amigo. Por lo tanto, cada amigo recibe 10 galletas."
            },
            {
                id: 201,
                question: "Una escuela necesita comprar lápices para sus estudiantes. Cada paquete contiene 8 lápices y la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver el problema se debe descomponer la información: cada paquete tiene 8 lápices y se compran 12 paquetes. El número total de lápices se obtiene multiplicando la cantidad de paquetes por la cantidad de lápices por paquete (12 × 8). Al efectuar la multiplicación se obtiene 96, por lo que la escuela tendrá 96 lápices en total. Este razonamiento muestra cómo identificar la relación multiplicativa entre los datos y aplicar la operación adecuada."
            },
            {
                id: 202,
                question: "En una feria de ciencias cada puesto vende 12 paquetes de boletos. Si al final del día se vendieron 144",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos puestos vendieron boletos se debe dividir la cantidad total de boletos vendidos entre la cantidad que vende cada puesto. La operación es 144 ÷ 12 ="
            },
            {
                id: 203,
                question: "En una granja hay gallinas y ovejas. En total hay 34 animales y 98 patas. ¿Cuántas ovejas hay en la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea g el número de gallinas y o el de ovejas. Se conoce que g + o = 34 (total de animales) y que 2g + 4o = 98 145 (total de patas, pues cada gallina tiene 2 y cada oveja 4). Dividiendo la segunda ecuación entre 2 se obtiene g + 2o ="
            },
            {
                id: 204,
                question: "En una escuela se organizarán equipos de fútbol de 5 jugadores cada uno. Si 48 estudiantes desean",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para hallar cuántos equipos completos se pueden formar, se divide el número total de estudiantes entre el número de jugadores que requiere cada equipo: 48 ÷ 5 = 9 con resto"
            },
            {
                id: 205,
                question: "En la feria escolar se venden paquetes de cuadernos, cada paquete contiene 8 cuadernos y cuesta Bs",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos paquetes comprar, se divide la cantidad total de cuadernos requeridos entre la cantidad que contiene cada paquete: 56 cuadernos ÷ 8 cuadernos/paquete = 7 paquetes. Como la división da un número entero, no se necesita comprar más ni menos paquetes. Por lo tanto, la respuesta correcta es"
            },
            {
                id: 12,
                question: "Si la escuela necesita exactamente 56 cuadernos para una actividad, ¿cuántos paquetes deberá",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos paquetes comprar, se divide la cantidad total de cuadernos requeridos entre la cantidad que contiene cada paquete: 56 cuadernos ÷ 8 cuadernos/paquete = 7 paquetes. Como la división da un número entero, no se necesita comprar más ni menos paquetes. Por lo tanto, la respuesta correcta es"
            },
            {
                id: 206,
                question: "Un agricultor recolectó 48 tomates y decide repartirlos en 6 cestas, colocando la misma cantidad de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para distribuir los 48 tomates en 6 cestas con la misma cantidad en cada una, se debe dividir el total de tomates entre el número de cestas: 48 ÷ 6 ="
            },
            {
                id: 207,
                question: "En una papelería, Víctor compra cuadernos y lápices. Cada cuaderno tiene un precio de 3 bolivianos y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x la cantidad de lápices que Víctor compra. Como compra el doble de cuadernos, la cantidad de cuadernos es 2x. El costo total se expresa como: 3(2x) + 1x = 6x + x = 7x. Según el enunciado, 7x = 21 bolivianos. Despejando x, obtenemos x = 21/7 = 3 lápices. Por lo tanto, los cuadernos son 2x = 2*3 = 6 cuadernos."
            },
            {
                id: 208,
                question: "En una clase de 30 estudiantes, cada alumno necesita 3 cuadernos para el semestre. La tienda donde",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se determina cuántos cuadernos se necesitan en total: 30 estudiantes × 3 cuadernos = 90 cuadernos. Luego, considerando que los paquetes contienen 5 cuadernos cada uno, se divide la cantidad total entre el 146 Repositorio de"
            },
            {
                id: 209,
                question: "En una excursión escolar se reparten uniformemente 48 botellas de agua entre 8 grupos de estudiantes.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántas botellas le corresponden a cada grupo, se debe dividir la cantidad total de botellas entre el número de grupos. La operación es 48 ÷ 8 ="
            },
            {
                id: 210,
                question: "Una escuela tiene 240 cuadernos que necesita repartir de forma equitativa entre sus 8 aulas. ¿Cuántos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para distribuir los 240 cuadernos de manera igual entre 8 aulas, se divide la cantidad total por el número de aulas: 240 ÷ 8 ="
            },
            {
                id: 211,
                question: "En una biblioteca escolar hay 40 libros y se quieren colocar en 5 estanterías de forma que cada estantería",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para distribuir los 40 libros en 5 estanterías de forma equitativa se debe dividir el número total de libros entre el número de estanterías: 40 ÷ 5 ="
            },
            {
                id: 212,
                question: "Una docente necesita cuadernos para sus alumnos. Compra 3 paquetes con 12 cuadernos cada uno y,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula la cantidad de cuadernos de cada tipo de paquete. Para los paquetes de 12 cuadernos: 3 paquetes × 12 = 36 cuadernos. Para los paquetes de 15 cuadernos: 4 paquetes × 15 = 60 cuadernos. El total se obtiene sumando ambos resultados: 36 + 60 = 96 cuadernos. Por lo tanto, la opción correcta es"
            },
            {
                id: 213,
                question: "En una feria, cada puesto vende 8 manzanas. Si hay 5 puestos y se venden 30 manzanas, ¿cuántas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada puesto tiene la capacidad de vender 8 manzanas, por lo que el total de manzanas que podrían venderse es 5 puestos × 8 manzanas = 40 manzanas. Si en la feria se venden 30 manzanas, la cantidad que queda sin vender se obtiene restando lo vendido del total disponible: 40 – 30 = 10 manzanas. 147"
            },
            {
                id: 215,
                question: "En una escuela se organizan equipos de fútbol. Cada equipo debe estar compuesto por 2 defensas y 3",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada equipo necesita 3 delanteros. Si se forman 4 equipos, la cantidad total de delanteros es 3 × 4 ="
            },
            {
                id: 216,
                question: "Una profesora compra tres paquetes idénticos de marcadores. En total adquiere 84 marcadores.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para encontrar cuántos marcadores hay en cada paquete, se debe dividir el total de marcadores entre el número de paquetes: 84 ÷ 3 ="
            },
            {
                id: 217,
                question: "En una feria, Jorge compra 3 paquetes idénticos de semillas. Después de repartir 45 semillas a cada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula el número total de semillas que Jorge repartió: 4 amigos × 45 semillas = 180 semillas. Después se suman las semillas que le quedaron: 180 + 15 = 195 semillas en total. Como esas 195 semillas estaban distribuidas en 3 paquetes idénticos, se divide entre 3: 195 ÷ 3 = 65 semillas por paquete."
            },
            {
                id: 218,
                question: "Una biblioteca escolar dispone de 84 libros y quiere repartirlos en 3 estanterías de forma que cada una",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para repartir uniformemente los 84 libros en 3 estanterías se divide la cantidad total entre el número de estanterías: 84 ÷ 3 ="
            },
            {
                id: 219,
                question: "En una escuela se decide repartir uniformemente los libros donados entre sus 5 aulas. Si en total se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para repartir los libros de forma equitativa se divide el número total de libros entre el número de aulas. La operación es 360 ÷ 5 ="
            },
            {
                id: 220,
                question: "Una excursión escolar tiene 48 estudiantes. Cada autobús disponible tiene capacidad para 8 pasajeros.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar el número de autobuses, se divide el total de estudiantes entre la capacidad de cada autobús: 48 ÷ 8 ="
            },
            {
                id: 221,
                question: "En una feria escolar, cada estudiante compra una pulsera de acceso a talleres que cuesta $",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula el costo sin descuento: 5 pulseras × $12 = $"
            },
            {
                id: 222,
                question: "Una escuela desea comprar cuadernos. Cada paquete contiene 12 cuadernos y cuesta 18 dólares. La",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para obtener 48 cuadernos, se necesita dividir la cantidad requerida entre la cantidad que contiene cada paquete: 48 ÷ 12 = 4 paquetes. Cada paquete cuesta 18 dólares, por lo que el costo total es 4 × 18 = 72 dólares."
            },
            {
                id: 223,
                question: "Una biblioteca cuenta con 180 libros y cada estantería puede albergar exactamente 15 libros. ¿Cuántas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántas estanterías completas se necesitan, se divide el número total de libros entre la capacidad de cada estantería: 180 ÷ 15 ="
            },
            {
                id: 224,
                question: "Una escuela adquirió 48 cuadernos y decide repartirlos de manera equitativa entre sus 6 clases.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para repartir los 48 cuadernos entre 6 clases de forma equitativa se aplica la división: 48 ÷ 6 ="
            },
            {
                id: 226,
                question: "Una tienda vende paquetes de lápices. Cada paquete contiene entre 8 y 12 lápices. Si una clase necesita",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para minimizar la cantidad de paquetes, se desea que cada paquete aporte la mayor cantidad posible de lápices, es decir, 12 lápices. Dividiendo el requerimiento total (86) entre 12 se obtiene 86 ÷ 12 = 7,166…, lo que indica que con 7 paquetes no se alcanzan los 86 lápices (7 × 12 = 84). Por lo tanto, se necesita al menos un paquete adicional. Con 8 paquetes, aun usando el máximo de 12 lápices por paquete, se tendrían 8 × 12 = 96 lápices, suficiente para cubrir los 86 requeridos. Como no es posible lograr 86 lápices con 7 paquetes, el número mínimo de paquetes que garantiza cubrir la necesidad es"
            },
            {
                id: 227,
                question: "Una escuela organizó una venta de boletos durante cinco días consecutivos. Cada día se vendieron al",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x la cantidad de boletos vendidos el primer día. Entonces se venden x + 10 el segundo día, x + 20 el tercero, x + 30 el cuarto y x + 40 el quinto. La suma total es: [ x + (x+10) + (x+20) + (x+30) + (x+40) = 5x +"
            },
            {
                id: 228,
                question: "En una clase de matemática, los estudiantes obtuvieron las siguientes calificaciones en la tarea: 85, 78,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para comprobar la coherencia del promedio anunciado, primero sumamos todas las calificaciones: 85 + 78 + 90 + 72 + 73 ="
            },
            {
                id: 229,
                question: "Una maestra compra 100 lápices para repartir entre sus 30 estudiantes, entregando exactamente 3",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar la cantidad de lápices que quedan, se debe multiplicar la cantidad de estudiantes por la cantidad de lápices que recibe cada uno: 30 estudiantes × 3 lápices = 90 lápices repartidos. Restando este total de la compra inicial, 100 lápices – 90 lápices = 10 lápices que permanecen sin repartir. Por lo tanto, la única afirmación que coincide con este cálculo es la que indica que quedan 10 lápices."
            },
            {
                id: 230,
                question: "En una actividad escolar, Luis compra 3 paquetes de bolígrafos. Cada paquete contiene 8 bolígrafos.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada paquete contiene 8 bolígrafos, y Luis compró 3 paquetes. Multiplicando 3 × 8 obtenemos 24 bolígrafos. La cifra que ella registra como total (24) coincide exactamente con el cálculo, por lo que la información es coherente. Las opciones que indican 28 o 32 bolígrafos son incorrectas porque usan multiplicaciones erróneas (por ejemplo, 3 × 9 = 27 o 4 × 8 = 32). La respuesta que dice que la información está incompleta no es adecuada, ya que con los datos proporcionados se puede verificar la consistencia sin necesidad de información adicional."
            },
            {
                id: 231,
                question: "En una clase de 5 estudiantes, las notas obtenidas son 70, 85, 90, 75 y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para comprobar la coherencia del resultado declarado, debemos calcular el promedio real de las notas. Se suman todas las calificaciones: 70 + 85 + 90 + 75 + 80 ="
            },
            {
                id: 232,
                question: "En una feria escolar, el stand de experimentos de física vendió 48 boletos y el stand de arte vendió 30",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la relación, calculamos la diferencia entre los boletos vendidos: 48 (física) – 30 (arte) = 18 boletos. Por lo tanto, el stand de arte vendió 18 boletos menos que el de física, lo que coincide con la primera opción. Las demás opciones son incorrectas porque la razón entre los boletos no es 2:1 ni 1:2, y claramente no son iguales. Esta conclusión se basa en un razonamiento lógico claro: se extrae la información dada, se realiza la operación aritmética correspondiente y se compara el resultado con cada alternativa para identificar la que refleja fielmente la relación descrita."
            },
            {
                id: 233,
                question: "Un estudiante desea comprar la cantidad de cerca necesaria para rodear un jardín rectangular cuya",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para rodear un rectángulo se necesita la longitud del perímetro, que se calcula sumando todos sus lados. Un rectángulo tiene dos lados iguales al largo y dos lados iguales al ancho; por lo tanto, el perímetro es 2·(largo) + 2·(ancho). Con los valores dados: 2·8 m = 16 m y 2·5 m = 10 m; al sumarlos se obtiene 16 m + 10 m = 26 m. Las demás opciones aplican operaciones incorrectas (multiplicar longitud por ancho, sumar solo una vez cada 151 dimensión o asumir que los cuatro lados son iguales), por lo que no justifican adecuadamente el cálculo del perímetro."
            },
            {
                id: 234,
                question: "En una escuela secundaria de la zona andina, cada aula tiene 26 estudiantes. El docente planea",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos equipos se pueden formar se divide la cantidad total de estudiantes (26) entre el número de integrantes por equipo (4). La división entera da 26 ÷ 4 = 6, lo que indica que se pueden crear 6 equipos completos (6 × 4 = 24 estudiantes). El residuo de la operación 26 – 24 = 2 muestra que quedan 2 estudiantes que no pueden integrarse a un equipo de"
            },
            {
                id: 235,
                question: "En una clase hay 24 estudiantes. El docente desea organizarlos en filas de igual números, de modo que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para organizar a los 24 estudiantes en filas iguales, el número de filas debe ser un divisor de"
            },
            {
                id: 236,
                question: "En una escuela se registró que 30 estudiantes practican fútbol, 20 practican baloncesto y 10 practican",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar una afirmación que siempre se cumple, se debe analizar la información dada. Los estudiantes que practican al menos uno de los dos deportes se calculan con la fórmula de unión de conjuntos: |F ∪ B| = |F| + |B| – |F ∩ B| = 30 + 20 – 10 ="
            },
            {
                id: 237,
                question: "En la feria de ciencias de la escuela se establecieron las siguientes condiciones: 1) Si un proyecto",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La premisa 1 indica que todo proyecto que usa energía solar obtiene una bonificación de 5 puntos. Según la premisa 3, el proyecto de Carlos utilizó energía solar, por lo tanto, por la lógica del enunciado, Carlos debe 152 Repositorio de"
            },
            {
                id: 238,
                question: "Una tienda vende paquetes de lápices. Cada paquete contiene entre 8 y 12 lápices. Si una clase necesita",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para minimizar la cantidad de paquetes, se desea que cada paquete aporte la mayor cantidad posible de lápices, es decir, 12 lápices. Dividiendo el requerimiento total (86) entre 12 se obtiene 86 ÷ 12 = 7,166…, lo que indica que con 7 paquetes no se alcanzan los 86 lápices (7 × 12 = 84). Por lo tanto, se necesita al menos un paquete adicional. Con 8 paquetes, aun usando el máximo de 12 lápices por paquete, se tendrían 8 × 12 = 96 lápices, suficiente para cubrir los 86 requeridos. Como no es posible lograr 86 lápices con 7 paquetes, el número mínimo de paquetes que garantiza cubrir la necesidad es"
            },
            {
                id: 239,
                question: "Una Unidad Educativa organizó una venta de boletos durante cinco días consecutivos. Cada día se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x la cantidad de boletos vendidos el primer día. Entonces se venden x + 10 el segundo día, x + 20 el tercero, x + 30 el cuarto y x + 40 el quinto. La suma total es: [ x + (x+10) + (x+20) + (x+30) + (x+40) = 5x +"
            },
            {
                id: 240,
                question: "En una clase de matemática, los estudiantes obtuvieron las siguientes calificaciones en la tarea: 85, 78,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para comprobar la coherencia del promedio anunciado, primero sumamos todas las calificaciones: 85 + 78 + 90 + 72 + 73 ="
            },
            {
                id: 241,
                question: "En una institución educativa hay tres aulas de primaria. En la primera aula hay 24 lápices, en la segunda",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se cuenta la cantidad de lápices en cada aula. La primera aula tiene 24 lápices. La segunda tiene el doble, es decir 2 × 24 = 48 lápices. La suma de los lápices de las dos primeras aulas es 24 + 48 ="
            },
            {
                id: 243,
                question: "En una granja hay gallinas y vacas. En total cuentan 54 animales y 140 patas. ¿Cuántas vacas hay en la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x el número de vacas. Entonces el número de gallinas será 54‑x. Cada vaca tiene 4 patas y cada gallina"
            },
            {
                id: 244,
                question: "Una maestra compra 100 lápices para repartir entre sus 30 estudiantes, entregando exactamente 3",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar la cantidad de lápices que quedan, se debe multiplicar la cantidad de estudiantes por la cantidad de lápices que recibe cada uno: 30 estudiantes × 3 lápices = 90 lápices repartidos. Restando este total de la compra inicial, 100 lápices – 90 lápices = 10 lápices que permanecen sin repartir. Por lo tanto, la única afirmación que coincide con este cálculo es la que indica que quedan 10 lápices. Las demás opciones no respetan la operación básica de multiplicación y resta, por lo que resultan incoherentes con la información proporcionada."
            },
            {
                id: 245,
                question: "En una actividad escolar, Ana compra 3 paquetes de bolígrafos. Cada paquete contiene 8 bolígrafos.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada paquete contiene 8 bolígrafos, y Ana compró 3 paquetes. Multiplicando 3 × 8 obtenemos 24 bolígrafos. La cifra que ella registra como total (24) coincide exactamente con el cálculo, por lo que la información es coherente."
            },
            {
                id: 246,
                question: "Una librería vende un paquete que contiene 3 cuadernos y 2 libros por un total de $",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x el precio de un cuaderno. Cada libro cuesta el doble, es decir 2x. El costo total del paquete es la suma del costo de los 3 cuadernos y los 2 libros: 3x + 2(2x) = 3x + 4x = 7x. Según el enunciado, 7x = $56, por lo que x = $56 ÷ 7 = $"
            },
            {
                id: 247,
                question: "Una Unidad Educativa cuenta con 120 estudiantes que deben organizarse en grupos para un proyecto",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para obtener el número mínimo de grupos se debe aprovechar al máximo la capacidad de cada grupo, es decir, colocar la mayor cantidad posible de estudiantes sin superar el límite máximo de"
            },
            {
                id: 12,
                question: "¿Cuál es el número mínimo de grupos que se pueden formar?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para obtener el número mínimo de grupos se debe aprovechar al máximo la capacidad de cada grupo, es decir, colocar la mayor cantidad posible de estudiantes sin superar el límite máximo de"
            },
            {
                id: 248,
                question: "En una clase de 5 estudiantes, las notas obtenidas son 70, 85, 90, 75 y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para comprobar la coherencia del resultado declarado, debemos calcular el promedio real de las notas. Se suman todas las calificaciones: 70 + 85 + 90 + 75 + 80 ="
            },
            {
                id: 249,
                question: "En una feria escolar, el stand de experimentos de física vendió 48 boletos y el stand de arte vendió 30",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la relación, calculamos la diferencia entre los boletos vendidos: 48 (física) – 30 (arte) = 18 boletos. Por lo tanto, el stand de arte vendió 18 boletos menos que el de física, lo que coincide con la primera opción."
            },
            {
                id: 250,
                question: "Dos válvulas llenan un tanque de agua a velocidad constante. La válvula A, sola, lo llena en 6 horas;",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver el problema se deben calcular las tasas de llenado de cada válvula y sumarlas. La tasa de la válvula A es 1/6 del tanque por hora y la de la válvula B es 1/9 del tanque por hora. La tasa combinada es: [+==] tanques por hora. El tiempo necesario para llenar un tanque completo es el inverso de esa tasa: [=="
            },
            {
                id: 251,
                question: "En una institución educativa, el jardín tiene tres patios: en el patio A hay 24 plantas, en el B 30 plantas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se suman las plantas de los tres patios: 24 + 30 + 18 = 72 plantas. Luego se calcula el tiempo que tarda en regar cada patio según su velocidad: - Patio A: 24 plantas ÷ 6 plantas/min = 4 minutos. - Patio B: 30 plantas ÷ 5 plantas/min = 6 minutos. - Patio C: 18 plantas ÷ 4 plantas/min ="
            },
            {
                id: 253,
                question: "En una granja hay gallinas y conejos. En total hay 48 animales y 140 patas. ¿Cuántos conejos hay en la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea c el número de gallinas y r el número de conejos. Cada animal tiene una cabeza, por lo que c + r = 48 (1). Cada gallina tiene 2 patas y cada conejo 4, de modo que 2c + 4r = 140 (2). Dividiendo la ecuación (2) entre 2 se obtiene c + 2r = 70 (3). Restando (1) de (3): (c + 2r) - (c + r) = 70 - 48, lo que simplifica a r ="
            },
            {
                id: 254,
                question: "En una feria escolar se venden paquetes de lápices. Cada paquete contiene 12 lápices y cuesta Bs.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada paquete contiene 12 lápices. Para que un maestro tenga al menos 48 lápices necesita 48 ÷ 12 = 4 paquetes. Como son 5 maestros, el número total de paquetes es 5 × 4 = 20 paquetes. Cada paquete cuesta Bs. 15, por lo que el gasto total es 20 × 15 = Bs."
            },
            {
                id: 255,
                question: "Un estudiante desea comprar la cantidad de cerca necesaria para rodear un jardín rectangular cuya",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para rodear un rectángulo se necesita la longitud del perímetro, que se calcula sumando todos sus lados. Un rectángulo tiene dos lados iguales al largo y dos lados iguales al ancho; por lo tanto, el perímetro es 2·(largo) + 2·(ancho). Con los valores dados: 2·8 m = 16 m y 2·5 m = 10 m; al sumarlos se obtiene 16 m + 10 m = 26 m."
            },
            {
                id: 256,
                question: "En una clase de 30 estudiantes, 18 aprueban la asignatura de Matemática, 15 aprueban la asignatura de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos estudiantes aprueban al menos una de las dos asignaturas se utiliza el principio de inclusión‑exclusión. Se suman los que aprueban cada asignatura y se resta la intersección que fue contada dos veces: 18 (Matemática) + 15 (Ciencias Naturales) – 5 (ambas) ="
            },
            {
                id: 257,
                question: "En una biblioteca escolar hay 324 libros que deben colocarse en estanterías. Cada estantería debe",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que todas las estanterías tengan la misma cantidad de libros y ninguna supere los 30, el número de libros por estantería debe ser un divisor entero de 324 y a la vez ≤"
            },
            {
                id: 258,
                question: "En una Unidad Educativa del Nivel de Educación Secundaria de la zona andina, cada aula tiene 26",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos equipos se pueden formar se divide la cantidad total de estudiantes (26) entre el número de integrantes por equipo (4). La división entera da 26 ÷ 4 = 6, lo que indica que se pueden crear 6 equipos completos (6 × 4 = 24 estudiantes). El residuo de la operación, 26 – 24 = 2, muestra que quedan 2 estudiantes que no pueden integrarse a un equipo de"
            },
            {
                id: 259,
                question: "En una clase hay 24 estudiantes. El maestro desea organizarlos en filas de igual número de estudiantes,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para organizar a los 24 estudiantes en filas iguales, el número de filas debe ser un divisor de"
            },
            {
                id: 260,
                question: "Un rectángulo tiene un perímetro de 68 cm y su longitud supera al ancho en 4 cm. ¿Cuál es el área del",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x el ancho del rectángulo. Entonces la longitud es x +"
            },
            {
                id: 262,
                question: "En una institución educativa se registró que 30 estudiantes practican fútbol, 20 practican baloncesto y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar una afirmación que siempre se cumple, se debe analizar la información dada. Los estudiantes que practican al menos uno de los dos deportes se calculan con la fórmula de unión de conjuntos: |F ∪ B| = |F| + |B| – |F ∩ B| = 30 + 20 – 10 ="
            },
            {
                id: 263,
                question: "Un agricultor dispone de 48 metros de alambre para delimitar un jardín rectangular. ¿Qué dimensiones",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El perímetro del rectángulo está limitado a 48 m, por lo que 2(L + W) = 48 → L + W ="
            },
            {
                id: 264,
                question: "Una Unidad Educativa debe repartir 240 cuadernos de forma equitativa entre 8 aulas. ¿Qué operación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para distribuir un total de elementos de manera equitativa entre un número determinado de grupos, la operación correspondiente es la división. En este caso, se tiene un total de 240 cuadernos y 8 aulas; al dividir 240 ÷ 8 se obtiene 30, lo que indica que cada aula recibirá 30 cuadernos."
            },
            {
                id: 265,
                question: "Un agricultor cuenta con 48 metros de alambre para delimitar un terreno rectangular. ¿Cuál de las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para un rectángulo con perímetro fijo, la superficie máxima se logra cuando el rectángulo es un cuadrado. El perímetro disponible es 48 m, por lo que cada lado del cuadrado debe medir 48 m ÷ 4 = 12 m. Así, el área máxima 158 Repositorio de"
            },
            {
                id: 266,
                question: "En una institución educativa se organizaron grupos de estudiantes para recolectar agua de lluvia. Cada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada grupo recoge 12 litros por hora. En 3 horas, un grupo aporta 12 L × 3 h = 36 litros. Para alcanzar al menos 360 litros, se necesita dividir la cantidad requerida entre la aportación de un grupo: 360 L ÷ 36 L/grupo = 10 grupos."
            },
            {
                id: 267,
                question: "Una Unidad Educativa organizará una visita a un museo para 274 estudiantes. Cada autobús disponible",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar el número mínimo de autobuses, se divide el total de estudiantes entre la capacidad de cada autobús: 274 ÷ 48 = 5,7083… La parte entera indica que 5 autobuses llenan 5 × 48 = 240 estudiantes, dejando 274 – 240 = 34 estudiantes sin transporte. Como cualquier grupo restante, por pequeño que sea, necesita otro autobús, se debe redondear hacia arriba la fracción obtenida, usando la función techo. Por lo tanto, se requieren 5 + 1 = 6 autobuses."
            },
            {
                id: 268,
                question: "En un jardín se plantan flores de tres colores: rojas, blancas y amarillas. El número de flores rojas es el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea w el número de flores blancas. Entonces, las flores rojas son 2w y las flores amarillas son (2w + w) - 5 = 3w -"
            },
            {
                id: 269,
                question: "En la biblioteca de un colegio se deben colocar 120 libros nuevos en estanterías. Cada estantería tiene",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántas estanterías se requieren, basta dividir el número total de libros entre la capacidad de cada estantería. La operación adecuada es 120 ÷ 4 ="
            },
            {
                id: 271,
                question: "En la feria de Ciencias Naturales de la institución educativa se establecieron las siguientes condiciones:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La premisa 1 indica que todo proyecto que usa energía solar obtiene una bonificación de 5 puntos. Según la premisa 3, el proyecto de Carlos utilizó energía solar, por lo tanto, por la lógica del enunciado, Carlos debe haber recibido la bonificación de 5 puntos. La premisa 2 señala que el proyecto de Carlos no recibió ninguna bonificación; esto implica que Carlos no utilizó energía solar, pues de lo contrario habría recibido la bonificación establecida en la premisa"
            },
            {
                id: 272,
                question: "Un agricultor desea cercar un terreno rectangular cuya cerca tiene una longitud total de 60 metros. Para",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El perímetro del rectángulo está dado por 2(largo + ancho) = 60 m, por lo que largo + ancho = 30 m. El área A se expresa como A = largo × ancho = x(30 - x) = -x² + 30x, donde x representa el largo. Esta es una parábola que alcanza su valor máximo en el vértice, cuyo valor de x se calcula con -b/(2a) = -30/(2·-1) ="
            },
            {
                id: 273,
                question: "Un agricultor dispone de 120 metros de alambre para cercar un jardín rectangular. Desea que el área",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para maximizar el área de un rectángulo con perímetro fijo, primero se expresa el área en función de una sola variable usando la relación del perímetro: si L es la longitud y W el ancho, L + W = 60 (la mitad del perímetro). Entonces el área A = L·W = L·(60‑L). Esta expresión permite analizar cómo varía el área al cambiar L y, mediante cálculo o completando el cuadrado, se determina que el área es máxima cuando L = W = 30 metros, es decir, cuando el rectángulo es un cuadrado."
            },
            {
                id: 274,
                question: "En la Unidad Educativa se organizará una competencia de relevos donde cada equipo está formado",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos equipos completos se pueden formar, se divide el número total de estudiantes entre la cantidad de corredores que necesita cada equipo. La operación es 84 ÷ 5 = 16,"
            },
            {
                id: 275,
                question: "En la institución educativa se desea construir un huerto rectangular cuya superficie mide 8 metros de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que el rectángulo de 8 m × 12 m se divida en cuadrados idénticos sin dejar sobrante, el lado del cuadrado debe ser un divisor común a ambas dimensiones. Se busca el mayor divisor común (MCD) de 8 y"
            },
            {
                id: 276,
                question: "Una organización benéfica prepara una cena para 54 personas y cada mesa tiene capacidad para 8",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para cubrir a los 54 invitados se debe dividir el número total de personas entre la capacidad de cada mesa: 54 ÷ 8 = 6,"
            },
            {
                id: 277,
                question: "En una clase de geometría básica, el maestro quiere que sus estudiantes determinen cuántas baldosas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver el problema se debe trabajar con unidades coherentes. Primero, se calcula el área del patio: 6 m × 4,5 m = 27 m². Luego, se determina el área de una baldosa: 0,30 m × 0,30 m = 0,09 m². La cantidad de baldosas requeridas se obtiene dividiendo el área del patio entre el área de una baldosa: 27 m² ÷ 0,09 m² = 300 baldosas. Este procedimiento utiliza la estrategia de “convertir a la misma unidad y aplicar la relación área/área”, que es la más directa y evita errores de cálculo que pueden surgir al usar perímetros o sumas de longitudes."
            },
            {
                id: 278,
                question: "En una Unidad Educativa se organizó un concurso de elaboración de pulseras con cuentas de colores.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para contar las pulseras se consideran todas las secuencias posibles de 12 posiciones donde cada posición puede ser una de las 3 colores. Sin restricción, hay 3^{12}=531 441 secuencias. Se deben excluir las que no 161 usan al menos un color. Aplicando el principio de inclusión‑exclusión: - Secuencias que omiten un color concreto: 2^{12}=4"
            },
            {
                id: 279,
                question: "En una clase de 27 estudiantes la maestra quiere organizar grupos de 4 estudiantes para una actividad.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos grupos completos de 4 estudiantes se pueden formar con 27 estudiantes, se debe aplicar la división entera: 27 ÷ 4 = 6 con resto"
            },
            {
                id: 280,
                question: "En una clase de 30 estudiantes, el maestro registra las siguientes calificaciones del examen: 5",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia se deben sumar las notas según la distribución dada. - 5 estudiantes × 90 = 450 puntos - 10 estudiantes × 70 = 700 puntos - 8 estudiantes × 50 = 400 puntos El número de estudiantes que quedan es 30 - (5+10+8) = 7, y cada uno obtuvo 30 puntos, por lo que: - 7 estudiantes × 30 = 210 puntos Sumando todos los valores: 450 + 700 + 400 + 210 = 1760 puntos."
            },
            {
                id: 281,
                question: "En una clase de matemática, el maestro suma las notas de cinco estudiantes: 78, 85, 92, 67 y 88, y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia, primero se recalcula la suma real de las notas: 78 + 85 + 92 + 67 + 88 ="
            },
            {
                id: 282,
                question: "Una institución educativa registra las notas obtenidas por tres estudiantes en un examen: Gloria sacó",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para comprobar la coherencia del promedio, se calcula el promedio real de las tres notas: (78 + 84 + 92) / 3 = 254 / 3 = 84,666…, que al redondear a la unidad más cercana da"
            },
            {
                id: 283,
                question: "En una clase de 30 estudiantes se registró la cantidad de libros leídos durante el mes de abril. La suma",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia del promedio, primero se calcula: promedio = suma total ÷ número de observaciones = 126 ÷ 30 = 4,"
            },
            {
                id: 284,
                question: "Una Unidad Educativa compra cuadernos para sus estudiantes. El director indica que se adquirieron",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula la cantidad total de cuadernos: 12 paquetes × 20 cuadernos = 240 cuadernos y 5 paquetes × 15 cuadernos = 75 cuadernos, dando un total de 240 + 75 = 315 cuadernos. Cada cuaderno cuesta 0,80 USD, por lo que el gasto total es 315 cuadernos × 0,80 USD = 252 USD. Sin embargo, la cifra está expresada en dólares y centavos, por lo que se escribe como 159,20 USD (315 × 0,80 = 252, pero 0,80 USD equivale a 80 centavos, y 315 × 80 ="
            },
            {
                id: 285,
                question: "Una institución educativa dispone de 120 cuadernos y desea repartirlos en partes iguales entre sus",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que la distribución sea coherente, el número de cuadernos por clase multiplicado por la cantidad de clases debe dar el total disponible: 8 × x ="
            },
            {
                id: 286,
                question: "En una fábrica se producen tres tipos de componentes: X, Y y Z. En un día se fabrican 1 200 unidades en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se traduce la información a ecuaciones. Sea x, y y z el número de unidades de los componentes X, Y y Z respectivamente. Se tienen: 1) x + y + z = 1200 (total de unidades). 2) 2x + 3y + 5z = 4500 (total de horas de trabajo). 3) y ="
            },
            {
                id: 287,
                question: "En una competencia de lanzamiento de pelota, los participantes A, B y C obtuvieron respectivamente 48,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia del enunciado del organizador, debemos sumar los puntos obtenidos por cada participante: 48 + 56 = 104; 104 + 64 ="
            },
            {
                id: 289,
                question: "En una institución educativa se organizan tres jornadas de clases. La primera jornada tiene una duración",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para evaluar la coherencia del resultado debemos convertir cada jornada a minutos (1 hora = 60 minutos) y luego sumarlos. - Primera jornada: 4 h × 60 = 240 minutos.- Segunda jornada: 5 h × 60 = 300 minutos.- Tercera jornada: 3 h × 60 = 180 minutos.: 240 + 300 + 180 = 720 minutos."
            },
            {
                id: 290,
                question: "Una constructora debe edificar una pared rectangular de 7,30 m de largo por 2,40 m de alto. Cada bloque",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula el área de la pared: 7,30 m × 2,40 m = 17,52 m² = 175 200 cm². Cada bloque cubre una cara de 20 cm × 10 cm = 200 cm², por lo que el número mínimo de bloques necesarios es 175 200 ÷ 200 = 876 bloques. Como los bloques se venden en paquetes de 50, se debe comprar la cantidad mínima de paquetes que cubra esos 876 bloques: ceil(876 ÷ 50) = 18 paquetes. Cada paquete contiene 50 bloques, así que la constructora comprará 18 × 50 = 900 bloques, aunque sólo 876 serán usados. El precio de lista de los 900 bloques es 900 × 2,40 $ = 2 160,00 × 0,10 = 216,00 − 216,00 $ = 1 944,00 $."
            },
            {
                id: 291,
                question: "En una cooperativa de productores de cacao los proveedores se organizan en tres grupos: X, Y y Z. Se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero, el 40% de 50 proveedores corresponde al grupo X:"
            },
            {
                id: 292,
                question: "Una Unidad Educativa organizará una excursión y dispone de autobuses con capacidad de 48 asientos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se suma el número total de personas que deben viajar: 274 estudiantes + 23 maestros = 297 personas. Cada autobús tiene 48 asientos, por lo que el número mínimo de autobuses por capacidad es el techo de 297 ÷ 48, es decir, ceil(6,1875) = 7 autobuses. Además, cada autobús debe llevar al menos un maestro; como hay 23 maestros, basta con 7 autobuses porque podemos asignar al menos un maestro a cada uno y aún nos sobrarían maestros. Como el requisito de capacidad y el de presencia de adultos se cumplen simultáneamente con 7 autobuses, esa es la cantidad mínima requerida."
            },
            {
                id: 293,
                question: "Se sabe que la suma de dos números es 25 y que su producto es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que una afirmación sea coherente debe cumplir simultáneamente ambas condiciones dadas: suma = 25 y producto ="
            },
            {
                id: 294,
                question: "En una institución educativa, la clase A obtuvo las siguientes calificaciones en Matemática: 78, 85, 92,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia de cada afirmación se deben usar los datos proporcionados. El promedio de la clase A (85,5) corresponde a la suma de sus cuatro notas (78+85+92+88 = 343) dividida entre 4; de forma similar, el promedio de la clase B (83,5) corresponde a la suma (81+79+84+90 = 334) dividida entre"
            },
            {
                id: 88,
                question: "La clase B obtuvo: 81, 79, 84,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia de cada afirmación se deben usar los datos proporcionados. El promedio de la clase A (85,5) corresponde a la suma de sus cuatro notas (78+85+92+88 = 343) dividida entre 4; de forma similar, el promedio de la clase B (83,5) corresponde a la suma (81+79+84+90 = 334) dividida entre"
            },
            {
                id: 295,
                question: "En el informe anual del Nivel de Educación Secundaria se indica que el número de estudiantes de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para evaluar la coherencia de los resultados, debemos comparar el total reportado con la suma de los valores individuales. La suma de los estudiantes es 122 + 138 + 149 ="
            },
            {
                id: 296,
                question: "En una excursión escolar se van a llevar botellas de agua y de jugo. Se compran 12 paquetes de agua,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia del resultado, se deben aplicar los pasos indicados en el enunciado:"
            },
            {
                id: 297,
                question: "En una granja hay vacas y gallinas. En total hay 30 animales y, sumando todas sus patas, se obtienen",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea V el número de vacas y G el número de gallinas. Del enunciado se tiene el sistema de ecuaciones: 1) V + G = 30 (total de animales) 2) 4V + 2G = 74 (total de patas, ya que cada vaca tiene 4 y cada gallina 2). De la (1) se obtiene G = 30 - V. Sustituyendo en la (2): 4V + 2(30 - V) = 74 → 4V + 60 - 2V = 74 → 2V = 14 → V ="
            },
            {
                id: 74,
                question: "¿Cuántas vacas hay en la granja?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea V el número de vacas y G el número de gallinas. Del enunciado se tiene el sistema de ecuaciones: 1) V + G = 30 (total de animales) 2) 4V + 2G = 74 (total de patas, ya que cada vaca tiene 4 y cada gallina 2). De la (1) se obtiene G = 30 - V. Sustituyendo en la (2): 4V + 2(30 - V) = 74 → 4V + 60 - 2V = 74 → 2V = 14 → V ="
            },
            {
                id: 298,
                question: "En una institución educativa rural se presentan los siguientes datos: 1) Todos los estudiantes que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Del enunciado 2 se afirma que los integrantes del equipo de fútbol no forman parte del concurso de matemática. Como María es integrante del equipo de fútbol (enunciado 3), se concluye que ella no puede estar en el concurso de matemática. Esta conclusión es una inferencia directa y válida; las demás opciones introducen relaciones no establecidas o invierten la dirección del razonamiento del enunciado 1, por lo que no pueden deducirse lógicamente de la información dada."
            },
            {
                id: 299,
                question: "En una unidad educativa, 6 estudiantes pueden ordenar un archivo completo en 8 horas, trabajando",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Este problema corresponde a una proporcionalidad inversa, ya que al aumentar el número de estudiantes disminuye el tiempo necesario para realizar el trabajo. El trabajo total puede expresarse como: estudiantes × tiempo = constante."
            },
            {
                id: 300,
                question: "Un número natural aumentado en su triple da como resultado",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x el número buscado. Según el enunciado, el número más su triple es igual a 56, lo que se expresa como: x + 3x = 56x + 3x = 56x + 3x = 56 4x = 564x = 564x = 56 x = 14x = 14x ="
            },
            {
                id: 4,
                question: "Comprensión Lectora",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el movimiento rectilíneo uniforme, la velocidad permanece constante tanto en magnitud como en dirección, lo que implica que el cuerpo recorre distancias iguales en tiempos iguales. Desde la cinemática, este tipo de movimiento se caracteriza por una aceleración nula, ya que no hay cambio en la velocidad. El MRU constituye un modelo básico que permite analizar el movimiento sin considerar fuerzas que modifiquen la rapidez del cuerpo."
            },
            {
                id: 1,
                question: "Un cuerpo se desplaza en línea recta recorriendo distancias iguales en intervalos de tiempo iguales.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el movimiento rectilíneo uniforme, la velocidad permanece constante tanto en magnitud como en dirección, lo que implica que el cuerpo recorre distancias iguales en tiempos iguales. Desde la cinemática, este tipo de movimiento se caracteriza por una aceleración nula, ya que no hay cambio en la velocidad. El MRU constituye un modelo básico que permite analizar el movimiento sin considerar fuerzas que modifiquen la rapidez del cuerpo."
            },
            {
                id: 2,
                question: "En física, la aceleración es una magnitud fundamental para describir el movimiento. ¿Qué expresa",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La aceleración es una magnitud vectorial que mide la variación de la velocidad con respecto al tiempo, ya sea en magnitud, dirección o sentido. Esto significa que un cuerpo puede estar acelerado, aunque mantenga una 167 rapidez constante si cambia de dirección. La aceleración permite comprender cómo evolucionan los movimientos y es clave para analizar situaciones donde actúan fuerzas."
            },
            {
                id: 3,
                question: "Un objeto cae verticalmente bajo la acción exclusiva de la gravedad, despreciando la resistencia del",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La caída libre es un ejemplo de movimiento uniformemente acelerado, ya que el objeto experimenta una aceleración constante debida a la gravedad. En este tipo de movimiento, la velocidad cambia de manera uniforme con el tiempo. Este modelo permite describir matemáticamente el movimiento vertical y comprender la influencia de la gravedad en los cuerpos."
            },
            {
                id: 4,
                question: "La primera ley de Newton establece una condición fundamental sobre el estado de movimiento de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La primera ley de Newton, también llamada ley de la inercia establece que un cuerpo conserva su estado de reposo o de movimiento rectilíneo uniforme mientras la fuerza neta que actúa sobre él sea cero. Este principio introduce la idea de que no se necesita una fuerza para mantener el movimiento, sino para modificarlo, corrigiendo concepciones intuitivas erróneas sobre el movimiento."
            },
            {
                id: 5,
                question: "La inercia es una propiedad fundamental de la materia. ¿Cómo se define correctamente?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La inercia es la propiedad que tienen los cuerpos de oponerse a cambios en su estado de reposo o de movimiento. Cuanto mayor es la masa de un cuerpo, mayor es su inercia. Este concepto está directamente relacionado con la primera ley de Newton y permite comprender por qué los objetos no modifican espontáneamente su movimiento."
            },
            {
                id: 6,
                question: "Según la segunda ley de Newton, la aceleración de un cuerpo depende de:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La segunda ley de Newton establece que la aceleración de un cuerpo es directamente proporcional a la fuerza neta que actúa sobre él e inversamente proporcional a su masa. Matemáticamente se expresa como F = m·a. Este principio permite cuantificar cómo las fuerzas modifican el movimiento y constituye una base esencial para el análisis dinámico."
            },
            {
                id: 7,
                question: "En el estudio de la dinámica, la Física analiza las causas que producen cambios en el movimiento",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Desde la Física, la fuerza se entiende como una interacción entre cuerpos que tiene la capacidad de modificar su estado de movimiento —provocando aceleraciones, cambios de dirección o variaciones de rapidez— o de producir deformaciones en su estructura. Este concepto se fundamenta en las leyes de Newton, que establecen que los cambios en el movimiento no ocurren de manera espontánea, sino como resultado de la acción de fuerzas. Las fuerzas pueden manifestarse mediante contacto, como empujes o tirones, o a través de interacciones a distancia, como la fuerza gravitatoria, eléctrica o magnética. En la dinámica, la fuerza es un concepto central porque permite explicar tanto el comportamiento de los cuerpos en movimiento como las deformaciones que experimentan los materiales, articulando la relación entre masa, aceleración e interacción física. 168 Repositorio de"
            },
            {
                id: 8,
                question: "¿En cuál de las siguientes situaciones se realiza trabajo mecánico?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El trabajo mecánico se produce cuando una fuerza aplicada sobre un cuerpo genera un desplazamiento en la dirección de la fuerza, lo que da lugar a una transferencia de energía. Si no existe desplazamiento, como ocurre cuando un objeto permanece inmóvil a pesar de la acción de una fuerza, no se realiza trabajo mecánico desde el punto de vista físico. Este principio permite distinguir entre la simple aplicación de una fuerza y la efectiva modificación del estado energético de un cuerpo, siendo un concepto fundamental para el análisis del movimiento y la energía en la Física."
            },
            {
                id: 9,
                question: "En Física, el principio de conservación de la energía permite explicar el comportamiento de los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El principio de conservación de la energía establece que la energía total de un sistema aislado permanece constante, independientemente de los cambios que experimente dicho sistema. En los procesos físicos, la energía puede transformarse entre diferentes formas (como energía potencial, cinética, térmica o eléctrica), pero la cantidad total se mantiene invariable. Este principio permite analizar y predecir el comportamiento de los sistemas físicos, ya que asegura que cualquier disminución de energía en una forma se compensa con un aumento equivalente en otra. Por ello, se considera un principio unificador de la Física, aplicable a una amplia gama de fenómenos naturales."
            },
            {
                id: 10,
                question: "Un objeto se mueve sin rozamiento bajo la acción exclusiva de fuerzas conservativas. ¿Qué ocurre",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cuando un sistema está sometido únicamente a fuerzas conservativas, como la fuerza gravitatoria o elástica, la energía mecánica total se conserva. Esto significa que la suma de la energía cinética y la energía potencial permanece constante, aunque cada una pueda variar individualmente. Este principio es conocido como conservación de la energía mecánica. Es una herramienta poderosa para analizar el movimiento sin necesidad de estudiar las fuerzas en detalle. Se aplica ampliamente en mecánica clásica."
            },
            {
                id: 11,
                question: "Una carga eléctrica de prueba se coloca en una región del espacio donde existe un campo eléctrico.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El campo eléctrico es una magnitud vectorial que describe la influencia eléctrica que una carga produce en el espacio que la rodea. Se define como la fuerza eléctrica que actúa sobre una carga de prueba positiva dividida entre el valor de dicha carga. Esta definición permite caracterizar el campo independientemente de la carga que se coloque en él. El concepto de campo facilita el estudio de interacciones eléctricas sin necesidad de contacto directo entre cargas."
            },
            {
                id: 12,
                question: "Un conductor rectilíneo es recorrido por una corriente eléctrica constante. ¿Qué fenómeno físico se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cuando una corriente eléctrica circula por un conductor, se genera un campo magnético en el espacio que lo rodea, según lo establecido por las leyes del electromagnetismo. Este campo tiene forma circular alrededor del conductor y su intensidad depende de la corriente. Este fenómeno demuestra la estrecha relación entre electricidad y magnetismo. Es un principio fundamental que sustenta el funcionamiento de motores eléctricos y otros dispositivos. 169"
            },
            {
                id: 14,
                question: "En el plano cartesiano, una recta pasa por los puntos (0, 2) y (2, 6). ¿Cuál es la pendiente de la recta?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pendiente se calcula como el cambio en la coordenada vertical dividido entre el cambio en la coordenada horizontal. En este caso, la variación en y es 6 − 2 = 4 y la variación en x es 2 − 0 = 2, por lo que la pendiente es 4/2 ="
            },
            {
                id: 15,
                question: "En el estudio de los circuitos eléctricos, la ley de Ohm permite comprender cómo se relacionan las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La ley de Ohm establece que la corriente eléctrica que circula por un conductor es directamente proporcional al voltaje aplicado e inversamente proporcional a la resistencia del material, relación que se expresa mediante la ecuación V = I⋅R. Desde la Física, esta ley permite explicar cómo el voltaje impulsa el movimiento de las cargas eléctricas, mientras que la resistencia se opone a dicho movimiento. Su aplicación es fundamental para el análisis de circuitos eléctricos simples, ya que posibilita calcular una magnitud cuando se conocen las otras dos y comprender el comportamiento de los dispositivos eléctricos."
            },
            {
                id: 16,
                question: "Un objeto se mueve con velocidad constante en línea recta. ¿Cuál de las siguientes afirmaciones es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cuando un objeto se mueve con velocidad constante, no hay cambio en la magnitud ni en la dirección de la velocidad. Dado que la aceleración mide la variación de la velocidad en el tiempo, en este caso la aceleración es nula. Este concepto es central en la cinemática y permite distinguir entre distintos tipos de movimiento."
            },
            {
                id: 17,
                question: "En el estudio de las ondas, el sonido presenta características particulares relacionadas con su forma",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El sonido es una onda mecánica longitudinal, ya que requiere un medio material para propagarse y las partículas de dicho medio vibran en la misma dirección en la que avanza la onda. Este movimiento produce regiones alternadas de compresión y rarefacción, que se transmiten a través del aire, los líquidos o los sólidos. Desde la Física, esta característica permite diferenciar al sonido de las ondas electromagnéticas y explica fenómenos como la propagación del sonido en distintos medios y su imposibilidad de transmitirse en el vacío."
            },
            {
                id: 18,
                question: "¿Cómo se clasifica el sonido según el tipo de vibración de las partículas del medio?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El sonido es una onda mecánica longitudinal, ya que requiere un medio material para propagarse y las partículas 170 Repositorio de"
            },
            {
                id: 19,
                question: "En el estudio de los fenómenos térmicos, la Física distingue claramente entre los conceptos de calor",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En Física, el calor se define como la energía que se transfiere entre dos cuerpos o sistemas debido a una diferencia de temperatura. No se trata de una energía que un cuerpo posea, sino de un proceso de transferencia energética que ocurre cuando existe un gradiente térmico. Este intercambio se produce de manera espontánea desde el cuerpo con mayor temperatura hacia el de menor temperatura, hasta que ambos alcanzan el equilibrio térmico. La distinción entre calor y temperatura es fundamental en la termodinámica, ya que la temperatura mide el estado térmico de un sistema, mientras que el calor describe el flujo de energía asociado a los cambios térmicos."
            },
            {
                id: 20,
                question: "¿Cuál es la finalidad principal del uso de un modelo físico?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Un modelo físico es una representación simplificada de un fenómeno o sistema real que se construye para comprender, explicar y predecir su comportamiento. Desde la Física, los modelos permiten aislar las variables más relevantes y establecer relaciones entre ellas, dejando de lado aspectos secundarios que dificultan el análisis. No buscan reproducir la realidad de manera exacta, sino resaltar los elementos esenciales que explican el fenómeno estudiado, como ocurre con el modelo de partícula puntual, el modelo ondulatorio de la luz o el modelo cinético de la materia. De este modo, los modelos físicos constituyen una herramienta central del método científico, ya que facilitan la formulación de leyes, la interpretación de resultados y la anticipación de nuevos comportamientos observables. Disciplina: MATEMÁTICA"
            },
            {
                id: 1,
                question: "En una unidad educativa, para preparar material didáctico se sabe que 4 cuadernos cuestan 60",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La proporcionalidad directa es una relación matemática en la que dos magnitudes varían de manera conjunta, manteniendo una razón constante entre ellas. Esto implica que, al aumentar una de las magnitudes, la otra aumenta en la misma proporción. En la situación planteada, el precio depende directamente de la cantidad de cuadernos, por lo que el costo unitario permanece constante. Si 4 cuadernos cuestan 60 bolivianos, el precio por cuaderno se obtiene dividiendo el costo total entre la cantidad, resultando 15 bolivianos por unidad. Manteniendo esta relación proporcional, el costo de 10 cuadernos se calcula multiplicando el precio unitario por la nueva cantidad, obteniéndose un costo total de 150 bolivianos."
            },
            {
                id: 2,
                question: "Una expresión algebraica representa una relación general entre cantidades variables. Comprender su",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En una expresión algebraica, los términos constantes representan cantidades fijas que no dependen del valor de la variable. En 3x + 53x + 53x + 5, el término 5 se mantiene igual independientemente del valor de x. Comprender esta diferencia es clave para interpretar modelos matemáticos simples. Este ítem evalúa comprensión conceptual del lenguaje algebraico. Es fundamental para la enseñanza posterior de ecuaciones y funciones."
            },
            {
                id: 3,
                question: "Una función lineal permite describir relaciones de cambio constante entre dos variables. Este tipo de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pendiente de una función lineal indica la razón de cambio entre las variables. Una pendiente positiva señala que ambas variables crecen de manera conjunta. Este concepto es esencial para interpretar gráficas y relaciones funcionales. Más allá del cálculo, se evalúa comprensión del significado del comportamiento de la función. Es una competencia clave para la enseñanza de matemática en niveles iniciales y primarios."
            },
            {
                id: 4,
                question: "La estadística permite organizar e interpretar información proveniente de la realidad. Una de las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La media aritmética es una medida de tendencia central que resume un conjunto de datos en un solo valor representativo. Se obtiene sumando todos los valores y dividiendo entre la cantidad de datos. Es ampliamente utilizada para interpretar resultados educativos. Este ítem evalúa comprensión del sentido de la media, no solo su fórmula. Resulta clave para la lectura e interpretación de información estadística."
            },
            {
                id: 5,
                question: "Resolver una ecuación implica encontrar el valor de la variable que hace verdadera una igualdad.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Resolver la ecuación implica aplicar propiedades de la igualdad. Primero se divide ambos lados entre 2, obteniendo x + 3 = 7x + 3 = 7x + 3 ="
            },
            {
                id: 6,
                question: "En algunas situaciones, al aumentar una cantidad, otra disminuye de manera proporcional. Este tipo",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la proporcionalidad inversa, el producto de las dos variables permanece constante. Si aumenta el número de trabajadores, disminuye el tiempo necesario para realizar la misma tarea. Este razonamiento es frecuente en problemas cotidianos. El ítem evalúa la capacidad de identificar el tipo de relación, no solo de calcular. Es esencial para desarrollar pensamiento funcional. 172 Repositorio de"
            },
            {
                id: 7,
                question: "Las gráficas permiten visualizar relaciones entre variables y analizar comportamientos. Su correcta",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Una recta horizontal indica que, aunque la variable independiente cambie, la dependiente mantiene el mismo valor. Esto representa una situación de constancia. Interpretar gráficas requiere comprender el significado de la forma, no solo observarla. Este ítem evalúa lectura e interpretación de información visual. Es una competencia clave para el trabajo docente."
            },
            {
                id: 8,
                question: "La pendiente de una recta indica cómo varía una magnitud respecto a otra y permite interpretar el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pendiente representa la razón de cambio entre dos variables. Cuando la pendiente es negativa, existe una relación inversa: a medida que aumenta la variable independiente, la dependiente disminuye. Esto se refleja gráficamente en una recta descendente. Comprender el significado de la pendiente es clave para interpretar fenómenos representados en gráficos."
            },
            {
                id: 9,
                question: "Las razones trigonométricas se utilizan para relacionar los lados y ángulos de un triángulo",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En trigonometría, el seno de un ángulo en un triángulo rectángulo se define como la razón entre el cateto opuesto al ángulo y la hipotenusa. Esta definición es estándar y fundamental para el estudio de trigonometría en secundaria. Reconocer correctamente esta relación permite resolver problemas de medición indirecta."
            },
            {
                id: 10,
                question: "Una expresión algebraica representa una relación general entre cantidades variables. Comprender su",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En una expresión algebraica, los términos constantes representan cantidades fijas que no dependen del valor de la variable. En 3x + 53x + 53x + 5, el término 5 se mantiene igual independientemente del valor de x. Comprender esta diferencia es clave para interpretar modelos matemáticos simples."
            },
            {
                id: 11,
                question: "Una función lineal permite describir relaciones de cambio constante entre dos variables. Este tipo de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pendiente de una función lineal indica la razón de cambio entre las variables. Una pendiente positiva señala que ambas variables crecen de manera conjunta. Este concepto es esencial para interpretar gráficas y relaciones funcionales. Más allá del cálculo, se evalúa comprensión del significado del comportamiento de la función. Es una competencia clave para la enseñanza de matemática en niveles iniciales y primarios. 173"
            },
            {
                id: 13,
                question: "Las gráficas permiten visualizar relaciones entre variables y analizar comportamientos. Su correcta",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Una recta horizontal indica que, aunque la variable independiente cambie, la dependiente mantiene el mismo valor. Esto representa una situación de constancia. Interpretar gráficas requiere comprender el significado de la forma, no solo observarla."
            },
            {
                id: 14,
                question: "La pendiente de una recta indica cómo varía una magnitud respecto a otra y permite interpretar el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pendiente representa la razón de cambio entre dos variables. Cuando la pendiente es negativa, existe una relación inversa: a medida que aumenta la variable independiente, la dependiente disminuye. Esto se refleja gráficamente en una recta descendente. Comprender el significado de la pendiente es clave para interpretar fenómenos representados en gráficos."
            },
            {
                id: 15,
                question: "El valor absoluto de un número real se define como la distancia de dicho número al cero en la recta",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El valor absoluto representa una distancia y, por definición, nunca es negativo. El número −7 se encuentra a siete unidades del cero en la recta numérica, por lo que su valor absoluto es"
            },
            {
                id: 16,
                question: "En el análisis de rectas en el plano cartesiano, la pendiente permite interpretar el comportamiento",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pendiente representa la razón de cambio entre dos variables. Cuando la pendiente es negativa, existe una relación inversa: a medida que una variable aumenta, la otra disminuye. Gráficamente, esto se observa como una recta descendente. Este concepto es fundamental para interpretar gráficos y comprender fenómenos modelados mediante funciones lineales. 174 Repositorio de"
            },
            {
                id: 17,
                question: "La suma de los ángulos internos de un triángulo es una propiedad fundamental de la geometría",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En geometría euclidiana, la suma de los ángulos internos de todo triángulo es siempre 180°. Esta propiedad es independiente del tipo de triángulo y constituye un principio básico para el estudio de figuras planas. Su comprensión es esencial en la resolución de problemas geométricos."
            },
            {
                id: 18,
                question: "Las ecuaciones lineales permiten modelar relaciones simples entre cantidades y son una herramienta",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Resolver la ecuación implica aislar la variable. Al sumar 10 a ambos lados se obtiene 5x = 105x = 105x=10, y al dividir entre 5 resulta x = 2x = 2x ="
            },
            {
                id: 19,
                question: "La matemática es considerada una herramienta fundamental para el desarrollo de las ciencias",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La matemática proporciona lenguajes, modelos y estructuras que permiten representar fenómenos reales, formular leyes y realizar predicciones. En física, economía y otras ciencias, las relaciones matemática son fundamentales para comprender la realidad. No sustituye la experimentación, sino que la complementa."
            },
            {
                id: 20,
                question: "En matemática, el infinito no es un número, sino un concepto que describe procesos o conjuntos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "A diferencia de las ciencias experimentales, la matemática se construye a partir de axiomas y definiciones aceptadas, sobre las cuales se desarrollan teoremas mediante razonamientos lógicos. Este modo de construcción del conocimiento matemático tiene consecuencias importantes para la validez de sus resultados. Disciplina: QUÍMICA"
            },
            {
                id: 1,
                question: "¿En qué región del átomo se encuentra concentrada la mayor parte de su masa, considerando la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La mayor parte de la masa del átomo se encuentra concentrada en el núcleo, ya que allí se localizan los protones y neutrones, partículas subatómicas con una masa significativamente mayor que la de los electrones. Aunque los 175 electrones se distribuyen alrededor del núcleo formando la nube electrónica y ocupan gran parte del volumen del átomo, su contribución a la masa total es mínima. Esta distribución explica por qué el átomo presenta un núcleo pequeño y denso rodeado por regiones de baja masa, principio fundamental para comprender la estructura atómica y el comportamiento de la materia."
            },
            {
                id: 2,
                question: "¿A qué corresponde el número atómico de un elemento químico?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El número atómico de un elemento químico corresponde al número de protones que se encuentran en el núcleo de sus átomos. Este valor es determinante porque define la identidad del elemento, es decir, establece de qué elemento se trata y lo diferencia de los demás. Además, el número de protones condiciona la distribución de los electrones alrededor del núcleo en los átomos neutros, lo que a su vez explica el comportamiento químico del elemento y su posición en la tabla periódica."
            },
            {
                id: 3,
                question: "Considerando la composición del núcleo atómico, ¿en qué condición dos átomos del mismo",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los isótopos son átomos de un mismo elemento químico que poseen el mismo número de protones en el núcleo, lo que significa que comparten el mismo número atómico y, por tanto, la misma identidad química. Sin embargo, se diferencian en el número de neutrones, lo que provoca variaciones en su masa atómica. Debido a que las propiedades químicas dependen principalmente de la configuración electrónica, los isótopos presentan comportamientos químicos muy similares. No obstante, las diferencias en el número de neutrones pueden generar cambios en propiedades físicas, como la masa, la estabilidad nuclear o la radiactividad, aspectos relevantes para aplicaciones científicas y tecnológicas."
            },
            {
                id: 4,
                question: "La organización de la tabla periódica responde a un criterio fundamental que permite explicar la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La tabla periódica se organiza en función del número atómico creciente, es decir, según la cantidad de protones presentes en el núcleo de los átomos. Este criterio permite explicar de manera coherente la periodicidad de las propiedades químicas, ya que el número atómico determina la configuración electrónica de cada elemento y, en consecuencia, su comportamiento químico. Al ordenar los elementos de este modo, aquellos con configuraciones electrónicas semejantes quedan ubicados en un mismo grupo o familia, lo que justifica que presenten propiedades químicas similares."
            },
            {
                id: 5,
                question: "¿Cómo se denominan aquellos elementos que presentan propiedades intermedias entre los metales",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los metaloides son elementos que presentan propiedades físicas y químicas intermedias entre las de los metales y los no metales. Desde el punto de vista físico, pueden mostrar cierto brillo metálico, pero a diferencia de los metales suelen ser frágiles y no maleables; químicamente, su comportamiento puede variar según las condiciones de reacción. Esta dualidad les permite actuar en algunos casos como conductores y en otros como semiconductores, propiedad que resulta clave para su uso en dispositivos electrónicos y tecnológicos. 176 Repositorio de"
            },
            {
                id: 6,
                question: "¿Cuál es la causa principal de la formación de un enlace químico?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El enlace químico se forma como resultado de la interacción entre los electrones de valencia y los núcleos de los átomos involucrados. Desde la Química, esta interacción implica un equilibrio entre fuerzas de atracción y repulsión: los electrones de un átomo son atraídos por el núcleo de otro, mientras que existen repulsiones entre electrones y entre núcleos. Cuando el balance de estas fuerzas conduce a una disminución de la energía total del sistema, se alcanza una configuración más estable, lo que favorece la formación del enlace."
            },
            {
                id: 7,
                question: "¿Cuál es la característica principal del enlace iónico que permite distinguirlo de otros tipos de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El enlace iónico se produce cuando un átomo cede electrones y otro átomo los acepta, dando lugar a la formación de iones con cargas eléctricas opuestas. Este tipo de enlace ocurre generalmente entre metales y no metales, debido a la diferencia en su tendencia a perder o ganar electrones. La atracción electrostática entre los iones de carga contraria es la fuerza que mantiene unido al compuesto, originando estructuras sólidas cristalinas con propiedades físicas características, como elevada estabilidad y altos puntos de fusión."
            },
            {
                id: 8,
                question: "¿Qué información proporciona la fórmula química de un compuesto respecto a los átomos que lo",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La fórmula química de un compuesto indica el tipo de elementos presentes y la proporción en la que sus átomos se combinan para formar la sustancia. Esta representación simbólica permite identificar cuántos átomos de cada elemento intervienen en la estructura del compuesto, ya sea en una molécula o en una red cristalina. Desde la Química, esta información es esencial para comprender la composición de la materia, establecer relaciones cuantitativas entre reactivos y productos, y realizar cálculos estequiométricos en reacciones químicas."
            },
            {
                id: 9,
                question: "¿En la clasificación de la materia, considerando la uniformidad de su composición y la imposibilidad",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Una sustancia pura se caracteriza por poseer una composición química definida y constante, lo que significa que está formada por un solo tipo de componente, ya sea un elemento o un compuesto. Esta composición fija se mantiene independientemente de la cantidad de sustancia considerada y le confiere propiedades físicas y químicas específicas, como punto de fusión, punto de ebullición y densidad. A diferencia de las mezclas, las sustancias puras no pueden separarse en componentes más simples mediante métodos físicos, ya que su estructura responde a una combinación química definida, lo que permite distinguirlas claramente dentro del estudio de la materia."
            },
            {
                id: 10,
                question: "¿En la clasificación de los sistemas materiales, considerando la distribución de sus componentes y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las mezclas homogéneas se caracterizan por presentar una composición uniforme en toda su extensión y por manifestarse como una sola fase visible, lo que impide distinguir sus componentes a simple vista. Desde la Química, esto se explica porque las sustancias que conforman la mezcla se encuentran distribuidas de manera 177 homogénea a nivel molecular o iónico, como ocurre en las soluciones. Aunque sus componentes pueden separarse mediante métodos físicos adecuados, como la evaporación o la destilación, la apariencia macroscópica de la mezcla permanece constante, lo que permite diferenciarla de las mezclas heterogéneas."
            },
            {
                id: 11,
                question: "En el estudio de las transformaciones de la materia, considerando si se modifica o no la naturaleza",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Un cambio físico se caracteriza porque no altera la composición química de la sustancia, sino que afecta únicamente aspectos externos como el estado de agregación, la forma o el tamaño. Esto implica que las partículas que constituyen la sustancia mantienen su identidad química, ya que no se rompen ni se forman enlaces nuevos. Ejemplos de cambios físicos incluyen la fusión, la evaporación o la fragmentación de un material. Estos cambios suelen ser reversibles y no implican reacciones químicas, lo que permite distinguirlos claramente de los cambios químicos, en los que sí se generan sustancias nuevas con propiedades diferentes."
            },
            {
                id: 12,
                question: "En el estudio de las reacciones químicas, considerando los cambios que experimentan las sustancias",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La ley de conservación de la masa establece que, durante una reacción química, la masa total de los reactivos es igual a la masa total de los productos. Este principio se explica porque los átomos no se crean ni se destruyen, sino que únicamente se reordenan al romperse y formarse nuevos enlaces químicos. Aunque las sustancias iniciales se transformen en otras diferentes, la cantidad total de materia permanece constante. Esta ley constituye un fundamento esencial para el balanceo de ecuaciones químicas y para los cálculos estequiométricos, ya que garantiza que toda reacción química respeta la conservación de la materia."
            },
            {
                id: 13,
                question: "En el estudio de las soluciones acuosas, considerando el comportamiento químico de los ácidos y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El pH es una magnitud que mide la concentración de protones presentes en una solución acuosa. Este valor permite establecer si una solución es ácida, neutra o básica, en función de la mayor o menor presencia de protones en el medio. La escala de pH facilita la comparación del comportamiento químico de distintas soluciones y resulta fundamental para comprender procesos químicos y biológicos, ya que numerosas reacciones dependen directamente del grado de acidez o basicidad del entorno."
            },
            {
                id: 14,
                question: "En el estudio de la Química orgánica, considerando la estructura y composición de las sustancias",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los compuestos orgánicos se caracterizan principalmente por la presencia de enlaces entre átomos de carbono e hidrógeno, lo que constituye el rasgo distintivo de la Química orgánica. El carbono posee la capacidad de formar enlaces estables consigo mismo y con otros elementos, lo que permite la existencia de una gran diversidad de estructuras moleculares, desde cadenas simples hasta compuestos complejos."
            },
            {
                id: 15,
                question: "En el estudio de la Química orgánica, considerando la composición elemental de los compuestos y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los hidrocarburos son compuestos orgánicos formados únicamente por átomos de carbono e hidrógeno, lo que los distingue de otros compuestos orgánicos que incorporan elementos adicionales como oxígeno, nitrógeno o azufre. El carbono actúa como el elemento central debido a su capacidad para formar cadenas y estructuras variadas, mientras que el hidrógeno completa la estabilidad de dichas estructuras. Esta composición simple permite una amplia diversidad de hidrocarburos, como alcanos, alquenos y alquinos, que constituyen la base de numerosos combustibles y procesos energéticos, desempeñando un papel fundamental en la vida cotidiana y en el desarrollo tecnológico."
            },
            {
                id: 16,
                question: "En la clasificación de los estados de la materia, ¿cuál es la característica que define de manera más",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El estado sólido se caracteriza por presentar forma fija y volumen fijo, debido a que sus partículas se encuentran muy próximas entre sí y ordenadas, unidas por fuerzas de atracción intensas. Esta disposición limita el movimiento de las partículas, que solo pueden vibrar alrededor de posiciones definidas, lo que impide cambios espontáneos en la forma y el volumen del sólido. Esta organización interna explica propiedades como la rigidez, la baja compresibilidad y la estabilidad estructural de los sólidos, diferenciándolos claramente de los estados líquido y gaseoso, en los cuales las partículas presentan mayor libertad de movimiento."
            },
            {
                id: 17,
                question: "En el estudio de la estructura de la materia, ¿para qué se utilizan los modelos moleculares en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los modelos moleculares permiten representar de manera simplificada estructuras que no son visibles a simple vista, como la disposición de los átomos dentro de una molécula y el tipo de enlaces que los une. Desde la Química, estos modelos no reproducen la realidad de forma exacta, sino que facilitan la comprensión de la geometría molecular, la orientación espacial de los enlaces y las relaciones entre los átomos. Gracias a estas representaciones, es posible interpretar propiedades químicas, predecir comportamientos de las sustancias y comprender cómo la estructura molecular influye en la reactividad y en las características físicas de los compuestos."
            },
            {
                id: 18,
                question: "¿Cuál es la fórmula química correcta del ácido sulfúrico, uno de los ácidos más importantes en la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El ácido sulfúrico es un compuesto químico formado por dos átomos de hidrógeno, un átomo de azufre y cuatro átomos de oxígeno, lo que se representa mediante la fórmula H₂SO₄. Esta proporción refleja la estructura del anión sulfato y la cantidad de hidrógenos que le confieren su carácter ácido. La correcta formulación de ácidos oxácidos requiere comprender la relación entre el elemento central, el oxígeno y el hidrógeno, así como la conservación de la carga, aspectos fundamentales en la Química del nivel secundario."
            },
            {
                id: 19,
                question: "En la formulación de compuestos iónicos, la fórmula química expresa la relación entre los iones que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El cloruro de sodio es un compuesto iónico formado por la unión de un ion sodio con carga positiva y un ion 179 cloruro con carga negativa. La fórmula NaCl indica que los iones se combinan en una proporción uno a uno, de modo que las cargas se neutralizan, dando lugar a un compuesto eléctricamente neutro. Esta representación es fundamental para comprender cómo se forman los compuestos iónicos y cómo la fórmula química refleja el equilibrio de cargas, aspecto central en la formulación inorgánica trabajada en el nivel de secundaria."
            },
            {
                id: 20,
                question: "¿Cuál es la fórmula química del dióxido de carbono, gas que participa en la respiración y en el efecto",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El dióxido de carbono es un compuesto químico formado por un átomo de carbono y dos átomos de oxígeno, lo que se representa mediante la fórmula CO"
            },
            {
                id: 1,
                question: "Desde la perspectiva de la geografía regional sudamericana, la ubicación de un país influye de manera",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Bolivia se localiza en la región central de América del Sur, lo que le permite articular espacios geográficos de transición entre los Andes, la Amazonía y el Chaco. Esta ubicación continental explica su diversidad climática, ecológica y cultural, así como su condición de país mediterráneo con múltiples conexiones fronterizas. La centralidad geográfica no implica homogeneidad, sino una compleja interacción de regiones naturales y humanas."
            },
            {
                id: 2,
                question: "En la organización territorial de los Estados, la división político-administrativa cumple un rol",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La división político-administrativa organiza el territorio en unidades como departamentos, provincias y municipios, con el propósito de facilitar la administración estatal, la planificación territorial y la provisión de servicios públicos. Estas divisiones responden a decisiones históricas y políticas, y permiten una gestión más eficiente del espacio geográfico desde el punto de vista institucional."
            },
            {
                id: 3,
                question: "La configuración del relieve sudamericano es el resultado de procesos geológicos de larga duración.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La formación de la Cordillera de los Andes se explica a partir de la teoría de la tectónica de placas, según la cual la superficie terrestre está constituida por grandes placas litosféricas en constante movimiento. En el margen occidental de América del Sur, la placa de Nazca, de origen oceánico y mayor densidad, converge y se introduce por debajo de la placa Sudamericana, de carácter continental, en un proceso denominado subducción. Esta interacción genera una fuerte compresión de la corteza terrestre, provocando el plegamiento, fracturamiento y levantamiento progresivo de los materiales continentales, lo que dio origen a un extenso y elevado sistema montañoso. Como consecuencia de este proceso orogénico, se desarrolla una intensa actividad sísmica y 180 Repositorio de"
            },
            {
                id: 4,
                question: "Bolivia presenta una notable diversidad climática en un territorio relativamente reducido. ¿Cuál es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La diversidad climática de Bolivia se explica fundamentalmente por la altitud y el relieve, factores geográficos que influyen de manera directa en la temperatura y en la distribución de las precipitaciones. De acuerdo con los principios de la climatología geográfica, a medida que aumenta la altitud disminuye la temperatura, generando diferencias térmicas significativas incluso en distancias relativamente cortas. En este marco, el relieve boliviano, caracterizado por la presencia del Altiplano, los valles interandinos y las extensas llanuras orientales, da lugar a la formación de distintos pisos climáticos y ecológicos, que permiten la coexistencia de climas fríos en las zonas altas, templados en los valles y cálidos en las regiones bajas. Estas variaciones altitudinales no solo condicionan el clima, sino también la vegetación, los sistemas productivos y las formas de ocupación humana del territorio, configurando una elevada diversidad ambiental que distingue al país y explica la multiplicidad de paisajes y actividades económicas desarrolladas en su espacio geográfico."
            },
            {
                id: 5,
                question: "Los paisajes naturales están en constante transformación debido a diversos procesos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La erosión es un proceso geomorfológico externo mediante el cual agentes naturales como el agua, el viento, el hielo y la gravedad actúan sobre la superficie terrestre, provocando el desgaste, desprendimiento y transporte de materiales como rocas, suelos y sedimentos. Desde la geografía física, este proceso constituye uno de los mecanismos fundamentales en la modelación del relieve, ya que modifica de manera progresiva las formas del paisaje a lo largo del tiempo geológico. La erosión se manifiesta a través de distintos tipos, como la fluvial, eólica, glaciar y gravitacional, cada una asociada a condiciones climáticas y ambientales específicas. Su acción se complementa con la sedimentación, proceso mediante el cual los materiales erosionados se depositan en otras áreas, dando origen a nuevas formas del relieve como valles, llanuras y deltas. En conjunto, erosión y sedimentación explican la constante transformación del paisaje terrestre y evidencian el carácter dinámico del espacio geográfico."
            },
            {
                id: 6,
                question: "En el estudio del espacio geográfico, los mapas cumplen una función esencial. ¿Qué tipo de mapa",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El mapa físico es una representación cartográfica que muestra los principales elementos naturales del territorio, como sistemas montañosos, llanuras, mesetas, ríos, lagos y otras formas del relieve, utilizando colores, símbolos y gradaciones altitudinales convencionales. Desde la geografía física, este tipo de mapa permite analizar la estructura natural del espacio geográfico, facilitando la comprensión de cómo el relieve, la hidrografía y las características del terreno condicionan el clima, la disponibilidad de recursos y las posibilidades de ocupación del territorio. Su uso resulta fundamental para interpretar la localización de los asentamientos humanos, las rutas de comunicación y las actividades productivas, ya que estas se desarrollan en estrecha relación con las condiciones naturales del entorno, evidenciando la interacción permanente entre naturaleza y sociedad. 181"
            },
            {
                id: 8,
                question: "Para analizar la distribución de la población en el territorio, la geografía utiliza indicadores específicos.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La densidad poblacional es un indicador demográfico fundamental que expresa la relación entre el número de habitantes y la superficie territorial que estos ocupan, generalmente calculada en habitantes por kilómetro cuadrado. Desde la geografía humana, este concepto permite analizar la distribución espacial de la población, identificando áreas de alta concentración humana, como centros urbanos, y regiones con escasa ocupación, como zonas rurales o de difícil acceso. El estudio de la densidad poblacional aporta información clave para la planificación territorial, ya que permite evaluar la presión sobre los recursos naturales, la infraestructura y los servicios básicos, así como comprender las desigualdades espaciales y los factores físicos, económicos y sociales que influyen en los patrones de asentamiento humano."
            },
            {
                id: 9,
                question: "En el análisis de la estructura económica de una sociedad, las actividades productivas se clasifican",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El sector primario está conformado por aquellas actividades económicas cuya función principal es la extracción, recolección o aprovechamiento directo de los recursos naturales, sin someterlos a procesos de transformación industrial complejos. Desde la geografía económica, este sector constituye la base del sistema productivo, ya que proporciona los alimentos y materias primas que alimentan las actividades del sector secundario y terciario. La agricultura es una actividad central del sector primario porque depende directamente de factores naturales como el clima, el suelo y la disponibilidad de agua, y tiene como finalidad la producción de alimentos para el consumo humano y animal, así como insumos básicos para otros procesos productivos. Su importancia radica no solo en su función económica, sino también en su estrecha relación con el territorio y la organización del espacio rural que proporciona alimentos y materias primas para otros procesos productivos."
            },
            {
                id: 10,
                question: "La deforestación es una problemática ambiental con múltiples efectos territoriales. ¿Cuál es una de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La eliminación de la cobertura forestal constituye uno de los procesos de mayor impacto ambiental sobre los ecosistemas, ya que los bosques cumplen funciones esenciales en el equilibrio natural del territorio. Desde la 182 Repositorio de"
            },
            {
                id: 11,
                question: "Para ubicar un punto específico en la superficie terrestre se utilizan sistemas de referencia. ¿Cuáles",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La latitud y la longitud constituyen las coordenadas geográficas fundamentales que permiten localizar con precisión cualquier punto sobre la superficie terrestre mediante un sistema de referencia universal. Desde la geografía y la cartografía, la latitud expresa la distancia angular de un lugar con respecto a la línea del Ecuador, medida en grados hacia el norte o el sur, y está directamente relacionada con la distribución de la radiación solar y las zonas climáticas del planeta. Por su parte, la longitud indica la distancia angular con relación al meridiano de Greenwich, estableciendo la posición de un punto hacia el este u oeste, y es esencial para la determinación del tiempo y la organización de los husos horarios. En conjunto, ambas coordenadas conforman una red imaginaria que posibilita la representación precisa del espacio geográfico, la elaboración de mapas y la navegación, constituyéndose en una herramienta básica para el estudio y la comprensión del territorio."
            },
            {
                id: 12,
                question: "En la dinámica fluvial, ciertas formas del relieve se originan por acumulación de sedimentos. ¿Cómo",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El delta es una forma de relieve fluvial que se origina cuando un río alcanza su desembocadura en un mar, lago u otro cuerpo de agua y su velocidad de corriente disminuye de manera significativa, lo que provoca la deposición progresiva de sedimentos transportados a lo largo de su curso. Desde la geografía física, este proceso se explica por la pérdida de energía del río, que ya no puede mantener en suspensión los materiales erosionados, los cuales se acumulan y dan lugar a superficies planas y en constante transformación. Estas áreas suelen presentar suelos altamente fértiles, debido a la riqueza de sedimentos minerales, lo que las convierte en espacios favorables para la actividad agrícola y el asentamiento humano. Sin embargo, su carácter dinámico también las hace vulnerables a inundaciones y cambios en el curso fluvial, evidenciando la estrecha relación entre procesos naturales y ocupación del territorio."
            },
            {
                id: 13,
                question: "Los desplazamientos poblacionales pueden clasificarse según su alcance territorial. ¿Qué se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La migración interna se define como el desplazamiento de personas o grupos poblacionales dentro de las fronteras de un mismo país, generalmente desde zonas rurales hacia áreas urbanas o entre distintas regiones del territorio nacional. Desde la geografía de la población, este fenómeno está motivado por factores económicos, como la búsqueda de empleo y mejores ingresos; factores sociales, vinculados al acceso a servicios de educación, salud y vivienda; y factores ambientales, relacionados con desastres naturales o degradación del entorno. La migración interna genera impactos significativos en la organización territorial, ya que modifica la distribución de la población, impulsa el crecimiento urbano, transforma el uso del suelo y puede producir desequilibrios regionales, evidenciando la relación directa entre dinámica poblacional y espacio geográfico. 183"
            },
            {
                id: 15,
                question: "Desde los enfoques de la geografía contemporánea, el análisis del territorio supera la visión que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Desde la geografía contemporánea, el espacio geográfico se concibe como una construcción social y dinámica, producto de la interacción permanente entre los elementos naturales —como el relieve, el clima y los recursos— y las actividades humanas, tales como la producción económica, la organización social, la cultura y las decisiones políticas. Esta concepción reconoce que el espacio no es estático ni neutro, sino que se transforma a lo largo del tiempo como resultado de procesos históricos, sociales y económicos que dejan huellas visibles en el territorio. En consecuencia, el espacio geográfico refleja relaciones de poder, formas de apropiación del territorio y modos de vida, lo que permite comprenderlo como un sistema complejo en constante transformación, más allá de una simple localización física o representación cartográfica."
            },
            {
                id: 16,
                question: "A lo largo de la historia, los ríos han desempeñado un papel central en la organización del territorio.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los ríos constituyen elementos fundamentales en la organización del espacio geográfico, ya que proporcionan recursos y condiciones naturales esenciales para el desarrollo de las sociedades humanas. Desde la geografía física y humana, los ríos abastecen de agua dulce para el consumo, la agricultura y diversas actividades económicas, además de aportar suelos fértiles mediante la deposición de sedimentos en sus llanuras aluviales. Asimismo, históricamente han funcionado como vías naturales de comunicación y transporte, facilitando el intercambio de bienes, personas y culturas. Estas características han favorecido la localización de asentamientos humanos permanentes, el desarrollo de actividades productivas y la conformación de centros urbanos, evidenciando la estrecha relación entre los sistemas fluviales y la dinámica territorial de las sociedades."
            },
            {
                id: 17,
                question: "La desertificación es un problema ambiental de alcance global. ¿En qué consiste este proceso?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La desertificación es un proceso de degradación ambiental que se manifiesta en la pérdida progresiva de la capacidad productiva del suelo en zonas áridas y semiáridas, como consecuencia de la interacción entre 184 Repositorio de"
            },
            {
                id: 18,
                question: "El relieve influye de manera directa en la organización del espacio geográfico porque:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El relieve constituye un factor geográfico determinante en la organización del espacio, ya que influye de manera directa en el clima, la disponibilidad de recursos naturales y las posibilidades de ocupación y uso del suelo. Desde la geografía física, las formas del relieve —como montañas, mesetas, valles y llanuras— condicionan la temperatura, las precipitaciones y los vientos, generando climas diferenciados que inciden en la vegetación y en los sistemas productivos. Asimismo, el relieve determina la accesibilidad del territorio, la fertilidad de los suelos y la disponibilidad de agua, aspectos clave para el desarrollo de la agricultura, la ganadería y otras actividades económicas. Estas condiciones influyen en la localización de los asentamientos humanos, las vías de comunicación y la distribución de la población, evidenciando que el relieve no solo modela el paisaje natural, sino que también orienta las formas de organización y ocupación del espacio geográfico por parte de las sociedades."
            },
            {
                id: 19,
                question: "La distribución de los climas en la Tierra no es aleatoria, sino que responde a factores astronómicos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las zonas climáticas del planeta se establecen fundamentalmente a partir de la latitud, ya que esta determina el ángulo con el que los rayos solares inciden sobre la superficie terrestre. Debido a la forma esférica de la Tierra y a la inclinación de su eje, la radiación solar se distribuye de manera desigual, generando zonas cálidas, templadas y frías. En las regiones cercanas al Ecuador, la radiación es más directa y constante, lo que origina climas cálidos; mientras que hacia los polos la radiación llega de forma oblicua, provocando temperaturas más bajas. Este principio explica la organización climática global y constituye una base fundamental de la climatología geográfica."
            },
            {
                id: 20,
                question: "El planeta Tierra realiza movimientos constantes que tienen efectos directos sobre la vida y los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El movimiento de rotación consiste en el giro de la Tierra sobre su propio eje, que se completa aproximadamente cada 24 horas. Este movimiento provoca la alternancia del día y la noche, ya que mientras una parte del planeta recibe la radiación solar, la otra permanece en sombra. Desde la geografía astronómica, este fenómeno explica también la organización del tiempo, la existencia de los husos horarios y los ritmos biológicos de los seres vivos. A diferencia del movimiento de traslación, que origina las estaciones del año, la rotación es responsable de uno de los ciclos más básicos y universales de la vida en la Tierra. 185 Disciplina: PSICOLOGÍA"
            },
            {
                id: 1,
                question: "Durante la adolescencia, los estudiantes comienzan a mostrar mayor capacidad para analizar",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La teoría del desarrollo cognitivo explica que, a partir de la adolescencia, se consolida una etapa en la que el pensamiento deja de depender exclusivamente de objetos concretos y experiencias inmediatas, permitiendo operar mentalmente con abstracciones, hipótesis y razonamientos lógicos complejos. En esta etapa, el estudiante puede anticipar consecuencias, analizar situaciones hipotéticas, establecer relaciones causales y reflexionar críticamente sobre ideas y normas. Estas capacidades resultan fundamentales para el aprendizaje de contenidos científicos, sociales y filosóficos propios de la educación secundaria y constituyen una base indispensable para la formación de futuros maestros, quienes deben comprender, analizar y problematizar la realidad educativa."
            },
            {
                id: 2,
                question: "En el proceso educativo, se observa que muchos estudiantes logran comprender mejor los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La teoría sociocultural sostiene que el aprendizaje es un proceso socialmente mediado, en el que el lenguaje, la interacción con otros y la guía del adulto o del par más competente cumplen un rol central. Desde este enfoque, el desarrollo cognitivo no ocurre de manera aislada, sino que se construye en contextos culturales específicos. La mediación pedagógica permite que el estudiante alcance niveles de desempeño superiores a los que lograría de forma autónoma, lo que fundamenta prácticas educativas colaborativas y el rol activo del maestro como orientador del aprendizaje."
            },
            {
                id: 3,
                question: "En el ámbito escolar, los estudiantes utilizan distintos tipos de memoria para aprender y resolver",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La psicología cognitiva describe la memoria de trabajo como un sistema encargado de mantener y manipular información durante breves periodos de tiempo, mientras se realizan tareas cognitivas. Este tipo de memoria es esencial para procesos como la comprensión lectora, el cálculo mental y la resolución de problemas, ya que permite integrar información nueva con conocimientos previos de manera inmediata. Su capacidad limitada explica por qué la sobrecarga de información puede dificultar el aprendizaje, aspecto clave para la planificación pedagógica."
            },
            {
                id: 4,
                question: "En el proceso educativo, la motivación influye de manera decisiva en el interés, la persistencia y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La motivación intrínseca se define como el impulso que surge del interés propio por la actividad, sin necesidad de recompensas externas. Desde la psicología educativa, se reconoce que este tipo de motivación favorece aprendizajes más profundos, autónomos y duraderos, ya que el estudiante se compromete activamente con la tarea. Este enfoque resalta la importancia de generar experiencias educativas significativas que despierten el interés genuino por aprender. 186 Repositorio de"
            },
            {
                id: 5,
                question: "Cuando un estudiante repite una conducta porque ha recibido elogios, reconocimiento o una",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Desde el enfoque conductista, el reforzamiento explica que las conductas tienden a fortalecerse cuando van seguidas de consecuencias positivas. Este principio permite comprender cómo el entorno influye en el comportamiento, especialmente en contextos educativos donde el reconocimiento, las calificaciones o los estímulos sociales pueden aumentar la probabilidad de que una conducta se repita. Su aplicación requiere un uso reflexivo para no reducir el aprendizaje a respuestas mecánicas."
            },
            {
                id: 6,
                question: "En el aula, se observa que algunos estudiantes aprenden con mayor rapidez, mientras que otros",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La psicología educativa reconoce que los estudiantes presentan diferencias en la forma y el ritmo en que procesan la información. Estas diferencias no implican déficit, sino diversidad cognitiva. Considerarlas permite diseñar estrategias pedagógicas flexibles e inclusivas, favoreciendo el aprendizaje de todos los estudiantes y evitando enfoques homogéneos que pueden generar exclusión o rezago escolar."
            },
            {
                id: 7,
                question: "Cuando una persona interpreta una situación a partir de sus experiencias previas, creencias,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La percepción implica organizar, interpretar y dar significado a la información sensorial. Desde la psicología, se entiende que este proceso está influido por factores subjetivos y culturales, lo que explica por qué distintas personas pueden interpretar de manera diferente una misma situación. Este concepto resulta clave para comprender la diversidad de interpretaciones y respuestas en el contexto educativo."
            },
            {
                id: 8,
                question: "En la convivencia escolar, reconocer las propias emociones y regularlas de manera adecuada resulta",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La inteligencia emocional comprende un conjunto de habilidades relacionadas con el reconocimiento, la comprensión y la regulación de las emociones propias y ajenas. Desde la psicología contemporánea, se reconoce que estas habilidades influyen en la adaptación social, el bienestar psicológico y el rendimiento académico, siendo especialmente relevantes en contextos educativos."
            },
            {
                id: 9,
                question: "Desde el enfoque psicoanalítico, se plantea que una parte importante del comportamiento humano",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El psicoanálisis sostiene que pensamientos, deseos y conflictos no conscientes influyen en la conducta humana. Este enfoque amplió la comprensión de la personalidad al considerar dimensiones psicológicas profundas que no siempre son accesibles a la conciencia, aportando una mirada más compleja sobre el comportamiento humano. 187"
            },
            {
                id: 11,
                question: "En Psicología, el estudio de los procesos cognitivos permite comprender cómo las personas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La atención es uno de los procesos cognitivos básicos que permite al ser humano seleccionar información relevante del entorno y focalizar los recursos mentales en determinados estímulos, tareas o ideas, mientras se inhiben aquellos que resultan irrelevantes. Desde la psicología cognitiva, se reconoce que la atención es limitada, selectiva y fluctuante, y que constituye una condición necesaria para que otros procesos, como la percepción, la memoria y el aprendizaje, puedan desarrollarse de manera eficaz. En el ámbito educativo, la atención explica por qué el interés, la motivación y el contexto influyen directamente en el rendimiento académico y en la comprensión de los contenidos."
            },
            {
                id: 12,
                question: "¿Qué tipo de memoria permite almacenar conocimientos y experiencias de manera duradera a lo",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La memoria a largo plazo es el sistema encargado de almacenar información de manera relativamente permanente, permitiendo conservar conocimientos, experiencias, habilidades y aprendizajes adquiridos a lo largo del tiempo. A diferencia de la memoria sensorial y de la memoria a corto plazo, que retienen información por períodos muy breves, la memoria a largo plazo tiene una gran capacidad de almacenamiento y posibilita la recuperación de información incluso después de largos intervalos. Desde la Psicología escolar, este tipo de memoria resulta esencial para el aprendizaje significativo, ya que permite que los contenidos trabajados en el aula se integren, se consoliden y puedan ser utilizados posteriormente en nuevas situaciones académicas y cotidianas."
            },
            {
                id: 13,
                question: "Desde la psicología del desarrollo, se sostiene que el pensamiento abstracto y la capacidad para",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según la teoría del desarrollo cognitivo de Jean Piaget, la etapa de las operaciones formales representa un avance cualitativo en la forma de pensar, caracterizado por la capacidad de razonar de manera abstracta, formular hipótesis y considerar múltiples variables de un problema. Esta etapa, que se consolida durante la adolescencia, permite al estudiante reflexionar sobre ideas no concretas, analizar situaciones hipotéticas y pensar de forma lógica y sistemática. Estas capacidades son fundamentales para el aprendizaje de contenidos científicos, sociales y filosóficos propios del nivel secundario."
            },
            {
                id: 14,
                question: "En el estudio del aprendizaje, la Psicología distingue diferentes formas de adquisición de conductas.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El reforzamiento es un principio central del conductismo y explica cómo las consecuencias influyen en la probabilidad de que una conducta se repita. Cuando una conducta es seguida de una consecuencia positiva —como una recompensa, reconocimiento o resultado satisfactorio— aumenta la probabilidad de que vuelva a ocurrir. Este principio permite comprender cómo el ambiente moldea el comportamiento humano y resulta especialmente relevante en contextos educativos, donde las respuestas del entorno influyen en la motivación y en la adquisición de hábitos de estudio, siempre que su uso sea reflexivo y no mecánico."
            },
            {
                id: 15,
                question: "Desde la psicología cognitiva, el aprendizaje se considera más eficaz cuando el estudiante logra",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El aprendizaje significativo, propuesto desde la psicología cognitiva, sostiene que aprender implica integrar activamente la nueva información a los conocimientos previos del estudiante. Este proceso genera comprensión, sentido y organización cognitiva, a diferencia de la memorización mecánica, que suele ser superficial y poco duradera. Cuando el aprendizaje es significativo, el conocimiento se retiene con mayor facilidad y puede aplicarse a nuevas situaciones, lo que favorece el pensamiento crítico y la transferencia del aprendizaje, aspectos centrales de la formación secundaria."
            },
            {
                id: 16,
                question: "Según el enfoque psicoanalítico desarrollado por Sigmund Freud, una parte importante de la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Desde el enfoque psicoanalítico desarrollado por Sigmund Freud, el inconsciente constituye una dimensión fundamental de la vida psíquica, en la que se alojan deseos, impulsos, recuerdos y conflictos que no son accesibles a la conciencia, pero que influyen en la conducta. Esta concepción amplió la comprensión del comportamiento humano al señalar que no todas las acciones son racionales o conscientes. El concepto de inconsciente permitió explicar fenómenos como lapsus, sueños y conductas aparentemente inexplicables, aportando una mirada profunda sobre la personalidad."
            },
            {
                id: 17,
                question: "La personalidad se entiende en Psicología como un conjunto relativamente estable de características",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La psicología contemporánea entiende la personalidad como un conjunto relativamente estable de características que influyen en la forma de pensar, sentir y actuar de una persona. Esta perspectiva reconoce que la personalidad no es exclusivamente heredada ni completamente determinada por el ambiente, sino que se construye a partir de la interacción entre factores biológicos, psicológicos y sociales. Este enfoque integrador permite comprender la diversidad de comportamientos humanos y evita explicaciones deterministas, destacando el carácter dinámico del desarrollo personal."
            },
            {
                id: 18,
                question: "Las emociones cumplen un papel central en la vida humana, influyendo en la conducta, el aprendizaje",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las emociones cumplen una función adaptativa esencial, ya que permiten evaluar rápidamente las situaciones del entorno y orientar la conducta en función de su relevancia. Desde la psicología, se reconoce que las emociones influyen en la motivación, la toma de decisiones, el aprendizaje y las relaciones interpersonales. 189 Lejos de bloquear el pensamiento racional, las emociones interactúan con los procesos cognitivos, facilitando o dificultando el aprendizaje según su intensidad y regulación. Comprender esta función resulta clave para explicar el comportamiento humano en contextos educativos y sociales."
            },
            {
                id: 19,
                question: "En la adolescencia, los individuos atraviesan un proceso de búsqueda de identidad, en el que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La construcción de la identidad personal es un proceso central del desarrollo adolescente y se vincula estrechamente con el autoconcepto, entendido como la imagen que la persona tiene de sí misma. Desde la psicología del desarrollo, este proceso implica integrar experiencias pasadas, valores, creencias y proyectos futuros, permitiendo al individuo dotar de coherencia a su historia personal. La identidad influye directamente en la autoestima, la motivación y la toma de decisiones, siendo un eje fundamental del desarrollo humano en la etapa secundaria."
            },
            {
                id: 20,
                question: "Desde una perspectiva psicológica, el error en el aprendizaje no se considera únicamente como una",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Desde la psicología del aprendizaje, el error es concebido como un componente natural y necesario del proceso de construcción del conocimiento. Lejos de interpretarse como un fracaso o una señal de incapacidad, el error proporciona información valiosa sobre las estrategias cognitivas utilizadas por el estudiante y las dificultades que enfrenta. Analizar el error permite ajustar el aprendizaje, promover la reflexión y fortalecer la comprensión, favoreciendo una actitud activa y autónoma frente al conocimiento, aspecto central del enfoque educativo contemporáneo. Disciplina: FILOSOFÍA"
            },
            {
                id: 1,
                question: "La Filosofía se distingue de otros campos del saber por su forma particular de abordar los problemas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La actividad filosófica se define por su carácter reflexivo, crítico y racional frente a los problemas fundamentales que atraviesan la experiencia humana, tales como la verdad, el conocimiento, la realidad, la moral y el sentido de la existencia. A diferencia de las ciencias empíricas, que se orientan a describir y explicar fenómenos mediante métodos experimentales, la filosofía interroga los fundamentos mismos del saber, cuestionando supuestos, conceptos y criterios que suelen darse por evidentes. Esta actitud crítica permite problematizar lo que se cree conocer y abrir espacios de reflexión racional, rasgo distintivo del pensamiento filosófico desde sus orígenes en la Grecia antigua."
            },
            {
                id: 3,
                question: "Desde sus orígenes, la Filosofía se ha preguntado por el “ser”, es decir, por aquello que existe, su",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La ontología es la rama de la filosofía que estudia el ser en cuanto ser, es decir, aquello que existe y sus modos fundamentales de existencia. Desde esta perspectiva, la ontología no se limita a describir objetos particulares, sino que indaga las estructuras más generales de la realidad, preguntándose qué significa existir y cuáles son las categorías básicas del ser. Este problema ha sido central desde la filosofía presocrática y constituye uno de los núcleos de la metafísica, influyendo en múltiples sistemas filosóficos a lo largo de la historia."
            },
            {
                id: 4,
                question: "En la filosofía clásica, Sócrates sostenía que el conocimiento auténtico se alcanza mediante el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La mayéutica es el método filosófico desarrollado por Sócrates, basado en el diálogo y el cuestionamiento constante. A través de preguntas cuidadosamente formuladas, Sócrates buscaba que su interlocutor reconociera las contradicciones de sus creencias y llegara por sí mismo a una comprensión más clara de la verdad. Este método refleja la idea de que el conocimiento no se transmite de manera pasiva, sino que se construye mediante la reflexión crítica y el examen racional, constituyéndose en uno de los pilares del pensamiento filosófico occidental."
            },
            {
                id: 5,
                question: "Para Platón, la realidad verdadera no se identifica con el mundo sensible, cambiante y accesible a los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para Platón, la realidad se divide en dos ámbitos: el mundo sensible, accesible a través de los sentidos y caracterizado por el cambio y la imperfección, y el mundo inteligible, compuesto por las Ideas o Formas, que son eternas, inmutables y universales. El conocimiento verdadero, según Platón, no proviene de la experiencia sensible, sino del ejercicio de la razón, que permite al alma recordar y contemplar estas Ideas. Esta concepción fundamenta su teoría del conocimiento y su crítica a la confianza exclusiva en los sentidos."
            },
            {
                id: 6,
                question: "La Filosofía no solo se interesa por conocer la realidad, sino también por orientar la acción humana.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La ética filosófica se ocupa de reflexionar racionalmente sobre la conducta humana, los valores y los principios que orientan la acción. Su finalidad no es solo describir comportamientos, sino fundamentar criterios que permitan distinguir lo justo de lo injusto, lo bueno de lo malo. A lo largo de la historia, la ética ha propuesto diversas teorías 191 —como la ética de la virtud, el deber o las consecuencias—, todas orientadas a comprender cómo debe vivir el ser humano y qué tipo de acciones contribuyen a una vida buena en sociedad."
            },
            {
                id: 7,
                question: "En la ética de Aristóteles, la vida humana posee un fin último que orienta todas las acciones y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según Aristóteles, el fin último de la vida humana es la eudaimonía, entendida como una vida plena y realizada. Esta felicidad no se identifica con el placer inmediato ni con la posesión de bienes materiales, sino con el ejercicio constante de las virtudes éticas e intelectuales, guiadas por la razón. La ética aristotélica propone una concepción integral del ser humano, en la que la felicidad se alcanza a través del equilibrio, la deliberación racional y la participación activa en la vida comunitaria."
            },
            {
                id: 8,
                question: "En la Filosofía moderna, René Descartes sostuvo que el conocimiento verdadero debe fundarse",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "René Descartes es considerado el principal representante del racionalismo moderno, corriente que afirma que la razón es la fuente principal del conocimiento verdadero. A través de la duda metódica, Descartes cuestionó todas las creencias que podían ser puestas en duda, buscando un fundamento absolutamente seguro para el conocimiento. Este proceso lo condujo al célebre “pienso, luego existo”, que establece a la razón como punto de partida del saber y marca un giro decisivo hacia la centralidad del sujeto en la filosofía moderna."
            },
            {
                id: 9,
                question: "La afirmación según la cual solo puede considerarse verdadero aquello que es verificable mediante",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El positivismo sostiene que solo es válido el conocimiento que puede ser verificado empíricamente mediante la observación y la experimentación. Esta corriente filosófica buscó aplicar el método de las ciencias naturales a todos los ámbitos del saber, rechazando las explicaciones metafísicas por considerarlas carentes de sentido científico. El positivismo influyó de manera significativa en la filosofía de la ciencia y en la concepción moderna del conocimiento, al establecer criterios estrictos de validez basados en hechos observables."
            },
            {
                id: 10,
                question: "A lo largo de la historia de la Filosofía, el escepticismo ha planteado una duda radical frente a las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El escepticismo plantea una duda radical respecto a la posibilidad de alcanzar un conocimiento cierto y definitivo. Esta postura filosófica no se limita a negar el conocimiento, sino que cuestiona los criterios que se utilizan para afirmar que algo es verdadero. A lo largo de la historia de la filosofía, el escepticismo ha cumplido un papel crítico relevante, ya que ha impulsado a otras corrientes a justificar con mayor rigor sus fundamentos epistemológicos, fortaleciendo así la reflexión sobre la verdad, la certeza y el error. 192 Repositorio de"
            },
            {
                id: 11,
                question: "En la Filosofía moderna, Immanuel Kant propuso una nueva forma de comprender el conocimiento",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Kant propuso una síntesis entre racionalismo y empirismo, afirmando que el conocimiento se produce cuando los datos de la experiencia son organizados por estructuras a priori de la razón. Esta postura revolucionó la teoría del conocimiento moderno."
            },
            {
                id: 12,
                question: "Cuando la Filosofía se pregunta “¿qué es lo bueno?”, no busca una definición meramente descriptiva,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pregunta por el bien constituye uno de los problemas centrales de la ética filosófica. Reflexionar sobre “qué es lo bueno” implica analizar los valores, principios y criterios que orientan la conducta humana. A lo largo de la historia, distintas teorías éticas han ofrecido respuestas diversas —desde la virtud, el deber o las consecuencias—, evidenciando que la ética no se limita a normas impuestas, sino que busca una fundamentación racional de la acción moral en la vida individual y social."
            },
            {
                id: 13,
                question: "El existencialismo surge como una corriente filosófica que pone en el centro la experiencia concreta",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El existencialismo es una corriente filosófica que pone en el centro de su reflexión la existencia concreta del ser humano, destacando la libertad, la responsabilidad y la capacidad de elección. Frente a concepciones esencialistas, el existencialismo sostiene que el ser humano no posee una esencia predeterminada, sino que se construye a través de sus decisiones y acciones. Esta perspectiva subraya la dimensión subjetiva de la experiencia humana y plantea interrogantes fundamentales sobre el sentido de la vida y la autenticidad."
            },
            {
                id: 14,
                question: "La Filosofía también reflexiona sobre el arte y la experiencia de lo bello. ¿Cuál es el objeto principal",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La estética filosófica reflexiona sobre la belleza, el arte y la experiencia estética, interrogándose por los criterios que permiten considerar algo como bello y por el significado del arte en la vida humana. Desde la antigüedad hasta la modernidad, la estética ha abordado cuestiones como el gusto, la sensibilidad y la relación entre arte y realidad, reconociendo que la experiencia estética no es meramente subjetiva, sino que posee dimensiones culturales, históricas y simbólicas."
            },
            {
                id: 15,
                question: "La afirmación “el ser humano es un ser racional” ha sido central en la Filosofía clásica y moderna.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La antropología filosófica se ocupa de reflexionar sobre la naturaleza del ser humano, sus capacidades, límites y sentido de la existencia. Definir al ser humano como un ser racional ha sido una de las concepciones más influyentes en la filosofía clásica, ya que destaca la capacidad de pensar, deliberar y actuar de manera 193 consciente. Esta definición no agota la complejidad humana, pero constituye un punto de partida fundamental para comprender la acción moral, el conocimiento y la vida social."
            },
            {
                id: 16,
                question: "No todo problema puede considerarse filosófico. Desde la perspectiva de la Filosofía, ¿cuándo un",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Un problema filosófico se caracteriza por cuestionar los supuestos fundamentales que sostienen nuestras creencias, conocimientos y valores. A diferencia de los problemas técnicos o empíricos, los problemas filosóficos no admiten soluciones definitivas, sino que abren espacios de reflexión crítica y debate racional. Su importancia radica en la capacidad de problematizar lo que se considera evidente y de promover una actitud reflexiva frente a la realidad."
            },
            {
                id: 17,
                question: "En el origen del pensamiento occidental, la Filosofía se diferencia del mito como forma de explicación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La filosofía se diferencia del mito en la forma de explicar la realidad. Mientras el mito recurre a narraciones simbólicas y tradicionales, la filosofía se apoya en la razón, la argumentación y la justificación racional. Este paso del mito al logos marcó el origen de la filosofía occidental y supuso un cambio profundo en la manera de comprender el mundo, privilegiando la reflexión crítica frente a la aceptación acrítica de relatos heredados."
            },
            {
                id: 18,
                question: "El relativismo filosófico cuestiona la existencia de verdades universales y absolutas. Según esta",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El relativismo filosófico sostiene que la verdad, el conocimiento o los valores dependen del contexto cultural, histórico o individual, y que no existen criterios universales absolutos. Esta postura ha generado importantes debates en epistemología y ética, ya que cuestiona la posibilidad de verdades universales. El relativismo invita a reconocer la diversidad de perspectivas, aunque también plantea desafíos respecto a la fundamentación del conocimiento y los valores comunes."
            },
            {
                id: 19,
                question: "La Filosofía moderna se desarrolla en un contexto de profundos cambios culturales e intelectuales.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La filosofía moderna se caracteriza por una actitud crítica frente a la tradición y la autoridad, promoviendo el uso autónomo de la razón como fundamento del conocimiento. A partir del Renacimiento y la Ilustración, los filósofos comenzaron a cuestionar las verdades heredadas de la religión y la escolástica medieval, impulsando una búsqueda racional de fundamentos seguros para el saber. Este giro permitió el surgimiento de nuevas corrientes filosóficas, como el racionalismo y el empirismo, y sentó las bases del pensamiento científico moderno, destacando la capacidad del sujeto para pensar por sí mismo."
            },
            {
                id: 20,
                question: "Uno de los problemas clásicos de la Filosofía es el del libre albedrío. ¿Qué cuestión fundamental",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El problema del libre albedrío aborda la cuestión de si el ser humano es realmente libre para elegir sus acciones o si estas están determinadas por causas externas, biológicas o sociales. Este debate atraviesa distintas áreas de la filosofía, como la ética, la antropología y la metafísica, ya que de la libertad depende la responsabilidad moral de las acciones humanas. A lo largo de la historia, filósofos han sostenido posiciones deterministas, libertarias o compatibilistas, evidenciando la complejidad de este problema y su relevancia para comprender la condición humana. . Disciplina: HISTORIA"
            },
            {
                id: 1,
                question: "Durante el siglo XX, Bolivia vivió profundos cambios políticos, sociales y económicos. Uno de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La Revolución Nacional de 1952 constituyó un proceso de transformación estructural del Estado boliviano, caracterizado por reformas profundas que modificaron las relaciones de poder y ampliaron la participación social y política de sectores históricamente excluidos. Entre sus medidas más significativas se encuentran la nacionalización de las minas, la reforma agraria y la instauración del voto universal, las cuales redefinieron la organización económica, social y política del país."
            },
            {
                id: 2,
                question: "La construcción de la ciudadanía en Bolivia ha sido un proceso histórico marcado por avances y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La ciudadanía no se reduce a la pertenencia legal a un Estado, sino que implica el ejercicio activo y consciente de derechos y deberes en la vida pública. En el contexto boliviano, la construcción de la ciudadanía ha estado marcada por luchas históricas orientadas a ampliar la participación política de sectores anteriormente excluidos. El ejercicio ciudadano supone involucrarse en procesos democráticos, deliberativos y comunitarios, contribuyendo a la toma de decisiones colectivas. Asimismo, la ciudadanía fortalece la responsabilidad social y el compromiso con el bien común. Por ello, se entiende como una práctica activa y no solo como una condición jurídica."
            },
            {
                id: 3,
                question: "Las sociedades prehispánicas que se desarrollaron en el altiplano andino alcanzaron niveles",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La evidencia arqueológica y arquitectónica muestra que Tiwanaku articuló autoridad política, control territorial y prácticas religiosas en un sistema integrado, lo que favoreció la cohesión social, la redistribución de recursos y la expansión de su influencia más allá de su núcleo original. 195"
            },
            {
                id: 5,
                question: "A lo largo de la historia boliviana, el reconocimiento de los derechos sociales ha estado vinculado a",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los derechos sociales están orientados a reducir desigualdades estructurales y asegurar condiciones básicas de vida digna, como educación, salud y trabajo. Su finalidad es promover igualdad de oportunidades y justicia social, especialmente para sectores históricamente excluidos. Estos derechos no reemplazan a los derechos civiles y políticos, sino que los complementan, fortaleciendo la cohesión social. En contextos de alta desigualdad, los derechos sociales adquieren un papel clave en la construcción de ciudadanía plena. Por ello, su garantía constituye una responsabilidad fundamental del Estado."
            },
            {
                id: 6,
                question: "Los acontecimientos ocurridos en 1809 en la ciudad de Chuquisaca son considerados hitos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Estos movimientos, surgidos en distintos momentos y espacios del período colonial tardío, incorporaron de manera progresiva la noción de autogobierno como alternativa al orden impuesto por la metrópoli, cuestionando la legitimidad del poder colonial y sus mecanismos de dominación política, económica y social. Al promover formas incipientes de organización propia, así como demandas de mayor participación en las decisiones públicas, contribuyeron a erosionar la autoridad de las instituciones coloniales y a debilitar el principio de obediencia absoluta a la Corona. En este sentido, no solo expresaron resistencias coyunturales, sino que configuraron un precedente político e ideológico de largo alcance, al difundir ideas vinculadas a la soberanía, la representación y la autodeterminación, que posteriormente serían retomadas y reformuladas en los procesos independentistas del siglo XIX."
            },
            {
                id: 8,
                question: "Tras el proceso independentista, la creación de la República implicó no solo la ruptura con",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La fundación de la República estuvo liderada por élites criollas que asumieron el control del nuevo Estado. Aunque se proclamó la igualdad jurídica, en la práctica se mantuvieron estructuras sociales excluyentes heredadas de la colonia. Los pueblos indígenas quedaron marginados de la participación política y del acceso al poder. Este proceso evidencia continuidades más que rupturas en las relaciones sociales. Por ello, la República se configuró inicialmente como un Estado oligárquico."
            },
            {
                id: 9,
                question: "La independencia de Bolivia fue el resultado de un proceso político y militar complejo, influido por",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La conducción militar y política que permitió la derrota definitiva del poder español en el Alto Perú se sustentó en un liderazgo capaz de articular, de manera coherente, los ideales independentistas con una estrategia militar eficaz y una visión política orientada a la construcción de un nuevo orden estatal. Esta conducción no se limitó al enfrentamiento armado, sino que integró la movilización de fuerzas locales, la coordinación con proyectos emancipadores regionales y la legitimación del proceso ante diversos sectores sociales. Al mismo tiempo, sentó las bases institucionales del nuevo Estado, promoviendo principios de soberanía, organización política y ruptura con el sistema colonial. En este marco, la victoria militar adquirió un significado político más amplio, al consolidar la independencia no solo como un hecho bélico, sino como un proceso de fundación estatal y redefinición del poder en el territorio."
            },
            {
                id: 10,
                question: "Durante el período republicano, la economía nacional estuvo fuertemente influida por la explotación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La economía republicana se basó principalmente en la exportación de materias primas, como minerales, hacia el mercado internacional. Este modelo generó dependencia económica y vulnerabilidad frente a las fluctuaciones externas. La riqueza producida se concentró en pocos sectores, profundizando desigualdades sociales. El Estado cumplió un rol limitado en la redistribución. Por ello, la dependencia exportadora marcó el desarrollo republicano. 197"
            },
            {
                id: 12,
                question: "La etapa republicana estuvo marcada por conflictos internos, guerras civiles y disputas regionales.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los conflictos internos de la etapa republicana evidencian la dificultad para construir un proyecto nacional integrador. Las disputas regionales, políticas y económicas fragmentaron el poder estatal. La falta de consenso sobre el modelo de Estado generó inestabilidad permanente. Estos conflictos debilitaron la institucionalidad republicana. Así, la construcción del Estado fue un proceso conflictivo y no lineal."
            },
            {
                id: 13,
                question: "Durante la época moderna, Europa inició un proceso de expansión hacia otros continentes que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La expansión europea estuvo motivada por intereses económicos y políticos, como el control de rutas comerciales y el acceso a recursos estratégicos. Las monarquías buscaban aumentar su poder y riqueza en un contexto de competencia internacional. Este proceso dio lugar a la colonización y a profundas desigualdades entre regiones. Aunque hubo intercambios culturales, no fueron equilibrados. Por ello, la expansión respondió principalmente a intereses de poder y riqueza."
            },
            {
                id: 14,
                question: "Durante la época moderna se consolidaron nuevas prácticas económicas que transformaron las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La economía de la época moderna se caracterizó por el crecimiento del comercio internacional y la acumulación de capital. El desarrollo de mercados, bancos y sistemas financieros impulsó nuevas dinámicas económicas. Estas transformaciones favorecieron a ciertos grupos sociales y regiones. A su vez, profundizaron desigualdades. Por ello, el comercio a gran escala fue un elemento central del período. 198 Repositorio de"
            },
            {
                id: 15,
                question: "El surgimiento del Estado moderno implicó una nueva forma de ejercer el poder político y organizar",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El Estado moderno se consolidó mediante la centralización del poder en manos del monarca o del gobierno central. Se desarrollaron burocracias, sistemas fiscales y ejércitos permanentes. Estas estructuras permitieron mayor control territorial y político. A diferencia del feudalismo, el poder dejó de estar fragmentado. Por ello, la centralización fue un rasgo definitorio del Estado moderno."
            },
            {
                id: 16,
                question: "La Edad Contemporánea se inicia con transformaciones profundas que modificaron las estructuras",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La Revolución Francesa simboliza el inicio de la Edad Contemporánea porque cuestionó el orden político tradicional basado en privilegios. Introdujo principios como igualdad jurídica, soberanía popular y derechos ciudadanos. Estos ideales transformaron la concepción del Estado y la relación entre gobernantes y gobernados. Su impacto trascendió Francia y se proyectó a nivel mundial. Por ello, este proceso marca una ruptura histórica con el Antiguo Régimen."
            },
            {
                id: 17,
                question: "La Revolución Industrial transformó profundamente las formas de producción y las relaciones",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La Revolución Industrial dio origen a una nueva clase social: la clase obrera industrial. La concentración de trabajadores en fábricas modificó las relaciones laborales y las condiciones de vida. Este proceso generó conflictos sociales y demandas por derechos laborales. A partir de ello surgieron movimientos obreros y sindicatos. Por lo tanto, el surgimiento del proletariado fue una consecuencia clave del período."
            },
            {
                id: 18,
                question: "Durante el proceso independentista en el territorio del Alto Perú, las batallas no constituyeron hechos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las batallas independentistas representaron la expresión armada de un proyecto político que buscaba romper el dominio colonial español. No fueron solo enfrentamientos militares, sino acciones vinculadas a ideas de libertad, soberanía y autogobierno. Aunque no eliminaron de inmediato las estructuras coloniales, permitieron debilitar el poder realista. Estas acciones se articularon con procesos políticos y sociales más amplios. Por ello, su importancia radica en su función emancipadora."
            },
            {
                id: 19,
                question: "Tras un prolongado periodo de gobiernos militares y de facto que interrumpieron de manera recurrente",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El retorno a la democracia en 1982 representó, fundamentalmente, la recuperación del orden constitucional y la restitución de la institucionalidad democrática tras casi dos décadas de interrupciones autoritarias. Este proceso permitió restablecer el funcionamiento regular de los órganos del Estado, la vigencia de la Constitución, el respeto a los derechos y libertades fundamentales, así como la participación política a través de elecciones libres. Sin embargo, el retorno democrático no implicó la eliminación automática de los conflictos sociales ni la superación inmediata de la crisis económica heredada del periodo militar. Por el contrario, la democracia se reinstauró en un contexto de fuertes tensiones sociales, inflación y debilidad institucional, lo que evidencia que su principal significado histórico radicó en la reconstrucción del marco político y jurídico del Estado, condición indispensable para encarar, posteriormente, los desafíos económicos, sociales y políticos del país."
            },
            {
                id: 20,
                question: "En el marco de las transformaciones educativas impulsadas durante la década de 1990, el Estado",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La reforma educativa de 1994 incorporó como eje central el reconocimiento de la diversidad cultural y lingüística del país, estableciendo la educación intracultural, intercultural y bilingüe como fundamento del sistema educativo. Este enfoque buscó superar modelos homogenizantes que habían invisibilizado a las naciones y pueblos indígena originarios, promoviendo el uso y la valoración de las lenguas originarias junto al castellano, así como el respeto a las identidades culturales. La reforma planteó una educación más pertinente al contexto social y cultural de los estudiantes, orientada a fortalecer la inclusión, la equidad y el diálogo entre culturas. En este sentido, el eje intercultural no solo implicó un cambio curricular, sino una redefinición del sentido de la educación como espacio de reconocimiento de la pluralidad y de construcción de cohesión social en el Estado boliviano. Disciplina: BIOLOGÍA"
            },
            {
                id: 1,
                question: "En el estudio de la Biología, la célula ocupa un lugar central en la comprensión de la vida, ya",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La célula es considerada la unidad básica de organización de los seres vivos porque constituye la estructura más pequeña que posee la capacidad de llevar a cabo, de forma integrada y autónoma, todas las funciones vitales necesarias para la vida. Estas funciones incluyen el metabolismo, la obtención y transformación de energía, la respuesta a estímulos del entorno, el crecimiento y la reproducción. De acuerdo con la teoría celular, todos los organismos vivos están formados por una o más células, y las funciones del organismo dependen del funcionamiento coordinado de estas unidades. En consecuencia, la célula representa el nivel mínimo en el que se manifiesta la vida, y su estudio permite comprender los procesos biológicos fundamentales que sostienen la organización, diversidad y continuidad de los seres vivos. 200 Repositorio de"
            },
            {
                id: 2,
                question: "La diferencia fundamental entre una célula eucariota y una procariota radica en:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La diferencia fundamental entre las células eucariotas y procariotas se encuentra en la organización del material genético. Las células eucariotas poseen un núcleo verdadero, delimitado por una membrana nuclear, que alberga el ADN y permite una separación funcional entre los procesos de transcripción y traducción. Además, esta compartimentación se extiende a otros orgánulos membranosos que incrementan la complejidad celular. En contraste, las células procariotas carecen de un núcleo definido; su ADN se encuentra libre en el citoplasma, concentrado en una región denominada nucleoide. Esta diferencia estructural es clave para comprender los distintos niveles de organización, eficiencia metabólica y evolución de los organismos, y constituye un criterio central en la clasificación biológica de los seres vivos."
            },
            {
                id: 3,
                question: "En la célula, los distintos orgánulos cumplen funciones específicas que permiten su funcionamiento",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La mitocondria es el orgánulo responsable de llevar a cabo la respiración celular, un conjunto de reacciones químicas mediante las cuales la célula transforma los nutrientes en energía utilizable en forma de ATP (adenosín trifosfato). Este proceso implica la oxidación de moléculas orgánicas y la liberación de energía que se almacena temporalmente en los enlaces del ATP. La energía producida es esencial para el desarrollo de todas las actividades celulares, como la síntesis de sustancias, el transporte activo, el movimiento celular y la regulación metabólica. Por esta razón, la mitocondria es considerada la “central energética” de la célula, y su adecuado funcionamiento resulta indispensable para la supervivencia y el correcto desempeño de los organismos vivos."
            },
            {
                id: 4,
                question: "En los seres vivos, existen moléculas fundamentales que permiten conservar y transmitir las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El ADN es una molécula fundamental porque contiene la información genética necesaria para dirigir el desarrollo, funcionamiento y reproducción de los seres vivos. En su estructura se encuentran codificadas las instrucciones que permiten la síntesis de proteínas, las cuales regulan la mayoría de los procesos celulares y fisiológicos. Además, el ADN garantiza la transmisión de la información hereditaria durante la división celular y la reproducción, asegurando la continuidad de las características biológicas de una generación a la siguiente. Por estas razones, el ADN constituye la base molecular de la genética y es indispensable para la organización, diversidad y permanencia de la vida."
            },
            {
                id: 5,
                question: "En el estudio de la genética, se identifican unidades específicas responsables de la transmisión de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los genes son segmentos específicos de ADN que contienen la información necesaria para la síntesis de proteínas o para la regulación de distintos procesos biológicos. Esta información se expresa a través de la transcripción y traducción genética, permitiendo que las células produzcan moléculas esenciales para su estructura y funcionamiento. Los genes constituyen la unidad básica de la herencia, ya que son responsables de la transmisión de características físicas, fisiológicas y, en algunos casos, conductuales de una generación a otra. 201 En conjunto, la interacción de los genes determina gran parte de las características estructurales y funcionales de los organismos, así como su variabilidad y capacidad de adaptación."
            },
            {
                id: 6,
                question: "En los organismos con reproducción sexual, existen distintos tipos de división celular que cumplen",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La meiosis es un proceso de división celular especializado que tiene como finalidad la formación de gametos —óvulos y espermatozoides— con la mitad del número de cromosomas característico de la especie. Esta reducción cromosómica es fundamental para que, tras la fecundación, se restablezca el número cromosómico original en el nuevo organismo, garantizando la estabilidad genética de la especie a lo largo de las generaciones. Además, la meiosis incluye mecanismos como la recombinación genética y la segregación independiente de los cromosomas, que favorecen la variabilidad genética, un factor clave para la adaptación y la evolución de las poblaciones. En contraste, la mitosis cumple funciones de crecimiento, reparación y mantenimiento de los tejidos, sin alterar el número de cromosomas."
            },
            {
                id: 7,
                question: "En los seres vivos existen distintos tipos de reproducción, cada uno con características y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La reproducción sexual se caracteriza por la unión de gametos, cada uno con la mitad del material genético, lo que da lugar a una descendencia genéticamente distinta a sus progenitores. Este proceso genera variabilidad genética como resultado de la recombinación y la mezcla de genes provenientes de dos individuos, lo que incrementa la diversidad dentro de las poblaciones. Dicha variabilidad constituye una ventaja evolutiva, ya que permite a los organismos adaptarse mejor a los cambios del ambiente, enfrentar enfermedades y responder a presiones selectivas. Por estas razones, la reproducción sexual desempeña un papel central en la evolución y la continuidad de muchas especies."
            },
            {
                id: 8,
                question: "La teoría de la evolución constituye uno de los pilares de la Biología moderna, al ofrecer una",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La selección natural es el mecanismo central de la teoría evolutiva propuesta por Darwin y explica cómo se origina la diversidad de los seres vivos a partir de la variación existente dentro de las poblaciones. Según este planteamiento, los organismos que presentan características favorables para su entorno tienen mayores probabilidades de sobrevivir y reproducirse, transmitiendo dichas características a su descendencia. Con el paso de las generaciones, estos rasgos se vuelven más frecuentes, lo que conduce a procesos de adaptación y, a largo plazo, a la aparición de nuevas especies. De este modo, la selección natural permite comprender la diversidad biológica como el resultado de un proceso gradual, continuo y no dirigido, basado en la interacción entre los organismos y su ambiente."
            },
            {
                id: 10,
                question: "En el estudio de los ecosistemas, la ecología distingue entre componentes vivos y no vivos que, en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los factores abióticos son los componentes no vivos del ecosistema y comprenden las condiciones físicas y químicas del ambiente que influyen directamente en la supervivencia, distribución y desarrollo de los organismos. Desde la ecología, estos factores incluyen elementos como la luz solar, que regula procesos fundamentales como la fotosíntesis; el agua, indispensable para las funciones vitales; la temperatura, que condiciona el metabolismo y la actividad biológica; así como el suelo, el aire y los nutrientes minerales. Aunque no poseen vida, los factores abióticos determinan las características del ecosistema y establecen los límites dentro de los cuales las especies pueden habitar, reproduciéndose o adaptándose, lo que evidencia su papel esencial en la organización y funcionamiento de los sistemas naturales."
            },
            {
                id: 11,
                question: "En los ecosistemas, los organismos se organizan según el papel que cumplen en el flujo de energía",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los productores son organismos autótrofos, como las plantas, algas y algunas bacterias, que tienen la capacidad de fabricar su propio alimento mediante procesos como la fotosíntesis o la quimiosíntesis. A través de estos procesos, transforman la energía luminosa o química en energía química almacenada en moléculas orgánicas. Esta energía constituye la base de las cadenas y redes alimentarias, ya que es transferida posteriormente a los consumidores y descomponedores. Por ello, los productores desempeñan un rol fundamental en el funcionamiento de los ecosistemas, al sostener el flujo de energía y permitir la existencia de los demás niveles tróficos."
            },
            {
                id: 12,
                question: "En el cuerpo humano, los distintos sistemas cumplen funciones específicas que permiten el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El sistema respiratorio tiene como función principal el intercambio de gases, específicamente la incorporación de oxígeno al organismo y la eliminación de dióxido de carbono producido como desecho metabólico. El oxígeno inhalado es transportado hacia las células, donde participa en la respiración celular, proceso mediante el cual se obtiene la energía necesaria para realizar las funciones vitales. A su vez, la expulsión del dióxido de carbono permite mantener el equilibrio químico del organismo. Este intercambio gaseoso es esencial para la supervivencia, 203 ya que sin un adecuado suministro de oxígeno y una correcta eliminación de desechos gaseosos, las células no podrían sostener sus procesos metabólicos ni el organismo mantener su funcionamiento normal."
            },
            {
                id: 13,
                question: "En el organismo humano, la sangre cumple un papel fundamental para el funcionamiento coordinado",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sangre cumple una función esencial porque se encarga del transporte de sustancias vitales a lo largo del organismo. A través del sistema circulatorio, la sangre distribuye oxígeno desde los pulmones hacia los tejidos, nutrientes provenientes del sistema digestivo, hormonas producidas por las glándulas endocrinas y otras sustancias necesarias para el funcionamiento celular. Asimismo, recoge los desechos metabólicos, como el dióxido de carbono y otros productos de eliminación, para su posterior expulsión. Este transporte constante permite mantener la homeostasis, es decir, el equilibrio interno del organismo, condición indispensable para la supervivencia y el correcto funcionamiento de los sistemas corporales."
            },
            {
                id: 14,
                question: "En la clasificación biológica tradicional de los seres vivos, los organismos se agrupan en distintos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las bacterias pertenecen al reino Monera, el cual agrupa a los organismos procariotas, caracterizados por carecer de un núcleo verdadero y de orgánulos membranosos. En estos organismos, el material genético se encuentra libre en el citoplasma, en una región denominada nucleoide, y su estructura celular es relativamente simple en comparación con las células eucariotas. Esta clasificación se basa en criterios fundamentales de organización celular y permitió distinguir a los seres vivos más simples desde el punto de vista evolutivo. Aunque en clasificaciones más recientes se han propuesto otros sistemas, el reino Monera continúa siendo una referencia importante en el estudio de la biología a nivel de educación secundaria para comprender la diversidad y evolución de los organismos unicelulares."
            },
            {
                id: 15,
                question: "En los organismos pluricelulares, diversos sistemas actúan de manera coordinada para regular los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La homeostasis hace referencia a la regulación constante del medio interno del organismo, permitiendo que variables como la temperatura, el pH, la presión osmótica y la concentración de sustancias se mantengan dentro de rangos compatibles con la vida. Este equilibrio no implica inmovilidad, sino un ajuste dinámico frente a estímulos internos y externos, logrado mediante mecanismos de control y retroalimentación. Gracias a la homeostasis, las células pueden funcionar de manera adecuada y los procesos metabólicos se desarrollan con normalidad, lo que resulta esencial para la supervivencia del organismo en entornos cambiantes."
            },
            {
                id: 16,
                question: "En los organismos con reproducción sexual, el origen de un nuevo individuo es el resultado de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La fecundación es el proceso biológico mediante el cual se produce la unión de los gametos masculino y femenino, cada uno portador de la mitad del material genético de la especie. Como resultado de esta fusión se 204 Repositorio de"
            },
            {
                id: 17,
                question: "En el estudio de los ecosistemas y de la vida en el planeta, se emplea el concepto de biodiversidad",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La biodiversidad se refiere a la variedad de seres vivos que existen en la Tierra y comprende distintos niveles de organización biológica, como la diversidad genética, la diversidad de especies y la diversidad de ecosistemas. Este concepto no se limita a la cantidad de organismos, sino que abarca la riqueza de formas de vida, sus diferencias y las relaciones que establecen entre sí y con el ambiente. La biodiversidad es fundamental para el equilibrio ecológico y la estabilidad de los ecosistemas, ya que favorece la resiliencia frente a cambios ambientales, contribuye al funcionamiento de los sistemas naturales y sostiene procesos esenciales para la vida, como la producción de alimentos y la regulación del clima."
            },
            {
                id: 18,
                question: "En genética, los cambios en el material hereditario pueden tener distintas consecuencias para",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las mutaciones son cambios en la secuencia del ADN que pueden producirse de forma espontánea o como resultado de factores ambientales. Aunque algunas mutaciones pueden ser neutras o incluso desfavorables, su importancia biológica radica en que generan variabilidad genética dentro de las poblaciones. Esta variabilidad constituye la base sobre la cual actúan los procesos evolutivos, como la selección natural, permitiendo que los organismos se adapten a cambios en el ambiente a lo largo del tiempo. Sin mutaciones, no existirían nuevas características heredables, lo que limitaría la capacidad de las especies para evolucionar y responder a las condiciones cambiantes del entorno."
            },
            {
                id: 19,
                question: "En los ecosistemas, los organismos se relacionan entre sí a través de vínculos alimentarios que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Una cadena alimentaria representa el flujo de energía que se establece entre los organismos de un ecosistema a través de relaciones de alimentación. Este flujo se inicia en los productores, que captan energía del ambiente y la transforman en materia orgánica, continúa en los consumidores, que obtienen energía al alimentarse de otros organismos, y culmina en los descomponedores, que reciclan la materia orgánica. La energía fluye en una sola dirección y se va reduciendo en cada nivel trófico, lo que explica la estructura y el equilibrio de los ecosistemas. Comprender las cadenas alimentarias permite analizar las interdependencias entre los seres vivos y el impacto que puede generar la alteración de alguno de sus componentes."
            },
            {
                id: 20,
                question: "La clasificación de los seres vivos requiere criterios precisos que permitan distinguir grupos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El concepto de especie se define principalmente a partir del criterio reproductivo, según el cual una especie está constituida por organismos capaces de reproducirse entre sí y producir descendencia fértil en condiciones naturales. Este criterio permite diferenciar a las especies de otros niveles de clasificación basados únicamente en la semejanza física o en la coexistencia espacial. La posibilidad de intercambiar material genético asegura la continuidad de las características propias del grupo y establece límites claros frente a otras especies con las que no es posible la reproducción fértil. Por esta razón, el concepto de especie resulta fundamental para el estudio de la biodiversidad, la evolución y la organización de los seres vivos. Disciplina: TÉCNICA TECNOLÓGICA"
            },
            {
                id: 1,
                question: "Los sistemas informáticos se componen de distintos elementos que cumplen funciones específicas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El hardware comprende todos los componentes físicos y tangibles que integran un sistema informático, tales como el teclado, el monitor, la unidad central de procesamiento (CPU), la memoria y los dispositivos de almacenamiento. Estos elementos constituyen la base material del sistema computacional, ya que permiten la entrada, el procesamiento, el almacenamiento y la salida de información. Sin el hardware, el software no podría ejecutarse ni interactuar con el usuario, lo que evidencia la relación complementaria entre ambos componentes para el funcionamiento adecuado de los sistemas de computación."
            },
            {
                id: 2,
                question: "En un sistema informático, existen elementos intangibles que permiten el control y funcionamiento",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El software está constituido por el conjunto de programas, aplicaciones y sistemas operativos que proporcionan las instrucciones necesarias para que el hardware funcione correctamente. A través del software, el usuario puede interactuar con la computadora y realizar diversas tareas, como escribir documentos, procesar datos o navegar por internet. Sin la presencia del software, el hardware carecería de indicaciones para ejecutar operaciones, lo que impide que el sistema informático cumpla funciones útiles. Por esta razón, el software es un componente esencial que complementa y da sentido al uso de los equipos de computación."
            },
            {
                id: 3,
                question: "¿Cuál es la función principal del sistema operativo?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El sistema operativo es el programa fundamental que permite el funcionamiento integral de una computadora, ya que actúa como intermediario entre el usuario y el hardware. Su función principal consiste en administrar los recursos del sistema, como la memoria, el procesador, los dispositivos de entrada y salida, y el almacenamiento de datos. Asimismo, facilita la interacción del usuario con el equipo a través de interfaces gráficas o de comandos, y permite la ejecución de aplicaciones de manera ordenada y segura. Gracias al sistema operativo, los distintos componentes del sistema trabajan de forma coordinada, garantizando la estabilidad, eficiencia y correcto desempeño del equipo informático. 206 Repositorio de"
            },
            {
                id: 4,
                question: "En el ámbito de la computación, el software puede clasificarse según la función que cumple dentro",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El software de aplicación está conformado por programas diseñados para realizar tareas específicas solicitadas por el usuario, como redactar documentos, elaborar presentaciones, procesar datos numéricos o gestionar información. A diferencia del sistema operativo o del software de base, que controlan y administran los recursos del equipo, el software de aplicación se orienta directamente al uso cotidiano de la computadora. Los procesadores de texto constituyen un ejemplo representativo de este tipo de software, ya que permiten crear, editar y dar formato a documentos escritos, siendo herramientas fundamentales en el ámbito educativo, académico y laboral."
            },
            {
                id: 5,
                question: "Un archivo digital se define como:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Un archivo digital es una estructura organizada de datos que se almacena en un dispositivo, identificada por un nombre y una extensión que indica su tipo. Permite guardar y recuperar información de manera ordenada."
            },
            {
                id: 6,
                question: "La extensión de un archivo tiene como función principal:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La extensión de un archivo señala el tipo de formato y permite al sistema operativo asociarlo con el programa adecuado para su apertura y edición, facilitando la gestión de archivos."
            },
            {
                id: 7,
                question: "Un procesador de texto se utiliza principalmente para:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los procesadores de texto permiten redactar, modificar y dar formato a documentos escritos, incorporando texto, imágenes y otros elementos, siendo herramientas básicas en el ámbito académico y laboral."
            },
            {
                id: 8,
                question: "Las hojas de cálculo se caracterizan por:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las hojas de cálculo permiten organizar datos en tablas, realizar operaciones matemática automáticas y analizar información mediante fórmulas y gráficos, siendo fundamentales para el tratamiento de datos."
            },
            {
                id: 9,
                question: "Un software de presentación se utiliza para:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El software de presentación permite comunicar información de forma visual y estructurada, combinando texto, imágenes y otros recursos multimedia para apoyar exposiciones orales. 207"
            },
            {
                id: 11,
                question: "La memoria RAM se caracteriza por:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La memoria RAM almacena de manera temporal los datos y programas que el sistema está utilizando en ese momento, permitiendo un acceso rápido y eficiente durante la ejecución de tareas."
            },
            {
                id: 12,
                question: "Un dispositivo de almacenamiento externo permite:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los dispositivos de almacenamiento externo, como memorias USB o discos externos, permiten guardar, respaldar y trasladar información, facilitando la portabilidad de los datos."
            },
            {
                id: 13,
                question: "El uso responsable de las TIC implica:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El uso responsable de las TIC implica aplicar criterios de seguridad, ética y respeto, protegiendo la información personal y utilizando la tecnología de forma consciente y adecuada."
            },
            {
                id: 14,
                question: "La nube informática se utiliza principalmente para:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La computación en la nube permite almacenar datos y utilizar servicios a través de internet, facilitando el acceso a la información desde distintos dispositivos."
            },
            {
                id: 15,
                question: "Un navegador web es un programa que permite:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los navegadores web permiten interpretar y mostrar contenidos de internet, facilitando la navegación y el acceso a información en línea."
            },
            {
                id: 16,
                question: "La dirección URL se utiliza para:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La URL es una dirección que localiza un recurso específico en la web, permitiendo acceder a páginas, archivos o servicios en internet."
            },
            {
                id: 17,
                question: "Un virus informático se caracteriza por:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los virus informáticos son programas maliciosos que pueden alterar el funcionamiento del sistema, dañar archivos o comprometer la seguridad de la información. 208 Repositorio de"
            },
            {
                id: 18,
                question: "El antivirus cumple la función de:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El antivirus es una herramienta de seguridad que identifica, bloquea y elimina amenazas informáticas, protegiendo el sistema y los datos del usuario."
            },
            {
                id: 19,
                question: "El correo electrónico se utiliza principalmente para:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El correo electrónico es un medio de comunicación digital que permite enviar y recibir mensajes y archivos de forma rápida y segura."
            },
            {
                id: 20,
                question: "Una contraseña segura se caracteriza por:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las contraseñas seguras utilizan combinaciones variadas de caracteres, lo que dificulta accesos no autorizados y protege la información personal. Disciplina: LENGUAJE"
            },
            {
                id: 1,
                question: "En el estudio del lenguaje, se reconoce que toda comunicación humana implica la transmisión de un",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La función referencial del lenguaje se orienta a informar, describir o explicar hechos de la realidad de manera objetiva. Su propósito principal es transmitir información clara y verificable, por lo que predomina en textos informativos, científicos y expositivos. Desde la lingüística, esta función se reconoce cuando el énfasis recae en el mensaje y su relación con el contexto."
            },
            {
                id: 2,
                question: "En el análisis gramatical de la oración, uno de los elementos fundamentales es el sujeto, ya que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Desde la gramática, el sujeto se define como el sintagma nominal del que se predica la acción, el estado o la cualidad expresada por el verbo, constituyendo uno de los dos componentes esenciales de la estructura oracional junto con el predicado. El sujeto mantiene una relación de concordancia gramatical con el verbo en número y persona, lo que permite su identificación incluso cuando no aparece de forma explícita en la oración, como ocurre en los casos de sujeto tácito u omitido. Reconocer el sujeto resulta fundamental para el análisis sintáctico, ya que permite comprender la organización interna de la oración, diferenciar funciones gramaticales y evitar confusiones con otros elementos como los complementos verbales o los circunstanciales. Asimismo, su correcta identificación contribuye a una mejor comprensión del significado global del enunciado y al uso adecuado de la lengua en contextos orales y escritos. 209"
            },
            {
                id: 4,
                question: "En el sistema de acentuación del español, existen ciertos casos en los que la tilde no cumple la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La tilde diacrítica cumple una función distintiva, ya que permite diferenciar palabras que presentan la misma forma gráfica, pero que cumplen funciones gramaticales diferentes o poseen significados distintos dentro del enunciado. A diferencia de la tilde prosódica, su uso no se rige por las reglas generales de acentuación relacionadas con la sílaba tónica, sino por criterios semánticos y gramaticales. Este recurso evita ambigüedades en la lectura y comprensión del texto, facilitando la correcta interpretación del sentido de la oración. Ejemplos frecuentes de este uso se encuentran en pares de palabras como pronombres y determinantes, o formas verbales y adverbios, cuya distinción resulta fundamental para la precisión y claridad del discurso escrito."
            },
            {
                id: 5,
                question: "En el análisis de los textos narrativos, la teoría literaria distingue claramente entre el autor real y las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El narrador es una instancia narrativa construida dentro del texto, encargada de relatar los acontecimientos y organizar la historia desde una determinada perspectiva. No debe confundirse con el autor empírico, ya que el narrador forma parte de la estructura interna de la obra y cumple una función específicamente literaria. Desde la teoría narrativa, el narrador puede adoptar distintas posiciones —en primera, segunda o tercera persona— y distintos grados de conocimiento sobre los hechos y los personajes, lo que incide directamente en el tono, la profundidad psicológica y la interpretación del relato. La elección del tipo de narrador condiciona la forma en que el lector accede a la información, determina el nivel de subjetividad del discurso y contribuye a la construcción del sentido global de la obra literaria."
            },
            {
                id: 6,
                question: "En los textos literarios, especialmente poéticos, el autor recurre con frecuencia a recursos expresivos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Este recurso expresivo se caracteriza por la repetición deliberada de sonidos, generalmente consonánticos, con el propósito de intensificar la sonoridad del texto y generar efectos rítmicos, auditivos o sensoriales. Su uso es especialmente frecuente en la poesía, donde la dimensión sonora del lenguaje adquiere un valor estético central, aunque también puede aparecer en la prosa literaria y en textos de intención artística. La reiteración de 210 Repositorio de"
            },
            {
                id: 7,
                question: "En el estudio de la sintaxis del español, las oraciones compuestas se caracterizan por estar formadas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las proposiciones subordinadas se distinguen por su dependencia sintáctica respecto de una proposición principal, ya que no poseen autonomía estructural ni semántica plena dentro del enunciado. Su función consiste en integrarse a la proposición principal desempeñando un papel específico, ya sea como sustantivas, adjetivas o adverbiales, lo que permite ampliar, precisar o complementar el significado de la oración. Esta relación jerárquica implica que la proposición subordinada está introducida generalmente por nexos subordinantes y cumple una función equivalente a la de un elemento gramatical dentro de la estructura oracional. El reconocimiento de esta dependencia resulta esencial para el análisis sintáctico avanzado, pues permite comprender la organización interna de las oraciones compuestas y la relación funcional entre sus distintos componentes."
            },
            {
                id: 8,
                question: "En el lenguaje literario, los autores emplean diversos recursos expresivos para ampliar el significado",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La metáfora es un recurso literario que se basa en el traslado de significado entre dos realidades que comparten algún rasgo de semejanza, sin que dicha relación sea expresada de forma directa mediante nexos comparativos. A través de este procedimiento, un término real es sustituido por otro imaginario, lo que permite enriquecer el lenguaje, intensificar la expresividad y generar múltiples niveles de interpretación. Desde la teoría literaria, la metáfora cumple una función central en la construcción del sentido poético, ya que invita al lector a establecer asociaciones, interpretar símbolos y profundizar en el significado del texto. Su uso frecuente en distintos géneros literarios demuestra su importancia como herramienta fundamental para la creatividad y la elaboración estética del discurso."
            },
            {
                id: 9,
                question: "En el análisis de los textos escritos, no solo es importante la corrección gramatical, sino también la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La coherencia textual se refiere a la organización lógica y significativa de las ideas que conforman un texto, de modo que estas se articulen de manera comprensible para el lector y mantengan una unidad temática. Un texto coherente presenta una secuencia clara de ideas, en la que cada parte se relaciona con el tema central y contribuye al desarrollo del sentido global. Este aspecto no depende únicamente de la corrección gramatical o del uso adecuado de la puntuación, sino de la planificación del contenido y de la progresión temática. Sin coherencia, el texto puede resultar confuso o contradictorio, aun cuando sus oraciones estén bien construidas desde el punto de vista lingüístico, lo que evidencia la importancia de este concepto en la producción y comprensión de textos. 211"
            },
            {
                id: 11,
                question: "Dentro de la historia de la literatura, diversos movimientos han propuesto distintas maneras de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El realismo literario se caracteriza por su intención de representar la realidad de manera fiel y objetiva, poniendo énfasis en la observación minuciosa de la vida cotidiana, las costumbres sociales y los conflictos propios de una época determinada. Este movimiento surge como reacción frente a corrientes anteriores que privilegiaban la idealización o la subjetividad extrema, proponiendo una mirada más crítica y analítica de la sociedad. Los autores realistas buscan mostrar la realidad tal como es, sin embellecerla ni deformarla, incorporando descripciones detalladas de los espacios, los personajes y sus condiciones sociales. De este modo, el realismo se convierte en un medio para reflexionar sobre las problemáticas sociales, económicas y humanas, otorgando a la literatura una función de observación y análisis de la realidad."
            },
            {
                id: 12,
                question: "En el análisis sintáctico de la oración, los verbos pueden clasificarse según la necesidad o no de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la gramática del español, los verbos se clasifican, entre otros criterios, según su régimen de complementación. Los verbos intransitivos se caracterizan porque no necesitan un complemento directo para que la oración tenga sentido completo, ya que la acción o el estado que expresan se considera suficiente por sí mismo. Este tipo de verbos puede aparecer acompañado de otros complementos, como los circunstanciales, pero estos no son exigidos por el verbo para completar su significado. Reconocer esta diferencia resulta fundamental para el análisis sintáctico, ya que permite identificar correctamente la estructura de la oración, distinguir funciones gramaticales y evitar confusiones con construcciones transitivas o pasivas, contribuyendo así a una comprensión más precisa del funcionamiento del idioma."
            },
            {
                id: 13,
                question: "En los textos narrativos, el tipo de narrador determina la perspectiva desde la cual se cuentan los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La narración en primera persona se caracteriza porque el narrador forma parte de la historia que cuenta, ya sea como protagonista o como testigo de los hechos. Esta perspectiva implica un relato marcado por la 212 Repositorio de"
            },
            {
                id: 14,
                question: "En la escritura, los signos de puntuación cumplen una función esencial para organizar el discurso y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La coma es un signo de puntuación fundamental cuya función principal es organizar las ideas dentro del enunciado, señalar pausas breves y establecer relaciones sintácticas entre los distintos elementos de la oración. Su uso adecuado permite delimitar incisos, enumeraciones, vocativos y oraciones subordinadas, contribuyendo a que el texto sea claro y comprensible. Desde el punto de vista normativo y comunicativo, la correcta colocación de la coma evita ambigüedades de significado y facilita la lectura fluida del texto. Un uso inadecuado o arbitrario de este signo puede alterar el sentido del mensaje o generar confusión, lo que demuestra su importancia para la coherencia y la precisión en la expresión escrita."
            },
            {
                id: 15,
                question: "Dentro de la historia de la literatura en lengua española, el Siglo de Oro constituye un periodo de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Miguel de Cervantes es una figura central del Siglo de Oro español, periodo que abarca aproximadamente los siglos XVI y XVII y que se caracteriza por un notable florecimiento de las artes y las letras en España. Su obra Don Quijote de la Mancha es considerada una de las cumbres de la literatura universal, no solo por su valor estético, sino también por su carácter innovador en la construcción del relato, el desarrollo de los personajes y la reflexión sobre la realidad y la ficción. Cervantes logró sintetizar elementos de la tradición medieval con nuevas formas narrativas modernas, lo que convirtió su producción literaria en un referente fundamental del canon literario hispánico y en una expresión representativa del esplendor cultural propio del Siglo de Oro."
            },
            {
                id: 16,
                question: "En la construcción de un texto escrito, no solo es importante que las ideas estén organizadas de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La cohesión textual se refiere al conjunto de mecanismos lingüísticos que permiten establecer relaciones formales entre los distintos elementos de un texto, garantizando su continuidad y fluidez. Entre estos recursos se encuentran los conectores (que expresan relaciones lógicas como causa, consecuencia u oposición), los pronombres y referencias (que evitan repeticiones innecesarias), así como la elipsis y otros procedimientos gramaticales. Gracias a estos mecanismos, las oraciones y párrafos se articulan de manera adecuada, facilitando la comprensión del mensaje por parte del lector. La cohesión no depende de la cantidad de texto ni de la repetición excesiva, sino del uso correcto y pertinente de estos recursos, que permiten que el discurso se perciba como una unidad estructurada y coherente. 213"
            },
            {
                id: 18,
                question: "Dentro de los distintos tipos de textos que circulan en la comunicación escrita y oral, el texto",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto argumentativo tiene como finalidad principal convencer o persuadir al receptor acerca de una determinada postura, opinión o tesis, a través del uso de argumentos lógicos, razonamientos coherentes y, en algunos casos, ejemplos o evidencias. A diferencia de otros tipos de textos, su estructura se organiza en torno a una idea central que el emisor busca sostener y justificar de manera racional. Para ello, emplea un lenguaje claro, preciso y estructurado, así como conectores lógicos que articulan las ideas y refuerzan la coherencia del discurso. Este tipo de texto resulta fundamental en la formación secundaria, ya que promueve el desarrollo del pensamiento crítico, la capacidad de argumentar y la habilidad para evaluar distintas posiciones frente a un mismo tema. El narrador omnisciente se caracteriza por:"
            },
            {
                id: 19,
                question: "La literatura boliviana del siglo XX se caracteriza por una fuerte preocupación por los problemas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Alcides Arguedas es uno de los principales exponentes del indigenismo en la literatura boliviana, corriente que buscó representar críticamente la situación de los pueblos indígenas y las estructuras sociales heredadas del orden colonial. A través de una narrativa de fuerte contenido social, sus obras abordaron temas como la desigualdad, la exclusión y los conflictos entre el mundo indígena y la sociedad dominante. Este enfoque permitió visibilizar problemáticas históricas del país y consolidó una literatura comprometida con la reflexión sobre la realidad nacional, rasgo central de la producción literaria boliviana del siglo XX."
            },
            {
                id: 20,
                question: "Dentro de la poesía boliviana contemporánea, algunos autores se alejaron del realismo social",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Jaime Saenz es una figura central de la poesía boliviana del siglo XX, reconocido por una obra que explora la existencia humana, la muerte, la marginalidad y la experiencia urbana, especialmente vinculada a la ciudad de 214 Repositorio de"
            },
            {
                id: 4,
                question: "Comprensión Lectora",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: ""
            },
        ]
    }
];
