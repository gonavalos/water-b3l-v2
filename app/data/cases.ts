// data/cases.ts
export type IconKey = "gauge" | "activity" | "droplets";
export type CaseKPI = { label: string; value: string; icon?: IconKey };
export type CaseItem = {
  id: string;
  title: string;
  sector: string;
  location: string;
  year: string | number;
  summary: string;
  details?: {
    objetivo?: string;
    metodologia?: string;
    validacion?: string;
    entregables?: string;
  };
  imageSrc: string;
  imageInsetSrc?: string;
  kpis: CaseKPI[];
  tags?: string[];
  href?: string;
};

export const casesData: CaseItem[] = [
  {
    id: "paris-seine-risk",
    title: "Riesgo de inundación urbana — Sena",
    sector: "Riesgo de inundación",
    location: "París, FR",
    year: 2025,
    imageSrc: "/images/cases/case1.png",
    imageInsetSrc: "/images/cases/case1.png",
    summary:
      "Validación con eventos recientes y series históricas. Mapas de profundidad/velocidad para ordenamiento y protección patrimonial.",
    details: {
      objetivo:
        "Cuantificar niveles y velocidades críticas en tramos patrimoniales y ejes de movilidad, priorizando intervenciones.",
      metodologia:
        "Malla 2D integrada a SIG/LiDAR, condiciones de borde con series locales e IDF; escenarios de caudal pico y remanso.",
      validacion:
        "Ajuste con hidrogramas y fotos de evento; NSE/R² ≥ 0.90 en niveles; sensibilidad de rugosidad y pérdidas.",
      entregables:
        "Mapas H/V, isócronas de llegada, perfiles de nivel, KPIs de ajuste y book técnico con escenarios A/B.",
    },
    kpis: [
      { label: "Área afectada", value: "−12%", icon: "gauge" },
      { label: "R² nivel", value: "0.95", icon: "activity" },
    ],
    tags: ["1D/2D", "IDF", "Validación"],
    href: "/casos/paris-seine",
  },
  {
    id: "amsterdam-canals",
    title: "Gestión hidráulica de canales urbanos",
    sector: "Drenaje urbano",
    location: "Ámsterdam, NL",
    year: 2025,
    imageSrc: "/images/cases/case2.png",
    imageInsetSrc: "/images/cases/case2.png",
    summary:
      "1D/2D acoplado en anillos de canal. Evaluación de maniobras de compuertas y mareas en el IJ.",
    details: {
      objetivo:
        "Reducir sobreelevaciones en crecidas combinadas con marea, manteniendo operación portuaria.",
      metodologia:
        "Red 1D conectada a 2D en zonas de intercambio; escenarios de compuertas y restricciones en bocas.",
      validacion:
        "Comparativa con registradores; NSE caudal 0.91 y error absoluto medio < 8 cm en nivel.",
      entregables:
        "Curvas de operación, mapas H/V, recomendación de maniobra por umbral y riesgos residuales.",
    },
    kpis: [
      { label: "Sobreelevación pico", value: "−0.15 m", icon: "gauge" },
      { label: "NSE caudal", value: "0.91", icon: "activity" },
    ],
    tags: ["1D/2D", "Operación", "Marea"],
    href: "/casos/amsterdam-canales",
  },
  {
    id: "venice-grand-canal",
    title: "Marea y niveles — Gran Canal",
    sector: "Gestión costera/urbana",
    location: "Venecia, IT",
    year: 2024,
    imageSrc: "/images/cases/case3.png",
    imageInsetSrc: "/images/cases/case3.png",
    summary:
      "Escenarios de marea y viento; curvas de retorno y envolventes para protección de bienes urbanos.",
    details: {
      objetivo:
        "Definir cotas de diseño y activar alertas tempranas en eventos de marea de tormenta.",
      metodologia:
        "2D transitorio forzado con mareógrafos y viento; análisis de sensibilidad al fetch.",
      validacion:
        "Ajuste NSE 0.93 en niveles; contraste con eventos históricos de acqua alta.",
      entregables:
        "Envolventes de nivel, mapas de profundidades, tiempos de anegamiento y guía de umbrales.",
    },
    kpis: [
      { label: "Nivel máx. simulado", value: "+0.38 m", icon: "gauge" },
      { label: "Ajuste NSE", value: "0.93", icon: "activity" },
    ],
    tags: ["2D transitorio", "IDF", "Validación"],
    href: "/casos/venecia-marea",
  },
  {
    id: "london-thames-defence",
    title: "Defensas ribereñas — Támesis",
    sector: "Obras/defensas",
    location: "Londres, UK",
    year: 2024,
    imageSrc: "/images/cases/case4.png",
    imageInsetSrc: "/images/cases/case4.png",
    summary:
      "Evaluación de freeboard y velocidades en márgenes. Sensibilidad de rugosidad y pérdidas locales.",
    details: {
      objetivo:
        "Verificar freeboard mínimo y priorizar tramos con riesgo de sobrepaso.",
      metodologia:
        "Sección 1D con conexión a 2D en planicie; escenarios de crecida y mareas combinadas.",
      validacion:
        "R² 0.94 en niveles; revisión cruzada con marcas de crecida.",
      entregables:
        "Perfil longitudinal de cotas, mapa de energía específica y propuesta de refuerzo por tramo.",
    },
    kpis: [
      { label: "Freeboard mín.", value: "0.45 m", icon: "gauge" },
      { label: "Velocidad máx.", value: "1.1 m/s", icon: "activity" },
    ],
    tags: ["1D/2D", "Freeboard", "Rugosidad"],
    href: "/casos/londres-defensas",
  },
  {
    id: "barcelona-river-outlet",
    title: "Desembocadura y oleaje — Mediterráneo",
    sector: "Gestión costera",
    location: "Barcelona, ES",
    year: 2025,
    imageSrc: "/images/cases/case5.png",
    imageInsetSrc: "/images/cases/case5.png",
    summary:
      "Interacción río–oleaje en bocana con obras de abrigo. Velocidades y orientación de corrientes.",
    details: {
      objetivo:
        "Optimizar la bocana para reducir retrocesos y mejorar la evacuación.",
      metodologia:
        "2D con condiciones acopladas de caudal y oleaje; pruebas de geometrías de abrigo.",
      validacion:
        "Contraste con ADCP y boyas; error medio de velocidad < 0.12 m/s.",
      entregables:
        "Mapas de corrientes, líneas de corriente, propuesta de obra y estimación de mejora de vaciado.",
    },
    kpis: [
      { label: "Velocidad media", value: "0.6 m/s", icon: "activity" },
      { label: "Tiempo de vaciado", value: "−20%", icon: "gauge" },
    ],
    tags: ["2D", "Oleaje", "Bocana"],
    href: "/casos/barcelona-bocana",
  },
  {
    id: "buenos-aires-puerto-madero",
    title: "Hidrodinámica de dársenas",
    sector: "Puertos y ríos",
    location: "Buenos Aires, AR",
    year: 2025,
    imageSrc: "/images/cases/case6.png",
    imageInsetSrc: "/images/cases/case6.png",
    summary:
      "Circulaciones internas, recambio y maniobra. Evaluación de dragado y accesos.",
    details: {
      objetivo:
        "Mejorar el recambio de masa y condiciones de maniobra en dársenas.",
      metodologia:
        "2D en malla no estructurada; escenarios de dragado y regímenes de compuertas.",
      validacion:
        "R² 0.92 en nivel; comparación con trazadores/ADCP en accesos.",
      entregables:
        "Mapas de residencia, rutas de acceso recomendadas y plan de dragado por fases.",
    },
    kpis: [
      { label: "Renovación de masa", value: "−28%", icon: "gauge" },
      { label: "R² nivel", value: "0.92", icon: "activity" },
    ],
    tags: ["2D", "Dragado", "Operación"],
    href: "/casos/puerto-madero",
  },
];