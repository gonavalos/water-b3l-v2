// components/sections/CasesSpotlightSlider.tsx
"use client";

import React, { useMemo, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Gauge, Activity, Droplets, MapPin, Target, Wrench, CheckCircle2, Package } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

const TEAL = "#009fa6";
const TEAL_LIGHT = "#5FD6D4";
const BG = "#07111f";

type IconKey = "gauge" | "activity" | "droplets";
type CaseKPI = { label: string; value: string; icon?: IconKey };

export type CaseItem = {
  id: string; title: string; title_en?: string;
  sector: string; location: string; year: string | number;
  summary: string; summary_en?: string;
  details?: { objetivo?: string; metodologia?: string; validacion?: string; entregables?: string };
  imageSrc: string; imageInsetSrc?: string;
  kpis: CaseKPI[]; tags?: string[]; href?: string;
};

const KPI_ICONS: Record<IconKey, React.ElementType> = { gauge: Gauge, activity: Activity, droplets: Droplets };

export default function CasesSpotlightSlider({ cases, moreHref = "/casos" }: { cases: CaseItem[]; heading?: string; subheading?: string; moreHref?: string }) {
  const { t, locale } = useI18n();
  const c = t.cases;

  const DETAIL_SECTIONS = useMemo(() => [
    { key: "objetivo" as const, label: c.objetivo, Icon: Target },
    { key: "metodologia" as const, label: c.metodologia, Icon: Wrench },
    { key: "validacion" as const, label: c.validacion, Icon: CheckCircle2 },
    { key: "entregables" as const, label: c.entregables, Icon: Package },
  ], [c.objetivo, c.metodologia, c.validacion, c.entregables]);

  const [idx, setIdx] = useState(0);
  const [activeDetail, setActiveDetail] = useState<string>("objetivo");
  const total = cases.length || 0;
  const current = useMemo(() => cases[idx], [cases, idx]);

  const goto = useCallback((i: number) => { setIdx(Math.max(0, Math.min(total - 1, i))); setActiveDetail("objetivo"); }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "ArrowLeft") goto(idx - 1); if (e.key === "ArrowRight") goto(idx + 1); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, goto]);

  if (!current) return null;

  const caseTitle = locale === "en" && current.title_en ? current.title_en : current.title;
  const caseSummary = locale === "en" && current.summary_en ? current.summary_en : current.summary;
  const activeText = current.details?.[activeDetail as keyof typeof current.details] ?? "";

  return (
    <section id="casos" aria-label={c.label} className="relative w-full" style={{ backgroundColor: BG }}>
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/4 h-96 w-96 rounded-full blur-3xl" style={{ background: TEAL, opacity: 0.04 }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full blur-3xl" style={{ background: TEAL_LIGHT, opacity: 0.03 }} />

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 lg:py-20">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-3 mb-3">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: TEAL }}>{c.label}</p>
            <div className="h-px w-14" style={{ background: `linear-gradient(90deg, ${TEAL}, transparent)` }} />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">{c.title}</h2>
              <p className="mt-1 text-sm font-medium" style={{ color: TEAL_LIGHT }}>{c.subtitle}</p>
            </div>
            <div className="shrink-0 hidden md:flex items-baseline gap-1">
              <span className="text-4xl font-bold tabular-nums leading-none" style={{ color: TEAL_LIGHT }}>{String(idx + 1).padStart(2, "0")}</span>
              <span className="text-lg text-white/25 mx-1">/</span>
              <span className="text-lg text-white/25">{String(total).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-start">

          {/* RIGHT: Summary + Tabbed details */}
          <article key={current.id} aria-label={`${c.label}: ${caseTitle}`} className="min-w-0 flex flex-col gap-4" style={{ minHeight: 478 }}>
            <div className="rounded-xl p-4 shrink-0" style={{ background: "rgba(15,163,177,0.07)", border: "1px solid rgba(15,163,177,0.16)" }}>
              <p className="text-sm text-white/82 leading-relaxed">{caseSummary}</p>
            </div>

            {current.details && (
              <div className="rounded-2xl overflow-hidden flex flex-col flex-1" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                {/* Tabs */}
                <div className="grid shrink-0" style={{
                  gridTemplateColumns: `repeat(${DETAIL_SECTIONS.filter(s => current.details?.[s.key]).length}, 1fr)`,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}>
                  {DETAIL_SECTIONS.map(({ key, label, Icon }) => {
                    if (!current.details?.[key]) return null;
                    const active = activeDetail === key;
                    return (
                      <button key={key} onClick={() => setActiveDetail(key)}
                        className="flex flex-col items-center gap-1 py-3 px-2 text-center transition-all"
                        style={{ background: active ? "rgba(15,163,177,0.12)" : "rgba(255,255,255,0.02)", borderBottom: active ? `2px solid ${TEAL}` : "2px solid transparent" }}>
                        <Icon className="h-3.5 w-3.5 transition-colors" style={{ color: active ? TEAL_LIGHT : "rgba(255,255,255,0.3)" }} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] leading-none transition-colors"
                          style={{ color: active ? TEAL_LIGHT : "rgba(255,255,255,0.35)" }}>{label}</span>
                      </button>
                    );
                  })}
                </div>
                {/* Content */}
                <div className="px-5 py-4 flex-1" style={{ background: "rgba(255,255,255,0.025)" }}>
                  {activeText
                    ? <p className="text-[13px] text-white/78 leading-[1.75]">{activeText}</p>
                    : <p className="text-[13px] text-white/30 italic">—</p>}
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 flex-wrap mt-1">
              <a href="#contacto" className="inline-flex items-center rounded-xl px-5 py-2.5 text-sm font-semibold text-[#07111f] transition hover:opacity-90"
                style={{ background: "white" }}>{c.cta}</a>
              <a href={moreHref} className="inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-medium transition hover:opacity-75"
                style={{ color: TEAL_LIGHT, border: "1px solid rgba(95,214,212,0.28)", background: "transparent" }}>{c.viewMore}</a>
            </div>
          </article>
          {/* LEFT: Image */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full overflow-hidden rounded-2xl"
              style={{ height: 340, border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 60px -15px rgba(0,0,0,0.6)" }}>
              <Image key={current.id} src={current.imageSrc} alt={`${caseTitle} — ${current.location}`}
                fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority={idx === 0} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(7,17,31,0) 40%, rgba(7,17,31,0.85) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                    style={{ color: TEAL_LIGHT, background: "rgba(95,214,212,0.15)", border: "1px solid rgba(95,214,212,0.25)" }}>
                    {current.sector}
                  </span>
                  {current.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] text-white/55"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>{tag}</span>
                  ))}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-tight">{caseTitle}</h3>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-white/55">
                  <MapPin className="h-3 w-3 shrink-0" style={{ color: TEAL }} />
                  <span>{current.location}</span>
                </div>
              </div>
              <div className="absolute top-3 right-3 rounded-lg px-2.5 py-1 text-xs font-bold text-white/80"
                style={{ background: "rgba(7,17,31,0.65)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                {current.year}
              </div>
            </div>

            {/* KPIs */}
            {current.kpis.length > 0 && (
              <div className="grid grid-cols-2 gap-2">
                {current.kpis.slice(0, 4).map(({ label, value, icon = "gauge" }, i) => {
                  const KIcon = KPI_ICONS[icon as IconKey] ?? Gauge;
                  return (
                    <div key={i} className="rounded-xl px-3 py-3 flex items-center gap-3"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <KIcon className="h-4 w-4 shrink-0" style={{ color: TEAL }} />
                      <div>
                        <div className="text-base font-bold text-white leading-none">{value}</div>
                        <div className="text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">{label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Nav */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-end gap-1.5 flex-wrap">
                {cases.map((cs, i) => {
                  const active = i === idx;
                  return (
                    <button key={cs.id} onClick={() => goto(i)} aria-label={`Ver caso ${i + 1}`} aria-current={active}
                      className="flex flex-col items-center gap-1 focus-visible:outline-none">
                      <span className="text-[10px] font-bold tabular-nums transition-colors duration-200"
                        style={{ color: active ? TEAL_LIGHT : "rgba(255,255,255,0.25)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="block h-[3px] rounded-full transition-all duration-300"
                        style={{ width: active ? 36 : 16, background: active ? `linear-gradient(90deg, ${TEAL}, ${TEAL_LIGHT})` : "rgba(255,255,255,0.12)" }} />
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => goto(idx - 1)} disabled={idx === 0} aria-label="Anterior"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full transition hover:opacity-75 disabled:opacity-20"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <ChevronLeft className="h-4 w-4 text-white" />
                </button>
                <button onClick={() => goto(idx + 1)} disabled={idx === total - 1} aria-label="Siguiente"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full transition hover:opacity-75 disabled:opacity-20"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <ChevronRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-[11px] text-white/20">
          *{locale === "en" ? "Results depend on context and the implemented solution." : "Los resultados dependen del contexto y la solución implementada."}
        </p>
      </div>
    </section>
  );
}