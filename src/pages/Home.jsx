import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star, ArrowRight, MapPin, Clock, CheckCircle, CalendarCheck,
  Stethoscope, ClipboardList, HeartHandshake, Navigation,
} from "lucide-react";
import { clinic, categories } from "@/data/clinic";
import { services } from "@/data/services";
import { images } from "@/data/images";
import { useLang } from "@/lib/LanguageContext";
import { SEO, dentistSchema } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import CTAButtons from "@/components/CTAButtons";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import MapEmbed from "@/components/MapEmbed";
import StatCounter from "@/components/StatCounter";
import ProgressBar from "@/components/ProgressBar";
import { Image } from "@/components/ui/image";

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: (i) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function Home() {
  const { t, lang } = useLang();
  const featured = [
    "check-ups", "teeth-cleaning", "root-canal", "dental-implants",
    "teeth-whitening", "clear-aligners", "veneers-crowns", "paediatric-dentistry", "emergency-care",
  ].map((s) => services.find((x) => x.slug === s));

  const heroWords = t.home.heroTitle.split(" ");
  const tagServices = ["check-ups", "teeth-cleaning", "teeth-whitening", "flap-surgery", "dental-implants", "root-canal"]
    .map((s) => services.find((x) => x.slug === s));

  const progressSteps = lang === "en"
    ? ["Book Appointment", "Smile Assessment", "Care Planning", "Treatment & Care"]
    : ["अपॉइंटमेंट बुक करा", "हसणे तपासणी", "उपचार नियोजन", "उपचार व देखभाल"];

  const process = [
    { icon: CalendarCheck, en: "Book Online", mr: "ऑनलाइन बुक करा", enBody: "Call or WhatsApp us — we'll confirm your appointment within the hour.", mrBody: "कॉल करा किंवा व्हॉट्सॲप — आम्ही तासाभरात अपॉइंटमेंट मान्य करू." },
    { icon: Stethoscope, en: "Welcome Visit", mr: "स्वागत भेट", enBody: "Arrive at your scheduled time, meet your dentist, and we'll go over your history.", mrBody: "नियत वेळी या, दंततज्जांशी भेटा, आम्ही तुमचा इतिहास तपासू." },
    { icon: ClipboardList, en: "Smile Assessment", mr: "हसणे तपासणी", enBody: "Digital X-rays, full examination, and a transparent care plan before we start.", mrBody: "डिजिटल एक्स-रे, पूर्ण तपासणी, व सुरू होण्याआधी स्पष्ट उपचार योजना." },
    { icon: HeartHandshake, en: "Treatment & Care", mr: "उपचार व देखभाल", enBody: "Treatment completed, results reviewed, aftercare explained — we follow up too.", mrBody: "उपचार पूर्ण, निकाल तपासला, देखभाल स्पष्ट — आम्ही पुन्हा संपर्कही करतो." },
  ];

  const checklist = [
    ...categories.map((c) => c.name[lang]),
    t.common.painless,
  ];

  return (
    <>
      <SEO
        path="/"
        title={lang === "en" ? "Painless Dental Care in Kolhapur" : "कोल्हापूरमध्ये वेदनारहित दंत सेवा"}
        description="Dr. Swati's Dental Clinic — painless root canals, implants, cosmetic dentistry & more in Kadamwadi, Kolhapur. 5.0★ (102 reviews). Call 095527 61082."
        jsonLd={dentistSchema()}
      />

      {/* 01 — Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-surface-dark">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero}
            alt={lang === "en" ? "Calm patient receiving gentle dental care" : "कोमल दंत उपचार घेत असलेले शांत रुग्ण"}
            className="h-full w-full"
            fittingType="fill"
          />
        </div>
        <div className="hero-gradient absolute inset-0 z-[1]" />
        <div className="container-lux relative z-10 w-full pb-14 pt-28">
          <motion.span
            variants={fadeUp} custom={0} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 mb-7"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[0.62rem] font-semibold tracking-[0.12em] text-primary">
              ★ {clinic.rating} · {clinic.reviewsCount} {lang === "en" ? "GOOGLE REVIEWS · KOLHAPUR" : "GOOGLE प्रतिक्रिया · कोल्हापूर"}
            </span>
          </motion.span>

          <h1 className="max-w-[620px] font-heading text-[clamp(2.8rem,5.5vw,5.5rem)] font-extrabold leading-[1.0] tracking-[-0.03em] text-white">
            {heroWords.map((w, i) => (
              <motion.span
                key={i}
                variants={fadeUp} custom={i + 1} initial="hidden" animate="visible"
                className={`mr-[0.25em] inline-block ${i === heroWords.length - 1 ? "text-primary" : ""}`}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp} custom={heroWords.length + 2} initial="hidden" animate="visible"
            className="mt-6 max-w-[420px] text-[0.92rem] font-light leading-[1.75] text-white/55"
          >
            {t.home.heroSubtitle}
          </motion.p>

          <motion.div
            variants={fadeUp} custom={heroWords.length + 3} initial="hidden" animate="visible"
            className="mt-10"
          >
            <CTAButtons size="lg" variant="ghost" />
          </motion.div>

          <motion.div
            variants={fadeUp} custom={heroWords.length + 4} initial="hidden" animate="visible"
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {tagServices.map((s) => (
              <span key={s.slug} className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[0.72rem] font-medium text-white/65">
                {s.name[lang]}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 02 — Progress bar */}
      <section className="border-b border-border bg-card">
        <div className="container-lux">
          <ProgressBar steps={progressSteps} />
        </div>
      </section>

      {/* 03 — About + Stats */}
      <section className="bg-card py-20">
        <div className="container-lux">
          <Reveal>
            <span className="eyebrow">{t.about.eyebrow}</span>
            <p className="mt-6 max-w-[760px] font-heading text-[clamp(1.6rem,3vw,2.8rem)] font-bold leading-[1.3] tracking-[-0.02em] text-surface-dark">
              {t.home.aboutText}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <div className="flex flex-wrap items-center gap-10 border-y border-border py-8">
              <p className="max-w-[130px] text-[0.68rem] font-light leading-[1.6] text-muted-foreground">
                {lang === "en" ? "Trusted by Kolhapur families for healthy smiles!" : "निरोगी हसण्यासाठी कोल्हापूर कुटुंबांचा विश्वास!"}
              </p>
              <div className="flex flex-wrap gap-12">
                <StatCounter value={5.0} decimals={1} label={lang === "en" ? "Rating" : "रेटिंग"} />
                <StatCounter value={102} suffix="+" label={lang === "en" ? "Google Reviews" : "Google प्रतिक्रिया"} />
                <StatCounter value={services.length} suffix="+" label={lang === "en" ? "Treatments" : "उपचार"} />
                <StatCounter value={100} suffix="%" label={t.common.painless} />
              </div>
              <div className="ml-auto h-[160px] w-[210px] overflow-hidden rounded-2xl">
                <Image src={images.clinic} alt={lang === "en" ? "Modern dental clinic interior" : "आधुनिक दंत दवाखाना आतील भाग"} className="h-full w-full" fittingType="fill" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-lg font-bold text-white">
              {lang === "en" ? "Dr" : "डॉ"}
            </span>
            <div>
              <p className="text-[0.9rem] font-bold text-surface-dark">
                {lang === "en" ? "Dr. Swati" : "डॉ. स्वाती"}
              </p>
              <p className="mt-0.5 text-[0.72rem] font-light text-muted-foreground">
                {lang === "en" ? "Lead Dental Specialist" : "मुख्य दंत तज्ज्ञ"} · ★ {clinic.rating} ({clinic.reviewsCount}+ {lang === "en" ? "reviews" : "प्रतिक्रिया"})
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — Services grid */}
      <section className="bg-surface-light py-24">
        <div className="container-lux">
          <Reveal>
            <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">{t.home.servicesEyebrow}</span>
                <h2 className="mt-3 max-w-xl font-heading text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.2] tracking-[-0.025em] text-surface-dark">
                  {t.home.servicesTitle}
                </h2>
              </div>
              <Link to="/services" className="btn-dark">
                {t.cta.viewAll} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Why Choose Us */}
      <section className="bg-card py-24">
        <div className="container-lux grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{lang === "en" ? "Why Choose Us" : "आम्हाला का निवडा"}</span>
            <h2 className="mt-4 font-heading text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-[1.2] tracking-[-0.02em] text-surface-dark">
              {t.about.philosophyTitle}
            </h2>
            <p className="mt-5 max-w-md text-[0.85rem] font-light leading-[1.8] text-muted-foreground">
              {t.about.philosophyText}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3">
              {checklist.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-[0.82rem] text-surface-dark">{c}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-dark mt-10">
              {lang === "en" ? "Meet Our Team" : "आमच्या टीमशी भेट करा"} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.15} className="overflow-hidden rounded-2xl">
            <Image src={images.team} alt={lang === "en" ? "The dental care team" : "दंत काळजी टीम"} className="aspect-[4/3] w-full" fittingType="fill" />
          </Reveal>
        </div>
      </section>

      {/* 06 — Process */}
      <section className="bg-surface-dark py-24">
        <div className="container-lux">
          <Reveal className="mx-auto max-w-[560px] text-center">
            <span className="eyebrow">{lang === "en" ? "How It Works" : "कसे कार्य करते"}</span>
            <h2 className="mt-3 font-heading text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold tracking-[-0.025em] text-white">
              {lang === "en" ? "Your journey to a healthier smile." : "निरोगी हसण्याकडे तुमचा प्रवास."}
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="mb-5 font-heading text-[3rem] font-extrabold leading-none tracking-[-0.04em] text-white/[0.08]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-[0.65rem] font-bold text-white">
                      <p.icon className="h-3.5 w-3.5" />
                    </span>
                    <h3 className="text-[0.88rem] font-bold text-white">{lang === "en" ? p.en : p.mr}</h3>
                  </div>
                  <p className="text-[0.78rem] font-light leading-relaxed text-white/50">
                    {lang === "en" ? p.enBody : p.mrBody}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Testimonials */}
      <section className="bg-card py-24">
        <div className="container-lux">
          <Reveal className="mb-14 text-center">
            <span className="eyebrow">{t.home.testimonialsEyebrow}</span>
            <h2 className="mt-3 font-heading text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold tracking-[-0.025em] text-surface-dark">
              {t.home.testimonialsTitle}
            </h2>
            <p className="mt-2 text-[0.85rem] font-light text-muted-foreground">
              <span className="text-warning tracking-[2px]">★★★★★</span> {clinic.rating} {lang === "en" ? "average from" : "सरासरी"} {clinic.reviewsCount}+ {lang === "en" ? "verified reviews" : "प्रमाणित प्रतिक्रिया"}
            </p>
          </Reveal>
          <Testimonials limit={3} />
        </div>
      </section>

      {/* 08 — Photo CTA */}
      <section className="relative flex h-[300px] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={images.photoCta} alt={lang === "en" ? "Happy patient after dental care" : "दंत उपचारानंतर आनंदी रुग्ण"} className="h-full w-full" fittingType="fill" />
        </div>
        <div className="photo-cta-gradient absolute inset-0 z-[1]" />
        <div className="container-lux relative z-10 flex w-full flex-wrap items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold tracking-[-0.025em] text-white">
              {t.home.ctaTitle}
            </h2>
            <p className="mt-2 text-[0.88rem] font-light text-white/60">{t.home.ctaText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${clinic.phone}`} className="btn-pill bg-primary text-primary-foreground hover:bg-primary-strong h-12 px-9">
              {t.cta.callNow}
            </a>
            <a href={clinic.mapsLink} target="_blank" rel="noopener noreferrer" className="btn-ghost h-12 px-8">
              <Navigation className="h-4 w-4" /> {t.cta.getDirections}
            </a>
          </div>
        </div>
      </section>

      {/* 09 — Map + hours */}
      <section className="bg-surface-light py-20">
        <div className="container-lux grid gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">{t.home.mapEyebrow}</span>
            <h2 className="mt-3 font-heading text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold tracking-[-0.02em] text-surface-dark">
              {t.home.mapTitle}
            </h2>
            <div className="mt-5 flex items-start gap-2 text-[0.9rem] text-surface-dark/85">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <address className="not-italic">{clinic.addressEn}</address>
            </div>
            <a href={clinic.mapsLink} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6">
              <Navigation className="h-4 w-4" /> {t.cta.getDirections}
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mb-4 flex items-center gap-2 font-heading text-xl font-bold text-surface-dark">
              <Clock className="h-5 w-5 text-primary" /> {t.home.hoursTitle}
            </h3>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              {clinic.hours.map((h, i) => (
                <div key={i} className="flex justify-between border-b border-border/60 px-5 py-4 last:border-0">
                  <span className="font-semibold text-surface-dark">{h.day[lang]}</span>
                  <span className="text-muted-foreground">{h.time[lang]}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10 — Final CTA */}
      <section className="bg-primary py-20">
        <div className="container-lux max-w-2xl text-center">
          <Reveal>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight tracking-[-0.03em] text-white">
              {t.home.ctaTitle}
            </h2>
            <p className="mt-5 text-[0.92rem] font-light leading-relaxed text-white/70">{t.home.ctaText}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={`tel:${clinic.phone}`} className="btn-pill h-12 px-10 font-semibold text-primary hover:bg-white/90 bg-white">
                {t.cta.bookNow}
              </a>
              <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-pill h-12 px-8 font-normal text-white border border-white/35 hover:bg-white/10">
                {clinic.phoneDisplay}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-[0.8rem] font-light text-white/55">
              <span>✓ {t.common.painless}</span>
              <span>✓ {t.common.yearsExp}</span>
              <span>✓ {lang === "en" ? "All ages welcome" : "सर्व वयांचे स्वागत"}</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}