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
          "Recupere sua autoestima com implantes dentários e prótese protocolo no centro de Navegantes, SC. Dr. Ornei: +20 anos de experiência. Agende sua avaliação.",
      },
      { property: "og:title", content: "SC Dental — Volte a sorrir sem dentadura em Navegantes" },
      {
        property: "og:description",
        content:
          "Tratamento especializado em implantes fixos e prótese protocolo por especialista com +20 anos de experiência em Navegantes, SC.",
      },
      { property: "og:url", content: "https://scdental.lovable.app" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://scdental.lovable.app" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "SC Dental - Sorriso Catarinense",
          "image": "https://scdental.lovable.app/imagens/logo.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Centro",
            "addressLocality": "Navegantes",
            "addressRegion": "SC",
            "addressCountry": "BR"
          },
          "telephone": "+5547992055840",
          "url": "https://scdental.lovable.app"
        }),
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
