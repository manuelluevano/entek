// Componente cliente para mostrar el grid de productos con modal de imagen.
"use client";

import Image from "next/image";
import { useState } from "react";

type Producto = {
  id: number;
  imagen: string;
  alt: string;
};

type Props = {
  productos: Producto[];
};

const whatsappCotizarLink =
  "https://wa.me/523332400730?text=Quiero%20cotizar%20un%20producto%21";

export function ProductosGrid({ productos }: Props) {
  const [seleccionado, setSeleccionado] = useState<Producto | null>(null);

  return (
    <>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {productos.map((producto) => (
          <article
            key={producto.id}
            className="flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 shadow-sm"
          >
            <button
              type="button"
              onClick={() => setSeleccionado(producto)}
              className="relative block h-64 w-full bg-slate-100 transition hover:brightness-105"
            >
              <Image
                src={producto.imagen}
                alt={producto.alt}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </button>
            <div className="px-4 py-3">
              <a
                href={whatsappCotizarLink}
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-md bg-emerald-500 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-emerald-400"
              >
                Cotizar
              </a>
            </div>
          </article>
        ))}
      </div>

      {seleccionado ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSeleccionado(null)}
        >
          <div
            className="relative h-[80vh] w-full max-w-6xl bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={seleccionado.imagen}
              alt={seleccionado.alt}
              fill
              className="h-full w-full object-contain bg-slate-100"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
            <button
              type="button"
              onClick={() => setSeleccionado(null)}
              className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white hover:bg-black/80"
            >
              Cerrar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
