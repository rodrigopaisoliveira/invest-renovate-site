import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import logoAsset from "@/assets/innovate-quest-logo-white.png.asset.json";
import { EMAIL, INSTAGRAM, LOCATION, PHONE_NUMBER, whatsappUrl } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center">
              <img
                src={logoAsset.url}
                alt="Innovate Quest Home Expert"
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Remodelações para particulares e investidores. Rigor, prazo e um acabamento à altura
              do seu projeto.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/60">
              <MapPin className="h-4 w-4 text-primary" /> {LOCATION}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Links úteis
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-primary">Início</a></li>
              <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-primary">Galeria</a></li>
              <li><a href="#sobre" className="hover:text-primary">Sobre nós</a></li>
              <li><a href="#contacto" className="hover:text-primary">Contactos</a></li>
              <li><a href="#orcamento" className="hover:text-primary">Pedir Orçamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contactos
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={whatsappUrl("Olá!")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_NUMBER.tel}`} className="inline-flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4" /> {PHONE_NUMBER.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-primary">
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Innovate Quest Lda. Todos os direitos reservados.</span>
          <span>Feito com rigor · Grande Lisboa, Portugal</span>
        </div>
      </div>
    </footer>
  );
}
