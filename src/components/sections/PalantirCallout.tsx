"use client";

import { motion } from "framer-motion";

export default function PalantirCallout() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-[#0A0A0A]">
      {/* Subtle textured background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      {/* Massive decorative accent */}
      <motion.div
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0"
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#C8102E_0%,_transparent_60%)] blur-[100px]" />
      </motion.div>

      <div className="container-site relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-white leading-[0.9] mb-6 tracking-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            WE SHOW UP<br />
            <span className="text-[#C8102E] italic">IN PERSON.</span>
          </h2>
          <p className="font-body text-[14px] md:text-[16px] text-white/40 leading-relaxed max-w-xl mx-auto font-light">
            While every other agency is buying you clicks, we are on the ground building the <span className="text-white/60 font-medium">human connections</span> that close enterprise deals and drive long-term brand growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
