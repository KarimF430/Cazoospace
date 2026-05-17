"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PalantirCaseStudies() {
  const cases = [
    { id: "PROJECT_001", client: "FINTECH GROWTH", outcome: "94% Adoption across 12 national markets in 90 days through targeted brand activation.", slug: "fintech-market-adoption", metric: "94%" },
    { id: "PROJECT_002", client: "B2B ENTERPRISE", outcome: "$42M Pipeline generated through strategic human-led field marketing events.", slug: "enterprise-pipeline-growth", metric: "$42M" },
    { id: "PROJECT_003", client: "ENERGY SECTOR", outcome: "100% Brand transition and employee engagement achieved ahead of schedule.", slug: "energy-brand-transition", metric: "100%" },
    { id: "PROJECT_004", client: "TECH STARTUP", outcome: "10X ROI on initial experiential marketing investment via innovative human touchpoints.", slug: "startup-roi-activation", metric: "10X" },
  ];

  return (
    <section id="work" className="py-10 md:py-12 bg-black">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#C8102E] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-6 shadow-sm mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
            // 005 — WORK
          </span>
          <h2 className="font-display text-white leading-none" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            PROOF OF <span className="text-[#C8102E]">EXECUTION</span>
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-white/5">
          {cases.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.25, ease: "easeOut", delay: i * 0.03 }}
            >
              <Link
                href={`/work/${work.slug}`}
                className="group relative py-5 md:py-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-8 border-b border-white/5 hover:bg-white/[0.02] transition-colors px-2 md:px-4"
              >
                <div className="absolute left-0 top-0 w-[2px] h-full bg-[#C8102E] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <span className="font-display text-[24px] md:text-[28px] text-[#C8102E] w-full md:w-24 flex-shrink-0 leading-none">{work.metric}</span>
                <span className="font-display text-[16px] md:text-[20px] text-white w-full md:w-48 flex-shrink-0 leading-none tracking-tight">{work.client}</span>
                <span className="font-body text-[12px] text-white/30 flex-grow leading-relaxed">{work.outcome}</span>
                <span className="font-mono text-[12px] text-[#C8102E]/50 group-hover:text-[#C8102E] transition-all duration-200 group-hover:translate-x-1 hidden md:block">VIEW CASE</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
