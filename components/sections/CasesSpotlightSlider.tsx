// components/sections/CasesSpotlightSlider.tsx
"use client";

import React, { useMemo, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Gauge,
  Activity,
  Droplets,
  Map as MapIcon,
} from "lucide-react";

const BLUE = "#0e3a5d";  // títulos/bordes
const TEAL = "#009fa6";  // acentos

type IconKey = "gauge" | "activity" | "droplets";
type CaseKPI = { label: string; value: string; icon?: IconKey };

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

const ICONS: Record<IconKey, React.ElementType> = {
  gauge: Gauge,
  activity: Activity,
  droplets: Droplets,
};

export default function CasesSpotlightSlider({
  cases,
  heading = "Casos y resultados",
  subheading = "Modelación y datos trazables para decisiones de infraestructura resiliente.",
  moreHref = "/casos",
}: {
  cases: CaseItem[];
  heading?: string;
  subheading?: string;
  moreHref?: string;
}) {
  const [idx, setIdx] = useState(0);
  const total = cases.length || 0;
  const current = useMemo(() => cases[idx], [cases, idx]);

  const goto = useCallback(
    (i: number) => setIdx(Math.max(0, Math.min(total - 1, i))),
    [total]
  );
  const prev = () => goto(idx - 1);
  const next = () => goto(idx + 1);

  // Navegación por teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  if (!current) return null;

  const floatKPIs = current.kpis.slice(0, 2);
  const bodyKPIs = current.kpis.slice(2);

  // Fallbacks si no hay details (no rompe)
  const details = {
    objetivo: current.details?.objetivo ?? undefined,
    metodologia:
      current.details?.metodologia ??
      (current.tags?.length ? `Integración ${current.tags.join(" · ")}.` : undefined),
    validacion: current.details?.validacion ?? undefined,
    entregables:
      current.details?.entregables ??
      "Mapas de profundidad/velocidad, KPIs de ajuste y escenarios comparativos.",
  };

  return (
    <section className="relative w-full bg-[#0b1220] text-white">
      {/* glows sutiles */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: TEAL, opacity: 0.18 }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 right-10 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: "#62dde2", opacity: 0.18 }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-20">
{/* Label + barra */}
<div className="mb-5">
  <p className="text-white text-[12px] font-semibold tracking-widest">CASOS E IMPACTO</p>
  <div
    className="mt-1 ml-1 h-1 w-14 rounded-full"
    style={{ background: `linear-gradient(90deg, ${TEAL}, rgba(0,159,166,.4))` }}
  />
</div>

{/* Título + subtítulo */}
<h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
  Nuestros estudios realizados
</h2>
<p className=" ml-1 mb-8 text-sm font-medium" style={{ color: TEAL }}>
  Resultados que importan.
</p>




        {/* 1 caso por vista — fila con minHeight estable y texto sin clamps */}
        <div
          className="relative grid grid-cols-1 items-start gap-8 md:grid-cols-2"
          style={{ minHeight: 530 }}
        >
          {/* TEXTO — se adapta en altura, sin clamps, con break-words */}
          <article
            className="relative rounded-2xl bg-white/5 p-6 ring-1 backdrop-blur-sm"
            style={{
              borderColor: BLUE,
              borderWidth: 1,
              boxShadow: "0 10px 50px -15px rgba(0,0,0,.25)",
            }}
            aria-label={`Caso: ${current.title}`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="rounded-xl px-2.5 py-1 text-xs font-medium ring-1"
                style={{
                  color: TEAL,
                  background: "rgba(0,159,166,.12)",
                  borderColor: "rgba(0,159,166,.32)",
                }}
              >
                {current.sector}
              </span>
              <span
                className="rounded-xl px-2.5 py-1 text-xs text-slate-100 ring-1"
                style={{
                  background: "rgba(255,255,255,.05)",
                  borderColor: "rgba(255,255,255,.15)",
                }}
              >
                {current.location} · {current.year}
              </span>
              {current.tags?.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-xl px-2.5 py-1 text-[11px] text-slate-200 ring-1"
                  style={{ background: "rgba(255,255,255,.05)", borderColor: "rgba(255,255,255,.12)" }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* SIN clamps: solo break-words para evitar desbordes */}
            <h3 className="mt-8 text-2xl font-semibold leading-tight break-words">
              {current.title}
            </h3>

            <p className="mt-4 text-slate-100/85 break-words">
              {current.summary}
            </p>

            {/* Explicación extendida */}
            <div className="mt-8 space-y-3 text-sm leading-6 text-slate-100/90">
              {details.objetivo && (
                <p>
                  <span className="font-medium" style={{ color: TEAL }}>Objetivo:</span>{" "}
                  {details.objetivo}
                </p>
              )}
              {details.metodologia && (
                <p>
                  <span className="font-medium" style={{ color: TEAL }}>Metodología:</span>{" "}
                  {details.metodologia}
                </p>
              )}
              {details.validacion && (
                <p>
                  <span className="font-medium" style={{ color: TEAL }}>Validación:</span>{" "}
                  {details.validacion}
                </p>
              )}
              {details.entregables && (
                <p>
                  <span className="font-medium" style={{ color: TEAL }}>Entregables:</span>{" "}
                  {details.entregables}
                </p>
              )}

              {bodyKPIs.length > 0 && (
                <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {bodyKPIs.map(({ label, value, icon = "gauge" }, i) => {
                    const Icon = ICONS[icon] ?? Gauge;
                    return (
                      <li
                        key={i}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 ring-1"
                        style={{ background: "rgba(255,255,255,.05)", borderColor: "rgba(255,255,255,.12)" }}
                      >
                        <Icon className="h-4 w-4" style={{ color: TEAL }} />
                        <div className="min-w-0">
                          <div className="text-white">{value}</div>
                          <div className="text-[12px] text-slate-300 truncate">{label}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* CTA */}
            <div className="mt-6 flex items-center justify-between">
              <a
                href={current.href ?? "#"}
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium shadow-soft transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2"
                style={{ background: "#fff", color: "#0b1220", boxShadow: "0 10px 50px -15px rgba(0,0,0,.25)" }}
                aria-label={`Ver caso: ${current.title}`}
              >
                Ver caso
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MapIcon className="h-4 w-4" />
                <span>{current.location}</span>
              </div>
            </div>
          </article>

          {/* IMAGEN — 16:9 con min-heights moderados (no agrandada) */}
          <div className="relative">
            <div
              className="relative w-full overflow-hidden rounded-2xl ring-1 aspect-[16/9] min-h-[360px] md:min-h-[380px] lg:min-h-[420px]"
              style={{ borderColor: BLUE, boxShadow: "0 10px 50px -15px rgba(0,0,0,.35)" }}
            >
              <Image
                src={current.imageSrc}
                alt={`${current.title} — ${current.location}`}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
                priority={idx === 0}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(120deg, rgba(0,159,166,.18), rgba(0,0,0,0) 55%)" }}
              />
              {/* chips KPI flotantes */}
              <div className="absolute left-4 top-4 flex flex-col gap-2">
                {floatKPIs.map(({ label, value, icon = "gauge" }, i) => {
                  const Icon = ICONS[icon] ?? Gauge;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 backdrop-blur"
                      style={{ background: "rgba(0,0,0,.35)", borderColor: "rgba(255,255,255,.22)" }}
                    >
                      <Icon className="h-4 w-4" style={{ color: TEAL }} />
                      <div className="min-w-0">
                        <div className="text-white">{value}</div>
                        <div className="text-[11px] text-slate-200/90 truncate">{label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Miniatura superpuesta (solo md+) */}
            <div
              className="absolute -bottom-6 right-6 hidden w-[48%] overflow-hidden rounded-xl ring-1 md:block"
              style={{ borderColor: BLUE, boxShadow: "0 20px 60px -20px rgba(0,0,0,.5)" }}
            >
              <div className="relative h-44 w-full">
                <Image
                  src={current.imageInsetSrc ?? current.imageSrc}
                  alt={`${current.title} — vista secundaria`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 24vw"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "linear-gradient(0deg, rgba(11,18,32,.25), rgba(0,0,0,0))" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SELECTORES inferiores tipo “líneas” con NÚMEROS SIEMPRE VISIBLES */}
        <div className="mt-4 flex items-center justify-center md:justify-between">
          <div className="flex items-end gap-3 md:gap-4 md:w-full">           
             {cases.map((c, i) => {
              const active = i === idx;
              return (
                <div key={c.id} className="flex flex-col items-center gap-1">
                  <span
                    className="text-[10px] leading-none"
                    style={{ color: active ? TEAL : "rgba(255,255,255,.7)" }}
                  >
                    {i + 1}
                  </span>
                  <button
                    onClick={() => goto(i)}
                    className="relative inline-flex h-1 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2"
                    aria-label={`Ver: ${c.title}`}
                    aria-current={active}
                    title={c.title}
                    style={{
                      width: active ? 100 : 44,
                      backgroundColor: active ? TEAL : "rgba(255,255,255,.28)",
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-8 ml-4 hidden md:flex shrink-0 items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-40"
              style={{ background: "rgba(255,255,255,.08)", borderColor: "rgba(255,255,255,.22)" }}
              aria-label="Anterior"
              disabled={idx === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-40"
              style={{ background: "rgba(255,255,255,.08)", borderColor: "rgba(255,255,255,.22)" }}
              aria-label="Siguiente"
              disabled={idx === total - 1}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CTA a blog de casos */}
        <div className="mt-10 text-left">
          <a
            href={moreHref}
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2"
            style={{ color: TEAL, border: `1px solid ${TEAL}`, background: "transparent" }}
          >
            Ver más casos
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-300/80">
          *Los resultados dependen del contexto y la solución implementada.
        </p>
      </div>
    </section>
  );
}