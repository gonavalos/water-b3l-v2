// components/ui/WhatsAppFab.tsx
"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  phone: string;            // Ej: "+34 611 222 333"
  message?: string;         // Mensaje inicial
  position?: "right" | "left";
  label?: string;           // Accesibilidad
};

export default function WhatsAppFab({
  phone,
  message = "Hola, quisiera más información 👋",
  position = "right",
  label = "Contactar por WhatsApp",
}: Props) {
  const digits = phone.replace(/[^\d]/g, "");
  const href = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={[
        "fixed z-50 bottom-5 md:bottom-8 right-10 inline-flex items-center justify-center",
        "rounded-full shadow-lg transition transform hover:scale-[1.03]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]",
        position === "right" ? "right-5 md:right-6" : "left-5 md:left-6",
      ].join(" ")}
      style={{
        width: 56,
        height: 56,
        color: "#fff", // el ícono toma currentColor
        background:
          "radial-gradient(60% 60% at 30% 30%, rgba(255,255,255,.25), rgba(255,255,255,0)) , linear-gradient(135deg, #25D366, #1ebe57)",
        boxShadow: "0 10px 30px -12px rgba(0,0,0,.35)",
      }}
    >
      <FaWhatsapp size={24} aria-hidden="true" />
    </a>
  );
}