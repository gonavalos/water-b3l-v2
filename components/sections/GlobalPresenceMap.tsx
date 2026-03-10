// components/sections/GlobalPresenceMap.tsx
"use client";

import React, { useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup,
} from "react-simple-maps";
import Container from "../ui/Container";
import { useI18n } from "@/lib/i18n-context";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO 3166-1 numeric codes (padded to 3 digits)
const ACTIVE_COUNTRIES = new Set([
    "724", // España
    "032", // Argentina
    "250", // Francia
    "752", // Suecia
    "300", // Grecia
    "840", // Estados Unidos
    "214", // República Dominicana
    "826", // Reino Unido
]);

const PROJECT_MARKERS = [
    { name: "Barcelona", coordinates: [2.15, 41.38] as [number, number], country: "España" },
    { name: "Buenos Aires", coordinates: [-58.38, -34.6] as [number, number], country: "Argentina" },
    { name: "Córdoba", coordinates: [-64.18, -31.42] as [number, number], country: "Argentina" },
    { name: "Paris", coordinates: [2.35, 48.85] as [number, number], country: "Francia" },
    { name: "Stockholm", coordinates: [18.07, 59.33] as [number, number], country: "Suecia" },
    { name: "Athens", coordinates: [23.73, 37.98] as [number, number], country: "Grecia" },
    { name: "New York", coordinates: [-74.0, 40.71] as [number, number], country: "EE.UU." },
    { name: "Santo Domingo", coordinates: [-69.9, 18.48] as [number, number], country: "Rep. Dominicana" },
];

const TEAL = "#0FA3B1";
const TEAL_LIGHT = "#5FD6D4";
const DARK_BG = "#06111e";
const INACTIVE = "#0d2235";
const ACTIVE = "#0c4a6e";
const ACTIVE_HOVER = "#0e6a8a";
const BORDER = "#0a2540";

const COUNTRIES_LIST = [
    { flag: "🇪🇸", name: "España" },
    { flag: "🇦🇷", name: "Argentina" },
    { flag: "🇫🇷", name: "Francia" },
    { flag: "🇸🇪", name: "Suecia" },
    { flag: "🇬🇷", name: "Grecia" },
    { flag: "🇺🇸", name: "EE.UU." },
    { flag: "🇩🇴", name: "Rep. Dominicana" },
    { flag: "🇬🇧", name: "Reino Unido" },
];

export default function GlobalPresenceMap() {
    const [tooltip, setTooltip] = useState<{ name: string; country: string } | null>(null);
    const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
    const { t } = useI18n();
    const p = t.presence;

    const STATS = [
        { value: p.statCountriesVal, label: p.statCountriesLabel },
        { value: p.statProjectsVal, label: p.statProjectsLabel },
        { value: p.statContinentsVal, label: p.statContinentsLabel },
    ];

    return (
        <section
            id="presencia"
            aria-label="Presencia global"
            className="relative overflow-hidden scroll-mt-28"
            style={{ backgroundColor: DARK_BG }}
        >
            {/* Glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl"
                style={{ background: TEAL, opacity: 0.06 }}
            />

            <Container className="py-14 md:py-20">
                {/* Header */}
                <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color: TEAL }}>
                            {p.label}
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            {p.title}
                        </h2>
                        <p className="mt-3 text-slate-400 text-sm md:text-base max-w-lg">
                            {p.subtitle}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 md:gap-10 shrink-0">
                        {STATS.map(({ value, label }) => (
                            <div key={label} className="text-center md:text-right">
                                <div className="text-2xl md:text-3xl font-bold" style={{ color: TEAL_LIGHT }}>
                                    {value}
                                </div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map */}
                <div
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                        border: "1px solid rgba(15,163,177,0.15)",
                        backgroundColor: DARK_BG,
                        maxHeight: "500px",
                    }}
                >
                    {/* Tooltip */}
                    {tooltip && (
                        <div
                            className="absolute top-4 left-4 z-10 rounded-lg px-3 py-2 text-sm font-medium text-white pointer-events-none"
                            style={{
                                background: "rgba(14,58,93,0.95)",
                                border: `1px solid ${TEAL}40`,
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            📍 {tooltip.name}
                            <span className="ml-2 text-xs text-slate-400">{tooltip.country}</span>
                        </div>
                    )}

                    <ComposableMap
                        projection="geoNaturalEarth1"
                        projectionConfig={{ scale: 153 }}
                        style={{ width: "92%", height: "auto" }}
                        viewBox="0 100 800 700"
                    >
                        <ZoomableGroup zoom={1} center={[0, 10]} disablePanning>
                            <Geographies geography={GEO_URL}>
                                {({ geographies }) =>
                                    geographies.map((geo) => {
                                        const numericId = geo.id?.toString().padStart(3, "0");
                                        const isActive = ACTIVE_COUNTRIES.has(numericId);
                                        const isHovered = hoveredCountry === geo.id;

                                        return (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill={isActive ? (isHovered ? ACTIVE_HOVER : ACTIVE) : INACTIVE}
                                                stroke={BORDER}
                                                strokeWidth={0.4}
                                                style={{
                                                    default: { outline: "none", transition: "fill 0.2s ease" },
                                                    hover: { outline: "none", fill: isActive ? ACTIVE_HOVER : INACTIVE },
                                                    pressed: { outline: "none" },
                                                }}
                                                onMouseEnter={() => isActive && setHoveredCountry(geo.id)}
                                                onMouseLeave={() => setHoveredCountry(null)}
                                            />
                                        );
                                    })
                                }
                            </Geographies>

                            {/* City markers */}
                            {PROJECT_MARKERS.map(({ name, coordinates, country }) => (
                                <Marker
                                    key={name}
                                    coordinates={coordinates}
                                    onMouseEnter={() => setTooltip({ name, country })}
                                    onMouseLeave={() => setTooltip(null)}
                                >
                                    <circle r={5} fill={TEAL} opacity={0.15} />
                                    <circle
                                        r={2.5}
                                        fill={TEAL_LIGHT}
                                        stroke={DARK_BG}
                                        strokeWidth={1}
                                        style={{ cursor: "pointer", transition: "r 0.15s ease" }}
                                    />
                                </Marker>
                            ))}
                        </ZoomableGroup>
                    </ComposableMap>

                    {/* Legend */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: TEAL_LIGHT }} />
                            {p.legendCity}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="inline-block h-2.5 w-4 rounded-sm" style={{ backgroundColor: ACTIVE }} />
                            {p.legendCountry}
                        </span>
                    </div>
                </div>

                {/* Country pills */}
                <div className="mt-5 flex flex-wrap gap-2.5 justify-center md:justify-start">
                    {COUNTRIES_LIST.map(({ flag, name }) => (
                        <span
                            key={name}
                            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs text-slate-300"
                            style={{
                                background: "rgba(14,58,93,0.5)",
                                border: "1px solid rgba(15,163,177,0.12)",
                            }}
                        >
                            {flag} {name}
                        </span>
                    ))}
                </div>
            </Container>
        </section>
    );
}
