// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://waterb3l.com";
    const now = new Date().toISOString();

    const casesSlugs = [
        "inundabilidad-drenaje-permisos",
        "seguridad-presas-espana",
        "erosion-socavacion-puentes",
        "obras-drenaje-infraestructura",
        "drenaje-urbano-suds",
        "hidrologia-subterranea-llanura",
        "sistemas-alerta-inundaciones",
        "transporte-contaminantes-calidad-agua",
    ];

    return [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 1,
            alternates: {
                languages: {
                    es: baseUrl,
                    en: `${baseUrl}/en`,
                },
            },
        },
        ...casesSlugs.map((slug) => ({
            url: `${baseUrl}/casos/${slug}`,
            lastModified: now,
            changeFrequency: "yearly" as const,
            priority: 0.8,
        })),
    ];
}
