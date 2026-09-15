import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { clinic } from "@/data/clinic";
import { images } from "@/data/images";
import { useLang } from "@/lib/LanguageContext";
import { SEO, breadcrumbSchema } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import CTAButtons from "@/components/CTAButtons";
import { Image } from "@/components/ui/image";

export default function Reviews() {
  const { t, lang } = useLang();
  return (
    <>
      <SEO
        path="/reviews"
        title={lang === "en" ? "Patient Reviews — 5.0 Stars" : "रुग्ण प्रतिक्रिया — 5.0 तारे"}
        description="Read what patients say about Dr. Swati's Dental Clinic in Kolhapur — painless, comfortable, caring dentistry. 5.0★ across 102 Google reviews."
        jsonLd={breadcrumbSchema([
          { name: t.nav.home, path: "/" },
          { name: t.nav.reviews, path: "/reviews" },
        ])}
      />

      {/* Hero */}
      <section className="container-lux py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{t.reviews.eyebrow}</span>
            <h1 className="mt-4 text-balance font-heading text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-surface-dark">
              {t.reviews.title}
            </h1>
            <p className="mt-5 max-w-xl text-[0.95rem] font-light leading-[1.8] text-muted-foreground">{t.reviews.subtitle}</p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary" />
                ))}
              </div>
              <span className="font-bold text-surface-dark">{clinic.rating}</span>
              <span className="text-sm font-light text-muted-foreground">· {clinic.reviewsCount} Google reviews</span>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="overflow-hidden rounded-2xl">
            <Image src={images.cosmetic} alt={lang === "en" ? "Happy patient with a bright smile" : "तेज हसण्यासह आनंदी रुग्ण"} className="aspect-[4/3] w-full" fittingType="fill" />
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-light py-16 lg:py-20">
        <div className="container-lux">
          <Testimonials />
          <Reveal className="mt-12 text-center">
            <a
              href={clinic.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink className="h-4 w-4" /> {t.reviews.googleText}
            </a>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-lux py-20">
        <Reveal className="rounded-2xl bg-surface-dark p-10 text-center">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">{t.home.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-lg text-[0.88rem] font-light text-white/60">{t.home.ctaText}</p>
          <div className="mt-7 flex justify-center">
            <CTAButtons size="lg" variant="ghost" />
          </div>
        </Reveal>
      </section>
    </>
  );
}