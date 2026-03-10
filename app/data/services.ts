import type { ServiceItem } from "../types/services";

export const servicesData: ServiceItem[] = [
  {
    id: "modelacion-hidraulica",
    title: "Modelación hidráulica",
    short:
      "Simulación 1D/2D de ríos, canales y llanuras de inundación para analizar niveles, velocidades y capacidades de desagüe en diferentes escenarios de caudal.",
    bullets: [
      "Modelos en régimen permanente y no permanente para avenidas de distintos periodos de retorno.",
      "Análisis de secciones, puentes, alcantarillas y encauzamientos existentes o proyectados.",
      "Comparación de alternativas de obra y optimización de secciones y defensas.",
      "Generación de mapas de calados, velocidades y extensión de la inundación.",
    ],
    href: "#servicios",
    icon: "waves",
  },
  {
    id: "modelacion-hidrologica",
    title: "Modelación hidrológica",
    short:
      "Estimación de la respuesta de cuencas y subcuencas frente a la lluvia para obtener caudales de diseño e hidrogramas de avenida.",
    bullets: [
      "Cálculo de caudales punta y volúmenes asociados a distintos periodos de retorno.",
      "Construcción de curvas IDF y series sintéticas de precipitación.",
      "Modelos lluvia–escorrentía con distintos métodos de pérdida y transformación.",
      "Delimitación de cuencas y parámetros hidrológicos apoyados en SIG.",
    ],
    href: "#servicios",
    icon: "droplets",
  },
  {
    id: "obras-hidraulicas",
    title: "Obras hidráulicas",
    short:
      "Diseño y verificación hidráulica de estructuras de conducción, alivio y regulación para garantizar su capacidad y seguridad de funcionamiento.",
    bullets: [
      "Dimensionamiento de alcantarillas, marcos, colectores y canales.",
      "Cálculo de vertederos, aliviaderos y disipadores de energía.",
      "Comprobación de niveles de servicio y márgenes de seguridad frente a eventos extremos.",
      "Evaluación de interferencias con infraestructuras existentes (carreteras, vías férreas, servicios).",
    ],
    href: "#servicios",
    icon: "building",
  },
  {
    id: "drenaje-urbano-suds",
    title: "Drenaje urbano y SUDS",
    short:
      "Planificación y diseño de redes de drenaje urbano y soluciones basadas en la naturaleza para gestionar aguas pluviales y reducir anegamientos.",
    bullets: [
      "Modelación de redes pluviales para comprobar capacidades y puntos críticos.",
      "Integración de SUDS: pavimentos permeables, cunetas verdes, jardines de lluvia, balsas, etc.",
      "Evaluación de caudales vertidos a red, cauces u otros sistemas receptores.",
      "Propuestas de mejora y priorización de actuaciones para aumentar la resiliencia urbana.",
    ],
    href: "#servicios",
    icon: "droplet",
  },
  {
    id: "riesgos-inundacion",
    title: "Riesgos de inundación y cambio climático",
    short:
      "Análisis de peligrosidad y riesgo de inundación bajo condiciones actuales y escenarios de cambio climático para apoyar la planificación y la toma de decisiones.",
    bullets: [
      "Elaboración de mapas de peligrosidad (calado, velocidad) y de riesgo.",
      "Evaluación de afecciones sobre personas, bienes e infraestructuras críticas.",
      "Análisis de escenarios futuros de lluvia y caudal (proyecciones y RCP).",
      "Definición y evaluación de medidas estructurales y no estructurales de mitigación.",
    ],
    href: "#servicios",
    icon: "shield",
  },
  {
    id: "presas",
    title: "Presas",
    short:
      "Estudios hidráulicos y de seguridad hidrológica en presas, balsas y estructuras de almacenamiento y laminación de avenidas.",
    bullets: [
      "Comprobación de caudal de proyecto y capacidad de desagüe de vertederos.",
      "Curvas cota–volumen–superficie y análisis de laminación de avenidas.",
      "Simulación de distintos modos de operación y escenarios extremos.",
      "Estudios de rotura de presa y propagación de la onda de avenida cuando se requiere.",
    ],
    href: "#servicios",
    icon: "activity",
  },
  {
    id: "abastecimiento",
    title: "Abastecimiento",
    short:
      "Modelación y diagnóstico de sistemas de abastecimiento y redes de distribución para mejorar fiabilidad, eficiencia y calidad del servicio.",
    bullets: [
      "Análisis de presiones, caudales y tiempos de tránsito en red.",
      "Evaluación de depósitos, estaciones de bombeo y válvulas de control.",
      "Identificación de sectores con déficit de servicio o pérdidas potenciales.",
      "Recomendaciones de refuerzo, sectorización y optimización operativa.",
    ],
    href: "#servicios",
    icon: "wind",
  },
  {
    id: "sig-lidar",
    title: "SIG / LiDAR y análisis geomorfológico",
    short:
      "Procesamiento de información geoespacial (SIG, MDT/DEM, LiDAR) para construir bases topográficas y geomorfológicas fiables al servicio de la hidrología y la hidráulica.",
    bullets: [
      "Generación y depuración de modelos digitales del terreno y superficies derivadas.",
      "Delimitación automática y revisión de cuencas, redes de drenaje y llanuras inundables.",
      "Integración de cartografía temática (uso del suelo, geología, infraestructura, etc.).",
      "Preparación de insumos para modelos hidrológicos e hidráulicos y para mapas de resultado.",
    ],
    href: "#servicios",
    icon: "layers",
  },
];