// components/home/Hero.tsx
"use client";

import Image from "next/image";
import Container from "../ui/Container";
import { useI18n } from "@/lib/i18n-context";

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section aria-label="Hero" className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/home.png"
          alt="Vista aérea con dinámica hidráulica"
          fill priority sizes="100vw"
          className="object-cover"
          quality={95}
          style={{ objectPosition: "62% 40%" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(7,17,31,0.82) 0%, rgba(7,17,31,0.55) 45%, rgba(7,17,31,0.18) 100%)" }} />
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(600px 500px at 5% 60%, rgba(0,159,166,0.18), transparent 65%)" }} />
      </div>

      <div className="min-h-[92vh] lg:min-h-screen pt-20 md:pt-24 flex items-center">
        <Container>
          <div className="max-w-[480px] lg:relative lg:right-65">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#5FD6D4" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">{h.badge}</span>
            </div>

            <h1 className="leading-[1.05]">
              <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white">
                {h.titleLine1}
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight"
                style={{ background: "linear-gradient(90deg, #5FD6D4 0%, #0FA3B1 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {h.titleLine2}
              </span>
              <span className="mt-2 block text-lg sm:text-xl font-medium text-white/65 tracking-wide">
                {h.titleSub}
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-white/70 leading-relaxed">{h.subtitle}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#servicios" className="rounded-xl px-6 py-3 text-sm font-bold tracking-wide shadow-lg transition hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #009fa6, #0E3A5D)", color: "white" }}>
                {h.ctaServices}
              </a>
              <a href="#contacto" className="rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
                {h.ctaContact}
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {h.chips.map((chip) => (
                <li key={chip} className="rounded-full px-3 py-1.5 text-[11px] font-medium text-white/80"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)" }}>
                  {chip}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {[{ val: "+8", label: h.statCountries }, { val: "+50", label: h.statProjects }, { val: "15+", label: h.statExp }].map(({ val, label }) => (
                <div key={label}>
                  <div className="text-xl font-extrabold text-white tabular-nums">{val}</div>
                  <div className="text-[10px] text-white/45 uppercase tracking-wider mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.2em] text-white">Scroll</span>
        <div className="h-8 w-px" style={{ background: "linear-gradient(to bottom, white, transparent)" }} />
      </div>
    </section>
  );
}