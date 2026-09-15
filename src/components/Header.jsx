import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone, Menu, X, ChevronDown, Globe } from "lucide-react";
import { clinic, categories } from "@/data/clinic";
import { servicesByCategory } from "@/data/services";
import { useLang } from "@/lib/LanguageContext";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  const navLink = ({ isActive }) =>
    `text-[0.72rem] font-medium transition hover:text-white ${isActive ? "text-white" : "text-white/70"}`;

  return (
    <header className="sticky top-0 z-50 bg-surface-dark/95 backdrop-blur-md">
      <div className="container-lux flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-7 w-7 place-items-center rounded-[7px] border border-white/25 bg-white/15 text-white">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
              <path d="M12 2c-2.5 0-4 1.5-5.5 1.5S4 3 4 5c0 2 .5 4 1 6.5.4 2 .5 4 1 6 .4 1.6 1 3 2.5 3s1.5-2 1.5-4c0-1.5.2-3 2-3s2 1.5 2 3c0 2 .5 4 1.5 4s2.1-1.4 2.5-3c.5-2 .6-4 1-6 .5-2.5 1-4.5 1-6.5 0-2-1-1.5-2.5-1.5S14.5 2 12 2z" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-[0.95rem] font-bold tracking-[-0.01em] text-white">
              {lang === "en" ? clinic.shortEn : clinic.shortMr}
            </span>
            <span className="block text-[0.6rem] uppercase tracking-[0.2em] text-white/40">
              Kolhapur
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={navLink} end>{t.nav.home}</NavLink>
          <NavLink to="/about" className={navLink}>{t.nav.about}</NavLink>
          <div className="relative" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
            <button className="inline-flex items-center gap-1 text-[0.72rem] font-medium text-white/70 transition hover:text-white">
              {t.nav.services} <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {mega && (
              <div className="absolute left-1/2 top-full z-50 w-[min(900px,90vw)] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-5 gap-5 rounded-2xl border border-border bg-card p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]">
                  {categories.map((c) => (
                    <div key={c.slug}>
                      <p className="mb-2 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-primary">
                        {c.name[lang]}
                      </p>
                      <ul className="space-y-1.5">
                        {servicesByCategory(c.slug).map((s) => (
                          <li key={s.slug}>
                            <Link to={`/services/${s.slug}`} className="block text-[12px] leading-snug text-surface-dark/70 transition hover:text-primary">
                              {s.name[lang]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/reviews" className={navLink}>{t.nav.reviews}</NavLink>
          <NavLink to="/faq" className={navLink}>{t.nav.faq}</NavLink>
          <NavLink to="/contact" className={navLink}>{t.nav.contact}</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "mr" : "en")}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/10"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "en" ? "मराठी" : "EN"}
          </button>
          <a href={`tel:${clinic.phone}`} className="hidden btn-pill bg-primary text-primary-foreground hover:bg-primary-strong px-5 h-9 text-[0.72rem] sm:inline-flex">
            <Phone className="h-3.5 w-3.5" /> {t.common.call}
          </a>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-surface-dark lg:hidden">
          <nav className="container-lux flex flex-col py-4">
            {[
              { to: "/", label: t.nav.home, end: true },
              { to: "/about", label: t.nav.about },
              { to: "/services", label: t.nav.services },
              { to: "/reviews", label: t.nav.reviews },
              { to: "/faq", label: t.nav.faq },
              { to: "/contact", label: t.nav.contact },
            ].map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 text-[0.8rem] font-medium text-white/80"
              >
                {l.label}
              </NavLink>
            ))}
            <a href={`tel:${clinic.phone}`} className="btn-pill bg-primary text-primary-foreground mt-4 h-11">
              <Phone className="h-4 w-4" /> {t.cta.callNow}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}