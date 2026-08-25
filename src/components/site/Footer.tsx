import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import logoAsset from "@/assets/innovate-quest-logo-white.png.asset.json";
import { EMAIL, INSTAGRAM, LOCATION, PHONE_NUMBERS, PHONE_NUMBER, whatsappUrl } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#inicio" className="inline-flex items-center">
              <img
                src={logoAsset.url}
                alt="Innovate Quest Home Expert"
                className="h-14 w-auto"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Há mais de 10 anos a renovar espaços em Grande Lisboa. Rigor, prazo e um acabamento
              à altura do seu projeto — de particulares a investidores.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-primary" /> {LOCATION}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Navegação
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><a href="#inicio" className="transition-colors hover:text-primary">Início</a></li>
              <li><a href="#servicos" className="transition-colors hover:text-primary">Serviços</a></li>
              <li><a href="#galeria" className="transition-colors hover:text-primary">Galeria</a></li>
              <li><a href="#sobre" className="transition-colors hover:text-primary">Sobre nós</a></li>
              <li><a href="#contacto" className="transition-colors hover:text-primary">Contactos</a></li>
              <li><a href="#orcamento" className="transition-colors hover:text-primary">Pedir Orçamento</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Contactos
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl("Olá!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 transition-colors group-hover:bg-white/10">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  <span>WhatsApp — {PHONE_NUMBER.display}</span>
                </a>
              </li>
              {PHONE_NUMBERS.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 transition-colors group-hover:bg-white/10">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>{p.display} — {p.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 transition-colors group-hover:bg-white/10">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 transition-colors group-hover:bg-white/10">
                    <Instagram className="h-4 w-4" />
                  </span>
                  <span>@innovate_quest</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Innovate Quest Lda. Todos os direitos reservados.</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Feito com rigor · Grande Lisboa, Portugal
          </span>
        </div>
      </div>
    </footer>
  );
}
