import { MapPin, Phone, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="bg-[var(--brand-deep)] py-12 text-primary-foreground/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 font-serif text-lg text-white">
              SC
            </div>
            <span className="font-serif text-xl text-white">SC Dental</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Especialistas em implantes dentários e prótese protocolo —
            devolvendo sorrisos com segurança.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-serif text-base text-white">Contato</h4>
          <ul className="mt-3 space-y-2.5">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 text-[var(--brand-soft)]" />
              (47) 99205-5840
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 h-4 w-4 text-[var(--brand-soft)]" />
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Falar no WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 text-[var(--brand-soft)]" />
              Centro de Navegantes, SC
            </li>
          </ul>
        </div>

        <div className="text-xs leading-relaxed text-primary-foreground/60">
          <h4 className="font-serif text-base text-white">Informações</h4>
          <p className="mt-3">
            Resultados podem variar de acordo com cada caso. Tratamento
            realizado conforme as boas práticas do CRO — Conselho Regional de
            Odontologia.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-5 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} SC Dental. Todos os direitos reservados.
      </div>
    </footer>
  );
}