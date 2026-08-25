import { Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_NUMBER, PHONE_NUMBERS, PHONE_NUMBER, EMAIL, whatsappUrl } from "@/lib/contact";

export function Contact() {
  return (
    <section id="contacto" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Contacto</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-5xl">
            Vamos falar sobre o seu projeto
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            A forma mais rápida é pelo WhatsApp. Respondemos em minutos, em horário útil.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={whatsappUrl("Olá! Gostaria de pedir informações sobre uma remodelação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-whatsapp p-8 text-whatsapp-foreground shadow-card transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <WhatsAppIcon className="h-8 w-8" />
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Recomendado
              </span>
            </div>
            <h3 className="mt-6 font-display text-xl font-bold">WhatsApp</h3>
            <p className="mt-1 text-sm opacity-90">Resposta rápida em minutos</p>
            <p className="mt-4 font-semibold">{PHONE_NUMBER.display}</p>
            <p className="mt-1 text-xs opacity-80">{PHONE_NUMBER.name}</p>
          </a>

          <div className="group rounded-2xl bg-card p-8 shadow-card transition-transform hover:-translate-y-1">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary-dark">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-display text-xl font-bold text-foreground">Chamada</h3>
            <p className="mt-1 text-sm text-muted-foreground">Segunda a sexta, 9h – 18h</p>
            <ul className="mt-4 space-y-2">
              {PHONE_NUMBERS.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="flex items-center justify-between rounded-xl bg-secondary px-3 py-2 transition-colors hover:bg-accent"
                  >
                    <span className="text-sm text-muted-foreground">{p.name}</span>
                    <span className="font-semibold text-primary-dark">{p.display}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="group rounded-2xl bg-card p-8 shadow-card transition-transform hover:-translate-y-1"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary-dark">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-display text-xl font-bold text-foreground">Email</h3>
            <p className="mt-1 text-sm text-muted-foreground">Para pedidos mais detalhados</p>
            <p className="mt-4 break-all font-semibold text-primary-dark">{EMAIL}</p>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          A trabalhar em toda a Grande Lisboa
        </div>

        {/* Suppress unused warning for WHATSAPP_NUMBER */}
        <span className="hidden">{WHATSAPP_NUMBER}</span>
      </div>
    </section>
  );
}
