import kitchen from "@/assets/project-kitchen.jpg";
import investor from "@/assets/project-investor.jpg";
import servico1 from "@/assets/servico-1.jpg.asset.json";
import servico2 from "@/assets/servico-2.jpg.asset.json";
import servico3 from "@/assets/servico-3.jpg.asset.json";
import { Check, Home, Building2 } from "lucide-react";

const particulares = [
  "Remodelação total de habitações",
  "Cozinhas e casas de banho",
  "Pinturas, pavimentos e tetos",
  "Canalizações e eletricidade",
  "Design de interiores",
];

const investidores = [
  "Reabilitação de imóveis para arrendamento",
  "Otimização de custo por m²",
  "Gestão chave-na-mão com prazos garantidos",
  "Preparação para revenda e valorização",
  "Divisão de espaços e alojamento local",
];

export function Services() {
  return (
    <section id="servicos" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Serviços</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-5xl">
            Soluções pensadas para si
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Trabalhamos com duas realidades distintas — e adaptamos o processo, os materiais e a
            gestão do projeto a cada uma delas.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Particulares */}
          <article className="group overflow-hidden rounded-3xl bg-card shadow-card transition-transform hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <img
                src={kitchen}
                alt="Cozinha remodelada"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-primary-dark backdrop-blur">
                <Home className="h-3.5 w-3.5" />
                Particulares
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold text-foreground">A sua casa, como sempre imaginou</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Do pequeno arranjo à remodelação integral. Acompanhamos cada detalhe para tornar o
                seu espaço mais funcional, confortável e à sua imagem.
              </p>
              <ul className="mt-6 space-y-3">
                {particulares.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href="#orcamento"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Pedir orçamento →
              </a>
            </div>
          </article>

          {/* Investidores */}
          <article className="group overflow-hidden rounded-3xl bg-primary-dark text-white shadow-soft transition-transform hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <img
                src={investor}
                alt="Prédio remodelado para investimento"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                <Building2 className="h-3.5 w-3.5" />
                Investidores
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold">Máxima rentabilidade por m² intervencionado</h3>
              <p className="mt-3 text-sm text-white/70">
                Pensado para quem compra, remodela e coloca no mercado. Prazos apertados,
                orçamentos claros e uma equipa que fala a sua linguagem.
              </p>
              <ul className="mt-6 space-y-3">
                {investidores.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-white/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href="#orcamento"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white"
              >
                Falar sobre o meu projeto →
              </a>
            </div>
          </article>
        </div>

        {/* mini gallery strip */}
        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6">
          {[servico1.url, servico2.url, servico3.url].map((img, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={img}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
