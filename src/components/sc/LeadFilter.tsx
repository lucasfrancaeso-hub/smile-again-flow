import { useMemo, useState } from "react";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppLink } from "./WhatsAppButton";

const questions = [
  "Você usa dentadura ou perdeu dentes?",
  "Está buscando uma solução fixa (sem prótese móvel)?",
  "Está disposto a investir em um tratamento definitivo?",
];

export function LeadFilter() {
  const [answers, setAnswers] = useState<(boolean | null)[]>([null, null, null]);

  const allAnswered = answers.every((a) => a !== null);
  const qualified = answers.every((a) => a === true);

  const message = useMemo(() => {
    const labels = ["Perdi dentes / uso dentadura", "Quero solução fixa", "Pronto para investir"];
    const yes = answers
      .map((a, i) => (a ? `✓ ${labels[i]}` : null))
      .filter(Boolean)
      .join("\n");
    return `Olá! Vim pelo site da SC Dental.\n\nMinhas respostas:\n${yes}\n\nGostaria de agendar uma avaliação.`;
  }, [answers]);

  function setAnswer(i: number, value: boolean) {
    setAnswers((prev) => prev.map((a, idx) => (idx === i ? value : a)));
  }

  return (
    <section id="agendar" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Antes de continuar
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl text-primary md:text-5xl">
            Veja se o tratamento é para você
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Responda 3 perguntas rápidas para falarmos com você de forma
            personalizada.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-elegant md:p-10">
          <div className="space-y-6">
            {questions.map((q, i) => (
              <div key={q} className="rounded-2xl bg-[var(--brand-tint)]/60 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 font-medium text-foreground">{q}</p>
                </div>
                <div className="mt-4 flex gap-3 pl-10">
                  {[
                    { label: "Sim", value: true },
                    { label: "Não", value: false },
                  ].map((opt) => {
                    const active = answers[i] === opt.value;
                    return (
                      <button
                        key={opt.label}
                        onClick={() => setAnswer(i, opt.value)}
                        className={cn(
                          "flex-1 rounded-full border px-5 py-2.5 text-sm font-semibold transition-smooth sm:flex-none sm:px-8",
                          active
                            ? "border-primary bg-primary text-primary-foreground shadow-soft"
                            : "border-border bg-card text-foreground hover:border-accent",
                        )}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-border pt-8">
            {!allAnswered && (
              <p className="text-center text-sm text-muted-foreground">
                Responda as 3 perguntas para liberar o agendamento
                <ArrowRight className="ml-1 inline h-4 w-4" />
              </p>
            )}

            {allAnswered && qualified && (
              <div className="text-center animate-float-up">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--whatsapp)]/15 text-[var(--whatsapp)]">
                  <Check className="h-6 w-6" strokeWidth={3} />
                </div>
                <p className="font-serif text-2xl text-primary">
                  Você é um excelente candidato!
                </p>
                <p className="mt-2 text-muted-foreground">
                  Fale agora com nossa equipe pelo WhatsApp.
                </p>
                <a
                  href={buildWhatsAppLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-9 py-4 text-base font-semibold text-white shadow-elegant transition-smooth hover:-translate-y-0.5 hover:brightness-110"
                >
                  <MessageCircle className="h-5 w-5" />
                  Agendar avaliação no WhatsApp
                </a>
              </div>
            )}

            {allAnswered && !qualified && (
              <div className="text-center animate-float-up">
                <p className="font-serif text-2xl text-primary">
                  Vamos conversar mesmo assim
                </p>
                <p className="mx-auto mt-2 max-w-md text-muted-foreground">
                  Cada caso é único — nossa equipe pode te orientar sobre
                  alternativas e opções de financiamento.
                </p>
                <a
                  href={buildWhatsAppLink(
                    "Olá! Vim pelo site da SC Dental e gostaria de tirar dúvidas sobre o tratamento.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-base font-semibold text-primary transition-smooth hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="h-5 w-5" />
                  Tirar dúvidas no WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Avaliação sem compromisso • Atendimento humanizado • Sigilo profissional
        </p>
      </div>
    </section>
  );
}