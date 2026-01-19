// Página principal inspirada en el diseño compartido. Estructura simple y escalable.
import Image from "next/image";
import type { Metadata } from "next";
import { FloatingWhatsapp } from "./components/FloatingWhatsapp";
import { NavBar } from "./components/NavBar";
import { ProductosGrid } from "./components/ProductosGrid";
import envasesNoFondo from "./assets/envasesNoFondo.png";
import logoNoFondo from "./assets/logoNoFondo.png";
import whatsappIcon from "./assets/whatsapp.svg";
import p1 from "./assets/productos/1.jpeg";
import p2 from "./assets/productos/2.jpeg";
import p3 from "./assets/productos/3.jpeg";
import p4 from "./assets/productos/4.jpeg";
import p5 from "./assets/productos/5.jpeg";
import p6 from "./assets/productos/6.png";
import pn1 from "./assets/productos nuevos/1.jpeg";
import pn2 from "./assets/productos nuevos/2.jpeg";
import pn3 from "./assets/productos nuevos/3.jpeg";
import pn4 from "./assets/productos nuevos/4.jpeg";
import pn5 from "./assets/productos nuevos/5.jpeg";
import pn6 from "./assets/productos nuevos/6.jpeg";
import pn7 from "./assets/productos nuevos/7.jpeg";
import pn8 from "./assets/productos nuevos/8.jpeg";
import pn10 from "./assets/productos nuevos/10.jpeg";

export const metadata: Metadata = {
  title: "EnteK | Envases Plásticos",
  description: "Fabricación y maquila de envases plásticos personalizados.",
};

// Catálogo breve de 6 productos para mostrar en grilla 3x2.
const productos = [
  { id: 1, imagen: p1, alt: "Producto 1" },
  { id: 2, imagen: p2, alt: "Producto 2" },
  { id: 3, imagen: p3, alt: "Producto 3" },
  { id: 4, imagen: p4, alt: "Producto 4" },
  { id: 5, imagen: p5, alt: "Producto 5" },
  { id: 6, imagen: p6, alt: "Producto 6" },
];

const productosNuevos = [
  { id: 1, imagen: pn1, alt: "Producto nuevo 1" },
  { id: 2, imagen: pn2, alt: "Producto nuevo 2" },
  { id: 3, imagen: pn3, alt: "Producto nuevo 3" },
  { id: 4, imagen: pn4, alt: "Producto nuevo 4" },
  { id: 5, imagen: pn5, alt: "Producto nuevo 5" },
  { id: 6, imagen: pn6, alt: "Producto nuevo 6" },
  { id: 7, imagen: pn7, alt: "Producto nuevo 7" },
  { id: 8, imagen: pn8, alt: "Producto nuevo 8" },
  { id: 9, imagen: pn10, alt: "Producto nuevo 9" },
];


