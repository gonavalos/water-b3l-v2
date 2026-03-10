// components/sections/Methodology.tsx
"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  Database,
  Layers,
  Ruler,
  FlaskConical,
  FileCheck2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Step = {
  key: string;
  title: string;
  desc: string;
  deliverable: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const BLUE = "#0e3a5d";   // títulos / bordes
const TEAL = "#009fa6";   // acentos

const STEPS: Step[] = [
  { key: "alcance", title: "Alcance & KPIs", desc: "Objetivos, supuestos y criterios de decisión. Matriz de riesgos y métricas de éxito.", deliverable: "Hoja de ruta + matriz de escenarios", Icon: Target },
  { key: "datos", title: "Datos & geometría (SIG/LiDAR)", desc: "Ingesta, QA altimétrica y lineage. Construcción de MDT/MDS y red hidro.", deliverable: "Geometría validada + metadatos", Icon: Database },
  { key: "setup", title: "Setup 1D/2D", desc: "Mallas, condiciones de borde, lluvia/caudales, rugosidad. Control de versiones.", deliverable: "Modelos configurados y versionados", Icon: Layers },
  { key: "calibracion", title: "Calibración & validación", desc: "Ajuste con datos observados, sensibilidad y bandas de incertidumbre.", deliverable: "KPIs (NSE/R²) y reporte de ajuste", Icon: Ruler },
  { key: "escenarios", title: "Escenarios & diseño", desc: "SuDS/obras, niveles de servicio y costo-beneficio. Cambio climático y uso del suelo.", deliverable: "Comparativa multicriterio", Icon: FlaskConical },
  { key: "entrega", title: "Entrega & transferencia", desc: "Mapas operativos, reporte ejecutivo y repositorio reproducible.", deliverable: "Paquete final + capacitación", Icon: FileCheck2 },
];

const PAGE_SIZE = 3;

// 👉 ajustá este path a tu logo (PNG/SVG)
const watermarkSrc = "/images/logo/solologo.png";

export default function Methodology() {
  const [page, setPage] = React.useState(0);
  const totalPages = Math.ceil(STEPS.length / PAGE_SIZE);
  const visible = React.useMemo(
    () => STEPS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [page]
  );

  const go = (to: number) => setPage(Math.min(Math.max(to, 0), totalPages - 1));
  const start = page * PAGE_SIZE + 1;
  const end = start + visible.length - 1;

  return (
    <section
      id="metodologia"
      aria-labelledby="metodologia-title"
      className="relative bg-slate-100 py-14 sm:py-16"
    >
      {/* Sello de agua (logo) en esquina superior derecha */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-40 hidden sm:block md:-top-8 md:right-6 lg:-top-10 lg:right-8"
        style={{ zIndex: 0 }}
      >
        <div className="relative" style={{ width: 220, height: 220 }}>
          <Image
            src={watermarkSrc}
            alt=""
            fill
            sizes="220px"
            className="object-contain select-none"
            style={{
              opacity: 0.07,
              mixBlendMode: "multiply",
              filter: "blur(0.3px)",
              // difuminado radial para bordes suaves
              maskImage: "radial-gradient(closest-side, #000 70%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(closest-side, #000 70%, transparent 100%)",
            }}
            priority={false}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        {/* Label + barra */}
        <div className="mb-5">
          <p className="text-slate-900 text-[12px] font-semibold tracking-widest">METODOLOGÍA</p>
          <div
            className="mt-1 ml-1 h-1 w-14 rounded-full"
            style={{ background: `linear-gradient(90deg, ${TEAL}, rgba(0,159,166,.4))` }}
          />
        </div>

        {/* Título + subtítulo */}
        <h2 id="metodologia-title" className="text-3xl sm:text-4xl font-semibold text-slate-900">
          Ciclo Evidencial B3L
        </h2>
        <p className="mt-1 text-sm font-medium" style={{ color: TEAL }}>
          Trazabilidad end-to-end, QA/QC y validación.
        </p>

        {/* Introducción breve */}
        <p className="mt-4 max-w-xl leading-relaxed text-slate-600">
          Nuestro método prioriza evidencia verificable: explicitamos supuestos,
          registramos cambios y contrastamos resultados con criterios objetivos.
          Así, cada decisión se apoya en un rastro técnico claro y consistente.
        </p>

        {/* Cards (3 por página en md+, 1 por fila en mobile) */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 md:grid-cols-3">
          {visible.map(({ key, title, desc, deliverable, Icon }) => (
            <article
              key={key}
              className="rounded-xl border bg-white shadow-sm transition hover:shadow-md"
              style={{ borderColor: "#e2e8f0" }}
            >
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 sm:h-9 sm:w-9"
                    style={{ backgroundColor: `${TEAL}1a`, borderColor: `${TEAL}4d`, color: TEAL }}
                    aria-hidden
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <h3 className="text-[16px] font-semibold sm:text-[18px]" style={{ color: BLUE }}>
                    {title}
                  </h3>
                </div>

                <p className="mt-3 text-[14px] leading-6 text-slate-700 sm:mt-6 sm:text-[16px]">
                  {desc}
                </p>

                <div className="mt-4 sm:mt-8">
                  <span
                    className="inline-flex items-center rounded-md px-2 py-1 text-[12px] font-medium ring-1 sm:px-2.5 sm:py-1 sm:text-[13px]"
                    style={{ color: TEAL, borderColor: `${TEAL}4d`, backgroundColor: "white" }}
                  >
                    {deliverable}
                  </span>
                </div>
              </div>

              <div className="px-4 pb-6 sm:px-5 sm:pb-10">
                {/* One-page: ir a la sección de Servicios */}
                <a
                  href="#servicios"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium ring-1 transition hover:bg-slate-50 sm:text-[13px]"
                  style={{ color: TEAL, borderColor: `${TEAL}4d` }}
                >
                  Ver más
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>

                {/*
                  FUTURO (multi-página/i18n):
                  <a href={`/services#${key}`} ...>Ver más</a>
                */}
              </div>
            </article>
          ))}
        </div>

        {/* Stepper desktop (md+): 6 puntos conectados */}
        <div className="mb-6 mt-12 hidden items-center justify-between gap-2 md:flex">
          <button
            onClick={() => go(page - 1)}
            aria-label="Anterior"
            className="inline-flex items-center justify-center rounded-lg px-2 py-2 text-slate-700 ring-1 hover:bg-white disabled:opacity-40"
            style={{ borderColor: "#cbd5e1" }}
            disabled={page === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative flex-1 px-3">
            <div className="absolute left-3 right-3 top-1/2 h-[2px] -translate-y-1/2 bg-slate-300" />
            <div className="relative z-10 grid grid-cols-6">
              {STEPS.map((_, idx) => {
                const inWindow = idx >= page * PAGE_SIZE && idx < page * PAGE_SIZE + PAGE_SIZE;
                return (
                  <button
                    key={idx}
                    onClick={() => go(Math.floor(idx / PAGE_SIZE))}
                    aria-current={inWindow ? "step" : undefined}
                    aria-label={`Ir al paso ${idx + 1}`}
                    className="mx-auto h-9 w-9 rounded-full text-[11px] font-semibold ring-1 transition focus:outline-none"
                    style={{
                      backgroundColor: inWindow ? TEAL : "white",
                      color: inWindow ? "white" : BLUE,
                      borderColor: inWindow ? TEAL : "#cbd5e1",
                    }}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => go(page + 1)}
            aria-label="Siguiente"
            className="inline-flex items-center justify-center rounded-lg px-2 py-2 text-slate-700 ring-1 hover:bg-white disabled:opacity-40"
            style={{ borderColor: "#cbd5e1" }}
            disabled={page === totalPages - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Stepper mobile */}
        <div className="mt-8 flex items-center justify-between md:hidden">
          <button
            onClick={() => go(page - 1)}
            aria-label="Anterior"
            className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-slate-700 ring-1 hover:bg-white disabled:opacity-40"
            style={{ borderColor: "#cbd5e1" }}
            disabled={page === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <p className="text-xs text-slate-600" aria-live="polite">
            Mostrando {start}–{end} de {STEPS.length}
          </p>

          <button
            onClick={() => go(page + 1)}
            aria-label="Siguiente"
            className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-slate-700 ring-1 hover:bg-white disabled:opacity-40"
            style={{ borderColor: "#cbd5e1" }}
            disabled={page === totalPages - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}