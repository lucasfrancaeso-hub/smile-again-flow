import { Clock, MapPin } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--brand-soft)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm">
          <Clock className="h-3.5 w-3.5 text-[var(--brand-soft)]" />
          Vagas limitadas por semana
        </span>

        <h2 className="mt-6 text-balance font-serif text-4xl leading-[1.05] md:text-6xl">
          Descubra se você pode ter um
          <span className="italic text-[var(--brand-soft)]"> sorriso fixo </span>
          novamente
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
          Agende uma avaliação sem compromisso e receba um plano personalizado
          para o seu caso.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <WhatsAppButton
            label="Agendar avaliação no WhatsApp"
            size="xl"
            message="Olá! Quero agendar uma avaliação na SC Dental."
          />
          <div className="flex items-center gap-2 text-sm text-white/70">
            <MapPin className="h-4 w-4 text-[var(--brand-soft)]" />
            Centro de Navegantes, SC
          </div>
        </div>
      </div>
    </section>
  );
}