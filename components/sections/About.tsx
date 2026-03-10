// components/sections/About.tsx
"use client";

import Image from "next/image";
import Container from "../ui/Container";
import { useI18n } from "@/lib/i18n-context";

const TEAL = "#009fa6";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="nosotros" aria-label="Sobre Water B3L" className="relative bg-white scroll-mt-28">
      {/* Dot pattern decoration */}
      <svg
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 hidden md:block"
        width="420"
        height="260"
        viewBox="0 0 420 260"
        fill="none"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(0,159,166,0.12)" />
          </pattern>
        </defs>
        <rect width="420" height="260" fill="url(#dots)" />
      </svg>

      <Container className="py-28 md:py-36 grid md:grid-cols-12 gap-14 md:gap-16">
        {/* LEFT — Copy */}
        <div className="md:col-span-6 lg:col-span-5">
          {/* Label + bar */}
          <div className="mb-5">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color: TEAL }}>{t.about.label}</p>
            <div className="accent-bar ml-1" />
          </div>

          {/* Title + subtitle */}
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-tight">
            {t.about.title}
          </h2>
          <p className="mt-1 text-sm font-medium" style={{ color: TEAL }}>
            {t.about.subtitle}
          </p>

          {/* History text */}
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed max-w-xl">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </div>

        {/* RIGHT — Images (kept) */}
        <div className="md:col-span-6 lg:col-span-7 relative min-h-[520px] md:min-h-[580px]">
          {/* Teal glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-6 -left-6 h-56 w-56 rounded-full blur-3xl"
            style={{ backgroundColor: TEAL, opacity: 0.14 }}
          />

          {/* Main image */}
          <div className="relative">
            <Image
              src="/images/about/equipo.png"
              alt="Equipo de ingeniería trabajando desde vista superior"
              width={1500}
              height={1000}
              className="rounded-3xl object-cover ring-1 ring-slate-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
              sizes="(min-width: 1024px) 750px, 90vw"
              priority={false}
            />
          </div>

          {/* Secondary A — bottom left */}
          <div
            className="absolute bottom-0 left-8 w-[55%] overflow-hidden rounded-2xl ring-1 shadow-xl hidden sm:block z-10"
            style={{ borderColor: "rgba(2,6,23,.12)" }}
          >
            <div className="relative h-44 sm:h-48 md:h-52">
              <Image
                src="/images/about/equipotrabajando.png"
                alt="Equipo en obra / campo"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 50vw"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(120deg, rgba(0,159,166,.14), rgba(0,0,0,0) 55%)" }}
              />
            </div>
          </div>

          {/* Secondary B — right side */}
          <div
            className="absolute top-12 -right-4 w-[36%] overflow-hidden rounded-2xl ring-1 shadow-xl hidden sm:block z-10"
            style={{ borderColor: "rgba(2,6,23,.12)" }}
          >
            <div className="relative h-56 sm:h-64 md:h-72">
              <Image
                src="/images/about/equipobcn.png"
                alt="Detalle técnico: medición / equipo en canal"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 360px, 40vw"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "linear-gradient(270deg, rgba(0,159,166,.12), rgba(0,0,0,0) 60%)",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}