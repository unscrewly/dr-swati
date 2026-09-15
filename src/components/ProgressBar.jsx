import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProgressBar({ steps, className = "" }) {
  const [active, setActive] = useState(0);
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 ${className}`}>
      {steps.map((s, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`relative border-b-2 px-6 py-5 text-left text-[0.7rem] tracking-[0.06em] transition-colors sm:border-r sm:border-border sm:last:border-r-0 ${
            i === active ? "border-primary font-semibold text-foreground" : "border-transparent font-normal text-muted-foreground hover:text-foreground"
          }`}
        >
          <span className="relative z-10 block">{s}</span>
          {i === active && (
            <motion.span
              layoutId="progress-underline"
              className="absolute bottom-[-2px] left-0 h-0.5 w-full bg-primary"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}