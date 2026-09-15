import React from "react";
import { Link } from "react-router-dom";
import ServiceIcon from "@/components/ServiceIcon";
import { categories } from "@/data/clinic";
import { useLang } from "@/lib/LanguageContext";

export default function ServiceCard({ service }) {
  const { lang } = useLang();
  const cat = categories.find((c) => c.slug === service.category);
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-[5px] hover:shadow-[0_20px_56px_rgba(0,0,0,0.09)]"
    >
      <div className="flex h-[120px] items-center justify-center bg-gradient-to-br from-primary-light to-accent">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-card text-primary shadow-sm transition duration-300 group-hover:scale-105">
          <ServiceIcon name={service.icon} className="h-7 w-7" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-3 inline-flex w-fit rounded-full bg-primary-light px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-primary">
          {cat?.name[lang]}
        </span>
        <h3 className="mb-2 text-[0.95rem] font-bold text-surface-dark">{service.name[lang]}</h3>
        <p className="text-[0.78rem] font-light leading-[1.65] text-muted-foreground">
          {service.tagline[lang]}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-[0.78rem] font-semibold text-primary transition-all group-hover:gap-2">
          {lang === "en" ? "Learn more" : "अधिक जाणून घ्या"} →
        </span>
      </div>
    </Link>
  );
}