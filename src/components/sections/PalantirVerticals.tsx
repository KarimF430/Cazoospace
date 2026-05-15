"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const verticals = [
  {
    tag: "BRAND ACTIVATION",
    title: "Experiential Marketing",
    desc: "Executing high-impact ground events and activations that turn passive observers into loyal brand advocates.",
    stats: "150+ successful campaigns",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    tag: "B2B SALES",
    title: "Enterprise Enablement",
    desc: "Driving enterprise pipeline through targeted outreach, strategic positioning, and meaningful relationship building.",
    stats: "2.5x avg conversion rate",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    tag: "STRATEGY",
    title: "Growth Consulting",
    desc: "Auditing your brand presence and engineering scalable, data-driven growth models tailored to your industry.",
    stats: "$3B+ client portfolio",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  },
];

export default function PalantirVerticals() {
  return (
    <section className="py-10 md:py-16 bg-[#1A1A1A] scroll-mt-24">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-[#C8102E] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-6 shadow-sm mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
            WHO WE SERVE
          </span>
          <h2 className="font-display text-white leading-[1] mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Built on <span className="text-[#C8102E]">Three Pillars</span>
          </h2>
          <Link href="/services" className="inline-flex items-center gap-2 font-body text-[13px] font-medium text-white/40 hover:text-white transition-colors">
            View all services →
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {verticals.map((vert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative bg-[#222222] rounded-2xl p-6 md:p-7 border border-white/[0.04] transition-all duration-300 hover:border-[#C8102E]/20 hover:bg-[#282828]"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C8102E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Tag */}
                <span className="inline-block font-mono text-[9px] tracking-[0.12em] text-[#C8102E] bg-[#C8102E]/10 px-2.5 py-0.5 rounded-md mb-5 uppercase">
                  {vert.tag}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center text-white/30 mb-5 transition-all duration-300 group-hover:bg-[#C8102E]/10 group-hover:text-[#C8102E]">
                  {vert.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-white leading-none mb-3 transition-colors duration-300 group-hover:text-[#C8102E]" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}>
                  {vert.title.toUpperCase()}
                </h3>

                {/* Description */}
                <p className="font-body text-[13px] text-white/40 leading-[1.6] mb-6">
                  {vert.desc}
                </p>

                {/* Stats pill */}
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                  <span className="font-mono text-[10px] text-white/30 tracking-wider uppercase">{vert.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
