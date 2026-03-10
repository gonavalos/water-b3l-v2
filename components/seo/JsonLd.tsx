// components/seo/JsonLd.tsx
export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://waterb3l.com/#organization",
    name: "Water B3L",
    alternateName: "WaterB3L",
    url: "https://waterb3l.com",
    logo: "https://waterb3l.com/images/logo/logo-naviv2.png",
    image: "https://waterb3l.com/images/og/og-default.jpg",
    description:
      "Consultora de ingeniería hidráulica e hidrológica especializada en modelación 1D/2D, drenaje urbano y gestión del riesgo por inundación.",
    email: "hola@waterb3l.com",
    telephone: "+34111222333",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
    areaServed: [
      { "@type": "Country", name: "España" },
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "Francia" },
      { "@type": "Country", name: "Suecia" },
      { "@type": "Country", name: "Grecia" },
      { "@type": "Country", name: "Estados Unidos" },
      { "@type": "Country", name: "República Dominicana" },
    ],
    knowsAbout: [
      "Modelación hidráulica 1D/2D",
      "Modelación hidrológica",
      "HEC-RAS",
      "SWMM",
      "HEC-HMS",
      "Iber",
      "Drenaje urbano",
      "SUDS",
      "Riesgo de inundación",
      "Seguridad de presas",
      "Sistemas de alerta temprana",
      "Calidad de agua",
    ],
    sameAs: ["https://www.linkedin.com/company/waterb3l"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://waterb3l.com/#website",
    url: "https://waterb3l.com",
    name: "Water B3L",
    description:
      "Ingeniería hidráulica e hidrológica basada en datos y evidencia.",
    publisher: { "@id": "https://waterb3l.com/#organization" },
    inLanguage: ["es", "en"],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicios de Water B3L",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Modelación hidráulica 1D/2D",
          description:
            "Simulación de ríos, canales y llanuras de inundación para analizar niveles, velocidades y capacidades de desagüe.",
          provider: { "@id": "https://waterb3l.com/#organization" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Modelación hidrológica",
          description:
            "Estimación de caudales de diseño e hidrogramas de avenida para cuencas y subcuencas.",
          provider: { "@id": "https://waterb3l.com/#organization" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Drenaje urbano y SUDS",
          description:
            "Planificación y diseño de redes de drenaje urbano y soluciones basadas en la naturaleza.",
          provider: { "@id": "https://waterb3l.com/#organization" },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Riesgo de inundación y cambio climático",
          description:
            "Análisis de peligrosidad y riesgo bajo condiciones actuales y escenarios de cambio climático.",
          provider: { "@id": "https://waterb3l.com/#organization" },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Seguridad de presas",
          description:
            "Estudios hidráulicos, documentación de seguridad y simulación de roturas de presa.",
          provider: { "@id": "https://waterb3l.com/#organization" },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}