// components/home/Hero.tsx
import Image from "next/image";
import Container from "../ui/Container";

// Titular dividido para jugar con tamaños
const H1_MAIN = "Modelación 1D/2D";
const H1_TRAIL = "para infraestructura resiliente";

// Descripción breve (1 frase)
const SUBHEAD =
  "Simulamos lámina de agua y velocidades con mallas 1D/2D integradas a SIG/LiDAR para obras, drenaje y gestión del riesgo.";

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative isolate overflow-hidden text-white">
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        {/* Desktop */}
        <Image
          src="/images/hero/home.png"
          alt="Vista aérea con dinámica hidráulica"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover"
          quality={95}
          style={{ objectPosition: "50% 40%" }}
        />
        {/* Mobile */}
        <Image
          src="/images/hero/home.png"
          alt="Vista aérea (mobile)"
          fill
          priority
          sizes="100vw"
          className="md:hidden object-cover"
          quality={95}
          style={{ objectPosition: "50% 30%" }}
        />
        {/* Overlay simple + tinte aqua sutil */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_500px_at_12%_45%,rgba(95,214,212,0.18),transparent_60%)]" />
      </div>

      {/* Contenido */}
      <div className="min-h-[88vh] md:min-h-[92vh] lg:min-h-screen pt-24 md:pt-28 flex items-center">
        <Container className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Card más a la izquierda */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <div className="w-full max-w-3xl rounded-3xl border border-white/15 bg-white/10 ring-1 ring-white/15 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)]">
              {/* Titular en dos jerarquías */}
              <h1 className="leading-tight">
                <span className="block text-4xl sm:text-5xl font-semibold tracking-tight">
                  {H1_MAIN}
                </span>
                <span className="mt-1 block text-xl sm:text-2xl font-medium text-white/90">
                  {H1_TRAIL}
                </span>
              </h1>

              {/* Descripción breve */}
              <p className="mt-4 text-white/90 text-base sm:text-xs leading-relaxed">
                {SUBHEAD}
              </p>

              {/* Botones (one-page → anclas internas) */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#servicios"
                  className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow hover:bg-slate-100"
                >
                  Ver servicios
                </a>
                <a
                  href="#contacto"
                  className="rounded-xl ring-1 ring-white/40 px-5 py-3 text-sm font-medium hover:bg-white/10"
                >
                  Contacto
                </a>
              </div>

              {/* Chips sutiles */}
              <ul className="mt-6 flex flex-wrap gap-2 text-xs">
                {["HEC-RAS", "Iber", "SWMM", "QGIS", "Python", "LiDAR"].map((t) => (
                  <li
                    key={t}
                    className="px-2.5 py-1.5 rounded-lg bg-white/12 ring-1 ring-white/20 text-white/95"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}