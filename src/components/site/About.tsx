import bathroom from "@/assets/sobre-wc.png.asset.json";
import kitchen from "@/assets/sobre-sala.webp.asset.json";
import { Award, Clock, HandHeart, Sparkles } from "lucide-react";

const values = [
  { icon: Award, title: "Garantia e durabilidade", desc: "Apenas marcas de renome e fornecedores de confiança, para acabamentos duradouros e de excelência." },
  { icon: Clock, title: "Orçamentos em 48h", desc: "Respeitamos o seu tempo. Resposta rápida e sincera para iniciar a obra o quanto antes." },
  { icon: HandHeart, title: "Compromisso", desc: "Transparência, organização e comunicação constante do primeiro contacto à entrega." },
  { icon: Sparkles, title: "Inovação em cada detalhe", desc: "10 anos de experiência ao serviço de soluções personalizadas e de alta qualidade." },
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
              <div className="font-display text-3xl font-bold">10+</div>
              <div className="text-xs uppercase tracking-wider opacity-90">Anos de experiência</div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Sobre nós</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-5xl">
              Innovate Quest Lda — <span className="text-primary">a escolha certa</span>.
            </h2>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              A Innovate Quest é uma empresa firmemente inserida no setor da Construção Civil. Com
              uma sólida experiência de 10 anos e especializados na área de Remodelação,
              procuramos fornecer soluções personalizadas e de alta qualidade, tendo sempre em
              consideração a satisfação do cliente.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              Os nossos valores — transparência, compromisso e inovação — asseguram que cada
              projeto é realizado com precisão e um olhar atento aos detalhes.
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
