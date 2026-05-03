import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const WHATSAPP_NUMBER = "5547933897398";
export const WHATSAPP_DEFAULT_MSG =
  "Olá! Vim pelo site da SC Dental e gostaria de saber se posso fazer o tratamento com implantes.";

export function buildWhatsAppLink(message: string = WHATSAPP_DEFAULT_MSG) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type Props = {
  label?: string;
  message?: string;
  className?: string;
  size?: "default" | "lg" | "xl";
  variant?: "whatsapp" | "primary" | "outline";
};

export function WhatsAppButton({
  label = "Quero saber se posso fazer",
  message,
  className,
  size = "lg",
  variant = "whatsapp",
}: Props) {
  const sizes: Record<string, string> = {
    default: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
    xl: "px-9 py-5 text-lg",
  };
  const variants: Record<string, string> = {
    whatsapp:
      "bg-[var(--whatsapp)] text-white hover:brightness-110 shadow-elegant",
    primary:
      "bg-primary text-primary-foreground hover:bg-[var(--brand-deep)] shadow-elegant",
    outline:
      "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground",
  };
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-smooth hover:-translate-y-0.5",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
      {label}
    </a>
  );
}