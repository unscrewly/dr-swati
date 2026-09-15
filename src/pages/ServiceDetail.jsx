import React from "react";
import { useParams, Link } from "react-router-dom";
import { Check, Phone, MessageCircle, ChevronRight, HelpCircle } from "lucide-react";
import { getService, servicesByCategory } from "@/data/services";
import { categories, clinic } from "@/data/clinic";
import { images, serviceImages } from "@/data/images";
import { useLang } from "@/lib/LanguageContext";
import { SEO, serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { Image } from "@/components/ui/image";

export default function ServiceDetail() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const svc = getService(slug);

  if (!svc) {
    return (
      <div className="container-lux py-32 text-center">
        <h1 className="font-heading text-3xl font-semibold">Service not found</h1>
        <Link to="/services" className="btn-primary mt-6">{t.cta.backToServices}</Link>
      </div>
    );
  }

  const cat = categories.find((c) => c.slug === svc.category);
  const related = (svc.related || []).map(getService).filter(Boolean);
  const faqs = svc.faqs || [];
  const photo = serviceImages[svc.slug] || serviceImages[svc.category] || images.checkup;

  return (
    <>
      <SEO
        path={`/services/${svc.slug}`}
        title={svc.name[lang]}
        description={svc.what[lang].slice(0, 155)}
        jsonLd={[
          serviceSchema(svc),
          breadcrumbSchema([
            { name: t.nav.home, path: "/" },
            { name: t.nav.services, path: "/services" },
            { name: svc.name[lang], path: `/services/${svc.slug}` },
          ]),
          ...(faqs.length ? [faqSchema(faqs)] : []),
        ]}
      />

      {/* Breadcrumb */}
      <div className="container-lux pt-8">
        <nav className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary-strong">{t.nav.home}</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/services" className="hover:text-primary-strong">{t.nav.services}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground/70">{svc.name[lang]}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="container-lux py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                <ServiceIcon name={cat?.icon} className="h-3.5 w-3.5" /> {cat?.name[lang]}
              </span>
              <h1 className="mt-4 text-balance font-heading text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-surface-dark">
                {svc.name[lang]}
              </h1>
              <p className="mt-4 max-w-2xl text-[0.95rem] font-light leading-[1.8] text-muted-foreground">{svc.tagline[lang]}</p>
            </Reveal>
            <Reveal delay={0.12} className="mt-7 overflow-hidden rounded-2xl border border-border">
              <Image src={photo} alt={svc.name[lang]} className="aspect-[16/9] w-full" fittingType="fill" />
            </Reveal>
          </div>

          {/* Booking rail */}
          <Reveal delay={0.1}>
            <aside className="card-lux sticky top-24">
              <h2 className="font-heading text-xl font-bold text-surface-dark">{t.cta.bookThis}</h2>
              <p className="mt-2 text-sm font-light text-muted-foreground">{t.service.bookText}</p>
              <a href={`tel:${clinic.phone}`} className="btn-primary mt-5 w-full">
                <Phone className="h-4 w-4" /> {t.cta.callNow}
              </a>
              <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline mt-3 w-full">
                <MessageCircle className="h-4 w-4" /> {t.cta.whatsapp}
              </a>
              <p className="mt-4 text-xs font-light text-muted-foreground">{clinic.phoneDisplay}</p>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* What */}
      <section className="bg-surface-light">
        <div className="container-lux py-14">
          <Reveal className="max-w-3xl">
            <h2 className="font-heading text-2xl font-extrabold tracking-[-0.02em] text-surface-dark">{t.service.whatTitle}</h2>
            <p className="mt-4 text-[0.95rem] font-light leading-[1.85] text-foreground/85">{svc.what[lang]}</p>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-lux py-14">
        <Reveal>
          <h2 className="font-heading text-2xl font-extrabold tracking-[-0.02em] text-surface-dark">{t.service.benefitsTitle}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
          {svc.benefits.map((b, i) => (
            <Reveal key={i} delay={(i % 2) * 0.06}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm font-light leading-relaxed text-foreground/85">{b[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Service FAQ */}
      {faqs.length > 0 && (
        <section className="bg-surface-light">
          <div className="container-lux py-14">
            <Reveal>
              <h2 className="font-heading text-2xl font-extrabold tracking-[-0.02em] text-surface-dark">{t.service.faqTitle}</h2>
            </Reveal>
            <div className="mt-8 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {faqs.map((f, i) => (
                <details key={i} className="group p-5">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-surface-dark">
                    <span className="flex items-start gap-2">
                      <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f.q[lang]}
                    </span>
                    <span className="text-muted-foreground transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pl-6 text-sm font-light leading-relaxed text-muted-foreground">{f.a[lang]}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="container-lux py-14">
          <Reveal>
            <h2 className="font-heading text-2xl font-extrabold tracking-[-0.02em] text-surface-dark">{t.cta.related}</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/services/${r.slug}`}
                className="card-lux group flex items-center gap-3 hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <ServiceIcon name={r.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold leading-tight text-surface-dark">{r.name[lang]}</p>
                  <p className="text-sm font-light text-muted-foreground">{r.tagline[lang]}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/services" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary-strong">
            {t.cta.backToServices} <ChevronRight className="h-4 w-4" />
          </Link>
        </section>
      )}
    </>
  );
}