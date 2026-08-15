import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import antes from "@/assets/ANTES.jpg.asset.json";
import antes1 from "@/assets/ANTES1.jpg.asset.json";
import antes2 from "@/assets/ANTES2.jpg.asset.json";
import antess from "@/assets/ANTESS.jpg.asset.json";
import antess1 from "@/assets/ANTESS1.jpg.asset.json";
import depois from "@/assets/DEPOIS.webp.asset.json";
import depois1 from "@/assets/DEPOIS1.jpg.asset.json";
import depois2 from "@/assets/DEPOIS2.jpg.asset.json";
import depoiss from "@/assets/DEPOISS.jpg.asset.json";
import depoiss1 from "@/assets/DEPOISS1.jpg.asset.json";

export const ONEDRIVE_GALLERY_URL = "#"; // Substituir pelo link de partilha do OneDrive

type Pair = {
  title: string;
  before: { src: string; alt: string }[];
  after: { src: string; alt: string }[];
};

type Project = { name: string; pairs: Pair[] };

const projects: Project[] = [
  {
    name: "Remodelação total — apartamento",
    pairs: [
      {
        title: "Sala e cozinha em open space",
        before: [{ src: antes.url, alt: "Sala antes da remodelação, com instalação elétrica à vista" }],
        after: [{ src: depois.url, alt: "Sala e cozinha depois da remodelação, com móvel de TV em pladur" }],
      },
      {
        title: "Casa de banho social",
        before: [{ src: antes1.url, alt: "Casa de banho antes da remodelação, com azulejo antigo" }],
        after: [{ src: depois1.url, alt: "Casa de banho depois da remodelação, com cerâmico efeito mármore" }],
      },
      {
        title: "Casa de banho suite",
        before: [{ src: antes2.url, alt: "Casa de banho em obra, durante a colocação de cerâmico" }],
        after: [{ src: depois2.url, alt: "Casa de banho depois da remodelação, com base de duche e sanita suspensa" }],
      },
    ],
  },
  {
    name: "Remodelação de sala e WC",
    pairs: [
      {
        title: "Móvel de TV em pladur com iluminação LED",
        before: [{ src: antess.url, alt: "Estrutura em pladur do móvel de TV durante a obra" }],
        after: [{ src: depoiss.url, alt: "Móvel de TV em pladur acabado, com nichos e iluminação LED" }],
      },
      {
        title: "Casa de banho completa",
        before: [{ src: antess1.url, alt: "Casa de banho antiga antes da intervenção" }],
        after: [{ src: depoiss1.url, alt: "Casa de banho depois da remodelação, com duche e espelho retroiluminado" }],
      },
    ],
  },
];

const allImages = projects.flatMap((project) =>
  project.pairs.flatMap((pair) => [
    ...pair.before.map((img) => ({ ...img, label: "Antes" })),
    ...pair.after.map((img) => ({ ...img, label: "Depois" })),
  ]),
);

const indexOf = (src: string) => allImages.findIndex((img) => img.src === src);

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (src: string) => {
    setIndex(Math.max(0, indexOf(src)));
    setOpen(true);
  };

  const next = useCallback(() => setIndex((i) => (i + 1) % allImages.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + allImages.length) % allImages.length), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev]);

  const renderGroup = (
    images: { src: string; alt: string }[],
    label: "Antes" | "Depois",
  ) => (
    <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${images.length}, minmax(0, 1fr))` }}>
      {images.map((img) => (
        <button
          key={img.src}
          onClick={() => openAt(img.src)}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={
              label === "Antes"
                ? "absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
                : "absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground"
            }
          >
            {label}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <section id="galeria" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Galeria</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-5xl">
            Antes e depois
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Projetos reais executados pela nossa equipa. Aqui vê a diferença que faz uma
            remodelação pensada ao pormenor.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {projects.map((project) => (
            <div key={project.name}>
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                {project.name}
              </h3>
              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                {project.pairs.map((pair) => (
                  <div
                    key={pair.title}
                    className="overflow-hidden rounded-3xl bg-card p-4 shadow-card transition-transform hover:-translate-y-1"
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      {renderGroup(pair.before, "Antes")}
                      {renderGroup(pair.after, "Depois")}
                    </div>
                    <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
                      {pair.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-secondary px-6 py-10 text-center sm:px-12">
          <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Quer ver mais projetos?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Temos fotografias e vídeos organizados por tipo de obra e cliente na nossa pasta
            partilhada. Explore o arquivo completo.
          </p>
          <a
            href={ONEDRIVE_GALLERY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
          >
            Ver galeria completa no OneDrive
            <ExternalLink className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            (link será atualizado assim que nos enviar o URL de partilha do OneDrive)
          </p>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl border-none bg-black/90 p-0 text-white">
          <DialogTitle className="sr-only">Visualização da galeria</DialogTitle>
          <div className="relative flex h-[80vh] items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <img
              src={allImages[index].src}
              alt={allImages[index].alt}
              className="max-h-full max-w-full rounded-lg object-contain"
            />
            <span className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              {allImages[index].label} — {index + 1} / {allImages.length}
            </span>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Imagem seguinte"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
