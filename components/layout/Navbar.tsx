// components/layout/Navbar.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrap = "fixed top-0 left-0 w-full z-50 transition-colors duration-300";
  const bg = scrolled ? "bg-white/95 backdrop-blur border-b border-slate-200/70" : "bg-transparent";
  const link =
    "text-lg transition-colors " +
    (scrolled ? "text-slate-700 hover:text-slate-900" : "text-white/90 hover:text-white");
  const burgerBar = scrolled ? "bg-slate-800" : "bg-white";

  return (
    <header className={`${wrap} ${bg}`} role="banner">
      <nav className="mx-auto max-w-7xl h-16 md:h-20 px-6 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Logo → top */}
        <a href="#" className="flex items-center h-full" onClick={() => setOpen(false)}>
          <Image
            src={scrolled ? "/images/logo/logo-naviv2.png" : "/images/logo/logo-whitev2.png"}
            alt="Water B3L logo"
            width={500}
            height={600}
            priority
            className="h-15 w-auto md:h-16"
          />
        </a>

        {/* Nav desktop (one-page anchors) */}
        <ul className="hidden md:flex items-center gap-10 lg:gap-12">
          <li><a className={link} href="#nosotros">Nosotros</a></li>
          <li><a className={link} href="#servicios">Servicios</a></li>
          <li><a className={link} href="#casos">Casos e Impacto</a></li>
          <li><a className={link} href="#contacto">Contacto</a></li>
        </ul>

        {/* Selector ES/EN (desktop) - placeholder para futuro i18n */}
        <div
          className={
            "hidden md:flex items-center gap-3 opacity-60 pointer-events-none select-none"
          }
          title="Selector de idioma (placeholder)"
          aria-disabled="true"
        >
          <span className={link}>🇪🇸 ES</span>
          <span className={scrolled ? "text-slate-400" : "text-white/60"}>/</span>
          <span className={link}>🇬🇧 EN</span>
        </div>

        {/* Burger (mobile) */}
        <button
          className="md:hidden inline-flex flex-col justify-center items-center w-9 h-9 rounded-lg ring-1 ring-white/20"
          aria-label="Abrir menú"
          onClick={() => setOpen(v => !v)}
        >
          <span className={`block h-0.5 w-5 ${burgerBar} transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block h-0.5 w-5 ${burgerBar} my-1 transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-5 ${burgerBar} transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </nav>

      {/* Panel mobile */}
      <div className={`md:hidden transition-[max-height] duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <div className={scrolled ? "bg-white/95 backdrop-blur border-t border-slate-200/70" : "bg-black/40 backdrop-blur"}>
          <ul className="px-6 py-4 space-y-3">
            <li><a className={link} href="#nosotros"  onClick={() => setOpen(false)}>Nosotros</a></li>
            <li><a className={link} href="#servicios" onClick={() => setOpen(false)}>Servicios</a></li>
            <li><a className={link} href="#casos"     onClick={() => setOpen(false)}>Casos</a></li>
            <li><a className={link} href="#impacto"   onClick={() => setOpen(false)}>Impacto</a></li>
            <li><a className={link} href="#contacto"  onClick={() => setOpen(false)}>Contacto</a></li>
          </ul>

          {/* Selector ES/EN (mobile) - placeholder para futuro i18n */}
          <div
            className="px-6 pb-5 flex items-center gap-4 opacity-60 pointer-events-none select-none"
            title="Selector de idioma (placeholder)"
            aria-disabled="true"
          >
            <span className={link}>🇪🇸 ES</span>
            <span className={scrolled ? "text-slate-400" : "text-white/60"}>/</span>
            <span className={link}>🇬🇧 EN</span>

            {/*
              FUTURO (cuando reactivemos i18n):
              <NextLink href={href(BASE, "es")} onClick={() => setOpen(false)} className={link + (locale==="es" ? " font-semibold" : "")}>🇪🇸 ES</NextLink>
              <NextLink href={href(BASE, "en")} onClick={() => setOpen(false)} className={link + (locale==="en" ? " font-semibold" : "")}>🇬🇧 EN</NextLink>
            */}
          </div>
        </div>
      </div>
    </header>
  );
}