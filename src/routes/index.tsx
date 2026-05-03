import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sc/Header";
import { Hero } from "@/components/sc/Hero";
import { PainSection } from "@/components/sc/PainSection";
import { Solution } from "@/components/sc/Solution";
import { Authority } from "@/components/sc/Authority";
import { SocialProof } from "@/components/sc/SocialProof";
import { Differentials } from "@/components/sc/Differentials";
import { FAQ } from "@/components/sc/FAQ";
import { LeadFilter } from "@/components/sc/LeadFilter";
import { FinalCTA } from "@/components/sc/FinalCTA";
import { Footer } from "@/components/sc/Footer";
import { StickyWhatsApp } from "@/components/sc/StickyWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SC Dental — Implantes em Navegantes, SC | Volte a Sorrir" },
      {
        name: "description",
        content:
          "Implantes dentários fixos e prótese protocolo em Navegantes, SC. Especialista com +20 anos de experiência. Agende sua avaliação no WhatsApp.",
      },
      { property: "og:title", content: "SC Dental — Volte a sorrir sem dentadura" },
      {
        property: "og:description",
        content:
          "Tratamento com implantes fixos por especialista com +20 anos de experiência em Navegantes, SC.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PainSection />
        <Solution />
        <Authority />
        <SocialProof />
        <Differentials />
        <FAQ />
        <LeadFilter />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
