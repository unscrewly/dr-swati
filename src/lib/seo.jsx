import { useEffect } from "react";
import { clinic } from "@/data/clinic";

const SITE = "https://drswati-dental.vercel.app"; // update after custom domain

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function SEO({ title, description, path = "/", jsonLd, ogImage }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${clinic.nameEn}`
      : `${clinic.nameEn} | विठाई दातांचा दवाखाना, Kolhapur`;
    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", `${SITE}${path}`);
    setMeta("property", "og:image", ogImage || "");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setLink("canonical", `${SITE}${path}`);

    if (jsonLd) {
      if (Array.isArray(jsonLd)) {
        jsonLd.forEach((d, i) => setJsonLd(`ld-${path}-${i}`, d));
      } else {
        setJsonLd(`ld-${path}`, jsonLd);
      }
    }
  }, [title, description, path, jsonLd, ogImage]);

  return null;
}

export const dentistSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinic.nameEn,
  image: `${SITE}/images/hero-clinic.jpg`,
  telephone: clinic.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vitthal Mandir, Madhali Galli, Vitthal Mandir Chowk, Scheme No. 4, Kadamwadi",
    addressLocality: "Kolhapur",
    addressRegion: "Maharashtra",
    postalCode: "416003",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: clinic.geo.lat, longitude: clinic.geo.lng },
  openingHours: "Mo-Sa 09:30-13:30,17:30-21:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: clinic.rating,
    reviewCount: clinic.reviewsCount,
  },
  url: SITE,
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE}${it.path}`,
  })),
});

export const serviceSchema = (svc) => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: svc.name.en,
  procedureType: "Dental",
  howPerformed: svc.what.en,
  url: `${SITE}/services/${svc.slug}`,
  provider: { "@type": "Dentist", name: clinic.nameEn, telephone: clinic.phone },
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q.en,
    acceptedAnswer: { "@type": "Answer", text: f.a.en },
  })),
});