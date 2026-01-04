import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Export estático para GitHub Pages
  output: "export",
  // Prefijo/base solo en producción (GitHub Pages). En dev sirve en raíz.
  basePath: isProd ? "/entek" : "",
  images: {
    // Necesario al exportar con next/image
    unoptimized: true,
  },
  // Evita 404 de GitHub Pages en rutas estáticas
  trailingSlash: true,
};

export default nextConfig;
