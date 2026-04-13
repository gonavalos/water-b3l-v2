// components/sections/ContactSplit.tsx
"use client";

import Container from "../ui/Container";
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";
import { useI18n } from "@/lib/i18n-context";

const TEAL = "#009fa6";
const BLUE = "#0e3a5d";

export default function ContactSplit() {
  const { t, locale } = useI18n();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
      form.reset();
    } catch {
      // silently fail
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contacto"
      aria-label="Contacto"
      className="relative overflow-hidden bg-white scroll-mt-28"
    >
      <Container className="py-20 md:py-24">
        {/* Cabecera */}
        <header className="mb-8 md:mb-12">
          <div className="mb-5">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color: TEAL }}>
              {t.contact.label}
            </p>
            <div className="accent-bar ml-1" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t.contact.title}
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            {t.contact.subtitle}
          </p>
        </header>

        {/* Layout principal */}
        <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
          {/* Lado izquierdo */}
          <aside className="md:col-span-5 lg:col-span-4">
            <div
              className="rounded-2xl p-6 md:p-8 ring-1 shadow-[0_20px_60px_-20px_rgba(0,0,0,.12)]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,159,166,.06), rgba(14,58,93,.04)), #fff",
                borderColor: "rgba(226,232,240,1)",
              }}
            >
              <h3 className="text-lg font-semibold text-slate-900">{t.contact.howTitle}</h3>
              <ol className="mt-3 space-y-2 text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: TEAL }}>1</span>
                  <span>{t.contact.howStep1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: TEAL }}>2</span>
                  <span>{t.contact.howStep2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: TEAL }}>3</span>
                  <span>{t.contact.howStep3}</span>
                </li>
              </ol>

              <div className="mt-4 h-px bg-slate-200" />

              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 text-slate-700">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="leading-5">
                    <div className="font-medium text-slate-900">{t.contact.emailLabel}</div>
                    <a
                      href="mailto:info@waterb3l.com"
                      className="text-slate-700 hover:opacity-90"
                    >
                      info@waterb3l.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 text-slate-700">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="leading-5">
                    <div className="font-medium text-slate-900">{t.contact.phoneLabel}</div>
                    <a
                      href="tel:+34624012778"
                      className="text-slate-700 hover:opacity-90"
                    >
                      +34 624 01 27 78
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 text-slate-700">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="leading-5">
                    <div className="font-medium text-slate-900">{t.contact.locationLabel}</div>
                    <p className="text-slate-700">{t.contact.locationValue}</p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 text-slate-700">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div className="leading-5">
                    <div className="font-medium text-slate-900">{t.contact.responseLabel}</div>
                    <p className="text-slate-700">{t.contact.responseValue}</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          {/* Lado derecho: formulario */}
          <div className="md:col-span-7 lg:col-span-8">
            <form
              className="rounded-2xl bg-white p-6 md:p-8 ring-1 ring-slate-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,.12)]"
              onSubmit={handleSubmit}
            >
              {sent && (
                <div className="mb-4 flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-800">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  {locale === "en" ? "Message sent! We'll get back to you within 24–48 hours." : "Mensaje enviado. Te respondemos dentro de 24–48 h."}
                </div>
              )}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900">
                    {t.contact.formName}
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#009fa6] focus:border-[#009fa6]"
                    placeholder={t.contact.formNamePh}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900">
                    {t.contact.formEmail}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#009fa6] focus:border-[#009fa6]"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-900">
                    {t.contact.formOrg}
                  </label>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#009fa6] focus:border-[#009fa6]"
                    placeholder={t.contact.formOrgPh}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-900">
                    {t.contact.formSubject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#009fa6] focus:border-[#009fa6] bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>{t.contact.formSubject}</option>
                    {t.contact.formSubjectOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#009fa6] focus:border-[#009fa6]"
                    placeholder={t.contact.formMessagePh}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  {t.contact.formPrivacy}
                </p>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 disabled:opacity-60"
                  style={{ backgroundColor: BLUE, color: "#fff" }}
                >
                  {sending ? (locale === "en" ? "Sending..." : "Enviando...") : t.contact.formSubmit}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}