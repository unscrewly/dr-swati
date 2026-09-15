import React, { useEffect, useRef, useState } from "react";

export default function StatCounter({ value, decimals = 0, prefix = "", suffix = "", label }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const ease = (t) => 1 - Math.pow(1 - t, 3);
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              setDisplay(value * ease(p));
              if (p < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <div className="font-heading text-[2.6rem] font-extrabold leading-none tracking-[-0.035em] text-surface-dark sm:text-[2.8rem]">
        {prefix}
        {display.toFixed(decimals)}
        {suffix}
      </div>
      {label && <div className="mt-1.5 text-[0.7rem] text-muted-foreground">{label}</div>}
    </div>
  );
}