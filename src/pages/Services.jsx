import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/clinic";
import { servicesByCategory } from "@/data/services";
import { images, serviceImages } from "@/data/images";
import { useLang } from "@/lib/LanguageContext";
import { SEO, breadcrumbSchema } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import CTAButtons from "@/components/CTAButtons";
import { Image } from "@/components/ui/image";

const tints = {
  "general-preventive": "bg-accent/40",
  cosmetic: "bg-accent/30",
  "restorative-surgical": "bg-accent/40",
  orthodontics: "bg-accent/30",
  "special-care": "bg-accent/40",
};

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <SEO
        path="/services"
        title={lang === "en" ? "Dental Services in Kolhapur" : "कोल्हापूरमध्ये दंत सेवा"}
        description="Explore the full range of dental care at Dr. Swati's Dental Clinic — general, cosmetic, restorative, orthodontics and special care, each with its own detail page."
        jsonLd={breadcrumbSchema([
          { name: t.nav.home, path: "/" },
          { name: t.nav.services, path: "/services" },
        ])}
      />

      {/* Hero */}
      <section className="container-lux py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{t.services.eyebrow}</span>
            <h1 className="mt-4 max-w-3xl text-balance font-heading text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-surface-dark">
              {t.services.title}
            </h1>
            <p className="mt-5 max-w-xl text-[0.95rem] font-light leading-[1.8] text-muted-foreground">{t.services.subtitle}</p>
            <div className="mt-8">
              <CTAButtons size="lg" />
            </div>
          </Reveal>
          <Reveal delay={0.12} className="overflow-hidden rounded-2xl">
            <Image src={images.checkup} alt={lang === "en" ? "Dental examination in progress" : "चालू दंत तपासणी"} className="aspect-[4/3] w-full" fittingType="fill" />
          </Reveal>
        </div>
      </section>

      {/* Category sections */}
      {categories.map((c, idx) => {
        const items = servicesByCategory(c.slug);
        const photo = serviceImages[c.slug] || images.checkup;
        return (
          <section key={c.slug} className={`border-y border-border ${tints[c.slug] ?? ""}`}>
            <div className="container-lux py-16 lg:py-20">
              <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px]">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-card text-primary-strong shadow-sm">
                      <ServiceIcon name={c.icon} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h2 className="font-heading text-2xl font-extrabold tracking-[-0.02em] text-surface-dark sm:text-3xl">{c.name[lang]}</h2>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.1} className="overflow-hidden rounded-2xl border border-border">
                  <Image src={photo} alt={c.name[lang]} className="aspect-[16/10] w-full" fittingType="fill" />
                </Reveal>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s, i) => (
                  <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="card-lux group flex h-full flex-col gap-3 hover:-translate-y-1 hover:border-primary/40"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition group-hover:bg-primary group-hover:text-primary-foreground">
                        <ServiceIcon name={s.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg font-bold leading-tight text-surface-dark">{s.name[lang]}</h3>
                      <p className="text-sm font-light leading-relaxed text-muted-foreground">{s.tagline[lang]}</p>
                      <span className="mt-auto text-sm font-semibold text-primary-strong">
                        {lang === "en" ? "View" : "पहा"} <span className="inline-block transition group-hover:translate-x-1">→</span>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

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