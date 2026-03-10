import Hero from "@/components/home/Hero";
import About from "@/components/sections/About";
import GlobalPresenceMap from "@/components/sections/GlobalPresenceMap";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import CasesSpotlightSlider from "@/components/sections/CasesSpotlightSlider";
import ContactSplit from "@/components/sections/ContactSplit";
import AiSeoContent from "@/components/seo/AiSeoContent";
import { casesData } from "@/app/data/cases";
import { servicesData } from "@/app/data/services";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <GlobalPresenceMap />
            <ServicesShowcase />
            <CasesSpotlightSlider cases={casesData} />
            <ContactSplit />
            <AiSeoContent />
        </>
    );
}
