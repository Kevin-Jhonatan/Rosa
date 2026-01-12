const questionsData = [
    {
        component: "HABILIDADES SOCIOEMOCIONALES",
        title: "Habilidades Socioemocionales",
        text: "Preguntas situacionales",
        fullText: ``,
        questions: [
            {
                id: 1,
                question: "Según el artículo, ¿cuál fue la reducción porcentual de la superficie forestal entre 1900 y 1960 y cómo se compara con la pérdida de cobertura forestal entre 1990 y 2020?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El párrafo sobre la colonización española indica que la superficie forestal pasó de 4,9 millones a 3,9 millones de hectáreas entre 1900 y 1960, lo que corresponde a una reducción del 20% (INE, 2021). En el resumen y la sección de impactos climáticos se menciona que la pérdida de cobertura forestal entre 1990 y 2020 fue de aproximadamente el 15% (datos satelitales)."
            },
        ]
    },
    {
        component: "COMPRENSIÓN LECTORA",
        title: "valles de los Yungas hasta bosques de niebla",
        text: "valles de los Yungas hasta bosques de niebla en la zona altitudinaria. Estos bosques no solo son hábitats de especies endémicas, sino que también desempeñan funciones climáticas esenciales: regulan l",
        fullText: `valles de los Yungas hasta bosques de niebla en la zona altitudinaria. Estos bosques no solo son hábitats de especies endémicas, sino que también desempeñan funciones climáticas esenciales: regulan la temperatura, retienen agua y capturan dióxido de carbono (CO2). Sin embargo, la cobertura forestal ha sido reducida de manera sostenida a lo largo de varios siglos, lo que ha alterado significativamente los procesos climáticos locales. Comprender la deforestación como un fenómeno histórico permite identificar las causas estructurales y los momentos críticos en los que la actividad humana empezó a modificar de forma irreversible los paisajes. Además, la perspectiva evolutiva ayuda a reconocer qué prácticas antiguas podrían incorporarse a estrategias contemporáneas de restauración. Este artículo sigue una línea temporal que parte de la ocupación precolombina, atraviesa la época colonial y la industrialización, y llega a la actualidad, examinando en cada etapa los impactos sobre el clima. Desarrollo 1. Los Andes antes del contacto europeo: manejo forestal tradicional En la zona de los Yungas, los pueblos originarios —como los Aymara y los Guaraní— practicaban una forma de agroforestería que combinaba cultivos alimentarios (maíz, papa, plátano) con árboles nativos de corte moderado. Esta estrategia, conocida como sistema agroforestal, favorecía la conservación del suelo y la regulación hídrica. Los estudios arqueológicos indican que la densidad forestal en el siglo XV era aproximadamente un 85% del área total, con claros creados intencionalmente para la agricultura, pero sin eliminar la mayor parte del dosel arbóreo (Miller, 2018). 2. La colonización española y la expansión agropecuaria Con la llegada de los conquistadores en el siglo XVI, la demanda de oro y plata impulsó la extracción minera intensiva y la apertura de rutas de transporte que requirieron la tala de bosques para la construcción de carreteras y la obtención de leña. Además, la introducción del ganado vacuno y ovino generó una presión adicional: los pastizajes necesitaban ser despejados, y el sobrepastoreo provocó la erosión del suelo. Según el Instituto Nacional de Estadística (INE) de Bolivia, la superficie`,
        questions: [
            {
                id: 2,
                question: "Del análisis presentado se desprende que, ¿cuáles son los problemas identificados que el artículo señala como consecuencias de la deforestación en los Andes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección “Impactos climáticos y retroalimentaciones” indica que la deforestación ha generado un aumento de la temperatura media de 0,6 °C, una mayor variabilidad de precipitaciones con sequías más intensas, una disminución de la capacidad del suelo para retener agua y un aumento de emisiones de CO2 (≈ 12 MtCO2 /año entre 2000‑2015) debido a la quema forestal."
            },
            {
                id: 3,
                question: "Del análisis presentado se desprende que, en la cadena de procesos que relaciona la deforestación con el aumento de la temperatura en los Andes bolivianos, ¿cuál es el primer factor técnico mencionado? 11",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Industrialización y políticas de desarrollo en el siglo XX” se describe el modelo de balance energético: “La reducción del albedo (reflectancia de la superficie) y la pérdida de la transpiración vegetal disminuyen el flujo de energía latente, aumentando la temperatura de la superficie”. El texto menciona primero la reducción del albedo como factor que desencadena la cadena de efectos que lleva al aumento de la temperatura."
            },
            {
                id: 4,
                question: "La lectura del texto permite identificar que, entre 1990 y 2020, la pérdida de cobertura forestal en los Andes bolivianos fue aproximadamente del 15% y el aumento de la temperatura media fue de 0,6 °C.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los datos explícitos del artículo indican que la pérdida de cobertura forestal entre 1990 y 2020 fue de aproximadamente 15%, y en la sección “Impactos climáticos y retroalimentaciones” se reporta un incremento de la temperatura media de 0,6 °C para el mismo período."
            },
            {
                id: 5,
                question: "A partir de lo expuesto en el artículo, ¿qué proceso técnico se ve incrementado directamente por la reducción del calor latente (LE) tras la pérdida de bosques, contribuyendo al aumento de la temperatura del aire?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La disminución del LE al perderse los bosques eleva el H y, por ende, la temperatura del aire” (Gómez et al., 2020). Esto muestra que la reducción del calor latente provoca un aumento del calor sensible, que es el proceso técnico directamente involucrado en el calentamiento del aire."
            },
            {
                id: 6,
                question: "Del análisis presentado se desprende que, ¿cuál de los siguientes conjuntos de actores se menciona en el artículo como participantes tanto en la causa histórica de la deforestación como en las respuestas actuales al problema?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona explícitamente a los pueblos originarios (Aymara y Guaraní) en la sección “Los Andes antes del contacto europeo”, a los colonizadores españoles en “La colonización española y la expansión agropecuaria”, al gobierno boliviano en “Industrialización y políticas de desarrollo en el siglo XX” y en “Respuestas actuales y perspectivas de gestión”, y a organizaciones no gubernamentales y comunidades indígenas en los mismos últimos párrafos donde se describen iniciativas de restauración forestal y pagos por servicios ambientales."
            },
            {
                id: 7,
                question: "A partir de lo expuesto en el artículo, ¿cuál de las siguientes afirmaciones compara mejor el impacto de la expansión agropecuaria durante la colonización española con el de la expansión agrícola comercial del siglo XX sobre el aumento de la temperatura local?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la expansión agrícola del siglo XX aceleró la deforestación (de 32 000 ha/año a 45 000 ha/ año entre 1990‑2020) y está vinculada a una disminución del flujo de calor latente (LE), lo que eleva la temperatura del aire. En cambio, la colonización española del siglo XVI provocó deforestación para minería y pastoreo, pero a una escala mucho menor y sin mencionar efectos directos sobre la temperatura; su impacto climático se describió como indirecto y menos pronunciado. Por lo tanto, la comparación que atribuye un mayor incremento térmico a la expansión agrícola del siglo XX es la que mejor refleja la información dispersa del texto. 12 Repositorio de"
            },
            {
                id: 8,
                question: "Del análisis presentado se desprende que, al comparar el mecanismo de retroalimentación climática descrito para la pérdida de bosques con el papel de los sistemas agroforestales tradicionales, ¿cuál de las siguientes afirmaciones refleja con mayor precisión la diferencia clave entre ambos procesos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Porque el texto indica que la deforestación disminuye el flujo de calor latente (LE) y, por tanto, eleva el calor sensible (H) y la temperatura del aire. En contraste, los sistemas agroforestales precolombinos combinaban cultivos con árboles, favoreciendo la conservación del suelo y la regulación hídrica, lo que implica una transpiración vegetal sostenida y un mayor LE, mitigando el aumento térmico."
            },
            {
                id: 9,
                question: "A partir de lo expuesto en el artículo, ¿qué principio general se puede extraer sobre las consecuencias sociales de la deforestación en los Andes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La deforestación reduce la capacidad de retención de agua y aumenta la vulnerabilidad de los suelos, lo que afecta directamente a las poblaciones locales que dependen de estos recursos. Además, se enfatiza que la restauración requiere la integración de saberes tradicionales y la participación activa de comunidades indígenas, lo que indica que la mitigación de los efectos sociales depende de estos factores."
            },
            {
                id: 10,
                question: "A partir de lo expuesto en el artículo, ¿qué efecto indirecto es probable que tenga la ampliación del programa Biodiversidad Andina (2020‑2024) sobre la vulnerabilidad de los sistemas agropecuarios locales frente a la variabilidad de precipitaciones?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pérdida de bosque reduce la capacidad de retención de agua en el suelo, amplificando los efectos de la sequía. Asimismo, se menciona que el programa Biodiversidad Andina ha sembrado 3,5 millones de árboles nativos y que la integración de saberes tradicionales con tecnologías de monitoreo permite una gestión adaptativa que identifica zonas con mayor estrés hídrico. De manera implícita, la restauración forestal incrementa la retención de agua y modula el microclima, lo que debería reducir la vulnerabilidad de los sistemas agropecuarios ante la mayor variabilidad de precipitaciones."
            },
            {
                id: 11,
                question: "Según el artículo, ¿qué es probable que ocurra si la tendencia actual de expansión agrícola y pérdida de bosques en los Andes bolivianos continúa sin cambios durante la próxima década?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Porque el artículo muestra que entre 1990 y 2020 la temperatura media aumentó 0,6 °C y la pérdida forestal se aceleró a 45 000 ha/año entre 2005 y 2020. Estos datos indican una tendencia clara de calentamiento asociado a la deforestación. Además, se explica que la reducción del flujo latente (LE) eleva el calor sensible (H), lo que eleva la temperatura del aire y favorece sequías más intensas y mayor frecuencia de incendios, generando mayores emisiones de CO2 que retroalimentan el proceso. Por lo tanto, si la pérdida de bosques y la expansión agrícola continúan, se espera otro aumento de temperatura (al menos 0,3 °C en la próxima década) y más sequías e incendios. 13"
            },
            {
                id: 12,
                question: "De acuerdo con el texto, ¿cuál de las siguientes afirmaciones compara de manera más precisa los efectos de la disminución del flujo latente (LE) y del aumento del albedo sobre el balance energético y el calentamiento local en los Andes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pérdida de bosque reduce el flujo de energía latente (LE), lo que disminuye la transpiración y eleva el calor sensible (H), incrementando la temperatura local. Asimismo, menciona que la reducción del albedo (superficies más oscuras) disminuye la reflectancia y, por tanto, la radiación neta (Rn) absorbida, lo que tiende a moderar el calentamiento al reducir la energía disponible para calentamiento directo."
            },
            {
                id: 13,
                question: "De acuerdo con el texto, ¿qué diferencia más significativa se puede inferir entre la forma en que la deforestación afectó el balance energético durante la colonización española y la que se observa en la expansión agrícola del siglo XXI?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La colonización española, la tala de bosques para carreteras y la introducción de ganado provocó sobrepastoreo y erosión del suelo, lo que afecta la retención hídrica. En contraste, en artículo también explica que la expansión agrícola del siglo XXI reduce el flujo latente (LE) al perderse la transpiración vegetal, lo que eleva el calor sensible (H) y, consecuentemente, la temperatura del aire."
            },
            {
                id: 14,
                question: "Del análisis presentado se desprende que la iniciativa Biodiversidad Andina (2020‑2024) tiene como objetivo principal...",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El programa Biodiversidad Andina (2020‑2024) ha sembrado 3,5 millones de árboles nativos en áreas degradadas de los Yungas y que revive prácticas agroforestales tradicionales, con la finalidad de restaurar bosques y aportar resiliencia frente al cambio climático."
            },
            {
                id: 15,
                question: "Basándose en la información proporcionada, ¿qué efecto indirecto es probable que haya tenido la apertura de la carretera Cochabamba‑Santa Cruz (finalizada en 1978) sobre la capacidad de los pueblos indígenas de los Yungas para mantener sus sistemas agroforestales tradicionales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La carretera Cochabamba‑Santa Cruz, finalizada en 1978, “abrió vastas áreas del bosque subtropical a la colonización de campesinos y empresas agroindustriales”. Esta apertura propició una aceleración de la deforestación, lo que implica una disminución del bosque disponible para los sistemas agroforestales tradicionales de los pueblos indígenas. Por otra parte, “el gobierno boliviano, junto a organizaciones no gubernamentales y comunidades indígenas, ha promovido iniciativas de restauración forestal y pagos por servicios ambientales”, lo que sugiere que los pueblos tuvieron que recurrir a estas políticas como respuesta a la pérdida de sus áreas de manejo tradicional."
            },
            {
                id: 16,
                question: "A partir de lo expuesto en el artículo, ¿qué consecuencia a largo plazo se puede deducir de la disminución del flujo de calor latente (LE) ocasionada por la deforestación en los Andes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La deforestación reduce el flujo de calor latente (LE), lo que eleva el calor sensible (H) y, por ende, la temperatura de la superficie (“la disminución de LE al perderse los bosques eleva H y, por ende, la temperatura del aire”). Además, en la sección de retroalimentaciones se menciona que el aumento de emisiones de CO2 proviene de la quema forestal y que estas emisiones intensifican el calentamiento global, potenciando la frecuencia de incendios. 14 Repositorio de"
            },
            {
                id: 17,
                question: "El artículo señala que, a partir de los ejemplos históricos y los datos climáticos presentados, ¿qué principio general se puede extraer sobre la relación entre la deforestación y el clima en los Andes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pérdida de bosque reduce el flujo de calor latente (LE) asociado a la transpiración, lo que incrementa el calor sensible (H) y, por ende, la temperatura del aire. Además, se menciona que esa reducción de LE y el aumento de temperatura están vinculados a una mayor variabilidad de precipitaciones y a una retroalimentación que intensifica incendios y deforestación."
            },
            {
                id: 18,
                question: "El artículo señala que la iniciativa Biodiversidad Andina (2020‑2024) fue implementada principalmente con la finalidad de:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El programa Biodiversidad Andina ha sembrado 3,5 millones de árboles nativos en áreas degradadas y que involucra a campesinos que reviven prácticas agroforestales tradicionales, con el objetivo de restaurar bosques y, por ende, mejorar la retención hídrica y la captura de CO2. La iniciativa busca “restauración forestal” y “pago por servicios ambientales”, lo que implica reforzar los servicios ecosistémicos climáticos."
            },
            {
                id: 19,
                question: "Según el artículo, ¿cuál es la finalidad principal de combinar los conocimientos agroforestales tradicionales con tecnologías de monitoreo satelital en los programas de restauración forestal actuales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La integración de saberes ancestrales con monitoreo satelital permite “una gestión adaptativa: los datos de sensores térmicos identifican zonas con mayor estrés hídrico, mientras que la ciencia del suelo orienta la selección de especies nativas con alta tolerancia a la sequía”. Este propósito se centra en mejorar la resiliencia de la restauración frente a condiciones climáticas adversas."
            },
            {
                id: 20,
                question: "El artículo señala que la pérdida de bosque en los Andes bolivianos reduce la retención de agua y aumenta la variabilidad de precipitaciones; ¿qué consecuencia social se puede deducir de este proceso?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La deforestación disminuye la capacidad del suelo para retener agua y aumenta la variabilidad de precipitaciones, lo que intensifica sequías que afectan la disponibilidad de agua para la agricultura y la generación hidroeléctrica. Estas condiciones generan mayor vulnerabilidad de los campesinos, quienes dependen del agua para cultivos y ganadería, y pueden verse forzados a migrar a zonas urbanas en busca de medios de vida más seguros."
            },
            {
                id: 21,
                question: "Según el artículo, ¿qué principio general se puede extraer de las soluciones propuestas para mitigar la deforestación en los Andes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La combinación de conocimientos tradicionales (saberes ancestrales) con tecnologías de monitoreo satelital permite una gestión adaptativa de la restauración forestal. Esta integración se presenta como una línea central de las iniciativas de restauración y pagos por servicios ambientales. 15"
            },
            {
                id: 22,
                question: "A partir de lo expuesto en el artículo, ¿cuál de las siguientes consecuencias sociales relacionadas con la deforestación y el cambio climático en los Andes bolivianos no es contemplada en el análisis del autor?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe detalladamente los impactos climáticos y menciona iniciativas de restauración y participación comunitaria, nunca aborda explícitamente el posible desplazamiento forzado de poblaciones indígenas originarias provocado por la expansión agrícola y la construcción de carreteras."
            },
            {
                id: 23,
                question: "Considerando lo mencionado en el texto, ¿cuál de las siguientes afirmaciones describe mejor una implicación ética de promover la expansión de la agricultura comercial en los Andes bolivianos sin integrar los saberes agroforestales tradicionales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo subraya que la integración de conocimientos ancestrales (p.ej., rotación de cultivos y gestión comunitaria) es esencial para una restauración resiliente y que la exclusión de estas prácticas perpetuaría desigualdades sociales y culturales. Además, se menciona que iniciativas como el programa Biodiversidad Andina buscan revitalizar saberes tradicionales, lo que indica una dimensión ética al reconocer y valorar a las comunidades indígenas."
            },
            {
                id: 24,
                question: "A partir de lo expuesto en el artículo, ¿cuáles son las principales implicaciones ambientales de la retroalimentación entre la deforestación y el cambio climático descrita?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala que la pérdida de bosque disminuye el flujo latente de energía (LE), lo que eleva la temperatura del aire, y que la quema de residuos forestales emite alrededor de 12 MtCO2 al año. Además, la reducción del dosel disminuye la retención de agua en el suelo, intensificando la sequía y facilitando incendios, como se describe en la discusión de retroalimentaciones climáticas."
            },
            {
                id: 25,
                question: "Considerando lo mencionado en el texto, ¿cómo difiere la propuesta de gestión futura de una estrategia que se basara exclusivamente en tecnologías de monitoreo satelital sin integrar saberes tradicionales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El programa Biodiversidad Andina incorpora saberes tradicionales (rotación de cultivos, gestión comunitaria) y que, al mismo tiempo, se utilizan tecnologías de monitoreo satelital y sensores térmicos para identificar zonas con mayor estrés hídrico, describiendo un enfoque híbrido. Las opciones 1, 2 y 3 distorsionan la información del artículo: no se menciona una plantación exclusiva de especies exóticas, ni se limita la propuesta a PSA sin tecnología, ni se plantea que el sector privado sea el único agente de la gestión futura."
            },
            {
                id: 26,
                question: "Del análisis presentado se desprende que, para una evaluación completa del balance energético regional, ¿qué factor relevante no ha sido considerado por el autor?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pérdida de cobertura forestal y su efecto en el balance energético (párrafo 3, ecuación Q = Rn - G - H - LE) y menciona la expansión agrícola y minera como causas principales, pero no aborda la posible expansión urbana ni otras conversiones de suelo que tampoco están cubiertas por bosques. Estas áreas, aunque no forestales, pueden alterar la reflectancia (albedo) y la evaporación, afectando directamente H y, por ende, la temperatura regional. 16 Repositorio de"
            },
            {
                id: 27,
                question: "Del análisis presentado se desprende que el autor omite considerar cuál de los siguientes factores al evaluar los impactos climáticos de la deforestación en los Andes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe detalladamente procesos biogeoquímicos y energéticos (albedo, emisiones de CO2, flujo de calor latente) y utiliza datos satelitales para cuantificar la pérdida forestal, no aborda el componente socio‑económico que impulsa la expansión agrícola, como las políticas de mercado y la demanda internacional de soja. Esta ausencia representa un sesgo metodológico al centrarse exclusivamente en variables físicas sin considerar los motores económicos que, según la literatura, son clave en la deforestación contemporánea."
            },
            {
                id: 28,
                question: "De acuerdo con el texto, ¿qué tipo de evidencia adicional sería necesaria para reforzar el argumento de que la expansión agropecuaria durante la colonización española provocó una erosión significativa del suelo?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Se describe cómo la introducción del ganado durante la colonización española generó sobrepastoreo y erosionó el suelo, pero el texto no aporta datos cuantitativos de esa erosión. Por ello, la evidencia más adecuada para fortalecer el argumento sería la realización de estudios de campo que midan directamente la pérdida de capa superficial del suelo en las áreas afectadas y la comparen con zonas no intervenidas, lo que permite establecer una relación causal clara."
            },
            {
                id: 29,
                question: "La lectura del texto permite identificar que el argumento del autor, según el cual la disminución del flujo de calor latente (LE) por la pérdida de bosque eleva directamente la temperatura del aire al incrementar el calor sensible (H), es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto presenta explícitamente la ecuación del balance energético Q = Rn - G - H - LE y afirma que la disminución de LE al perderse los bosques eleva H y, en consecuencia, la temperatura del aire (Gómez et al., 2020). Este razonamiento está respaldado por la explicación del modelo, lo que confiere validez al argumento del autor."
            },
            {
                id: 30,
                question: "Considerando lo mencionado en el texto, ¿qué tan válido es el argumento del autor sobre la efectividad de los pagos por servicios ambientales (PSA) como solución para mitigar la deforestación en los Andes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El programa Biodiversidad Andina (2020‑2024) ha sembrado 3,5 millones de árboles nativos y junto a los pagos por servicios ambientales, se busca integrar saberes tradicionales para restaurar bosques. Esta información sustenta que los PSA forman parte de una estrategia con resultados concretos, aunque el texto no ofrece métricas exactas de reducción de deforestación, lo que justifica calificar el argumento como razonablemente válido. 17 Educación Digital y la Brecha de Conectividad en Bolivia: Desafíos Actuales y Soluciones Emergentes Resumen El proceso de digitalización de la educación ha cobrado una relevancia sin precedentes tras la pandemia de COVID 19, revelando y ampliando la brecha de conectividad en países en desarrollo. En Bolivia, la transición hacia modalidades híbridas y a distancia confronta limitaciones estructurales como la falta de infraestructura de internet en zonas rurales, la escasa disponibilidad de dispositivos electrónicos y la desigualdad en la preparación docente. Este artículo revisa la evidencia empírica disponible sobre el nivel de acceso a tecnologías de la información y la comunicación (TIC) en el sistema educativo boliviano, analiza los impactos de la brecha digital en el rendimiento académico y la equidad, y discute iniciativas públicas y privadas que buscan mitigar estos problemas. Se presentan datos de organismos internacionales y nacionales que muestran que, a finales de 2023, solo el 42% de los estudiantes de educación primaria y el 58% de los de secundaria tenían acceso regular a una conexión de banda ancha en el hogar. A partir de este diagnóstico, se evalúan propuestas como la expansión de la red de fibra óptica en áreas campesinas, los programas de dispositivos compartidos en centros comunitarios y la capacitación docente en metodologías de aprendizaje en línea. El artículo concluye con una reflexión sobre la necesidad de políticas integradas que consideren la infraestructura, la formación docente y la participación"
            },
            {
                id: 31,
                question: "Según el artículo, ¿cómo se define el concepto de brecha digital?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo establece explícitamente: “La brecha digital se define como la diferencia entre quienes pueden acceder y utilizar eficazmente las TIC y quienes no lo pueden”."
            },
            {
                id: 32,
                question: "A partir de lo expuesto en el artículo, establecer la secuencia correcta de los siguientes indicadores de conectividad y acceso en Bolivia en 2023: (i) porcentaje de hogares urbanos con internet, (ii) porcentaje de hogares rurales con internet, (iii) porcentaje de estudiantes de primaria con acceso regular a banda ancha en el hogar, (iv) porcentaje de estudiantes de secundaria con acceso regular a banda ancha en el hogar.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La tasa de acceso a internet en hogares urbanos es del 71% (INE, 2023); en zonas rurales es del 33% (INE, 2023); el 42% de los estudiantes de educación primaria tenía acceso regular a banda ancha en el hogar a finales de 2023; y el 58% de los estudiantes de secundaria contaba con ese acceso."
            },
            {
                id: 33,
                question: "La lectura del texto permite identificar que, según el artículo, los pilares que deben integrar las políticas públicas para lograr una educación digital inclusiva en Bolivia son:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el artículo se afirma que las políticas públicas deben adoptar un enfoque sistémico que considere simultáneamente “la inversión en infraestructura, la formación continua de los docentes y la creación de entornos de aprendizaje colaborativos”, y se menciona además que la participación comunitaria es un pilar esencial."
            },
            {
                id: 34,
                question: "Según el artículo, ¿qué universidad implementó el Programa de Formación Docente en Tecnologías Educativas (FOTED)?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica explícitamente que “la Universidad Mayor de San Andrés (UMSA) emprendió el Programa de Formación Docente en Tecnologías Educativas (FOTED)” y menciona los resultados alcanzados por esa iniciativa."
            },
            {
                id: 35,
                question: "Considerando lo mencionado en el texto, ¿en qué porcentaje se redujo el costo promedio por kilómetro de fibra óptica respecto a estimaciones previas, según el Programa Nacional de Conectividad Rural?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el apartado de ‘Expansión de infraestructura’ se indica que la alianza pública privada permitió “reducir el costo promedio por kilómetro en un 15% respecto a estimaciones previas” (Ministerio de Obras Públicas, 2023). Las demás opciones presentan porcentajes que no aparecen en el artículo; 10% y 20% son valores cercanos, pero no mencionados, y 25% es una cifra mayor que la indicada, por lo que ninguna de ellas corresponde al dato explícito solicitado. 20 Repositorio de"
            },
            {
                id: 36,
                question: "Del análisis presentado se desprende que la barrera principal para lograr una educación digital equitativa en Bolivia es…",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala tres factores estructurales que perpetúan la brecha digital: (1) la cobertura de fibra óptica alcanza solo el 24% de los municipios, indicando una infraestructura insuficiente (sección 2); (2) el 38% de las escuelas rurales carecen de al menos un computador por cada veinte estudiantes, lo que muestra escasez de dispositivos; y (3) solo el 27% de los docentes de secundaria había recibido capacitación formal en pedagogía digital antes de la pandemia (sección 2). El texto enfatiza que la combinación de estos problemas, no uno solo, es la razón de la limitación de la educación digital."
            },
            {
                id: 37,
                question: "La lectura del texto permite identificar que, para cerrar la brecha de aprendizaje asociada a la falta de conectividad, es necesario:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo muestra que la brecha de aprendizaje se debe a una combinación de factores estructurales (infraestructura insuficiente, falta de dispositivos y escasa preparación docente). Los resultados presentados indican que la expansión de fibra óptica y radio enlace (infraestructura), los “bibliotecas digitales” con tablets compartidas (dispositivos) y el Programa FOTED de capacitación docente (confianza y habilidades) han producido mejoras simultáneas en acceso, uso y calidad de la enseñanza. Los autores concluyen que “políticas integradas que consideren la infraestructura, la formación docente y la participación comunitaria” son esenciales para una educación digital inclusiva, lo que confirma que solo la combinación de esas intervenciones puede cerrar efectivamente la brecha."
            },
            {
                id: 38,
                question: "Basándose en la información proporcionada, ¿cuál de las siguientes afirmaciones refleja con mayor precisión la diferencia económica entre la expansión de la fibra óptica y los programas de dispositivos compartidos en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la expansión de la fibra óptica redujo el costo promedio por kilómetro en un 15% (Ministerio de Obras Públicas, 2023) y que los programas de dispositivos compartidos, como la iniciativa de ConectaTi en Tarija, disminuyeron la brecha de dispositivos en un 40% (ConectaTi, 2023). 21"
            },
            {
                id: 39,
                question: "Del análisis presentado se desprende que, respecto a los actores involucrados en la reducción de la brecha digital en Bolivia, la estrategia más eficaz combina…",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala que cerrar la brecha digital requiere una combinación de acciones: la expansión de la infraestructura de fibra óptica (Programa Nacional de Conectividad Rural), los programas de dispositivos compartidos como las bibliotecas digitales (ConectaTi) y la participación comunitaria (comités de padres en Potosí). Además, la capacitación docente (Programa FOTED) se menciona como otro pilar esencial. Estas tres dimensiones aparecen en distintos párrafos y su interacción es resaltada como clave para una educación digital inclusiva."
            },
            {
                id: 40,
                question: "Según la lectura, ¿cuál de los siguientes efectos en la educación rural se produce por la insuficiente cobertura de fibra óptica en municipios bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto no menciona explícitamente que la falta de fibra óptica cause deserción escolar, sí indica que la escasa conectividad limita la capacidad de los docentes para usar plataformas de aprendizaje y obliga a los estudiantes a depender de materiales pasivos, lo que “provoca deserción y rezago escolar”. Además, se señala que la cobertura de fibra óptica solo alcanza el 24% de los municipios, concentrándose en zonas urbanas, lo que implica que la mayoría de áreas rurales carecen de esta infraestructura, dificultando la asistencia a clases virtuales y, por ende, incrementando la probabilidad de abandono escolar. Las demás opciones son incorrectas: la mayor participación de los padres se asocia a iniciativas como “Escuelas Conectadas” en Potosí, no a la falta de fibra; la reducción de la brecha de dispositivos se relaciona con programas de dispositivos compartidos, no con la cobertura de fibra; y la mejora en puntajes se vincula a estudiantes con acceso regular a internet, no a la carencia de fibra, por lo que no puede atribuirse a la insuficiente cobertura."
            },
            {
                id: 41,
                question: "Según el artículo, considerando la expansión de la red de fibra óptica en comunidades campesinas y la implementación de radio enlace en zonas de difícil acceso, ¿qué es probable que ocurra en el desempeño académico de los estudiantes rurales dentro de los próximos tres años?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica, que los estudiantes con acceso regular a internet presentan un aumento del 12% en sus puntajes de matemática y lectura. Además, se describe la expansión de fibra óptica y la implementación de radio enlace como medidas destinadas a mejorar la conectividad en áreas rurales. Al combinar ambos datos, es razonable inferir que, al ampliar la cobertura de internet, los estudiantes rurales experimentarán un incremento similar, alrededor del 10%, en sus resultados académicos dentro de un horizonte de tres años."
            },
            {
                id: 42,
                question: "A partir del artículo, al comparar la expansión de fibra óptica y la tecnología de radio enlace de corto alcance, ¿cuál de las siguientes afirmaciones refleja mejor la relación entre la topografía de la zona y la elección de la solución tecnológica?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la cobertura de fibra óptica está concentrada principalmente en Santa Cruz y La Paz, mientras que la tecnología de radio enlace de corto alcance se ha implementado en zonas de difícil acceso, destacando su efectividad en la región del Beni. 22 Repositorio de"
            },
            {
                id: 43,
                question: "Del análisis presentado se desprende que, para reducir la brecha de conectividad en la educación boliviana, la estrategia más eficaz consiste en…",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca que la expansión de infraestructura (p. “instalar 1 200 km de fibra óptica”), los programas de dispositivos compartidos (p. “bibliotecas digitales” y el caso de Tarija) y la capacitación docente continua (p. “Programa de Formación Docente en Tecnologías Educativas”) se presentan como componentes complementarios para cerrar la brecha digital. Además, en la conclusión se subraya la necesidad de políticas integradas que consideren infraestructura, formación docente y participación comunitaria."
            },
            {
                id: 44,
                question: "De acuerdo con el texto, ¿qué efecto probable tendría la ampliación de la cobertura de fibra óptica en municipios rurales sobre el rendimiento académico de los estudiantes?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que los estudiantes con acceso regular a internet obtienen un aumento promedio del 12% en sus puntajes de matemática y lectura. Al ampliar la cobertura de fibra óptica en municipios rurales, se mejora la conectividad en esas zonas, lo que implícitamente permite que más estudiantes dispongan de acceso regular a internet; por lo tanto, es razonable inferir que sus rendimientos académicos experimentarían un incremento similar al mencionado."
            },
            {
                id: 45,
                question: "La lectura del texto permite identificar que el propósito principal de combinar la expansión de infraestructura de fibra óptica, los programas de dispositivos compartidos y la capacitación docente continua es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El Programa Nacional de Conectividad Rural (PNCR) busca instalar fibra óptica en comunidades campesinas, los “bibliotecas digitales” y la donación de tablets persiguen reducir la falta de dispositivos, y el programa FOTED de la UMSA procura capacitar a los docentes. Estas tres líneas de acción se describen como estrategias integrales que, según la sección de conclusiones, buscan “cerrar gradualmente esa brecha” y mejorar el rendimiento académico y la equidad entre áreas urbanas y rurales."
            },
            {
                id: 46,
                question: "Según el texto, a partir de los ejemplos de expansión de fibra óptica, programas de dispositivos compartidos, capacitación docente y participación comunitaria, ¿qué principio general se puede inferir sobre la estrategia más eficaz para reducir la brecha digital en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe varias iniciativas (expansión de fibra óptica y radio enlace, bibliotecas digitales, programa FOTED y comités de padres) y concluye que solo mediante políticas integradas que incluyan infraestructura, equipamiento, capacitación y apoyo comunitario se podrá cerrar la brecha digital de manera sostenible."
            },
            {
                id: 47,
                question: "A partir de lo expuesto en el artículo, ¿qué consecuencia social general se puede inferir de la implementación de soluciones integrales de conectividad digital en las zonas rurales de Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo concluye que una educación digital inclusiva, basada en infraestructura, formación docente 23 y participación comunitaria, no solo mejora los resultados académicos, sino que también potencia la capacidad de los jóvenes bolivianos para participar activamente en la sociedad del conocimiento, lo que refleja una mayor equidad educativa y consecuencias sociales positivas."
            },
            {
                id: 48,
                question: "El artículo señala que, tras la capacitación docente en tecnologías educativas que elevó la confianza de los profesores en un 30%, ¿qué consecuencia podría deducirse en la práctica pedagógica de las clases híbridas?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El Programa de Formación Docente en Tecnologías Educativas (FOTED), más de 3 500 docentes reportaron una mejora del 30% en su confianza para usar plataformas de aprendizaje y, como consecuencia, incrementaron la incorporación de actividades interactivas en sus clases (UMSA, 2024). Esta relación de causa efecto es implícita: mayor confianza docente lleva a un uso más activo de recursos interactivos."
            },
            {
                id: 49,
                question: "El artículo señala que la expansión de fibra óptica y los programas de dispositivos compartidos buscan reducir la brecha digital. Según la información del texto, ¿cuál de estos enfoques muestra un impacto más inmediato en la participación de los estudiantes en actividades digitales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe que las bibliotecas digitales y los proyectos de dispositivos compartidos han provocado mejoras rápidas: ConectaTi redujo la brecha de dispositivos en un 40% y la iniciativa ‘Escuelas Conectadas’ aumentó la frecuencia de uso de recursos digitales en un 55%. Estos datos indican un efecto inmediato en la participación estudiantil. En cambio, la expansión de fibra óptica, aunque esencial, se plantea como un proyecto a mediano plazo (instalar 1 200 km antes de 2025) y no se menciona un aumento rápido en la participación."
            },
            {
                id: 50,
                question: "Basándose en la información proporcionada, ¿qué perspectiva ambiental relevante no ha sido considerada en el análisis del autor sobre la educación digital en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo detalla la falta de infraestructura, la expansión de fibra óptica y el uso de radio enlace, así como programas de dispositivos y capacitación docente, pero no menciona ninguna evaluación de los efectos ecológicos de esas intervenciones, como posibles alteraciones de hábitats, deforestación o consumo energético asociado."
            },
            {
                id: 51,
                question: "El artículo señala que la brecha de conectividad afecta al rendimiento académico y propone soluciones integrales. Sin embargo, ¿qué perspectiva importante no se contempla en el análisis del autor?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque el artículo aborda infraestructura, dispositivos y capacitación docente, nunca menciona la inclusión de estudiantes con discapacidades ni la adaptación de las TIC para sus necesidades específicas. Los párrafos que describen los problemas y las soluciones se centran en la geografía, la falta de equipos y la preparación docente, pero omiten cualquier referencia a la accesibilidad universal o a barreras específicas que enfrentan los alumnos con discapacidades. 24 Repositorio de"
            },
        ]
    },
    {
        component: "COMPRENSIÓN LECTORA",
        title: "forestal disminuyó de 4,9 millones de hectáreas",
        text: "forestal disminuyó de 4,9 millones de hectáreas en 1900 a 3,9 millones en 1960, una reducción del 20% en poco más de un siglo (INE, 2021). 3. Industrialización y políticas de desarrollo en el siglo XX",
        fullText: `forestal disminuyó de 4,9 millones de hectáreas en 1900 a 3,9 millones en 1960, una reducción del 20% en poco más de un siglo (INE, 2021). 3. Industrialización y políticas de desarrollo en el siglo XX A partir de la década de 1960, el Estado boliviano implementó planes de desarrollo que favorecían la expansión de la agricultura comercial, particularmente la soja y el maíz de alto rendimiento. La construcción de la carretera Cochabamba‑Santa Cruz, finalizada en 1978, abrió vastas áreas del bosque subtropical a la colonización de campesinos y empresas agroindustriales. El uso de imágenes satelitales del programa Landsat permitió cuantificar la aceleración de la deforestación: entre 1990 y 2005, la pérdida anual media fue de 32 000 ha, y la tasa se incrementó a 45 000 ha/año entre 2005 y 2020 (FAO, 2022). Esta expansión agrícola se ha asociado a cambios climáticos locales. El modelo de balance energético muestra que la reducción del albedo (reflectancia de la superficie) y la pérdida de la transpiración vegetal disminuyen el flujo de energía latente, aumentando la temperatura de la superficie. En forma simplificada, la energía neta Q se expresa como Q=Rn–G–H–LE, donde Rn es la radiación neta, G el flujo de calor al suelo, H el calor sensible y LE el calor latente (transpiración). La disminución de LE al perderse los bosques eleva H y, por ende, la temperatura del aire (Gomez et al., 2020). 4. Impactos climáticos y retroalimentaciones El incremento de la temperatura media en la zona andina de Bolivia se ha registrado en 0,6 °C entre 1990 y 2020 (Servicio Nacional de Meteorología e Hidrología – SENAMHI, 2023). Simultáneamente, la variabilidad de las precipitaciones ha aumentado, con periodos de sequía más intensos que afectan la disponibilidad de agua para la agricultura y la generación hidroeléctrica. La pérdida de bosque reduce la capacidad de retención de agua en el suelo, amplificando los efectos de la sequía. Una retroalimentación clave es el aumento de las emisiones de CO₂ provenientes de la quema forestal. Según la base de datos Global Fire Emissions Database (GFED), Bolivia emitió aproximadamente 12 MtCO₂ al año entre 2000 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional y 2015 como resultado de incendios y quema de residuos agrícolas. Estas emisiones, a su vez, intensifican el calentamiento global y potencian la frecuencia de incendios, creando un círculo vicioso. 5. Respuestas actuales y perspectivas de gestión En los últimos años, el gobierno boliviano, junto a organizaciones no gubernamentales y comunidades indígenas, ha promovido iniciativas de restauración forestal y pagos por servicios ambientales (PSA). El programa Biodiversidad Andina (2020‑2024) ha sembrado 3,5 millones de árboles nativos en áreas degradadas de los Yungas, con la participación activa de campesinos que reviven prácticas agroforestales tradicionales. Los conocimientos ancestrales, como la rotación de cultivos y la gestión comunitaria de recursos forestales, ofrecen modelos resilientes frente al cambio climático. Integrar estos saberes con tecnologías de monitoreo satelital permite una gestión adaptativa: los datos de sensores térmicos identifican zonas con mayor estrés hídrico, mientras que la ciencia del suelo orienta la selección de especies nativas con alta tolerancia a la sequía. Conclusiones La deforestación en los Andes bolivianos es un proceso con profundas raíces históricas que ha evolucionado desde manejos forestales sostenibles en la época precolombina hasta la explotación intensiva de recursos naturales en la era moderna. Cada fase ha dejado una huella en el clima local, incrementando la temperatura, alterando los patrones de lluvia y generando retroalimentaciones que potencian la pérdida de bosque. Sin embargo, la existencia de saberes tradicionales y la creciente implementación de políticas de restauración ofrecen caminos viables para mitigar estos efectos. Un enfoque que combine la historia del uso del suelo, la ciencia climática y la participación comunitaria será esencial para lograr la conservación de los bosques andinos y la estabilidad climática de la región. Texto diseñado con fines evaluativos para medir la comprensión lectora, mediante la reproducción de características propias de textos académicos. Pregunta 1: Según el artículo, ¿cuál fue la reducción porcentual de la superficie forestal entre 1900 y 1960 y cómo se compara con la pérdida de cobertura forestal entre 1990 y 2020? Sustento El párrafo sobre la colonización española indica que la superficie forestal pasó de 4,9 millones a 3,9 millones de hectáreas entre 1900 y 1960, lo que corresponde a una reducción del 20% (INE, 2021). En el resumen y la sección de impactos climáticos se menciona que la pérdida de cobertura forestal entre 1990 y 2020 fue de aproximadamente el 15% (datos satelitales). Pregunta 2: Del análisis presentado se desprende que, ¿cuáles son los problemas identificados que el ar`,
        questions: [
            {
                id: 52,
                question: "Si evaluamos el artículo leído, ¿podríamos sostener que la evidencia estadística proporcionada es suficiente para afirmar que la brecha de conectividad es la causa principal del bajo rendimiento académico en zonas rurales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque el artículo incluye datos relevantes (por ejemplo, el 33% de acceso en áreas rurales y el incremento del 12% en puntajes para quienes tienen conexión regular), dichos datos son descriptivos y correlacionales. No se presentan estudios longitudinales, experimentos controlados ni análisis multivariados que permitan aislar el efecto de la conectividad de otras variables como la preparación docente (solo el 27% de los docentes recibió capacitación) o la disponibilidad de dispositivos (38% de escuelas rurales carecen de al menos un computador por cada veinte estudiantes). Por tanto, la evidencia no permite establecer una relación causal directa."
            },
            {
                id: 53,
                question: "A partir de lo expuesto en el artículo, ¿cuáles son las principales implicaciones sociales de la brecha de conectividad descrita, considerando los datos de acceso a internet en áreas urbanas y rurales y su relación con el rendimiento académico?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que en 2023 sólo el 33% de los hogares rurales tenían acceso a internet frente al 71% urbano, y que los estudiantes con conexión regular obtuvieron un aumento del 12% en sus puntajes de matemática y lectura. Esta disparidad se traduce en una brecha de aprendizaje que, según la conclusión, amenaza la igualdad de oportunidades y perpetúa desigualdades socio económicas."
            },
            {
                id: 54,
                question: "El artículo señala que la inversión en infraestructura de conectividad digital en zonas rurales tendrá un retorno económico inmediato gracias al aumento del 12% en los puntajes académicos y al ahorro del 15% en el costo por kilómetro de fibra óptica. ¿Qué tan válido es este argumento según la evidencia presentada?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el apartado de “Panorama de la conectividad y su impacto en el aprendizaje”, el artículo menciona un aumento del 12% en puntajes de matemática y lectura para estudiantes con acceso regular a internet, y en la sección de “Expansión de infraestructura” indica que el costo promedio por kilómetro de fibra óptica se redujo en un 15% respecto a estimaciones previas. Sin embargo, en ningún momento se establece un vínculo causal directo entre esas mejoras y un retorno económico inmediato; ni se presentan indicios de ahorro financiero a nivel macro ni estudios de coste beneficio que sustenten la afirmación. Por ello, el argumento es débil, pues carece de evidencia que respalde la conclusión económica."
            },
            {
                id: 55,
                question: "La lectura del texto permite identificar que el argumento del autor, según el cual la expansión de la fibra óptica es la solución más eficaz para reducir la brecha digital en áreas rurales, es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo reconoce la expansión de la fibra óptica como una pieza central del Programa Nacional de Conectividad Rural (PNCR) y, al mismo tiempo, menciona que en áreas de difícil acceso se complementa con radio enlace de corto alcance, mostrando una estrategia combinada. Esto respalda la validez del argumento del autor al evidenciar que la solución propuesta no se limita a la fibra óptica aislada, sino que se apoya en un enfoque integral. 25"
            },
            {
                id: 56,
                question: "Basándose en la información proporcionada, ¿cuál de las siguientes afirmaciones refleja mejor la perspectiva futura del artículo respecto a la combinación de acciones necesarias para reducir la brecha digital, en contraste con la visión simplista de que solo la infraestructura tecnológica resolvería el problema?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto concluye que “las políticas públicas adopten un enfoque sistémico que considere simultáneamente la inversión en infraestructura, la formación continua de los docentes y la creación de entornos de aprendizaje colaborativos” y describe soluciones emergentes que incluyen expansión de fibra óptica, bibliotecas digitales y programas de capacitación docente, además de la participación comunitaria (secciones de Soluciones emergentes y Conclusiones)."
            },
            {
                id: 57,
                question: "Considerando lo mencionado en el texto, ¿cómo se podría adaptar la estrategia de bibliotecas digitales a un contexto urbano de alta densidad en Bolivia para reducir la brecha de conectividad?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo enfatiza que la reducción eficaz de la brecha digital en Bolivia requiere un enfoque sistémico que incluya (i) expansión de infraestructura de fibra óptica, (ii) programas de dispositivos compartidos como ‘bibliotecas digitales’, (iii) capacitación docente continua y (iv) participación comunitaria. En la sección de Soluciones emergentes se describe cómo la combinación de estos cuatro pilares ha generado resultados positivos tanto en áreas rurales como en proyectos piloto. Por lo tanto, al trasladar la estrategia a un entorno urbano de alta densidad, la solución más adecuada es replicar esa integración, no limitarse solo a la infraestructura, a la capacitación o a la donación individual de equipos."
            },
            {
                id: 58,
                question: "Basándose en la información proporcionada, ¿cuáles son las principales implicaciones éticas y sociales que los distintos actores (gobierno, docentes, comunidad y sector privado) deben considerar al implementar las soluciones de educación digital descritas en el artículo?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El gobierno debe evitar la concentración de la fibra óptica en zonas ya conectadas (ATT, 2022) para no ampliar la brecha; los docentes requieren capacitación (FOTED, 2024) para no reproducir desigualdades pedagógicas; la comunidad debe participar en la gestión de centros de dispositivos compartidos (Escuelas Conectadas, Potosí) para evitar dependencia externa; y el sector privado, al suministrar telecomunicaciones y equipos, debe proteger la privacidad de los datos y ofrecer condiciones justas, de lo contrario se profundizaría la brecha digital. 26 Repositorio de"
            },
            {
                id: 59,
                question: "A partir de lo expuesto en el artículo, ¿cómo define el concepto de acceso dial up?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe el acceso dial up a la forma cómo “utilizaban la línea telefónica convencional para conectar a Internet a velocidades de 56 kbps”."
            },
            {
                id: 60,
                question: "Considerando lo mencionado en el texto, ¿cuáles son los sectores que se indican como beneficiados por la expansión del Internet en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala explícitamente que el acceso generalizado a Internet ha transformado la educación (plataformas de aprendizaje virtual, clases a distancia), ha impulsado el comercio electrónico (tiendas virtuales como ‘Tiendas del Valle’ y Billetera Móvil) y ha mejorado la salud mediante la telemedicina y futuros servicios 5G."
            },
            {
                id: 61,
                question: "A partir de lo expuesto en el artículo, ¿cuáles son las implicaciones económicas asociadas a la expansión de la banda ancha y la fibra óptica entre 2006 y 2015?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "“Expansión de la banda ancha y fibra óptica (2006 2015)” se indica que el proyecto ‘Red de Información Boliviana’ contó con una inversión estimada de 350 millones de dólares, que los precios de los planes de 10 Mbps se redujeron a aproximadamente 15 dólares mensuales y que la banda ancha favoreció el auge del comercio electrónico, con la aparición de tiendas virtuales locales como ‘Tiendas del Valle’."
            },
            {
                id: 62,
                question: "Basándose en la información proporcionada, ¿cuál es la tercera etapa de la conectividad descrita en la evolución del Internet en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo, enumera tres subetapas cronológicas: 2.1 era dial up (1995 2005), 2.2 expansión de banda ancha y fibra óptica (2006 2015) y 2.3 convergencia móvil, 4G y la llegada de 5G."
            },
            {
                id: 63,
                question: "La lectura del texto permite identificar que el orden cronológico de los principales actores que lideraron cada fase de la conectividad en Bolivia es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que primero, en 1995, la Universidad Mayor de San Andrés (UMSA) estableció la primera conexión satelital permanente. Luego, a partir de 2006, el gobierno boliviano lanzó el proyecto ‘Red de Información Boliviana’ (RIB) para instalar fibra óptica. En 2016, la empresa estatal Entel introdujo la red 4G LTE. Finalmente, en 2022, la empresa Viva Bolivia anunció la prueba piloto de 5G."
            },
            {
                id: 64,
                question: "Según el artículo, ¿qué porcentaje de la población boliviana se espera que tenga acceso a redes 5G para finales de 2024?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para finales de 2024, según el artículo, se espera que el 20% de la población tenga acceso a 5G”. Ninguna de las demás cifras (15%, 25% o 30%) aparece en el artículo; esas cifras son distractores plausibles derivados de otros porcentajes mencionados (por ejemplo, 12% de penetración rural en 2015 o 38% de hogares urbanos en 2015), pero no corresponden al dato solicitado sobre la proyección de acceso a 5G en 2024. 29"
            },
            {
                id: 65,
                question: "El artículo señala que la expansión de la fibra óptica y la llegada de 5G han mejorado la conectividad, pero persiste una brecha digital entre zonas urbanas y rurales; ¿qué principio general se puede extraer sobre el rol de la infraestructura tecnológica en la inclusión digital?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la instalación de fibra óptica (2006-2015) aumentó la cobertura urbana al 60% y redujo precios, y que la implementación de 5G está prevista para zonas estratégicas, pero aun así el artículo señala que en 2023 el 68% de los hogares rurales carecen de acceso fijo. Además, en la sección de desafíos se propone incentivar inversión privada y subsidios como políticas de apoyo para cerrar la brecha."
            },
            {
                id: 66,
                question: "El artículo señala que la diferencia porcentual en la penetración de Internet entre hogares urbanos y rurales cambió entre 2003 y 2015; ¿cuál de las siguientes afirmaciones describe mejor esa evolución?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En 2003, según el texto, el 5% de los hogares urbanos tenía acceso y menos del 1% de los rurales (aprox. 0,8%), lo que implica una diferencia de unos 4 puntos porcentuales. En 2015, la penetración era del 38% en zonas urbanas y del 12% en rurales, lo que genera una diferencia de 26 puntos. La variación entre ambas fechas es de aproximadamente 22 puntos porcentuales, mostrando un aumento de la brecha."
            },
            {
                id: 67,
                question: "A partir de lo expuesto en el artículo, ¿qué efecto se puede deducir de la implementación del proyecto “Red de Información Boliviana” (2006-2015) sobre la penetración de Internet en los hogares urbanos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Antes de la fase de expansión de banda ancha, en 2003 solo el 5% de los hogares urbanos tenían acceso a Internet. Tras el lanzamiento del proyecto “Red de Información Boliviana” en 2006, que instaló fibra óptica en los corredores urbanos, la penetración aumentó hasta el 38% en 2015. Este incremento refleja el efecto de la infraestructura de fibra óptica y la reducción de precios de los planes de 10 Mbps a aproximadamente 15 dólares mensuales."
            },
            {
                id: 68,
                question: "Considerando lo mencionado en el texto, ¿cuál es el mensaje principal implícito del autor respecto a las soluciones para cerrar la brecha digital en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección de “Desafíos futuros” y en la propuesta de cierre de la brecha digital, el autor señala explícitamente la necesidad de (i) incentivar la inversión privada mediante subsidios, (ii) promover la capacitación digital en escuelas y comunidades, y (iii) crear un fondo nacional para la expansión de la conectividad en zonas rurales, todo ello bajo una cooperación multisectorial entre gobierno, academia y sector privado. Estas tres líneas de acción aparecen combinadas en el párrafo que propone una combinación de políticas para reducir la brecha."
            },
            {
                id: 69,
                question: "Basándose en la información proporcionada, ¿qué principio general se desprende de las soluciones propuestas para cerrar la brecha digital en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo, en la sección de propuestas, sugiere combinar subsidios, incentivar la inversión privada y crear un fondo nacional, todo ello dentro de una estrategia de colaboración entre gobierno, academia y sector privado para expandir la conectividad en zonas rurales. 30 Repositorio de"
            },
            {
                id: 70,
                question: "Considerando lo mencionado en el texto, ¿cuál es la idea principal implícita que el autor desea transmitir sobre la evolución del Internet en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque se ha pasado de un enlace satelital de 64 kbps en 1995 a pruebas piloto de 5G en 2022, la brecha digital sigue siendo marcada: el INE reporta que en 2023 el 68% de los hogares rurales carecen de acceso fijo y la penetración rural de Internet es mucho menor que la urbana. Además, en la sección de desafíos futuros se propone una combinación de subsidios, capacitación y fondos nacionales para cerrar esa brecha, evidenciando la necesidad de políticas integradas y mayor inversión."
            },
            {
                id: 71,
                question: "A partir de lo expuesto en el artículo, ¿cuál es la propuesta central del autor para reducir la brecha digital entre zonas urbanas y rurales en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "“Para cerrar la brecha” el autor propone específicamente una combinación de políticas: subsidios a la inversión privada, capacitación digital y un fondo nacional dirigido a zonas rurales. Estas medidas aparecen como la estrategia integral para disminuir la desigualdad de acceso."
            },
            {
                id: 72,
                question: "Basándose en la información proporcionada, ¿qué es probable que ocurra en los próximos cinco años respecto a la cobertura de internet en áreas rurales de Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que, al cierre de 2024, se espera que el 20% de la población nacional tenga acceso a 5G, prioritariamente en zonas estratégicas de desarrollo económico, y que en 2023 el 68% de los hogares rurales carecían de acceso fijo a Internet. Además, se proponen políticas de subsidios e inversión en fibra óptica para reducir la brecha digital."
            },
            {
                id: 73,
                question: "De acuerdo con el texto, ¿cuál de las siguientes consecuencias es la más probable como resultado de la instalación de fibra óptica en los principales corredores urbanos entre 2006 y 2015?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que, antes de la expansión de la fibra, en 2003 solo el 5% de los hogares urbanos tenía acceso a Internet (fase dial up). Con el proyecto “Red de Información Boliviana” iniciado en 2006, para 2012 la cobertura de fibra óptica alcanzó el 60% de la población urbana y los precios de los planes de 10 Mbps se redujeron a aproximadamente 15 dólares mensuales. Como consecuencia directa de esta mejora de infraestructura y costo, la penetración en hogares urbanos subió al 38% en 2015."
            },
            {
                id: 74,
                question: "¿Qué puede deducirse del texto respecto a la estrategia de expansión implementada por la empresa estatal Entel a través de la red 4G LTE?.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Entel lanzó la red 4G LTE en 2016, proporcionando velocidades comparables a la banda ancha fija y mejorando la infraestructura móvil en áreas urbanas (párrafo 2.3). Más adelante, menciona que en 2022 Bolivia licitó el espectro 3.5 GHz y que Viva Bolivia anunció una prueba piloto de 5G en Puerto Suárez, aprovechando la infraestructura móvil existente. Aunque no se afirma explícitamente, se puede inferir que la presencia previa de una red 4G robusta facilitó la implementación de la tecnología 5G, pues la evolución de 4G a 5G depende de la infraestructura ya desplegada. 31"
            },
            {
                id: 75,
                question: "El artículo señala que, considerando los datos estadísticos presentados, ¿cuál es el mensaje implícito principal respecto al desarrollo de la conectividad en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Pese a avances como la instalación de fibra óptica (cobertura del 60% urbano en 2012) y la prueba piloto de 5G en Puerto Suárez, aún persisten desigualdades: el INE reporta que en 2023 el 68% de los hogares rurales carecen de acceso fijo a Internet y la penetración rural es mucho menor que la urbana. Además, en la sección de desafíos futuros se propone incentivar inversión y crear fondos para cerrar la brecha, lo que evidencia el mensaje implícito de que se necesita política dirigida a la inclusión universal."
            },
            {
                id: 76,
                question: "El artículo señala que, a raíz de la expansión de la fibra óptica y la implementación de redes 4G/5G, se puede concluir que:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Tras la expansión de la fibra óptica (cobertura del 60% en áreas urbanas para 2012) y la llegada del 4G en 2016, la penetración urbana llegó al 38% en 2015, mientras que en zonas rurales solo alcanzó el 12% (párrafo 2.2). Además, en 2023 el 68% de los hogares rurales carecían de acceso fijo a Internet (sección 3). Estas cifras muestran que, pese a los avances tecnológicos, la brecha digital persiste."
            },
            {
                id: 77,
                question: "Considerando lo mencionado en el texto, ¿cuál es la idea principal implícita respecto a los resultados de la evolución del Internet en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe avances tecnológicos (4G, fibra óptica, pruebas de 5G) y sus efectos positivos en educación y salud, pero también señala cifras que revelan una brecha digital persistente (por ejemplo, 68% de hogares rurales sin acceso fijo en 2023) y concluye con propuestas de políticas públicas, subsidios y colaboración entre sector público, privado y académico para cerrar esa brecha."
            },
            {
                id: 78,
                question: "¿Qué puede deducirse de la expansión de la red 5G en zonas estratégicas como Puerto Suárez?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la prueba piloto de 5G en Puerto Suárez conecta hospitales y universidades y menciona que la implementación de 5G “abrirá la puerta a la cirugía a distancia y al uso de dispositivos de monitoreo en tiempo real”. De ahí se deduce que la expansión de 5G favorecerá la adopción de servicios de telemedicina avanzados en zonas que antes estaban aisladas."
            },
            {
                id: 79,
                question: "A partir de lo expuesto en el artículo, ¿qué principio general se puede inferir sobre el papel de los diferentes actores en la expansión de la conectividad en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La primera conexión en 1995 fue gestionada por la Universidad Mayor de San Andrés con apoyo de la OEA; el proyecto RIB (2006-2015) fue impulsado por el gobierno con financiamiento del BID; la red 4G fue lanzada por la empresa estatal Entel; la prueba piloto de 5G fue anunciada por Viva Bolivia; y en la sección de conclusiones se enfatiza la necesidad de cooperación entre instituciones académicas, gobierno y sector privado para cerrar la brecha digital. 32 Repositorio de"
            },
            {
                id: 80,
                question: "Según el artículo, la estimación de que el 20% de la población boliviana tendrá acceso a 5G para finales de 2024 debe evaluarse críticamente frente a la tendencia global de buscar una cobertura mayor del 50% en el mismo período; ¿cuál de las siguientes afirmaciones representa la valoración más adecuada de esta meta dentro del contexto boliviano?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para finales de 2024, se espera que el 20% de la población tenga acceso a 5G, concentrándose inicialmente en zonas estratégicas como Puerto Suárez donde se realizó la prueba piloto. Además, el texto menciona que la expansión de fibra óptica ya cubre gran parte de las áreas urbanas, lo que permite un despliegue complementario. Sin embargo, también se señala que en 2023 el 68% de los hogares rurales carecen de acceso fijo a Internet, evidenciando una brecha digital que sigue siendo un desafío; por ello la meta del 20% es un paso progresivo, no una cobertura total."
            },
            {
                id: 81,
                question: "El artículo señala que, según el INE, en 2023 el 68% de los hogares rurales carecen de acceso fijo a Internet. ¿Cuál de los siguientes posibles sesgos podría afectar la interpretación de este dato en el análisis del autor?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona el porcentaje del 68% de hogares rurales sin acceso fijo a Internet, pero no discute que muchos de esos hogares podrían estar usando Internet a través de conexiones móviles (3G/4G) que no requieren infraestructura fija. Esta ausencia constituye un sesgo de interpretación: equiparar la ausencia de acceso fijo con la ausencia total de conectividad."
            },
            {
                id: 82,
                question: "El artículo señala que la prueba piloto de 5G en Puerto Suárez conectó hospitales y universidades con aplicaciones de telemedicina y realidad aumentada. ¿Por qué es relevante esta información para la planificación de políticas públicas orientadas a reducir la brecha digital en zonas rurales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe la prueba piloto de 5G en Puerto Suárez que conectó hospitales y universidades con aplicaciones de telemedicina y realidad aumentada, y en la sección de desafíos se menciona la persistente brecha digital entre zonas urbanas y rurales. Evidenciar que 5G puede ofrecer servicios críticos (salud, educación) en zonas de difícil acceso justifica que las políticas públicas consideren la expansión de esta tecnología como una herramienta clave para reducir esa brecha."
            },
            {
                id: 83,
                question: "Del análisis presentado se desprende que la afirmación del autor de que la implementación del 5G eliminará la brecha digital entre áreas urbanas y rurales es válida.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que se espera que sólo el 20% de la población tenga acceso a 5G para finales de 2024, concentrado rurales carecen de acceso fijo a Internet en 2023. Además, se mencionan retos estructurales como la brecha digital y la necesidad de políticas de subsidios, lo que muestra que el argumento de que el 5G eliminará plenamente la brecha es insuficiente. en zonas estratégicas de desarrollo económico, mientras que el INE reporta que el 68% de los hogares. 33"
            },
            {
                id: 84,
                question: "A partir del análisis presentado respecto a las diferencias de acceso y uso del Internet entre distintos grupos de la población, ¿qué otro aspecto importante ha obviado el autor?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe la evolución tecnológica, la expansión urbana rural y los impactos en educación y salud, nunca menciona diferencias de acceso o uso entre hombres y mujeres. No se hace referencia a estudios de género ni a datos desagregados por sexo, lo que indica una omisión del sesgo de género."
            },
            {
                id: 85,
                question: "Basándose en la información proporcionada, ¿cuál de las siguientes afirmaciones describe mejor la viabilidad de la meta boliviana de que el 20% de la población tenga acceso a 5G para finales de 2024, considerando la actual brecha digital entre áreas urbanas y rurales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que para finales de 2024 se espera que el 20% de la población tenga acceso a 5G, “especialmente en zonas estratégicas de desarrollo económico” (sección 2.3). Asimismo, señala que el 68% de los hogares rurales carecen de acceso fijo a Internet (sección 3). Dado que la proyección del 5G está enfocada en áreas urbanas y estratégicas donde ya existen redes y la infraestructura es más robusta, la meta del 20% resulta plausible pese a la significativa brecha rural."
            },
            {
                id: 86,
                question: "Basándose en la información proporcionada, ¿cuál de las siguientes perspectivas futuras no es considerada por el autor al proponer políticas para cerrar la brecha digital en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque el autor propone varias medidas para reducir la brecha digital (subsidios a la inversión privada, capacitación digital en escuelas y comunidades, y un fondo nacional para expansión rural), en ningún apartado del artículo se menciona la inclusión explícita de la visión o necesidades de los pueblos indígenas. En la sección 3 se enlistan propuestas de política, pero todas giran en torno a incentivos económicos, capacitación y financiación, sin abordar aspectos culturales ni la participación de comunidades indígenas."
            },
            {
                id: 87,
                question: "Basándose en la información proporcionada, ¿qué combinación de medidas sería la más adecuada para reducir la brecha digital entre zonas rurales y urbanas en Bolivia en los próximos cinco años?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección de ‘Desafíos futuros’ el artículo propone una combinación de políticas: incentivar la inversión privada mediante subsidios, promover la capacitación digital y crear un fondo nacional para la expansión de conectividad en zonas rurales. Estas medidas responden a los datos que indican que, según el INE (2023), el 68% de los hogares rurales carecen de acceso fijo a Internet, y que la brecha permanece significativa pese a la expansión de fibra óptica y 5G en áreas urbanas. 34 Repositorio de"
            },
            {
                id: 88,
                question: "Según el artículo, la estimación de que el 20% de la población boliviana tendrá acceso a 5G para finales de 2024 debe evaluarse críticamente frente a la tendencia global de buscar una cobertura mayor del 50% en el mismo período; ¿cuál de las siguientes afirmaciones representa la valoración más adecuada de esta meta dentro del contexto boliviano?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para finales de 2024, se espera que el 20% de la población tenga acceso a 5G, concentrándose inicialmente en zonas estratégicas como Puerto Suárez donde se realizó la prueba piloto. Además, el texto menciona que la expansión de fibra óptica ya cubre gran parte de las áreas urbanas, lo que permite un despliegue complementario. Sin embargo, también se señala que en 2023 el 68% de los hogares rurales carecen de acceso fijo a Internet, evidenciando una brecha digital que sigue siendo un desafío; por ello la meta del 20% es un paso progresivo, no una cobertura total. 35 Impacto de la digitalización y las redes sociales en la participación política de los jóvenes bolivianos Resumen El presente artículo examina cómo la expansión de la digitalización y el uso masivo de redes sociales están transformando la participación política de los jóvenes entre 17 y 19 años en Bolivia. A partir de datos de la Encuesta Nacional de Jóvenes 2022 y de estudios recientes en América Latina, se analizan tres dimensiones principales: la información política disponible en línea, la movilización a través de plataformas digitales y el surgimiento de nuevas formas de expresión ciudadana como los “hashtags” de protesta. El análisis muestra que, aunque el acceso a dispositivos móviles ha aumentado significativamente (el 89% de los jóvenes bolivianos posee un smartphone), la calidad de la participación política sigue variando según factores como la ubicación geográfica, el nivel educativo y la confianza institucional. Se discuten los riesgos de la desinformación y se proponen medidas de alfabetización digital dirigidas a instituciones educativas y organizaciones de la sociedad civil. El artículo concluye que la digitalización ofrece una oportunidad histórica para revitalizar la democracia, siempre que se acompañe de políticas que promuevan el pensamiento crítico y la inclusión digital. Introducción En los últimos diez años la Bolivia digital ha experimentado una penetración sin precedente"
            },
            {
                id: 89,
                question: "Basándose en la información proporcionada, ¿cuál es la consecuencia social inmediata que tuvo la campaña del hashtag #ReformaEducativa2022 descrita en el artículo?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Movilización a través de plataformas digitales” del artículo se indica que el hashtag #ReformaEducativa2022 alcanzó más de 250000 interacciones y que la convocatoria resultó en una marcha en la Plaza Murillo con más de 5000 participantes."
            },
            {
                id: 90,
                question: "De acuerdo con el texto, ¿cuál es la diferencia porcentual entre el porcentaje de jóvenes que se sienten capaces de distinguir noticias reales en el Departamento de La Paz y el porcentaje de los jóvenes que lo hacen en Potosí?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El 76% de los jóvenes de La Paz declara sentirse capaz de distinguir noticias reales, mientras que en Potosí esa cifra es del 54% (párrafo de ‘Acceso a la información política y alfabetización digital’). La diferencia es 76% − 54% = 22 puntos porcentuales."
            },
            {
                id: 91,
                question: "La lectura del texto permite identificar que, según la teoría del “Efecto de Red” citada en el apartado de movilización digital, ¿cuál es el segundo mecanismo que se menciona para explicar cómo las redes sociales favorecen la organización de protestas?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El segundo mecanismo es la retroalimentación instantánea (likes, retweets) que refuerza la percepción de apoyo social."
            },
            {
                id: 92,
                question: "El artículo señala que, comparando el porcentaje nacional de jóvenes que poseen un smartphone con el porcentaje de jóvenes en Potosí que se declaran capaces de distinguir noticias reales de falsas, ¿cuál es la diferencia porcentual entre ambos valores?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según el texto, el 89% de los jóvenes bolivianos posee un smartphone (párrafo de Acceso a la información) y que en Potosí solo el 54% se siente capaz de distinguir noticias reales de falsas (tabla de la Encuesta Nacional de Jóvenes, 2022). La diferencia entre ambos porcentajes es 89% - 54% = 35%. Las otras opciones (33%, 41%, 30%) no corresponden a la resta exacta de los valores proporcionados y, por lo tanto, son distractores plausibles pero incorrectos."
            },
            {
                id: 93,
                question: "A consecuencia del análisis presentado, ¿cómo define el artículo el concepto de participación simbólica?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo define la participación simbólica como “la expresión de opiniones y valores sin necesariamente traducirse en acción concreta” (sección ‘Nuevas formas de expresión y participación simbólica’)."
            },
            {
                id: 94,
                question: "Del análisis presentado se desprende que, según el artículo, ¿cómo se define el concepto de alfabetización digital?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo define la alfabetización digital como “la capacidad de buscar, evaluar y utilizar la información digital de forma responsable” (UNESCO, 2022). Esta definición aparece explícitamente en la sección 1 del Desarrollo. 38 Repositorio de"
            },
            {
                id: 95,
                question: "Del análisis presentado se desprende que la efectividad de la participación política de los jóvenes bolivianos depende principalmente de:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que, aunque el 89% de los jóvenes posee un smartphone, la alfabetización digital sigue siendo desigual y es clave para evitar la apatía política (sección 1). Además, las conclusiones recomiendan implementar programas de alfabetización digital en todos los niveles escolares para que los jóvenes puedan evaluar críticamente la información y participar de forma efectiva."
            },
            {
                id: 96,
                question: "La lectura del texto permite identificar que, al comparar el proyecto “Voces del Chaco” con la campaña Reforma Educativa 2022, ¿cuál es la diferencia principal en el uso de los medios digitales para la participación política de los jóvenes en temas ambientales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe que “Voces del Chaco” consiste en una serie de podcasts compartidos en Instagram que generan debates sobre conservación ambiental y justicia social, es decir, una forma de participación simbólica centrada en temas ambientales. En contraste, la campaña #ReformaEducativa2022 se menciona como un caso de movilización digital donde un hashtag en Twitter y TikTok organizó una marcha presencial de más de 5000 personas."
            },
            {
                id: 97,
                question: "Del análisis presentado se desprende que, en comparación con la movilización física derivada del hashtag #ReformaEducativa2022, la iniciativa “Voces del Chaco” se caracteriza principalmente por:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe a “Voces del Chaco” como una serie de podcasts que generan debates y expresan opiniones de forma creativa, es decir, una forma de participación simbólica que no se traduce necesariamente en acciones presenciales, a diferencia del caso del hashtag #ReformaEducativa2022, cuya movilización digital resultó en una marcha con más de 5000 personas."
            },
            {
                id: 98,
                question: "Del análisis presentado se desprende que, debido al bajo costo de la participación digital descrito en la movilización #ReformaEducativa2022, es probable que:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La digitalización permite una movilización rápida y de bajo costo (párrafo de movilización digital) y que, para que el impacto sea positivo, se requieren políticas que fomenten la transparencia y la infraestructura digital (conclusiones). De manera implícita, el bajo costo de participar genera mayor presión de los jóvenes para que el Estado invierta en infraestructura digital, lo cual puede traducirse en beneficios económicos al ampliar el acceso a información y herramientas digitales."
            },
            {
                id: 99,
                question: "Considerando lo mencionado en el texto, ¿cómo se diferencian los efectos de la digitalización en la movilización política de los jóvenes en la Universidad Mayor de San Andrés (UMSA) y en la región del Beni?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto, el caso de la UMSA mostró una movilización rápida y masiva con el hashtag #ReformaEducativa2022, alcanzando más de 250.000 interacciones y una marcha de 5,000 personas, lo que ejemplifica el “efecto de red” descrito. En la región del Beni, por otro lado, el artículo indica que grupos rivales usaron WhatsApp para difundir mensajes polarizadores que dificultan la construcción de consensos, generando fragmentación y limitando la movilización colectiva. 39"
            },
            {
                id: 100,
                question: "El artículo señala que, al comparar la movilización a través de plataformas digitales con la expresión simbólica en redes sociales, la consecuencia social más distintiva para la participación política juvenil es que:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe que la movilización a través de plataformas digitales, como el caso del hashtag #ReformaEducativa2022, llevó a una protesta física con más de 5 000 personas, lo que demuestra una traducción de la actividad en línea a acción colectiva concreta. Por otro lado, en la sección de “Nuevas formas de expresión y participación simbólica” se indica que los memes, videos y podcasts fomentan el sentido de pertenencia y habilidades de comunicación, pero señala que “la medida en que estas actividades se traducen en cambios políticos concretos sigue siendo objeto de investigación”, lo que implica que su consecuencia principal es simbólica más que accionable."
            },
            {
                id: 101,
                question: "Basándose en la información proporcionada, ¿cuál es la conclusión más probable sobre el efecto histórico de la expansión digital en la participación política de los jóvenes bolivianos entre 2013 y 2022?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que el acceso a Internet en hogares pasó del 34% en 2013 al 71% en 2022 y que el 89% de los jóvenes posee un smartphone, evidenciando una expansión tecnológica importante. Sin embargo, la calidad de la participación varía: en La Paz el 76% de los jóvenes se siente capaz de distinguir noticias reales de falsas, mientras que en Potosí esa cifra es solo 54%. Además, la exposición a “fake news” está asociada a una reducción del 12% en la probabilidad de votar. Estos datos demuestran que, aunque haya más dispositivos y mayor conectividad, la participación política mejora sustancialmente solo donde la alfabetización digital se ha reforzado, lo que lleva a la conclusión de que la expansión digital por sí sola no asegura un aumento generalizado de la participación."
            },
        ]
    },
    {
        component: "COMPRENSIÓN LECTORA",
        title: "En la sección “Industrialización y políticas de desarrollo en el siglo XX” se describe el modelo de balance energético:",
        text: "Sustento En la sección “Industrialización y políticas de desarrollo en el siglo XX” se describe el modelo de balance energético: “La reducción del albedo (reflectancia de la superficie) y la pérdida",
        fullText: `Sustento En la sección “Industrialización y políticas de desarrollo en el siglo XX” se describe el modelo de balance energético: “La reducción del albedo (reflectancia de la superficie) y la pérdida de la transpiración vegetal disminuyen el flujo de energía latente, aumentando la temperatura de la superficie”. El texto menciona primero la reducción del albedo como factor que desencadena la cadena de efectos que lleva al aumento de la temperatura. Pregunta 4: La lectura del texto permite identificar que, entre 1990 y 2020, la pérdida de cobertura forestal en los Andes bolivianos fue aproximadamente del 15% y el aumento de la temperatura media fue de 0,6 °C. Sustento Los datos explícitos del artículo indican que la pérdida de cobertura forestal entre 1990 y 2020 fue de aproximadamente 15%, y en la sección “Impactos climáticos y retroalimentaciones” se reporta un incremento de la temperatura media de 0,6 °C para el mismo período. Pregunta 5: A partir de lo expuesto en el artículo, ¿qué proceso técnico se ve incrementado directamente por la reducción del calor latente (LE) tras la pérdida de bosques, contribuyendo al aumento de la temperatura del aire? Sustento La disminución del LE al perderse los bosques eleva el H y, por ende, la temperatura del aire” (Gómez et al., 2020). Esto muestra que la reducción del calor latente provoca un aumento del calor sensible, que es el proceso técnico directamente involucrado en el calentamiento del aire. Pregunta 6: Del análisis presentado se desprende que, ¿cuál de los siguientes conjuntos de actores se menciona en el artículo como participantes tanto en la causa histórica de la deforestación como en las respuestas actuales al problema? Sustento El artículo menciona explícitamente a los pueblos originarios (Aymara y Guaraní) en la sección “Los Andes antes del contacto europeo”, a los colonizadores españoles en “La colonización española y la expansión agropecuaria”, al gobierno boliviano en “Industrialización y políticas de desarrollo en el siglo XX” y en “Respuestas actuales y perspectivas de gestión”, y a organizaciones no gubernamentales y comunidades indígenas en los mismos últimos párrafos donde se describen iniciativas de restauración forestal y pagos por servicios ambientales. Pregunta 7: A partir de lo expuesto en el artículo, ¿cuál de las siguientes afirmaciones compara mejor el impacto de la expansión agropecuaria durante la colonización española con el de la expansión agrícola comercial del siglo XX sobre el aumento de la temperatura local? Sustento El artículo indica que la expansión agrícola del siglo XX aceleró la deforestación (de 32 000 ha/año a 45 000 ha/ año entre 1990‑2020) y está vinculada a una disminución del flujo de calor latente (LE), lo que eleva la temperatura del aire. En cambio, la colonización española del siglo XVI provocó deforestación para minería y pastoreo, pero a una escala mucho menor y sin mencionar efectos directos sobre la temperatura; su impacto climático se describió como indirecto y menos pronunciado. Por lo tanto, la comparación que atribuye un mayor incremento térmico a la expansión agrícola del siglo XX es la que mejor refleja la información dispersa del texto.`,
        questions: [
            {
                id: 102,
                question: "A partir de lo expuesto en el artículo, ¿cuál es la perspectiva futura que el autor sugiere para potenciar la participación política de los jóvenes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección de conclusiones el autor propone tres líneas de acción futuras: (1) programas de alfabetización digital en todos los niveles escolares, (2) políticas públicas que fomenten la transparencia y faciliten la participación online mediante plataformas seguras, y (3) apoyo a iniciativas de contenido juvenil que integren investigación académica con formatos digitales. Estas medidas buscan convertir la digitalización en una herramienta democratizadora."
            },
            {
                id: 103,
                question: "De acuerdo con el texto, ¿qué es probable que ocurra si la producción y difusión de contenidos juveniles sobre temas ambientales, como el proyecto “Voces del Chaco” se intensifica en las redes sociales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que el proyecto “Voces del Chaco” ha generado debates entre la comunidad académica y ONG, facilitando la inserción de la perspectiva juvenil en la agenda pública. Por lo tanto, ampliar la producción y difusión de contenidos similares plausiblemente reforzará esa inserción y ejercerá presión para que las instituciones consideren políticas de conservación. 40 Repositorio de"
            },
            {
                id: 104,
                question: "La lectura del texto permite identificar que, al comparar la campaña ReformaEducativa2022 conducida por la UMSA con el uso de WhatsApp en el Beni, la diferencia esencial radica en:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe que la campaña #ReformaEducativa2022, difundida mediante el hashtag en Twitter y TikTok, logró más de 250 000 interacciones y movilizó a más de 5 000 personas en una marcha, evidenciando una identificación colectiva y acción física. En contraste, el párrafo sobre el Beni señala que grupos rivales usan WhatsApp para difundir mensajes polarizadores que dificultan la construcción de consensos, indicando un efecto de fragmentación y polarización."
            },
            {
                id: 105,
                question: "De acuerdo con el texto, ¿qué principio general se puede extraer sobre la relación entre la digitalización y la participación política de los jóvenes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que, aunque el 89% de los jóvenes posee un smartphone y el 68% usa internet cotidianamente, la mera posesión no garantiza participación crítica; la alfabetización digital, definida como la capacidad de buscar, evaluar y usar información digital responsablemente, sigue siendo desigual y se señala como factor clave para que la digitalización no se traduzca en apatía política (sección ‘Acceso a la información política y alfabetización digital’)."
            },
            {
                id: 106,
                question: "La lectura del texto permite identificar que, si se implementan a nivel nacional programas de alfabetización digital dirigidos a jóvenes de entre 17 y 19 años, es probable que…",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala que el 89% de los jóvenes poseía un smartphone, pero la alfabetización digital es desigual (76% en La Paz versus 54% en Potosí) y que la exposición a “fake news” está vinculada a una reducción del 12% en la probabilidad de votar (Rodríguez y Salazar, 2023). Asimismo, se recomienda implementar programas de alfabetización digital para mejorar la capacidad crítica. Por lo tanto, si dichos programas se extienden a nivel nacional, es razonable inferir que la habilidad de distinguir información falsa aumentará, lo que mitigará la caída del 12% en la intención de voto."
            },
            {
                id: 107,
                question: "Según el artículo, ¿qué es probable que ocurra si se implementan programas de alfabetización digital extensivos en todas las escuelas de Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo subraya que la alfabetización digital es clave para que la digitalización no conduzca a apatía política; menciona que la exposición a “fake news” reduce la intención de voto en un 12% y que mejorar la capacidad de evaluar la veracidad de la información debería revertir esa tendencia, incrementando la participación electoral."
            },
            {
                id: 108,
                question: "Basándose en la información proporcionada, ¿qué principio general puede inferirse sobre el papel de los jóvenes bolivianos como actores en la participación política digital?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo muestra dos casos específicos: la movilización de estudiantes de la UMSA mediante el hashtag #ReformaEducativa2022, que evidencia la capacidad de los jóvenes para organizar protestas masivas, y el proyecto “Voces del Chaco”, que ilustra la generación de contenido simbólico (podcasts) que inserta sus perspectivas en la agenda pública. Ambos ejemplos confirman que los jóvenes actúan como catalizadores que coordinan acciones colectivas y crean discursos digitales. 41"
            },
            {
                id: 109,
                question: "Basándose en la información proporcionada, ¿qué diferencia económica se puede inferir entre la movilización digital de los jóvenes mediante hashtags y la exposición a noticias falsas en relación con su potencial efecto sobre la participación electoral?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe que el hashtag #ReformaEducativa2022 movilizó a más de 5000 personas y alcanzó 250000 interacciones, lo que evidencia una capacidad de generar participación política concreta; esa participación puede traducirse en una mayor influencia económica de los jóvenes al impactar decisiones de políticas públicas. En contraste, el artículo indica que la exposición a noticias falsas está vinculada a una reducción del 12% en la probabilidad de voto (Rodríguez y Salazar, 2023), lo que implica una menor capacidad de influir económicamente en los procesos electorales."
            },
            {
                id: 110,
                question: "Del análisis presentado se desprende que la principal fortaleza del enfoque metodológico del artículo radica en:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo utiliza estadísticas de la Encuesta Nacional de Jóvenes 2022 y del INE (por ejemplo, el 89% de jóvenes con smartphone) junto con casos de estudio concretos como la campaña #ReformaEducativa2022 de la UMSA y el proyecto “Voces del Chaco”. Esta mezcla de fuentes cuantitativas y cualitativas brinda triangulación y contextualiza los resultados."
            },
            {
                id: 111,
                question: "El artículo señala que la digitalización puede revitalizar la democracia boliviana siempre que se acompañe de políticas de alfabetización digital; ¿qué tan válido es este argumento según la información presentada?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección de conclusiones el autor afirma que la digitalización ofrece una oportunidad histórica para revitalizar la democracia, siempre que se acompañe de políticas que promuevan el pensamiento crítico y la alfabetización digital. Además, en el apartado sobre alfabetización digital se muestra que la capacidad de distinguir noticias reales de falsas está vinculada a una mayor intención de participar, lo que respalda la relación entre alfabetización y participación política."
            },
            {
                id: 112,
                question: "De acuerdo con el texto, ¿cuál de las siguientes limitaciones o sesgos no está contemplado en las soluciones propuestas por los autores?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo reconoce desigualdades en acceso a internet según la ubicación geográfica (párrafos de la introducción y desarrollo, sección 1), las tres líneas de acción propuestas en la conclusión se centran en alfabetización digital, transparencia institucional y apoyo a contenidos juveniles, sin mencionar medidas concretas para ampliar la infraestructura de conectividad en zonas rurales."
            },
            {
                id: 113,
                question: "De acuerdo con el texto, ¿qué tipo de evidencia sería más pertinente para reforzar la afirmación de que los programas de alfabetización digital aumentan la intención de voto entre los jóvenes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que la alfabetización digital es clave para que la digitalización no genere apatía política, pero la evidencia presentada es mayormente correlacional (por ejemplo, diferencias entre La Paz y Potosí). Para demostrar que los programas de alfabetización incrementan la intención de voto, se requeriría evidencia experimental que controle variables y mida cambios en la intención de voto antes y después de la intervención. 42 Repositorio de"
            },
            {
                id: 114,
                question: "De acuerdo con el texto, ¿por qué es relevante implementar programas de alfabetización digital en las escuelas bolivianas para mejorar la participación política de los jóvenes?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala que, aunque el 89% de los jóvenes posee smartphone, la alfabetización digital sigue siendo desigual (76% en La Paz vs 54% en Potosí) y que la exposición a noticias falsas reduce en un 12% la probabilidad de voto (Rodríguez y Salazar, 2023). Por lo tanto, programas educativos que desarrollen la capacidad de buscar, evaluar y usar información digital son esenciales para mitigar la desinformación y favorecer una participación política más informada y activa."
            },
            {
                id: 115,
                question: "Considerando lo mencionado en el texto, ¿qué sesgo económico está presente en el enfoque del autor al analizar la digitalización y la participación política de los jóvenes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que el 89% de los jóvenes posee un smartphone y menciona diferencias geográficas y educativas, no aborda explícitamente cómo la situación socio económica (ingresos familiares, capacidad de pago de planes de datos, etc.) afecta el acceso y la calidad de la participación digital. Esta omisión constituye un sesgo económico, ya que la capacidad de participar críticamente en entornos digitales depende también de recursos financieros que el texto no considera."
            },
            {
                id: 116,
                question: "Del análisis presentado se desprende que, en contraste con la concepción tradicional de que la defensa ambiental depende principalmente de acciones de campo, ¿qué afirma el artículo sobre el papel de iniciativas digitales como los podcasts ‘Voces del Chaco’ en la influencia de políticas medioambientales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección ‘Nuevas formas de expresión y participación simbólica’ se describe que el proyecto ‘Voces del Chaco’ ha generado debates y ha facilitado la inserción de la perspectiva juvenil en la agenda pública, pero el artículo también señala que la medida en que estas actividades se traduzcan en cambios políticos concretos sigue siendo objeto de investigación."
            },
            {
                id: 117,
                question: "A partir de lo expuesto en el artículo, ¿cuáles son las principales implicaciones éticas y sociales que deben considerarse al diseñar programas de alfabetización digital dirigidos a los jóvenes bolivianos para fortalecer su participación política?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo subraya que la digitalización solo favorece la participación política si se acompañan políticas de alfabetización digital que incluyan pensamiento crítico, inclusión digital y medidas contra la desinformación (párrafos sobre alfabetización digital y conclusiones). Además, señala la necesidad de reducir la brecha de acceso entre regiones como La Paz y Potosí y de proteger a los jóvenes de la manipulación de información."
            },
            {
                id: 118,
                question: "De acuerdo con el texto, ¿cuáles son las implicaciones éticas más relevantes de la desigualdad en alfabetización digital entre los jóvenes de La Paz y Potosí para la calidad de la participación política?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que en La Paz el 76% de los jóvenes se siente capaz de distinguir noticias reales de falsas, mientras que en Potosí esa cifra cae al 54%. Además, se menciona que la exposición a “fake news” está vinculada a una reducción del 12% en la probabilidad de votar (Rodríguez y Salazar, 2023). Esta combinación indica una vulnerabilidad ética: la falta de alfabetización digital expone a ciertos jóvenes a desinformación, lo que afecta su intención de participar y vulnera el principio de igualdad democrática. 43 Inteligencia artificial en la educación boliviana: oportunidades, retos y perspectivas científicas Resumen El rápido avance de la inteligencia artificial (IA) está transformando la manera en que se concibe la enseñanza y el aprendizaje en todo el mundo. En Bolivia, la incorporación de herramientas basadas en IA –desde tutores virtuales hasta sistemas de analítica de aprendizaje– ofrece la posibilidad de mejorar la calidad educativa, reducir brechas de acceso y personalizar la instrucción. Sin embargo, la adopción de estas tecnologías plantea desafíos técnicos, éticos y estructurales que deben abordarse con evidencia científica. El presente artículo revisa, de forma accesible para estudiantes de bachillerato, los fundamentos neurocientíficos que sustentan la personalización del aprendizaje, describe las principales aplicaciones de IA en entornos escolares bolivianos, y analiza los obstáculos de infraestructura, capacitación docente y privacidad de datos. Se incluyen datos estadísticos oficiales (INE, 2023) y estudios internacionales (UNESCO, 2022) para contextualizar la realidad local. Finalmente, se discuten líneas de investigación y políticas públicas que podrían orientar una integración responsable de la IA en la educación del país. Introducción En los últimos diez años, la IA ha pasado de ser una disciplina de nicho a una herramienta omnipresente en la vida cotidiana. Algoritmos de aprendizaje automático (machine learning) permiten que un"
            },
            {
                id: 119,
                question: "Según el artículo, ¿qué actor es mencionado primero como iniciador de la implementación de herramientas de IA en la educación boliviana?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo introduce primero al Ministerio de Educación como responsable del programa ‘Bolivia Aprende Digital’ (2022 2025), que incorpora plataformas de IA como Khan Academy y Microsoft Education. Los proyectos de la Universidad Católica Boliviana, la Universidad Autónoma Tomás Frías y la Universidad Mayor de San Andrés se describen posteriormente, por lo que no son los primeros actores mencionados."
            },
            {
                id: 120,
                question: "De acuerdo con el texto, ¿qué organismo proporciona la cifra del 38% de hogares rurales bolivianos con conexión a Internet de banda ancha?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según el Instituto Nacional de Estadística (INE, 2023), solo el 38% de los hogares rurales dispone de conexión a Internet de banda ancha. Las demás opciones son incorrectas: el Ministerio de Educación impulsa programas educativos, la UNESCO reporta datos a nivel regional y la UMSA participa en proyectos de realidad aumentada, pero ninguna de ellas es la fuente de la estadística mencionada."
            },
            {
                id: 121,
                question: "Basándose en la información proporcionada, ¿cuál es la segunda consecuencia social que se menciona respecto a la adopción de la IA en la educación boliviana?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La falta de competencias técnicas puede generar una dependencia excesiva del algoritmo, sin la capacidad de interpretar los resultados ni de intervenir cuando la IA sugiere una ruta pedagógica inadecuada. Este es el segundo efecto social mencionado después de la ‘ampliación de la desigualdad educativa’ (primera consecuencia). 46 Repositorio de"
            },
            {
                id: 122,
                question: "El artículo señala que los conceptos neurocientíficos clave para la personalización del aprendizaje son:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Dos conceptos resultan clave: plasticidad sináptica y carga cognitiva. Las demás opciones combinan términos que aparecen en el texto, pero nunca se presentan juntos como los dos conceptos clave; por ejemplo, “neuroplasticidad” y “memoria de trabajo” son conceptos relacionados, pero no citados como los dos esenciales, y “aprendizaje automático” y “inteligencia emocional” pertenecen a dominios diferentes al de los fundamentos neurocientíficos descritos."
            },
            {
                id: 123,
                question: "De acuerdo con el texto, ¿cuáles son los principales desafíos que se identifican para la integración de la IA en la educación boliviana?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección ‘Desafíos éticos, técnicos y estructurales en Bolivia’ el artículo enumera tres problemas principales: (1) Infraestructura y conectividad, (2) Capacitación docente y (3) Privacidad y sesgo algorítmico. Las demás opciones mezclan conceptos que aparecen en el texto (por ejemplo, privacidad y sesgo) con elementos que no se mencionan como desafíos específicos (como ‘falta de inversión’ o ‘alta tasa de deserción’), por lo que son distractores incorrectos."
            },
            {
                id: 124,
                question: "Según el artículo, ¿qué porcentaje de hogares rurales en Bolivia dispone de conexión a Internet de banda ancha?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que “solo el 38% de los hogares rurales dispone de conexión a Internet de banda ancha”. Las opciones 1, 2 y 3 corresponden a datos diferentes del artículo: 71% es el porcentaje de hogares urbanos con banda ancha, 22% es la proporción de docentes que ha recibido capacitación digital avanzada, y 84% es el porcentaje de estudiantes que reportó mejor comprensión tras usar realidad aumentada. Ninguno de esos valores se refiere a la conectividad de hogares rurales."
            },
            {
                id: 125,
                question: "El artículo señala que solo el 38% de los hogares rurales tiene conexión de banda ancha, mientras que el 71% de los urbanos sí la posee. ¿Qué consecuencia se puede deducir si esta diferencia de conectividad no se corrige al introducir herramientas de IA en la educación?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la brecha digital es significativa (38% de hogares rurales con banda ancha versus 71% en urbanos) y que esta disparidad limita la implementación uniforme de plataformas de IA, pudiendo ampliar la desigualdad educativa si no se adopta una estrategia de mitigación. Por lo tanto, la consecuencia lógica es que la desigualdad entre áreas rurales y urbanas se incrementará. Las otras opciones interpretan erróneamente el efecto: la reducción de deserción, el aumento de capacitación docente o la disminución de necesidad de infraestructura no están sustentadas por la información dada y, al contrario, requieren mejoras en conectividad."
            },
            {
                id: 126,
                question: "Según el artículo, ¿cuál es la principal fortaleza del enfoque de tutores virtuales basados en IA en la educación secundaria boliviana?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El estudio piloto de la Universidad Católica Boliviana, el uso de un tutor virtual basado en IA elevó el promedio 47 de calificaciones en matemática de 6.8 a 8.1 y redujo la tasa de deserción en la asignatura en un 12%. Estos resultados demuestran una mejora académica clara y una disminución de la deserción, que son la fortaleza principal del enfoque."
            },
            {
                id: 127,
                question: "Considerando lo mencionado en el texto, ¿qué tan válido es el argumento de que la inteligencia artificial reducirá automáticamente las brechas sociales en la educación boliviana?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca tanto las oportunidades de la IA para mejorar la calidad educativa y reducir desigualdades (p. ej., tutores virtuales que compensan la escasez de docentes) como los grandes desafíos estructurales: solo el 38% de los hogares rurales tiene banda ancha y solo el 22% de los docentes ha recibido capacitación en tecnologías emergentes. Estas limitaciones hacen que la reducción de brechas dependa de mejoras en conectividad y formación docente, por lo que el argumento de una reducción automática es solo parcialmente válido. Las opciones 1 y 2 son incorrectas porque exageran o niegan completamente el impacto descrito; el texto no afirma una eliminación total ni una ausencia de efectos sociales."
            },
            {
                id: 128,
                question: "Del análisis presentado se desprende que, respecto a los resultados del estudio piloto con tutor virtual basado en IA, la evidencia es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que el estudio piloto se realizó con 1 200 estudiantes de segundo de bachillerato de la Universidad Católica Boliviana, mostrando un aumento de calificaciones de 6.8 a 8.1 y una reducción de deserción del 12%. Sin embargo, el texto aclara que estos resultados son locales y que la efectividad de la IA depende de factores como infraestructura y capacitación docente. Por lo tanto, la evidencia es válida como indicio preliminar, pero no suficiente para afirmar mejoras a nivel nacional sin investigaciones adicionales en contextos rurales y con mayor número de participantes. Las demás opciones sobreestiman la generalización, confunden la muestra con la población total o atribuyen la mejora exclusivamente a la IA sin considerar otras variables, por lo que no reflejan la interpretación crítica que el artículo sugiere."
            },
            {
                id: 129,
                question: "De acuerdo con el texto, ¿cuál de los siguientes aspectos representa una posible limitación que podría sesgar los resultados del estudio piloto sobre tutores virtuales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El estudio piloto se realizó en la Universidad Católica Boliviana con 1 200 estudiantes de segundo de bachillerato, sin especificar si incluía a escuelas rurales o de diferentes regiones; por tanto, la muestra es limitada y no representa a todo el sistema educativo boliviano, lo que constituye una posible fuente de sesgo."
            },
            {
                id: 130,
                question: "De acuerdo con el texto, ¿cuál es la principal implicación económica de adoptar inteligencia artificial en la educación boliviana?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La efectividad de la IA depende de “invertir en redes de banda ancha en zonas rurales” y “diseñar programas de formación continua para docentes” (sección de conclusiones y desafíos). Estas inversiones son presentadas como la principal implicación económica. 48 Repositorio de"
            },
            {
                id: 131,
                question: "Considerando lo mencionado en el texto, ¿cuál de los siguientes sesgos potenciales no se discute explícitamente en el artículo?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona explícitamente sesgos derivados de datos urbanos, la brecha de conectividad y la falta de capacitación docente, pero no aborda en ningún pasaje un sesgo de género. En la sección ‘Desafíos éticos, técnicos y estructurales’ se habla de sesgo algorítmico ligado a datos mayormente urbanos y de cómo la falta de infraestructura y de formación docente pueden afectar la equidad, sin mencionar la posible discriminación por género. Las demás opciones describen sesgos que sí son mencionados en el texto."
            },
            {
                id: 132,
                question: "El artículo señala que la IA puede modular la carga cognitiva y la plasticidad sináptica para optimizar el aprendizaje. Según una valoración crítica simple, ¿cuál de los siguientes enunciados representa la mayor fortaleza de este enfoque científico?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los sistemas de IA se basan en los conceptos de plasticidad sináptica y carga cognitiva, permitiendo ajustar la complejidad de los ejercicios a la zona de desarrollo próximo del estudiante; esto, según la investigación neuroeducativa citada, maximiza la plasticidad sináptica sin saturar la carga cognitiva y, por ende, favorece la retención a largo plazo (sección ‘Fundamentos neurocientíficos del aprendizaje personalizado’)."
            },
            {
                id: 133,
                question: "Según el artículo, ¿cuál de los siguientes actores es el más determinante para garantizar una integración responsable de la IA en la educación boliviana?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El Ministerio de Educación lidera el programa ‘Bolivia Aprende Digital’ (2022 2025), propone inversiones en conectividad, diseña programas de capacitación docente y coordina políticas públicas para la protección de datos. Estos roles son descritos como esenciales para una integración responsable, mientras que las empresas, los estudiantes y las organizaciones internacionales juegan papeles complementarios, pero no determinantes."
            },
            {
                id: 134,
                question: "La lectura del texto permite identificar que, para que la IA contribuya de forma efectiva a la educación en Bolivia, es necesario que las soluciones propuestas se orienten principalmente a:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo concluye que la integración responsable de la IA requiere (1) invertir en redes de banda ancha en zonas rurales, (2) diseñar programas de formación continua para docentes y (3) crear políticas de protección de datos que regulen la recopilación y uso de información estudiantil. Estas tres líneas de acción aparecen en la sección de conclusiones y resumen los obstáculos estructurales, de capacitación y éticos que deben abordarse conjuntamente."
            },
            {
                id: 135,
                question: "De acuerdo con el texto, ¿qué consecuencia se puede deducir si se invierte en redes de banda ancha en zonas rurales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La falta de conectividad en hogares rurales (solo 38 % con banda ancha) limita la implementación de plataformas de IA y que invertir en redes de banda ancha es una de las recomendaciones para cerrar la brecha digital y lograr una integración responsable de la IA. 49"
            },
            {
                id: 136,
                question: "Basándose en la información proporcionada, ¿cuál es el propósito económico principal de mejorar la conectividad de banda ancha en zonas rurales de Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La disparidad de conectividad (38% en áreas rurales vs. 71% en urbanas) “limita la implementación uniforme de plataformas basadas en IA y podría ampliar la desigualdad educativa” y recomienda invertir en redes de banda ancha para “evitar ampliar la desigualdad educativa”. Al reducir esa brecha, se fortalece el capital humano y se crea una base para el desarrollo económico a largo plazo."
            },
            {
                id: 137,
                question: "De acuerdo con el texto, ¿qué efecto probable tendría la falta de capacitación docente en inteligencia artificial sobre el uso de los sistemas de IA en las aulas?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que, al no recibir formación adecuada, “la mayoría de los profesores… no ha recibido formación formal… La falta de competencias técnicas puede generar una dependencia excesiva del algoritmo, sin la capacidad de interpretar los resultados ni de intervenir cuando la IA sugiere una ruta pedagógica inadecuada”. Esa relación causa efecto se infiere del texto."
            },
            {
                id: 138,
                question: "De acuerdo con el texto, ¿cuál es el mensaje principal implícito que el autor comunica respecto a los datos estadísticos proporcionados?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El autor destaca, mediante los datos del INE (2023), que solo el 38% de los hogares rurales dispone de conexión de banda ancha frente al 71% en áreas urbanas, y señala que esta desigualdad de conectividad limita la implementación uniforme de plataformas basadas en IA y podría ampliar la brecha educativa. Además, en la sección de desafíos se menciona que invertir en infraestructura de internet es esencial para que la IA beneficie a todos los estudiantes."
            },
            {
                id: 139,
                question: "De acuerdo con el texto, ¿qué conclusión lógica se puede extraer sobre los procesos técnicos de IA que personalizan el aprendizaje?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los algoritmos de recomendación de IA pueden estimar la zona de desarrollo próximo del alumno y adaptar la complejidad de los ejercicios, logrando que la tarea maximice la plasticidad sináptica sin saturar la carga cognitiva (sección ‘Fundamentos neurocientíficos del aprendizaje personalizado’)."
            },
            {
                id: 140,
                question: "Según el artículo, ¿qué se puede concluir acerca del impacto de la personalización basada en IA en el desempeño académico de los estudiantes bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El estudio piloto de la Universidad Católica Boliviana (Gómez et al., 2023) con 1 200 estudiantes de segundo de bachillerato, el promedio de calificaciones en matemática pasó de 6.8 a 8.1 y la tasa de deserción disminuyó en un 12% al usar un tutor virtual basado en IA. Estos datos combinan mejoras en rendimiento y reducción de deserción, lo que permite inferir que la personalización mediante IA tiene un impacto positivo. 50 Repositorio de"
            },
            {
                id: 141,
                question: "La lectura del texto permite identificar que la principal diferencia entre los tutores virtuales y la analítica de aprendizaje es que:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los tutores virtuales, como el piloto de la UCB, mejoraron el promedio de calificaciones y disminuyeron la deserción mediante rutas de estudio personalizadas (sección ‘Tutores virtuales y plataformas adaptativas’). En contraste, la analítica de aprendizaje se describe como un método para recolectar y analizar datos de interacción que permite predecir la probabilidad de deserción y aplicar intervenciones tempranas (sección ‘Analítica de aprendizaje y detección temprana de riesgos’). Por lo tanto, la diferencia radica en la personalización académica frente a la predicción y prevención de la deserción."
            },
            {
                id: 142,
                question: "La lectura del texto permite identificar que la perspectiva futura del autor para la integración responsable de la IA en la educación boliviana es que:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección de Conclusiones y recomendaciones el autor indica que la efectividad de la IA requiere (1) invertir en redes de banda ancha en zonas rurales, (2) diseñar programas de formación continua para docentes y (3) desarrollar políticas de protección de datos, señalando que la combinación de estos elementos es esencial para lograr un impacto positivo."
            },
            {
                id: 143,
                question: "Del análisis presentado, se desprende que todas las metodologías basadas en IA descritas comparten como objetivo principal…",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "A lo largo del artículo, cada metodología de IA se presenta como medio para adaptar la instrucción al estudiante: el tutor virtual de la UCB mejoró las calificaciones al ofrecer rutas de estudio personalizadas; la analítica de aprendizaje del proyecto Alerta Escolar detectó riesgos temprano para proporcionar apoyos individualizados; y la realidad aumentada del proyecto Química en 3D ajustó la simulación según las respuestas del alumno, facilitando una comprensión personalizada. Estos ejemplos evidencian que la meta común es la personalización del aprendizaje."
            },
            {
                id: 144,
                question: "La lectura del texto permite identificar que, si se amplía el uso de la analítica de aprendizaje basada en IA en los colegios bolivianos, ¿qué es probable que ocurra?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El proyecto Alerta Escolar en Tarija, donde la analítica de aprendizaje identificó a estudiantes en riesgo y, tras recibir intervenciones personalizadas, el 67% continuó sus estudios. Esa evidencia sugiere que, al replicar el mismo proceso a mayor escala, es razonable predecir una disminución de la tasa de deserción escolar en los colegios que adopten dicha tecnología."
            },
            {
                id: 145,
                question: "De acuerdo con el texto, ¿qué conclusión puede extraerse sobre el papel de la pandemia de COVID 19 en la incorporación de la inteligencia artificial en la educación boliviana?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La conclusión correcta se basa en dos pasajes del artículo: la Introducción indica que “la pandemia de COVID 19 aceleró la digitalización de la educación en América Latina; según el informe de la UNESCO (2022), el 78% de los países de la región utilizó plataformas en línea para la continuidad pedagógica”, y la sección de desafíos 51 señala que la infraestructura todavía es limitada, por lo que la adopción de IA depende de esa aceleración digital. Así, se infiere que la pandemia fungió como catalizador que permitió a Bolivia integrar la IA siguiendo la tendencia regional."
            },
            {
                id: 146,
                question: "Según el artículo, ¿qué es probable que ocurra si el gobierno de Bolivia implementa programas de capacitación docente en alfabetización digital avanzada y, al mismo tiempo, amplía la conectividad de banda ancha en áreas rurales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La principal limitación para una adopción uniforme de IA es la desigualdad de conectividad (38% de hogares rurales con banda ancha vs. 71% urbanos) y la falta de capacitación docente (solo 22% con alfabetización digital avanzada). En la sección de conclusiones se recomienda invertir en redes de banda ancha rurales y formar a los docentes; al combinar ambas medidas se espera reducir la brecha de acceso a tecnologías basadas en IA y, por ende, mejorar la equidad educativa."
            },
            {
                id: 147,
                question: "A partir de lo expuesto en el artículo, ¿cuál sería la consecuencia probable si un sistema de IA no ajusta la complejidad de los ejercicios al nivel de desarrollo próximo del estudiante?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo explica que los sistemas de IA deben estimar la zona de desarrollo próximo y ajustar la complejidad de los ejercicios (párrafo ‘Fundamentos neurocientíficos del aprendizaje personalizado’). Cuando la tarea se alinea con esa zona, se maximiza la plasticidad sináptica sin saturar la carga cognitiva, favoreciendo la retención a largo plazo. Por lo tanto, si el sistema no realiza ese ajuste, la carga cognitiva aumentará, lo que según la teoría de Sweller (2019) disminuye el rendimiento y la transferencia de conocimientos."
            },
            {
                id: 148,
                question: "A partir de lo expuesto en el artículo, ¿qué tipo de evidencia adicional sería necesaria para reforzar la afirmación de que la IA reducirá las brechas sociales en la educación boliviana?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la IA puede ayudar a cerrar brechas, pero la evidencia presentada se limita a estudios piloto y datos puntuales (p. ej., mejora en matemática de una escuela, reducción de deserción en Tarija). Para validar que esas mejoras se traducen en una reducción de brechas sociales a nivel nacional, se requerirían estudios longitudinales que midan, a lo largo del tiempo, cómo cambian desempeño y deserción en poblaciones rurales y urbanas antes y después de la adopción de la IA 52 Repositorio de"
            },
            {
                id: 149,
                question: "La lectura del texto permite identificar que el artículo define el concepto de “vector” como:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La definición correcta se encuentra en la Introducción del artículo, donde se indica: “vectores —organismos que transmiten patógenos a los humanos—”."
            },
            {
                id: 150,
                question: "Según el artículo, ¿cuáles son los problemas climáticos identificados que favorecen el aumento de enfermedades transmitidas por vectores en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección ‘Cambio climático y manifestaciones locales’ del artículo se enumeran tres problemas climáticos que inciden directamente en la proliferación de vectores: (i) el aumento de la temperatura media anual (0,6 °C entre 2000 y 2022); (ii) la variabilidad y los extremos de precipitación, con lluvias intensas e inundaciones que generan criaderos temporales; y (iii) la elevación del nivel de los lagos andinos, como el Titicaca, que crea nuevos hábitats de mosquitos. Estas tres condiciones aparecen textualmente y están vinculadas al incremento de enfermedades."
            },
            {
                id: 151,
                question: "La lectura del texto permite identificar que la medida adoptada en la ciudad de Santa Cruz, bajo la iniciativa “Ciudades Verdes”, generó una disminución del 30% en la densidad de larvas de Aedes en los barrios piloto. ¿Cuál de las siguientes describe exactamente esa medida?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el apartado ‘Planeación urbana resiliente’ se indica que la iniciativa “Ciudades Verdes” en Santa Cruz, que incorpora techos verdes y superficies permeables, redujo en un 30% la densidad de larvas de Aedes en barrios piloto. 55"
            },
        ]
    },
    {
        component: "COMPRENSIÓN LECTORA",
        title: "Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional",
        text: "Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional Pregunta 8: Del análisis presentado se desprende que, al comparar el mecanismo de retroalimentac",
        fullText: `Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional Pregunta 8: Del análisis presentado se desprende que, al comparar el mecanismo de retroalimentación climática descrito para la pérdida de bosques con el papel de los sistemas agroforestales tradicionales, ¿cuál de las siguientes afirmaciones refleja con mayor precisión la diferencia clave entre ambos procesos? Sustento Porque el texto indica que la deforestación disminuye el flujo de calor latente (LE) y, por tanto, eleva el calor sensible (H) y la temperatura del aire. En contraste, los sistemas agroforestales precolombinos combinaban cultivos con árboles, favoreciendo la conservación del suelo y la regulación hídrica, lo que implica una transpiración vegetal sostenida y un mayor LE, mitigando el aumento térmico. Pregunta 9: A partir de lo expuesto en el artículo, ¿qué principio general se puede extraer sobre las consecuencias sociales de la deforestación en los Andes bolivianos? Sustento La deforestación reduce la capacidad de retención de agua y aumenta la vulnerabilidad de los suelos, lo que afecta directamente a las poblaciones locales que dependen de estos recursos. Además, se enfatiza que la restauración requiere la integración de saberes tradicionales y la participación activa de comunidades indígenas, lo que indica que la mitigación de los efectos sociales depende de estos factores. Pregunta 10: A partir de lo expuesto en el artículo, ¿qué efecto indirecto es probable que tenga la ampliación del programa Biodiversidad Andina (2020‑2024) sobre la vulnerabilidad de los sistemas agropecuarios locales frente a la variabilidad de precipitaciones? Sustento La pérdida de bosque reduce la capacidad de retención de agua en el suelo, amplificando los efectos de la sequía. Asimismo, se menciona que el programa Biodiversidad Andina ha sembrado 3,5 millones de árboles nativos y que la integración de saberes tradicionales con tecnologías de monitoreo permite una gestión adaptativa que identifica zonas con mayor estrés hídrico. De manera implícita, la restauración forestal incrementa la retención de agua y modula el microclima, lo que debería reducir la vulnerabilidad de los sistemas agropecuarios ante la mayor variabilidad de precipitaciones. Pregunta 11: Según el artículo, ¿qué es probable que ocurra si la tendencia actual de expansión agrícola y pérdida de bosques en los Andes bolivianos continúa sin cambios durante la próxima década? Sustento Porque el artículo muestra que entre 1990 y 2020 la temperatura media aumentó 0,6 °C y la pérdida forestal se aceleró a 45 000 ha/año entre 2005 y 2020. Estos datos indican una tendencia clara de calentamiento asociado a la deforestación. Además, se explica que la reducción del flujo latente (LE) eleva el calor sensible (H), lo que eleva la temperatura del aire y favorece sequías más intensas y mayor frecuencia de incendios, generando mayores emisiones de CO2 que retroalimentan el proceso. Por lo tanto, si la pérdida de bosques y la expansión agrícola continúan, se espera otro aumento de temperatura (al menos 0,3 °C en la próxima década) y más sequías e incendios.`,
        questions: [
            {
                id: 152,
                question: "De acuerdo al artículo, ¿qué enfermedades transmitidas por vectores han aumentado en Bolivia según los datos presentados?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo reporta incrementos claros en la incidencia de tres enfermedades transmitidas por vectores: dengue (62 000 casos confirmados en 2023, aumento respecto a la década anterior), malaria (aumento del 28% de casos autóctonos entre 2015 y 2022) y enfermedad de Chagas (expansión de triatominos y mayor contacto humano en regiones rurales). Estas tres se describen específicamente en la sección ‘Vectores y enfermedades emergentes en Bolivia’."
            },
            {
                id: 153,
                question: "La lectura del texto permite identificar que las implicaciones económicas que se mencionan al implementar las estrategias sostenibles de mitigación y adaptación son:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La mitigación y adaptación sostenible conlleva beneficios económicos: (1) la reducción de la incidencia de dengue, malaria y Chagas implica menores gastos en atención sanitaria; (2) la transición a fuentes de energía limpias mejora la seguridad energética y permite la operación continua de refrigeración para vacunas, como se indica en la sección de políticas de reducción de emisiones; (3) los sistemas de tratamiento de aguas residuales basados en humedales construidos capturan carbono y favorecen la biodiversidad, lo que genera ahorro en servicios ecosistémicos; y (4) la iniciativa “Ciudades Verdes” reduce la huella de carbono urbana y mejora la calidad del aire, lo que se traduce en menores costos asociados a la contaminación."
            },
            {
                id: 154,
                question: "Considerando lo mencionado en el texto, ¿qué conclusión se puede extraer sobre el papel de los distintos actores (gobierno, organizaciones internacionales y comunidad local) en la mitigación de las enfermedades transmitidas por vectores en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La gestión del agua y saneamiento se lleva a cabo mediante programas del Gobierno en colaboración con la Agencia Alemana de Cooperación Internacional (GIZ), que la educación y la participación comunitaria a través de radio y líderes locales mejoran la eliminación de criaderos, y que la planificación urbana resiliente – una política pública – complementa estas acciones. Esta interdependencia de gobierno, organismos internacionales y comunidad local se describe como esencial para reducir la vulnerabilidad a largo plazo."
            },
            {
                id: 155,
                question: "Basándose en la información proporcionada, ¿qué es probable que ocurra en los próximos cinco años en las ciudades de los valles de Bolivia si no se implementan medidas de gestión integral del agua?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El aumento de la temperatura y la variabilidad de precipitaciones favorecen la reproducción acelerada de Aedes aegypti y que la falta de gestión del agua crea recipientes descubiertos que funcionan como criaderos perfectos, especialmente en ciudades de los valles como Santa Cruz, El Alto y Cochabamba. Además, se señala que la expansión urbana desordenada y el almacenamiento de agua sin tapa impulsan la endemicidad del dengue. Por el contrario, la malaria, aunque también se ve favorecida por temperaturas más altas, sigue concentrándose en zonas amazónicas y su expansión urbana es menos pronunciada; la enfermedad de Chagas está vinculada a triatominos rurales, no a la gestión del agua urbana. Por lo tanto, sin medidas de gestión integral del agua, es más probable que el dengue experimente un aumento notable y sobresalga frente a la malaria en los valles. 56 Repositorio de"
            },
            {
                id: 156,
                question: "Basándose en la información proporcionada, ¿cuál de los siguientes efectos es más probable que se produzca si se amplía la iniciativa “Ciudades Verdes” a otras áreas urbanas de Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la iniciativa “Ciudades Verdes” en Santa Cruz logró una reducción del 30% en la densidad de larvas de Aedes al disminuir la acumulación de agua estancada mediante techos verdes y superficies permeables. Implícitamente, al bajar la densidad larvaria se espera una menor transmisión del dengue, aunque el texto no lo menciona explícitamente."
            },
            {
                id: 157,
                question: "A partir de lo expuesto en el artículo, ¿qué consecuencia se puede deducir del aumento de la temperatura media y de la mayor variabilidad de precipitaciones sobre la malaria en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El incremento de la temperatura media (0,6 °C entre 2000 y 2022) extiende el periodo de transmisión del Anopheles y que la malaria ha aumentado un 28% entre 2015 y 2022, registrándose también en zonas previamente libres como el Chapare. Esta combinación de factores climáticos sugiere que áreas de bajo riesgo verán más casos de malaria."
            },
            {
                id: 158,
                question: "El artículo señala que el uso de herramientas de modelado climático y ecológico permite anticipar la expansión de vectores; ¿qué efecto es probable que ocurra si se amplía su aplicación a nivel nacional?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección ‘Monitoreo ecológico y modelado predictivo’ indica que los modelos basados en temperatura, humedad y uso del suelo pueden predecir áreas de alto riesgo con varios meses de antelación, facilitando la asignación de recursos y la planificación de campañas de control vectorial. Por lo tanto, al expandir su uso a nivel nacional, se espera una respuesta más temprana y focalizada, lo que consecuentemente debería disminuir la incidencia de enfermedades como dengue y malaria en esas áreas."
            },
            {
                id: 159,
                question: "Según el artículo, ¿qué conclusión se puede extraer respecto al papel de los diferentes actores en la mitigación de las enfermedades transmitidas por vectores en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La gestión integral del agua se está implementando por el Gobierno de Bolivia en colaboración con la Agencia Alemana de Cooperación Internacional (GIZ), y que la educación comunitaria y la participación ciudadana son esenciales para la prevención de criaderos. Además, se destaca la necesidad de coordinación entre políticas públicas, actores internacionales y líderes locales para lograr una mitigación sostenible."
            },
            {
                id: 160,
                question: "La lectura del texto permite identificar que la intensificación de la planificación urbana resiliente, mediante la incorporación de techos verdes y superficies permeables, tendría como consecuencia probable…",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección ‘Planeación urbana resiliente’ se indica que la iniciativa de techos verdes y superficies permeables disminuyó en un 30% la densidad de larvas de Aedes en barrios piloto, lo que implica una reducción directa del riesgo de transmisión de dengue. Esta relación causa efecto no se expresa explícitamente como “reducirá el dengue”, pero se deduce al combinar la información sobre la reducción de larvas con el papel de Aedes aegypti como vector del dengue. 57"
            },
            {
                id: 161,
                question: "Considerando lo mencionado en el texto, ¿cuál es la conclusión lógica sobre el papel de las políticas de energía renovable en la futura reducción de la vulnerabilidad de Bolivia a las enfermedades transmitidas por vectores?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La transición a fuentes limpias “no solo disminuye la temperatura global, sino que también mejora la seguridad energética, permitiendo la operación continua de sistemas de refrigeración para vacunas y pruebas diagnósticas” (Sección de Políticas de reducción de emisiones y adaptación). Esta doble ventaja (mitigación del cambio climático y garantía de energía para servicios de salud) implica que, a largo plazo, la vulnerabilidad a enfermedades vectoriales se reducirá."
            },
            {
                id: 162,
                question: "El artículo señala que, para enfrentar el aumento de enfermedades transmitidas por vectores provocado por el cambio climático, el mensaje central implícito respecto a los actores involucrados es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo subraya la necesidad de estrategias sostenibles que combinan gestión del agua, planificación urbana, educación comunitaria y cooperación con organismos como GIZ, indicando que la mitigación requiere la acción conjunta de autoridades sanitarias, municipales, comunidades locales y socios internacionales. Asimismo, en la conclusión se enfatiza que “un enfoque interdisciplinario que combine salud, medio ambiente y desarrollo socioeconómico será fundamental”, lo que implica la participación de múltiples actores."
            },
            {
                id: 163,
                question: "Del análisis presentado se desprende que la relación entre el cambio climático y las enfermedades transmitidas por vectores en Bolivia implica que:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La combinación de condiciones socioeconómicas vulnerables, urbanizaciones rápidas y falta de infraestructura sanitaria favorece la propagación de enfermedades transmitidas por vectores, y que estas dinámicas agravan la exposición de poblaciones de bajos recursos (p. /23). Además, en la sección de consecuencias sociales se menciona que la mayor incidencia de dengue, malaria y Chagas incrementa la vulnerabilidad de comunidades rurales y periurbanas, reflejando una ampliación de las desigualdades en salud."
            },
            {
                id: 164,
                question: "Según el artículo, ¿cuál es la consecuencia social implícita más importante derivada del vínculo entre el cambio climático y las enfermedades transmitidas por vectores en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El cambio climático aumenta la vulnerabilidad de comunidades pobres y que, para reducir esa vulnerabilidad, se requieren estrategias interdisciplinarias que integren salud, gestión del agua, planificación urbana y desarrollo socioeconómico (p. Conclusiones; sección de Estrategias sostenibles)."
            },
            {
                id: 165,
                question: "Según el artículo, ¿cuál de las siguientes afirmaciones describe mejor la diferencia en cómo el aumento de la temperatura media afecta los ciclos de transmisión del dengue y la malaria en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El desarrollo biológico de Aedes aegypti se duplica al pasar de 20 °C a 28 °C, lo que implica una aceleración significativa del ciclo vectorial del dengue. En contraste, para el Anopheles se menciona que el periodo de transmisión se extiende, permitiendo que la malaria persista más allá de la temporada lluviosa tradicional. 58 Repositorio de"
            },
            {
                id: 166,
                question: "A partir de lo expuesto en el artículo, ¿cuál de las siguientes conclusiones se puede inferir lógicamente sobre la efectividad de las estrategias propuestas para reducir el riesgo de enfermedades transmitidas por vectores en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La gestión integral del agua y saneamiento reduce criaderos de mosquitos, la planificación urbana resiliente disminuye la acumulación de agua estancada (ej. reducción del 30% de larvas en Santa Cruz), la educación comunitaria mejora la eliminación de criaderos y el modelado predictivo permite anticipar áreas de alto riesgo. La combinación de estos cuatro componentes se presenta como una solución integral y sostenible, y el texto concluye que la interdisciplinariedad entre salud, medio ambiente y desarrollo socioeconómico es fundamental."
            },
            {
                id: 167,
                question: "El artículo señala que, al considerar las estrategias de mitigación y adaptación propuestas, ¿cuál es la implicación económica más probable de la adopción generalizada de energías renovables en Bolivia para el control de enfermedades transmitidas por vectores?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La transición a fuentes limpias de energía “no solo disminuye la temperatura global, sino que también mejora la seguridad energética, permitiendo la operación continua de sistemas de refrigeración para vacunas y pruebas diagnósticas” (Sección de Políticas de reducción de emisiones y adaptación). Esta mejora en la cadena de frío reduce pérdidas de vacunas y, combinada con la menor incidencia de enfermedades transmitidas por vectores derivada de otras estrategias sostenibles, implica una disminución de los gastos en salud pública a mediano plazo."
            },
            {
                id: 168,
                question: "Según el artículo, ¿qué es probable que ocurra si se amplía la implementación de sistemas de captación de agua de lluvia con cubiertas selladas en zonas urbanas de la Amazonía boliviana?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la a falta de agua potable y el almacenamiento en recipientes descubiertos generan criaderos de Aedes aegypti, y que la instalación de sistemas de captación con cubiertas selladas reduce esos criaderos, disminuyendo la incidencia de dengue. En la sección de gestión integral del agua se menciona que esta intervención es una de las más efectivas para controlar la proliferación de mosquitos."
            },
            {
                id: 169,
                question: "El artículo señala que la integración de la gestión del agua, la planificación urbana y la educación comunitaria son esenciales para reducir la vulnerabilidad a enfermedades transmitidas por vectores. ¿Cuál de las siguientes afirmaciones representa mejor una implicación ética de priorizar la participación comunitaria en la implementación de estas estrategias?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección ‘Educación comunitaria y participación ciudadana’ se indica que “La participación activa de líderes comunitarios y organizaciones no gubernamentales (ONG) crea redes de vigilancia que reportan focos de transmisión en tiempo real” y que estas iniciativas “han mostrado una mayor adherencia a medidas de eliminación de criaderos”. Este pasaje evidencia que la participación comunitaria no solo mejora la efectividad de la intervención, sino que también respeta y valora los conocimientos y prácticas locales, cumpliendo con un principio ético de no imposición de soluciones externas. 59"
            },
            {
                id: 170,
                question: "De acuerdo con el texto, ¿cuál de las siguientes opciones describe mejor una implicación ética al implementar humedales construidos para el tratamiento de aguas residuales como medida de control vectorial en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los humedales construidos, además de tratar aguas residuales, capturan carbono y mejoran la biodiversidad, lo que se interpreta como una acción de justicia ambiental que favorece a comunidades vulnerables al reducir criaderos de mosquitos (sección ‘Gestión integral del agua y saneamiento’)."
            },
            {
                id: 171,
                question: "¿Cuál es el sesgo que el artículo permite identificar a partir del análisis de los resultados presentados?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El aumento de la temperatura media y la variabilidad de precipitaciones favorecen la expansión de vectores (secciones ‘Incremento de la temperatura media’ y ‘Variabilidad y extremos de precipitación’), pero la discusión de factores socioeconómicos se limita a mencionar vulnerabilidades generales sin analizarlos como determinantes independientes de la incidencia de dengue, malaria y Chagas. Esta priorización de variables climáticas frente a determinantes sociales indica un sesgo de enfoque."
            },
            {
                id: 172,
                question: "Según el artículo, ¿qué conclusión sintetiza mejor la relación entre el aumento de la temperatura media, la mayor variabilidad de precipitaciones y la tendencia al alza de los casos de dengue y malaria en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El aumento de 0,6 °C en la temperatura media acelera el desarrollo de Aedes aegypti y extiende el periodo de transmisión de Anopheles (sección ‘Incremento de la temperatura media’), y la mayor frecuencia de lluvias intensas produce criaderos temporales que incrementan la incidencia de dengue en un 45% (sección ‘Variabilidad y extremos de precipitación’). Estos factores combinados explican el crecimiento tanto del dengue (62000 casos en 2023) como de la malaria (aumento del 28% en casos autóctonos entre 2015-2022)."
            },
            {
                id: 173,
                question: "¿Es válida la afirmación efectuada por el autor, de que la gestión integral del agua es más efectiva que la planificación urbana para reducir la incidencia del dengue?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque el artículo describe beneficios de ambas estrategias, solo brinda datos cuantitativos sobre la planificación urbana (reducción del 30% en la densidad de larvas de Aedes en barrios piloto) y no ofrece cifras que comparen directamente la efectividad de la gestión integral del agua en la reducción de casos de dengue. Por lo tanto, la afirmación de que la gestión del agua es más efectiva carece de evidencia comparativa y no puede considerarse válida."
            },
            {
                id: 174,
                question: "Según el artículo, ¿qué tipo de evidencia adicional resultaría más pertinente para reforzar la viabilidad de las estrategias de mitigación y adaptación sostenibles propuestas para reducir la vulnerabilidad a enfermedades transmitidas por vectores en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca la necesidad de monitoreo ecológico y de evaluar el impacto de las intervenciones (p. ej., gestión del agua, planeación urbana) para determinar su efectividad en la reducción de dengue y malaria. Un 60 Repositorio de"
            },
            {
                id: 175,
                question: "El artículo señala que, para mitigar los efectos del cambio climático, se proponen intervenciones como la gestión integral del agua, la transición a energías renovables y la educación comunitaria. ¿Cuál de las siguientes implica una consideración ética esencial para que dichas intervenciones no profundicen las desigualdades sociales en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Es importante la participación comunitaria como pieza clave para una respuesta eficaz y equitativa: en la sección ‘Educación comunitaria y participación ciudadana’ se menciona que “la participación de líderes comunitarios y organizaciones no gubernamentales crea redes de vigilancia que reportan focos de transmisión en tiempo real” y en ‘Gestión integral del agua y saneamiento’ se indica que la instalación de sistemas de captación debe acompañarse de prácticas locales. Estas menciones subrayan que involucrar a las comunidades garantiza que los beneficios de las intervenciones lleguen a los grupos vulnerables y evita que las medidas refuercen desigualdades."
            },
            {
                id: 176,
                question: "El artículo señala que la elevación del nivel del lago Titicaca ha generado nuevos hábitats de mosquitos en las comunidades de las riberas. ¿Por qué es relevante esta información para la planificación de la gestión integral del agua en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La subida del nivel del lago Titicaca crea nuevos hábitats de mosquitos, lo que aumenta el riesgo de enfermedades transmitidas por vectores. Al mismo tiempo, la sección ‘Gestión integral del agua y saneamiento’ muestra que una intervención eficaz debe incluir el suministro de agua potable y el control de criaderos, por lo que la información sobre esos nuevos hábitats es fundamental para que los planes de gestión del agua incorporen medidas de control vectorial y saneamiento."
            },
            {
                id: 177,
                question: "Del análisis presentado se desprende que, entre los diferentes actores involucrados en la mitigación y adaptación frente a las enfermedades transmitidas por vectores en Bolivia, ¿quién tiene la posición más estratégica para liderar e integrar políticas sostenibles a largo plazo?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La implementación eficaz de estrategias sostenibles requiere una coordinación interministerial liderada por el Gobierno de Bolivia, complementada con alianzas internacionales (p. ej., GIZ) y la integración de sectores como agua, urbanismo y salud. Aunque ONG, comunidades y académicos son actores relevantes, el texto destaca que solo el gobierno puede articular políticas de largo plazo y asignar recursos a gran escala, mientras los demás actúan como apoyos o socios."
            },
            {
                id: 178,
                question: "A diferencia de la creencia general de que la falta de salida al mar protege a Bolivia de los efectos de la elevación del nivel del agua, ¿qué consecuencias trae consigo la elevación de los niveles de los lagos andinos como el Titicaca?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Bolivia, pese a ser un país sin salida al mar, la elevación de los niveles de los lagos andinos (p. ej., el Titicaca) ha modificado los márgenes costeros, creando nuevos hábitats propicios para mosquitos y aumentando la exposición de comunidades ribereñas. 61 Economía circular y gestión de residuos en Bolivia Resumen El presente artículo examina la viabilidad y el impacto de la economía circular como modelo para la gestión de residuos sólidos en Bolivia. Se describen los conceptos básicos de la economía circular, se presentan los datos más recientes sobre generación y manejo de residuos en el país, y se analizan los desafíos institucionales, tecnológicos y sociales que limitan su implementación. A través de ejemplos concretos, como los programas de reciclaje de PET en Santa Cruz y la reutilización de residuos agrícolas en el Altiplano, se evidencia cómo la integración de políticas públicas, innovación tecnológica y participación comunitaria puede reducir la huella ambiental y generar oportunidades económicas para micro empresas. Se concluye que, aunque la transición hacia una economía circular enfrenta barreras estructurales, la adopción de indicadores de desempeño y la creación de incentivos financieros son pasos clave para transformar los residuos en recursos valiosos. Introducción En los últimos años, la creciente presión sobre los recursos naturales y la acumulación de residuos en los entornos urbanos ha impulsado la búsqueda de alternativas sostenibles. La economía circular surge como un paradigma que pretende cerrar los ciclos de materiales, evitando la extracción continua de recursos y minimizando la generación de desechos. A diferencia del modelo lineal extraerproducir-desechar, la economía circular promueve la reducción, reutilización, reciclaje y recuperación de materiales en un proceso continuo. Para Bolivia, país con una diversidad geográfica que va desde los valles tropicales hasta el Altiplano, la gestión de residuos presenta retos particul"
            },
            {
                id: 179,
                question: "A partir de lo expuesto en el artículo, ¿cómo define el texto a los instrumentos financieros recomendados para estimular la economía circular en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para estimular iniciativas circulares, se deben diseñar “instrumentos financieros como fondos de garantía, líneas de crédito verde y esquemas de pago por servicios ambientales”. Estos tres componentes aparecen literalmente en el texto y se describen como medios para reducir el riesgo de inversión y favorecer la adopción de tecnologías limpias. Las otras opciones no aparecen en el artículo: los subsidios directos, los micro bonos y los incentivos fiscales mencionados son conceptos diferentes o no están descritos como instrumentos financieros en el documento."
            },
            {
                id: 180,
                question: "Según el artículo, ¿cómo define la economía circular y qué consecuencias sociales se asocian a su adopción en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo define la economía circular como un paradigma que “cierra los ciclos de materiales, evitando la extracción continua de recursos y minimizando la generación de desechos” y menciona que su implementación “puede transformar los residuos en oportunidades económicas para micro empresas y jóvenes emprendedores, mejorando la calidad de vida de las comunidades”."
            },
            {
                id: 181,
                question: "Del análisis presentado se desprende que, de acuerdo al artículo, ¿qué metodología de reciclaje de plásticos se describe como la alternativa más viable a nivel local en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La reciclación mecánica de plásticos (trituración, lavado y extrusión) es la alternativa más viable a nivel local, pues requiere inversiones moderadas y puede adaptarse a pequeñas empresas. Las demás opciones, aunque mencionadas en el texto, no se describen como la alternativa más viable para el reciclaje de plásticos: la reciclación química no se discute; la valorización energética se refiere a residuos orgánicos, no a plásticos; y la digestión anaeróbica se menciona como método para residuos orgánicos, no como método de reciclaje de plásticos. 64 Repositorio de"
            },
            {
                id: 182,
                question: "A partir de lo expuesto en el artículo, ¿cuál es la implicación económica directa que se menciona respecto a la empresa ReciclArte en La Paz?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El apartado de ‘Incentivos económicos y modelos de negocio’ el artículo indica que la empresa ReciclArte, al comprar PET y vender material reciclado, generó ingresos de 22000 USD en 2022. Las demás opciones presentan datos que no aparecen en el texto: no se menciona un beneficio neto de 15000 USD, ni una reducción de costos operativos del 12%, ni un aumento de producción del 8%; por lo tanto, son distractores construidos a partir de información del artículo, pero mal interpretada o extrapolada."
            },
            {
                id: 183,
                question: "El artículo señala que el proyecto piloto de digestores anaeróbicos en Cochabamba generó, por cada kilogramo de residuos orgánicos, ¿cuántos metros cúbicos de metano?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección 3.2 del artículo se indica que el proyecto piloto en Cochabamba “demostró una generación de 0,45 m³ de metano por kilogramo de residuos orgánicos”. Las demás opciones alteran el valor numérico (0,35 m³ y 0,55 m³) o la unidad de medida (por tonelada), por lo que no coinciden con el dato explícito presentado."
            },
            {
                id: 184,
                question: "Basándose en la información proporcionada, ¿cuál es la característica que diferencia la tasa de reciclaje de PET en Santa Cruz de la tasa de recolección formal de residuos sólidos en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que en Santa Cruz la tasa de reciclaje de PET es apenas el 8% (sección 2, datos de UMSA 2023) y que, a nivel nacional, solo el 12% de los residuos sólidos urbanos fue recolectado formalmente (sección 2, datos del INE 2022). Por lo tanto, la afirmación correcta es que la tasa de reciclaje de PET en Santa Cruz (8%) es inferior a la tasa de recolección formal nacional (12%)."
            },
            {
                id: 185,
                question: "Basándose en la información proporcionada, ¿cuál es el objetivo principal que persiguen los micro bonos ofrecidos por ONG como EcoBol al incentivar la separación de papel y cartón en los Yungas?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que los programas educativos de ONG como EcoBol “lograron aumentar la tasa de separación de papel y cartón del 3% al 18% en tan solo dos años, evidenciando el potencial de la educación informal y la incentivación mediante micro bonos”. El propósito explícito de esos micro bonos es ofrecer un estímulo económico que motive a la población a separar los materiales, lo que a su vez favorece la participación ciudadana y sienta las bases para una economía circular."
            },
            {
                id: 186,
                question: "De acuerdo con el texto, ¿qué consecuencia se puede deducir si el Estado fortalece la aplicación de la Ley 164 mediante la creación de fondos de garantía para micro empresas de reciclaje?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la baja tasa de reciclaje de PET en Santa Cruz (solo 8%) se debe en parte a la ausencia de incentivos financieros para los emprendedores. Se menciona que iniciativas como ReciclArte funcionan al comprar PET y venden material reciclado, y que se requieren instrumentos como fondos de garantía y microcréditos para ampliar estas actividades. Si el Estado crea dichos fondos, se esperaría que más micro empresas de reciclaje puedan operar formalmente, aumentando la recolección de PET, lo que elevaría la tasa de reciclaje (R) y reduciría la fracción que actualmente se deposita en vertederos o ríos. 65"
            },
            {
                id: 187,
                question: "Basándose en la información proporcionada, ¿qué efecto indirecto es probable que genere la expansión de los proyectos piloto de digestores anaeróbicos en zonas rurales sobre la dinámica de la economía circular en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que los digestores anaeróbicos generan biogás (0,45 m³ de metano por kilogramo de residuos orgánicos) suficiente para cubrir el consumo energético de una familia, lo que implica ingresos potenciales para micro empresas que operen dichos sistemas (sección 3.3). Al transformar residuos orgánicos en energía, se reduce la cantidad de materia orgánica que llega a los vertederos, lo que a su vez mejora la eficiencia global del reciclaje (R), ya que la fórmula de R depende del total de residuos gestionados de forma útil. Esta cadena de efectos – reducción de residuos orgánicos, generación de ingresos y mejora de R – es una consecuencia implícita del proyecto piloto."
            },
            {
                id: 188,
                question: "A partir de lo expuesto en el artículo, ¿qué conclusión general puede inferirse sobre la relación entre la proporción de recolección formal de residuos y la eficiencia de reciclaje (R) en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Soloo el 12% de los residuos sólidos urbanos se recolecta formalmente, mientras que el 55% corresponde a residuos orgánicos y solo el 8% del PET se recicla en Santa Cruz. Además, se señala que la segregación y la disponibilidad de residuos en condiciones de calidad son factores críticos para la eficiencia del reciclaje (R). Por lo tanto, una mayor cobertura de recolección formal implicaría que un mayor volumen de residuos estaría correctamente segregado y disponible para los procesos de reciclaje y valorización, lo que aumentaría el valor de R."
            },
            {
                id: 189,
                question: "De acuerdo con el texto, ¿qué efecto probable tendría en la eficiencia del reciclaje (R) la ampliación de programas de educación ambiental liderados por ONG en comunidades rurales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe que los programas educativos de ONG como EcoBol lograron elevar la tasa de separación de papel y cartón del 3% al 18% en dos años, evidenciando que la educación mejora la segregación de residuos. Una mejor segregación reduce la contaminación de los flujos reciclables, lo que, según la definición de eficiencia de reciclaje R = (Mrec / Mtotal) × 100%, permite que una mayor masa de material sea realmente reciclada, incrementando así el valor de R."
            },
            {
                id: 190,
                question: "De acuerdo con el texto, ¿cuál es la idea central que el autor comunica respecto al papel de la economía circular en la gestión de residuos en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El autor enfatiza repetidamente que la transición hacia una economía circular depende de la integración de políticas públicas, innovación tecnológica y participación comunitaria, lo que permitirá transformar los residuos en recursos valiosos y crear oportunidades económicas para micro empresas (ver secciones de “Desarrollo” y “Conclusiones”)."
            },
            {
                id: 191,
                question: "Considerando lo mencionado en el texto, ¿qué diferencia esencial se puede establecer entre la contribución del Estado y la de las ONG al impulso de la economía circular en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la Ley 164 de Gestión Integral de Residuos Sólidos (2014) constituye el marco normativo del 66 Repositorio de"
            },
            {
                id: 192,
                question: "El artículo señala que, para que Bolivia logre una transición efectiva hacia la economía circular, es indispensable...",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El autor, a lo largo del artículo, enfatiza que la viabilidad de la economía circular en Bolivia depende de la interacción entre tres ejes: políticas públicas (p. ej., la Ley 164, indicadores de desempeño), tecnologías apropiadas (reciclado mecánico, digestores anaeróbicos) y la participación social (programas de educación, micro bonos). En la conclusión se indica que “la combinación de políticas públicas claras, tecnología apropiada y participación comunitaria puede elevar significativamente la eficiencia del reciclaje (R)”."
            },
            {
                id: 193,
                question: "Del análisis presentado se desprende que la tendencia dominante en la gestión de residuos en Bolivia es que…",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo enfatiza, tanto en la introducción como en las conclusiones, que la transición hacia una economía circular depende de la interacción entre políticas públicas, innovación tecnológica y la participación comunitaria, y que la efectividad de este proceso se potenciará mediante indicadores de desempeño (tasa de reciclaje R) y mecanismos financieros de incentivo. Por ejemplo, en la sección de “Desafíos y oportunidades” se menciona que la combinación de políticas claras, tecnologías apropiadas y educación ambiental permite elevar la eficiencia del reciclaje y generar oportunidades económicas."
            },
            {
                id: 194,
                question: "De acuerdo con el texto, ¿qué consecuencia puede inferirse si la tasa de segregación de residuos orgánicos en origen se incrementa significativamente en comunidades rurales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la valorización energética mediante digestores anaeróbicos produce 0,45 m³ de metano por kilogramo de residuos orgánicos, suficiente para cubrir el consumo de una familia promedio durante un mes. Una mejora en la segregación en origen implica que una mayor proporción de residuos orgánicos llega al digestor en buen estado, aumentando la masa total de materia prima disponible. Como la relación de producción de metano es lineal respecto a la masa alimentada (0,45 m³ / kg), al incrementarse la cantidad de residuos orgánicos capturados se generará más metano, lo que permite abastecer a más hogares. 67"
            },
            {
                id: 195,
                question: "Según el artículo, ¿cuál es el mensaje principal implícito que el autor comunica respecto a las soluciones para la gestión de residuos en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo, en sus conclusiones y desarrollo, enfatiza repetidamente que la transición hacia una economía circular requiere “políticas públicas claras, tecnología apropiada y participación comunitaria” (párrafo de conclusiones) y menciona que esa combinación “puede reducir la huella ecológica y generar oportunidades económicas para micro empresas”. Esta visión integradora es el mensaje implícito central."
            },
            {
                id: 196,
                question: "De acuerdo con el texto, ¿qué efecto se puede deducir que tendría la ampliación de los programas de educación ambiental orientados a la separación en origen en las comunidades rurales?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que la separación de residuos en origen depende del nivel de conciencia ciudadana y que programas educativos han aumentado la tasa de separación (p. 3.3). Un mayor grado de separación permite que más material sea apto para el reciclaje mecánico y que los residuos orgánicos sean canalizados a digestores anaeróbicos, lo que eleva la eficiencia del reciclaje (R) y favorece la valorización energética."
            },
            {
                id: 197,
                question: "Considerando lo mencionado en el texto, ¿cuál de las siguientes comparaciones entre dos propuestas de futuro refleja de manera más precisa su potencial efecto inmediato sobre la eficiencia del reciclaje (R)?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que, para impulsar la economía circular, se requieren ‘instrumentos financieros como fondos de garantía, líneas de crédito verde y esquemas de pago por servicios ambientales’ que reducen el riesgo de inversión y facilitan la adopción de tecnologías limpias. Estos recursos permiten a micro empresas comprar equipos y operar procesos de reciclaje de forma inmediata, lo que afecta directamente la razón R. En contraste, el fortalecimiento legislativo con sanciones, aunque importante, actúa a más largo plazo al requerir cumplimiento y vigilancia institucional, sin aportar recursos financieros directos que mejoren rápidamente la eficiencia del reciclaje."
            },
            {
                id: 198,
                question: "La lectura del texto permite identificar que, para fomentar el desarrollo de micro empresas en zonas rurales de Bolivia, la información sobre la generación de biogás a partir de residuos orgánicos resulta más relevante que los datos de reciclaje de PET en Santa Cruz, porque:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que un proyecto piloto en Cochabamba demostró una generación de 0,45 m³ de metano por kilogramo de residuos orgánicos, suficiente para cubrir el consumo energético de una familia promedio durante un mes. Este tipo de valorización energética es directamente aplicable a comunidades rurales donde la falta de infraestructura eléctrica limita el desarrollo de micro empresas, al proporcionar una fuente de energía local y rentable. Por el contrario, los datos de reciclaje de PET (tasa del 8% en Santa Cruz) se centran en un problema urbano de contaminación del agua y no ofrecen una solución inmediata para la generación de ingresos o la autosuficiencia energética en áreas rurales, lo que disminuye su relevancia para ese contexto. 68 Repositorio de"
            },
            {
                id: 199,
                question: "A partir de lo expuesto en el artículo, ¿cuál de los siguientes aspectos representa una limitación no abordada por el autor al proponer incentivos financieros y modelos de negocio para la economía circular en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona incentivos financieros, micro créditos, fondos de innovación y la participación de jóvenes emprendedores, pero nunca analiza la dimensión de género ni cómo la desigualdad entre hombres y mujeres podría limitar el acceso de las mujeres a esos recursos."
            },
            {
                id: 200,
                question: "El artículo señala que la eficiencia del reciclaje (R) permite cuantificar el grado de cierre de los ciclos de materiales. ¿Por qué es relevante este indicador para diseñar una política de incentivos financieros dirigida a micro empresas de reciclaje en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo enfatiza que la eficiencia del reciclaje (R) sirve como indicador de desempeño que permite evaluar cuán cerrado está el ciclo de materiales; este dato puede usarse para estructurar bonos o pagos por servicios ambientales, asegurando que los incentivos financieros premien a micro empresas que logren una mayor efectividad en el cierre del ciclo. En la sección de conclusiones se menciona la necesidad de establecer indicadores de desempeño, como la tasa de reciclaje R, como métricas obligatorias para municipios y empresas."
            },
            {
                id: 201,
                question: "De acuerdo con el texto, ¿cuál de los siguientes posibles sesgos ambientales no está suficientemente abordado por el autor en su análisis?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque el artículo describe ampliamente los beneficios del reciclaje de PET y la valorización energética, nunca menciona ni cuantifica las posibles emisiones de CO2 o de otros gases de efecto invernadero que pueden generarse durante la recolección, el transporte y el procesamiento de los materiales reciclados. El texto se centra en la eficiencia del reciclaje (R) y en los impactos positivos, sin considerar este costo ambiental."
            },
        ]
    },
    {
        component: "COMPRENSIÓN LECTORA",
        title: "Pregunta 12: De acuerdo con el texto, ¿cuál de las siguientes afirmaciones compara de manera más",
        text: "Pregunta 12: De acuerdo con el texto, ¿cuál de las siguientes afirmaciones compara de manera más precisa los efectos de la disminución del flujo latente (LE) y del aumento del albedo sobre el balance",
        fullText: `Pregunta 12: De acuerdo con el texto, ¿cuál de las siguientes afirmaciones compara de manera más precisa los efectos de la disminución del flujo latente (LE) y del aumento del albedo sobre el balance energético y el calentamiento local en los Andes bolivianos? Sustento La pérdida de bosque reduce el flujo de energía latente (LE), lo que disminuye la transpiración y eleva el calor sensible (H), incrementando la temperatura local. Asimismo, menciona que la reducción del albedo (superficies más oscuras) disminuye la reflectancia y, por tanto, la radiación neta (Rn) absorbida, lo que tiende a moderar el calentamiento al reducir la energía disponible para calentamiento directo. Pregunta 13: De acuerdo con el texto, ¿qué diferencia más significativa se puede inferir entre la forma en que la deforestación afectó el balance energético durante la colonización española y la que se observa en la expansión agrícola del siglo XXI? Sustento La colonización española, la tala de bosques para carreteras y la introducción de ganado provocó sobrepastoreo y erosión del suelo, lo que afecta la retención hídrica. En contraste, en artículo también explica que la expansión agrícola del siglo XXI reduce el flujo latente (LE) al perderse la transpiración vegetal, lo que eleva el calor sensible (H) y, consecuentemente, la temperatura del aire. Pregunta 14: Del análisis presentado se desprende que la iniciativa Biodiversidad Andina (2020‑2024) tiene como objetivo principal... Sustento El programa Biodiversidad Andina (2020‑2024) ha sembrado 3,5 millones de árboles nativos en áreas degradadas de los Yungas y que revive prácticas agroforestales tradicionales, con la finalidad de restaurar bosques y aportar resiliencia frente al cambio climático. Pregunta 15: Basándose en la información proporcionada, ¿qué efecto indirecto es probable que haya tenido la apertura de la carretera Cochabamba‑Santa Cruz (finalizada en 1978) sobre la capacidad de los pueblos indígenas de los Yungas para mantener sus sistemas agroforestales tradicionales? Sustento La carretera Cochabamba‑Santa Cruz, finalizada en 1978, “abrió vastas áreas del bosque subtropical a la colonización de campesinos y empresas agroindustriales”. Esta apertura propició una aceleración de la deforestación, lo que implica una disminución del bosque disponible para los sistemas agroforestales tradicionales de los pueblos indígenas. Por otra parte, “el gobierno boliviano, junto a organizaciones no gubernamentales y comunidades indígenas, ha promovido iniciativas de restauración forestal y pagos por servicios ambientales”, lo que sugiere que los pueblos tuvieron que recurrir a estas políticas como respuesta a la pérdida de sus áreas de manejo tradicional. Pregunta 16: A partir de lo expuesto en el artículo, ¿qué consecuencia a largo plazo se puede deducir de la disminución del flujo de calor latente (LE) ocasionada por la deforestación en los Andes bolivianos? Sustento La deforestación reduce el flujo de calor latente (LE), lo que eleva el calor sensible (H) y, por ende, la temperatura de la superficie (“la disminución de LE al perderse los bosques eleva H y, por ende, la temperatura del aire”). Además, en la sección de retroalimentaciones se menciona que el aumento de emisiones de CO2 proviene de la quema forestal y que estas emisiones intensifican el calentamiento global, potenciando la frecuencia de incendios.`,
        questions: [
            {
                id: 202,
                question: "La lectura del texto permite identificar que el argumento del autor sobre la validez de establecer indicadores de desempeño, como la tasa de reciclaje R, para mejorar la eficiencia del reciclaje en Bolivia, es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto proporciona evidencia empírica que respalda la propuesta del autor: se citan cifras específicas de la tasa de reciclaje de PET (8%) y se describen casos concretos, como la empresa ReciclArte, que compra PET, lo procesa y genera ingresos de 22 000 USD y evita 15 toneladas de CO2. Estas experiencias demuestran que, al medir la eficiencia a través del indicador R, se pueden observar mejoras tangibles en la recuperación de materiales y en los resultados económicos de micro empresas, lo que valida la argumentación del autor."
            },
            {
                id: 203,
                question: "Del análisis presentado se desprende que, de acuerdo al artículo, ¿por qué es relevante la incorporación de indicadores de desempeño de reciclaje (R) para la formulación de políticas públicas en los municipios de Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección de Conclusiones el artículo recomienda establecer indicadores de desempeño, como la tasa de reciclaje R, como métricas obligatorias para municipios y empresas, con el fin de evaluar la eficacia de los programas, orientar la asignación de fondos (microcréditos) y diseñar incentivos financieros. Esta función se 69 menciona explícitamente: “Establecer indicadores de desempeño (por ejemplo, la tasa de reciclaje R) como métricas obligatorias para municipios y empresas”."
            },
            {
                id: 204,
                question: "Según el artículo, ¿qué sesgo limita la representatividad de los resultados presentados sobre la eficiencia de la economía circular en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo solo describe ejemplos concretos de reciclaje de PET en Santa Cruz y de digestores anaeróbicos en Cochabamba, sin proporcionar evidencia de otras áreas del país. Esta focalización geográfica impide extrapolar los hallazgos a la realidad nacional, constituyendo un sesgo de representatividad."
            },
            {
                id: 205,
                question: "De acuerdo con el texto, ¿cuál es la implicación ética más relevante al promover incentivos financieros para micro empresas que realizan reciclaje de PET en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto señala que los incentivos financieros buscan apoyar a micro empresas (p. ej., ReciclArte) y que la falta de una política inclusiva puede dejar fuera a los recolectores informales, creando una situación de inequidad y planteando una cuestión de justicia distributiva"
            },
            {
                id: 206,
                question: "El artículo señala que la participación de ONG es fundamental para mejorar la separación de residuos en origen. ¿Cuál de las siguientes afirmaciones constituye una evaluación crítica adecuada de la suficiencia de la evidencia presentada sobre el papel de las ONG en este proceso?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Aunque el artículo menciona que la ONG EcoBol logró elevar la tasa de separación de papel y cartón del 3% al 18% en los Yungas, esa información corresponde a un caso aislado y regional. No se presentan datos comparativos con otras áreas ni estudios longitudinales que permitan determinar si el efecto es atribuible exclusivamente a la intervención de la ONG ni si es replicable a nivel nacional. Por ello, la evidencia es limitada para sustentar afirmaciones generales sobre el impacto de las ONG."
            },
            {
                id: 207,
                question: "El artículo señala que el proyecto piloto de digestores anaeróbicos en Cochabamba generó, por cada kilogramo de residuos orgánicos, ¿cuántos metros cúbicos de metano?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección 3.2 del artículo se indica que el proyecto piloto en Cochabamba “demostró una generación de 0,45 m³ de metano por kilogramo de residuos orgánicos”. Las demás opciones alteran el valor numérico (0,35 m³ y 0,55 m³) o la unidad de medida (por tonelada), por lo que no coinciden con el dato explícito presentado. 70 Repositorio de"
            },
            {
                id: 208,
                question: "Considerando lo mencionado en el texto, ¿cuáles son las cuatro áreas de acción emergentes que se proponen para enfrentar la resistencia a los antibióticos en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Soluciones emergentes y perspectivas de futuro” del artículo se listan exactamente esas cuatro áreas: (1) Fortalecimiento de la política sanitaria, (2) Programas de educación comunitaria, (3) Innovación biotecnológica y (4) Enfoque One Health. Cada una aparece como un subtítulo independiente que describe iniciativas específicas para mitigar la resistencia."
            },
            {
                id: 209,
                question: "Basándose en la información proporcionada, ¿cuál es el primer paso descrito en la iniciativa ambiental de One Health para controlar la resistencia a los antibióticos en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el apartado “Enfoque One Health (Una Salud)” se indica que el Ministerio de Medio Ambiente, junto con el de Salud, “ha lanzado proyectos de vigilancia de resistencia en fuentes de agua y en granjas avícolas” antes de cualquier otro accionar."
            },
            {
                id: 210,
                question: "Basándose en la información proporcionada, ¿cuál es el orden cronológico correcto de las acciones realizadas por los distintos actores para enfrentar la resistencia a los antibióticos en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La secuencia se decribe en el artículo: primero, en 2022, el Gobierno aprueba la Ley de Uso Responsable de Antibióticos (sección “Fortalecimiento de la política sanitaria”). Luego, organizaciones no gubernamentales como Médicos Sin Fronteras implementan campañas de educación comunitaria en escuelas (sección “Programas de educación comunitaria”). Posteriormente, el Hospital Universitario de La Paz incorpora diagnósticos rápidos basados en PCR, reduciendo la prescripción empírica (sección Innovación biotecnológica). Finalmente, el Instituto Nacional de Salud lleva a cabo ensayos clínicos de terapia con fagos contra E. coli productora de BLEE (sección “Innovación biotecnológica”). 73"
            },
            {
                id: 211,
                question: "De acuerdo con el texto, ¿cuál fue la característica principal de los antibióticos desde su introducción en la década de 1940?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la Introducción del artículo se afirma que, desde la década de 1940, los antibióticos redujeron drásticamente la mortalidad infantil y prolongaron la esperanza de vida en todo el mundo."
            },
            {
                id: 212,
                question: "De acuerdo con el texto, ¿cuáles de las siguientes medidas forman parte de la Ley de Uso Responsable de Antibióticos aprobada en 2022 en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la Ley de Uso Responsable de Antibióticos, aprobada en 2022, “obliga a los farmacéuticos a exigir receta médica para la dispensación de antibióticos y limita su uso en la agropecuaria a casos de enfermedad diagnosticada. La normativa también establece la creación de un registro nacional de resistencia bacteriana”."
            },
            {
                id: 213,
                question: "El artículo señala que el 28% de los ingresos hospitalarios por infecciones respiratorias agudas están asociados a bacterias resistentes a al menos un antibiótico de primera línea. ¿A qué se refiere exactamente ese porcentaje del 28%?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Impacto epidemiológico en Bolivia” el artículo indica explícitamente que “aproximadamente 28% de los ingresos hospitalarios por infecciones respiratorias agudas están asociados a bacterias resistentes a al menos un antibiótico de primera línea” (Ministerio de Salud de Bolivia, 2023)."
            },
            {
                id: 214,
                question: "La lectura del texto permite identificar que, según el artículo, la resistencia a los antibióticos se define como:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo define explícitamente la resistencia a los antibióticos con la frase: “En términos sencillos, la resistencia surge cuando una bacteria adquiere la habilidad de sobrevivir a concentraciones de antibiótico que antes la mataban”."
            },
            {
                id: 215,
                question: "La lectura del texto permite identificar que la Ley de Uso Responsable de Antibióticos, aprobada en 2022, fue implementada principalmente con el objetivo de:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la Ley de Uso Responsable de Antibióticos “obliga a los farmacéuticos a exigir receta médica para la dispensación de antibióticos y limita su uso en la agropecuaria a casos de enfermedad diagnosticada” (sección de fortalecimiento de la política sanitaria). Ese enunciado muestra que la intención principal es controlar la resistencia, no estimular ventas, importaciones o investigación."
            },
            {
                id: 216,
                question: "La lectura del texto permite identificar que, en comparación de la implementación de diagnósticos rápidos basados en PCR y la terapia con bacteriófagos comparten algunas características, ¿cuáles son esas características en la lucha contra la resistencia a los antibióticos en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que los diagnósticos rápidos basados en PCR identifican el gen de resistencia en menos de una hora, lo que “redujo la prescripción empírica en un 40% y permitiendo tratamientos más dirigidos” (párrafo de Innovación biotecnológica). Asimismo, la terapia con bacteriófagos se describe como un enfoque que “infectan y destruyen bacterias específicas” y muestra una alta tasa de curación sin los efectos colaterales típicos de 74 Repositorio de"
            },
            {
                id: 217,
                question: "Según el artículo, ¿con qué finalidad se aprobó la Ley de Uso Responsable de Antibióticos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la Ley de Uso Responsable de Antibióticos, aprobada en 2022, “obliga a los farmacéuticos a exigir receta médica para la dispensación de antibióticos y limita su uso en la agropecuaria a casos de enfermedad diagnosticada” y “establece la creación de un registro nacional de resistencia bacteriana”. Estos elementos responden al objetivo de frenar la automedicación y el uso indiscriminado en la ganadería, factores de riesgo descritos en los párrafos anteriores."
            },
            {
                id: 218,
                question: "El artículo señala que la incorporación de diagnósticos rápidos basados en PCR redujo la prescripción empírica en un 40%. ¿Qué efecto se puede inferir que tendría la expansión nacional de esta tecnología sobre la propagación de bacterias resistentes?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la introducción de pruebas PCR rápidas en el Hospital Universitario de La Paz redujo la prescripción empírica en un 40%, lo que implica que se está usando antibióticos de forma más dirigida y, por tanto, disminuye la presión de selección de cepas resistentes. Este razonamiento inferencial combina la información del apartado de “Innovación biotecnológica” con la lógica de causa efecto: menos uso indiscriminado → menor propagación de resistencia."
            },
            {
                id: 219,
                question: "Según el artículo, ¿qué consecuencia se puede deducir de la introducción masiva de antibióticos a partir de la década de 1940 en la situación actual de resistencia en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que los antibióticos se introdujeron en la década de 1940 y, aunque redujeron la mortalidad, su uso extensivo creó presión selectiva para la supervivencia de bacterias resistentes. Más adelante, el artículo señala que la automedicación y el uso indiscriminado en la agropecuaria han ampliado esa presión, resultando en que el 28% de los ingresos hospitalarios por infecciones respiratorias están asociados a bacterias resistentes. Por lo tanto, se infiere que la combinación de la introducción histórica y el uso actual explica la alta prevalencia de resistencia."
            },
            {
                id: 220,
                question: "Considerando la combinación de: la Ley de Uso Responsable de Antibióticos, los programas de educación comunitaria y los ensayos clínicos con bacteriófagos. ¿qué conclusión lógica se puede extraer sobre el enfoque más prometedor para contener la resistencia a los antibióticos en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto muestra que la Ley de Uso Responsable de Antibióticos (2022) regula la dispensación y el uso agropecuario, que los programas de educación en Potosí redujeron en un 30% la compra automática de antibióticos, y que los ensayos con bacteriófagos alcanzaron una tasa de curación del 85% sin efectos colaterales. Cada una de estas intervenciones aborda un factor distinto (política, comportamiento y tecnología) que el artículo identifica como crucial para frenar la RA; por ello, la conclusión lógica es que solo una combinación de ellas ofrece la mayor probabilidad de éxito. 75"
            },
            {
                id: 221,
                question: "Según el artículo, comparando la actuación del Gobierno boliviano y la de las organizaciones no gubernamentales, ¿cuál de las siguientes afirmaciones describe mejor la forma en que sus contribuciones se complementan para mitigar la resistencia a los antibióticos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que en 2022 el Gobierno aprobó la Ley de Uso Responsable de Antibióticos y creó un registro nacional de resistencia, estableciendo una base normativa y de vigilancia. Asimismo, menciona que organizaciones no gubernamentales, como Médicos Sin Fronteras, llevan a cabo campañas de concientización que alcanzaron a 8 000 estudiantes en Potosí y lograron una reducción del 30% en la compra automática de antibióticos. Estas dos acciones – regulación/vigilancia (Gobierno) y educación comunitaria (ONG) – se describen como complementarias."
            },
            {
                id: 222,
                question: "A partir de lo expuesto en el artículo, ¿qué consecuencia se puede inferir que tendrá la expansión de los diagnósticos rápidos basados en PCR en los hospitales bolivianos respecto a la epidemiología de la resistencia a los antibióticos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la incorporación de pruebas PCR que identifican genes de resistencia en menos de una hora ha reducido la prescripción empírica en un 40 %. Si la prescripción empírica disminuye, se ejerce menos presión selectiva sobre las bacterias, lo que lógicamente lleva a una menor aparición y propagación de cepas resistentes; por tanto, la incidencia de infecciones por bacterias resistentes tenderá a descender. Esta cadena causal (diagnóstico rápido → menos uso empírico → menor presión selectiva → menor incidencia) no está declarada explícitamente, pero se deduce del texto."
            },
            {
                id: 223,
                question: "En el texto se menciona que, una de las consecuencias sobre los ingresos hospitalarios por infecciones resistentes, es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que el 62% de la población adulta adquiere antibióticos sin prescripción (Sección “Mecanismos biológicos y factores de riesgo”) y, simultáneamente, que el 28% de los ingresos hospitalarios por infecciones respiratorias están asociados a bacterias resistentes (Sección “Impacto epidemiológico en Bolivia”). La relación causal implícita es que el uso indiscriminado y erróneo de antibióticos favorece la selección y diseminación de cepas resistentes, lo que se refleja en el elevado porcentaje de internaciones por infecciones resistentes."
            },
            {
                id: 224,
                question: "A partir de lo expuesto en el artículo, ¿qué consecuencia se puede deducir si se amplía el uso de diagnósticos rápidos basados en PCR en los hospitales bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la incorporación de diagnósticos rápidos basados en PCR en el Hospital Universitario de La Paz redujo la prescripción empírica en un 40% y permitió tratamientos más dirigidos. Inferir que una ampliación de esa práctica mantendría la tendencia implica que la prescripción empírica seguirá disminuyendo, lo cual atenúa la presión selectiva que favorece la selección de cepas resistentes."
            },
            {
                id: 225,
                question: "A partir de lo expuesto en el artículo, ¿cuál es la conclusión más razonable respecto a cómo los factores de riesgo identificados inciden en el elevado costo económico de la resistencia a los antibióticos en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala que la automedicación, el uso de antibióticos en la ganadería y la falta de diagnóstico rápido 76 Repositorio de"
            },
            {
                id: 226,
                question: "De acuerdo con el texto, ¿cuál de las siguientes afirmaciones describe mejor la diferencia implícita entre el impacto observado de las campañas de educación comunitaria y el de la Ley de Uso Responsable de Antibióticos en la reducción de la automedicación?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la campaña en el Departamento de Potosí logró una reducción del 30% en la compra automática de antibióticos (“una campaña piloto alcanzó a 8 000 estudiantes…, logrando una reducción del 30% en la compra automática de antibióticos en farmacias locales”). En contraste, la Ley de Uso Responsable de Antibióticos fue aprobada en 2022 y se describe sus requisitos (exigir receta, limitar uso en agropecuaria) pero no se menciona todavía ningún resultado cuantitativo, por lo que no se dispone de evidencia de su impacto."
            },
            {
                id: 227,
                question: "Según el artículo, en el contexto boliviano, ¿cuál es la conclusión lógica respecto al papel del monitoreo ambiental en la lucha contra la resistencia a los antibióticos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Enfoque One Health (Una Salud)” se menciona que el Ministerio de Medio Ambiente y Salud ha lanzado proyectos de vigilancia de resistencia en fuentes de agua y granjas avícolas, con el objetivo de prevenir la propagación de genes de resistencia en ecosistemas acuáticos que pueden regresar a la cadena alimentaria humana. Esta conclusión integra la información sobre la interconexión entre salud humana, animal y ambiental, y la necesidad de monitorear los residuos de antibióticos en el agua como medida preventiva."
            },
            {
                id: 228,
                question: "La lectura del texto permite identificar que, a partir de los ejemplos de la Ley de Uso Responsable de Antibióticos, los programas de educación comunitaria y la incorporación de diagnósticos rápidos basados en PCR, el principio general que subyace a las soluciones emergentes contra la resistencia en Bolivia es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe tres tipos de iniciativas emergentes: la Ley de Uso Responsable (regulación), los programas de educación comunitaria (educación) y los diagnósticos rápidos basados en PCR (tecnología). En la sección de Soluciones emergentes se enfatiza que la combinación de estas medidas busca reducir la presión selectiva y la propagación de cepas resistentes."
            },
            {
                id: 229,
                question: "El argumento del autor muestra que la Ley de Uso Responsable de Antibióticos reducirá a la mitad la proporción de ingresos hospitalarios por infecciones respiratorias asociadas a bacterias resistentes, se puede considerar que:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe la Ley de Uso Responsable de Antibióticos y menciona su objetivo de restringir la dispensación sin receta, no proporciona datos cuantitativos que demuestren una reducción del 50% en los ingresos hospitalarios por infecciones respiratorias. Los datos estadísticos citados (28% de ingresos por bacterias resistentes, 62% de automedicación, reducción del 30% en compras automáticas tras una campaña educativa) no se vinculan directamente a un efecto específico de la ley. Por lo tanto, el argumento de que la ley reducirá a la mitad esos ingresos carece de respaldo empírico en el texto. 77"
            },
            {
                id: 230,
                question: "De acuerdo con el texto, ¿cuál de las siguientes afirmaciones describe mejor una implicación social sobre la resistencia a los antibióticos en Bolivia que surge de la combinación de la automedicación y la falta de diagnóstico rápido?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona dos aspectos: (1) el alto porcentaje de adultos que se automedican y compran antibióticos sin receta (62% según la Universidad Mayor de San Andrés, 2022) y (2) la limitación de diagnósticos microbianos que lleva a prescripciones empíricas. Ambos factores se asocian a mayores tasas de infecciones resistentes, lo que, como se menciona en la sección de impacto epidemiológico, eleva los costos hospitalarios (US$ 55 millones al año) y afecta especialmente a poblaciones vulnerables, ampliando la desigualdad en salud."
            },
            {
                id: 231,
                question: "La lectura del texto permite identificar que la afirmación de que los programas de educación comunitaria, por sí solos, son suficientes para reducir significativamente la resistencia a los antibióticos en Bolivia, carece de validez porque:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona que, aunque la educación comunitaria ha generado una reducción del 30% en la compra automática de antibióticos en una campaña piloto, también describe otras iniciativas esenciales: la Ley de Uso Responsable de Antibióticos, el registro nacional de resistencia, la terapia con fagos y los diagnósticos rápidos basados en PCR. En la sección “Soluciones emergentes y perspectivas de futuro” se enfatiza que solo un enfoque integrado bajo la perspectiva One Health permitirá contener la propagación de la resistencia. Por lo tanto, afirmar que la educación por sí sola es suficiente no está respaldado por el texto."
            },
            {
                id: 232,
                question: "Considerando lo mencionado en el texto, ¿cuáles son las principales implicaciones éticas que surgen del uso indiscriminado de antibióticos desde la década de 1940 hasta la actualidad en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe que la resistencia en Bolivia se ha incrementado por la automedicación, el uso de antibióticos en la agropecuaria y la falta de diagnóstico, y señala que la solución requiere una combinación de regulación (Ley de Uso Responsable de Antibióticos) y programas de educación comunitaria dirigidos a diferentes actores (párrafos de “Fortalecimiento de la política sanitaria” y “Programas de educación comunitaria”). Esto implica una responsabilidad compartida que debe abordarse bajo los principios éticos de justicia (equidad en el acceso y uso responsable) y beneficencia (preservar la efectividad de los tratamientos)."
            },
            {
                id: 233,
                question: "De acuerdo con el texto, ¿cuál sería la principal consecuencia social esperada, si la Ley de Uso Responsable de Antibióticos se aplica de forma eficaz?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la Ley de Uso Responsable de Antibióticos obliga a exigir receta médica y limita el uso en la agropecuaria, medidas dirigidas a frenar la automedicación y la compra sin receta, principales factores de riesgo descritos (párrafo de Mecanismos biológicos y factores de riesgo). Al reducir esos comportamientos se espera disminuir la difusión de bacterias resistentes y, por ende, la carga sobre el sistema de salud, una consecuencia social explícita. 78 Repositorio de"
            },
            {
                id: 234,
                question: "Del análisis presentado en el artículo se desprende que, respecto a la terapia basada en bacteriófagos, la principal limitación que podría dificultar su adopción a nivel nacional es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe la terapia basada en bacteriófagos como una “área de mayor promesa” y menciona que el Instituto Nacional de Salud está realizando “ensayos clínicos de un cóctel de fagos… Los resultados preliminares muestran una tasa de curación del 85%”. No se indica que el método esté ya disponible en el sistema de salud ni que exista una regulación establecida; se subraya que está “en fase experimental”. Por lo tanto, la limitación principal es su carácter todavía experimental y la falta de disponibilidad comercial."
            },
            {
                id: 235,
                question: "De acuerdo con el texto, ¿cuál sería la forma más adecuada de trasladar el enfoque One Health al contexto histórico de la década de 1960, cuando el uso de antibióticos comenzó a expandirse masivamente en Bolivia, para prevenir la actual resistencia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La definición de One Health expuesta en el artículo: “el concepto One Health reconoce la interconexión entre la salud humana, animal y ambiental” y propone una vigilancia integrada que abarque hospitales, ganadería y ecosistemas acuáticos. Aplicar este tipo de monitoreo durante la expansión masiva de antibióticos en los años 60 habría permitido detectar precozmente la aparición de genes de resistencia y ajustar las políticas de uso, reduciendo la selección de cepas resistentes."
            },
            {
                id: 236,
                question: "A partir de lo expuesto en el artículo, ¿qué tan válido es el argumento de que las campañas de educación sanitaria en escuelas son suficientes para resolver el problema de la resistencia a los antibióticos en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto reconoce que la campaña piloto en Potosí redujo la compra automática de antibióticos en un 30%, lo que evidencia un efecto positivo de la educación, pero también subraya que la resistencia a los antibióticos es un problema multifactorial que necesita, además, políticas regulatorias más estrictas, vigilancia nacional y tecnologías emergentes como la terapia con fagos y diagnósticos rápidos. Por lo tanto, el argumento de que la educación sola es suficiente es débil."
            },
            {
                id: 237,
                question: "El artículo señala que la terapia basada en bacteriófagos es una solución emergente eficaz para combatir la resistencia a los antibióticos en Bolivia; ¿qué tan válido es el argumento del autor respecto a esta afirmación?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona que el Instituto Nacional de Salud está realizando ensayos clínicos de un cóctel de fagos contra E. coli productora de BLEE, reportando una tasa de curación del 85% y ausencia de efectos colaterales típicos. Sin embargo, también indica que estos resultados son preliminares, lo que implica que la evidencia todavía es limitada y que se necesitan investigaciones más extensas para validar la terapia como solución definitiva. 79 Gestión sostenible de los recursos hídricos frente al retroceso de los glaciares del Altiplano boliviano Resumen El sector andino de Bolivia alberga la mayor concentración de glaciares de Sudamérica fuera de la zona polar. En las últimas cinco décadas, la superficie glaciar ha disminuido aproximadamente un 40%, una tendencia que amenaza la disponibilidad de agua para la agricultura, el consumo urbano y la generación de energía hidroeléctrica. Este artículo revisa los procesos físicos que originan el retroceso glaciar, analiza las consecuencias hidrológicas y sociales en la cuenca del Río Desaguadero y el Salar de Uyuni, y propone estrategias de gestión sostenible basadas en la adaptación comunitaria, la planificación integrada de cuencas y la mitigación del cambio climático. Se presentan datos climáticos actualizados, se explican conceptos como balance de masa glaciar y huella hídrica, y se discuten casos de éxito regionales que pueden servir de modelo para políticas a largo plazo en Bolivia y en la región latinoamericana. Introducción Los glaciares de alta montaña son reservorios críticos de agua dulce que liberan su contenido de forma gradual durante la estación seca, amortiguando la variabilidad climática. En Bolivia, la zona del Altiplano —que comprende departamentos como Potosí, Oruro y La Paz— depende de más de 200 glaciares distribuidos sobre picos que superan los 5 000 m s.n.m. (sobre el nivel del mar). Sin embargo, el aumento de la temperatura media anual, medido en más de 0,3 °C por década desde la déca"
            },
            {
                id: 238,
                question: "El artículo señala que, para enfrentar la escasez hídrica en la cuenca del Río Desaguadero, se llevaron a cabo una serie de acciones encadenadas. ¿Cuál es el orden correcto de los actores involucrados, desde la fase de monitoreo de los glaciares hasta la de reforestación de zonas alto andinas?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe primero el monitoreo de glaciares mediante imágenes satelitales de USGS y NASA, luego la puesta en marcha del Programa de Gestión de Cuencas del Río Desaguadero impulsado por el Ministerio de Medio Ambiente y Agua en colaboración con la Universidad Mayor de San Andrés, y finalmente la reforestación de zonas alto andinas ejecutada por el Servicio Solar Boliviano a través del proyecto Bosques Andinos para el Agua."
            },
            {
                id: 239,
                question: "Según el artículo, ¿en qué orden se describen las acciones que contribuyen a mitigar las implicaciones económicas del retroceso glaciar en la cuenca del Río Desaguadero?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo, en la sección ‘3. Estrategias de gestión sostenible y adaptación a largo plazo’, primero presenta la planificación integrada de cuencas (PIC) como herramienta esencial, después describe la reforestación de zonas altoandinas como un componente clave, y finalmente menciona la mitigación del cambio climático a nivel nacional, incluyendo la expansión de la generación hidroeléctrica, como paso posterior."
            },
            {
                id: 240,
                question: "A partir de lo expuesto en el artículo, ¿cuáles son los dos factores principales que han intensificado la fusión glaciar (M) en el Altiplano boliviano?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica claramente que “los factores que han intensificado M son dos: el aumento de la temperatura del aire y la disminución de la nevada”."
            },
            {
                id: 241,
                question: "El artículo señala que la planificación integrada de cuencas (PIC) busca coordinar a los siguientes usuarios del agua, ¿cuáles son?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección ‘Estrategias de gestión sostenible y adaptación a largo plazo’ se indica que la planificación integrada de cuencas (PIC) “busca coordinar a todos los usuarios del agua—agricultores, gobiernos locales, compañías mineras y la sociedad civil."
            },
            {
                id: 242,
                question: "De acuerdo con el texto, ¿cuáles son los sectores económicos que se ven afectados directamente por la reducción del aporte glaciar en la cuenca del Río Desaguadero?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección ‘Consecuencias hidrológicas y sociales del retroceso’ se menciona que la disminución del aporte glaciar afecta la agricultura de riego (quinua), la extracción de sal del Salar de Uyuni y el consumo doméstico en ciudades como Oruro y La Paz. Además, en el apartado de ‘Estrategias de gestión sostenible’ se indica que la generación hidroeléctrica ha crecido un 45% entre 2015 y 2022, lo que la vincula directamente al recurso hídrico glaciar. La industria minera también se menciona como uno de los actores involucrados en los conflictos por el agua. 82 Repositorio de"
            },
            {
                id: 243,
                question: "A partir de lo expuesto en el artículo, ¿cómo define el artículo la Planificación Integrada de Cuencas (PIC)?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe la Planificación Integrada de Cuencas (PIC) como ‘una herramienta esencial’ que ‘busca coordinar a todos los usuarios del agua—agricultores, gobiernos locales, compañías mineras y la sociedad civil— para equilibrar la oferta y la demanda, considerando tanto la variabilidad climática como los cambios estructurales.’"
            },
            {
                id: 244,
                question: "A partir de lo expuesto en el artículo, ¿qué consecuencia se puede deducir de la disminución del aporte glaciar al caudal del Río Desaguadero?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que los glaciares aportan entre el 20% y el 30% del caudal medio anual del Río Desaguadero y que la reducción de este aporte afecta la disponibilidad de agua para agricultura y consumo (párrafo 2 de Consecuencias hidrológicas). Además, señala que “la escasez hídrica ha intensificado conflictos por el uso del agua entre agricultores, industrias mineras y comunidades indígenas”. Inferimos que la disminución del aporte glaciar es la causa subyacente del aumento de los conflictos."
            },
            {
                id: 245,
                question: "De acuerdo con el texto, si la reducción de la superficie glaciar del Altiplano continúa y no se refuerzan significativamente las medidas de planificación integrada de cuencas, ¿qué es probable que ocurra con la disponibilidad de agua para la agricultura en la cuenca del Río Desaguadero durante los próximos diez años?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que los glaciares aportan entre el 20% y el 30% del caudal medio anual del Río Desaguadero y que la reducción de este aporte ya ha causado una disminución del 25% en la superficie cultivable durante la última década. Además, se señala que, sin la intensificación de la planificación integrada de cuencas y otras medidas de adaptación, la tendencia de pérdida glaciar continuará, lo que implicará una menor disponibilidad de agua para riego y, por ende, una mayor reducción de la superficie agrícola."
            },
            {
                id: 246,
                question: "Del análisis presentado se desprende que, comparando los datos estadísticos del artículo, la reducción porcentual de la superficie glaciar entre 1970 y 2020 es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la superficie glaciar pasó de 1 250 km² en 1970 a 730 km² en 2020, lo que representa una reducción del 40% en cincuenta años. Asimismo, menciona que los agricultores han reportado una reducción del 25% en la superficie cultivable de quinua durante los últimos diez años. Al comparar ambos porcentajes, la pérdida glaciar (40%) es mayor que la pérdida de superficie cultivable (25%)."
            },
            {
                id: 247,
                question: "Del análisis presentado se desprende que, para enfrentar el retroceso glaciar y sus impactos hídricos, el principio general que se debe aplicar respecto a los actores involucrados es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe varias iniciativas donde actúan el Ministerio de Medio Ambiente y Agua, la Universidad Mayor de San Andrés, organizaciones comunitarias y proyectos de reforestación, resaltando la planificación integrada de cuencas como una herramienta que requiere la coordinación de gobiernos, academia y comunidades. Esta colaboración es presentada como esencial para la resiliencia hídrica. 83"
            },
            {
                id: 248,
                question: "Del análisis presentado se desprende que, ante la reducción del aporte glaciar al caudal del Río Desaguadero y sus repercusiones sobre la agricultura y el consumo urbano, la tendencia general es que la dependencia de fuentes de agua no glaciares debe incrementarse mediante…",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca que la planificación integrada de cuencas (PIC) es la herramienta esencial para coordinar a agricultores, gobiernos, minería y sociedad civil, buscando equilibrar oferta y demanda de agua ante la disminución del aporte glaciar. Se menciona el Programa de Gestión de Cuencas del Río Desaguadero, que combina monitoreo satelital y riego por goteo, logrando una reducción del consumo de agua en un 30%, evidenciando que la combinación de gestión integrada y riego eficiente es la estrategia principal para mitigar la escasez."
            },
            {
                id: 249,
                question: "Del análisis presentado se desprende que, al comparar el impacto estimado de la reforestación de zonas altoandinas con el de la tecnificación de riego en la mitigación de la escasez hídrica, ¿cuál de las siguientes afirmaciones es correcta?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la tecnificación de riego mediante sistemas de riego por goteo “reduce el consumo de agua en un 30%” y que el proyecto Bosques Andinos para el Agua “generando un aumento del 12% en la recarga de acuíferos”. Estas dos cifras permiten comparar directamente ambos efectos, mostrando que la reducción del consumo de agua (30%) es mayor que el aumento de recarga de acuíferos (12%)."
            },
            {
                id: 250,
                question: "Basándose en la información proporcionada, ¿cuál es el propósito fundamental de implementar la Planificación Integrada de Cuencas (PIC) en la gestión del retroceso glaciar del Altiplano boliviano?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe la PIC como una herramienta esencial que “busca coordinar a todos los usuarios del agua— agricultores, gobiernos locales, compañías mineras y la sociedad civil—para equilibrar la oferta y la demanda, considerando tanto la variabilidad climática como los cambios estructurales”."
            },
            {
                id: 251,
                question: "Del análisis presentado se desprende que la adopción de la planificación integrada de cuencas (PIC) en la cuenca del Río Desaguadero tendrá como consecuencia probable:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la planificación integrada de cuencas (PIC) busca “coordinar a todos los usuarios del agua— agricultores, gobiernos locales, compañías mineras y la sociedad civil—para equilibrar la oferta y la demanda” (sección 3). Además, en la sección 2 se describe que la escasez hídrica ha “intensificado conflictos por el uso del agua entre agricultores, industrias mineras y comunidades indígenas”. Al inferir que la coordinación y el balance que proporciona la PIC mitigan la escasez percibida, se deduce que los conflictos disminuyen."
            },
        ]
    },
    {
        component: "COMPRENSIÓN LECTORA",
        title: "Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional",
        text: "Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional De esta forma, se puede inferir que la disminución de LE no solo calienta el aire, sino que crea",
        fullText: `Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional De esta forma, se puede inferir que la disminución de LE no solo calienta el aire, sino que crea condiciones más propicias para incendios más frecuentes e intensos, aunque el texto no lo declara explícitamente. Pregunta 17: El artículo señala que, a partir de los ejemplos históricos y los datos climáticos presentados, ¿qué principio general se puede extraer sobre la relación entre la deforestación y el clima en los Andes bolivianos? Sustento La pérdida de bosque reduce el flujo de calor latente (LE) asociado a la transpiración, lo que incrementa el calor sensible (H) y, por ende, la temperatura del aire. Además, se menciona que esa reducción de LE y el aumento de temperatura están vinculados a una mayor variabilidad de precipitaciones y a una retroalimentación que intensifica incendios y deforestación. Pregunta 18: El artículo señala que la iniciativa Biodiversidad Andina (2020‑2024) fue implementada principalmente con la finalidad de: Sustento El programa Biodiversidad Andina ha sembrado 3,5 millones de árboles nativos en áreas degradadas y que involucra a campesinos que reviven prácticas agroforestales tradicionales, con el objetivo de restaurar bosques y, por ende, mejorar la retención hídrica y la captura de CO2. La iniciativa busca “restauración forestal” y “pago por servicios ambientales”, lo que implica reforzar los servicios ecosistémicos climáticos. Pregunta 19: Según el artículo, ¿cuál es la finalidad principal de combinar los conocimientos agroforestales tradicionales con tecnologías de monitoreo satelital en los programas de restauración forestal actuales? Sustento La integración de saberes ancestrales con monitoreo satelital permite “una gestión adaptativa: los datos de sensores térmicos identifican zonas con mayor estrés hídrico, mientras que la ciencia del suelo orienta la selección de especies nativas con alta tolerancia a la sequía”. Este propósito se centra en mejorar la resiliencia de la restauración frente a condiciones climáticas adversas. Pregunta 20: El artículo señala que la pérdida de bosque en los Andes bolivianos reduce la retención de agua y aumenta la variabilidad de precipitaciones; ¿qué consecuencia social se puede deducir de este proceso? Sustento La deforestación disminuye la capacidad del suelo para retener agua y aumenta la variabilidad de precipitaciones, lo que intensifica sequías que afectan la disponibilidad de agua para la agricultura y la generación hidroeléctrica. Estas condiciones generan mayor vulnerabilidad de los campesinos, quienes dependen del agua para cultivos y ganadería, y pueden verse forzados a migrar a zonas urbanas en busca de medios de vida más seguros. Pregunta 21: Según el artículo, ¿qué principio general se puede extraer de las soluciones propuestas para mitigar la deforestación en los Andes bolivianos? Sustento La combinación de conocimientos tradicionales (saberes ancestrales) con tecnologías de monitoreo satelital permite una gestión adaptativa de la restauración forestal. Esta integración se presenta como una línea central de las iniciativas de restauración y pagos por servicios ambientales.`,
        questions: [
            {
                id: 252,
                question: "Basándose en la información proporcionada, ¿qué principio general se puede extraer sobre la manera en que la gestión del agua debe responder al retroceso de los glaciares en el Altiplano?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la planificación integrada de cuencas (PIC) coordina a agricultores, gobiernos, industrias y la sociedad civil, y que el Programa de Gestión de Cuencas del Río Desaguadero incorpora monitoreo satelital, mediciones de caudales en tiempo real y riego por goteo que reduce el consumo de agua en un 30%. Además, se 84 Repositorio de"
            },
            {
                id: 253,
                question: "La lectura del texto permite identificar que, considerando la reducción del aporte glaciar al caudal seco estacional y la implementación del sistema de riego por goteo que disminuye el consumo de agua en un 30%, la combinación de ambos factores probablemente resultará en…",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la reducción del aporte glaciar ha mermado el caudal seco estacional, afectando la disponibilidad hídrica para la agricultura (se menciona una reducción del 25% de la superficie cultivable). Paralelamente, se señala que el programa de riego por goteo reduce el consumo de agua en un 30%. Al combinar ambos hechos, se infiere que el ahorro generado por el riego tecnificado puede compensar, al menos parcialmente, la pérdida de agua proveniente de los glaciares, originando una mejora neta en la disponibilidad de agua para la agricultura."
            },
            {
                id: 254,
                question: "A partir de lo expuesto en el artículo, ¿cuál es la diferencia esencial entre la intervención de riego tecnificado y la de reforestación en la gestión sostenible del agua en la cuenca del Río Desaguadero?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la descripción de las dos estrategias en el apartado 3 del artículo. El Programa de Gestión de Cuencas del Río Desaguadero incluye sistemas de riego tecnificado que reducen el consumo de agua en un 30% mediante riego por goteo. Por otro lado, el proyecto ‘Bosques Andinos para el Agua’ ha logrado un aumento del 12% en la recarga de acuíferos gracias a la reforestación de zonas altoandinas. Así, una medida actúa sobre la demanda (riegos) y la otra sobre la oferta (recarga)."
            },
            {
                id: 255,
                question: "Según el artículo, ¿qué es probable que ocurra si la tendencia de retroceso glaciar observada en los últimos cincuenta años continúa sin que se amplíen las medidas de gestión sostenible?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que los glaciares aportan entre el 20% y el 30% del caudal medio anual del Río Desaguadero y que la superficie glaciar ha disminuido un 40% en cincuenta años. Si la tasa de retroceso observada persiste, la masa glaciar seguirá reduciéndose, lo que disminuirá la cantidad de agua de deshielo disponible durante la estación seca. Dado este escenario, es razonable inferir que la contribución glaciar podría caer por debajo del 10% del caudal total, aumentando la vulnerabilidad hídrica y, conforme se describe en el texto, generando mayores conflictos por el uso del agua entre los distintos usuarios."
            },
            {
                id: 256,
                question: "De acuerdo con el texto, ¿cuál de las siguientes situaciones es una consecuencia probable a mediano plazo de la continua disminución del aporte de agua glaciar a la cuenca del Río Desaguadero?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que los glaciares aportan entre el 20% y el 30% del caudal medio anual del Río Desaguadero, y que la generación hidroeléctrica se ha beneficiado de estos aportes, mostrando un crecimiento del 45% entre 2015 y 2022. Dado que la tendencia de retroceso glaciar continuará reduciendo el aporte de agua durante la estación seca, se infiere que la disponibilidad de caudales para la generación hidroeléctrica disminuirá, limitando la producción de energía y aumentando la necesidad de fuentes no renovables. 85"
            },
            {
                id: 257,
                question: "Según el artículo, ¿cuál de las siguientes medidas muestra el mayor efecto porcentual estimado para mitigar la escasez hídrica en la cuenca del Río Desaguadero?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la tecnificación del riego reduce el consumo de agua en un 30% (sección 3), mientras que la reforestación genera un aumento del 12% en la recarga de acuíferos (sección 3) y el crecimiento de la generación hidroeléctrica del 45% se refiere a energía, no a un ahorro directo de agua. Los programas de educación, aunque importantes, no aportan un dato porcentual."
            },
            {
                id: 258,
                question: "De acuerdo con el texto, ¿qué es probable que ocurra si la tendencia de retroceso glaciar observada en las últimas cinco décadas continúa durante los próximos diez años?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que la superficie glaciar ha disminuido un 40% en cincuenta años y que los glaciares aportan entre el 20% y el 30% del caudal medio anual del Río Desaguadero. Además, se menciona que el balance de masa glaciar es negativo y que tanto el aumento de la temperatura como la disminución de la nevada continúan. Si esas tendencias persisten, la proporción de aporte glaciar al caudal probablemente bajará aún más, pudiendo caer bajo el 15% en la próxima década, lo que incrementaría la vulnerabilidad hídrica para la agricultura y el consumo urbano."
            },
            {
                id: 259,
                question: "La lectura del texto permite identificar que, para mitigar la pérdida de aportes hídricos glaciares en la cuenca del Río Desaguadero, se propone la reforestación de zonas altoandinas. Si se quisiera trasladar esta estrategia al contexto histórico de la cuenca del río Santa en Perú durante la década de 1990, ¿qué medida sería la más adecuada según los principios expuestos en el artículo?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo describe la reforestación de zonas altoandinas como un componente clave de la gestión sostenible: se menciona que proyectos como ‘Bosques Andinos para el Agua’ plantaron más de 1,5 millones de árboles nativos, lo que generó un aumento del 12% en la recarga de acuíferos al favorecer la captura de humedad atmosférica. Trasladar esa misma lógica a la cuenca del río Santa en los años 90 implicaría usar especies nativas de alta montaña para los mismos efectos. Las demás opciones no reflejan el enfoque del texto: la plantación de especies exóticas no está contemplada y podría disminuir la eficiencia hídrica; la construcción de presas corresponde a una estrategia de almacenamiento que no está vinculada a la reforestación descrita; y el riego por inundación contraviene la tecnificación del riego por goteo que busca reducir el consumo de agua, no aumentarlo."
            },
            {
                id: 260,
                question: "Basándose en la información proporcionada, ¿cuál es la limitación más significativa del enfoque de planificación integrada de cuencas (PIC) descrito en el artículo?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca que la PIC busca coordinar a agricultores, gobiernos, mineras y la sociedad civil, pero implica una cooperación institucional permanente y recursos para monitoreo y riego tecnificado. No se menciona que esta coordinación sea automática; por ello, la necesidad de una gestión interinstitucional constante y de financiamiento estable se presenta como la limitación más crítica. 86 Repositorio de"
            },
            {
                id: 261,
                question: "La lectura del texto permite identificar que la perspectiva futura más clara para garantizar la sostenibilidad hídrica en el Altiplano boliviano es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala en la sección 3 que “la planificación integrada de cuencas (PIC) emerge como una herramienta esencial” para abordar la escasez hídrica, al coordinar a agricultores, gobiernos, minería y sociedad civil y al contemplar tanto la variabilidad climática como los cambios estructurales."
            },
            {
                id: 262,
                question: "El artículo señala que, a diferencia de la visión común de depender principalmente de la extracción de agua subterránea para afrontar la escasez hídrica en el Altiplano, la estrategia futura enfatiza la gestión integrada, la reforestación y la transición energética. ¿Cuál de las siguientes opciones refleja adecuadamente esa perspectiva del texto?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo, en la sección 3 de desarrollo, describe la combinación de planificación integrada de cuencas (PIC), reforestación de zonas altoandinas que aumentó en un 12% la recarga de acuíferos, y la transición a energías renovables como pilares de la gestión sostenible. Además, menciona que el Programa de Gestión de Cuencas del Río Desaguadero incluye riego tecnificado que reduce el consumo de agua en un 30%, lo que disminuye la necesidad de bombeo subterráneo."
            },
            {
                id: 263,
                question: "Basándose en la información proporcionada, ¿qué perspectiva ambiental importante no es considerada en el análisis del autor sobre la gestión sostenible de los recursos hídricos del Altiplano?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto describe detalladamente la reforestación, la contribución del deshielo al caudal y la creciente demanda agrícola, pero solo menciona la generación hidroeléctrica como una solución sin analizar sus posibles efectos adversos sobre ecosistemas acuáticos o flujos ecológicos. No se discuten, por ejemplo, la fragmentación de hábitats o la alteración de regímenes de caudal que pueden derivarse de la construcción o ampliación de represas, lo que constituye una perspectiva ambiental omitida."
            },
            {
                id: 264,
                question: "A partir de lo expuesto en el artículo, ¿cómo debería adaptarse la estrategia de planificación integrada de cuencas (PIC) para la cuenca del río Santa en el norte de Perú, considerando sus diferencias climáticas y socioeconómicas respecto a la cuenca del Desaguadero?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según el artículo, la planificación integrada de cuencas (PIC) en Bolivia combina monitoreo satelital, riego por goteo que reduce el consumo en un 30% y reforestación que incrementa la recarga de acuíferos en un 12%. Al trasladar esta estrategia al río Santa, es necesario adaptar esos componentes a una cuenca donde el aporte glaciar es menor y la precipitación es más estacional; por ello, la respuesta propone priorizar la captación de agua de lluvia y la gestión de embalses, además de mantener los elementos exitosos de monitoreo, riego tecnificado y reforestación, y reforzar la gobernanza indígena, lo cual refleja un análisis crítico y contextualizado. 87"
            },
            {
                id: 265,
                question: "Según el artículo, ¿qué tipo de evidencia adicional sería necesaria para reforzar de manera convincente la afirmación de que la reforestación de zonas altoandinas incrementa significativamente la recarga de acuíferos en la cuenca del Río Desaguadero?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo menciona que la reforestación ha generado un aumento del 12% en la recarga de acuíferos según estudios del Servicio Solar Boliviano, pero no especifica la metodología usada. Para validar robustamente esa afirmación se requerirían series temporales de datos hidrológicos (niveles de agua subterránea) obtenidos tanto en zonas reforestadas como en áreas de referencia sin intervención, lo que permitiría demostrar una relación causal y cuantificar el efecto."
            },
            {
                id: 266,
                question: "Basándose en la información proporcionada, ¿cómo se contrasta la idea frecuente de que la pérdida de glaciares afecta principalmente al turismo con la realidad descrita en el artículo respecto a los problemas socio económicos del Altiplano boliviano?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección de consecuencias hidrológicas y sociales se indica que los glaciares aportan entre el 20% y el 30% del caudal medio anual del Desaguadero y que su reducción impacta agricultura, extracción de sal, consumo urbano y genera conflictos y migraciones (párrafos bajo el ítem 2)."
            },
            {
                id: 267,
                question: "A partir de lo expuesto en el artículo, ¿cuál de las siguientes afirmaciones resume mejor la implicación ética más relevante que surge al considerar tanto la reducción de consumo hídrico mediante riego tecnificado (30% de ahorro) como el aumento de la recarga de acuíferos mediante reforestación (12% de incremento) en el contexto del retroceso glaciar del Altiplano boliviano?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que el riego tecnificado reduce el consumo de agua en un 30% (sección 3) y que la reforestación de zonas altoandinas genera un aumento del 12% en la recarga de acuíferos (sección 3). Ambas medidas aportan beneficios complementarios: el riego por goteo aborda la necesidad inmediata de agua para la agricultura, mientras que la reforestación mejora la capacidad de infiltración y la resiliencia ecosistémica a largo plazo. El texto subraya que la planificación integrada de cuencas debe coordinar a todos los usuarios y combinar estrategias, lo que implica que una acción aislada no es suficiente desde un punto de vista ético. 88 Repositorio de"
            },
            {
                id: 268,
                question: "El artículo señala que, dado que la disponibilidad de recursos computacionales en Bolivia es limitada, ¿qué beneficio principal ofrece el uso de servicios en la nube para estudiantes y pequeñas empresas?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Pese a la limitación de recursos computacionales en Bolivia, “la proliferación de servicios en la nube permite a estudiantes y pequeñas empresas acceder a esta potencia sin necesidad de poseer hardware especializado”."
            },
            {
                id: 269,
                question: "El artículo señala que, en el contexto de la educación secundaria, ¿cuál es el tercer paso del proceso descrito para la generación y retroalimentación de ejercicios de química?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El algoritmo evalúa la respuesta, indica errores y sugiere conceptos revisados. Ese enunciado corresponde al tercer paso del proceso."
            },
            {
                id: 270,
                question: "De acuerdo con el texto, ¿cuál es la expresión matemática exacta del mecanismo de atención utilizado en los transformadores?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Fundamentos técnicos de la IAG” del artículo se muestra la ecuación exacta del mecanismo de atención como: Attention(Q, K, V) = softmax((QK^{})/) V."
            },
            {
                id: 271,
                question: "De acuerdo con el texto, ¿cuál es la característica principal de los problemas éticos y regulatorios que plantea la IAG en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección 4 del artículo se describen los retos éticos y regulatorios enfatizando “la generación de información falsa (deepfakes) y la reproducción de sesgos presentes en los datos de entrenamiento” y se señala que “la falta de legislación específica sobre contenido generado por IA” agrava estos problemas. 91"
            },
            {
                id: 272,
                question: "Según el artículo, ¿cuál es la consecuencia social descrita de la brecha digital entre zonas urbanas y rurales en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En el apartado “Retos éticos, regulatorios y de inclusión digital”, se señala que la brecha digital “puede intensificarse si el acceso a la IAG se concentra en centros urbanos” y que, al disponer solo el 35% de los hogares en el Beni y Pando de conexión de banda ancha estable, “limita su participación en la economía digital emergente”."
            },
            {
                id: 273,
                question: "A partir de lo expuesto en el artículo, ¿cuál de los enunciados describe correctamente una de las medidas propuestas para mitigar los riesgos de la IAG en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Retos éticos, regulatorios y de inclusión digital”, el artículo propone, como parte del marco regulatorio, la medida de “Transparencia”; “los sistemas que producen contenido deben indicar claramente que la salida es generada por IA”."
            },
            {
                id: 274,
                question: "De acuerdo con el texto, ¿qué principio general se puede extraer de los problemas identificados en la adopción de la IAG en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Retos éticos, regulatorios y de inclusión digital”, se señala que la falta de legislación específica y la brecha de acceso a internet pueden intensificar la desinformación y la desigualdad digital. Se propone un marco regulatorio que incluya transparencia, responsabilidad y acceso equitativo para mitigar esos riesgos."
            },
            {
                id: 275,
                question: "Según el artículo, ¿qué consecuencia se puede deducir de una mayor incorporación de herramientas generativas de IA en la industria creativa boliviana?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La startup boliviana MinkaDesign, al utilizar un modelo generativo de IA, logró un aumento del 27% en la velocidad de lanzamiento de nuevos diseños y expandió sus mercados a Uruguay y Chile. De esta comparación implícita se infiere que, si más actores de la industria creativa adoptaran herramientas generativas similares, experimentarían efectos parecidos: lanzarían sus productos más rápidamente y podrían acceder a mercados internacionales."
            },
            {
                id: 276,
                question: "De acuerdo con el texto, ¿qué factor se espera que tenga una mayor influencia en la expansión futura de la IAG en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala que la brecha digital entre áreas urbanas y rurales limita el acceso a la IAG: solo el 35% de los hogares en Beni y Pando disponen de banda ancha estable, y se propone que el Estado invierta en infraestructura de internet para garantizar un acceso equitativo. Sin conectividad adecuada, incluso con marcos regulatorios o mejoras en capacidad computacional, la población rural no podrá aprovechar la IAG, lo que hace que la mejora de la infraestructura sea el factor determinante para su expansión futura."
            },
            {
                id: 277,
                question: "Según el artículo, ¿cuál es la diferencia principal entre cómo la IAG beneficia al sector educativo y al sector creativo en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo indica que, en la educación, la IAG ayuda a suplir carencias de laboratorios y genera material didáctico 92 Repositorio de"
            },
            {
                id: 278,
                question: "Según el artículo, ¿qué es probable que ocurra con la huella ambiental de la industria textil boliviana si la generación de diseños mediante IAG se adopta de manera generalizada?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La IAG permite generar patrones y diseños de manera digital, lo que acelera el proceso creativo y disminuye la necesidad de dibujar a mano o de imprimir prototipos físicos (párrafo sobre la industria creativa y la startup MinkaDesign). Al reducir esas etapas físicas, se espera una menor demanda de materiales y residuos, lo que implica una reducción de la huella ambiental."
            },
            {
                id: 279,
                question: "El artículo señala que, de cara al futuro, ¿cuál de las siguientes afirmaciones se puede inferir sobre la estrategia necesaria para maximizar el potencial de la IAG en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que la falta de infraestructura tecnológica en zonas rurales (p. 2) limita el aprovechamiento de la IAG, y que para mitigar riesgos se propone un marco regulatorio que incluya transparencia y responsabilidad (Sección 4). Asimismo, en la sección sobre educación se describe cómo la IAG puede mejorar la enseñanza y se sugiere su integración como coautor de materiales. Por lo tanto, la conclusión lógica es que una estrategia eficaz debe combinar mejoras de conectividad, regulación ética y adopción educativa."
            },
            {
                id: 280,
                question: "A partir de lo expuesto en el artículo, ¿cuál es el propósito principal de proponer un marco regulatorio que incluya transparencia, responsabilidad y acceso equitativo para la IAG en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo señala en la sección de retos éticos y regulatorios que se propone un marco con tres pilares: transparencia, responsabilidad y acceso equitativo. Su objetivo es “mitigar estos riesgos” (deepfakes, sesgos) y “evitar que la brecha digital se intensifique” en zonas rurales, garantizando que la IAG beneficie a la sociedad en general."
            },
            {
                id: 281,
                question: "Según el artículo, ¿qué principio general subyace a las soluciones propuestas para mitigar los riesgos de la inteligencia artificial generativa en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto propone un marco regulatorio que incluye transparencia, responsabilidad y acceso equitativo como líneas de acción para enfrentar los retos éticos y de brecha digital. Estas tres medidas se describen en la sección de retos éticos, regulatorios y de inclusión digital, donde se enfatiza la necesidad de filtros contra desinformación y la inversión en infraestructura de banda ancha en áreas rurales."
            },
            {
                id: 282,
                question: "Basándose en la información proporcionada, ¿cuál de las siguientes afirmaciones constituye la conclusión lógica más coherente respecto a la relación entre la adopción de la IA generativa en la educación del altiplano y su uso en la industria creativa de Santa Cruz?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El texto indica que en el altiplano el 42% de los colegios carecen de laboratorios bien equipados, y que la IA 93 generativa podría suplir parcialmente esa carencia, pero también señala que la infraestructura tecnológica es limitada en zonas rurales. Por otro lado, en el apartado de la industria creativa se describe que la startup Santa Cruz ‘MinkaDesign’ ya utiliza modelos generativos, logrando un aumento del 27% en la velocidad de lanzamiento de diseños y expansión de mercados, lo que evidencia un impacto productivo más notable. Así, la conclusión lógica es que, aunque la IA generativa ofrece beneficios educativos en el altiplano, su efecto productivo se manifiesta con mayor magnitud en la industria creativa de Santa Cruz debido a mejor infraestructura y adopción temprana."
            },
            {
                id: 283,
                question: "De acuerdo con el texto, ¿qué es probable que ocurra en Bolivia si el Estado invierte en infraestructura de internet de alta velocidad en zonas rurales y promueve programas de capacitación en IA dirigidos a docentes?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La falta de infraestructura tecnológica en zonas rurales es una limitante y que el acceso equitativo a internet y la capacitación docente son claves para evitar la brecha digital (sección 4). Si el Estado invierte en banda ancha y en programas de IA para docentes, se esperaría una reducción de esa brecha, facilitando el uso de IAG en educación rural y la producción de recursos locales, tal como se describe en los casos de estudio de Cochabamba y el altiplano."
            },
            {
                id: 284,
                question: "Considerando lo mencionado en el texto, ¿qué es probable que ocurra si los docentes bolivianos adoptan la generación estocástica de tokens en los asistentes de IA para crear ejercicios de práctica?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo explica que la selección del token puede hacerse de forma determinística (máxima probabilidad) o estocástica (muestreo), otorgando respuestas más creativas o variadas según el objetivo. Al optar por la generación estocástica, los asistentes de IA producirán ejercicios con distintas formulaciones cada vez que se soliciten, lo que incrementa la variedad, pero también la necesidad de que los docentes verifiquen la pertinencia curricular de cada ítem."
            },
            {
                id: 285,
                question: "El artículo señala que, al combinar los casos de estudio de la industria creativa y del desarrollo de software, ¿cuál es la conclusión lógica sobre el impacto económico de la IAG en Bolivia? La startup MinkaDesign logró un aumento del 27% en la velocidad de lanzamiento de diseños y que la Cámara Boliviana de Tecnologías reportó una reducción del 30% en los costos de desarrollo de software gracias al uso de asistentes de IA. Estas mejoras de productividad y reducción de costos son presentadas como oportunidades para la economía informal y la expansión a mercados externos (Uruguay y Chile). En contraste, la opción 2 distorsiona la información al afirmar que la IAG eleva los costos, cuando el texto destaca la posibilidad de usar servicios en la nube para evitar inversiones en hardware. La opción 3 niega el impacto en la economía informal, omitiendo los ejemplos de artesanos y programadores que se benefician. La opción 4 exagera los efectos al decir que la IAG elimina la brecha digital sin necesidad de capacitación, mientras que el artículo señala la necesidad de invertir en infraestructura y programas de formación.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca que solo el 35% de los hogares en Beni y Pando disponen de banda ancha estable (Instituto 94 Repositorio de"
            },
            {
                id: 286,
                question: "Según el artículo, ¿qué es probable que ocurra si el Estado no fortalece la infraestructura de internet en zonas rurales mientras la IAG se expande en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo destaca que solo el 35% de los hogares en Beni y Pando disponen de banda ancha estable (Instituto 94 Repositorio de"
            },
            {
                id: 287,
                question: "Basándose en la información proporcionada, ¿qué conclusión general se puede extraer acerca del impacto de la adopción de herramientas de IAG en la productividad de diferentes sectores en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo cita incrementos concretos asociados al uso de IAG: un aumento del 15% en la tasa de aprobación de estudiantes al integrar un asistente de IA en programación (sección de educación), un crecimiento del 27% en la velocidad de lanzamiento de nuevos diseños para la startup MinkaDesign (industria creativa) y una reducción del 30% en los costos de desarrollo de proyectos fintech al usar asistentes de código (sector de software). Estos ejemplos demuestran que, en los ámbitos donde se aplican, la IAG genera mejoras medibles de productividad."
            },
            {
                id: 288,
                question: "Del análisis presentado se desprende que, al considerar las diferentes soluciones propuestas para los retos de la IAG en Bolivia, ¿cuál es el principio general que subyace a dichas propuestas?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Retos éticos, regulatorios y de inclusión digital”, se propone un marco regulatorio que incluye tres pilares: transparencia (indicar que el contenido es generado por IA), responsabilidad (implementar filtros contra desinformación y discursos de odio) y acceso equitativo (inversión en infraestructura de banda ancha y capacitaciones). Estos tres elementos constituyen el principio general de promover una adopción inclusiva y responsable de la IAG."
            },
            {
                id: 289,
                question: "La lectura del texto permite identificar que, respecto a los desafíos ambientales en Bolivia, la información presentada es:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo trata los fundamentos técnicos de la IAG y sus aplicaciones en educación, la industria creativa y la economía informal, pero no presentan ninguna referencia a usos ambientales, como la gestión de recursos naturales o la mitigación de la contaminación. Por lo tanto, la relevancia de la información para desafíos ambientales es limitada."
            },
            {
                id: 290,
                question: "Según el artículo, ¿cuál sería la medida más adecuada para aplicar los principios de transparencia y responsabilidad al uso de asistentes de IA en la evaluación académica de universidades bolivianas?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El artículo propone que la transparencia (indicar que la salida es generada por IA) y la responsabilidad (capacitación docente para revisar críticamente el contenido) son pilares para mitigar riesgos éticos. En la sección de retos éticos se menciona que los sistemas deben “indicar claramente que la salida es generada por IA”, y que el Estado debe “apoyar programas de capacitación en IA dirigidos a docentes”. 95"
            },
            {
                id: 291,
                question: "De acuerdo con el texto, ¿cuál es la principal medida ética recomendada para mitigar los riesgos asociados al uso de la IAG en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección de “Retos éticos, regulatorios y de inclusión digital” el artículo propone, como medida clave, la “Transparencia”: los sistemas que producen contenido deben indicar claramente que la salida es generada por IA. Esa propuesta es la que se menciona explícitamente como forma de mitigar riesgos como la desinformación y los sesgos."
            },
            {
                id: 292,
                question: "A partir de lo expuesto en el artículo, ¿qué tan válido es el argumento del autor de que la ausencia de legislación específica sobre contenido generado por IA ha favorecido la polarización política en Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La sección de retos éticos y regulatorios, indica que la falta de legislación ha permitido que campañas políticas empleen textos automatizados sin revelar su origen, lo que “puede generar polarización”. Sin embargo, no se presentan datos cuantitativos ni estudios que midan directamente ese efecto, por lo que la validez del argumento es parcial."
            },
            {
                id: 293,
                question: "Considerando lo mencionado en el texto, ¿qué limitación del enfoque del autor respecto a los procesos técnicos de la IAG podría pasar desapercibida?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En la sección “Fundamentos técnicos de la IAG”, se describe cómo los modelos transformer se ejecutan normalmente a través de servicios en la nube, permitiendo a estudiantes y pequeñas empresas acceder sin hardware especializado. Sin embargo, el artículo también señala en el apartado de ‘Retos éticos, regulatorios y de inclusión digital’ que solo el 35% de los hogares en Beni y Pando disponen de conexión de banda ancha estable, lo que implica que la dependencia de la nube no garantiza un acceso universal."
            },
            {
                id: 294,
                question: "A partir de lo expuesto en el artículo, ¿qué sesgo o limitación del enfoque del autor podría conducir a una valoración incompleta del impacto de la IAG en la población rural boliviana?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La brecha digital y la baja conectividad en zonas como Beni y Pando (35% de hogares con banda ancha), la mayor parte de los ejemplos y datos presentados provienen de contextos urbanos (estudios de caso en Cochabamba y Santa Cruz, startups como MinkaDesign). No se incluye un estudio de caso rural ni datos cuantitativos sobre uso de IAG en áreas rurales, lo que representa una limitación del enfoque del autor para evaluar el impacto en la población rural."
            },
            {
                id: 295,
                question: "De acuerdo con el texto, ¿qué estrategia combinaría de forma más eficaz la mitigación de la brecha digital y el aprovechamiento de la IA generativa para capacitar a agricultores en zonas rurales de Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La brecha digital en regiones como Beni y Pando (solo 35% de hogares con banda ancha) puede intensificarse si el acceso a IAG se concentra en zonas urbanas, y propone como medida clave “Acceso equitativo” mediante inversión estatal en infraestructura de internet de alta velocidad y programas de capacitación. Al combinar la 96 Repositorio de"
            },
            {
                id: 296,
                question: "Considerando lo mencionado en el texto, ¿cómo se compara la metodología de atención de los modelos transformer descrita con los enfoques tradicionales basados en reglas en cuanto a su capacidad para adaptar la generación de contenido a contextos locales bolivianos?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los modelos transformer usan capas de atención que ponderan la relevancia de cada elemento del input (párrafo ‘Fundamentos técnicos de la IAG’), lo que permite generar texto o imágenes considerando el contexto completo. Esta capacidad contextual es precisamente lo que facilita la adaptación a patrones locales, como la generación de diseños inspirados en la estética aymara o la personalización de ejercicios para estudiantes bolivianos. En contraste, los sistemas basados en reglas siguen predefiniciones estáticas y no pueden ajustar dinámicamente su salida según el contexto, lo que los hace menos aptos para atender la diversidad cultural y educativa descrita en el artículo."
            },
            {
                id: 297,
                question: "Según el artículo, ¿qué tipo de evidencia adicional sería más apropiado para validar la afirmación de que la IA generativa mejora significativamente el rendimiento académico de los estudiantes en distintas regiones de Bolivia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La respuesta, proporciona una evidencia robusta, generalizable y cuantitativa que supera las limitaciones señaladas en el artículo. El texto menciona casos locales (Cochabamba) y aumentos de aprobación del 15% en una cohorte, pero reconoce la brecha digital y la falta de datos representativos a nivel nacional. Un estudio experimental controlado con muestras de diversas regiones y con mediciones pre y post intervención mediante pruebas estandarizadas permitiría aislar el efecto de la IA generativa y validar su impacto en distintas poblaciones. 97 REPOSITORIO DE PREGUNTAS PARA LA PRUEBA ACADÉMICA DE EDUCACIÓN SUPERIOR PARA LA FORMACIÓN PROFESIONAL Este repositorio centraliza el banco de preguntas diseñado para la prueba de admisión a la educación superior de formación profesional. El material tiene como objetivo principal orientar y preparar a los aspirantes durante su proceso de postulación. La evaluación se organiza en los siguientes cuatro componentes: 1. 2. 3. 4. Comprensión Lectora Razonamiento Lógico Conocimientos Generales Habilidades Socioemocionales Cabe destacar que cada ítem del repositorio incluye su respectivo sustento. Este se define como la justificación técnica o teórica que, basada en principios disciplinares, permite validar y seleccionar la opción correcta. A continuación, se efectúa una breve descripción del primero de ellos. COMPONENTE: RAZONAMIENTO LÓGICO Se evaluará la manera en que la persona postulante analiza una situación, identifica patrones o relaciones entre ideas y llega a conclusiones a partir de la información que se le presenta. No se busca medir conocimientos matemáticos avanzados, sino su capacidad para pensar con claridad, organizar ideas, resolver problemas y tomar decisiones basadas en la lógica. Es decir, se valorará la forma en que razona y encuentra soluciones, una habilidad fundamental para el trabajo que realizará durante su formación y en su futura práctica docente. IDENTIFICACIÓN DE PATRONES 1. Observa la s"
            },
            {
                id: 298,
                question: "La persona postulante se encuentra a cargo del último curso de secundaria. Durante una sesión de revisión para los exámenes de ingreso universitario, un estudiante que generalmente tiene buen desempeño comienza a criticar abiertamente la metodología de enseñanza, afirmando que es “anticuada e inútil”. Otros estudiantes empiezan a mostrar signos de acuerdo, generando un ambiente de tensión colectiva. El estudiante agrega: “Con esta forma de enseñar, ninguno de nosotros va a pasar el examen”. Ante esta situación, ¿cuál sería la respuesta más apropiada para manejar la tensión?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: ""
            },
            {
                id: 299,
                question: "Durante una jornada de observación en un colegio rural multigrado, la persona postulante nota que los estudiantes de diferentes edades muestran dificultades para trabajar en equipo. El director ofrece acceso a las planificaciones 216 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional de aula y a los registros de evaluación diagnóstica de los últimos tres meses. Como futura maestra o futuro maestro interesado en su formación, ¿cuál sería la acción más pertinente para comprender mejor esta situación?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: ""
            },
            {
                id: 300,
                question: "Durante una reunión de padres de familia, un padre expresa con gran emotividad su preocupación porque su hijo, quien presenta dificultades de aprendizaje, no está recibiendo suficiente apoyo. Mientras expone su situación, varios padres comienzan a mostrar señales de impaciencia. Como maestra o maestro a cargo de la reunión, ¿cuál sería la estrategia más apropiada para manejar esta situación?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: ""
            },
            {
                id: 301,
                question: "Durante una reunión de docentes para planificar el proyecto interdisciplinario anual, surge un conflicto entre dos colegas con enfoques pedagógicos diferentes: la profesora de Ciencias Sociales propone un proyecto basado en la investigación histórica con énfasis en el análisis crítico de fuentes, mientras que el profesor de Matemática defiende un proyecto centrado en estadísticas y modelado matemático de fenómenos sociales. La discusión se torna tensa, con argumentos que cuestionan la relevancia de cada propuesta. Como maestra o maestro que busca mediar este desacuerdo, ¿cuál sería la estrategia más adecuada para gestionar el conflicto?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: ""
            },
        ]
    },
    {
        component: "COMPRENSIÓN LECTORA",
        title: "Pregunta 22: A partir de lo expuesto en el artículo, ¿cuál de las siguientes consecuencias sociales",
        text: "Pregunta 22: A partir de lo expuesto en el artículo, ¿cuál de las siguientes consecuencias sociales relacionadas con la deforestación y el cambio climático en los Andes bolivianos no es contemplada e",
        fullText: `Pregunta 22: A partir de lo expuesto en el artículo, ¿cuál de las siguientes consecuencias sociales relacionadas con la deforestación y el cambio climático en los Andes bolivianos no es contemplada en el análisis del autor? Sustento El artículo describe detalladamente los impactos climáticos y menciona iniciativas de restauración y participación comunitaria, nunca aborda explícitamente el posible desplazamiento forzado de poblaciones indígenas originarias provocado por la expansión agrícola y la construcción de carreteras. Pregunta 23: Considerando lo mencionado en el texto, ¿cuál de las siguientes afirmaciones describe mejor una implicación ética de promover la expansión de la agricultura comercial en los Andes bolivianos sin integrar los saberes agroforestales tradicionales? Sustento El artículo subraya que la integración de conocimientos ancestrales (p.ej., rotación de cultivos y gestión comunitaria) es esencial para una restauración resiliente y que la exclusión de estas prácticas perpetuaría desigualdades sociales y culturales. Además, se menciona que iniciativas como el programa Biodiversidad Andina buscan revitalizar saberes tradicionales, lo que indica una dimensión ética al reconocer y valorar a las comunidades indígenas. Pregunta 24: A partir de lo expuesto en el artículo, ¿cuáles son las principales implicaciones ambientales de la retroalimentación entre la deforestación y el cambio climático descrita? Sustento El artículo señala que la pérdida de bosque disminuye el flujo latente de energía (LE), lo que eleva la temperatura del aire, y que la quema de residuos forestales emite alrededor de 12 MtCO2 al año. Además, la reducción del dosel disminuye la retención de agua en el suelo, intensificando la sequía y facilitando incendios, como se describe en la discusión de retroalimentaciones climáticas. Pregunta 25: Considerando lo mencionado en el texto, ¿cómo difiere la propuesta de gestión futura de una estrategia que se basara exclusivamente en tecnologías de monitoreo satelital sin integrar saberes tradicionales? Sustento El programa Biodiversidad Andina incorpora saberes tradicionales (rotación de cultivos, gestión comunitaria) y que, al mismo tiempo, se utilizan tecnologías de monitoreo satelital y sensores térmicos para identificar zonas con mayor estrés hídrico, describiendo un enfoque híbrido. Las opciones 1, 2 y 3 distorsionan la información del artículo: no se menciona una plantación exclusiva de especies exóticas, ni se limita la propuesta a PSA sin tecnología, ni se plantea que el sector privado sea el único agente de la gestión futura. Pregunta 26: Del análisis presentado se desprende que, para una evaluación completa del balance energético regional, ¿qué factor relevante no ha sido considerado por el autor? Sustento La pérdida de cobertura forestal y su efecto en el balance energético (párrafo 3, ecuación Q = Rn - G - H - LE) y menciona la expansión agrícola y minera como causas principales, pero no aborda la posible expansión urbana ni otras conversiones de suelo que tampoco están cubiertas por bosques. Estas áreas, aunque no forestales, pueden alterar la reflectancia (albedo) y la evaporación, afectando directamente H y, por ende, la temperatura regional.`,
        questions: [
            {
                id: 302,
                question: "Durante una sesión de trabajo en grupo en cuarto de primaria, un estudiante con diagnóstico de TEA (Trastorno del Espectro Autista) manifiesta incomodidad ante los ruidos fuertes y la proximidad física de sus compañeros. Un grupo de estudiantes comienza a burlarse de sus reacciones, imitando sus movimientos y aumentando deliberadamente el volumen de voz. La persona postulante, en su rol de maestra o maestro a cargo, observa la situación. ¿Cuál sería la intervención más adecuada en ese momento? 217 Av. Arce No. 2147 Teléfonos: (591.2) 2442144 - 2442074 La Paz - Bolivia Educación de calidad, innovadora y abierta al mundo.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: ""
            },
            {
                id: 303,
                question: "Observa la siguiente serie numérica: 2, 5, 9, 14, 20, ¿cuál es el número que sigue?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para hallar el patrón, calculamos las diferencias entre términos consecutivos: 5‑2 = 3, 9‑5 = 4, 14‑9 = 5, 20‑14 ="
            },
            {
                id: 304,
                question: "En una fila de baldosas, cada una tiene el doble de puntos que la anterior. Si la primera baldosa tiene",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La secuencia sigue una regla de multiplicar por 2 en cada paso: 3, 6 (3×2), 12 (6×2), 24 (12×2), 48 (24×2). Por lo tanto, la quinta baldosa tendrá 48 puntos. Reconocer que cada término es el doble del anterior permite determinar rápidamente el siguiente valor sin necesidad de cálculos complejos. 98 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional"
            },
            {
                id: 305,
                question: "Observa la siguiente serie de números: 2, 4, 8, 16, __. ¿Cuál número completa correctamente la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada número de la serie se obtiene multiplicando el anterior por 2: 2×2=4, 4×2=8, 8×2=16. Por lo tanto, el siguiente término es 16×2=32. La opción correcta es 32, ya que mantiene la regularidad de dobles sucesivos."
            },
            {
                id: 306,
                question: "Observa la siguiente sucesión numérica: 3, 6, 12, 24, __. ¿Cuál es el número que continúa la serie?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada número de la sucesión se obtiene multiplicando el anterior por 2: 3 × 2 = 6, 6 × 2 = 12, 12 × 2 = 24. Siguiendo la misma regla, el siguiente término es 24 × 2 = 48. Por lo tanto, la respuesta correcta es 48. Esta lógica muestra la capacidad de identificar el patrón de duplicación y generalizarlo para predecir el próximo elemento de la serie."
            },
            {
                id: 307,
                question: "Observa la siguiente serie de letras: A, C, F, J, O, … ¿Cuál es la letra que sigue en la secuencia?",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para identificar el patrón, convierta cada letra a su posición en el alfabeto: A=1, C=3, F=6, J=10, O=15. Observe los incrementos entre valores consecutivos: 1→3 (+2), 3→6 (+3), 6→10 (+4), 10→15 (+5). Cada paso aumenta en una unidad respecto al anterior. El próximo incremento será +6, por lo que 15+6=21. La letra que ocupa la posición 21 del alfabeto es la ‘U’. Así, la respuesta correcta es ‘U’."
            },
            {
                id: 308,
                question: "En una campaña de entrega de caramelos, la cantidad que se reparten cada día se duplica respecto al",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La secuencia muestra que cada término es el doble del anterior (multiplicación por 2). Partiendo de 3, se obtiene 3 × 2 = 6, 6 × 2 = 12, 12 × 2 = 24. Aplicando la misma regla al último término: 24 × 2 = 48. Por lo tanto, el Día 5 se repartirán 48 caramelos."
            },
            {
                id: 309,
                question: "En una escuela se organizan filas de sillas para una presentación. La primera fila tiene 5 sillas, y cada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La cantidad de sillas forma una progresión aritmética donde el primer término a1 = 5 y la diferencia común d = 2. Para hallar el número de sillas en la quinta fila (a5) se usa la fórmula an = a1 + (n‑1)·d. Así, a5 = 5 + (5‑1)·2 = 5 + 8 = 13. Por lo tanto, la quinta fila tendrá 13 sillas. 99 9. Observa la siguiente serie numérica: 2, 5, 8, 11, … ¿Cuál es el número que sigue en la secuencia? Sustento La serie aumenta en 3 unidades en cada paso: 2 + 3 = 5, 5 + 3 = 8, 8 + 3 = 11. Por lo tanto, el próximo término se obtiene sumando 3 al último número: 11 + 3 = 14. Esta regla de adición constante permite generalizar el patrón y predecir cualquier término futuro de la secuencia. 10.Observe la siguiente serie de números: 2, 5, 10, 17, 26, __. ¿Cuál es el número que completa la secuencia? Sustento Cada término de la serie se obtiene al elevar al número de posición (comenzando en 1) al cuadrado y sumarle 1: 1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17, 5²+1=26. Siguiendo la misma regla, el sexto término será 6²+1=36+1=37. Por lo tanto, la respuesta correcta es 37. Este tipo de razonamiento requiere identificar la regularidad subyacente y aplicar la misma regla al siguiente elemento de la secuencia."
            },
            {
                id: 310,
                question: "En una serie que indica cuántos libros lee un estudiante cada mes, los valores son: 2, 5, 10, 17, 26, …",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Observando la sucesión 2, 5, 10, 17, 26 podemos buscar la regla que genera cada término. Restando los números consecutivos obtenemos: 5‑2 = 3, 10‑5 = 5, 17‑10 = 7, 26‑17 = 9. Los incrementos forman la secuencia de los números impares 3, 5, 7, 9, que a su vez corresponde a (2·n+1) donde n comienza en 1. Otra forma más directa es notar que cada término puede expresarse como n²+1: - Para n=1: 1²+1 = 2 - Para n=2: 2²+1 = 5 - Para n=3: 3²+1 = 10 - Para n=4: 4²+1 = 17 - Para n=5: 5²+1 = 26 Siguiendo la misma regla, el sexto término será 6²+1 = 36+1 = 37. Por lo tanto, la respuesta correcta es 37. 12.Una profesora dispone los números de los pupitres siguiendo la siguiente serie: 5, 11, 19, 29, … ¿Cuál es el número que corresponde al siguiente pupitre? Sustento Para identificar el siguiente número de la serie, observamos las diferencias entre términos consecutivos: 11‑5 = 6, 19‑11 = 8, 29‑19 = 10. Las diferencias forman una progresión creciente en 2 unidades (6, 8, 10,…). La próxima diferencia, por lo tanto, será 12. Sumando 12 al último término conocido (29) obtenemos 29 + 12 = 41. Así, la respuesta correcta es 41. Este razonamiento muestra cómo reconocer la regularidad en los incrementos y aplicar la regla encontrada para predecir el siguiente elemento de la secuencia. 13.Una estudiante registró la cantidad de libros que lee cada mes durante varios meses: 2, 5, 10, 17, 26, … ¿Cuántos libros debería leer el mes siguiente si mantiene el mismo patrón? Sustento Para hallar el patrón, observamos las diferencias entre números consecutivos: 5‑2 = 3, 10‑5 = 5, 17‑10 = 7, 26‑17 = 9. Las diferencias forman la serie de números impares crecientes (3, 5, 7, 9…). El siguiente número impar es 11, por lo que la diferencia esperada es 11. Sumando esta diferencia al último término conocido: 26 + 11 = 37. Por lo tanto, la respuesta correcta es 37 libros. 100 Repositorio de Preguntas para la Prueba Académica de Educació"
            },
            {
                id: 311,
                question: "Una maestra dispone 48 fichas para repartir entre 6 grupos, de forma que cada grupo reciba la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que cada grupo reciba la misma cantidad de fichas, dividimos el total de fichas entre el número de grupos: 48 ÷ 6 = 8. Además, 8 es múltiplo de 4 (8 = 4 × 2), cumpliendo la condición adicional. Por lo tanto, cada grupo debe recibir 8 fichas. Las demás opciones no cumplen ambas condiciones simultáneamente."
            },
            {
                id: 312,
                question: "En una fila se colocan fichas de colores siguiendo el patrón: rojo, azul, verde, rojo, azul, verde, …",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El patrón de colores se repite cada tres fichas: rojo → azul → verde. Para determinar el color de la posición 20, dividimos 20 entre 3. El cociente es 6 y el residuo es 2 (20 = 3·6 + 2). El residuo indica la posición dentro del ciclo: 1 corresponde a rojo, 2 a azul y 3 a verde. Como el residuo es 2, la ficha número 20 corresponde al segundo elemento del ciclo, es decir, al color azul."
            },
            {
                id: 313,
                question: "En una sucesión numérica el primer término es 5 y cada término siguiente se obtiene sumando 4 al",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para obtener el n‑ésimo término de una sucesión aritmética se parte del primer término y se suma el incremento (diferencia) multiplicado por (n‑1). Aquí el primer término a1= 5 y la diferencia d = 4. El sexto término será a6 = a1+ (6‑1)·d = 5 + 5·4 = 5 + 20 = 25."
            },
            {
                id: 314,
                question: "En una granja, el número de gallinas es el doble del número de conejos. Si el total de animales",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea C el número de conejos. Entonces el número de gallinas es 2C. El total de animales es C + 2C = 3C, y se sabe que es 30. Por lo tanto, 3C = 30, de donde C = 30 / 3 = 10. Así, hay 10 conejos en la granja. Esta solución muestra cómo elegir la estrategia de plantear una ecuación lineal basada en la relación dada y resolverla paso a paso. 119 104. En un concurso de matemática, se deben formar equipos de tres estudiantes cuya suma total de puntuaciones sea al menos 20 puntos. Las puntuaciones de los seis participantes son: Ana 8, Luis 7, Carla 6, Pedro 5, Marta 4 y José 3. ¿Cuál de los siguientes grupos cumple la condición requerida? Sustento Para verificar cada alternativa se suma la puntuación de los tres estudiantes indicados. Sólo el grupo “Ana + Luis + Carla” produce una suma de 8 + 7 + 6 = 21, que es mayor o igual a 20. Las demás combinaciones dan 17, 18 y 13 respectivamente, por debajo del umbral establecido. Por lo tanto, la estrategia consiste en añadir las puntuaciones y comparar con el valor requerido; la única opción que satisface la condición es la segunda."
            },
            {
                id: 315,
                question: "Una biblioteca escolar cuenta con 84 libros idénticos que se organizarán en estanterías. Cada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para cumplir con la condición, se busca el mayor número de libros por estantería que sea múltiplo de 3 y ≤ 12, pues al maximizar los libros por estantería se minimiza la cantidad de estanterías. Los múltiplos de 3 menores o iguales a 12 son 3, 6 y 12. Dividiendo los 84 libros entre cada uno se obtiene: 84/3 = 28, 84/6 = 14 y 84/12 = 7. El menor número de estanterías corresponde a usar 12 libros por estantería, lo que da 84 ÷ 12 = 7 estanterías."
            },
            {
                id: 316,
                question: "En una escuela se organizan equipos de debate. Cada equipo debe estar formado por exactamente 4",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se determina cuántos equipos podrían formarse sin ninguna restricción: la escuela tiene en total 12+8+6+4 = 30 estudiantes, y cada equipo necesita 4 integrantes, por lo que el número máximo posible de equipos es ⌊30/4⌋ = 7 (ya que 7×4 = 28 y sobran 2 estudiantes). La condición adicional exige que cada equipo tenga al menos un estudiante de nivel 3 o 4. Hay 6 estudiantes de nivel 3 y 4 de nivel 4, es decir, 10 estudiantes que cumplen esa condición. Como se requieren 7 equipos, basta con disponer de al menos 7 estudiantes de nivel ≥3, lo cual es posible porque hay 10. Después de asignar un estudiante de nivel alto a cada uno de los 7 equipos, quedan 30‑7 = 23 estudiantes para completar los cupos restantes (3 por equipo, en total 21 plazas). Como 23 ≥ 21, se pueden llenar todos los equipos."
            },
            {
                id: 317,
                question: "En una escuela, la cantidad de estudiantes en las clases se incrementa siguiendo una estrategia",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Observando los datos, la diferencia entre los números de alumnos de clases consecutivas es constante: 15‑12 = 3, 18‑15 = 3 y 21‑18 = 3. Esto indica que se está aplicando una estrategia de suma de 3 alumnos por cada nueva clase, es decir, una progresión aritmética con razón 3. Para obtener el número de alumnos de la clase 5, se suma 3 al valor de la clase 4: 21 + 3 = 24."
            },
            {
                id: 318,
                question: "En una lista de precios de materiales de construcción se tienen los valores: 120, 85, 150, 95 y 130",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para encontrar el precio más bajo basta aplicar la estrategia de ordenar los valores de menor a mayor; el primer número del orden resultante será el mínimo. Esta táctica es directa y evita operaciones innecesarias como multiplicar, sumar o dividir, que no alteran la posición relativa de los números y sólo complican el proceso. Al ordenar simplemente, el postulante demuestra que ha seleccionado la estrategia más eficiente y la ha aplicado correctamente."
            },
            {
                id: 319,
                question: "En una secuencia numérica, cada término se obtiene multiplicando el término anterior por 2 y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para hallar cada término se aplica la regla an = 2·a₍n₋1₎ + 1. - a1 = 3 (dado). - a2 = 2·3 + 1 = 7. - a3 = 2·7 + 1 ="
            },
            {
                id: 320,
                question: "En una serie de números se observa la siguiente secuencia: 3, 8, 15, 24, 35, … ¿Cuál es el siguiente",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para hallar el siguiente término debemos identificar la regla que genera la serie. Calculando las diferencias entre términos consecutivos obtenemos: 8‑3 = 5, 15‑8 = 7, 24‑15 = 9, 35‑24 = 11. Las diferencias forman una progresión aritmética cuyo incremento es constante e igual a 2 (5, 7, 9, 11,…). Por lo tanto, la siguiente diferencia será 11 + 2 = 13. Sumando esta diferencia al último término conocido: 35 + 13 = 48. Así, el número que sigue a la serie es 48."
            },
            {
                id: 321,
                question: "Una escuela tiene 48 alumnos que deben ser divididos en grupos idénticos para una actividad de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que el número de grupos sea un cuadrado perfecto, primero enumeramos los cuadrados menores o iguales a 48: 1, 4, 9, 16, 25, 36. Cada uno debe dividir exactamente a 48, pues los alumnos se reparten sin residuos. Verificamos los divisores de 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48. De los cuadrados listados, sólo 1, 4 y 16 aparecen como divisores de 48. El mayor de ellos es 16, por lo que se pueden formar 16 grupos con 48 ÷ 16 = 3 alumnos por grupo."
            },
            {
                id: 322,
                question: "En una serie numérica el primer término es 3 y cada término se forma sumando al anterior el siguiente",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver la pregunta se debe identificar la regla que genera la serie. Partiendo del primer término (3), a cada término se le suma el siguiente número impar: 1. 3 + 1 = 4 (segundo término) 2. 4 + 3 = 7 (tercer término) 3. 7 + 5 = 12 (cuarto término) 4. 12 + 7 = 19 (quinto término). Así, el quinto término es 19. Esta estrategia consiste en observar los incrementos entre términos, reconocer que forman la sucesión de los números impares y aplicar la suma sucesiva, lo que corresponde a la capacidad de seleccionar y aplicar la estrategia adecuada para identificar patrones numéricos."
            },
            {
                id: 323,
                question: "Una escuela necesita asignar a cada uno de sus 5 salones un docente diferente de entre 5 docentes",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para contar cuántas formas distintas existen de asignar 5 docentes a 5 salones, cada salón recibe un docente y ninguno se repite. En el primer salón hay 5 opciones posibles, en el segundo 4 (el docente ya usado no está disponible), en el tercero 3, luego 2 y finalmente 1. El número total de asignaciones se obtiene multiplicando las opciones de cada paso: 5 × 4 × 3 × 2 × 1 = 120. Este razonamiento corresponde al principio de multiplicación, que establece que si una tarea se puede realizar de m maneras y, una vez realizada, una segunda tarea de n maneras, entonces ambas tareas consecutivas pueden completarse de m·n maneras. Los demás principios listados (adición, prueba y error, inducción) no se aplican a este tipo de conteo porque no suman alternativas mutuamente excluyentes ni implican razonamiento inductivo. Por lo tanto, la estrategia correcta es el principio de multiplicación. 122 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional"
            },
            {
                id: 324,
                question: "En una clase se sabe que:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los datos dados son: (1) “Si aprueba, entonces estudió ≥3 horas” y (2) “Carlos estudió 4 horas”. La premisa (1) es una implicación que solo asegura que, en caso de que el estudiante haya aprobado, su tiempo de estudio será al menos 3 horas. No indica nada sobre lo que ocurre cuando estudia ≥3 horas sin aprobar. Por lo tanto, no podemos concluir que Carlos aprobó o que no aprobó; ambas posibilidades siguen abiertas. Lo único que sí podemos afirmar con certeza es que, si en algún momento se comprobara que Carlos aprobó, entonces, según la regla (1), necesariamente habría estudiado al menos 3 horas. Dado que ya sabemos que estudió 4 horas (≥3), la condición del consecuente se cumple, pero la antecedente (aprobar) sigue sin estar confirmada. Así, la única afirmación lógicamente válida es la opción que establece la relación condicional: “Si Carlos aprobó, estudió al menos 3 horas”."
            },
            {
                id: 325,
                question: "En una tarea de matemática, el profesor pide determinar el mayor número entero que divide exactamente",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El mayor número que divide simultáneamente a 84, 126 y 210 es su máximo común divisor (MCD). El algoritmo de Euclides permite encontrar el MCD de dos números mediante restas sucesivas o, de forma más eficiente, usando divisiones con resto: MCD(a,b)=MCD(b, resto). Aplicando el algoritmo primero a 84 y 126 se obtiene MCD=42; luego se calcula MCD(42,210), que también resulta 42. Por lo tanto, el procedimiento que utiliza el algoritmo de Euclides es el más rápido y fiable. Las otras opciones requieren procesos más extensos o no garantizan el resultado correcto."
            },
            {
                id: 326,
                question: "En una fila de espera, Carlos ocupa el primer puesto, José está justo detrás de Carlos y Luis está justo",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según el enunciado, Carlos está en el primer puesto. José se coloca inmediatamente detrás de él, ocupando el segundo puesto. Luis se sitúa justo detrás de José, por lo que ocupa el siguiente lugar en la fila, es decir, el tercer puesto. Para establecer este argumento, se identifican las relaciones de posición (delante y detrás) y se encadenan de forma lógica para llegar a la conclusión correcta."
            },
            {
                id: 327,
                question: "En una fila de cinco asientos para una competición de matemática, se disponen los estudiantes Sofia,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver el problema, se analizan las condiciones paso a paso. Sabemos que Diego está en el tercer asiento, por lo que los asientos quedan distribuidos así: _ _ D _ _. La condición 2 indica que Bruno está inmediatamente a la izquierda de Carla, lo que puede suceder en los pares (1‑2), (2‑3), (3‑4) o (4‑5). Como el asiento 3 ya está ocupado por Diego, los pares posibles son (1‑2) y (4‑5). Si Bruno‑Carla estuvieran en (1‑2), entonces Bruno estaría en el primer asiento y Carla en el segundo, pero la condición 1 prohíbe que Sofia esté en un extremo y la condición 4 prohibe que Elena quede al lado de Sofia; no hay forma de ubicar a Sofia y Elena sin violar esas reglas. Por lo tanto, la pareja Bruno‑Carla debe ocupar los asientos (4‑5), con Bruno en el cuarto y Carla en el quinto. Quedan libres los asientos 1 y 2 para Sofia y Elena. Como Sofia no puede estar en un extremo (condición 1), ella debe estar en el segundo asiento y Elena en el primero. Verificando la condición 4, Elena (asiento 1) no está al lado de Sofia (asiento 2), lo cual cumple. Así, la disposición final es: 1‑Elena, 2‑Sofia, 3‑Diego, 4‑Bruno, 5‑Carla. La única afirmación que coincide con esta disposición es que “Elena ocupa el cuarto asiento” es falsa; la correcta es que “Elena ocupa el cuarto asiento” según la respuesta elegida, pero al revisar la disposición, Elena está en el primer asiento, por lo tanto la afirmación correcta es la que indica que “Elena ocupa el cuarto asiento” es incorrecta. Sin embargo, revisando la lista de opciones, la respuesta que corresponde a la ubicación real de Elena es la opción C) “Elena ocupa el"
            },
            {
                id: 328,
                question: "En una escuela se afirma que: 1) Todos los libros son objetos y 2) Todos los objetos son cosas. Con",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las premisas indican una cadena de inclusión: “Todos los libros son objetos” y “Todos los objetos son cosas”. En lógica, la relación de inclusión es transitiva; es decir, si A está contenido en B y B está contenido en C, entonces A está contenido en C. Por lo tanto, se deduce necesariamente que todos los libros son cosas. Las otras opciones no se pueden garantizar a partir de la información dada: puede haber objetos que no sean libros, puede haber libros que sí sean cosas (pero la afirmación “Ningún libro es una cosa” contradice la conclusión lógica), y la existencia de “algunas cosas” que sean libros no es obligatoria."
            },
            {
                id: 329,
                question: "En una escuela se organizan 84 libros en estanterías. Cada estantería debe contener el mismo número",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para obtener el mayor número posible de estanterías se necesita que cada estantería tenga la menor cantidad de libros permitida, es decir, 6 libros. Dividiendo el total de libros (84) entre 6 se obtiene 84 ÷ 6 = 14. Este es el número máximo de estanterías que cumplen con la condición de tener el mismo número de libros y al menos 6 por estantería. Cualquier número mayor de estanterías implicaría menos de 6 libros por estantería, lo cual viola la condición establecida. 124 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional"
            },
            {
                id: 330,
                question: "En una serie de bloques de construcción, la cantidad de bloques que se colocan en cada fila sigue el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para identificar la regla, observamos las diferencias entre términos consecutivos: 52 = 3, 95 = 4, 149 = 5. Las diferencias aumentan en una unidad cada paso (3, 4, 5, …). Por lo tanto, la siguiente diferencia será 6. Sumando 6 al último término conocido (14) obtenemos 14 + 6 = 20. Así, la quinta fila tendrá 20 bloques. Esta respuesta se obtiene aplicando la estrategia de reconocer y extender una secuencia de diferencias crecientes, lo que evidencia razonamiento lógico matemático."
            },
            {
                id: 331,
                question: "En una clase de 5° grado se establecen las siguientes reglas:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La premisa 1 establece una condición necesaria: para aprobar el examen, el estudiante debe contar con al menos 80% de asistencia. La premisa 2 indica que María aprobó. Aplicando la regla anterior, concluimos que María debe cumplir la condición requerida, es decir, tiene al menos 80% de asistencia. Las demás opciones no se derivan de las premisas dadas: la asistencia de Carlos no permite inferir su desempeño académico, la afirmación de que todos los que tienen 80% aprueban invierte la dirección lógica (la condición es necesaria, no suficiente), y la última opción contradice directamente la información de que al menos María aprobó."
            },
            {
                id: 332,
                question: "En una escuela, tres docentes (Sofia, Bruno y Carla) deben supervisar un examen dividido en dos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Analicemos las opciones con las condiciones dadas: 1) Si Sofia está en la mañana, la condición (1) obliga a que Bruno esté en la tarde. Entonces, para cumplir (3) (dos docentes en la mañana), Carla debe estar en la mañana. Además, Carla no comparte turno con Bruno, lo que se cumple porque Bruno está en la tarde. Esta combinación 125 (Sofia mañana, Bruno tarde, Carla mañana) satisface todas las condiciones, por lo que es la respuesta correcta. 2) En la segunda opción, Sofia está en la tarde, pero no hay restricción directa sobre Bruno; sin embargo, Carla comparte turno con Bruno (ambos en la mañana), violando la condición (2). 3) En la tercera opción, tanto Sofia como Bruno estarían en la mañana, lo que contradice la condición (1) que exige que si Sofia está en la mañana, Bruno debe estar en la tarde. 4) En la cuarta opción, tanto Sofia como Bruno están en la tarde, lo que no permite que haya exactamente dos docentes en la mañana, incumpliendo la condición (3). Por lo tanto, solo la primera alternativa cumple de manera coherente todas las premisas del enunciado."
            },
            {
                id: 333,
                question: "Una maestra debe repartir a sus 12 alumnos en tres grupos. Cada grupo debe contener un número",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para satisfacer las condiciones se deben cumplir tres requisitos: (1) la suma de los tres tamaños debe ser 12, (2) los tres números deben ser distintos y (3) ninguno de los pares de números puede ser consecutivo (es decir, no pueden diferir en 1). - Opción A (5+4+3=12) cumple la suma y la distinción, pero 5 y 4 son consecutivos, por lo que se descarta. - Opción B (7+4+1=12) cumple la suma, los tres números son distintos y las diferencias entre ellos son 3 (74) y 3 (41) y 6 (71), ninguna es 1; por lo tanto, satisface todas las condiciones. - Opción C (8+2+2=12) no cumple la condición de números distintos, pues dos grupos tendrían 2 estudiantes. - Opción D (6+3+3=12) también falla en la condición de distintividad, ya que dos grupos tendrían 3 estudiantes. Así, la única alternativa válida es la B: 7, 4 y 1 estudiante."
            },
            {
                id: 334,
                question: "En una biblioteca hay tres categorías de libros: A, B y C. El número total de libros es 210. Cada libro",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea a, b y c la cantidad de libros de las categorías A, B y C respectivamente. Se plantean tres ecuaciones a partir de la información dada: 1) a + b + c = 210 (número total de libros). 2) 4a + 3b + 2c = 720 (número total de volúmenes, pues cada libro aporta su cantidad de volúmenes). 3) a = 3c (los libros de A son triple que los de C). Sustituyendo a = 3c en la ecuación (1): 3c + b + c = 210 → b + 4c = 210 → b = 210 – 4c. Ahora sustituimos a = 3c y b = 210 – 4c en la ecuación (2): 4(3c) + 3(210 – 4c) + 2c = 720 → 12c + 630 – 12c + 2c = 720 → 2c + 630 = 720 → 2c = 90 → c = 45. Con c = 45, se obtiene a = 3c = 135 y b = 210 – 4c = 210 – 180 = 30. Esta solución demuestra la capacidad de seleccionar la estrategia adecuada (planteamiento de un sistema lineal) y aplicarla paso a paso para llegar a la respuesta correcta."
            },
            {
                id: 335,
                question: "Una docente debe repartir 84 lápices entre 5 aulas de primaria. Cada aula debe recibir al menos 10",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se garantiza el mínimo: cada aula recibe 10 lápices, lo que consume 5 × 10 = 50 lápices. Quedan 84 − 50 = 34 lápices por distribuir. Para minimizar la diferencia entre la mayor y la menor cantidad, se reparten esos 34 lápices lo más uniformemente posible. Dividiendo 34 entre 5 aulas se obtiene 6 lápices completos por aula con un resto de 4 lápices (34 = 5 × 6 + 4). Así, a cada aula se le añaden 6 lápices, y a cuatro de ellas se les da un lápiz extra del resto. Cada aula tiene entonces 10 + 6 = 16 lápices como base; cuatro aulas reciben un lápiz adicional, pasando a 17. De esta forma una aula recibe 17 lápices (máximo) y otra 16 (mínimo), logrando la diferencia mínima de 1 lápiz. 126 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional"
            },
            {
                id: 336,
                question: "En una escuela se sabe que:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De la premisa 1 se establece una relación universal: si un alumno pertenece al club de ciencias, entonces su calificación en matemática es >80. La premisa 2 indica que Carlos pertenece a ese club. Aplicando modus ponens (Si P entonces Q; P es verdadera; por lo tanto Q es verdadera), concluimos que la calificación de Carlos es mayor a 80. Ninguna de las demás opciones se sigue obligatoriamente: la información no dice nada sobre la calificación de María ni de otros alumnos que no están en el club, por lo que esas afirmaciones podrían ser falsas."
            },
            {
                id: 337,
                question: "En una escuela se cumple que todos los profesores poseen título universitario. Además, María es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las premisas establecen una relación universal: “todos los profesores poseen título universitario” y una relación particular: “María es profesora de historia”. Aplicando el razonamiento deductivo (modus ponens), si la condición “ser profesor” implica “tener título universitario”, y María cumple la condición de ser profesora, entonces necesariamente debe cumplir la conclusión de poseer título universitario. Las demás opciones no se siguen de las premisas dadas; no hay información sobre la condición de ser estudiante ni sobre los requisitos para los estudiantes, por lo que esas afirmaciones no son necesariamente verdaderas."
            },
            {
                id: 338,
                question: "En una escuela se establecen los siguientes enunciados: 1) Si un docente usa recursos digitales,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De la premisa (3) sabemos que existen docentes novatos que usan recursos digitales. Según la premisa (1), esos docentes que usan recursos digitales integran tecnología en sus clases. A su vez, la premisa (2) indica que todo docente que integra tecnología alcanza mayor compromiso estudiantil. Por lo tanto, los docentes novatos que usan recursos digitales también logran mayor compromiso estudiantil. Esta cadena de inferencias valida la conclusión: “Algunos docentes novatos logran mayor compromiso estudiantil”. Las demás opciones no se 127 derivan de las premisas dadas: la opción B niega lo establecido en (3), la C generaliza sin base y la D invierte incorrectamente la relación condicional."
            },
            {
                id: 339,
                question: "En una competencia de baloncesto, el número de puntos anotados por un equipo en cada cuarto",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver la pregunta se debe identificar la regla que rige la secuencia de puntos. Observando los incrementos entre términos: 17‑12 = 5, 23‑17 = 6, 30‑23 = 7. Cada vez el incremento aumenta en una unidad. Si la tendencia continúa, el siguiente incremento será 8. Por lo tanto, el quinto término será 30 + 8 = 38. La respuesta correcta es 38. Este razonamiento muestra la selección y aplicación de la estrategia de analizar diferencias sucesivas y detectar un patrón aritmético creciente."
            },
            {
                id: 340,
                question: "En una clase de primaria, la maestra reparte paquetes de lápices a sus alumnos. Cada paquete contiene",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La información indica que a cada uno de los 5 estudiantes se le entregan 3 paquetes, y que el total de lápices usados es 60. Si x representa la cantidad de lápices por paquete, el número total de lápices es 3 paquetes × 5 estudiantes × x lápices/paquete = 15x. Igualando a 60 se obtiene la ecuación 15x = 60. Dividiendo ambos lados por 15 se halla x = 60 / 15 = 4. Por lo tanto, cada paquete contiene 4 lápices."
            },
            {
                id: 341,
                question: "En una competencia de lógica, la puntuación acumulada por un equipo después de cada ronda forma",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Observemos la pauta de la sucesión: de 3 a 7 se sumó 4, de 7 a 15 se sumó 8 y de 15 a 31 se sumó 16. Los incrementos son 4, 8 y 16, que corresponden a potencias de 2 (2², 2³, 24). Así, cada término se obtiene sumando al anterior la siguiente potencia de 2. Para pasar del cuarto al quinto término debemos sumar 25 = 32 a 31, lo que da 31 + 32 = 63."
            },
            {
                id: 342,
                question: "En una escuela se deben sentar 156 alumnos en filas y columnas formando un rectángulo completo (sin",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que todos los 156 alumnos ocupen un rectángulo sin asientos vacíos, el número de filas (f) y columnas (c) deben ser factores de 156, es decir, f × c = 156. Primero se listan los pares de factores: (1,156), (2,78), (3,52), (4,39), (6,26), (12,13), (13,12), (26,6), (39,4), (52,3), (78,2), (156,1). El director exige que filas > columnas y que la diferencia f‑c sea mínima. Entre los pares con filas mayores que columnas, los posibles son (2,78), (3,52), (4,39), (6,26), (13,12), (26,6), (39,4), (52,3), (78,2), (156,1). Calculando la diferencia absoluta: 76, 49, 35, 20, 1, 20, 35, 49, 76, 155. El valor más pequeño es 1, correspondiente al par (13,12)."
            },
            {
                id: 343,
                question: "En una escuela se dispone de 5 horas para actividades extraescolares. El taller de arte requiere 2",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El total de tiempo disponible es de 5 horas. El taller de arte (2 h) + el club de ciencias (3 h) suman exactamente 5 h, por lo que esas dos actividades pueden combinarse sin exceder el límite, pero al agregar el grupo de teatro (1 h) se superaría el tiempo disponible (6 h). Así, la única combinación que respeta la restricción es realizar el taller de arte y el club de ciencias, excluyendo el grupo de teatro. Las demás opciones o bien exceden el tiempo disponible o no utilizan todo el tiempo disponible cuando sí sería posible."
            },
            {
                id: 344,
                question: "En una escuela, se deben programar tres actividades durante la mañana: Lectura, Matemática y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para cumplir la primera condición, Lectura debe ir antes que Educación Física. Las posibles posiciones de Lectura son la primera o la segunda hora. La segunda condición prohíbe que Matemática sea la primera actividad. Analicemos cada opción: - Opción 1: Lectura – Matemática – Educación Física → Cumple ambas condiciones (Lectura precede a Educación Física y Matemática no es primera). Es válida. - Opción 2: Matemática – Lectura – Educación Física → Violación de la condición 2 porque Matemática está en primer lugar. - Opción 3: Lectura – Educación Física – Matemática → Violación de la condición 1 porque Educación Física aparece inmediatamente después de Lectura, pero la condición no prohíbe eso; sin embargo, Matemática queda en tercera posición, lo cual es permitido, pero la condición 1 sí se cumple. No obstante, esta opción también es válida, pero el enunciado indica que solo una respuesta es correcta; al revisar detenidamente, la opción 3 coloca Educación Física antes que Matemática, lo cual no contradice ninguna condición, pero la respuesta correcta esperada es la que sigue el orden lógico más directo sin cambiar la posición relativa de los demás. - Opción 4: Lectura – Matemática – Educación Física → Cumple ambas condiciones y es la más directa, ya que mantiene el orden solicitado sin intercambios adicionales. De acuerdo con la interpretación habitual de este tipo de problemas, la opción que satisface claramente ambas restricciones es la opción 4. Por lo tanto, la respuesta correcta es la opción 4. Este razonamiento muestra cómo identificar relaciones de orden y aplicar restricciones para construir un argumento lógico coherente."
            },
            {
                id: 345,
                question: "En una escuela se forman tres grupos (A, B y C) para una excursión. Cada grupo debe tener entre 10 y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x el número de estudiantes del grupo B. Entonces el grupo A tiene x‑4 estudiantes y el grupo C también tiene x‑4 estudiantes. Cada grupo debe estar entre 10 y 15 estudiantes, por lo que se cumple: 10 ≤ x‑4 ≤ 15 y 10 ≤ x ≤"
            },
            {
                id: 346,
                question: "En una escuela se está organizando una competencia de matemática y se asignan los números de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar el siguiente término de la serie, observamos las diferencias entre términos consecutivos: 6‑2 = 4, 12‑6 = 6, 20‑12 = 8. Las diferencias forman una secuencia de números pares crecientes (4, 6, 8,…), cuyo patrón es “sumar 2 al incremento anterior”. Por lo tanto, el próximo incremento será 10 (8 + 2). Sumando este incremento al último término conocido: 20 + 10 = 30. Así, el número que corresponde al siguiente equipo es"
            },
            {
                id: 347,
                question: "En una escuela se conocen los siguientes datos: 1) Si una clase tiene más de 30 estudiantes, entonces",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los enunciados presentan una relación condicional: “Si una clase tiene >30 estudiantes, entonces el profesor necesita asistencia adicional” (p → q). La clase de Matemática tiene 32 estudiantes, es decir, cumple la condición >30 (p es verdadera). Aplicando el modus ponens (p → q, p ⟹ q), concluimos que el profesor de esa clase necesita asistencia adicional, por lo que la opción tres es la única deducción lógica válida. Las demás opciones no se siguen de los datos: la clase de Historia tiene menos de 30 estudiantes, por lo que la condición del antecedente no se verifica y no podemos afirmar nada sobre su necesidad de asistencia; afirmar que no necesita asistencia o que necesita asistencia sin evidencia contradice la información dada."
            },
            {
                id: 348,
                question: "En una escuela se establecen las siguientes reglas: 1) Si el docente utiliza la pizarra digital, entonces la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las premisas establecen una relación condicional: ‘Si P entonces Q’, donde P = “el docente utiliza la pizarra digital” y Q = “la clase se programa en la mañana”. La segunda premisa afirma que Q es falsa (la clase no es en la mañana). Aplicando el modus tollens, si Q es falsa, entonces P también debe ser falsa; es decir, el docente no utiliza la pizarra digital. Esta es la única conclusión que se sigue necesariamente de las premisas. Las demás opciones no se derivan lógicamente: la primera invierte la dirección del condicional, la tercera introduce una información no presente (programación en la tarde) y la cuarta contradice directamente la conclusión obtenida mediante el razonamiento válido."
            },
            {
                id: 349,
                question: "Una escuela está planificando su presupuesto anual. El monto destinado a la compra de libros es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea B el presupuesto para equipamiento de laboratorio. Según el enunciado, el presupuesto para libros es 2 B. La suma de ambos es 9 000 dólares: B + 2 B = 9 000 → 3 B = 9 000 → B = 3 000 dólares. Por lo tanto, el presupuesto para libros es 2 × 3 000 = 6 000 dólares. La opción correcta es $6,000. Razonamiento Lógico: Razonamiento lógico - matemático"
            },
            {
                id: 350,
                question: "Una escuela quiere organizar grupos de estudio para sus 48 estudiantes que se han inscrito. Cada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para obtener la mayor cantidad posible de grupos se debe usar el número mínimo de estudiantes por grupo, que es 3. Dividiendo el total de estudiantes (48) entre 3 se obtiene 48 / 3 = 16 grupos, sin que sobre ningún estudiante. Si se utilizara un número mayor de estudiantes por grupo (4 o 5), el número total de grupos sería menor (48/4 = 12 o 48/5 = 9, con estudiantes sobrantes)."
            },
            {
                id: 351,
                question: "Un caballo de ajedrez se coloca inicialmente en la casilla a1 de un tablero estándar de 8×8. Según la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para encontrar la distancia mínima de un caballo entre dos casillas, se analiza la diferencia de coordenadas: de a1 a h8 hay 7 columnas y 7 filas. Cada movimiento del caballo cambia la posición en una combinación (+2,+1) o (+1,+2). Una estrategia eficaz es reducir simultáneamente ambas diferencias. Un recorrido óptimo es: a1 → c2 → e3 → g4 → f6 → e8 → g7 → h8, que utiliza 6 movimientos. No es posible hacerlo en 5 movimientos porque 131 la suma de los cambios de coordenadas después de 5 movimientos sería insuficiente para cubrir la distancia de 7 en ambas direcciones, y además la paridad de colores de las casillas obliga a un número par de movimientos."
            },
        ]
    },
    {
        component: "COMPRENSIÓN LECTORA",
        title: "Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional",
        text: "Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional Pregunta 27: Del análisis presentado se desprende que el autor omite considerar cuál de los sigu",
        fullText: `Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional Pregunta 27: Del análisis presentado se desprende que el autor omite considerar cuál de los siguientes factores al evaluar los impactos climáticos de la deforestación en los Andes bolivianos? Sustento El artículo describe detalladamente procesos biogeoquímicos y energéticos (albedo, emisiones de CO2, flujo de calor latente) y utiliza datos satelitales para cuantificar la pérdida forestal, no aborda el componente socio‑económico que impulsa la expansión agrícola, como las políticas de mercado y la demanda internacional de soja. Esta ausencia representa un sesgo metodológico al centrarse exclusivamente en variables físicas sin considerar los motores económicos que, según la literatura, son clave en la deforestación contemporánea. Pregunta 28: De acuerdo con el texto, ¿qué tipo de evidencia adicional sería necesaria para reforzar el argumento de que la expansión agropecuaria durante la colonización española provocó una erosión significativa del suelo? Sustento Se describe cómo la introducción del ganado durante la colonización española generó sobrepastoreo y erosionó el suelo, pero el texto no aporta datos cuantitativos de esa erosión. Por ello, la evidencia más adecuada para fortalecer el argumento sería la realización de estudios de campo que midan directamente la pérdida de capa superficial del suelo en las áreas afectadas y la comparen con zonas no intervenidas, lo que permite establecer una relación causal clara. Pregunta 29: La lectura del texto permite identificar que el argumento del autor, según el cual la disminución del flujo de calor latente (LE) por la pérdida de bosque eleva directamente la temperatura del aire al incrementar el calor sensible (H), es: Sustento El texto presenta explícitamente la ecuación del balance energético Q = Rn - G - H - LE y afirma que la disminución de LE al perderse los bosques eleva H y, en consecuencia, la temperatura del aire (Gómez et al., 2020). Este razonamiento está respaldado por la explicación del modelo, lo que confiere validez al argumento del autor. Pregunta 30: Considerando lo mencionado en el texto, ¿qué tan válido es el argumento del autor sobre la efectividad de los pagos por servicios ambientales (PSA) como solución para mitigar la deforestación en los Andes bolivianos? Sustento El programa Biodiversidad Andina (2020‑2024) ha sembrado 3,5 millones de árboles nativos y junto a los pagos por servicios ambientales, se busca integrar saberes tradicionales para restaurar bosques. Esta información sustenta que los PSA forman parte de una estrategia con resultados concretos, aunque el texto no ofrece métricas exactas de reducción de deforestación, lo que justifica calificar el argumento como razonablemente válido.`,
        questions: [
            {
                id: 352,
                question: "En una escuela se registra la cantidad de estudiantes de tres grados: cuarto, quinto y sexto. Los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los datos indican que cuarto grado tiene 28 estudiantes, quinto grado 35 y sexto grado 42. Analizando cada opción: 1) Decir que los tres grados tienen la misma cantidad es falso, pues los números difieren. 2) La opción correcta reconoce que 35 (sexto) > 28 (quinto) y 35 < 42 (séptimo), lo que coincide con los valores dados. 3) Afirmar que cuarto > quinto es incorrecto porque 28 es menor que 35. 4) Decir que sexto < cuarto también es falso, pues 42 es mayor que 28."
            },
            {
                id: 353,
                question: "Una profesora tiene 48 lápices y desea repartirlos en forma equitativa entre 6 grupos de estudiantes.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para distribuir los 48 lápices entre 6 grupos de manera equitativa se utiliza la división: 48 ÷ 6. El cociente indica cuántos lápices le corresponden a cada grupo. 48 ÷ 6 = 8, por lo que cada grupo recibe 8 lápices. Las demás opciones emplean operaciones que no representan una división entre el número total de lápices y la cantidad de grupos, por lo que los resultados no son consistentes con el objetivo de repartir los lápices de forma igualitaria."
            },
            {
                id: 354,
                question: "En una hoja de trabajo, un estudiante resuelve la ecuación 3x − 5 = 16 con los siguientes pasos:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los pasos (1) y (2) son correctos: al sumar 5 a ambos lados obtenemos 3x = 21 y al dividir entre 3 resulta x = 7, que satisface la ecuación original (3·7 − 5 = 16). El procedimiento falla en el paso (3), donde el estudiante escribe 3·7 − 5 = 17, una verificación incorrecta. Por lo tanto, la inconsistencia se encuentra exclusivamente en la etapa de verificación, no en los cálculos previos."
            },
            {
                id: 355,
                question: "En una clase se conocen los siguientes hechos: (1) Si la clase tiene proyecto, entonces todos los",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los enunciados pueden representarse con símbolos lógicos: P → T (si hay proyecto, entonces todos entregan tarea), ¬T (no todos entregan tarea) y P E (hay proyecto o examen final). De ¬T y P → T se deduce, mediante modus tollens, que ¬P (no hay proyecto). Como se sabe que P E es verdadero y P es falso, la única opción que queda es E, es decir, la clase tiene examen final. Por lo tanto, la afirmación que necesariamente es verdadera es que la clase tiene examen final. 132 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional"
            },
            {
                id: 356,
                question: "En una unidad didáctica se programaron tres actividades: A, B y C. Cada una se realizará en un día",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Analizamos las restricciones: los días son lunes < miércoles < viernes. La condición 2 indica que B debe estar en un día anterior a C. La condición 3 prohíbe que C sea el miércoles. Consideremos las posibilidades para B y C. Si B estuviera en lunes, C solo podría estar en viernes (porque no puede estar en miércoles). Entonces el día restante, miércoles, corresponde a A, cumpliendo la condición 1 (A no es lunes). La otra alternativa, B en miércoles y C en viernes, deja a A en lunes, lo que violaría la condición 1. Por lo tanto, la única distribución posible es: lunes B, miércoles A y viernes‑C. De aquí se deduce que la actividad que se lleva a cabo el miércoles es la A, lo que confirma que la opción correcta es la segunda."
            },
            {
                id: 357,
                question: "En una escuela se organizó un concurso de matemática. Se saben los siguientes datos: 1) Cada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De los datos se tiene que la clase 7 tiene exactamente 25 alumnos (punto 4) y que todos los alumnos de una clase pueden participar (no se indica restricción alguna). Por lo tanto, esos 25 alumnos forman parte de los 180 participantes totales, lo que implica que la clase 7 aportó 25 participantes al total. Las demás opciones no se siguen necesariamente: no se conoce cuántas clases diferentes enviaron alumnos; el número total de clases participantes podría ser mayor o menor que ocho; y aunque cada clase tenga al menos 20 alumnos, no se sabe que todas esas 20 hayan participado, por lo que no se puede afirmar que ninguna clase tuvo menos de 22 participantes. Así, la única afirmación que se deduce de forma obligatoria es la opción correcta."
            },
            {
                id: 358,
                question: "En una escuela secundaria se organizan los horarios de tres materias: Ciencias, Matemática y Arte. Se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según las premisas, la clase de Ciencias está antes del almuerzo y la de Arte después del almuerzo. La condición (3) indica que Matemática debe situarse entre ambas, es decir, después de Ciencias y antes de Arte. Por lo tanto, 133 la única relación que se mantiene siempre es que la clase de Arte ocurre después de la clase de Matemática; cualquier otro ordenamiento (por ejemplo, que Matemática esté antes del almuerzo o que Ciencias sea posterior a Matemática) no está garantizado por las condiciones dadas. Así, la opción que afirma que “La clase de Arte se imparte después de la clase de Matemática” es la única que resulta necesariamente verdadera."
            },
            {
                id: 359,
                question: "En una comunidad educativa se cumplen las siguientes afirmaciones: (1) Todos los profesores de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De la afirmación (1) se deduce que cualquier profesor de matemática, incluido Carlos, supera los 30 años de edad. La afirmación (2) establece que los profesores mayores de 45 años no pueden impartir la materia de física; sin embargo, no relaciona la edad con la enseñanza de matemática. Por lo tanto, lo único que se puede afirmar con certeza es que la edad de Carlos está en el intervalo abierto >30 y ≤45 años, es decir, entre 30 y 45 años. Las otras opciones contradicen directamente la información proporcionada o introducen datos no respaldados por las premisas, por lo que solo la opción “Carlos tiene entre 30 y 45 años” es lógicamente válida."
            },
            {
                id: 360,
                question: "En una escuela se dispone de tres aulas A, B y C. Se sabe que: 1) El aula que tiene 30 estudiantes es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para cumplir con la condición de que el total de estudiantes sea 75 y que cada aula tenga un número distinto, los tres valores deben ser 30, 25 y 20, pues 30+25+20 = 75. La afirmación 2 indica que el aula B es la que tiene 30 estudiantes, por lo que B = 30. La condición 4 prohíbe que A tenga 20 estudiantes, de modo que A sólo puede ser 25 y, por eliminación, C queda con 20. Además, la condición 3 (B > C) se verifica porque 30 > 20. La opción que refleja esta asignación es A=25, B=30, C=20, que es la única que satisface simultáneamente todas las premisas dadas."
            },
            {
                id: 361,
                question: "En una escuela, los estudiantes de décimo curso se dividen en tres equipos de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Del enunciado se deduce que si B es el número de estudiantes en el equipo Beta, entonces el equipo Gamma tiene 2B estudiantes y el total de estudiantes es A + B + 2B = 36, donde A representa al equipo Alpha. Cada equipo debe tener al menos 4 estudiantes, por lo que B ≥ 4 y A ≥ 4. Además, A = 36 − 3B, lo que implica que B no puede superar 10 (porque A debe ser ≥ 4). Así, B puede tomar valores entre 4 y 10 inclusive. En cualquier caso, el número de estudiantes en el equipo Gamma es 2B, que toma valores entre 8 (cuando B = 4) y 20 (cuando B = 10). Por lo tanto, el equipo Gamma siempre tiene al menos 8 estudiantes, sin excepción. Las demás afirmaciones pueden variar según el valor exacto de B y A, por lo que no son necesariamente verdaderas. La única opción que se cumple en todas las configuraciones posibles es la tercera: “El equipo Gamma tiene al menos 8 estudiantes.” 134 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional"
            },
            {
                id: 362,
                question: "En una escuela secundaria se organizó una competencia de matemática con tres rondas: Primera,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De la información dada: (1) X ganó la Primera ronda. (2) El ganador de la Segunda ronda es distinto de X, por lo que sólo pueden ser Y o Z. (3) El ganador de la Final es el mismo que el de la Segunda ronda, lo que implica que el equipo que ganó la Final tampoco es X. Por lo tanto, la única afirmación que se cumple necesariamente es que “El equipo X no ganó la Final”. Las otras opciones pueden ser verdaderas o falsas dependiendo de si Y o Z ganó la Segunda ronda, pero no están garantizadas por las premisas."
            },
            {
                id: 363,
                question: "En una clase de Matemática, la profesora pide resolver la división 84 ÷ 7. Un alumno muestra su",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El método empleado por el alumno consiste en descomponer el dividendo y dividir cada término por el divisor, para luego sumar los cocientes. Sin embargo, esa suma no es una operación válida para obtener el cociente de la división original; la división no se distribuye sobre la suma de los términos. El paso correcto sería dividir todo el número 84 entre 7 directamente, lo que da 12. Por lo tanto, aunque el alumno obtuvo el número correcto por coincidencia, el procedimiento es inconsistente porque la regla utilizada (sumar cocientes) no garantiza el resultado en general."
            },
            {
                id: 364,
                question: "En una escuela, cada clase tiene 24 estudiantes. Si la escuela tiene 5 clases y a cada estudiante se le",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar la cantidad total de cuadernos se debe aplicar una operación consistente con el enunciado: primero se calcula cuántos estudiantes hay en total (24 estudiantes × 5 clases = 120 estudiantes) y luego se multiplica por la cantidad de cuadernos que recibe cada estudiante (120 × 2 = 240 cuadernos). La alternativa que muestra 240 es la única que sigue el procedimiento lógico y coherente con los datos proporcionados. Las otras opciones provienen de operaciones incorrectas, como sumar los números del enunciado (24 + 5 + 2 = 31) o aplicar una multiplicación parcial que no considera todos los factores. 136 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional"
            },
            {
                id: 365,
                question: "En una escuela se establecen las siguientes reglas: 1) Todas las clases de matemática son obligatorias",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De la regla 2 se deduce que para inscribirse en Física es indispensable haber aprobado la clase de matemática. La regla 1 indica que la clase de matemática es obligatoria, pero no afecta directamente a la conclusión requerida. Dado que Carolina está inscrita en Física (premisa 3), necesariamente debe haber cumplido con la condición previa establecida en la regla 2, es decir, haber aprobado matemática. Las demás opciones añaden información no contenida en las premisas (una calificación específica, el nivel de año o la aprobación de Física) y, por lo tanto, no pueden afirmarse con certeza. Así, la única afirmación necesariamente verdadera es que “Carolina aprobó la clase de matemática”."
            },
            {
                id: 366,
                question: "En una fila de cinco cajones numerados del 1 al 5 se colocan bolas rojas (R) y azules (A) bajo las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Analicemos cada condición: - La condición 1 fija que el cajón 1 es rojo (R). - La condición 4 dice que el cajón 4 tiene el mismo color que el cajón 1. Como el cajón 1 es rojo, el cajón 4 también debe ser rojo. Esta conclusión no depende de ninguna otra información; es una consecuencia directa y obligatoria de las premisas. - Las condiciones 2 y 3 imponen restricciones sobre la cantidad total de rojas y el caso particular de los cajones 3 y 5, pero no alteran lo que ya se ha deducido acerca del cajón 4. Por ejemplo, se puede construir una distribución válida que cumpla todas las condiciones: 1 R, 2 A, 3 R, 4 R, 5 A. En este caso el número de rojas (3) supera al de azules (2) y la condición 3 no se activa porque el cajón 3 no es azul. Asimismo, se puede elegir 5 R sin que sea obligatorio. - De manera similar, el color del cajón 3 y del cajón 2 pueden variar libremente siempre que la condición 2 (mayoría de rojas) se respete. Por lo tanto, las afirmaciones sobre los cajones 5, 3 y 2 no son forzadas. En conclusión, la única afirmación que se deduce ineludiblemente de todas las condiciones dadas es que el cajón 4 contiene una bola roja. Por eso la opción correcta es la segunda."
            },
            {
                id: 367,
                question: "En una escuela se conocen los siguientes hechos: 1) Si la clase de matemática se imparte en la mañana,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar qué afirmación es necesariamente verdadera, analizamos las premisas lógicas: 1. “Si M (matemática) está en la mañana, entonces C (ciencias) está en la tarde” se escribe como M → C. 2. Se declara que C no está en la tarde (¬C). 3. En lógica, si el consecuente de una implicación es falso (¬C), la única forma de que la implicación sea verdadera es que el antecedente también sea falso; es decir, M debe ser falso. Por lo tanto, M no puede estar en la mañana. 4. La premisa 3 indica que M se imparte ya sea en la mañana o en la tarde, excluyendo la simultaneidad. Como ya se descartó la opción de la mañana, la única alternativa restante es que M se imparte en la tarde. Así, la proposición “La clase de matemática se imparte en la tarde” es una conclusión lógica obligatoria, mientras que las demás opciones no se siguen de las premisas dadas."
            },
            {
                id: 368,
                question: "En una escuela se asignan aulas según las siguientes reglas: (1) Si una asignatura es de ciencias, se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Según la regla (1), solo los números pares pueden albergar asignaturas de ciencias. Según la regla (2), todo número múltiplo de 3 corresponde a matemática. La regla (3) prohíbe que un aula sea simultáneamente ciencia y matemática. El aula 6 es par y también múltiplo de 3 (es múltiplo de 6). Si fuera asignada a ciencias, también tendría que ser matemática, lo que violaría la regla (3). Por lo tanto, el aula 6 no puede ser de ciencias; necesariamente está asignada a una asignatura que no es de ciencias. Las demás afirmaciones no se derivan obligatoriamente de las reglas dadas: el aula 4, aunque es par, podría ser de ciencias o de otra materia distinta a matemática; el aula 12, al ser múltiplo de 6, tampoco puede ser de ciencias; y el aula 9, al ser impar, no puede ser de ciencias. Así, la única afirmación que debe ser verdadera es la correspondiente al aula 6."
            },
            {
                id: 369,
                question: "En una escuela se conocen las siguientes reglas: 1) Si un estudiante aprueba Matemática, entonces",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "De la regla 2, “Si aprueba Ciencia, entonces es elegible para la competencia de robótica” se obtiene su contrarrecíproca: “Si no es elegible para la competencia de robótica, entonces no aprueba Ciencia”. Como en el enunciado se indica que Juan no es elegible para la competencia, concluimos que Juan no aprueba Ciencia. Aplicando ahora la contrarrecíproca de la regla 1, “Si no aprueba Ciencia, entonces no aprueba Matemática”, deducimos que Juan tampoco aprueba Matemática. Por lo tanto, la única opción que se sigue lógicamente es “Juan no aprueba Matemática”. 140 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional"
            },
            {
                id: 370,
                question: "En una tarea de matemática, Carlos resolvió la ecuación 3x − 2 = 7. Primero sumó 2 a ambos lados,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la consistencia del procedimiento, se debe comprobar que el valor encontrado satisface la ecuación inicial. Sustituyendo x = 3 en 3x − 2 = 7 se tiene 3(3) − 2 = 9 − 2 = 7, lo cual es una igualdad verdadera. Como la igualdad se mantiene, el proceso de sumar 2 y luego dividir por 3 condujo a una solución correcta y consistente. Las demás afirmaciones no validan la solución porque (a) alteran la ecuación original sin justificación, (b) relacionan x = 3 con una ecuación distinta que no forma parte del problema, y (c) se basan en una propiedad numérica que no garantiza la veracidad de la solución en la ecuación dada."
            },
            {
                id: 371,
                question: "En una escuela secundaria, se deben organizar los turnos de laboratorio para tres materias: química,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar la secuencia válida hay que verificar cada opción con las tres condiciones dadas: 1) “Química antes de Biología” exige que el turno de química aparezca en una posición anterior a la de biología. 2) “Física no es el primer turno” descarta cualquier orden en que física ocupe la primera posición. 3) “Biología no es el último” elimina los casos en que biología está en la tercera posición. Evaluemos cada propuesta: - “Física – Química – Biología”: la biología queda en la última posición, violando la condición 3. - “Química – Biología – Física”: cumple 1 (química antes de biología), 2 (física en tercera posición, no es la primera) y 3 (biología está en segunda posición, no es la última). Por lo tanto es válida. - “Biología – Química – Física”: aquí biología aparece antes que química, incumpliendo la condición 1. - “Química – Física – Biología”: la biología está en la última posición, lo que infringe la condición 3. Solo la segunda opción satisface simultáneamente las tres premisas, por lo que es la respuesta correcta."
            },
            {
                id: 372,
                question: "En una competencia de robótica, cada robot debe ejecutar una serie de movimientos cuya duración (en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Los dos primeros movimientos son 7 s y 10 s. Aplicando la regla: tercer movimiento = 7 + 10 = 17 s; cuarto movimiento = 10 + 17 = 27 s; quinto movimiento = 17 + 27 = 44 s. Por lo tanto, la única opción que mantiene la consistencia del procedimiento es 44 s. Las demás opciones no se obtienen mediante la suma de los dos valores precedentes y, por tanto, son incoherentes con la regla establecida."
            },
            {
                id: 373,
                question: "En una escuela se inscribieron 120 estudiantes para un examen y se sabe que el número de aprobados",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que el procedimiento sea consistente, debe reflejar la relación exacta indicada en el enunciado: aprobados = 2 · reprobados. Tomando x como número de reprobados, los aprobados son 2x y el total es x + 2x = 3x. Igualando a 120 se obtiene 3x = 120, de donde x = 40. Por tanto, los aprobados son 2·40 = 80. Las demás opciones alteran la relación (asumen que los reprobados son el doble de los aprobados o añaden un término extra) o simplemente aplican una suposición sin fundamento, lo que conduce a resultados incorrectos o a valores no enteros, violando la consistencia lógica requerida."
            },
            {
                id: 374,
                question: "En una clase de Álgebra, un estudiante resuelve la ecuación 2x² ‑ 8x + 6 = 0 usando el método de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la consistencia del procedimiento, debemos comprobar que cada paso sea algebraicamente válido y que las soluciones obtenidas satisfagan la ecuación original. 1) Dividir por 2 es correcto y transforma la ecuación a x² ‑ 4x + 3 = 0. 2) Trasladar el término constante permite escribir x² 4x = 3, lo cual es algebraicamente válido. 3) Completar el cuadrado consiste en agregar (4/2)² = 4 a ambos lados: x² 4x + 4 = 3 + 4, obteniendo (x 2)² = 1. 4) Factorizar y extraer raíz cuadrada conduce a x 2 = ±1, de donde se deduce x = 3 o x = 1. Al sustituir estas dos valores en la ecuación original 2x² ‑ 8x + 6 = 0, ambas satisfacen la igualdad (2·9 24 + 6 = 0 y 2·18 + 6 = 0). Por lo tanto, el procedimiento es algebraicamente consistente y las soluciones x = 1 y x = 3 son correctas. La afirmación que indica la corrección del procedimiento y la validez de las raíces es la respuesta correcta."
            },
            {
                id: 375,
                question: "Una estudiante está resolviendo la ecuación 3x − 7 = 2x + 5 y anota los siguientes pasos: Resta 2x de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la consistencia de un procedimiento algebraico, cada operación debe ser una transformación válida que preserve la igualdad. Partiendo de 3x − 7 = 2x + 5, restar 2x a ambos lados da x − 7 = 5; sumar 7 a ambos lados produce x = 12, que es la solución correcta. Dividir entre 1 no cambia el valor y es una operación válida aunque redundante. Como todas las transformaciones mantienen la igualdad y llegan al valor correcto de x, el procedimiento es consistente. Las otras opciones afirman inconsistencias que no existen porque ninguna de las operaciones realizadas viola las reglas del álgebra."
            },
            {
                id: 376,
                question: "En una tarea de álgebra, se pide resolver la ecuación (x+4)/(x‑1)=2. Un estudiante realizó los siguientes",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver (x+4)/(x‑1)=2, primero se identifica el dominio: el denominador no puede ser cero, por lo que x≠1. Multiplicando ambos lados por (x‑1) se obtiene x+4 = 2(x‑1). Distribuyendo: x+4 = 2x‑2. Restando x de ambos lados: 4 = x‑2. Sumando 2: x = 6. Al sustituir x=6 en la ecuación original: (6+4)/(6‑1) = 10/5 = 2, que coincide con el lado derecho, confirmando que x=6 satisface la igualdad. Además, x=6 no pertenece al valor excluido del dominio (x≠1), por lo que no se viola ninguna restricción. Por lo tanto, la solución propuesta es consistente y correcta. 143 196. En una escuela se están organizando actividades grupales. Primero, 144 estudiantes se dividen en grupos de 6 alumnos cada uno. Después, cada grupo se reparte en 3 subgrupos con el mismo número de estudiantes. Finalmente, se forman nuevas unidades agrupando 4 subgrupos entre sí. Según este procedimiento, ¿cuántos estudiantes compondrán cada nueva unidad? Sustento Primero se divide a los 144 estudiantes en grupos de 6, obteniendo 144 ÷ 6 = 24 grupos. Cada uno de esos grupos se reparte en 3 subgrupos iguales, por lo que cada subgrupo contiene 6 ÷ 3 = 2 estudiantes. Finalmente, al juntar 4 subgrupos para formar una nueva unidad, esa unidad estará compuesta por 4 × 2 = 8 estudiantes. Las demás opciones provienen de errores comunes: 12 resultaría de multiplicar 2 por 6, 10 no proviene de ninguna operación descrita y 6 corresponde al tamaño del grupo original, no al de la unidad final."
            },
            {
                id: 377,
                question: "En una clase de 28 alumnos se quiere formar todas las parejas posibles sin repetir ninguna combinación.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para contar todas las parejas posibles sin importar el orden, se utiliza la combinación C(n,2) = n·(n‑1)/2. Con n = 28, el cálculo es 28·27/2 = 756/2 = 378. El docente multiplicó 28 por 27 y dividió entre 2, lo cual corresponde exactamente a la fórmula de la combinación, por lo que el procedimiento es lógicamente consistente y el resultado (378) es correcto. Las otras alternativas son erróneas: dividir entre 3 no tiene fundamento en combinatoria; la división entre 2 no duplica parejas sino que elimina el doble conteo producido por el producto 28·27 (que considera (A,B) y (B,A) como diferentes); y considerar el orden transformaría el problema en una permutación, cuyo resultado sería 28·27 = 756, no el caso planteado."
            },
            {
                id: 378,
                question: "Una caja contiene lápices rojos y lápices azules. En total hay 18 lápices y el número de lápices rojos es",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea B la cantidad de lápices azules. Según el enunciado, la cantidad de lápices rojos es el doble, es decir, 2B. La suma total de lápices es 18, por lo que se plantea la ecuación: B + 2B = 18. Simplificando, 3B = 18, y al dividir ambos lados entre 3 se obtiene B = 6. Por lo tanto, hay 6 lápices azules en la caja. Esta descomposición paso a paso muestra cómo identificar las variables, establecer la relación dada (doble) y resolver la ecuación simple para llegar a la respuesta correcta."
            },
            {
                id: 379,
                question: "En una feria, cada puesto vende paquetes de 8 galletas. Si Miguel compra 5 paquetes y luego reparte",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula cuántas galletas compró Miguel: 5 paquetes × 8 galletas por paquete = 40 galletas. Luego, esas 40 galletas se dividen entre sus 4 amigos de forma equitativa: 40 ÷ 4 = 10 galletas por amigo. Por lo tanto, cada amigo recibe 10 galletas."
            },
            {
                id: 380,
                question: "Una escuela necesita comprar lápices para sus estudiantes. Cada paquete contiene 8 lápices y la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver el problema se debe descomponer la información: cada paquete tiene 8 lápices y se compran 12 paquetes. El número total de lápices se obtiene multiplicando la cantidad de paquetes por la cantidad de lápices por paquete (12 × 8). Al efectuar la multiplicación se obtiene 96, por lo que la escuela tendrá 96 lápices en total. Este razonamiento muestra cómo identificar la relación multiplicativa entre los datos y aplicar la operación adecuada."
            },
            {
                id: 381,
                question: "En una feria de ciencias cada puesto vende 12 paquetes de boletos. Si al final del día se vendieron 144",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos puestos vendieron boletos se debe dividir la cantidad total de boletos vendidos entre la cantidad que vende cada puesto. La operación es 144 ÷ 12 = 12. El cociente indica que 12 puestos participaron. Este paso muestra cómo desglosar la situación: identificar los datos relevantes (boletos totales y boletos por puesto) y aplicar la operación adecuada (división)."
            },
            {
                id: 382,
                question: "En una granja hay gallinas y ovejas. En total hay 34 animales y 98 patas. ¿Cuántas ovejas hay en la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea g el número de gallinas y o el de ovejas. Se conoce que g + o = 34 (total de animales) y que 2g + 4o = 98 145 (total de patas, pues cada gallina tiene 2 y cada oveja 4). Dividiendo la segunda ecuación entre 2 se obtiene g + 2o = 49. Restando la ecuación de los animales (g + o = 34) de esta última, se elimina g y queda o = 49 - 34 = 15. Por lo tanto, hay 15 ovejas en la granja."
            },
            {
                id: 383,
                question: "En una escuela se organizarán equipos de fútbol de 5 jugadores cada uno. Si 48 estudiantes desean",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para hallar cuántos equipos completos se pueden formar, se divide el número total de estudiantes entre el número de jugadores que requiere cada equipo: 48 ÷ 5 = 9 con resto 3. El cociente entero (9) indica la cantidad máxima de equipos que pueden completarse, ya que cada uno necesita 5 jugadores. Los 3 estudiantes restantes no son suficientes para formar otro equipo completo. Por lo tanto, la respuesta correcta es 9 equipos."
            },
            {
                id: 384,
                question: "En una papelería, Víctor compra cuadernos y lápices. Cada cuaderno tiene un precio de 3 bolivianos y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x la cantidad de lápices que Víctor compra. Como compra el doble de cuadernos, la cantidad de cuadernos es 2x. El costo total se expresa como: 3(2x) + 1x = 6x + x = 7x. Según el enunciado, 7x = 21 bolivianos. Despejando x, obtenemos x = 21/7 = 3 lápices. Por lo tanto, los cuadernos son 2x = 2*3 = 6 cuadernos."
            },
            {
                id: 385,
                question: "En una clase de 30 estudiantes, cada alumno necesita 3 cuadernos para el semestre. La tienda donde",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se determina cuántos cuadernos se necesitan en total: 30 estudiantes × 3 cuadernos = 90 cuadernos. Luego, considerando que los paquetes contienen 5 cuadernos cada uno, se divide la cantidad total entre el 146 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional tamaño del paquete: 90 ÷ 5 = 18. Como la división es exacta, se requieren exactamente 18 paquetes para cubrir la necesidad completa. No se necesita comprar un paquete adicional porque no hay cuadernos restantes. Por lo tanto, la respuesta correcta es 18 paquetes."
            },
            {
                id: 386,
                question: "En una excursión escolar se reparten uniformemente 48 botellas de agua entre 8 grupos de estudiantes.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántas botellas le corresponden a cada grupo, se debe dividir la cantidad total de botellas entre el número de grupos. La operación es 48 ÷ 8 = 6. Por lo tanto, cada grupo recibe 6 botellas. Esta tarea implica identificar la relación de reparto equitativo y aplicar la división, lo que demuestra la capacidad de desglosar la situación y extraer la información clave para llegar a una conclusión lógica."
            },
            {
                id: 387,
                question: "Una escuela tiene 240 cuadernos que necesita repartir de forma equitativa entre sus 8 aulas. ¿Cuántos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para distribuir los 240 cuadernos de manera igual entre 8 aulas, se divide la cantidad total por el número de aulas: 240 ÷ 8 = 30. Cada aula recibirá 30 cuadernos. Las demás opciones no cumplen con la igualdad requerida, pues 35, 25 y 40 cuadernos por aula no suman 240 cuando se multiplican por 8."
            },
            {
                id: 388,
                question: "En una biblioteca escolar hay 40 libros y se quieren colocar en 5 estanterías de forma que cada estantería",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para distribuir los 40 libros en 5 estanterías de forma equitativa se debe dividir el número total de libros entre el número de estanterías: 40 ÷ 5 = 8. Por lo tanto, cada estantería debe contener 8 libros. Esta operación muestra la capacidad de desglosar una situación en partes iguales, aplicando la noción de división como herramienta lógica para llegar a la respuesta correcta."
            },
            {
                id: 389,
                question: "Una docente necesita cuadernos para sus alumnos. Compra 3 paquetes con 12 cuadernos cada uno y,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula la cantidad de cuadernos de cada tipo de paquete. Para los paquetes de 12 cuadernos: 3 paquetes × 12 = 36 cuadernos. Para los paquetes de 15 cuadernos: 4 paquetes × 15 = 60 cuadernos. El total se obtiene sumando ambos resultados: 36 + 60 = 96 cuadernos. Por lo tanto, la opción correcta es 96."
            },
            {
                id: 390,
                question: "En una feria, cada puesto vende 8 manzanas. Si hay 5 puestos y se venden 30 manzanas, ¿cuántas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada puesto tiene la capacidad de vender 8 manzanas, por lo que el total de manzanas que podrían venderse es 5 puestos × 8 manzanas = 40 manzanas. Si en la feria se venden 30 manzanas, la cantidad que queda sin vender se obtiene restando lo vendido del total disponible: 40 – 30 = 10 manzanas. 147 214. María tiene 15 bolivianos para comprar material escolar. Cada cuaderno cuesta 2 bolivianos y cada lápiz cuesta 0,5 bolivianos. Si decide comprar 4 cuadernos, ¿cuántos lápices podrá adquirir con el dinero que le queda? Sustento María gasta 4 cuadernos × 2 bolivianos = 8 bolivianos. El dinero que le queda es 15 - 8 = 7 bolivianos. Cada lápiz cuesta 0,5 bolivianos, por lo que puede comprar 7 ÷ 0,5 = 14 lápices. Este razonamiento muestra cómo descomponer el enunciado en pasos sencillos: identificar los costos, restar lo gastado y dividir el resto por el precio del artículo que se desea comprar, demostrando una comprensión estructurada del problema."
            },
            {
                id: 391,
                question: "En una escuela se organizan equipos de fútbol. Cada equipo debe estar compuesto por 2 defensas y 3",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada equipo necesita 3 delanteros. Si se forman 4 equipos, la cantidad total de delanteros es 3 × 4 = 12. Por lo tanto, la respuesta correcta es “12 delanteros”. El razonamiento lógico consiste en identificar la relación directa entre la cantidad de equipos y el número de delanteros requeridos por cada uno, y luego multiplicar para obtener el total."
            },
            {
                id: 392,
                question: "Una profesora compra tres paquetes idénticos de marcadores. En total adquiere 84 marcadores.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para encontrar cuántos marcadores hay en cada paquete, se debe dividir el total de marcadores entre el número de paquetes: 84 ÷ 3 = 28. Por lo tanto, cada paquete contiene 28 marcadores. Las demás opciones no satisfacen la división exacta del total entre tres paquetes."
            },
            {
                id: 393,
                question: "En una feria, Jorge compra 3 paquetes idénticos de semillas. Después de repartir 45 semillas a cada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula el número total de semillas que Jorge repartió: 4 amigos × 45 semillas = 180 semillas. Después se suman las semillas que le quedaron: 180 + 15 = 195 semillas en total. Como esas 195 semillas estaban distribuidas en 3 paquetes idénticos, se divide entre 3: 195 ÷ 3 = 65 semillas por paquete."
            },
            {
                id: 394,
                question: "Una biblioteca escolar dispone de 84 libros y quiere repartirlos en 3 estanterías de forma que cada una",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para repartir uniformemente los 84 libros en 3 estanterías se divide la cantidad total entre el número de estanterías: 84 ÷ 3 = 28. Por lo tanto, cada estantería debe contener 28 libros. Esta operación muestra la habilidad de descomponer la situación planteada (repartir objetos idénticos en partes iguales) y aplicar la relación matemática básica de la división, que es esencial en la resolución lógica de problemas."
            },
            {
                id: 395,
                question: "En una escuela se decide repartir uniformemente los libros donados entre sus 5 aulas. Si en total se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para repartir los libros de forma equitativa se divide el número total de libros entre el número de aulas. La operación es 360 ÷ 5 = 72. Por lo tanto, a cada aula le corresponden 72 libros."
            },
            {
                id: 396,
                question: "Una excursión escolar tiene 48 estudiantes. Cada autobús disponible tiene capacidad para 8 pasajeros.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar el número de autobuses, se divide el total de estudiantes entre la capacidad de cada autobús: 48 ÷ 8 = 6. El resultado es un número entero, lo que indica que con 6 autobuses se pueden acomodar exactamente a los 48 estudiantes sin dejar asientos vacíos ni exceder la capacidad. Si la división hubiera dado un número con decimales, habría sido necesario redondear al entero mayor para asegurar que todos los estudiantes tuvieran asiento."
            },
            {
                id: 397,
                question: "En una feria escolar, cada estudiante compra una pulsera de acceso a talleres que cuesta $12. Si",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula el costo sin descuento: 5 pulseras × $12 = $60. Luego se determina el 10% de descuento: 10% de $60 = $6. Restando el descuento del total original se obtiene el monto a pagar: $60 − $6 = $54. Esta solución usa la estrategia de primero sumar los costos individuales y después aplicar el porcentaje de descuento al total, una secuencia lógica y estructurada que permite resolver el problema de forma coherente."
            },
            {
                id: 398,
                question: "Una escuela desea comprar cuadernos. Cada paquete contiene 12 cuadernos y cuesta 18 dólares. La",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para obtener 48 cuadernos, se necesita dividir la cantidad requerida entre la cantidad que contiene cada paquete: 48 ÷ 12 = 4 paquetes. Cada paquete cuesta 18 dólares, por lo que el costo total es 4 × 18 = 72 dólares."
            },
            {
                id: 399,
                question: "Una biblioteca cuenta con 180 libros y cada estantería puede albergar exactamente 15 libros. ¿Cuántas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántas estanterías completas se necesitan, se divide el número total de libros entre la capacidad de cada estantería: 180 ÷ 15 = 12. El cociente indica que se requieren 12 estanterías para colocar los 180 libros sin que sobre ninguno. No hay residuo, por lo que no se necesita una estantería adicional parcial."
            },
            {
                id: 400,
                question: "Una escuela adquirió 48 cuadernos y decide repartirlos de manera equitativa entre sus 6 clases.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para repartir los 48 cuadernos entre 6 clases de forma equitativa se aplica la división: 48 ÷ 6 = 8. Cada clase recibe 8 cuadernos. La respuesta correcta es 8 porque es el cociente exacto de la división, mientras que los demás valores (12, 6 y 9) no cumplen con la condición de igualdad en la distribución. 149 225. En una clase de 20 estudiantes, la suma total de las calificaciones obtenidas en el último examen fue 1560 puntos. ¿Cuál es el promedio de notas que obtuvo la clase? Sustento Para verificar la coherencia del resultado, se debe dividir la suma total de las calificaciones entre el número de estudiantes. La operación es 1560 ÷ 20 = 78."
            },
            {
                id: 401,
                question: "Una tienda vende paquetes de lápices. Cada paquete contiene entre 8 y 12 lápices. Si una clase necesita",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para minimizar la cantidad de paquetes, se desea que cada paquete aporte la mayor cantidad posible de lápices, es decir, 12 lápices. Dividiendo el requerimiento total (86) entre 12 se obtiene 86 ÷ 12 = 7,166…, lo que indica que con 7 paquetes no se alcanzan los 86 lápices (7 × 12 = 84). Por lo tanto, se necesita al menos un paquete adicional. Con 8 paquetes, aun usando el máximo de 12 lápices por paquete, se tendrían 8 × 12 = 96 lápices, suficiente para cubrir los 86 requeridos. Como no es posible lograr 86 lápices con 7 paquetes, el número mínimo de paquetes que garantiza cubrir la necesidad es 8."
            },
        ]
    },
    {
        component: "COMPRENSIÓN LECTORA",
        title: "Educación Digital y la Brecha de Conectividad en Bolivia: Desafíos Actuales y Soluciones Emergentes",
        text: "Educación Digital y la Brecha de Conectividad en Bolivia: Desafíos Actuales y Soluciones Emergentes Resumen El proceso de digitalización de la educación ha cobrado una relevancia sin precedentes tras",
        fullText: `Educación Digital y la Brecha de Conectividad en Bolivia: Desafíos Actuales y Soluciones Emergentes Resumen El proceso de digitalización de la educación ha cobrado una relevancia sin precedentes tras la pandemia de COVID 19, revelando y ampliando la brecha de conectividad en países en desarrollo. En Bolivia, la transición hacia modalidades híbridas y a distancia confronta limitaciones estructurales como la falta de infraestructura de internet en zonas rurales, la escasa disponibilidad de dispositivos electrónicos y la desigualdad en la preparación docente. Este artículo revisa la evidencia empírica disponible sobre el nivel de acceso a tecnologías de la información y la comunicación (TIC) en el sistema educativo boliviano, analiza los impactos de la brecha digital en el rendimiento académico y la equidad, y discute iniciativas públicas y privadas que buscan mitigar estos problemas. Se presentan datos de organismos internacionales y nacionales que muestran que, a finales de 2023, solo el 42% de los estudiantes de educación primaria y el 58% de los de secundaria tenían acceso regular a una conexión de banda ancha en el hogar. A partir de este diagnóstico, se evalúan propuestas como la expansión de la red de fibra óptica en áreas campesinas, los programas de dispositivos compartidos en centros comunitarios y la capacitación docente en metodologías de aprendizaje en línea. El artículo concluye con una reflexión sobre la necesidad de políticas integradas que consideren la infraestructura, la formación docente y la participación comunitaria como pilares para una educación digital inclusiva en Bolivia. Introducción La educación ha experimentado una transformación acelerada por la emergencia sanitaria global, obligando a los sistemas escolares a adoptar modalidades de enseñanza remota casi de manera instantánea. En contextos con alta penetración de internet, este cambio ha sido más fluido; sin embargo, en Bolivia, donde la geografía montañosa y la dispersión de la población rural dificultan la infraestructura de telecomunicaciones, la digitalización ha puesto de manifiesto una brecha de conectividad que amenaza la igualdad de oportunidades educativas. La brecha digital se define como la diferencia entre quienes pueden acceder`,
        questions: [
            {
                id: 402,
                question: "Una escuela organizó una venta de boletos durante cinco días consecutivos. Cada día se vendieron al",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x la cantidad de boletos vendidos el primer día. Entonces se venden x + 10 el segundo día, x + 20 el tercero, x + 30 el cuarto y x + 40 el quinto. La suma total es: [ x + (x+10) + (x+20) + (x+30) + (x+40) = 5x + 100. ] Se sabe que esta suma es 480, por lo que 5x + 100 = 480 → 5x = 380 → x = 76. Así, el tercer día se vendieron x + 20 = 76 + 20 = 96 boletos. La opción correcta es 96."
            },
            {
                id: 403,
                question: "En una clase de matemática, los estudiantes obtuvieron las siguientes calificaciones en la tarea: 85, 78,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para comprobar la coherencia del promedio anunciado, primero sumamos todas las calificaciones: 85 + 78 + 90 + 72 + 73 = 398. Luego dividimos la suma entre el número de estudiantes (5): 398 ÷ 5 = 79,6, que redondeado a la unidad más cercana da 80. Sin embargo, el enunciado indica que el promedio es 78, lo que no coincide con el cálculo exacto. En la lista de opciones, la única afirmación que menciona correctamente que el promedio anunciado es 78 es la opción que dice: “El promedio es 78, lo cual coincide con el cálculo mostrado”. Esta opción es correcta solo si aceptamos el promedio anunciado como válido, aunque el cálculo real muestra 79,6 (≈80). Como la pregunta pide identificar la afirmación correcta respecto al promedio anunciado, esa opción es la que corresponde. Este análisis muestra cómo verificar la coherencia entre los datos proporcionados y el resultado presentado, resaltando la importancia de revisar los cálculos antes de aceptar un resultado como válido."
            },
            {
                id: 404,
                question: "Una maestra compra 100 lápices para repartir entre sus 30 estudiantes, entregando exactamente 3",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar la cantidad de lápices que quedan, se debe multiplicar la cantidad de estudiantes por la cantidad de lápices que recibe cada uno: 30 estudiantes × 3 lápices = 90 lápices repartidos. Restando este total de la compra inicial, 100 lápices – 90 lápices = 10 lápices que permanecen sin repartir. Por lo tanto, la única afirmación que coincide con este cálculo es la que indica que quedan 10 lápices."
            },
            {
                id: 405,
                question: "En una actividad escolar, Luis compra 3 paquetes de bolígrafos. Cada paquete contiene 8 bolígrafos.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada paquete contiene 8 bolígrafos, y Luis compró 3 paquetes. Multiplicando 3 × 8 obtenemos 24 bolígrafos. La cifra que ella registra como total (24) coincide exactamente con el cálculo, por lo que la información es coherente. Las opciones que indican 28 o 32 bolígrafos son incorrectas porque usan multiplicaciones erróneas (por ejemplo, 3 × 9 = 27 o 4 × 8 = 32). La respuesta que dice que la información está incompleta no es adecuada, ya que con los datos proporcionados se puede verificar la consistencia sin necesidad de información adicional."
            },
            {
                id: 406,
                question: "En una clase de 5 estudiantes, las notas obtenidas son 70, 85, 90, 75 y 80. El docente afirma que el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para comprobar la coherencia del resultado declarado, debemos calcular el promedio real de las notas. Se suman todas las calificaciones: 70 + 85 + 90 + 75 + 80 = 400. Luego se divide la suma entre el número de estudiantes (5): 400 ÷ 5 = 80. Evaluar la consistencia entre el cálculo realizado y el resultado anunciado es precisamente la capacidad de “evaluar la coherencia de los resultados obtenidos” dentro de la resolución de problemas matemáticos."
            },
            {
                id: 407,
                question: "En una feria escolar, el stand de experimentos de física vendió 48 boletos y el stand de arte vendió 30",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la relación, calculamos la diferencia entre los boletos vendidos: 48 (física) – 30 (arte) = 18 boletos. Por lo tanto, el stand de arte vendió 18 boletos menos que el de física, lo que coincide con la primera opción. Las demás opciones son incorrectas porque la razón entre los boletos no es 2:1 ni 1:2, y claramente no son iguales. Esta conclusión se basa en un razonamiento lógico claro: se extrae la información dada, se realiza la operación aritmética correspondiente y se compara el resultado con cada alternativa para identificar la que refleja fielmente la relación descrita."
            },
            {
                id: 408,
                question: "En una escuela secundaria de la zona andina, cada aula tiene 26 estudiantes. El docente planea",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos equipos se pueden formar se divide la cantidad total de estudiantes (26) entre el número de integrantes por equipo (4). La división entera da 26 ÷ 4 = 6, lo que indica que se pueden crear 6 equipos completos (6 × 4 = 24 estudiantes). El residuo de la operación 26 – 24 = 2 muestra que quedan 2 estudiantes que no pueden integrarse a un equipo de 4. Por tanto, la conclusión lógica es que se forman 6 equipos completos y quedan 2 estudiantes sin equipo. Esta respuesta se obtiene estructurando el argumento paso a paso: identificar los datos, aplicar la división entera, calcular el producto y el residuo, y finalmente expresar la conclusión de forma coherente."
            },
            {
                id: 409,
                question: "En una clase hay 24 estudiantes. El docente desea organizarlos en filas de igual números, de modo que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para organizar a los 24 estudiantes en filas iguales, el número de filas debe ser un divisor de 24. Los divisores de 24 son 1, 2, 3, 4, 6, 8, 12 y 24. El enunciado indica que la cantidad de filas debe ser mayor que 3 y menor que 6, por lo que solo los valores 4 cumplen esa condición. Con 4 filas, cada fila tendrá 24 ÷ 4 = 6 estudiantes, lo que satisface la igualdad y la ausencia de estudiantes sobrantes. Las demás opciones (3, 5 y 8) no cumplen simultáneamente la condición de ser divisores de 24 y estar en el rango especificado."
            },
            {
                id: 410,
                question: "En una escuela se registró que 30 estudiantes practican fútbol, 20 practican baloncesto y 10 practican",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar una afirmación que siempre se cumple, se debe analizar la información dada. Los estudiantes que practican al menos uno de los dos deportes se calculan con la fórmula de unión de conjuntos: |F ∪ B| = |F| + |B| – |F ∩ B| = 30 + 20 – 10 = 40. Por lo tanto, el número de estudiantes que practican fútbol o baloncesto es, como mínimo, 40 (puede ser mayor si hay estudiantes que no practican ninguno). La opción que dice “Hay al menos 40 estudiantes que practican fútbol o baloncesto” es la única que se deriva lógicamente de los datos y es necesariamente verdadera. Las demás opciones hacen afirmaciones específicas que no se garantizan por la información disponible."
            },
            {
                id: 411,
                question: "Una Unidad Educativa organizó una venta de boletos durante cinco días consecutivos. Cada día se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x la cantidad de boletos vendidos el primer día. Entonces se venden x + 10 el segundo día, x + 20 el tercero, x + 30 el cuarto y x + 40 el quinto. La suma total es: [ x + (x+10) + (x+20) + (x+30) + (x+40) = 5x + 100. ] Se sabe que esta suma es 480, por lo que 5x + 100 = 480 → 5x = 380 → x = 76. Así, el tercer día se vendieron x + 20 = 76 + 20 = 96 boletos."
            },
            {
                id: 412,
                question: "En una institución educativa hay tres aulas de primaria. En la primera aula hay 24 lápices, en la segunda",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se cuenta la cantidad de lápices en cada aula. La primera aula tiene 24 lápices. La segunda tiene el doble, es decir 2 × 24 = 48 lápices. La suma de los lápices de las dos primeras aulas es 24 + 48 = 72. La tercera aula tiene 10 lápices menos que esa suma, por lo que tiene 72 – 10 = 62 lápices. El total de lápices en las tres aulas es 24 + 48 + 62 = 134 lápices. 153 242. En una clase de quinto de primaria se van a repartir lápices de colores entre los estudiantes. Hay tres colores: rojo, azul y verde, y el total de lápices es 98. La cantidad de lápices rojos es el doble de la cantidad de lápices azules, y la cantidad de lápices verdes es 12 unidades menor que la cantidad de lápices rojos. ¿Cuántos lápices azules se repartirán? Sustento Sea x la cantidad de lápices azules. Entonces la cantidad de lápices rojos es 2x y la cantidad de lápices verdes es (2x − 12). El total de lápices es la suma de los tres tipos: x + 2x + (2x − 12) = 98. Simplificando: 5x − 12 = 98 → 5x = 110 → x = 22. Por lo tanto, se repartirán 22 lápices azules. Esta solución muestra cómo descomponer el enunciado en variables, establecer relaciones algebraicas y resolver paso a paso, demostrando razonamiento lógico y capacidad de desglosar una situación problemática."
            },
            {
                id: 413,
                question: "En una granja hay gallinas y vacas. En total cuentan 54 animales y 140 patas. ¿Cuántas vacas hay en la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x el número de vacas. Entonces el número de gallinas será 54‑x. Cada vaca tiene 4 patas y cada gallina 2. La ecuación de las patas es: 4x + 2(54‑x) = 140. Simplificando: 4x + 108 – 2x = 140 ⟹ 2x = 32 ⟹ x = 16. Por lo tanto, la granja tiene 16 vacas. Esta resolución muestra cómo descomponer el enunciado en variables, establecer una ecuación que represente la relación dada (patas) y resolverla paso a paso, demostrando la capacidad de análisis y razonamiento lógico necesario para afrontar problemas matemáticos."
            },
            {
                id: 414,
                question: "En una actividad escolar, Ana compra 3 paquetes de bolígrafos. Cada paquete contiene 8 bolígrafos.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada paquete contiene 8 bolígrafos, y Ana compró 3 paquetes. Multiplicando 3 × 8 obtenemos 24 bolígrafos. La cifra que ella registra como total (24) coincide exactamente con el cálculo, por lo que la información es coherente."
            },
            {
                id: 415,
                question: "Una librería vende un paquete que contiene 3 cuadernos y 2 libros por un total de $56. Si cada libro tiene",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea x el precio de un cuaderno. Cada libro cuesta el doble, es decir 2x. El costo total del paquete es la suma del costo de los 3 cuadernos y los 2 libros: 3x + 2(2x) = 3x + 4x = 7x. Según el enunciado, 7x = $56, por lo que x = $56 ÷ 7 = $8. Así, el precio de un cuaderno es $8. Esta solución muestra cómo descomponer el problema en variables, establecer la relación de precios y resolver la ecuación lineal resultante. 154 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional"
            },
            {
                id: 416,
                question: "Una Unidad Educativa cuenta con 120 estudiantes que deben organizarse en grupos para un proyecto",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para obtener el número mínimo de grupos se debe aprovechar al máximo la capacidad de cada grupo, es decir, colocar la mayor cantidad posible de estudiantes sin superar el límite máximo de 12. Dividiendo el total de estudiantes (120) entre 12 se obtiene 10, que es un número entero. Como 120 es múltiplo de 12, es posible formar exactamente 10 grupos con 12 estudiantes cada uno, cumpliendo también la condición de que cada grupo tenga al menos 8 estudiantes. Cualquier intento de usar menos de 10 grupos implicaría que alguno tendría más de 12 integrantes, violando la restricción."
            },
            {
                id: 417,
                question: "En una clase de 5 estudiantes, las notas obtenidas son 70, 85, 90, 75 y 80. El maestro afirma que el",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para comprobar la coherencia del resultado declarado, debemos calcular el promedio real de las notas. Se suman todas las calificaciones: 70 + 85 + 90 + 75 + 80 = 400. Luego se divide la suma entre el número de estudiantes (5): 400 ÷ 5 = 80."
            },
            {
                id: 418,
                question: "En una institución educativa, el jardín tiene tres patios: en el patio A hay 24 plantas, en el B 30 plantas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se suman las plantas de los tres patios: 24 + 30 + 18 = 72 plantas. Luego se calcula el tiempo que tarda en regar cada patio según su velocidad: - Patio A: 24 plantas ÷ 6 plantas/min = 4 minutos. - Patio B: 30 plantas ÷ 5 plantas/min = 6 minutos. - Patio C: 18 plantas ÷ 4 plantas/min = 4.5 minutos (4 minutos y 30 segundos). Sumando los tiempos: 4 + 6 + 4.5 = 14.5 minutos, que equivale a 14 minutos y 30 segundos. 155 252. Una Unidad Educativa organizó una excursión y pagó $720 por el servicio de transporte. Cada autobús podía llevar a 48 estudiantes y el costo total se dividió equitativamente entre todos los estudiantes que asistieron. Si participaron 240 estudiantes, ¿cuánto debe pagar cada uno? Sustento El costo total del transporte es de $720 y debe repartirse entre los 240 estudiantes que van a la excursión. Dividiendo el total entre el número de estudiantes obtenemos el valor que corresponde a cada estudiante: 720 ÷ 240 = 3. Por lo tanto, cada estudiante debe pagar $3."
            },
            {
                id: 419,
                question: "En una granja hay gallinas y conejos. En total hay 48 animales y 140 patas. ¿Cuántos conejos hay en la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea c el número de gallinas y r el número de conejos. Cada animal tiene una cabeza, por lo que c + r = 48 (1). Cada gallina tiene 2 patas y cada conejo 4, de modo que 2c + 4r = 140 (2). Dividiendo la ecuación (2) entre 2 se obtiene c + 2r = 70 (3). Restando (1) de (3): (c + 2r) - (c + r) = 70 - 48, lo que simplifica a r = 22. Por lo tanto, hay 22 conejos en la granja."
            },
            {
                id: 420,
                question: "En una feria escolar se venden paquetes de lápices. Cada paquete contiene 12 lápices y cuesta Bs. 15.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada paquete contiene 12 lápices. Para que un maestro tenga al menos 48 lápices necesita 48 ÷ 12 = 4 paquetes. Como son 5 maestros, el número total de paquetes es 5 × 4 = 20 paquetes. Cada paquete cuesta Bs. 15, por lo que el gasto total es 20 × 15 = Bs. 300."
            },
            {
                id: 421,
                question: "En una clase de 30 estudiantes, 18 aprueban la asignatura de Matemática, 15 aprueban la asignatura de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos estudiantes aprueban al menos una de las dos asignaturas se utiliza el principio de inclusión‑exclusión. Se suman los que aprueban cada asignatura y se resta la intersección que fue contada dos veces: 18 (Matemática) + 15 (Ciencias Naturales) – 5 (ambas) = 28. Por lo tanto, 28 estudiantes aprueban al menos una de las dos materias. 156 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional"
            },
            {
                id: 422,
                question: "En una biblioteca escolar hay 324 libros que deben colocarse en estanterías. Cada estantería debe",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que todas las estanterías tengan la misma cantidad de libros y ninguna supere los 30, el número de libros por estantería debe ser un divisor entero de 324 y a la vez ≤ 30. Si “n” es el número de estanterías, entonces 324 ÷ n = libros por estantería. Se requiere que 324 ÷ n ≤ 30, lo que implica n ≥ 324/30 ≈ 10.8; por lo tanto n debe ser al menos 11. Entre los divisores de 324 (1, 2, 3, 4, 6, 9, 12, 18, 27, 36, 54, 81, 108, 162, 324) los que cumplen n ≥ 11 son 12, 18, 27, 36, … El valor más pequeño que satisface la condición es n = 12, pues 324 ÷ 12 = 27 libros por estantería, número que no supera los 30. Las demás opciones (18 → 18 libros, 24 → 13.5 libros, 30 → 10.8 libros) no son divisores exactos de 324, por lo que no permiten distribuir los libros sin que sobre ninguno."
            },
            {
                id: 423,
                question: "En una Unidad Educativa del Nivel de Educación Secundaria de la zona andina, cada aula tiene 26",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos equipos se pueden formar se divide la cantidad total de estudiantes (26) entre el número de integrantes por equipo (4). La división entera da 26 ÷ 4 = 6, lo que indica que se pueden crear 6 equipos completos (6 × 4 = 24 estudiantes). El residuo de la operación, 26 – 24 = 2, muestra que quedan 2 estudiantes que no pueden integrarse a un equipo de 4. Por tanto, la conclusión lógica es que se forman 6 equipos completos y quedan 2 estudiantes sin equipo. Esta respuesta se obtiene estructurando el argumento paso a paso: identificar los datos, aplicar la división entera, calcular el producto y el residuo, y finalmente expresar la conclusión de forma coherente."
            },
            {
                id: 424,
                question: "En una clase hay 24 estudiantes. El maestro desea organizarlos en filas de igual número de estudiantes,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para organizar a los 24 estudiantes en filas iguales, el número de filas debe ser un divisor de 24. Los divisores de 24 son 1, 2, 3, 4, 6, 8, 12 y 24. El enunciado indica que la cantidad de filas debe ser mayor que 3 y menor que 6, por lo que solo los valores 4 cumplen esa condición. Con 4 filas, cada fila tendrá 24 ÷ 4 = 6 estudiantes, lo que satisface la igualdad y la ausencia de estudiantes sobrantes. Las demás opciones (3, 5 y 8) no cumplen simultáneamente la condición de ser divisores de 24 y estar en el rango especificado."
            },
            {
                id: 425,
                question: "En una institución educativa se registró que 30 estudiantes practican fútbol, 20 practican baloncesto y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar una afirmación que siempre se cumple, se debe analizar la información dada. Los estudiantes que practican al menos uno de los dos deportes se calculan con la fórmula de unión de conjuntos: |F ∪ B| = |F| + |B| – |F ∩ B| = 30 + 20 – 10 = 40. Por lo tanto, el número de estudiantes que practican fútbol o baloncesto es, como mínimo, 40 (puede ser mayor si hay estudiantes que no practican ninguno). La opción que dice “Hay al menos 40 estudiantes que practican fútbol o baloncesto” es la única que se deriva lógicamente de los datos y es necesariamente verdadera. Las demás opciones hacen afirmaciones específicas que no se garantizan por la información disponible."
            },
            {
                id: 426,
                question: "Una Unidad Educativa debe repartir 240 cuadernos de forma equitativa entre 8 aulas. ¿Qué operación",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para distribuir un total de elementos de manera equitativa entre un número determinado de grupos, la operación correspondiente es la división. En este caso, se tiene un total de 240 cuadernos y 8 aulas; al dividir 240 ÷ 8 se obtiene 30, lo que indica que cada aula recibirá 30 cuadernos."
            },
            {
                id: 427,
                question: "En una institución educativa se organizaron grupos de estudiantes para recolectar agua de lluvia. Cada",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Cada grupo recoge 12 litros por hora. En 3 horas, un grupo aporta 12 L × 3 h = 36 litros. Para alcanzar al menos 360 litros, se necesita dividir la cantidad requerida entre la aportación de un grupo: 360 L ÷ 36 L/grupo = 10 grupos."
            },
            {
                id: 428,
                question: "Una Unidad Educativa organizará una visita a un museo para 274 estudiantes. Cada autobús disponible",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar el número mínimo de autobuses, se divide el total de estudiantes entre la capacidad de cada autobús: 274 ÷ 48 = 5,7083… La parte entera indica que 5 autobuses llenan 5 × 48 = 240 estudiantes, dejando 274 – 240 = 34 estudiantes sin transporte. Como cualquier grupo restante, por pequeño que sea, necesita otro autobús, se debe redondear hacia arriba la fracción obtenida, usando la función techo. Por lo tanto, se requieren 5 + 1 = 6 autobuses."
            },
            {
                id: 429,
                question: "Una organización benéfica prepara una cena para 54 personas y cada mesa tiene capacidad para 8",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para cubrir a los 54 invitados se debe dividir el número total de personas entre la capacidad de cada mesa: 54 ÷ 8 = 6,75. Como no se pueden usar fracciones de mesa, se redondea al entero superior, obteniendo 7 mesas. Con 7 mesas hay 7 × 8 = 56 asientos, suficiente para los 54 invitados, mientras que con 6 mesas solo habría 48 asientos, insuficientes."
            },
            {
                id: 430,
                question: "En una clase de geometría básica, el maestro quiere que sus estudiantes determinen cuántas baldosas",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para resolver el problema se debe trabajar con unidades coherentes. Primero, se calcula el área del patio: 6 m × 4,5 m = 27 m². Luego, se determina el área de una baldosa: 0,30 m × 0,30 m = 0,09 m². La cantidad de baldosas requeridas se obtiene dividiendo el área del patio entre el área de una baldosa: 27 m² ÷ 0,09 m² = 300 baldosas. Este procedimiento utiliza la estrategia de “convertir a la misma unidad y aplicar la relación área/área”, que es la más directa y evita errores de cálculo que pueden surgir al usar perímetros o sumas de longitudes."
            },
            {
                id: 431,
                question: "En una Unidad Educativa se organizó un concurso de elaboración de pulseras con cuentas de colores.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para contar las pulseras se consideran todas las secuencias posibles de 12 posiciones donde cada posición puede ser una de las 3 colores. Sin restricción, hay 3^{12}=531 441 secuencias. Se deben excluir las que no 161 usan al menos un color. Aplicando el principio de inclusión‑exclusión: - Secuencias que omiten un color concreto: 2^{12}=4 096. Como hay 3 colores, se restan 3·4 096=12 288. - Secuencias que omiten dos colores (es decir, usan solo un color) fueron restadas dos veces, por lo que se añaden de nuevo. Cada color solo da 1^{12}=1 secuencia, y hay 3 colores, por lo que se suman 3·1=3. Resultado: 3^{12} - 3·2^{12} + 3·1^{12} = 531 441 12 288 + 3 = 519 156. Así, la cantidad de pulseras distintas que cumplen la condición es 519 156."
            },
            {
                id: 432,
                question: "En una clase de 27 estudiantes la maestra quiere organizar grupos de 4 estudiantes para una actividad.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para determinar cuántos grupos completos de 4 estudiantes se pueden formar con 27 estudiantes, se debe aplicar la división entera: 27 ÷ 4 = 6 con resto 3. El cociente (6) indica el número máximo de grupos completos que pueden formarse, mientras que el resto (3) representa los estudiantes que quedarían sin un grupo."
            },
            {
                id: 433,
                question: "En una clase de 30 estudiantes, el maestro registra las siguientes calificaciones del examen: 5",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia se deben sumar las notas según la distribución dada. - 5 estudiantes × 90 = 450 puntos - 10 estudiantes × 70 = 700 puntos - 8 estudiantes × 50 = 400 puntos El número de estudiantes que quedan es 30 - (5+10+8) = 7, y cada uno obtuvo 30 puntos, por lo que: - 7 estudiantes × 30 = 210 puntos Sumando todos los valores: 450 + 700 + 400 + 210 = 1760 puntos."
            },
            {
                id: 434,
                question: "En una clase de matemática, el maestro suma las notas de cinco estudiantes: 78, 85, 92, 67 y 88, y",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia, primero se recalcula la suma real de las notas: 78 + 85 + 92 + 67 + 88 = 410. El promedio se obtiene dividiendo la suma entre el número de estudiantes: 410 ÷ 5 = 82."
            },
            {
                id: 435,
                question: "Una institución educativa registra las notas obtenidas por tres estudiantes en un examen: Gloria sacó",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para comprobar la coherencia del promedio, se calcula el promedio real de las tres notas: (78 + 84 + 92) / 3 = 254 / 3 = 84,666…, que al redondear a la unidad más cercana da 85. Sin embargo, el enunciado indica que el director publicó un promedio de 84. Dado que el valor exacto del promedio es 84,66…, el número 84 está dentro del rango aceptable si se considera redondeo a la decena inferior, pero no coincide con el promedio exacto. En un contexto de evaluación maestro, se esperaría que el promedio publicado sea el cálculo exacto o su redondeo apropiado."
            },
            {
                id: 436,
                question: "En una clase de 30 estudiantes se registró la cantidad de libros leídos durante el mes de abril. La suma",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia del promedio, primero se calcula: promedio = suma total ÷ número de observaciones = 126 ÷ 30 = 4,2."
            },
            {
                id: 437,
                question: "Una Unidad Educativa compra cuadernos para sus estudiantes. El director indica que se adquirieron",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula la cantidad total de cuadernos: 12 paquetes × 20 cuadernos = 240 cuadernos y 5 paquetes × 15 cuadernos = 75 cuadernos, dando un total de 240 + 75 = 315 cuadernos. Cada cuaderno cuesta 0,80 USD, por lo que el gasto total es 315 cuadernos × 0,80 USD = 252 USD. Sin embargo, la cifra está expresada en dólares y centavos, por lo que se escribe como 159,20 USD (315 × 0,80 = 252, pero 0,80 USD equivale a 80 centavos, y 315 × 80 = 25.200 centavos = 252 USD)."
            },
            {
                id: 438,
                question: "Una institución educativa dispone de 120 cuadernos y desea repartirlos en partes iguales entre sus",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para que la distribución sea coherente, el número de cuadernos por clase multiplicado por la cantidad de clases debe dar el total disponible: 8 × x = 120. Resolviendo, x = 120 ÷ 8 = 15. Por lo tanto, la única respuesta que cumple la relación es “Cada clase recibe 15 cuadernos”. Las demás opciones (14, 12 y 20) al multiplicarse por 8 no producen 120 (8 × 14 = 112, 8 × 12 = 96, 8 × 20 = 160), evidenciando resultados incoherentes con la información inicial."
            },
            {
                id: 439,
                question: "En una fábrica se producen tres tipos de componentes: X, Y y Z. En un día se fabrican 1 200 unidades en",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se traduce la información a ecuaciones. Sea x, y y z el número de unidades de los componentes X, Y y Z respectivamente. Se tienen: 1) x + y + z = 1200 (total de unidades). 2) 2x + 3y + 5z = 4500 (total de horas de trabajo). 3) y = 0.25·1200 = 300 (el 25% del total son unidades de Y). Sustituyendo y = 300 en la ecuación (1): x + 300 + z = 1200 → x + z = 900 → x = 900 – z. En la ecuación (2) reemplazamos x y y: 2(900 – z) + 3·300 + 5z = 4500. Despejando: 1800 – 2z + 900 + 5z = 4500 → 2700 + 3z = 4500 → 3z = 1800 → z = 600. Por lo tanto, la fábrica produjo 600 unidades del componente Z."
            },
            {
                id: 440,
                question: "En una competencia de lanzamiento de pelota, los participantes A, B y C obtuvieron respectivamente 48,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia del enunciado del organizador, debemos sumar los puntos obtenidos por cada participante: 48 + 56 = 104; 104 + 64 = 168. 163 288. En una jornada escolar se entregaron cuadernos para realizar actividades. Cada maestro llevó 3 cuadernos y cada estudiante llevó 1 cuaderno. El número total de cuadernos entregados fue 200 y la suma de maestros y estudiantes participantes fue 150. ¿Cuántos maestros participaron en la jornada? Sustento Sea D el número de maestros y E el número de estudiantes. Según el enunciado se tienen dos ecuaciones lineales: 1) 3D + 1E = 200 (total de cuadernos) y 2) D + E = 150 (total de participantes). De la segunda ecuación se despeja E = 150 - D. Sustituyendo en la primera: 3D + (150 - D) = 200 → 3D + 150 - D = 200 → 2D = 50 → D = 25. Por lo tanto, participaron 25 maestros."
            },
            {
                id: 441,
                question: "En una institución educativa se organizan tres jornadas de clases. La primera jornada tiene una duración",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para evaluar la coherencia del resultado debemos convertir cada jornada a minutos (1 hora = 60 minutos) y luego sumarlos. - Primera jornada: 4 h × 60 = 240 minutos.- Segunda jornada: 5 h × 60 = 300 minutos.- Tercera jornada: 3 h × 60 = 180 minutos.: 240 + 300 + 180 = 720 minutos."
            },
            {
                id: 442,
                question: "Una constructora debe edificar una pared rectangular de 7,30 m de largo por 2,40 m de alto. Cada bloque",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se calcula el área de la pared: 7,30 m × 2,40 m = 17,52 m² = 175 200 cm². Cada bloque cubre una cara de 20 cm × 10 cm = 200 cm², por lo que el número mínimo de bloques necesarios es 175 200 ÷ 200 = 876 bloques. Como los bloques se venden en paquetes de 50, se debe comprar la cantidad mínima de paquetes que cubra esos 876 bloques: ceil(876 ÷ 50) = 18 paquetes. Cada paquete contiene 50 bloques, así que la constructora comprará 18 × 50 = 900 bloques, aunque sólo 876 serán usados. El precio de lista de los 900 bloques es 900 × 2,40 $ = 2 160,00 × 0,10 = 216,00 − 216,00 $ = 1 944,00 $."
            },
            {
                id: 443,
                question: "En una cooperativa de productores de cacao los proveedores se organizan en tres grupos: X, Y y Z. Se",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero, el 40% de 50 proveedores corresponde al grupo X: 0.40 × 50 = 20 proveedores. Sea Y = y. Según el punto 4, Z = 2y. El punto 3 indica que Y es 10 unidades menor que Z: y = 2y – 10. Resolviendo, 2y – y = 10 → y = 10. 164 Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional"
            },
            {
                id: 444,
                question: "Una Unidad Educativa organizará una excursión y dispone de autobuses con capacidad de 48 asientos",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Primero se suma el número total de personas que deben viajar: 274 estudiantes + 23 maestros = 297 personas. Cada autobús tiene 48 asientos, por lo que el número mínimo de autobuses por capacidad es el techo de 297 ÷ 48, es decir, ceil(6,1875) = 7 autobuses. Además, cada autobús debe llevar al menos un maestro; como hay 23 maestros, basta con 7 autobuses porque podemos asignar al menos un maestro a cada uno y aún nos sobrarían maestros. Como el requisito de capacidad y el de presencia de adultos se cumplen simultáneamente con 7 autobuses, esa es la cantidad mínima requerida."
            },
            {
                id: 445,
                question: "En una institución educativa, la clase A obtuvo las siguientes calificaciones en Matemática: 78, 85, 92,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia de cada afirmación se deben usar los datos proporcionados. El promedio de la clase A (85,5) corresponde a la suma de sus cuatro notas (78+85+92+88 = 343) dividida entre 4; de forma similar, el promedio de la clase B (83,5) corresponde a la suma (81+79+84+90 = 334) dividida entre 4. El total de las ocho notas es 343 + 334 = 677. Dividiendo este total entre 8 estudiantes se obtiene el promedio total: 677 ÷ 8 = 84,625, que redondeado a una cifra decimal es 84,5. Por lo tanto, la única afirmación que coincide con este cálculo es la segunda opción."
            },
            {
                id: 446,
                question: "En una excursión escolar se van a llevar botellas de agua y de jugo. Se compran 12 paquetes de agua,",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Para verificar la coherencia del resultado, se deben aplicar los pasos indicados en el enunciado: 1. Multiplicar la cantidad de paquetes de agua (12) por el número de botellas por paquete (6): 12 × 6 = 72 botellas de agua. 2. Multiplicar la cantidad de paquetes de jugo (8) por el número de botellas por paquete (9): 8 × 9 = 72 botellas de jugo. 3. Sumar ambos totales: 72 + 72 = 144 botellas."
            },
            {
                id: 447,
                question: "En una granja hay vacas y gallinas. En total hay 30 animales y, sumando todas sus patas, se obtienen",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Sea V el número de vacas y G el número de gallinas. Del enunciado se tiene el sistema de ecuaciones: 1) V + G = 30 (total de animales) 2) 4V + 2G = 74 (total de patas, ya que cada vaca tiene 4 y cada gallina 2). De la (1) se obtiene G = 30 - V. Sustituyendo en la (2): 4V + 2(30 - V) = 74 → 4V + 60 - 2V = 74 → 2V = 14 → V = 7. Así, hay 7 vacas en la granja."
            },
            {
                id: 448,
                question: "En una institución educativa rural se presentan los siguientes datos: 1) Todos los estudiantes que",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Del enunciado 2 se afirma que los integrantes del equipo de fútbol no forman parte del concurso de matemática. Como María es integrante del equipo de fútbol (enunciado 3), se concluye que ella no puede estar en el concurso de matemática. Esta conclusión es una inferencia directa y válida; las demás opciones introducen relaciones no establecidas o invierten la dirección del razonamiento del enunciado 1, por lo que no pueden deducirse lógicamente de la información dada."
            },
            {
                id: 449,
                question: "En una unidad educativa, 6 estudiantes pueden ordenar un archivo completo en 8 horas, trabajando",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Este problema corresponde a una proporcionalidad inversa, ya que al aumentar el número de estudiantes disminuye el tiempo necesario para realizar el trabajo. El trabajo total puede expresarse como: estudiantes × tiempo = constante."
            },
            {
                id: 450,
                question: "Según la segunda ley de Newton, la aceleración de un cuerpo depende de:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La segunda ley de Newton establece que la aceleración de un cuerpo es directamente proporcional a la fuerza neta que actúa sobre él e inversamente proporcional a su masa. Matemáticamente se expresa como F = m·a. Este principio permite cuantificar cómo las fuerzas modifican el movimiento y constituye una base esencial para el análisis dinámico."
            },
            {
                id: 451,
                question: "Una carga eléctrica de prueba se coloca en una región del espacio donde existe un campo eléctrico.",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El campo eléctrico es una magnitud vectorial que describe la influencia eléctrica que una carga produce en el espacio que la rodea. Se define como la fuerza eléctrica que actúa sobre una carga de prueba positiva dividida entre el valor de dicha carga. Esta definición permite caracterizar el campo independientemente de la carga que se coloque en él. El concepto de campo facilita el estudio de interacciones eléctricas sin necesidad de contacto directo entre cargas."
            },
        ]
    },
    {
        component: "COMPRENSIÓN LECTORA",
        title: "y utilizar eficazmente las TIC y quienes no lo",
        text: "y utilizar eficazmente las TIC y quienes no lo pueden, y se traduce en disparidades en el acceso a recursos pedagógicos, interacción docente estudiante y evaluación continua (UNESCO, 2022). Este artíc",
        fullText: `y utilizar eficazmente las TIC y quienes no lo pueden, y se traduce en disparidades en el acceso a recursos pedagógicos, interacción docente estudiante y evaluación continua (UNESCO, 2022). Este artículo explora, desde una perspectiva científica, los principales desafíos que enfrenta la educación digital en Bolivia y las soluciones emergentes que están tomando forma en la política pública y en la innovación social. Desarrollo 1. Panorama de la conectividad y su impacto en el aprendizaje Los datos del Instituto Nacional de Estadística (INE) revelan que, en 2023, la tasa de acceso a internet en hogares urbanos alcanzó el 71%, mientras que en áreas rurales se situó en apenas el 33% (INE, 2023). Esta disparidad se refleja en el desempeño académico: estudiantes con acceso regular a internet mostraron, en promedio, un aumento del 12% en sus puntajes de matemática y lectura en los exámenes estandarizados nacionales, comparado con sus pares sin acceso (Banco Mundial, 2023). La falta de conectividad limita la capacidad de los docentes para emplear plataformas de gestión del aprendizaje (LMS) y dificulta la participación de los estudiantes en actividades interactivas, provocando deserción y rezago escolar. En la práctica cotidiana, un estudiante de la comunidad de San Ignacio, ubicada en el departamento de Puno, debe recorrer más de dos horas a pie para llegar al centro de conectividad más cercano. La imposibilidad de asistir a clases virtuales en tiempo real obliga a los docentes a enviar materiales en formato PDF que quedan sin la retroalimentación inmediata que ofrece la interacción sincrónica. Este caso ilustra cómo la brecha de conectividad se traduce en una brecha de aprendizaje, perpetuando desigualdades socio-económicas históricas. 2. Factores estructurales que perpetúan la brecha La insuficiente infraestructura de telecomunicaciones constituye el primer obstáculo. Según la Autoridad de Regulación y Fiscalización de Telecomunicaciones y Transportes (ATT), la cobertura de fibra óptica Texto diseñado con fines evaluativos para medir la comprensión lectora, mediante la reproducción de características propias de textos académicos. Repositorio de Preguntas para la Prueba Académica de Educación Superior para la Formación Profesional en el territorio nacional alcanza sólo el 24% de los municipios, concentrándose principalmente en la zona de Santa Cruz y La Paz (ATT, 2022). Además, la disponibilidad de dispositivos, como computadoras portátiles o tabletas, es limitada: la Encuesta de Equipamiento Escolar muestra que el 38% de las escuelas rurales carecen de al menos un computador por cada veinte estudiantes. Otro factor relevante es la preparación docente. La transición abrupta a la educación en línea reveló que muchos profesores no estaban familiarizados con herramientas digitales, lo que redujo la calidad de la enseñanza. Un estudio del Ministerio de Educación (2021) indica que sólo el 27% de los docentes de educación secundaria había recibido capacitación formal en pedagogía digital antes de la pandemia. 3. Soluciones prácticas emergentes y buenas Expansión de infraestructura En respuesta, el gobierno boliviano lanzó en 2022 el Programa Nacional de Conectividad Rural (PNCR), cuyo objetivo es instalar 1 200 kilómetros de fibra óptica en comunidades campesinas antes de 2025. La ejecución del proyecto se apoya en alianzas público privadas con empresas de telecomunicaciones, lo que ha permitido reducir el costo promedio por kilómetro en un 15% respecto a estimaciones previas (Ministerio de Obras Públicas, 2023). Asimismo, se está implementando la tecnología de radio enlace de corto alcance en zonas de difícil acceso, una solución que ha demostrado efectividad en la región del Beni, donde la topografía dificulta la instalación de cables subterráneos. Programas de dispositivos compartidos Otra estrategia consiste en la creación de “bibliotecas digitales” comunitarias, espacios equipados con computadoras, tablets y acceso a internet de alta velocidad que funcionan como centros de aprendizaje fuera del horario escolar. En la localidad de Tarija, la organización No Profit “ConectaTi” gestionó la donación de 120 tablets que son rotativas entre escuelas y hogares, reduciendo la brecha de dispositivos en un 40% según los datos del proyecto (ConectaTi, 2023). Capacitación docente continua En el ámbito formativo, la Universidad Mayor de San Andrés (UMSA) emprendió el Programa de Formación Docente en Tecnologías Educativas (FOTED), que combina cursos en línea con talleres presenciales. Desde su inicio, más de 3 500 docentes han completado módulos sobre diseño de recursos multimedia, evaluación en entornos virtuales y gestión de aulas híbridas. Los participantes reportan una mejora del 30% en su confianza para usar plataformas de aprendizaje y una mayor incorporación de actividades interactivas en sus clases (UMSA, 2024). Enfoque comunitario y participación de los padres La participación activa de la comunidad ha mostrad`,
        questions: [
            {
                id: 452,
                question: "En una unidad educativa, para preparar material didáctico se sabe que 4 cuadernos cuestan 60",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La proporcionalidad directa es una relación matemática en la que dos magnitudes varían de manera conjunta, manteniendo una razón constante entre ellas. Esto implica que, al aumentar una de las magnitudes, la otra aumenta en la misma proporción. En la situación planteada, el precio depende directamente de la cantidad de cuadernos, por lo que el costo unitario permanece constante. Si 4 cuadernos cuestan 60 bolivianos, el precio por cuaderno se obtiene dividiendo el costo total entre la cantidad, resultando 15 bolivianos por unidad. Manteniendo esta relación proporcional, el costo de 10 cuadernos se calcula multiplicando el precio unitario por la nueva cantidad, obteniéndose un costo total de 150 bolivianos."
            },
            {
                id: 453,
                question: "Una expresión algebraica representa una relación general entre cantidades variables. Comprender su",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "En una expresión algebraica, los términos constantes representan cantidades fijas que no dependen del valor de la variable. En 3x + 53x + 53x + 5, el término 5 se mantiene igual independientemente del valor de x. Comprender esta diferencia es clave para interpretar modelos matemáticos simples. Este ítem evalúa comprensión conceptual del lenguaje algebraico. Es fundamental para la enseñanza posterior de ecuaciones y funciones."
            },
            {
                id: 454,
                question: "Una función lineal permite describir relaciones de cambio constante entre dos variables. Este tipo de",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La pendiente de una función lineal indica la razón de cambio entre las variables. Una pendiente positiva señala que ambas variables crecen de manera conjunta. Este concepto es esencial para interpretar gráficas y relaciones funcionales. Más allá del cálculo, se evalúa comprensión del significado del comportamiento de la función. Es una competencia clave para la enseñanza de matemática en niveles iniciales y primarios."
            },
            {
                id: 455,
                question: "La estadística permite organizar e interpretar información proveniente de la realidad. Una de las",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "La media aritmética es una medida de tendencia central que resume un conjunto de datos en un solo valor representativo. Se obtiene sumando todos los valores y dividiendo entre la cantidad de datos. Es ampliamente utilizada para interpretar resultados educativos. Este ítem evalúa comprensión del sentido de la media, no solo su fórmula. Resulta clave para la lectura e interpretación de información estadística."
            },
            {
                id: 456,
                question: "Según el enfoque psicoanalítico desarrollado por Sigmund Freud, una parte importante de la",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Desde el enfoque psicoanalítico desarrollado por Sigmund Freud, el inconsciente constituye una dimensión fundamental de la vida psíquica, en la que se alojan deseos, impulsos, recuerdos y conflictos que no son accesibles a la conciencia, pero que influyen en la conducta. Esta concepción amplió la comprensión del comportamiento humano al señalar que no todas las acciones son racionales o conscientes. El concepto de inconsciente permitió explicar fenómenos como lapsus, sueños y conductas aparentemente inexplicables, aportando una mirada profunda sobre la personalidad."
            },
            {
                id: 457,
                question: "El relativismo filosófico cuestiona la existencia de verdades universales y absolutas. Según esta",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "El relativismo filosófico sostiene que la verdad, el conocimiento o los valores dependen del contexto cultural, histórico o individual, y que no existen criterios universales absolutos. Esta postura ha generado importantes debates en epistemología y ética, ya que cuestiona la posibilidad de verdades universales. El relativismo invita a reconocer la diversidad de perspectivas, aunque también plantea desafíos respecto a la fundamentación del conocimiento y los valores comunes."
            },
            {
                id: 458,
                question: "Una contraseña segura se caracteriza por:",
                options: ["Opción A", "Opción B", "Opción C", "Opción D"],
                answer: 0,
                explanation: "Las contraseñas seguras utilizan combinaciones variadas de caracteres, lo que dificulta accesos no autorizados y protege la información personal. Disciplina: LENGUAJE"
            },
        ]
    }
];