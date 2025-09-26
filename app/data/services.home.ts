import type { ServiceItem } from "../components/sections/ServicesShowcase";

export const servicesData: ServiceItem[] = [
{
  id: "modelacion-1d-2d",
  title: "Modelación 1D/2D",
  short:
    "Modelos hidráulicos trazables para ríos, canales y planicies: simulación transitoria, acople 1D–2D y sensibilidad para comparar obras y operación con criterios cuantitativos.",
  bullets: [
    "Curvas IDF y series sintéticas con control de consistencia",
    "Topografía SIG/LiDAR curada y secciones representativas",
    "Acople 1D–2D, pérdidas locales y estructuras (alcantarillas/vertederos)",
    "Calibración NSE/R² y validación cruzada por eventos",
    "Sensibilidad (rugosidad, Qp, compuertas) y escenarios",
  ],
  href: "/servicios/modelacion-1d-2d",
  icon: "waves",
},
{
  id: "drenaje-urbano-suds",
  title: "Drenaje urbano / SuDS",
  short:
    "Redes pluviales y SuDS: malla dual calle–colector, almacenamiento y control operativo para reducir anegamientos y sobreelevaciones, con evaluación cuantitativa y escenarios comparables.",
  bullets: [
    "Curvas de diseño (Hortan/IDF) e hietogramas sintéticos",
    "Malla dual calle–colector con bocas de tormenta/inlets",
    "Almacenamiento y control (tanques, válvulas, compuertas)",
    "SuDS: bioretención, zanjas drenantes",
    "Escenarios de mitigación y priorización costo/beneficio",
    "Mapas de profundidad/velocidad y reporte de desempeño",
  ],
  href: "/servicios/drenaje-urbano-suds",
  icon: "droplets",
},
  {
    id: "sig-lidar",
    title: "SIG / LiDAR",
    short:
      "Preparamos geometrías de alta resolución integradas al modelo, con QA/QC de insumos, generación de secciones y metadatos para trazabilidad completa.",
    bullets: [
      "Curado MDT/MDS y fusión con edificación/obras",
      "Clasificación/filtrado de retornos y relleno de huecos",
      "Secciones y talwegs automáticos con control de calidad",
      "Snapping de estructuras y cotejo con cartografía oficial",
      "Sistemas de referencia y mosaicos por teselas",
      "QA/QC documentado y metadatos para auditoría",
    ],
    href: "/servicios/sig-lidar",
    icon: "map",
  },
  {
    id: "riesgo-inundacion",
    title: "Riesgo de inundación",
    short:
      "Cuantificamos amenaza y exposición: mapas de profundidad/velocidad y tiempos de anegamiento, niveles de servicio y umbrales para alertas tempranas y planificación.",
    bullets: [
      "Frecuencias, envolventes y períodos de retorno",
      "Mapas por nivel de servicio y criticidades",
      "Tiempos de anegamiento y accesibilidad",
      "Curvas de daño potencial y priorización",
      "Umbrales de alerta y protocolos de notificación",
      "Escenarios comparables para inversión/etapabilidad",
    ],
    href: "/servicios/riesgo-inundacion",
    icon: "shield",
  },
  {
    id: "presas-seguridad",
    title: "Presas y seguridad",
    short:
      "Evaluamos vertederos, maniobras y roturas hipotéticas; realizamos routing hacia planicie y mapas de afectación para respaldar planes de emergencia y operación segura.",
    bullets: [
      "Curvas elevación–volumen y reglas de operación",
      "Capacidad de descarga y chequeo de freeboard",
      "Modelos de rotura (breach) y propagación aguas abajo",
      "Routing 1D/2D hacia planicie y tiempos de arribo",
      "Mapas de afectación y poblaciones críticas",
      "Planes de emergencia y cartillas operativas",
    ],
    href: "/servicios/presas-seguridad",
    icon: "building",
  },
  {
    id: "gestion-costera-bocanas",
    title: "Gestión costera y bocanas",
    short:
      "Modelamos la interacción oleaje–marea–río para evaluar niveles, corrientes y recambio en bocanas; apoyamos operación de compuertas y el diseño de obras de abrigo.",
    bullets: [
      "Forzantes: mareógrafos, viento y espectros de oleaje",
      "Interacción oleaje–corriente y sobreelevación meteorológica",
      "Velocidades máximas, direcciones y vorticidad en bocana",
      "Tiempos de recambio/renovación y residencia",
      "Evaluación de compuertas y maniobras operativas",
      "Diseño/optimización de obras de abrigo y canales",
    ],
    href: "/servicios/gestion-costera-bocanas",
    icon: "wind",
  },
];