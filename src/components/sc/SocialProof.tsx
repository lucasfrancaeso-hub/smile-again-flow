import { Quote, Star } from "lucide-react";
import { IMAGES } from "@/config/images";

const testimonials = [
  {
    name: "Ana, 23 anos",
    text: "Eu não sorria há muito tempo. Hoje converso, como e rio sem medo. Mudou minha vida.",
  },
  {
    name: "Cláudia, 53 anos",
    text: "A dentadura vivia caindo. Agora tenho dentes fixos — nem lembro mais que um dia usei prótese móvel.",
  },
  {
    name: "João, 47 anos",
    text: "Atendimento humano e cuidadoso. Saí com dentes no mesmo dia, foi melhor do que eu imaginava.",
  },
];

export function SocialProof() {
  return (
    <section className="bg-[var(--brand-tint)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Histórias reais</span>
          <h2 className="mt-4 text-balance font-serif text-3xl text-primary md:text-5xl">
            Pessoas que voltaram a sorrir
          </h2>
        </div>

        {/* Antes e depois placeholder */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {IMAGES.casos.map((caso: any, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-3xl bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
            >
              {caso.combo ? (
                <div className="flex aspect-[5/3] w-full items-center justify-center bg-[var(--brand-tint)]">
                  <img
                    src={caso.combo}
                    alt={`Caso clínico ${idx + 1} - antes e depois do tratamento`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-2">
                  {caso.antes ? (
                    <img
                      src={caso.antes}
                      alt={`Caso clínico ${idx + 1} - antes do tratamento`}
                      className="aspect-square h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="aspect-square bg-gradient-to-br from-muted to-[var(--brand-tint)] p-4 text-center text-xs text-muted-foreground flex flex-col items-center justify-center">
                      <span className="font-semibold text-primary">ANTES</span>
                      <span className="mt-1">[ foto real ]</span>
                    </div>
                  )}
                  {caso.depois ? (
                    <img
                      src={caso.depois}
                      alt={`Caso clínico ${idx + 1} - depois do tratamento`}
                      className="aspect-square h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="aspect-square bg-gradient-hero p-4 text-center text-xs text-white/80 flex flex-col items-center justify-center">
                      <span className="font-semibold text-white">DEPOIS</span>
                      <span className="mt-1">[ foto real ]</span>
                    </div>
                  )}
                </div>
              )}
              <div className="p-5">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Caso clínico {idx + 1}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map(({ name, text }) => (
            <figure key={name} className="rounded-3xl bg-card p-7 shadow-soft">
              <Quote className="h-7 w-7 text-accent" />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">"{text}"</blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-primary">{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
