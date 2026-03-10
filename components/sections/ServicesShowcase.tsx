// components/sections/ServicesShowcase.tsx
"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import Container from "../ui/Container";
import { useI18n } from "@/lib/i18n-context";
import { Waves, Droplets, Map as MapIcon, Ruler, ShieldCheck, Building2, Wind, Activity, ArrowRight, ChevronDown } from "lucide-react";

const TEAL = "#009fa6";
const BLUE = "#0e3a5d";

const ICONS = { waves: Waves, droplets: Droplets, map: MapIcon, ruler: Ruler, shield: ShieldCheck, building: Building2, wind: Wind, activity: Activity } as const;

const SERVICE_ICONS: Record<string, keyof typeof ICONS> = {
  "modelacion-hidraulica": "waves",
  "modelacion-hidrologica": "activity",
  "obras-hidraulicas": "ruler",
  "drenaje-urbano-suds": "droplets",
  "riesgos-inundacion": "shield",
  "presas-seguridad": "building",
  "abastecimiento": "wind",
  "sig-lidar": "map",
};

export default function ServicesShowcase() {
  const { t } = useI18n();
  const s = t.services;
  const items = s.items as readonly { id: string; title: string; short: string; bullets: readonly string[] }[];

  const ROW_H = 88;
  const VISIBLE = 6;
  const railMaxH = Math.min(items.length, VISIBLE) * ROW_H;

  const [currentId, setCurrentId] = useState(items[0]?.id ?? "");
  const idx = Math.max(0, items.findIndex((item) => item.id === currentId));
  const svc = items[idx] ?? items[0];

  const goto = useCallback((i: number) => setCurrentId(items[Math.min(Math.max(0, i), items.length - 1)]?.id ?? ""), [items]);

  useEffect(() => { setCurrentId(items[0]?.id ?? ""); }, [t]);

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
  useEffect(() => { activeBtnRef.current?.scrollIntoView({ block: "nearest" }); updateShadows(); }, [currentId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") goto(idx + 1);
      if (e.key === "ArrowUp") goto(idx - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, goto]);

  if (!svc) return null;

  const Icon = ICONS[SERVICE_ICONS[svc.id] ?? "waves"];

  return (
    <section id="servicios" aria-label="Servicios" className="relative overflow-hidden bg-[#f8fafc]">
      <Container className="relative z-10 py-20 md:py-28">
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: TEAL }}>{s.label}</p>
            <div className="h-px w-14" style={{ background: `linear-gradient(90deg, ${TEAL}, transparent)` }} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">{s.title}</h2>
          <p className="mt-2 text-base font-medium" style={{ color: TEAL }}>{s.subtitle}</p>
        </div>

        {/* Mobile dropdown */}
        <div className="mb-6 md:hidden relative">
          <select value={currentId} onChange={(e) => setCurrentId(e.target.value)}
            className="w-full appearance-none rounded-xl px-3 pr-10 py-3 text-sm font-medium outline-none"
            style={{ background: "white", color: BLUE, border: `1px solid rgba(0,159,166,.3)` }}>
            {items.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: BLUE }} />
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          {/* Rail */}
          <aside className="hidden md:block md:col-span-4 lg:col-span-3">
            <div className="relative">
              <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-0 h-6 z-10"
                style={{ opacity: atTop ? 0 : 1, transition: "opacity .2s", background: "linear-gradient(180deg, #f8fafc, transparent)" }} />
              <ul ref={railRef} onScroll={updateShadows} className="space-y-1 overflow-y-auto pr-1" style={{ maxHeight: railMaxH }}>
                {items.map((item) => {
                  const active = item.id === currentId;
                  const BtnIcon = ICONS[SERVICE_ICONS[item.id] ?? "waves"];
                  return (
                    <li key={item.id}>
                      <button ref={active ? activeBtnRef : undefined} onClick={() => setCurrentId(item.id)}
                        className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-all"
                        style={{ height: ROW_H - 4, background: active ? "white" : "transparent", borderLeft: `3px solid ${active ? TEAL : "transparent"}`, boxShadow: active ? "0 2px 12px rgba(0,0,0,0.06)" : "none" }}>
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg"
                          style={{ color: active ? "white" : TEAL, background: active ? TEAL : "rgba(0,159,166,0.1)" }}>
                          <BtnIcon className="h-5 w-5" />
                        </span>
                        <span className="block text-[15px] font-semibold text-slate-900 leading-snug">{item.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div aria-hidden className="pointer-events-none absolute left-0 right-0 bottom-0 h-6 z-10"
                style={{ opacity: atBottom ? 0 : 1, transition: "opacity .2s", background: "linear-gradient(0deg, #f8fafc, transparent)" }} />
            </div>
          </aside>

          {/* Panel */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="relative overflow-hidden rounded-2xl bg-white p-7 md:p-10"
              style={{ minHeight: Math.max(railMaxH, 480), border: "1px solid rgba(2,6,23,.08)", boxShadow: "0 20px 60px -20px rgba(0,0,0,.08)" }}>
              <Icon aria-hidden className="pointer-events-none absolute -right-4 -top-4 hidden md:block"
                style={{ width: 160, height: 160, opacity: 0.06, color: BLUE }} />
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">{svc.title}</h3>
              <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl">{svc.short}</p>
              {svc.bullets?.length ? (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {(svc.bullets as string[]).map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: TEAL }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-8">
                <a href="#contacto" className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
                  style={{ backgroundColor: BLUE, color: "#fff" }}>
                  {s.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <a href="#contacto" className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition hover:opacity-80"
            style={{ color: TEAL, border: `1px solid ${TEAL}`, background: "transparent" }}>
            {s.viewAll}
          </a>
        </div>
      </Container>
    </section>
  );
}