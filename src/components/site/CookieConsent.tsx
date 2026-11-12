import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  META_PIXEL_ID,
  OPEN_PREFERENCES_EVENT,
  loadMetaPixel,
  readConsent,
  saveConsent,
  trackEvent,
  type Consent,
} from "@/lib/meta-pixel";

/**
 * Banner de consentimento para o Meta Pixel. Só aparece se existir um ID de Pixel configurado
 * em src/lib/meta-pixel.ts; sem ID, o site não usa cookies de medição e não mostra nada.
 */
export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!META_PIXEL_ID) return;

    const consent = readConsent();
    if (consent === "granted") loadMetaPixel();
    if (consent === null) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, reopen);

    // Mede cliques nos botões de contacto (WhatsApp, telefone, email).
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href") ?? "";
      if (/^(https:\/\/wa\.me\/|tel:|mailto:)/.test(href)) trackEvent("Contact");
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener(OPEN_PREFERENCES_EVENT, reopen);
      document.removeEventListener("click", onClick);
    };
  }, []);

  if (!META_PIXEL_ID || !open) return null;

  const choose = (value: Consent) => {
    saveConsent(value);
    setOpen(false);
    if (value === "granted") loadMetaPixel();
    else if (window.fbq) window.location.reload(); // desativa um Pixel já carregado
  };

  return (
    <div
      role="dialog"
      aria-label="Preferências de cookies"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-xl border border-border bg-background p-5 shadow-xl"
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        Usamos o Meta Pixel (cookies de medição e publicidade) para perceber o desempenho dos nossos
        anúncios no Facebook e Instagram. Só o ativamos se aceitar. Saiba mais na{" "}
        <Link to="/politica-de-privacidade" className="text-primary underline">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap justify-end gap-2">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-md border border-input px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
