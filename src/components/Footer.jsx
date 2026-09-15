import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { clinic, categories } from "@/data/clinic";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t, lang } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface-dark text-white">
      <div className="container-lux grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-[7px] border border-white/25 bg-white/15 text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                <path d="M12 2c-2.5 0-4 1.5-5.5 1.5S4 3 4 5c0 2 .5 4 1 6.5.4 2 .5 4 1 6 .4 1.6 1 3 2.5 3s1.5-2 1.5-4c0-1.5.2-3 2-3s2 1.5 2 3c0 2 .5 4 1.5 4s2.1-1.4 2.5-3c.5-2 .6-4 1-6 .5-2.5 1-4.5 1-6.5 0-2-1-1.5-2.5-1.5S14.5 2 12 2z" />
              </svg>
            </span>
            <div className="leading-tight">
              <span className="block font-heading text-[1.1rem] font-extrabold tracking-[-0.01em]">
                {lang === "en" ? clinic.shortEn : clinic.shortMr}
              </span>
              <span className="block text-[0.7rem] font-light tracking-[0.1em] text-white/40">
                {lang === "en" ? "Your Family's Dental Clinic" : "तुमच्या कुटुंबाचा दंत दवाखाना"}
              </span>
            </div>
          </div>
          <a href={`tel:${clinic.phone}`} className="mt-5 block text-sm font-semibold text-white">
            {clinic.phoneDisplay}
          </a>
          <p className="text-sm font-light text-white/50">{t.footer.tagline}</p>
        </div>

        <div>
          <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/30">
            {t.footer.services}
          </p>
          <ul className="space-y-3 text-sm font-light text-white/55">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to="/services" className="transition hover:text-white">{c.name[lang]}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/30">
            {t.footer.quickLinks}
          </p>
          <ul className="space-y-3 text-sm font-light text-white/55">
            <li><Link to="/" className="transition hover:text-white">{t.nav.home}</Link></li>
            <li><Link to="/about" className="transition hover:text-white">{t.nav.about}</Link></li>
            <li><Link to="/reviews" className="transition hover:text-white">{t.nav.reviews}</Link></li>
            <li><Link to="/faq" className="transition hover:text-white">{t.nav.faq}</Link></li>
            <li><Link to="/contact" className="transition hover:text-white">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/30">
            {t.footer.hours}
          </p>
          <ul className="space-y-2 text-sm font-light text-white/55">
            {clinic.hours.map((h, i) => (
              <li key={i} className="flex flex-col">
                <span className="font-normal text-white/80">{h.day[lang]}</span>
                <span>{h.time[lang]}</span>
              </li>
            ))}
          </ul>
          <a href={`tel:${clinic.phone}`} className="mt-3 block text-sm font-light text-white/70">
            {t.common.call}: {clinic.phoneDisplay}
          </a>
          <a href={clinic.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-light text-white/55 transition hover:text-white">
            <MapPin className="h-4 w-4" /> {lang === "en" ? "Get directions" : "दिशा मिळवा"}
          </a>
        </div>
      </div>

      <div className="container-lux flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8 text-xs font-light text-white/30">
        <p>© {year} {clinic.nameEn}. {t.footer.rights}</p>
        <p className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" /> {clinic.addressEn}
        </p>
      </div>
    </footer>
  );
}