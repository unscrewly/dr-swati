import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function LanguagePrompt() {
  const { setLang } = useLang();
  const [open, setOpen] = useState(true);

  const choose = (l) => {
    setLang(l);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface-dark/70 px-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition hover:bg-muted"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent text-primary-strong">
              <Globe className="h-7 w-7" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-extrabold tracking-[-0.02em] text-surface-dark">
              Choose your language
            </h2>
            <p className="mt-1 font-heading text-lg font-semibold text-muted-foreground">
              तुमची भाषा निवडा
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <button
                onClick={() => choose("en")}
                className="btn-pill h-12 bg-primary text-primary-foreground hover:bg-primary-strong"
              >
                English
              </button>
              <button
                onClick={() => choose("mr")}
                className="btn-pill h-12 border border-border bg-card text-foreground hover:border-primary hover:text-primary"
              >
                मराठी
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}