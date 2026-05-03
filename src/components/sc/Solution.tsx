import { Smile, Anchor, Heart } from "lucide-react";

export function Solution() {
  return (
    <section className="bg-gradient-soft py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            A solução
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl text-primary md:text-5xl">
            Dentes fixos novamente — sem dentadura
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted-foreground">
            Com a <strong className="text-foreground">prótese protocolo sobre implantes</strong>,
            você volta a ter dentes fixos no lugar, com aparência natural e
            segurança no dia a dia. Nada de cola, nada de tirar para dormir.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Anchor,
              title: "Fixo de verdade",
              text: "Os dentes ficam parafusados sobre implantes — não saem, não se mexem.",
            },
            {
              icon: Smile,
              title: "Aparência natural",
              text: "Formato, cor e brilho pensados para ficarem como dentes reais.",
            },
            {
              icon: Heart,
              title: "Confiança no dia a dia",
              text: "Coma, fale e sorria sem medo — como antes de perder os dentes.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-primary">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}