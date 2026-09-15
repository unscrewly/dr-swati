import React from "react";
import { testimonials } from "@/data/clinic";
import { useLang } from "@/lib/LanguageContext";
import Reveal from "@/components/Reveal";

export default function Testimonials({ limit }) {
  const { lang } = useLang();
  const list = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((r, i) => {
        const name = lang === "en" ? r.name : r.nameMr;
        return (
          <Reveal key={i} delay={(i % 3) * 0.08}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-surface-light p-7">
              <div className="mb-4 text-sm tracking-[2px] text-warning" aria-label={`${r.rating} stars`}>
                {"★".repeat(r.rating)}
              </div>
              <blockquote className="text-[0.92rem] leading-[1.75] text-surface-dark">
                “{r.text[lang]}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary font-semibold text-white">
                  {name.charAt(0)}
                </span>
                <div>
                  <p className="text-[0.82rem] font-semibold text-surface-dark">{name}</p>
                  <p className="text-[0.68rem] font-light text-muted-foreground">
                    {lang === "en" ? "Verified Google Review" : "प्रमाणित Google प्रतिक्रिया"}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        );
      })}
    </div>
  );
}