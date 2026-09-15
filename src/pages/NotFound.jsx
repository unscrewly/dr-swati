import React from "react";
import { Link } from "react-router-dom";
import { Home as HomeIcon, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { images } from "@/data/images";
import { useLang } from "@/lib/LanguageContext";
import { SEO } from "@/lib/seo";
import { Image } from "@/components/ui/image";

export default function NotFound() {
  const { t, lang } = useLang();
  return (
    <>
      <SEO path="/404" title="Page not found" description="The page you were looking for could not be found." />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={images.clinic} alt="" className="h-full w-full" fittingType="fill" />
        </div>
        <div className="absolute inset-0 z-[1] bg-surface-dark/85" />
        <div className="container-lux relative z-10 flex flex-col items-center py-20 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full border border-white/25 bg-white/10 font-heading text-2xl font-bold text-white">
            वि
          </span>
          <p className="mt-8 font-heading text-7xl font-extrabold text-white/30">404</p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold text-white">
            {lang === "en" ? "This page took a wrong turn" : "हे पान चुकीच्या वाटेवर गेले"}
          </h1>
          <p className="mt-3 max-w-md font-light text-white/60">
            {lang === "en"
              ? "The page you're looking for isn't here. Let's get you back to a healthy smile."
              : "तुम्ही शोधत असलेले पान इथे नाही. चला, निरोगी हसण्याकडे परत नेऊ."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary">
              <HomeIcon className="h-4 w-4" /> {t.nav.home}
            </Link>
            <a href={`tel:${clinic.phone}`} className="btn-ghost">
              <Phone className="h-4 w-4" /> {t.cta.callNow}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}