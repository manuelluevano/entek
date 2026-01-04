// Página de Nosotros replicando la vista de la maqueta.
import Link from "next/link";
import type { Metadata } from "next";
import { NavBar } from "../components/NavBar";

export const metadata: Metadata = {
  title: "Nosotros | EnteK",
  description:
    "Conoce a EnteK, expertos en fabricación y maquila de envases plásticos.",
};

const fortalezas = [
  "Calidad en materiales y procesos",
  "Cumplimiento y responsabilidad",
  "Atención directa y personalizada",
  "Soluciones a la medida",
];

const parrafoPrincipal =
  "Somos una empresa especializada en la fabricación y maquila de envases plásticos, enfocada en ofrecer soluciones prácticas, resistentes y funcionales para diferentes industrias.";

const parrafoSecundario =
  "En Súper Envases EnteK fabricamos envases en polietileno por extrusión soplo de 50 ML hasta 5 LTS, pigmentados en cualquier color y con la experiencia de 20 años en el ramo de la fabricación y maquila de envases.";

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <NavBar
        logoSrc="/logoNoFondo.png"
        navItems={[
          { label: "INICIO", href: "/" },
          { label: "PRODUCTOS", href: "/#productos" },
          { label: "NOSOTROS", href: "/nosotros" },
          { label: "CONTACTO", href: "/contacto" },
        ]}
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 md:px-8 lg:px-10">
        {/* Encabezado con logo real */}


        <main className="flex flex-col gap-10">
          {/* Título principal */}
          <h1 className="text-center text-3xl mt-20 font-semibold text-[#5b7fa3] md:text-left md:text-4xl">
            ¿Quiénes Somos?
          </h1>

          {/* Contenido principal y compromiso */}
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <section className="rounded-[20px] border border-slate-200 bg-white px-6 py-6 shadow-sm md:px-8 md:py-8">
              <p className="text-lg leading-7 text-slate-800 md:text-xl">
                {parrafoPrincipal}
              </p>
              <p className="mt-4 text-lg leading-7 text-slate-800 md:text-xl">
                {parrafoSecundario}
              </p>
            </section>

            <aside className="rounded-[20px] bg-slate-100 px-6 py-6 shadow-sm md:px-7 md:py-8">
              <h2 className="text-lg font-semibold text-[#5481a3]">
                Nuestro Compromiso
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Nuestro compromiso es ofrecer envases de calidad, confiables y
                funcionales, cumpliendo con los estándares necesarios para
                impulsar tu producto y tu marca.
              </p>
            </aside>
          </div>

          {/* Lista de fortalezas */}
          <section className="space-y-4">
            <ul className="space-y-3 text-lg font-semibold text-slate-800 md:text-xl">
              {fortalezas.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Botones de acción */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              className="rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-400"
              href="/contacto"
            >
              Hablar con un asesor
            </Link>
            <Link
              className="rounded-full border-2 border-[#3e73a3] px-6 py-2 text-sm font-semibold text-[#3e73a3] transition hover:bg-[#3e73a3] hover:text-white"
              href="/"
            >
              Ir Inicio
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
