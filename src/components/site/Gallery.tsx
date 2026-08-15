import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Instagram } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import antes from "@/assets/ANTES.jpg.asset.json";
import antes1 from "@/assets/ANTES1.jpg.asset.json";
import antes2 from "@/assets/ANTES2.jpg.asset.json";
import antess from "@/assets/ANTESS.jpg.asset.json";
import depois from "@/assets/DEPOIS.webp.asset.json";
import depois1 from "@/assets/DEPOIS1.jpg.asset.json";
import depois2 from "@/assets/DEPOIS2.jpg.asset.json";
import depoiss from "@/assets/DEPOISS.jpg.asset.json";
import novo from "@/assets/IMG_6776_1.png.asset.json";
import novo from "@/assets/IMG_6776_1.png.asset.json";

export const GALLERY_URL =
  "https://drive.google.com/drive/folders/1ij9ru4r5ifwchI3IOFqhS5AvY77O36rp?usp=sharing";

type Pair = {
  title: string;
  before: { src: string; alt: string }[];
  after: { src: string; alt: string }[];
};

const pairs: Pair[] = [
  {
    title: "Remodelação total — sala e cozinha em open space",
    before: [{ src: antes.url, alt: "Sala antes da remodelação, com instalação elétrica à vista" }],
    after: [{ src: depois.url, alt: "Sala e cozinha depois da remodelação, com móvel de TV em pladur" }],
  },
  {
    title: "Remodelação total — casa de banho social",
    before: [{ src: antes1.url, alt: "Casa de banho antes da remodelação, com azulejo antigo" }],
    after: [{ src: depois1.url, alt: "Casa de banho depois da remodelação, com cerâmico efeito mármore" }],
  },
  {
    title: "Remodelação total — casa de banho suite",
    before: [{ src: antes2.url, alt: "Casa de banho em obra, durante a colocação de cerâmico" }],
    after: [{ src: depois2.url, alt: "Casa de banho depois da remodelação, com base de duche e sanita suspensa" }],
  },
  {
    title: "Sala — móvel de TV em pladur com iluminação LED",
    before: [{ src: antess.url, alt: "Estrutura em pladur do móvel de TV durante a obra" }],
    after: [{ src: depoiss.url, alt: "Móvel de TV em pladur acabado, com nichos e iluminação LED" }],
  },
  {
    title: "Sala e cozinha — open space renovado",
    before: [{ src: novo.url, alt: "Sala e cozinha em open space antes da remodelação" }],
    after: [{ src: novo.url, alt: "Sala e cozinha em open space depois da remodelação, com cozinha em tons de teal" }],
  },
];

const allImages = pairs.flatMap((pair) => [
  ...pair.before.map((img) => ({ ...img, label: "Antes", title: pair.title })),
  ...pair.after.map((img) => ({ ...img, label: "Depois", title: pair.title })),
]);

const indexOf = (src: string) => allImages.findIndex((img) => img.src === src);

function ImageCard({
  img,
  label,
  onClick,
  eager = false,
}: {
  img: { src: string; alt: string };
  label: "Antes" | "Depois";
  onClick: () => void;
  eager?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <img
        src={img.src}
        alt={img.alt}
        loading={eager ? "eager" : "lazy"}
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
  );
}

export function Gallery() {
  const [slide, setSlide] = useState(0);
  const total = pairs.length + 1;

  const next = useCallback(() => setSlide((s) => (s + 1) % total), [total]);
  const prev = useCallback(() => setSlide((s) => (s - 1 + total) % total), [total]);

  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openAt = (src: string) => {
    setLightboxIndex(Math.max(0, indexOf(src)));
    setOpen(true);
  };

  const nextLightbox = useCallback(
    () => setLightboxIndex((i) => (i + 1) % allImages.length),
    [],
  );
  const prevLightbox = useCallback(
    () => setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, nextLightbox, prevLightbox]);

  const currentPair = pairs[slide];

  return (
    <section id="galeria" className="bg-accent py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Galeria</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Antes e depois
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Projetos reais executados pela nossa equipa. Veja a diferença que faz uma remodelação
            pensada ao pormenor.
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="rounded-3xl bg-background p-4 shadow-card sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                Projetos recentes
              </h3>
              <div className="flex items-center gap-1">
                <button
                  onClick={prev}
                  className="rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Seguinte"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative mt-4 overflow-hidden">
              <div
                className="flex items-start transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                {pairs.map((pair, i) => (
                  <div key={pair.title} className="w-full shrink-0">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <ImageCard
                        img={pair.before[0]}
                        label="Antes"
                        onClick={() => openAt(pair.before[0].src)}
                        eager={i === 0}
                      />
                      <ImageCard
                        img={pair.after[0]}
                        label="Depois"
                        onClick={() => openAt(pair.after[0].src)}
                        eager={i === 0}
                      />
                    </div>
                    <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
                      {pair.title}
                    </p>
                  </div>
                ))}
                <div className="w-full shrink-0">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href={GALLERY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-accent p-6 text-center transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <div className="rounded-full bg-primary p-2.5 text-primary-foreground">
                        <ExternalLink className="h-5 w-5" />
                      </div>
                      <span className="font-display text-base font-semibold text-foreground">
                        Ver mais fotos
                      </span>
                      <span className="text-sm text-muted-foreground">Abrir galeria no Google Drive</span>
                    </a>
                    <a
                      href="https://www.instagram.com/innovate_quest/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-accent p-6 text-center transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <div className="rounded-full bg-primary p-2.5 text-primary-foreground">
                        <Instagram className="h-5 w-5" />
                      </div>
                      <span className="font-display text-base font-semibold text-foreground">
                        Ver no Instagram
                      </span>
                      <span className="text-sm text-muted-foreground">@innovate_quest</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex justify-center gap-2">
                {Array.from({ length: total }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-ring ${
                      i === slide ? "w-6 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Ir para slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <a
              href={GALLERY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Ver galeria completa
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl border-none bg-black/90 p-0 text-white">
          <DialogTitle className="sr-only">Visualização da galeria</DialogTitle>
          <div className="relative flex h-[80vh] items-center justify-center">
            <button
              onClick={prevLightbox}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <img
              src={allImages[lightboxIndex].src}
              alt={allImages[lightboxIndex].alt}
              className="max-h-full max-w-full rounded-lg object-contain"
            />
            <span className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              {allImages[lightboxIndex].label} — {lightboxIndex + 1} / {allImages.length}
            </span>
            <button
              onClick={nextLightbox}
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
