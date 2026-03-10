// components/sections/GlobalPresence.tsx
"use client";

import React, { useState } from "react";
import Container from "../ui/Container";

const TEAL = "#009fa6";

type Country = {
    name: string;
    flag: string;
    code: string;
};

const COUNTRIES: Country[] = [
    { name: "España", flag: "🇪🇸", code: "ESP" },
    { name: "Argentina", flag: "🇦🇷", code: "ARG" },
    { name: "Francia", flag: "🇫🇷", code: "FRA" },
    { name: "Suecia", flag: "🇸🇪", code: "SWE" },
    { name: "Grecia", flag: "🇬🇷", code: "GRC" },
    { name: "Estados Unidos", flag: "🇺🇸", code: "USA" },
    { name: "Rep. Dominicana", flag: "🇩🇴", code: "DOM" },
    { name: "Reino Unido", flag: "🇬🇧", code: "GBR" },
];

const ACTIVE_PATHS: Record<string, string> = {
    // Simplified SVG paths for highlighted countries on a world map projection
    // These represent approximate boundaries for visual highlighting
    ESP: "M-8,37 L-8,44 L4,44 L4,37 Z", // Spain
    FRA: "M-5,43 L-5,51 L8,51 L8,43 Z", // France
    SWE: "M12,55 L12,69 L24,69 L24,55 Z", // Sweden
    GRC: "M19,34 L19,42 L29,42 L29,34 Z", // Greece
    GBR: "M-8,50 L-8,59 L2,59 L2,50 Z", // UK
    USA: "M-170,25 L-170,50 L-60,50 L-60,25 Z", // US
    ARG: "M-72,-22 L-72,-55 L-58,-55 L-58,-22 Z", // Argentina
    DOM: "M-72,17 L-72,20 L-68,20 L-68,17 Z", // Dominican Republic
};

