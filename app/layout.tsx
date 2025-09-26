// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Water B3L",
  description: "Modelación 1D/2D para infraestructura resiliente",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <WhatsAppFab phone="+34 611 222 333" message="Hola, quisiera más información 👋" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}