/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Desplegando en un dominio raíz (superenvasesentek.com.mx), sin subcarpeta
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig;
