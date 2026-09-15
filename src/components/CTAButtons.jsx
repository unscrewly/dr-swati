import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { clinic } from "@/data/clinic";
import { useLang } from "@/lib/LanguageContext";

export default function CTAButtons({ size = "md", full = false, variant = "outline" }) {
  const { t } = useLang();
  const h = size === "lg" ? "h-12" : "h-11";
  const px = size === "lg" ? "px-8" : "px-6";
  const secondaryCls =
    variant === "ghost" ? "btn-ghost" : variant === "dark" ? "btn-dark" : "btn-outline";
  return (
    <div className={`flex flex-wrap gap-3 ${full ? "w-full" : ""}`}>
      <a
        href={`tel:${clinic.phone}`}
        className={`btn-pill bg-primary text-primary-foreground hover:bg-primary-strong ${h} ${px} text-[0.82rem] ${full ? "flex-1" : ""}`}
      >
        <Phone className="h-4 w-4" /> {t.cta.callNow}
      </a>
      <a
        href={clinic.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${secondaryCls} ${h} ${px} ${full ? "flex-1" : ""}`}
      >
        <MessageCircle className="h-4 w-4" /> {t.cta.whatsapp}
      </a>
    </div>
  );
}