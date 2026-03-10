// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import { I18nProvider } from "@/lib/i18n-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Water B3L — Ingeniería hidráulica e hidrológica",
  description: "Especialistas en modelación hidrológica e hidráulica, drenaje urbano y gestión del riesgo por inundación. Proyectos en España, Argentina y más de 8 países.",
  keywords: "ingeniería hidráulica, hidrología, HEC-RAS, SWMM, drenaje urbano, riesgo inundación, modelación 1D 2D, España, Argentina",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <I18nProvider>
          <Navbar />
          <WhatsAppFab phone="+34 111 222 333" message="Hola, quisiera más información 👋" />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}