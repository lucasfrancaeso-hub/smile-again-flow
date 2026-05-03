import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "./WhatsAppButton";

export function StickyWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-white shadow-elegant transition-smooth hover:scale-110 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--whatsapp)] opacity-30" />
    </a>
  );
}