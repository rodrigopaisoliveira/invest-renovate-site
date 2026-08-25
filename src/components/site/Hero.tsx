import hero from "@/assets/hero-renovation.jpg";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_NUMBERS } from "@/lib/contact";

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

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-28 pb-24 sm:px-6 sm:pt-32 sm:pb-28 lg:px-8 lg:pb-32">
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur sm:mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Innovate Quest Lda · Remodelações
        </span>

        <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Construímos Conforto. <span className="text-primary">Remodelamos com Inovação</span>.
        </h1>

        <p className="mt-4 max-w-xl text-base text-white/85 sm:mt-6 sm:text-lg">
          Há mais de 10 anos a renovar espaços em toda a Grande Lisboa. Garantia,
          durabilidade e orçamentos em 48 horas.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
          <a
            href="#orcamento"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
          >
            Pedir Orçamento
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/20 pt-6 sm:mt-12 sm:pt-8">
          {[
            { n: "10+", l: "Anos de experiência" },
            { n: "48h", l: "Resposta ao orçamento" },
            { n: "100%", l: "Compromisso e garantia" },
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
