import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Implante dói?",
    a: "Não. O procedimento é feito com anestesia local e técnicas modernas — a maioria dos pacientes relata desconforto bem menor do que esperavam. O pós-operatório é tranquilo e acompanhado de perto pela equipe.",
  },
  {
    q: "É só para pessoas mais velhas?",
    a: "Não. Implantes são indicados para qualquer adulto que perdeu um, vários ou todos os dentes — independentemente da idade. Cada caso é avaliado individualmente.",
  },
  {
    q: "Vou ficar sem dente durante o tratamento?",
    a: "Não. Em muitos casos é possível usar carga imediata — você sai do consultório com dentes fixos no mesmo dia. Em outros, usamos uma prótese provisória durante a cicatrização.",
  },
  {
    q: "Quanto tempo dura o tratamento?",
    a: "Depende do caso. A avaliação inicial define o melhor plano para você, com etapas e prazos claros desde o primeiro dia.",
  },
  {
    q: "E se eu já uso dentadura há muitos anos?",
    a: "Mesmo quem usa dentadura há muito tempo pode fazer implantes. Existem técnicas específicas para esses casos — só uma avaliação pode confirmar.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-gradient-soft py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Tire suas dúvidas
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl text-primary md:text-5xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={cn(
                  "rounded-2xl border bg-card transition-smooth",
                  isOpen ? "border-accent/50 shadow-soft" : "border-border",
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-serif text-lg text-primary">{f.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-tint)] text-primary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-[15px] leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}