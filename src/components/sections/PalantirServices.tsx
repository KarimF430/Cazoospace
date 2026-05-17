"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, DollarSign, Landmark, Cpu, Zap, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "B2B Sales",
    desc: "Enterprise ground-game. We provide the physical presence, reference installations, and relationship events needed to close complex deals.",
    tag: "SALES",
  },
  {
    icon: <DollarSign size={28} strokeWidth={1.5} />,
    title: "FinTech",
    desc: "Cutting-edge marketing strategies tailored for financial technology firms, helping you build trust and scale user acquisition globally.",
    tag: "FINANCE TECH",
  },
  {
    icon: <Landmark size={28} strokeWidth={1.5} />,
    title: "Financial Services",
    desc: "Elevating traditional financial institutions with modern branding, ensuring compliance while driving digital transformation and engagement.",
    tag: "FINANCE",
  },
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    title: "Technology",
    desc: "Comprehensive brand positioning for software vendors and hardware enterprises, translating complex technical specs into compelling narratives.",
    tag: "TECH",
  },
  {
    icon: <Zap size={28} strokeWidth={1.5} />,
    title: "Energy",
    desc: "Strategic communications for the energy sector, highlighting sustainability initiatives, infrastructure developments, and grid modernizations.",
    tag: "ENERGY",
  },
  {
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    title: "Brand Activation",
    desc: "High-impact experiential campaigns and pop-ups that transform passive observers into loyal brand advocates through immersive human connection.",
    tag: "ACTIVATION",
  },
];

export default function AgencyServices() {
  return (
    <section id="agency" className="section-padding bg-white">
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
            OUR EXPERTISE
          </span>
          <h2 className="section-heading mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Industry <span className="text-[#C8102E]">Experience</span>
          </h2>
          <p className="font-body text-[14px] md:text-[15px] text-black/50 max-w-lg mx-auto">
            Deep domain knowledge across six core verticals, engineered for measurable outcomes and brand growth.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative bg-white border border-[#EBEBEB] rounded-2xl p-6 md:p-7 transition-all duration-300 hover:border-[#C8102E]/30 hover:shadow-[0_8px_30px_rgba(200,16,46,0.06)] hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#FFF0F2] flex items-center justify-center text-[#C8102E] mb-5 transition-all duration-300 group-hover:bg-[#C8102E] group-hover:text-white">
                {svc.icon}
              </div>

              {/* Tag */}
              <span className="inline-block font-mono text-[9px] tracking-[0.15em] text-[#C8102E] bg-[#FFF0F2] px-2 py-0.5 rounded-sm mb-3">
                {svc.tag}
              </span>

              {/* Title */}
              <h3 className="font-display text-[22px] md:text-[26px] text-[#1A1A1A] leading-none mb-3">
                {svc.title.toUpperCase()}
              </h3>

              {/* Desc */}
              <p className="font-body text-[13px] text-black/50 leading-[1.7] mb-5">
                {svc.desc}
              </p>

              {/* Link */}
              <Link href="/services" className="btn-ghost text-[13px]">
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
