"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    { label: "Avg Adoption Rate", target: 94, suffix: "%", prefix: "" },
    { label: "Client Portfolio Value", target: 3, suffix: "B+", prefix: "$" },
    { label: "Avg. Rollout Time", target: 12, suffix: " Weeks", prefix: "" },
  ];

  return (
    <section className="bg-white">
      <div className="container-site py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-4 border-l-[3px] border-[#C8102E]/20"
            >
              <p className="font-display text-[#C8102E] leading-none" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
                <AnimatedNumber target={stat.target} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <p className="font-body text-[13px] md:text-[14px] text-[#555] font-medium mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
