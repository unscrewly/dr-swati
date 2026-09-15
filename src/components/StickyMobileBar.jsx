import React from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { clinic } from "@/data/clinic";
import { useLang } from "@/lib/LanguageContext";

export default function StickyMobileBar() {
  const { t } = useLang();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-card/95 backdrop-blur-md lg:hidden">
      <a href={`tel:${clinic.phone}`} className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold text-foreground">
        <Phone className="h-5 w-5 text-primary-strong" /> {t.common.call}
      </a>
      <a
        href={clinic.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 border-x border-border py-2.5 text-xs font-semibold text-foreground"
      >
        <MessageCircle className="h-5 w-5 text-primary-strong" /> {t.cta.whatsapp}
      </a>
      <a
        href={clinic.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold text-foreground"
      >
        <MapPin className="h-5 w-5 text-primary-strong" /> {t.cta.directions}
      </a>
    </div>
  );
}