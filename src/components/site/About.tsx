import bathroom from "@/assets/project-bathroom.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import { Award, Clock, HandHeart, Sparkles } from "lucide-react";

const values = [
  { icon: Award, title: "Qualidade acima de tudo", desc: "Materiais certificados e acabamentos irrepreensíveis." },
  { icon: Clock, title: "Prazos que se cumprem", desc: "Cronograma claro e comunicação constante." },
  { icon: HandHeart, title: "Relação de confiança", desc: "Transparência total do orçamento à entrega." },
  { icon: Sparkles, title: "Detalhe em cada projeto", desc: "Cuidamos do que faz a diferença no dia-a-dia." },
];

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={bathroom}
                alt="Trabalho de remodelação"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-3xl object-cover shadow-card"
              />
              <img
                src={kitchen}
                alt="Cozinha finalizada"
                loading="lazy"
                className="mt-12 aspect-[3/4] w-full rounded-3xl object-cover shadow-card"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-soft sm:block">
              <div className="font-display text-3xl font-bold">15+</div>
              <div className="text-xs uppercase tracking-wider opacity-90">Anos de obra</div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Sobre nós</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-5xl">
              Uma equipa que <span className="text-primary">constrói com propósito</span>.
            </h2>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              A InnovateQuest nasceu para dar resposta a quem procura mais do que uma obra: procura
              parceiros. Combinamos experiência técnica com uma abordagem próxima, seja para
              renovar a casa da família ou para valorizar um imóvel de investimento.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              Cada projeto começa com escuta e termina com um espaço à altura da expectativa. Sem
              surpresas, sem prazos elásticos.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary-dark">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
