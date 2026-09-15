import React from "react";
import { clinic } from "@/data/clinic";

export default function MapEmbed({ className = "" }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-border shadow-sm ${className}`}>
      <iframe
        title="Dr. Swati's Dental Clinic location map"
        src={clinic.mapsEmbed}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 320 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}