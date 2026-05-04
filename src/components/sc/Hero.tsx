import { Check, ShieldCheck, Sparkles, Smile } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { IMAGES } from "@/config/images";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-hero text-primary-foreground"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-[var(--brand-soft)] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[var(--brand-soft)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div className="animate-float-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-soft)]" />
            Especialista com +20 anos de experiência
          </div>

          <h1 className="text-balance font-serif text-4xl leading-[1.05] md:text-6xl">
            Volte a sorrir com segurança
            <span className="italic text-[var(--brand-soft)]"> e sem dentadura</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
            Tratamento com implantes dentários fixos, realizado por especialista
            com mais de 20 anos de experiência — em Navegantes, SC.
          </p>

          <ul className="mt-7 space-y-3 text-[15px]">
            {[
              "Adeus dentadura solta",
              "Volte a mastigar com confiança",
              "Sorriso fixo e natural",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-soft)]/20 ring-1 ring-[var(--brand-soft)]/40">
                  <Check className="h-3.5 w-3.5 text-[var(--brand-soft)]" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton size="xl" />
            <div className="flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4 text-[var(--brand-soft)]" />
              Avaliação sem compromisso
            </div>
          </div>
        </div>

        {/* Visual placeholder */}
        <div className="relative animate-float-up [animation-delay:120ms]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-elegant backdrop-blur-sm">
            {IMAGES.hero ? (
              <img
                src={IMAGES.hero}
                alt="Paciente sorrindo após tratamento de implantes na SC Dental"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                  <Smile className="h-20 w-20 text-[var(--brand-soft)]" strokeWidth={1.4} />
                  <p className="font-serif text-2xl text-white">Seu novo sorriso</p>
                  <p className="text-sm text-white/70">
                    [ Espaço reservado para foto real do paciente / antes e depois ]
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-background p-4 shadow-elegant md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <div className="font-serif text-2xl text-primary">+1.000</div>
                <div className="text-xs text-muted-foreground">casos realizados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}