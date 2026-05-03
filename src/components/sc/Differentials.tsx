import { Zap, CalendarClock, MapPin, CreditCard } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Carga imediata",
    text: "Em alguns casos, você já sai com dentes fixos no mesmo dia da cirurgia.",
  },
  {
    icon: CalendarClock,
    title: "Atendimento rápido",
    text: "Avaliação ágil e plano de tratamento personalizado já na primeira consulta.",
  },
  {
    icon: MapPin,
    title: "Localização central",
    text: "Centro de Navegantes — fácil acesso para Itajaí e Balneário Camboriú.",
  },
  {
    icon: CreditCard,
    title: "Facilidade de pagamento",
    text: "Parcelamento e financiamento via DentalCred para caber no seu orçamento.",
  },
];

export function Differentials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Por que a SC Dental
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl text-primary md:text-5xl">
            Cuidado próximo, resultado de excelência
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:border-accent/50 hover:shadow-elegant"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-tint)] text-primary transition-smooth group-hover:bg-gradient-hero group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}