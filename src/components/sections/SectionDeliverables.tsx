"use client";

import { motion } from "framer-motion";

const deliverables = [
  {
    title: "Strategy Decks",
    desc: "Portfolio-level execution plans with KPIs, timelines, and deployment logistics tailored to your properties.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Field Teams",
    desc: "Trained, branded ambassadors deployed directly to your properties for face-to-face activation.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Digital Campaigns",
    desc: "Targeted ads, social content, and SEO strategies that drive qualified leads to your listings.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    title: "Event Production",
    desc: "End-to-end activation from venue logistics to on-day execution for maximum impact.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" x2="4" y1="22" y2="15" />
      </svg>
    ),
  },
  {
    title: "Analytics Reports",
    desc: "Weekly adoption metrics, conversion rates, and ROI dashboards to track every result.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    ),
  },
  {
    title: "Brand Systems",
    desc: "Complete visual identities, guidelines, and collateral packages for consistent branding.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" />
      </svg>
    ),
  },
];

export default function SectionDeliverables() {
  return (
    <section className="py-20 md:py-24 bg-white scroll-mt-24">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-white border border-black/5 text-[#C8102E] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-6 shadow-sm mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
            WHAT YOU GET
          </span>
          <h2 className="font-display text-[#1A1A1A] leading-[0.9] mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Tangible <span className="text-[#C8102E]">Deliverables</span>
          </h2>
          <p className="font-body text-[14px] md:text-[15px] text-[#777] max-w-lg mx-auto leading-[1.7]">
            Every engagement produces measurable outputs — not just reports and recommendations.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              className="group bg-[#FAFAFA] rounded-2xl p-6 md:p-7 border border-transparent transition-all duration-300 hover:bg-white hover:border-[#E0E0E0] hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#FFF0F2] flex items-center justify-center text-[#C8102E] mb-5 transition-all duration-300 group-hover:bg-[#C8102E] group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="font-display text-[20px] md:text-[22px] text-[#1A1A1A] leading-tight mb-2">
                {item.title.toUpperCase()}
              </h3>
              <p className="font-body text-[13px] md:text-[14px] text-[#777] leading-[1.7]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
