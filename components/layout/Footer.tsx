// components/layout/Footer.tsx
"use client";

import Image from "next/image";
import Container from "../ui/Container";
import { Mail, Phone, MapPin, Linkedin, Github, Youtube, Twitter } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

const BLUE = "#0b1220";
const TEAL = "#009fa6";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useI18n();
  const f = t.footer;

  const socials = [
    { href: "https://www.linkedin.com/company/tu-pagina", label: "LinkedIn", Icon: Linkedin },
    { href: "https://twitter.com/tu_usuario", label: "X (Twitter)", Icon: Twitter },
    { href: "https://github.com/tu-org", label: "GitHub", Icon: Github },
    { href: "https://youtube.com/@tu-canal", label: "YouTube", Icon: Youtube },
  ];

  return (
    <footer aria-label="Pie de página" className="relative" style={{ backgroundColor: BLUE }}>
      {/* Top line */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{
          background: `linear-gradient(90deg, rgba(255,255,255,.15), ${TEAL}, rgba(255,255,255,.15))`,
          opacity: 0.35,
        }}
      />

      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand + tagline */}
          <div className="md:col-span-5 lg:col-span-4">
            <a href="#" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo/logo-whitev2.png"
                alt="Water B3L"
                width={140}
                height={40}
                priority
                className="h-8 w-auto md:h-10"
              />
              <span className="accent-bar" aria-hidden />
            </a>

            <p className="mt-4 max-w-sm text-sm text-slate-100/70 leading-relaxed">
              {f.tagline}
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white/60 hover:text-[#009fa6] transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation — order matches page sections */}
          <nav className="md:col-span-4 lg:col-span-4" aria-label="Navegación de footer">
            <h3 className="text-sm font-semibold text-white/90">{f.sections}</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-100/75">
              {[
                { href: "#servicios", label: t.nav.services },
                { href: "#casos", label: t.nav.cases },
                { href: "#nosotros", label: t.nav.about },
                { href: "#contacto", label: t.nav.contact },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="nav-link inline-flex items-center gap-2 rounded-md px-1 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="text-sm font-semibold text-white/90">{f.contactTitle}</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-100/75">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="mailto:hola@waterb3l.com" className="transition hover:text-[#009fa6]">
                  hola@waterb3l.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="tel:+34111222333" className="transition hover:text-[#009fa6]">
                  +34 111 222 333
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{t.contact.locationValue}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 h-px w-full" style={{ background: "rgba(255,255,255,.08)" }} aria-hidden />

        <div className="flex flex-col-reverse items-start justify-between gap-3 md:flex-row md:items-center">
          <p className="text-xs text-slate-100/60">
            © {year} Water B3L. {f.rights}
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-100/60">
            <a href="#privacidad" className="rounded-md px-1 transition hover:text-[#009fa6]">
              {f.privacy}
            </a>
            <a href="#terminos" className="rounded-md px-1 transition hover:text-[#009fa6]">
              {f.terms}
            </a>
          </div>
        </div>
      </Container>

      {/* Subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-10 h-56 w-56 rounded-full blur-3xl"
        style={{ background: TEAL, opacity: 0.06 }}
      />
    </footer>
  );
}