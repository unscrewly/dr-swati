import React from "react";
import { generalFaqs } from "@/data/clinic";
import { images } from "@/data/images";
import { useLang } from "@/lib/LanguageContext";
import { SEO, faqSchema, breadcrumbSchema } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import CTAButtons from "@/components/CTAButtons";
import FaqAccordion from "@/components/FaqAccordion";
import { Image } from "@/components/ui/image";

export default function FAQ() {
  const { t, lang } = useLang();
  return (
    <>
      <SEO
        path="/faq"
        title={lang === "en" ? "Dental FAQs — Kolhapur" : "दंत प्रश्नोत्तर — कोल्हापूर"}
        description="Answers to common dental questions — pain, appointments, costs, emergencies, root canals, implants and more — at Dr. Swati's Dental Clinic, Kolhapur."
        jsonLd={[faqSchema(generalFaqs), breadcrumbSchema([
          { name: t.nav.home, path: "/" },
          { name: t.nav.faq, path: "/faq" },
        ])]}
      />

      {/* Hero */}
      <section className="container-lux py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{t.faq.eyebrow}</span>
            <h1 className="mt-3 font-heading text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-surface-dark">
              {t.faq.title}
            </h1>
            <p className="mt-3 text-[0.92rem] font-light text-muted-foreground">{t.faq.subtitle}</p>
          </Reveal>
          <Reveal delay={0.12} className="overflow-hidden rounded-2xl">
            <Image src={images.checkup} alt={lang === "en" ? "Dentist explaining treatment to a patient" : "रुग्णाला उपचार स्पष्ट करत डॉक्टर"} className="aspect-[4/3] w-full" fittingType="fill" />
          </Reveal>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-surface-light py-16 lg:py-20">
        <div className="container-narrow">
          <Reveal className="overflow-hidden rounded-2xl border border-border bg-card px-6">
            <FaqAccordion items={generalFaqs} />
          </Reveal>

          <Reveal className="mt-14 rounded-2xl bg-surface-dark p-10 text-center">
            <h2 className="font-heading text-2xl font-extrabold text-white">{t.home.ctaTitle}</h2>
            <p className="mx-auto mt-3 max-w-lg text-[0.88rem] font-light text-white/60">{t.home.ctaText}</p>
            <div className="mt-7 flex justify-center">
              <CTAButtons size="lg" variant="ghost" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}