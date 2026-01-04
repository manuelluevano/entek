import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EnteK | Envases Plásticos",
  description: "Fabricación y maquila de envases plásticos personalizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProd = process.env.NODE_ENV === "production";
  const baseHref = isProd ? "https://manuelluevano.github.io/entek/" : "/";

  return (
    <html lang="en">
      <head>
        <base href={baseHref} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
