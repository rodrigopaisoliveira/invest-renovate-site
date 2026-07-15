import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InnovateQuest — Remodelações para Particulares e Investidores" },
      {
        name: "description",
        content:
          "Remodelações chave-na-mão em Portugal. Casas, apartamentos e imóveis de investimento com rigor, prazos cumpridos e acabamentos premium. Peça o seu orçamento.",
      },
      { property: "og:title", content: "InnovateQuest — Remodelações" },
      {
        property: "og:description",
        content:
          "Transformamos espaços em projetos que valorizam. Particulares e investidores.",
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
