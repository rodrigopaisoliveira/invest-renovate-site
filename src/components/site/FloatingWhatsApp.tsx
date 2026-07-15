import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappUrl } from "@/lib/contact";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl("Olá! Vim pelo site e gostaria de mais informações.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-whatsapp-foreground shadow-soft transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
      </span>
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">Fale connosco</span>
    </a>
  );
}
