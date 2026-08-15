import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import before1 from "@/assets/hero-renovation.jpg";
import after1 from "@/assets/project-kitchen.jpg";
import before2 from "@/assets/project-bathroom.jpg";
import after2 from "@/assets/project-investor.jpg";

export const ONEDRIVE_GALLERY_URL = "#"; // Substituir pelo link de partilha do OneDrive

const pairs = [
  {
    before: before1,
    after: after1,
    title: "Cozinha remodelada",
    beforeAlt: "Cozinha antes da remodelação",
    afterAlt: "Cozinha depois da remodelação pela Innovate Quest",
  },
  {
    before: before2,
    after: after2,
    title: "Casa de banho e imóvel de investimento",
    beforeAlt: "Casa de banho antes da intervenção",
    afterAlt: "Imóvel preparado para investimento",
  },
];

const allImages = pairs.flatMap((p) => [
  { src: p.before, alt: p.beforeAlt, label: "Antes" },
  { src: p.after, alt: p.afterAlt, label: "Depois" },
]);

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % allImages.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + allImages.length) % allImages.length);
  }, []);

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

  return (
    <section id="galeria" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Galeria</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-5xl">
            Antes e depois
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Alguns dos projetos que realizámos. Aqui vê a diferença que faz uma remodelação
            pensada ao pormenor.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {pairs.map((pair, pairIdx) => (
            <div
              key={pairIdx}
              className="overflow-hidden rounded-3xl bg-card p-4 shadow-card transition-transform hover:-translate-y-1"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() => openAt(pairIdx * 2)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <img
                    src={pair.before}
                    alt={pair.beforeAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    Antes
                  </span>
                </button>
                <button
                  onClick={() => openAt(pairIdx * 2 + 1)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <img
                    src={pair.after}
                    alt={pair.afterAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Depois
                  </span>
                </button>
              </div>
              <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
                {pair.title}
              </p>
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
