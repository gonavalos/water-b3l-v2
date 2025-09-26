// app/(web)/page.tsx
import Hero from "../components/home/Hero";
import MethodSteps from "@/components/sections/MethodSteps";
// import CaseTeasers from "../components/home/CaseTeasers";
// import CTASection from "../components/home/CTASection";
import JsonLd from "@/components/seo/JsonLd";
// import ToolChips from "../components/home/ToolChips";
import { site } from "./lib/site";
import About from "@/components/sections/About";
// import WhyChoose from "../components/sections/WhyChoose";
// import CasesShowcase from "../components/sections/CasesGridSlider";
import CasesSpotlightSlider from "@/components/sections/CasesSpotlightSlider";
import { casesData } from "./data/cases";
// import ServicesGrid from "../components/sections/ServicesGrid";
import { servicesData } from "./data/services.home";
// import ServicesLines from "../components/sections/ServicesLines";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import ContactSplit from "@/components/sections/ContactSplit";

export default function Page() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.baseUrl,
    email: site.email,
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.baseUrl}/buscar?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* Hero (tope) */}
      <Hero />

      {/* Nosotros */}
      <section id="nosotros" className="scroll-mt-28" aria-label="Nosotros">
        <About />
      </section>

      {/* Metodología */}
      <section id="metodologia" className="scroll-mt-28" aria-label="Metodología">
        <MethodSteps />
      </section>

      {/* Servicios */}
      <section id="servicios" className="scroll-mt-28" aria-label="Servicios">
        {/* Si el componente muestra un CTA "ver más", que apunte a #servicios */}
        <ServicesShowcase
          heading="Servicios"
          subheading="Modelación y datos trazables para decisiones de infraestructura resiliente."
          items={servicesData}
          moreHref="#servicios"
          defaultId="modelacion-1d-2d"
          visibleCount={5}
        />
      </section>

      {/* Alias 'impacto' antes de Casos para soportar el link del navbar */}
      <span id="impacto" className="block scroll-mt-28" aria-hidden />

      {/* Casos e impacto */}
      <section id="casos" className="scroll-mt-28" aria-label="Casos e impacto">
        <CasesSpotlightSlider cases={casesData} />
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-28" aria-label="Contacto">
        <ContactSplit />
      </section>

      {/* Reservado por si activás más adelante
      <WhyChoose />
      <ServicesGrid />
      <CaseTeasers />
      <ToolChips />
      <CTASection />
      */}

      {/* JSON-LD */}
      <JsonLd data={org} />
      <JsonLd data={webSite} />
    </>
  );
}