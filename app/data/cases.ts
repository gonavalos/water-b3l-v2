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
    location: "España · Francia · Suecia · Grecia · Italia · Argentina · EE.UU. · Rep. Dominicana",
    year: 2025,
    imageSrc: "/images/cases/case1v2.png",
    imageInsetSrc: "/images/cases/case1v2.png",
    summary:
      "Desarrollamos estudios de inundabilidad, escorrentía y drenaje para clientes públicos y privados, aplicando normativa y guías técnicas locales y generando documentación lista para tramitación. Estos trabajos se realizaron en más de 8 países, en proyectos vinculados a permisos, ampliaciones, regularizaciones y diseño de obras.",
    summary_en:
      "We developed flood, runoff and drainage studies for public and private clients, applying local regulations and technical guidelines and producing documentation ready for permitting. These projects were carried out in over 8 countries, linked to permits, expansions, regularisations and works design.",
    details: {
      objetivo:
        "Dar respuesta a requerimientos de administraciones locales, organismos de cuenca y autoridades ambientales para obtener permisos de construcción, ampliación o regularización, adaptando cada estudio a la normativa y al tipo de intervención proyectada.",
      metodologia:
        "Desarrollamos modelos hidrológicos e hidráulicos, delimitamos zonas inundables, evaluamos afecciones sobre el entorno y, cuando fue necesario, diseñamos medidas y obras de drenaje compatibles con el proyecto y con el marco regulatorio aplicable.",
      validacion:
        "Contrastamos resultados con criterios normativos locales, consistencia hidrológico-hidráulica, cartografía topográfica disponible y, cuando aplica, con información observada o antecedentes técnicos del sitio.",
      entregables:
        "Memorias técnicas, cartografía temática, delimitación de zonas inundables, criterios de diseño y documentación de soporte para presentación ante organismos competentes. Cuando el cliente lo solicitó, también se entregaron archivos editables y archivos de trabajo asociados al estudio.",
    },
    kpis: [
      { label: "Países", value: "+8", icon: "gauge" },
      { label: "Proyectos", value: "+20", icon: "activity" },
    ],
    tags: ["Riesgo de inundación", "HEC-RAS", "Iber", "Permisos"],
    countries: "España · Francia · Suecia · Grecia · Italia · Argentina · EE.UU. · Rep. Dominicana",
  },
  {
    id: "seguridad-presas-espana",
    title: "Documentación de seguridad de presas en España",
    title_en: "Dam Safety Documentation in Spain",
    sector: "Presas",
    location: "España",
    year: 2025,
    imageSrc: "/images/cases/case2v2.png",
    imageInsetSrc: "/images/cases/case2v2.png",
    summary:
      "Elaboramos documentación de seguridad de presas en España para su presentación ante Confederaciones Hidrográficas, incorporando cuando aplica la modelación hidráulica de escenarios de rotura.",
    summary_en:
      "We prepared dam safety documentation in Spain for submission to River Basin Authorities, incorporating hydraulic breach scenario modelling when applicable.",
    details: {
      objetivo:
        "Elaborar propuestas de clasificación, normas de explotación, planes de emergencia, planes de autoprotección, entre otros documentos de seguridad de presas, asegurando trazabilidad técnica y cumplimiento de la normativa vigente.",
      metodologia:
        "Seguimos de forma estricta las guías de elaboración aplicables para cada uno de los documentos de seguridad de presas. Cuando el alcance lo requirió, incorporamos la modelación de los escenarios de rotura y el análisis y procesamiento de los resultados asociados.",
      validacion:
        "Revisamos la consistencia técnica y documental frente a la normativa vigente, guías oficiales y requerimientos específicos de cada Confederación Hidrográfica. Además, realizamos el seguimiento junto con el cliente y con la Confederación hasta obtener una versión aprobada de cada documento.",
      entregables:
        "Documento de seguridad de presa en cuestión, listo para su presentación y seguimiento hasta aprobación, junto con los archivos de trabajo asociados.",
    },
    kpis: [
      { label: "Confederaciones Hidrográficas", value: "+3", icon: "gauge" },
      { label: "Documentos de seguridad aprobados", value: "+20", icon: "activity" },
    ],
    tags: ["Presas", "Seguridad hídrica", "HEC-RAS"],
    countries: "España",
  },
  {
    id: "erosion-socavacion-estabilidad",
    title: "Estudios de erosión, socavación y estabilidad fluvial",
    title_en: "Erosion, Scour and Fluvial Stability Studies",
    sector: "Obras hidráulicas",
    location: "Argentina · EE.UU.",
    year: 2025,
    imageSrc: "/images/cases/case3v2.png",
    imageInsetSrc: "/images/cases/case3v2.png",
    summary:
      "Realizamos estudios de erosión, estabilidad de márgenes y socavación para puentes, obras de paso y tramos fluviales con riesgo para infraestructuras, servicios o desarrollos urbanos.",
    summary_en:
      "We carried out erosion, bank stability and scour studies for bridges, crossings and river reaches posing risk to infrastructure, services or urban developments.",
    details: {
      objetivo:
        "Identificar el nivel de riesgo asociado a procesos erosivos y de socavación, estimar su magnitud esperable y definir medidas de mitigación técnica y económicamente viables.",
      metodologia:
        "Analizamos mecanismos de erosión, revisamos condiciones hidráulicas de crecida, estimamos socavación potencial y evaluamos alternativas de protección como escolleras, disipadores de energía u otras medidas de estabilización y control.",
      validacion:
        "Contrastamos los resultados con eventos registrados cuando esa información estuvo disponible, y con otros estudios similares aprobados en la zona.",
      entregables:
        "Memoria técnica con el diagnóstico de riesgo, la estimación de socavación o erosión potencial, la evaluación de vulnerabilidad y las recomendaciones de mitigación y protección, junto con planos y archivos de trabajo cuando el cliente lo solicitó. Cuando fue necesario, todo se entregó en formato listo para presentar ante la autoridad competente.",
    },
    kpis: [
      { label: "Países", value: "+2", icon: "gauge" },
      { label: "Estructuras y tramos evaluados", value: "+10", icon: "activity" },
    ],
    tags: ["Erosión", "Socavación", "HEC-RAS"],
    countries: "Argentina · EE.UU.",
  },
  {
    id: "obras-drenaje-infraestructura",
    title: "Proyectos de obras de drenaje",
    title_en: "Drainage Works Projects",
    sector: "Drenaje",
    location: "Argentina · España · EE.UU. · Italia · Suecia",
    year: 2025,
    imageSrc: "/images/cases/case4v2.png",
    imageInsetSrc: "/images/cases/case4v2.png",
    summary:
      "Participamos en proyectos de diseño y verificación de obras de drenaje asociadas a infraestructuras y desarrollos de distintas escalas, desde intervenciones puntuales hasta proyectos de gran magnitud, incluyendo obras lineales, aeropuertos, subestaciones, plantas fotovoltaicas, parques eólicos y centros de datos.",
    summary_en:
      "We participated in drainage design and verification projects for infrastructure and developments of varying scales, from small interventions to large-scale projects including linear works, airports, substations, solar and wind farms, and data centres.",
    details: {
      objetivo:
        "Definir soluciones de drenaje seguras y eficientes, asegurando capacidad hidráulica, resiliencia frente a eventos extremos y compatibilidad con criterios actuales de adaptación y cambio climático, además del soporte técnico necesario para permisos, licitación o construcción.",
      metodologia:
        "Primero establecemos los criterios y valores de diseño, incluyendo estudios hidrológicos e hidráulicos cuando fueron necesarios. Luego dimensionamos obras de conducción y control, tales como cunetas, alcantarillas, obras de cruce, canales, estructuras de disipación y estructuras de retención o laminación. Finalmente, evaluamos el comportamiento del sistema bajo eventos de diseño y también bajo escenarios extremos, incluyendo cuando corresponde condiciones asociadas al cambio climático.",
      validacion:
        "Verificamos la capacidad y el desempeño de las soluciones no solo bajo escenarios de diseño, sino también frente a eventos extremos y escenarios adicionales que permitan evaluar robustez y resiliencia, incluyendo en determinados casos hipótesis asociadas al cambio climático.",
      entregables:
        "Memorias técnicas, criterios de diseño, planos, esquemas hidráulicos y documentación de soporte para permisos, licitación o construcción.",
    },
    kpis: [
      { label: "Países", value: "+4", icon: "gauge" },
      { label: "Proyectos", value: "+20", icon: "activity" },
    ],
    tags: ["Drenaje", "Obras hidráulicas", "HEC-HMS"],
    countries: "Argentina · España · EE.UU. · Italia · Suecia",
  },
  {
    id: "drenaje-urbano-planificacion",
    title: "Drenaje urbano y planificación pluvial",
    title_en: "Urban Drainage and Stormwater Planning",
    sector: "Drenaje Urbano",
    location: "Argentina · España",
    year: 2025,
    imageSrc: "/images/cases/case5v2.png",
    imageInsetSrc: "/images/cases/case5v2.png",
    summary:
      "Desarrollamos estudios y proyectos de drenaje urbano, desde la planificación estratégica hasta el diseño de soluciones a escala de obra, incluyendo redes pluviales, balsas de retención y laminación, y SUDS.",
    summary_en:
      "We developed urban drainage studies and projects, from strategic planning to detailed design, including stormwater networks, detention and retention ponds, and SuDS.",
    details: {
      objetivo:
        "Mejorar el desempeño del drenaje urbano y apoyar la toma de decisiones en nuevas urbanizaciones y loteos, como también en áreas urbanas ya consolidadas, integrando criterios hidráulicos, de gestión del riesgo y de sostenibilidad.",
      metodologia:
        "Elaboramos planes maestros de drenaje, diseñamos redes y dispositivos de control, evaluamos e integramos SUDS y, cuando fue requerido, desarrollamos mapas de riesgo por inundación y análisis de vulnerabilidad para priorización de intervenciones.",
      validacion:
        "Revisamos balances de escorrentía, capacidad del sistema, compatibilidad con criterios de descarga y coherencia entre las propuestas de intervención y las limitaciones urbanas y normativas del entorno.",
      entregables:
        "Planes maestros, memorias de cálculo, planos de diseño y mapas de riesgo.",
    },
    kpis: [
      { label: "Nuevos loteos", value: "+10", icon: "gauge" },
      { label: "Aprobación", value: "100%", icon: "activity" },
    ],
    tags: ["SWMM", "SUDS", "Drenaje Urbano"],
    countries: "Argentina · España",
  },
  {
    id: "hidrologia-subterranea-llanura",
    title: "Hidrología subterránea y de llanura",
    title_en: "Groundwater and Lowland Hydrology",
    sector: "Aguas subterráneas",
    location: "Argentina · España",
    year: 2025,
    imageSrc: "/images/cases/case6v2.png",
    imageInsetSrc: "/images/cases/case6v2.png",
    summary:
      "Desarrollamos estudios de hidrogeología aplicada y modelación de aguas subterráneas orientados a la planificación de recursos hídricos, la evaluación ambiental y el análisis de interacción entre sistemas superficiales y subterráneos.",
    summary_en:
      "We developed applied hydrogeology studies and groundwater modelling focused on water resource planning, environmental assessment and analysis of surface–groundwater interaction.",
    details: {
      objetivo:
        "Comprender el funcionamiento hidrogeológico del sistema, evaluar balances, interacción río-acuífero y escenarios de gestión, y generar insumos técnicos para la toma de decisiones y el diseño de medidas de control.",
      metodologia:
        "Construimos y calibramos modelos numéricos, analizamos escenarios de extracción, recarga y uso del suelo y, cuando el problema lo demandó, evaluamos dispersión de contaminantes y evolución espacio-temporal de plumas.",
      validacion:
        "Contrastamos el comportamiento del modelo con información de campo y niveles piezométricos medidos, asegurando consistencia conceptual entre la dinámica simulada y el sistema analizado.",
      entregables:
        "Memoria técnica, modelo numérico calibrado, análisis de escenarios, resultados de interacción río-acuífero o dispersión y recomendaciones técnicas para gestión y control.",
    },
    kpis: [
      { label: "Sistemas analizados", value: "+5", icon: "gauge" },
      { label: "Modelos calibrados", value: "+10", icon: "activity" },
    ],
    tags: ["Hidrogeología", "Aguas subterráneas"],
    countries: "Argentina · España",
  },
  {
    id: "sistemas-alerta-inundaciones",
    title: "Sistemas de alerta temprana de inundaciones",
    title_en: "Flood Early Warning Systems",
    sector: "Alerta Temprana",
    location: "Argentina",
    year: 2025,
    imageSrc: "/images/cases/case7v2.png",
    imageInsetSrc: "/images/cases/case7v2.png",
    summary:
      "Participamos en el desarrollo de sistemas de alerta temprana de inundaciones para ciudades, integrando modelos hidrológicos e hidráulicos con información meteorológica para generar herramientas operativas de anticipación y apoyo a la toma de decisiones.",
    summary_en:
      "We participated in developing flood early warning systems for cities, integrating hydrological and hydraulic models with meteorological data to generate operational tools for anticipation and decision support.",
    details: {
      objetivo:
        "Desarrollar herramientas técnicas para anticipar eventos, definir umbrales de alerta y mejorar la capacidad de respuesta de organismos técnicos y de gestión del riesgo.",
      metodologia:
        "Integramos modelos hidrológicos e hidráulicos con información meteorológica y, cuando corresponde, con modelos de pronóstico numérico del tiempo, para generar escenarios de caudales y niveles en tiempo casi real. Definimos flujos de datos, criterios de umbral y productos de comunicación del riesgo.",
      validacion:
        "Verificamos consistencia entre entradas, modelos, umbrales y productos de salida, y contrastamos el desempeño del sistema con eventos de referencia, antecedentes disponibles y requerimientos operativos del usuario.",
      entregables:
        "Los entregables incluyen los distintos insumos que componen el sistema de alerta, como los modelos hidrológicos e hidráulicos, los flujos de datos automatizados, la definición de umbrales y demás componentes técnicos, junto con reportes, mapas y otros productos orientados a la comunicación del riesgo y la toma de decisiones.",
    },
    kpis: [
      { label: "Ciudades", value: "+3", icon: "gauge" },
      { label: "Horas de anticipación", value: "+12", icon: "activity" },
    ],
    tags: ["Alerta Temprana", "HEC-HMS", "HEC-RAS"],
    countries: "Argentina",
  },
  {
    id: "transporte-contaminantes-calidad-agua",
    title: "Evaluación de transporte de contaminantes y calidad de agua",
    title_en: "Contaminant Transport and Water Quality Assessment",
    sector: "Calidad de agua",
    location: "Argentina",
    year: 2025,
    imageSrc: "/images/cases/case8v2.png",
    imageInsetSrc: "/images/cases/case8v2.png",
    summary:
      "Desarrollamos estudios de calidad de agua y transporte de contaminantes en cursos de agua mediante modelos de hidrodinámica y dispersión, para apoyar diagnósticos ambientales, análisis de cumplimiento y evaluación de escenarios.",
    summary_en:
      "We developed water quality and contaminant transport studies in watercourses using hydrodynamic and dispersion models, to support environmental diagnosis, compliance analysis and scenario assessment.",
    details: {
      objetivo:
        "Evaluar la respuesta del sistema frente a distintos caudales, cargas y condiciones de borde, y generar evidencia técnica para medidas de mitigación, control o gestión.",
      metodologia:
        "Estimamos procesos de mezcla y transporte y modelamos variables típicas de calidad de agua, como DBO y oxígeno disuelto, considerando distintos escenarios hidrológicos y de carga contaminante.",
      validacion:
        "Revisamos coherencia física de los resultados, balances de masa, sensibilidad a condiciones de borde y, cuando existe información disponible, contraste con datos de monitoreo o antecedentes del sistema.",
      entregables:
        "Memoria técnica con diagnóstico ambiental, análisis de cumplimiento, evaluación de escenarios, resultados de modelación y recomendaciones de mitigación o control.",
    },
    kpis: [
      { label: "Estudios", value: "+8", icon: "gauge" },
      { label: "Variables modeladas", value: "+5", icon: "activity" },
    ],
    tags: ["Calidad de agua", "Transporte de contaminantes"],
    countries: "Argentina",
  },
];