export default function GlobalPresence() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section
            id="presencia"
            aria-label="Presencia global"
            className="relative bg-[#0f172a] text-white overflow-hidden scroll-mt-28"
        >
            {/* Background glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl"
                style={{ background: TEAL, opacity: 0.06 }}
            />

            <Container className="py-20 md:py-28 lg:py-32">
                {/* Header */}
                <div className="mb-5">
                    <p className="section-label text-white/60">PRESENCIA GLOBAL</p>
                    <div className="accent-bar mt-2 ml-1" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white leading-tight">
                    Donde trabajamos
                </h2>
                <p className="mt-2 text-sm font-medium" style={{ color: TEAL }}>
                    Proyectos en más de 8 países en 3 continentes.
                </p>

                {/* Map + Grid layout */}
                <div className="mt-12 grid gap-10 lg:grid-cols-12">
                    {/* SVG World Map — desktop */}
                    <div className="lg:col-span-7 hidden md:block">
                        <div
                            className="relative rounded-2xl overflow-hidden ring-1 ring-white/10"
                            style={{ background: "rgba(15,23,42,0.8)" }}
                        >
                            <svg
                                viewBox="-180 -90 360 180"
                                className="w-full h-auto"
                                style={{ maxHeight: 400 }}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* World background — simplified continent outlines */}
                                {/* North America */}
                                <path
                                    d="M-168,15 L-168,72 L-130,72 L-90,72 L-55,55 L-55,25 L-80,15 L-100,10 L-130,15 Z"
                                    fill="#1e293b"
                                    stroke="#334155"
                                    strokeWidth="0.5"
                                />
                                {/* South America */}
                                <path
                                    d="M-82,8 L-75,8 L-60,0 L-45,-5 L-35,-25 L-35,-40 L-50,-58 L-70,-55 L-80,-40 L-82,-20 Z"
                                    fill="#1e293b"
                                    stroke="#334155"
                                    strokeWidth="0.5"
                                />
                                {/* Europe */}
                                <path
                                    d="M-12,35 L-10,72 L5,72 L15,70 L40,72 L45,60 L42,50 L35,45 L25,35 L10,35 Z"
                                    fill="#1e293b"
                                    stroke="#334155"
                                    strokeWidth="0.5"
                                />
                                {/* Africa */}
                                <path
                                    d="M-18,5 L-18,35 L5,35 L20,35 L50,25 L52,5 L50,-10 L42,-35 L30,-35 L20,-30 L10,-15 L-5,0 Z"
                                    fill="#1e293b"
                                    stroke="#334155"
                                    strokeWidth="0.5"
                                />
                                {/* Asia */}
                                <path
                                    d="M40,25 L45,60 L55,72 L80,72 L120,72 L140,65 L180,55 L180,25 L160,10 L140,15 L120,25 L100,30 L80,25 L60,25 Z"
                                    fill="#1e293b"
                                    stroke="#334155"
                                    strokeWidth="0.5"
                                />
                                {/* Australia */}
                                <path
                                    d="M112,-10 L112,-40 L155,-40 L155,-20 L140,-10 Z"
                                    fill="#1e293b"
                                    stroke="#334155"
                                    strokeWidth="0.5"
                                />

                                {/* Active country dots with pulse */}
                                {[
                                    { code: "ESP", cx: -4, cy: 40, name: "España" },
                                    { code: "FRA", cx: 2, cy: 46, name: "Francia" },
                                    { code: "SWE", cx: 18, cy: 62, name: "Suecia" },
                                    { code: "GRC", cx: 24, cy: 38, name: "Grecia" },
                                    { code: "GBR", cx: -2, cy: 53, name: "Reino Unido" },
                                    { code: "USA", cx: -100, cy: 40, name: "EE.UU." },
                                    { code: "ARG", cx: -64, cy: -34, name: "Argentina" },
                                    { code: "DOM", cx: -70, cy: 19, name: "Rep. Dominicana" },
                                ].map(({ code, cx, cy, name }) => (
                                    <g
                                        key={code}
                                        onMouseEnter={() => setHovered(code)}
                                        onMouseLeave={() => setHovered(null)}
                                        className="cursor-pointer"
                                    >
                                        {/* Pulse ring */}
                                        <circle
                                            cx={cx}
                                            cy={-cy}
                                            r="5"
                                            fill="none"
                                            stroke={TEAL}
                                            strokeWidth="0.8"
                                            opacity="0.4"
                                        >
                                            <animate
                                                attributeName="r"
                                                values="3;7;3"
                                                dur="3s"
                                                repeatCount="indefinite"
                                            />
                                            <animate
                                                attributeName="opacity"
                                                values="0.5;0.1;0.5"
                                                dur="3s"
                                                repeatCount="indefinite"
                                            />
                                        </circle>
                                        {/* Dot */}
                                        <circle
                                            cx={cx}
                                            cy={-cy}
                                            r="2.5"
                                            fill={hovered === code ? "#5fd6d4" : TEAL}
                                            stroke="#0f172a"
                                            strokeWidth="1"
                                            className="transition-all duration-200"
                                        />
                                        {/* Tooltip */}
                                        {hovered === code && (
                                            <g>
                                                <rect
                                                    x={cx - 28}
                                                    y={-cy - 16}
                                                    width={name.length * 4.5 + 12}
                                                    height="12"
                                                    rx="3"
                                                    fill="rgba(0,0,0,0.85)"
                                                    stroke={TEAL}
                                                    strokeWidth="0.5"
                                                />
                                                <text
                                                    x={cx - 22}
                                                    y={-cy - 7.5}
                                                    fill="white"
                                                    fontSize="5"
                                                    fontWeight="500"
                                                    fontFamily="Inter, sans-serif"
                                                >
                                                    {name}
                                                </text>
                                            </g>
                                        )}
                                    </g>
                                ))}
                            </svg>
                        </div>
                    </div>

                    {/* Country grid — always visible on mobile, sidebar on desktop */}
                    <div className="lg:col-span-5">
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-3">
                            {COUNTRIES.map((country) => (
                                <div
                                    key={country.code}
                                    className="group flex items-center gap-3 rounded-xl p-4 ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:ring-[#009fa6]/40 transition-all duration-200"
                                    onMouseEnter={() => setHovered(country.code)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <span className="text-2xl">{country.flag}</span>
                                    <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                                        {country.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="mt-6 flex gap-4">
                            <div className="flex-1 rounded-xl p-4 bg-white/[0.04] ring-1 ring-white/10 text-center">
                                <span className="block text-2xl font-bold" style={{ color: TEAL }}>
                                    8+
                                </span>
                                <span className="text-xs text-white/60 mt-1">Países</span>
                            </div>
                            <div className="flex-1 rounded-xl p-4 bg-white/[0.04] ring-1 ring-white/10 text-center">
                                <span className="block text-2xl font-bold" style={{ color: TEAL }}>
                                    3
                                </span>
                                <span className="text-xs text-white/60 mt-1">Continentes</span>
                            </div>
                            <div className="flex-1 rounded-xl p-4 bg-white/[0.04] ring-1 ring-white/10 text-center">
                                <span className="block text-2xl font-bold" style={{ color: TEAL }}>
                                    50+
                                </span>
                                <span className="text-xs text-white/60 mt-1">Proyectos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
