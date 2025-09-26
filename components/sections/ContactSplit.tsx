// components/sections/ContactSplit.tsx
"use client";

import Container from "../ui/Container";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import React from "react";

const TEAL = "#009fa6";
const BLUE = "#0e3a5d";

export default function ContactSplit() {
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
            <p className="text-[12px] font-semibold tracking-widest text-slate-900">
              CONTACTO
            </p>
            <div
              className="mt-1 ml-1 h-1 w-14 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${TEAL}, rgba(0,159,166,.4))`,
              }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
            Hablemos de tu proyecto
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Contanos objetivos y plazos. Te respondemos con la mejor ruta técnica y
            un marco de trabajo claro.
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
              <h3 className="text-lg font-semibold text-slate-900">Cómo colaboramos</h3>
              <p className="mt-3 leading-relaxed text-slate-700">
                Inicio ágil (kick-off), definición de KPIs y cronograma técnico.
                Entregas trazables y comparables en cada hito.
              </p>

              <div className="mt-4 h-px bg-slate-200" />

              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 text-slate-700">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="leading-5">
                    <div className="font-medium text-slate-900">Email</div>
                    <a
                      href="mailto:hola@waterb3l.com"
                      className="text-slate-700 hover:opacity-90"
                    >
                      hola@waterb3l.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 text-slate-700">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="leading-5">
                    <div className="font-medium text-slate-900">Teléfono</div>
                    <a
                      href="tel:+34111222333"
                      className="text-slate-700 hover:opacity-90"
                    >
                      +34 111 222 333
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 text-slate-700">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="leading-5">
                    <div className="font-medium text-slate-900">Ubicación</div>
                    <p className="text-slate-700">Barcelona · Remoto / On-site</p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 text-slate-700">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div className="leading-5">
                    <div className="font-medium text-slate-900">Respuesta</div>
                    <p className="text-slate-700">24–48 h hábiles</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          {/* Lado derecho: formulario */}
          <div className="md:col-span-7 lg:col-span-8">
            <form
              className="rounded-2xl bg-white p-6 md:p-8 ring-1 ring-slate-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,.12)]"
              method="POST"
              action="/api/contact"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#009fa6] focus:border-[#009fa6]"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900">
                    Email
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
                    Organización
                  </label>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#009fa6] focus:border-[#009fa6]"
                    placeholder="Empresa / Municipio / Consultora"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-900">
                    Asunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    autoComplete="off"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#009fa6] focus:border-[#009fa6]"
                    placeholder="Breve resumen"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#009fa6] focus:border-[#009fa6]"
                    placeholder="Contexto, objetivos, plazos…"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  Al enviar aceptás nuestro tratamiento de datos según política de privacidad.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2"
                  style={{ backgroundColor: BLUE, color: "#fff" }}
                >
                  Enviar mensaje
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