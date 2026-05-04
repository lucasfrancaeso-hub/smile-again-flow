import { Award, GraduationCap, Users } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { IMAGES } from "@/config/images";

const stats = [
  { icon: GraduationCap, value: "+20", label: "anos de experiência" },
  { icon: Users, value: "+1.000", label: "casos realizados" },
  { icon: Award, value: "Especialista", label: "em Implantodontia" },
];

export function Authority() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_1.2fr]">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-hero shadow-elegant">
            {IMAGES.drOrnei ? (
              <img
                src={IMAGES.drOrnei}
                alt="Dr. Ornei, especialista em implantes dentários"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center p-10 text-center text-primary-foreground">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                  <span className="font-serif text-4xl">DO</span>
                </div>
                <p className="mt-6 font-serif text-2xl">Dr. Ornei</p>
                <p className="text-sm text-white/70">
                  [ Espaço reservado para foto profissional ]
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Quem vai te atender
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl text-primary md:text-5xl">
            Dr. Ornei — Especialista em Implantes
          </h2>
          <p className="mt-5 text-balance text-lg text-muted-foreground">
            Você será atendido por um especialista experiente, com histórico
            comprovado de resultados e foco total em devolver qualidade de vida
            aos pacientes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft"
              >
                <Icon className="mx-auto h-6 w-6 text-accent" />
                <div className="mt-2 font-serif text-2xl text-primary">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <WhatsAppButton
              label="Falar com a equipe do Dr. Ornei"
              variant="primary"
              message="Olá! Gostaria de falar com a equipe do Dr. Ornei sobre implantes."
            />
          </div>
        </div>
      </div>
    </section>
  );
}