// components/layout/Navbar.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n-context";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const { locale, t, setLocale } = useI18n();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (y / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrap = "fixed top-0 left-0 w-full z-50 transition-all duration-300";
  const bg = scrolled
    ? "bg-white/96 backdrop-blur-md border-b border-slate-200/60 shadow-sm"
    : "bg-transparent";

  const linkBase =
    "relative text-sm font-medium tracking-wide transition-colors " +
    "after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 " +
    "after:rounded-full after:transition-all after:duration-200 " +
    (scrolled
      ? "text-slate-600 hover:text-slate-900 after:bg-[#009fa6] hover:after:w-full"
      : "text-white/85 hover:text-white after:bg-[#5FD6D4] hover:after:w-full");

  return (
    <header className={`${wrap} ${bg}`} role="banner">
      <nav className="mx-auto max-w-7xl h-16 md:h-20 px-6 sm:px-8 lg:px-10 flex items-center justify-between">
        <a href="#" className="flex items-center h-full" onClick={() => setOpen(false)}>
          <Image
            src={scrolled ? "/images/logo/logo-naviv2.png" : "/images/logo/logo-whitev2.png"}
            alt="Water B3L logo"
            width={500}
            height={600}
            priority
            className="h-14 w-auto md:h-16"
          />
        </a>

        <ul className="hidden md:flex items-center gap-7 lg:gap-8">
          <li><a className={linkBase} href="#nosotros">{t.nav.about}</a></li>
          <li><a className={linkBase} href="#servicios">{t.nav.services}</a></li>
          <li><a className={linkBase} href="#casos">{t.nav.cases}</a></li>
          <li><a className={linkBase} href="#presencia">{t.nav.presence}</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <div className={"flex items-center rounded-full overflow-hidden " + (scrolled ? "ring-1 ring-slate-200" : "ring-1 ring-white/20")}>
            {(["es", "en"] as const).map((lng) => (
              <button
                key={lng}
                onClick={() => setLocale(lng)}
                aria-label={lng === "es" ? "Español" : "English"}
                aria-pressed={locale === lng}
                className={
                  "px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer " +
                  (locale === lng
                    ? scrolled ? "bg-[#0E3A5D] text-white" : "bg-white/20 text-white"
                    : scrolled ? "text-slate-400 hover:text-slate-700" : "text-white/50 hover:text-white/80")
                }
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#contacto"
            className={"rounded-lg px-4 py-2 text-sm font-semibold transition-colors " +
              (scrolled ? "bg-[#009fa6] text-white hover:bg-[#0E3A5D]" : "ring-1 ring-white/35 text-white hover:bg-white/10")}
          >
            {t.nav.contact}
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Abrir menú" onClick={() => setOpen(!open)}>
          {[0, 1, 2].map((i) => (
            <span key={i} className={`block h-0.5 w-6 rounded transition-all duration-200 ${scrolled ? "bg-slate-800" : "bg-white"}`} />
          ))}
        </button>
      </nav>

      {scrolled && (
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-slate-100/30">
          <div className="h-full transition-all duration-75" style={{ width: `${scrollProgress}%`, background: "linear-gradient(90deg, #009fa6, #5FD6D4)" }} />
        </div>
      )}

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <ul className="flex flex-col py-4 px-6 gap-1">
            {[
              { href: "#nosotros", label: t.nav.about },
              { href: "#servicios", label: t.nav.services },
              { href: "#casos", label: t.nav.cases },
              { href: "#presencia", label: t.nav.presence },
              { href: "#contacto", label: t.nav.contact },
            ].map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)} className="block py-3 text-slate-700 font-medium border-b border-slate-100 last:border-0">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-5 flex gap-3">
            {(["es", "en"] as const).map((lng) => (
              <button
                key={lng}
                onClick={() => { setLocale(lng); setOpen(false); }}
                className={"flex-1 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors " +
                  (locale === lng ? "bg-[#0E3A5D] text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200")}
              >
                {lng === "es" ? "🇪🇸 ES" : "🇬🇧 EN"}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}