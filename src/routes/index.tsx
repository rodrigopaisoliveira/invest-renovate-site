import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Innovate Quest — Remodelações na Grande Lisboa" },
      {
        name: "description",
        content:
          "Innovate Quest Lda — remodelações de cozinhas, WCs e habitações completas na Grande Lisboa. Orçamentos em 48h, garantia e durabilidade.",
      },
      { property: "og:title", content: "Innovate Quest — Remodelações" },
      {
        property: "og:description",
        content:
          "Construímos conforto. Remodelamos com inovação. 10+ anos de experiência na Grande Lisboa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
        <QuoteForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" richColors />
    </div>
  );
}
