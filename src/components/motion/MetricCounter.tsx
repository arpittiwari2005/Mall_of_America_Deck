"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function MetricCounter({
  target,
  label,
  isFloat = false,
  prefix = "",
  suffix = "",
}: {
  target: number;
  label: string;
  isFloat?: boolean;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const end = target;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (time: number) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        setCount(end * easeOutQuart);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_45px_120px_rgba(0,0,0,0.25)] text-center">
      <div className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] bg-gradient-to-r from-[#C9A84C] via-[#F0D080] to-[#F8E5A3] bg-clip-text text-transparent leading-none">
        {prefix}
        {isFloat ? count.toFixed(1) : Math.floor(count)}
        {suffix}
      </div>
      <div className="mt-4 text-sm uppercase tracking-[0.3em] text-white/60">
        {label}
      </div>
    </div>
  );
}
