// lib/site.ts
export const site = {
  name: "Water B3L",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "https://waterb3l.com",
  email: "hola@waterb3l.com",
  locales: ["es", "en"] as const,
  defaultLocale: "es"
};
export type SiteConfig = typeof site;