// app/data/cases.ts
export type IconKey = "gauge" | "activity" | "droplets";
export type CaseKPI = { label: string; value: string; icon?: IconKey };

export type CaseItem = {
  id: string;
  title: string;
  title_en?: string;
  tags: string[];
  countries?: string;
  summary: string;
  summary_en?: string;
  imageSrc: string;
  imageInsetSrc?: string;
  sector: string;
  location: string;
  year: string | number;
  kpis: CaseKPI[];
  details?: {
    objetivo?: string;
    metodologia?: string;
    validacion?: string;
    entregables?: string;
  };
  href?: string;
};

export const casesData: CaseItem[] = [
  {
    id: "inundabilidad-drenaje-permisos",
    title: "Estudios de inundabilidad y drenaje para permisos y diseño de obras",
    title_en: "Flood and Drainage Studies for Permits and Design",
    sector: "Inundabilidad",
    location: "España · Francia · Suecia · Grecia · Argentina · EE.UU. · Rep. Dominicana",
    year: 2024,
    imageSrc: "/images/cases/case1v2.png",
    imageInsetSrc: "/images/cases/case1v2.png",
    summary:
      "Realizamos estudios de inundabilidad, escorrentía y drenaje para clientes públicos y privados en más de 7 países, aplicando normativa y guías técnicas locales para tramitación ante organismos de cuenca y autoridades ambientales.",
    summary_en:
      "We carried out flood, runoff and drainage studies for public and private clients across 7+ countries, applying local technical regulations for permitting before basin authorities.",
    details: {
      objetivo:
        "Nuestro objetivo fue dar respuesta a los requerimientos de organismos públicos —administraciones locales, organismos de cuenca y autoridades ambientales— solicitados al cliente para obtener permisos de construcción, ampliación o regularización de obras. En cada caso, adaptamos el enfoque a la normativa vigente del país y al tipo de intervención proyectada.",
      metodologia:
        "Desarrollamos modelos hidrológicos e hidráulicos adaptados a la normativa local de cada país. Delimitamos zonas inundables, evaluamos afecciones sobre bienes e infraestructuras y, cuando fue necesario, diseñamos medidas y obras de drenaje. Cada estudio contempló análisis de periodos de retorno, generación de cartografía de inundabilidad y criterios de diseño consistentes con los requerimientos del regulador.",
      validacion:
        "Calibramos los modelos con datos históricos disponibles y contrastamos los resultados con cartografías oficiales de inundabilidad (SNCZI, BDMV u equivalentes locales). En los casos con información de campo, ajustamos los modelos con registros de nivel e hidrogramas de eventos documentados.",
      entregables:
        "Entregamos memorias técnicas, cartografía de inundabilidad (zonas de flujo preferente, zona inundable T100/T500), planos de afecciones, criterios de diseño de drenaje y documentación lista para tramitación ante el organismo competente.",
    },
    kpis: [
      { label: "Países", value: "+7", icon: "gauge" },
      { label: "Proyectos", value: "+20", icon: "activity" },
    ],
    tags: ["Inundabilidad", "HEC-RAS", "Iber", "Permisos", "Multipaís"],
    countries: "España · Francia · Suecia · Grecia · Argentina · EE.UU. · Rep. Dominicana",
    href: "/casos/inundabilidad-drenaje-permisos",
  },
  {
    id: "seguridad-presas-espana",
    title: "Documentación de Seguridad de Presas en España",
    title_en: "Dam Safety Documentation in Spain",
    sector: "Presas",
    location: "España",
    year: 2024,
    imageSrc: "/images/cases/case2v2.png",
    imageInsetSrc: "/images/cases/case2v2.png",
    summary:
      "Elaboramos documentación de seguridad de presas en España, destinada a su presentación ante diversas Confederaciones Hidrográficas. Seguimos estrictamente las guías técnicas vigentes y acompañamos el proceso hasta la aprobación de cada documento.",
    summary_en:
      "We produced dam safety documentation in Spain for submission to multiple River Basin Authorities, following applicable technical guidelines and supporting each project through to formal approval.",
    details: {
      objetivo:
        "Nuestro objetivo fue elaborar los documentos de seguridad requeridos por la Directiva Técnica de Seguridad de Presas e Infraestructuras Hidráulicas: Planes de Emergencia (PEP), Normas de Explotación, Propuestas de Clasificación y Planes de Autoprotección, para su presentación y aprobación ante las distintas Confederaciones Hidrográficas.",
      metodologia:
        "Seguimos de forma estricta las guías de elaboración de cada tipo de documento, integrando el conocimiento de la presa, su cuenca, los elementos en riesgo aguas abajo y los protocolos de actuación ante emergencias. Cuando el alcance lo requirió, realizamos modelos hidráulicos de rotura de presa (brecha paramétrica) con propagación 1D/2D aguas abajo, generando mapas de inundación, isócronas de llegada, profundidades y velocidades máximas para los distintos escenarios de rotura considerados.",
      validacion:
        "Contrastamos los resultados de rotura con estudios previos disponibles y realizamos una revisión cruzada con cartografía oficial. Verificamos la coherencia entre los escenarios de rotura, los tiempos de propagación y los aforos históricos de la cuenca.",
      entregables:
        "Entregamos el documento de seguridad completo (PEP, Norma de Explotación, Clasificación o Plan de Autoprotección según el caso), mapas de inundación por rotura, tablas de afecciones con elementos en riesgo (población, infraestructuras, usos del suelo), fichas de actuación y realizamos el seguimiento hasta la aprobación por la Confederación Hidrográfica.",
    },
    kpis: [
      { label: "Confederaciones", value: "5+", icon: "gauge" },
      { label: "Aprobación", value: "100%", icon: "activity" },
    ],
    tags: ["Presas", "PEP", "HEC-RAS", "España", "Seguridad hídrica"],
    countries: "España",
    href: "/casos/seguridad-presas-espana",
  },
  {
    id: "erosion-socavacion-puentes",
    title: "Estudios de Erosión y Socavación en puentes y obras de paso",
    title_en: "Scour and Erosion Studies for Bridges and Crossings",
    sector: "Obras hidráulicas",
    location: "Argentina · Estados Unidos",
    year: 2024,
    imageSrc: "/images/cases/case3v2.png",
    imageInsetSrc: "/images/cases/case3v2.png",
    summary:
      "Realizamos estudios de erosión, estabilidad de márgenes y socavación, principalmente aplicados a puentes y obras de paso en Argentina y Estados Unidos. También abordamos casos de protección de márgenes y estabilidad fluvial en tramos con riesgo para infraestructuras y desarrollos urbanos.",
    summary_en:
      "We conducted scour, bank stability and erosion studies applied to bridges and crossings in Argentina and the United States, including bank protection and fluvial stability assessments for infrastructure at risk.",
    details: {
      objetivo:
        "Nuestro objetivo fue evaluar el riesgo de socavación en pilas, estribos y zona de aproximación de puentes y obras de paso, estimar la magnitud esperable bajo distintos eventos de crecida y definir soluciones de protección costo-efectivas. En algunos casos, abordamos también la estabilidad de márgenes y la protección de infraestructuras y desarrollos urbanos en tramos con riesgo fluvial.",
      metodologia:
        "Realizamos análisis hidráulicos de las condiciones de crecida (caudales de diseño, niveles, velocidades y distribución de flujo en la sección de cruce) mediante modelos 1D/2D. Estimamos la socavación general, por contracción y local en pilas y estribos aplicando los métodos de referencia (HEC-18 y metodologías argentinas). Caracterizamos geomorfológicamente el tramo y evaluamos la estabilidad de márgenes bajo condiciones de diseño.",
      validacion:
        "Contrastamos los resultados con registros históricos de niveles y aforos disponibles. Verificamos la coherencia de las estimaciones de socavación con las características geotécnicas del lecho y las observaciones de campo.",
      entregables:
        "Entregamos un informe técnico con estimación de socavaciones por tipo y escenario, mapas de velocidades y energía específica en la sección de cruce, y recomendaciones de medidas de mitigación (escolleras, colchones Reno, umbrales, deflectores) con criterios de dimensionamiento y presupuesto de referencia.",
    },
    kpis: [
      { label: "Puentes analizados", value: "+15", icon: "gauge" },
      { label: "Países", value: "2", icon: "activity" },
    ],
    tags: ["Socavación", "HEC-RAS", "HEC-18", "Puentes", "Argentina"],
    countries: "Argentina · Estados Unidos",
    href: "/casos/erosion-socavacion-puentes",
  },
  {
    id: "obras-drenaje-infraestructura",
    title: "Proyectos de drenaje para infraestructuras de gran escala",
    title_en: "Drainage Projects for Large-Scale Infrastructure",
    sector: "Drenaje",
    location: "Argentina · España",
    year: 2024,
    imageSrc: "/images/cases/case4v2.png",
    imageInsetSrc: "/images/cases/case4v2.png",
    summary:
      "Participamos en proyectos de diseño y verificación de obras de drenaje asociadas a infraestructuras de gran escala: obras lineales, aeropuertos, subestaciones eléctricas, plantas fotovoltaicas, parques eólicos y centros de datos, en Argentina y España.",
    summary_en:
      "We participated in drainage design and verification projects for large-scale infrastructure including linear works, airports, electrical substations, solar and wind farms, and data centres in Argentina and Spain.",
    details: {
      objetivo:
        "Nuestro objetivo fue definir los criterios de diseño hidrológico e hidráulico, dimensionar las obras de conducción y control necesarias, y generar la documentación técnica requerida para permisos, licitación o construcción. Trabajamos tanto en el diagnóstico de sistemas existentes como en el diseño de nuevas soluciones para infraestructuras en fase de proyecto o en construcción.",
      metodologia:
        "Estimamos los caudales de diseño mediante métodos hidrológicos adaptados a la normativa local (curvas IDF, método racional, hidrogramas unitarios). Dimensionamos obras de conducción y control: cunetas, alcantarillas y marcos de cruce, canales trapezoidales y rectangulares, estructuras de disipación de energía y dispositivos de retención/laminación. Verificamos capacidades y evaluamos interferencias con otras infraestructuras mediante modelación hidráulica.",
      validacion:
        "Verificamos las capacidades hidráulicas bajo eventos de diseño (T10, T25, T100 según el tipo de infraestructura y la normativa aplicable). Revisamos interferencias con servicios, caminos y cauces naturales existentes, y contrastamos los diseños con los criterios establecidos en cada normativa.",
      entregables:
        "Entregamos memorias técnicas hidrológico-hidráulicas, planos de diseño de obras de drenaje, planillas de cómputos y presupuesto de referencia, especificaciones técnicas de construcción y documentación de soporte para permisos ante organismos viales, ambientales o de cuenca.",
    },
    kpis: [
      { label: "Tipo de infraestructura", value: "6+", icon: "gauge" },
      { label: "Proyectos", value: "+30", icon: "activity" },
    ],
    tags: ["Drenaje", "Alcantarillas", "HEC-HMS", "Argentina", "Renovables"],
    countries: "Argentina · España",
    href: "/casos/obras-drenaje-infraestructura",
  },
  {
    id: "drenaje-urbano-suds",
    title: "Drenaje urbano y Soluciones de Drenaje Sostenible (SUDS)",
    title_en: "Urban Drainage and Sustainable Drainage Solutions (SuDS)",
    sector: "Drenaje Urbano",
    location: "Argentina",
    year: 2024,
    imageSrc: "/images/cases/case5v2.png",
    imageInsetSrc: "/images/cases/case5v2.png",
    summary:
      "Desarrollamos estudios y proyectos de drenaje urbano en distintas localidades de Argentina, abarcando desde la planificación estratégica hasta el diseño de soluciones a escala de obra, incluyendo planes maestros, redes pluviales y la evaluación e integración de SUDS.",
    summary_en:
      "We developed urban drainage studies and projects across Argentine cities, covering strategic planning through to detailed design, including master plans, stormwater networks and the integration of Sustainable Drainage Systems (SuDS).",
    details: {
      objetivo:
        "Nuestro objetivo fue reducir los anegamientos urbanos mediante la planificación estratégica del drenaje pluvial y la integración de Soluciones Urbanas de Drenaje Sostenible (SUDS), mejorando la resiliencia de los barrios frente a eventos de tormenta de distintos periodos de retorno. En algunos proyectos, brindamos también soporte hidrológico-hidráulico para nuevos loteos y desarrollos urbanísticos, definiendo medidas de manejo de escorrentía y criterios de descarga.",
      metodologia:
        "Modelamos las redes pluviales con SWMM, incluyendo malla dual calle-colector, bocas de tormenta y estructuras de control. Evaluamos e integramos SUDS (pavimentos permeables, jardines de lluvia, zanjas drenantes, cunetas verdes, balsas de laminación con vegetación) mediante modelación hidrológica comparativa. Elaboramos mapas de riesgo por inundación con profundidades y velocidades para distintos periodos de retorno, y realizamos análisis de vulnerabilidad para priorización de obras.",
      validacion:
        "Calibramos los modelos con eventos de lluvia registrados y comparamos las láminas de agua observadas con los resultados del modelo. Realizamos análisis de sensibilidad a parámetros hidrológicos (CN, tiempo de concentración) y de la red (rugosidades, coeficientes de entrada en bocas de tormenta).",
      entregables:
        "Entregamos planes maestros de drenaje urbano con diagnóstico de la red existente, propuesta de obras de mejora priorizadas por costo-beneficio, diseño de soluciones SUDS con criterios constructivos, mapas de riesgo por inundación (T2, T5, T10, T25, T100) y fichas técnicas de intervención por sector.",
    },
    kpis: [
      { label: "Ciudades", value: "5+", icon: "gauge" },
      { label: "Reducción anegamientos", value: "−15%", icon: "activity" },
    ],
    tags: ["SWMM", "SUDS", "Drenaje Urbano", "Argentina", "Resiliencia"],
    countries: "Argentina",
    href: "/casos/drenaje-urbano-suds",
  },
  {
    id: "hidrologia-subterranea-llanura",
    title: "Hidrología subterránea y de llanura",
    title_en: "Groundwater and Lowland Hydrology",
    sector: "Aguas subterráneas",
    location: "España · Argentina",
    year: 2024,
    imageSrc: "/images/cases/case6v2.png",
    imageInsetSrc: "/images/cases/case6v2.png",
    summary:
      "Realizamos estudios de hidrogeología aplicada y modelación de aguas subterráneas en España y Argentina, orientados tanto a la planificación de recursos hídricos como a la evaluación ambiental. Trabajamos también en cuencas de llanura con dinámica de inundación estacional, incluyendo proyectos en la laguna La Picasa, Santa Fe.",
    summary_en:
      "We conducted applied hydrogeology studies and groundwater modelling in Spain and Argentina, focused on water resource planning and environmental assessment, including seasonal flooding dynamics in lowland catchments such as La Picasa lagoon, Santa Fe.",
    details: {
      objetivo:
        "Nuestro objetivo fue analizar balances hídricos subterráneos, la dinámica de interacción río-acuífero y evaluar escenarios de gestión (cambios de extracción, recarga, uso del suelo). En las cuencas de llanura —incluyendo la laguna La Picasa y zonas aledañas en Santa Fe— nos propusimos comprender la dinámica de inundación y los mecanismos de recarga-descarga de acuíferos freáticos en condiciones de exceso hídrico.",
      metodologia:
        "Construimos y calibramos modelos numéricos de aguas subterráneas (diferencias finitas / elementos finitos) integrando datos piezométricos, hidroquímicos y de uso del suelo. Desarrollamos modelación acoplada superficial-subterránea para cuencas de llanura con dinámica de encharcamiento y evapotranspiración. Cuando el problema lo demandó, evaluamos la dispersión de contaminantes y la evolución espacio-temporal de plumas mediante modelos de transporte.",
      validacion:
        "Calibramos los modelos con series piezométricas históricas y, donde disponíamos de ellos, con datos de aforo de intercambio río-acuífero. Utilizamos el cierre del balance hídrico como indicador de consistencia. En los casos de transporte, contrastamos los resultados con muestreos de calidad de agua en pozos de monitoreo.",
      entregables:
        "Entregamos informes de hidrogeología con descripción del sistema acuífero, mapas de isopiezas y gradientes, resultados de calibración, análisis de escenarios de gestión y recomendaciones para el manejo del recurso hídrico subterráneo. En casos de contaminación, incluimos mapas de extensión de plumas y propuestas de monitoreo o remediación.",
    },
    kpis: [
      { label: "Modelos calibrados", value: "10+", icon: "gauge" },
      { label: "Países", value: "2", icon: "activity" },
    ],
    tags: ["Hidrogeología", "Aguas subterráneas", "La Picasa", "Argentina", "España"],
    countries: "España · Argentina",
    href: "/casos/hidrologia-subterranea-llanura",
  },
  {
    id: "sistemas-alerta-inundaciones",
    title: "Sistemas de Alerta Temprana de Inundaciones",
    title_en: "Flood Early Warning Systems",
    sector: "Alerta Temprana",
    location: "Argentina",
    year: 2024,
    imageSrc: "/images/cases/case7v2.png",
    imageInsetSrc: "/images/cases/case7v2.png",
    summary:
      "Participamos en el desarrollo de sistemas de alerta temprana de inundaciones para ciudades en Argentina, integrando modelos hidrológicos e hidráulicos con información meteorológica y modelos de pronóstico numérico del tiempo para generar escenarios de caudales y niveles en tiempo casi real.",
    summary_en:
      "We participated in the development of flood early warning systems for Argentine cities, coupling hydrological and hydraulic models with meteorological data and numerical weather prediction to generate near-real-time flood scenarios.",
    details: {
      objetivo:
        "Nuestro objetivo fue construir herramientas operativas de anticipación y apoyo a la toma de decisiones para organismos de gestión del riesgo hídrico. Buscamos reducir los tiempos de respuesta ante eventos de inundación mediante la integración de modelos de pronóstico meteorológico con modelos hidrológicos e hidráulicos operando en tiempo casi real.",
      metodologia:
        "Definimos la arquitectura del sistema: la cadena de modelos desde la precipitación pronosticada hasta los niveles e inundaciones esperados. Acoplamos modelos de pronóstico numérico del tiempo (NWP) con modelos hidrológicos lluvia-escorrentía (HEC-HMS) y modelos hidráulicos (HEC-RAS / SWMM). Establecimos flujos de datos automatizados, umbrales de alerta por tramo o punto de control, y generamos productos operativos (mapas, series temporales, boletines) adaptados a los distintos usuarios del sistema.",
      validacion:
        "Validamos el sistema contra eventos históricos de inundación con registros de campo disponibles. Analizamos la habilidad predictiva del sistema —tiempos de adelanto, tasas de acierto y falsas alarmas— para distintos horizontes de pronóstico.",
      entregables:
        "Entregamos el sistema de alerta temprana operativo con documentación técnica completa: arquitectura del sistema, manuales de operación, umbrales de alerta calibrados, mapas de inundación precalculados por escenario, protocolos de comunicación y plan de mantenimiento.",
    },
    kpis: [
      { label: "Ciudades", value: "3+", icon: "gauge" },
      { label: "Anticipación", value: "+6h", icon: "activity" },
    ],
    tags: ["Alerta Temprana", "HEC-HMS", "HEC-RAS", "Argentina", "Tiempo real"],
    countries: "Argentina",
    href: "/casos/sistemas-alerta-inundaciones",
  },
  {
    id: "transporte-contaminantes-calidad-agua",
    title: "Evaluación de transporte de contaminantes y calidad de agua",
    title_en: "Contaminant Transport and Water Quality Assessment",
    sector: "Calidad de agua",
    location: "Argentina",
    year: 2024,
    imageSrc: "/images/cases/case8v2.png",
    imageInsetSrc: "/images/cases/case8v2.png",
    summary:
      "Desarrollamos estudios de transporte de contaminantes y calidad de agua en ríos, principalmente en Argentina, utilizando herramientas de hidrodinámica y dispersión. Modelamos variables como DBO y oxígeno disuelto para diagnóstico ambiental, análisis de cumplimiento y evaluación de medidas de mitigación.",
    summary_en:
      "We developed contaminant transport and water quality studies in rivers across Argentina using hydrodynamic and dispersion tools, modelling variables such as BOD and dissolved oxygen for environmental diagnosis, compliance analysis and mitigation assessment.",
    details: {
      objetivo:
        "Nuestro objetivo fue evaluar la capacidad de autodepuración de los cuerpos receptores ante descargas de efluentes industriales o cloacales, estimar la extensión y concentración de plumas de contaminantes bajo distintos caudales y cargas, y proveer resultados técnicos para diagnóstico ambiental, análisis de cumplimiento de estándares de calidad de agua y evaluación de medidas de mitigación o control.",
      metodologia:
        "Aplicamos herramientas computacionales de hidrodinámica y dispersión para estimar los procesos de mezcla en zona de campo cercano y campo lejano. Modelamos variables de calidad típicas (DBO, OD, nutrientes, temperatura) y evaluamos la respuesta del sistema ante variaciones de caudal, carga contaminante y condiciones de borde estacionales. Visualizamos las plumas de contaminantes mediante campos de concentración espacio-temporales.",
      validacion:
        "Contrastamos los resultados con datos de calidad de agua de campo (muestreos en distintas secciones y condiciones de caudal). Calibramos los coeficientes de degradación, reaireación y dispersión longitudinal/transversal, y realizamos análisis de sensibilidad a los parámetros de mayor incertidumbre.",
      entregables:
        "Entregamos informes técnicos con caracterización hidrodinámica del tramo, mapas de concentración de contaminantes (extensión de plumas por escenario de caudal y carga), análisis de cumplimiento de estándares de calidad de agua, evaluación de escenarios de reducción de carga y recomendaciones de medidas de mitigación o monitoreo.",
    },
    kpis: [
      { label: "Variables modeladas", value: "5+", icon: "gauge" },
      { label: "Estudios", value: "8+", icon: "activity" },
    ],
    tags: ["Calidad de agua", "Plumas", "DBO", "Argentina", "Ambiental"],
    countries: "Argentina",
    href: "/casos/transporte-contaminantes-calidad-agua",
  },
];