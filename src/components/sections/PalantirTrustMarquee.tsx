"use client";

import { motion } from "framer-motion";

export default function PalantirTrustMarquee() {
  const categories = [
    "NATIONAL PROPERTY MANAGEMENT",
    "REGIONAL DEVELOPERS",
    "ENTERPRISE PROPTECH",
    "MULTI-RESIDENTIAL OPERATORS",
    "SMART BUILDING TECH",
    "ACCESS CONTROL PLATFORMS",
  ];

  return (
    <section className="py-16 md:py-16 bg-white overflow-hidden border-y border-black/10">
      <div className="container-site mb-8 md:mb-12">
        <p className="label-mono-red">// TRUSTED BY</p>
      </div>

      <div className="relative flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          className="flex items-center"
        >
          {categories.map((cat, i) => (
            <div key={i} className="flex items-center">
              <span className="font-display text-[36px] md:text-[56px] text-black px-4 md:px-8">{cat}</span>
              <span className="text-[#C8102E] text-[12px] md:text-[16px]">◆</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          className="flex items-center"
        >
          {categories.map((cat, i) => (
            <div key={i} className="flex items-center">
              <span className="font-display text-[36px] md:text-[56px] text-black px-4 md:px-8">{cat}</span>
              <span className="text-[#C8102E] text-[12px] md:text-[16px]">◆</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container-site mt-8 md:mt-12">
        <p className="font-body italic text-[12px] md:text-[13px] text-black/40">
          Named client references available on request.
        </p>
      </div>
    </section>
  );
}
