"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type Props = {
  logoSrc: string;
  navItems: NavItem[];
};

// Barra de navegación responsive con menú hamburguesa en móviles.
export function NavBar({ logoSrc, navItems }: Props) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <header className="absolute left-1/2 top-0 z-20 mt-6 flex w-[96%] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full bg-white/95 px-6 py-2 text-sm font-semibold text-slate-700 shadow-xl backdrop-blur md:px-8">
      <Link href="#inicio" aria-label="Volver al inicio" className="flex items-center" onClick={handleClose}>
        <Image
          src={logoSrc}
          alt="EnteK logo"
          width={120}
          height={52}
          className="h-auto w-[120px]"
          priority
        />
      </Link>

      <nav className="hidden items-center gap-6 md:flex">
        {navItems.map((item) =>
          item.href.startsWith("#") ? (
            <a key={item.href} className="py-1 transition hover:text-slate-900" href={item.href}>
              {item.label}
            </a>
          ) : (
            <Link key={item.href} className="py-1 transition hover:text-slate-900" href={item.href}>
              {item.label}
            </Link>
          ),
        )}
      </nav>

      <button
        type="button"
        onClick={handleToggle}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-slate-400 md:hidden"
        aria-label="Abrir menú de navegación"
      >
        <span className="sr-only">Menú</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open ? (
        <div className="absolute left-0 top-full mt-2 w-full rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  className="py-2 text-base font-semibold transition hover:text-slate-900"
                  href={item.href}
                  onClick={handleClose}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  className="py-2 text-base font-semibold transition hover:text-slate-900"
                  href={item.href}
                  onClick={handleClose}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
