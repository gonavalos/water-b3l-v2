// components/sections/About.tsx
import Image from "next/image";
import Container from "../ui/Container";
import { ShieldCheck, Activity, Layers } from "lucide-react";

const TEAL = "#009fa6"; // acento
// const BLUE = "#0e3a5d"; // títulos/bordes (no usado por ahora)

export default function About() {
  return (
    <section id="nosotros" aria-label="Sobre Water B3L" className="relative bg-white scroll-mt-28">
      {/* Pattern de puntos sutil (innovador pero sobrio) */}
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

      <Container className="py-24 md:py-28 grid md:grid-cols-12 gap-14 md:gap-16">
        {/* IZQUIERDA — COPY */}
        <div className="md:col-span-6 lg:col-span-6">
          {/* Label + barra */}
          <div className="mb-5">
            <p className="text-slate-900 text-xs font-semibold tracking-widest">SOBRE NOSOTROS</p>
            <div
              className="mt-2 ml-1 h-1 w-14 rounded-full"
              style={{ background: `linear-gradient(90deg, ${TEAL}, rgba(0,159,166,.4))` }}
            />
          </div>

          {/* Título + subtítulo (debajo, chico, TEAL) */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Ingeniería hídrica
          </h2>
          <p className="mt-1 text-sm font-medium" style={{ color: TEAL }}>
            basada en datos y evidencia.
          </p>

          {/* Story breve (sin repetir servicios) */}
          <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">
            Somos un equipo joven de hidrólogos e ingenieros que trabaja con{" "}
            <span className="font-medium">datos trazables</span>, repositorios versionados y criterios de ajuste
            publicados. Entregamos modelos, mapas y scripts que tu organización puede{" "}
            <span className="font-medium">auditar y reutilizar</span>, sin lock-in.
          </p>

          {/* Diferenciales — 3 cards sobrias, alturas parejas */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Trazabilidad verificable",
                desc: "Insumos, supuestos y versiones documentadas para auditoría.",
                Icon: ShieldCheck,
              },
              {
                title: "Calibración cuantificada",
                desc: "Reportes NSE/R² y sensibilidad con ventanas explícitas.",
                Icon: Activity,
              },
              {
                title: "Entrega reutilizable",
                desc: "Mapas, modelos y scripts en repos abiertos para el cliente.",
                Icon: Layers,
              },
            ].map(({ title, desc, Icon }) => (
              <li key={title} className="h-full">
                <div
                  className="flex h-full flex-col rounded-2xl bg-white p-5 ring-1 shadow-sm transition hover:shadow-md"
                  style={{ borderColor: "rgba(2,6,23,.12)" }} // slate-900/12
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-8 w-8" style={{ color: TEAL }} />
                    <h3 className="text-[16px] font-medium text-slate-900">{title}</h3>
                  </div>
                  <p className="mt-2 text-[10px] text-center text-slate-600">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* KPIs — 2×2 en mobile */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
            {[
              ["≥ 0.90", "Ajuste de calibración (NSE/R²)"],
              ["+15%", "Reducción de anegamientos*"],
            ].map(([kpi, label]) => (
              <div
                key={kpi}
                className="flex flex-col items-center justify-center rounded-2xl bg-brand-aqua/10 ring-1 ring-brand-aqua/30 px-3 py-3 text-center"
              >
                <span className="text-lg sm:text-xl font-semibold text-brand-aqua">{kpi}</span>
                <span className="text-xs sm:text-sm text-slate-700">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-500">
            *Ejemplo de mejora observada; los resultados dependen del contexto y la solución aplicada.
          </p>
        </div>

        {/* DERECHA — TRES IMÁGENES (1 grande + 2 superpuestas) */}
        <div className="md:col-span-6 lg:col-span-6 relative">
          {/* Glow sutil */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-6 -left-6 h-56 w-56 rounded-full blur-3xl"
            style={{ backgroundColor: TEAL, opacity: 0.14 }}
          />

          {/* Principal (grande) */}
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

          {/* Secundaria A — abajo izquierda (ya existente) */}
          <div
            className="absolute bottom-8 left-14 w-[56%] overflow-hidden rounded-2xl ring-1 shadow-xl hidden sm:block z-10"
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

          {/* Secundaria B — costado derecho */}
          <div
            className="absolute top-18 -right-30 w-[38%] overflow-hidden rounded-2xl ring-1 shadow-xl hidden sm:block z-10"
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