// components/sections/ServicesShowcase.tsx
"use client";

import React, { useState, useCallback, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import {
  Waves, Droplets, Map as MapIcon, Ruler, ShieldCheck, Building2, Wind,
  Activity, ArrowRight, ChevronDown,
} from "lucide-react";

const TEAL = "#009fa6";
const BLUE = "#0e3a5d";
// Watermark en /public/images/services/ondasv2.png
const WAVES_WATERMARK_SRC = "/images/services/ondasv2.png";

export type ServiceItem = {
  id: string;
  title: string;
  short: string;
  bullets: string[];
  href: string;
  icon: keyof typeof ICONS;
  kpis?: { label: string; value: string }[];
};

const ICONS = {
  waves: Waves,
  droplets: Droplets,
  map: MapIcon,
  ruler: Ruler,
  shield: ShieldCheck,
  building: Building2,
  wind: Wind,
  activity: Activity,
} as const;

export default function ServicesShowcase({
  heading = "Servicios",
  subheading = "Modelación y datos trazables para decisiones de infraestructura resiliente.",
  items,
  moreHref = "#servicios", // ← one-page por defecto
  defaultId,
  visibleCount = 4,
}: {
  heading?: string;
  subheading?: string;
  items: ServiceItem[];
  moreHref?: string;
  defaultId?: string;
  visibleCount?: number;
}) {
  // Guard si no hay items
  if (!items || items.length === 0) {
    return (
      <section aria-label="Servicios" className="relative bg-white">
        <Container className="py-20">
          <header className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">{heading}</h2>
            <div
              className="mt-2 h-1 w-24 rounded-full"
              style={{ background: `linear-gradient(90deg, ${TEAL}, rgba(0,159,166,.4))` }}
            />
            <p className="mt-4 max-w-3xl text-slate-600 md:text-lg">{subheading}</p>
          </header>
          <p className="text-slate-600">Pronto publicaremos nuestros servicios.</p>
        </Container>
      </section>
    );
  }

  const [current, setCurrent] = useState<string>(defaultId ?? items[0].id);
  const idx = Math.max(0, items.findIndex((s) => s.id === current));
  const svc = items[idx] ?? items[0];

  const goto = useCallback(
    (i: number) => {
      const clamped = Math.min(Math.max(0, i), items.length - 1);
      setCurrent(items[clamped].id);
    },
    [items]
  );

  // navegación con flechas ↑ / ↓ (desktop)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") goto(idx + 1);
      if (e.key === "ArrowUp") goto(idx - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, goto]);

  // ==== Rail scrollable (4 visibles) ====
  const ROW_H = 84; // altura visual por fila
  const railMaxH = useMemo(() => {
    const n = Math.max(1, Math.min(items.length, visibleCount));
    return n * ROW_H;
  }, [items.length, visibleCount]);

  const railRef = useRef<HTMLUListElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  const updateShadows = () => {
    const el = railRef.current;
    if (!el) return;
    setAtTop(el.scrollTop <= 2);
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 2);
  };

  useEffect(() => { updateShadows(); }, []);
  useEffect(() => {
    activeBtnRef.current?.scrollIntoView({ block: "nearest" });
    updateShadows();
  }, [current]);

  const Icon = ICONS[svc?.icon ?? "waves"];

  // máscara suave para desvanecer el PNG hacia los bordes
  const waveMask: React.CSSProperties = {
    WebkitMaskImage:
      "radial-gradient(80% 65% at 50% 45%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
    maskImage:
      "radial-gradient(80% 65% at 50% 45%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
  };

  // Normaliza href a ancla de la one-page
  const resolveHref = (href?: string) => {
    if (!href) return "#servicios";
    // si ya es ancla local (#...), respetar
    if (href.startsWith("#")) return href;
    // mientras no haya subpáginas, mandamos al bloque de servicios
    return "#servicios";
  };

  return (
    <section aria-label="Servicios" className="relative overflow-hidden bg-white">
      {/* Watermark PNG SOLO en desktop (md+) 
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block" style={waveMask} aria-hidden>
        <Image
          src={WAVES_WATERMARK_SRC}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
      </div>
*/}
      {/* Contenido por encima */}
      <Container className="relative z-10 py-20">
        {/* Label + barra */}
        <div className="mb-5">
          <p className="text-slate-900 text-[12px] font-semibold tracking-widest">NUESTROS SERVICIOS</p>
          <div
            className="mt-1 ml-1 h-1 w-[72px] rounded-full"
            style={{ background: `linear-gradient(90deg, ${TEAL}, rgba(0,159,166,.4))` }}
          />
        </div>

        {/* Título + subtítulo */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          Soluciones de modelación aplicadas
        </h2>
        <p className="mt-1 mb-8 text-sm font-medium" style={{ color: TEAL }}>
          Escenarios comparables para diseño y operación.
        </p>

        {/* Selector mobile */}
        <div className="mb-6 md:hidden">
          <label htmlFor="svc-select" className="sr-only">Seleccionar servicio</label>
          <div className="relative">
            <select
              id="svc-select"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className="w-full appearance-none rounded-xl px-3 pr-10 py-2 text-sm font-medium outline-none"
              style={{
                background: "linear-gradient(135deg, rgba(0,159,166,.22), rgba(0,159,166,.10))",
                color: BLUE,
                border: "1px solid rgba(0,159,166,.28)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                boxShadow: "0 10px 30px -12px rgba(0,0,0,.18)",
              }}
              aria-label="Seleccionar servicio"
            >
              {items.map((s) => (
                <option key={s.id} value={s.id} className="text-slate-900">
                  {s.title}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4"
              style={{ color: BLUE }}
            />
          </div>
        </div>

        {/* Layout */}
        <div className="grid gap-8 md:grid-cols-12">
          {/* Rail / tabs (desktop) */}
          <aside className="relative hidden md:block md:col-span-4 lg:col-span-3">
            <nav aria-label="Servicios" role="tablist" aria-orientation="vertical">
              <div className="relative">
                {/* sombras top/bottom cuando hay scroll */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-0 right-0 top-0 h-5"
                  style={{
                    opacity: atTop ? 0 : 1,
                    transition: "opacity .2s",
                    background: "linear-gradient(180deg, rgba(2,6,23,.06), rgba(2,6,23,0))",
                  }}
                />
                <ul
                  ref={railRef}
                  onScroll={updateShadows}
                  className="space-y-1 overflow-y-auto pr-1"
                  style={{ maxHeight: railMaxH }}
                >
                  {items.map((s) => {
                    const active = s.id === current;
                    const BtnIcon = ICONS[s.icon] ?? Waves;
                    return (
                      <li key={s.id}>
                        <button
                          ref={active ? activeBtnRef : undefined}
                          role="tab"
                          aria-selected={active}
                          aria-controls={`svc-panel-${s.id}`}
                          id={`svc-tab-${s.id}`}
                          onClick={() => setCurrent(s.id)}
                          className="group flex w-full items-center gap-3 rounded-xl px-3 py-4 text-left transition"
                          style={{
                            height: ROW_H - 4,
                            background: active ? "rgba(0,159,166,.08)" : "transparent",
                            borderLeft: `3px solid ${active ? TEAL : "transparent"}`,
                          }}
                        >
                          <span
                            className="grid h-9 w-9 place-items-center rounded-lg ring-1"
                            style={{
                              color: TEAL,
                              background: "rgba(0,159,166,.08)",
                              borderColor: "rgba(0,159,166,.30)",
                            }}
                            aria-hidden
                          >
                            <BtnIcon className="h-5 w-5" />
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="block text-[16px] font-medium text-slate-900 truncate">
                              {s.title}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-0 right-0 bottom-0 h-5"
                  style={{
                    opacity: atBottom ? 0 : 1,
                    transition: "opacity .2s",
                    background: "linear-gradient(0deg, rgba(2,6,23,.06), rgba(2,6,23,0))",
                  }}
                />
              </div>
            </nav>
          </aside>

          {/* Panel derecho */}
          <div className="md:col-span-8 lg:col-span-9">
            <section
              role="tabpanel"
              id={`svc-panel-${svc.id}`}
              aria-labelledby={`svc-tab-${svc.id}`}
              className="relative overflow-hidden rounded-2xl p-6 md:p-8"
              style={{
                minHeight: railMaxH,
                background:
                  "radial-gradient(1200px 400px at 80% 10%, rgba(0,159,166,.10), transparent), radial-gradient(1000px 600px at -10% 60%, rgba(14,58,93,.08), transparent)",
                border: "1px solid rgba(2,6,23,.12)",
                boxShadow: "0 20px 60px -20px rgba(0,0,0,.08)",
              }}
            >
              {/* watermark ícono grande del servicio activo */}
              <Icon
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 hidden md:block"
                style={{ width: 160, height: 160, opacity: 0.08, color: BLUE }}
              />

              <header>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900">{svc.title}</h3>
                <p className="mt-8 max-w-2xl text-slate-700">{svc.short}</p>
              </header>

              {/* bullets */}
              {svc.bullets?.length ? (
                <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                  {svc.bullets.slice(0, 6).map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700">
                      <span className="mt-4 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: TEAL }} />
                      <span className="mt-2 flex-1">{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* KPIs */}
              {svc.kpis?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {svc.kpis.slice(0, 3).map((k) => (
                    <span
                      key={k.label}
                      className="rounded-xl px-2.5 py-1 text-xs ring-1"
                      style={{
                        color: TEAL,
                        background: "rgba(0,159,166,.10)",
                        borderColor: "rgba(0,159,166,.30)",
                      }}
                      title={k.label}
                    >
                      <strong className="font-semibold">{k.value}</strong> {k.label}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* CTA */}
              <div className="mt-10">
                <a
                  href={resolveHref(svc.href)}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition"
                  style={{ backgroundColor: BLUE, color: "#fff" }}
                  aria-label={`Ver servicio: ${svc.title}`}
                >
                  Ver servicio
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* CTA “ver todos” */}
        <div className="mt-10">
          <a
            href={moreHref}
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium transition hover:opacity-90"
            style={{ color: TEAL, border: `1px solid ${TEAL}`, background: "transparent" }}
          >
            Ver todos los servicios
          </a>
        </div>
      </Container>
    </section>
  );
}