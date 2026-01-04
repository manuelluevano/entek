// Página de Contacto replicando la vista de la maqueta "contact.png".
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { NavBar } from "../components/NavBar";

export const metadata: Metadata = {
  title: "Contacto | EnteK",
  description:
    "Contacta a EnteK para cotizaciones y soporte de envases plásticos.",
};

const correos = [
  "Josval121988@gmail.com",
  "Jorgeberumen200@gmail.com",
];

export default function Contacto() {
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
        <main className="flex flex-col gap-8 mt-20">
          {/* Sección principal de contacto directo */}
          <section className="rounded-[24px] bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              {/* Columna izquierda */}
              <div className="space-y-6 text-center md:text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#df5a5a]">
                  Contacto Directo
                </p>
                <p className="text-2xl font-semibold leading-tight text-[#2f6287] font-serif md:text-3xl">
                  Estamos listos para ayudarte a encontrar el envase ideal para
                  tu producto.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  <a
                    href="https://wa.me/523332400730"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-emerald-500 px-6 py-2 text-base font-semibold text-white shadow-md transition hover:bg-emerald-400"
                  >
                    Whatsapp
                  </a>
                  <Link
                    className="rounded-full border-2 border-[#3e73a3] px-6 py-2 text-base font-semibold text-[#3e73a3] transition hover:bg-[#3e73a3] hover:text-white"
                    href="/"
                  >
                    Ir Inicio
                  </Link>
                </div>
              </div>

              {/* Columna derecha con tarjeta de cobertura replicando la maqueta */}
              <div className="rounded-[28px] bg-[#ededed] p-4 shadow-sm ring-1 ring-slate-200">
                <div className="rounded-[22px] bg-[#ededed] px-6 py-6 shadow-inner ring-1 ring-slate-200 md:px-7 md:py-7">
                  <p className="text-2xl font-semibold text-[#4e7a9c]">
                    Cobertura
                  </p>
                  <p className="mt-4 text-xl leading-7 text-slate-800 md:text-2xl md:leading-8">
                    Respuesta en menos de 24 h. Enviamos a toda la República
                    Mexicana y damos soporte en diseño y fabricación de moldes
                    personalizados.
                  </p>
                  <div className="mt-8 space-y-6">
                    <div className="rounded-[20px] bg-white px-5 py-5 shadow-lg ring-1 ring-slate-200 md:px-7 md:py-6">
                      <p className="text-2xl text-slate-800">Celular</p>
                      <p className="text-xl font-semibold text-[#2f6c99] md:text-2xl">
                        +52 33 3240 0730
                      </p>
                    </div>
                    <div className="rounded-[20px] bg-white px-5 py-5 shadow-lg ring-1 ring-slate-200 md:px-7 md:py-6">
                      <p className="text-2xl text-slate-800">Ubicación</p>
                      <p className="text-xl font-semibold text-[#2f6c99] md:text-2xl">
                        Zapopan, Jalisco
                      </p>
                      <p className="text-lg text-slate-800 md:text-xl">
                        Zapopan, Jalisco · Citas previas de coordinación
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sección de correos electrónicos */}
          <section className="rounded-[24px] bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold text-[#537499]">
              Correos Electrónicos
            </h2>
            <div className="mt-4 space-y-4">
              {correos.map((correo) => (
                <div
                  key={correo}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-[12px] bg-slate-50 px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200 md:text-base"
                >
                  <span>{correo}</span>
                  <button className="text-sm font-semibold text-[#d75a5a]">
                    Enviar Correo
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
