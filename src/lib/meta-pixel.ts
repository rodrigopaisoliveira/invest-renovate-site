// Meta Pixel — só é carregado depois de o visitante aceitar os cookies de medição.
//
// Para ativar: cole abaixo o ID do Pixel (Gestor de Eventos da Meta → Origens de dados → Pixel).
// Enquanto estiver vazio, o site não carrega o Pixel e não mostra o banner de cookies.
export const META_PIXEL_ID = "";

export const CONSENT_KEY = "iq-cookie-consent";
export const OPEN_PREFERENCES_EVENT = "iq:open-cookie-preferences";

export type Consent = "granted" | "denied";

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
  push: Fbq;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

export function readConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(value: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // armazenamento indisponível: a escolha vale só para esta visita
  }
}

let loaded = false;

export function loadMetaPixel() {
  if (loaded || !META_PIXEL_ID || typeof window === "undefined") return;
  loaded = true;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  fbq("init", META_PIXEL_ID);
  fbq("track", "PageView");
}

/** Envia um evento ao Pixel, só se o visitante tiver aceitado e o Pixel estiver carregado. */
export function trackEvent(name: string) {
  if (readConsent() !== "granted" || !window.fbq) return;
  window.fbq("track", name);
}
