"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { PHONE_NUMBERS, whatsappUrl } from "@/lib/contact";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Contactar via WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-whatsapp-foreground shadow-soft transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden text-sm font-semibold sm:inline">Fale connosco</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Enviar mensagem no WhatsApp</DialogTitle>
            <DialogDescription>Escolha quem quer contactar.</DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-3">
            {PHONE_NUMBERS.map((p) => (
              <a
                key={p.whatsapp}
                href={whatsappUrl("Olá! Vim pelo site e gostaria de mais informações.", p.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl bg-secondary px-4 py-3 transition-colors hover:bg-accent"
              >
                <span className="text-sm font-medium text-foreground">{p.name}</span>
                <span className="font-semibold text-primary-dark">{p.display}</span>
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
