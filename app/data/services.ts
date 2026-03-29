import type { ServiceItem } from "../types/services";

export const servicesData: ServiceItem[] = [
  {
    id: "modelacion-hidrologica-hidraulica",
    title: "Modelación hidrológica e hidráulica",
    short:
      "Aplicación de herramientas y metodologías 1D/2D para el análisis de eventos reales y de diseño, incluyendo calibraciones basadas en datos observados y evaluación de escenarios de cambio climático.",
    bullets: [
      "Simulación hidrológica e hidráulica de cuencas, cauces y sistemas de drenaje.",
      "Modelación 1D/2D para eventos históricos, periodos de retorno de diseño y escenarios de cambio climático.",
      "Calibración y validación de modelos con datos de campo y registros observados.",
      "Estudios de factibilidad hídrica para nuevos desarrollos o ampliaciones de infraestructura.",
    ],
    href: "#servicios",
    icon: "waves",
  },
  {
    id: "riesgo-inundacion-resiliencia",
    title: "Riesgo de inundación y resiliencia climática",
    short:
      "Evaluación de amenazas y vulnerabilidades bajo escenarios actuales y futuros, para apoyar la planificación territorial, la gestión del riesgo y la adaptación al cambio climático.",
    bullets: [
      "Estudios de riesgo de inundación a escala de cuenca, urbana e infraestructura.",
      "Análisis de cambios en el uso del suelo y proyecciones climáticas.",
      "Identificación de medidas estructurales y no estructurales de adaptación.",
      "Estudios de factibilidad hídrica y evaluación de condicionantes para nuevos desarrollos o ampliaciones.",
    ],
    href: "#servicios",
    icon: "shield",
  },
  {
    id: "drenaje-urbano-rural-obras",
    title: "Drenaje urbano, rural y para obras lineales",
    short:
      "Diseño de sistemas de drenaje para entornos urbanos, rurales e infraestructuras lineales, integrando funcionalidad hidráulica, sostenibilidad y resiliencia.",
    bullets: [
      "Diseño de drenaje para carreteras, ferrocarriles, urbanizaciones y áreas rurales.",
      "Incorporación de SUDS y soluciones basadas en la naturaleza.",
      "Evaluación hidráulica de cunetas, alcantarillas, balsas y sistemas de retención.",
      "Optimización del desempeño hidráulico con criterios de eficiencia y mantenimiento.",
    ],
    href: "#servicios",
    icon: "droplets",
  },
  {
    id: "presas-seguridad",
    title: "Presas y seguridad hídrica",
    short:
      "Elaboración de estudios y documentación técnica para seguridad de presas, conforme a normativa vigente y requerimientos regulatorios.",
    bullets: [
      "Redacción de planes de emergencia, normas de explotación, propuestas de clasificación y demás documentación de seguridad de presas.",
      "Modelación de rotura de presas y análisis de afecciones.",
      "Soporte técnico para cumplimiento normativo y tramitaciones.",
      "Revisión técnica de documentación y evaluación de condiciones de seguridad.",
    ],
    href: "#servicios",
    icon: "building",
  },
  {
    id: "hidrogeologia-subterranea",
    title: "Hidrogeología e hidrología subterránea",
    short:
      "Análisis del comportamiento del agua subterránea mediante modelación numérica, interpretación de datos y evaluación de su interacción con el sistema superficial.",
    bullets: [
      "Estudios hidrogeológicos y balance de recursos subterráneos.",
      "Dimensionamiento de pozos de extracción y evaluación de rendimiento.",
      "Modelación numérica de flujo y niveles subterráneos.",
      "Análisis de interacción entre aguas subterráneas y superficiales.",
    ],
    href: "#servicios",
    icon: "activity",
  },
  {
    id: "redes-bombeo-obras",
    title: "Redes, bombeo y obras hidráulicas",
    short:
      "Diseño y asistencia técnica para infraestructuras hidráulicas y sistemas de conducción, adaptados a distintas escalas, usos y grados de desarrollo de proyecto.",
    bullets: [
      "Diseño de redes de agua potable, desagües cloacales y sistemas presurizados.",
      "Dimensionamiento de estaciones de bombeo e impulsiones.",
      "Desarrollo y revisión de obras hidráulicas en distintas fases de proyecto.",
      "Asistencia técnica para soluciones hidráulicas adaptadas a cada contexto.",
    ],
    href: "#servicios",
    icon: "wind",
  },
  {
    id: "calidad-agua-erosion",
    title: "Calidad de agua, erosión y sedimentos",
    short:
      "Estudio de procesos físicos y de transporte en sistemas hídricos para evaluar estabilidad, calidad del agua y respuesta del medio ante distintas intervenciones.",
    bullets: [
      "Evaluación de transporte de contaminantes y variables de calidad de agua.",
      "Modelación de mezcla, dispersión y respuesta del sistema.",
      "Estudios de erosión, vulnerabilidad geomorfológica y medidas de control.",
      "Análisis de transporte de sedimentos, erosión y sedimentación en cauces.",
    ],
    href: "#servicios",
    icon: "flask",
  },
  {
    id: "analisis-geoespacial-gis",
    title: "Análisis geoespacial y GIS",
    short:
      "Integración de herramientas geoespaciales para el procesamiento, análisis y representación de información territorial aplicada a proyectos hídricos.",
    bullets: [
      "Diseño y elaboración de sistemas de información geográfica.",
      "Tratamiento y análisis de datos LiDAR y generación de modelos digitales del terreno.",
      "Elaboración de cartografía técnica para estudios, proyectos e informes.",
      "Desarrollo de productos geoespaciales para análisis territorial y toma de decisiones.",
    ],
    href: "#servicios",
    icon: "map",
  },
  {
    id: "automatizacion-herramientas",
    title: "Automatización y desarrollo de herramientas a medida",
    short:
      "Creación de scripts, modelos y flujos de trabajo personalizados para optimizar procesos, asegurar la trazabilidad de los análisis y mejorar la eficiencia técnica de los proyectos.",
    bullets: [
      "Automatización de tareas con Python, QGIS, Excel y otras herramientas.",
      "Desarrollo de modelos y utilidades adaptadas a necesidades específicas.",
      "Optimización de procesos repetitivos de cálculo, análisis y representación.",
      "Mejora de la trazabilidad, reproducibilidad y consistencia técnica de los estudios.",
    ],
    href: "#servicios",
    icon: "cpu",
  },
  {
    id: "alerta-temprana-aforo",
    title: "Sistemas de alerta temprana y aforo de caudales",
    short:
      "Aplicación de herramientas de monitoreo y análisis en tiempo real para la gestión del riesgo, junto con técnicas de aforo de caudales por velocimetría por imágenes.",
    bullets: [
      "Desarrollo de sistemas de alerta temprana ante eventos extremos.",
      "Integración de modelos predictivos, sensores remotos y plataformas de comunicación.",
      "Aforo de caudales mediante velocimetría por imágenes.",
      "Apoyo al monitoreo operativo y a la calibración y validación de modelos.",
    ],
    href: "#servicios",
    icon: "bell",
  },
];
