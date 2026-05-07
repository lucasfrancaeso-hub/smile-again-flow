import { Phone } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#hero" className="flex items-center gap-2.5">
          <img
            src="/imagens/logo.jpg"
            alt="Logo SC Dental"
            className="h-10 w-10 rounded-xl object-cover"
          />
          <div className="leading-tight">
            <div className="font-serif text-lg text-primary">SC Dental</div>
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Implantes • Navegantes
            </div>
          </div>
        </a>
        <div className="hidden items-center gap-2 text-sm text-muted-foreground md:flex">
          <Phone className="h-4 w-4 text-accent" />
          (47) 93389-7398
        </div>
        <WhatsAppButton label="Agendar avaliação" size="default" />
      </div>
    </header>
  );
}