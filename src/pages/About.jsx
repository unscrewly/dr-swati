import React from "react";
import { ShieldCheck, HeartHandshake, Sparkles, Award } from "lucide-react";
import { clinic } from "@/data/clinic";
import { images } from "@/data/images";
import { useLang } from "@/lib/LanguageContext";
import { SEO, breadcrumbSchema } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import CTAButtons from "@/components/CTAButtons";
import { Image } from "@/components/ui/image";

export default function About() {
  const { t, lang } = useLang();
  return (
    <>
      <SEO
        path="/about"
        title={lang === "en" ? "About Dr. Swati & the Clinic" : "डॉ. स्वाती व दवाखाना आमच्याबद्दल"}
        description="Meet Dr. Swati and the philosophy behind Dr. Swati's Dental Clinic in Kolhapur: gentle, painless, precision dental care beside Vitthal Mandir, Kadamwadi."
        jsonLd={breadcrumbSchema([
          { name: t.nav.home, path: "/" },
          { name: t.nav.about, path: "/about" },
        ])}
      />

      {/* Hero */}
      <section className="container-lux py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h1 className="mt-4 max-w-3xl text-balance font-heading text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-surface-dark">
              {t.about.title}
            </h1>
            <p className="mt-6 max-w-xl text-[0.95rem] font-light leading-[1.8] text-muted-foreground">{t.about.intro}</p>
          </Reveal>
          <Reveal delay={0.12} className="overflow-hidden rounded-2xl">
            <Image src={images.reception} alt={lang === "en" ? "Modern dental clinic reception" : "आधुनिक दंत दवाखाना स्वागतकक्ष"} className="aspect-[4/3] w-full" fittingType="fill" />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, en: "Painless care", mr: "वेदनारहित सेवा" },
            { icon: HeartHandshake, en: "All ages welcome", mr: "सर्व वयांचे स्वागत" },
            { icon: Sparkles, en: "Modern techniques", mr: "आधुनिक तंत्र" },
            { icon: Award, en: "5.0★ rated", mr: "5.0★ रेटेड" },
          ].map((b, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card-lux h-full">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-primary-strong">
                  <b.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <p className="mt-4 font-semibold text-surface-dark">{lang === "en" ? b.en : b.mr}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy + image */}
      <section className="bg-surface-light">
        <div className="container-lux grid items-center gap-12 py-20 lg:grid-cols-2">
          <Reveal className="order-2 overflow-hidden rounded-2xl lg:order-1">
            <Image src={images.team} alt={lang === "en" ? "Dr. Swati and the dental care team" : "डॉ. स्वाती व दंत काळजी टीम"} className="aspect-[4/3] w-full" fittingType="fill" />
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <span className="eyebrow">{t.about.philosophyTitle}</span>
            <h2 className="mt-3 font-heading text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-[-0.02em] text-surface-dark">{t.about.philosophyTitle}</h2>
            <p className="mt-5 text-[0.92rem] font-light leading-[1.8] text-muted-foreground">{t.about.philosophyText}</p>
            <div className="card-lux mt-8">
              <h3 className="font-heading text-xl font-bold text-surface-dark">{t.about.credentialsTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                {[
                  lang === "en" ? "Experienced in restorative, cosmetic and surgical dentistry" : "पुनर्स्थापनकारी, कॉस्मेटिक व शस्त्रक्रिया दंतवैद्यकीयात अनुभव",
                  lang === "en" ? "Gentle, painless approach for every age group" : "प्रत्येक वयोगटासाठी कोमल, वेदनारहित पद्धत",
                  lang === "en" ? "Modern, sterilised, well-equipped clinic" : "आधुनिक, निर्जंतुक, सुसज्ज दवाखाना",
                  lang === "en" ? "Care in Marathi, Hindi and English" : "मराठी, हिंदी व इंग्रजीत सेवा",
                ].map((c, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-lux py-20">
        <Reveal>
          <span className="eyebrow">{t.about.galleryTitle}</span>
          <h2 className="mt-3 font-heading text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-[-0.02em] text-surface-dark">{t.about.galleryTitle}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {lang === "en" ? "A calm, modern space built for comfortable care." : "आरामदायी सेवेसाठी बनवलेली शांत, आधुनिक जागा."}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: images.clinic, label: lang === "en" ? "Treatment room" : "उपचार कक्ष" },
            { src: images.reception, label: lang === "en" ? "Reception" : "स्वागतकक्ष" },
            { src: images.checkup, label: lang === "en" ? "In the chair" : "चेअरवर" },
          ].map((g, i) => (
            <Reveal key={i} delay={i * 0.06} className="group overflow-hidden rounded-2xl border border-border">
              <div className="relative aspect-[4/3]">
                <Image src={g.src} alt={g.label} className="h-full w-full transition duration-500 group-hover:scale-105" fittingType="fill" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface-dark/80 to-transparent p-4">
                  <p className="text-[0.8rem] font-semibold text-white">{g.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-lux pb-20">
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