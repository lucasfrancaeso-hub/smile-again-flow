import { Frown, AlertCircle, EyeOff, Clock } from "lucide-react";

const pains = [
  { icon: AlertCircle, text: "Medo da dentadura soltar na hora errada" },
  { icon: Frown, text: "Dificuldade para mastigar o que gosta" },
  { icon: EyeOff, text: "Vergonha de sorrir em fotos e em público" },
  { icon: Clock, text: "Sensação de envelhecimento precoce no rosto" },
];

export function PainSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Você não está sozinho
        </span>
        <h2 className="mt-4 text-balance font-serif text-3xl text-primary md:text-5xl">
          Você evita sorrir em fotos?
        </h2>
        <p className="mt-5 text-balance text-lg text-muted-foreground">
          Já passou vergonha com a dentadura? Sente insegurança ao falar ou
          comer em público? Esses sentimentos são mais comuns do que você
          imagina — e têm solução.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {pains.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 text-left shadow-soft transition-smooth hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-tint)] text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="pt-1.5 text-[15px] text-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}