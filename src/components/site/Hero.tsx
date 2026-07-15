import hero from "@/assets/hero-renovation.jpg";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Sala de estar remodelada pela InnovateQuest"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Remodelações · Particulares & Investidores
        </span>

        <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Transformamos espaços em <span className="text-primary">projetos que valorizam</span>.
        </h1>

        <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
          Da primeira ideia à entrega final. Remodelamos casas, apartamentos e imóveis
          de investimento com rigor, prazo cumprido e acabamentos premium.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#orcamento"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
          >
            Solicitar Orçamento
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+351000000000"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <Phone className="h-4 w-4" />
            Ligar Agora
          </a>
        </div>

        <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/20 pt-8">
          {[
            { n: "+120", l: "Projetos entregues" },
            { n: "15 anos", l: "De experiência" },
            { n: "100%", l: "Prazos cumpridos" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl font-bold text-white sm:text-3xl">{s.n}</div>
              <div className="mt-1 text-xs text-white/70 sm:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
