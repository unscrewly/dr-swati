import React from "react";
import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import { clinic } from "@/data/clinic";
import { images } from "@/data/images";
import { useLang } from "@/lib/LanguageContext";
import { SEO, dentistSchema, breadcrumbSchema } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import MapEmbed from "@/components/MapEmbed";
import { Image } from "@/components/ui/image";

export default function Contact() {
  const { t, lang } = useLang();
  return (
    <>
      <SEO
        path="/contact"
        title={lang === "en" ? "Contact & Location" : "संपर्क व स्थान"}
        description="Visit Dr. Swati's Dental Clinic beside Vitthal Mandir, Kadamwadi, Kolhapur. Call 095527 61082, WhatsApp, or get directions. Open Mon–Sat."
        jsonLd={[dentistSchema(), breadcrumbSchema([
          { name: t.nav.home, path: "/" },
          { name: t.nav.contact, path: "/contact" },
        ])]}
      />

      {/* Hero */}
      <section className="container-lux py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h1 className="mt-4 text-balance font-heading text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-surface-dark">
              {t.contact.title}
            </h1>
            <p className="mt-5 max-w-xl text-[0.95rem] font-light leading-[1.8] text-muted-foreground">{t.contact.subtitle}</p>
          </Reveal>
          <Reveal delay={0.12} className="overflow-hidden rounded-2xl">
            <Image src={images.reception} alt={lang === "en" ? "Clinic reception" : "दवाखाना स्वागतकक्ष"} className="aspect-[4/3] w-full" fittingType="fill" />
          </Reveal>
        </div>
      </section>

      {/* Details + map */}
      <section className="bg-surface-light py-16 lg:py-20">
        <div className="container-lux grid gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-5">
            <div className="card-lux">
              <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-surface-dark">
                <MapPin className="h-5 w-5 text-primary" /> {t.contact.addressTitle}
              </h2>
              <address className="mt-3 not-italic leading-relaxed text-foreground/85">
                {lang === "en" ? clinic.addressEn : clinic.addressMr}
              </address>
              <a href={clinic.mapsLink} target="_blank" rel="noopener noreferrer" className="btn-outline mt-5">
                <Navigation className="h-4 w-4" /> {t.cta.getDirections}
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="card-lux">
                <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-surface-dark">
                  <Phone className="h-5 w-5 text-primary" /> {t.contact.phoneTitle}
                </h2>
                <a href={`tel:${clinic.phone}`} className="mt-3 block text-lg font-bold text-primary-strong">
                  {clinic.phoneDisplay}
                </a>
                <a href={`tel:${clinic.phone}`} className="btn-primary mt-4 w-full">{t.cta.callNow}</a>
              </div>
              <div className="card-lux">
                <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-surface-dark">
                  <MessageCircle className="h-5 w-5 text-primary" /> {t.contact.whatsappTitle}
                </h2>
                <p className="mt-3 text-sm font-light text-muted-foreground">{clinic.phoneDisplay}</p>
                <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline mt-4 w-full">
                  {t.cta.whatsapp}
                </a>
              </div>
            </div>

            <div className="card-lux">
              <h2 className="flex items-center gap-2 font-heading text-xl font-bold text-surface-dark">
                <Clock className="h-5 w-5 text-primary" /> {t.contact.hoursTitle}
              </h2>
              <div className="mt-4 divide-y divide-border">
                {clinic.hours.map((h, i) => (
                  <div key={i} className="flex justify-between py-3 text-sm">
                    <span className="font-semibold text-surface-dark">{h.day[lang]}</span>
                    <span className="text-muted-foreground">{h.time[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <MapEmbed className="h-full min-h-[420px]" />
          </Reveal>
        </div>
      </section>
    </>
  );
}