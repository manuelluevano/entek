import Image from "next/image";
import whatsappIcon from "../assets/whatsapp.svg";

// Botón flotante de WhatsApp que aparece en toda la app.
const phone = "3332400730";
const whatsappLink = `https://wa.me/52${phone}?text=Quiero%20m%C3%A1s%20informaci%C3%B3n`;

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-3 text-emerald-700 shadow-lg shadow-emerald-200 transition hover:scale-110 md:right-8"
      aria-label="WhatsApp 33 1402 5519"
    >
      <Image src={whatsappIcon} alt="WhatsApp" className="h-8 w-8" />
    </a>
  );
}