const beneficios = [
  {
    icono: "🛢️",
    titulo: "Alta resistencia",
    texto: "Fabricados con materiales vírgenes y con certificación",
  },
  {
    icono: "📦",
    titulo: "Manejo seguro",
    texto: "Diseño ergonómico que facilita el transporte.",
  },
  {
    icono: "⚙️",
    titulo: "Calidad confiable",
    texto: "Envases funcionales para múltiples aplicaciones.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <div className="flex w-full flex-col">
        <main className="flex flex-col">
          {/* Hero */}
          <section
            id="inicio"
            className="relative overflow-hidden bg-gradient-to-r from-[#1f5a7c] via-[#1f5a7c] to-[#0f2435] text-white shadow-lg"
          >
            {/* Barra superior con logo y navegación */}
            <NavBar
              logoSrc={logoNoFondo.src}
              navItems={[
                { label: "INICIO", href: "#inicio" },
                { label: "PRODUCTOS", href: "#productos" },
                { label: "NOSOTROS", href: "/nosotros" },
                { label: "CONTACTO", href: "/contacto" },
              ]}
            />

            {/* Texto central */}
            <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-start px-6 pb-0 pt-48 text-center md:min-h-[720px]">
              <h1 className="text-4xl font-semibold italic leading-tight sm:text-5xl md:text-6xl">
                Super Envases EnteK
              </h1>
              <div className="relative mt-auto w-full max-w-5xl md:h-115">
                <Image
                  src={envasesNoFondo}
                  alt="Envases EnteK"
                  width={1800}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>

          </section>

          {/* Título central */}
          <section className="mt-6 rounded-2xl bg-white px-6 py-14 text-center shadow-sm ring-1 ring-slate-200 md:mt-8 md:px-10 md:py-16">
            <p className="text-4xl font-semibold italic text-black md:text-5xl">
              ¡Envasate con nosotros!
            </p>
          </section>

          {/* Productos */}
          <section
            id="maquilas"
            className="mx-6 rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] backdrop-blur md:mx-12 md:p-7 lg:mx-24"
          >
            <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-5 text-slate-600 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Maquilas
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
                  Envases con logotipo o marca del cliente
                </h3>
              </div>
              <a
                className="inline-flex w-full items-center justify-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-100 md:w-auto"
                href="https://api.whatsapp.com/send/?phone=523332400730&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                Contáctanos
              </a>
            </div>
            <ProductosGrid productos={productos} />
          </section>

          {/* Productos */}
          <section
            id="productos"
            className="mx-6 mt-10 rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] backdrop-blur md:mx-12 md:p-7 lg:mx-24"
          >
            <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-5 text-slate-600 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Productos
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
                  Productos nuevos
                </h3>
              </div>
              <a
                className="inline-flex w-full items-center justify-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-100 md:w-auto"
                href="https://api.whatsapp.com/send/?phone=523332400730&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                Contáctanos
              </a>
            </div>
            <ProductosGrid productos={productosNuevos} />
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-gradient-to-r from-slate-800 via-sky-900 to-slate-800 px-6 py-12 text-center text-white shadow-lg md:px-8 md:py-14">
            <p className="text-3xl font-semibold md:text-4xl">¿Necesitas envase?</p>
            <a
              href="https://wa.me/523332400730"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-400 md:mt-8"
            >
              Contáctanos por WhatsApp
            </a>
          </section>

          {/* Beneficios */}
          <section className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200 md:p-8">
            <h3 className="mb-10 mt-2 text-2xl font-semibold text-slate-900 md:mb-12 md:mt-4">
              ¿Por qué elegir nuestros envases?
            </h3>
            <div className="mt-6 space-y-4">
              {beneficios.map((item) => (
                <div
                  key={item.titulo}
                  className="rounded-2xl bg-slate-100 px-6 py-5 text-center text-slate-900 ring-1 ring-slate-200 shadow-sm"
                >
                  <div className="text-xl font-semibold">
                    <span className="mr-2">{item.icono}</span>
                    {item.titulo}
                  </div>
                  <p className="mt-3 text-xl font-medium text-slate-900">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Pie de página inspirado en el footer de referencia */}
        <footer className="flex flex-col gap-6 rounded-2xl bg-white p-6 text-slate-700 shadow-sm ring-1 ring-slate-200 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex flex-col items-center gap-4 md:items-start md:pl-12">
            <Image
              src={logoNoFondo}
              alt="EnteK logo"
              width={200}
              height={80}
              className="h-auto w-[200px]"
              priority
            />
            <div className="text-sm text-center md:text-left">
              <p className="font-semibold">Contacto</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Josval121988@gmail.com</li>
                <li>Jorgeberumen200@gmail.com</li>
                <li>Tel: +52 33 3240 0730</li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/523332400730"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md transition hover:scale-105"
                aria-label="WhatsApp"
              >
                <Image src={whatsappIcon} alt="WhatsApp" width={22} height={22} />
              </a>
              <a
                href="https://www.facebook.com/people/Super-envases-ENTEK/61586102394507/"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md transition hover:scale-105"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M13.4 20.9v-6.7h2.2l.3-2.6h-2.5V9c0-.7.2-1.2 1.2-1.2h1.3V5.4c-.2 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.1H8.1v2.6h2.1v6.7h3.2Z" />
                </svg>
              </a>
            </div>
          </div>
          <p className="text-center text-xl italic text-slate-800 md:pr-12 md:text-2xl">
            Tú mejor opción en envases de plástico
          </p>
        </footer>

        {/* Botón flotante de WhatsApp */}
        <FloatingWhatsapp />
      </div>
    </div>
  );
}
