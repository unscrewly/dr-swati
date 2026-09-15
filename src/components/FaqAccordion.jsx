import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(null);
  const { lang } = useLang();
  return (
    <div className="divide-y divide-border">
      {items.map((f, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 text-left"
            aria-expanded={open === i}
          >
            <span className="text-[0.92rem] font-semibold text-surface-dark">{f.q[lang]}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="pb-2 pt-3 text-[0.82rem] font-light leading-relaxed text-muted-foreground">
                  {f.a[lang]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}