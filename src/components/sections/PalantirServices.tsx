"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, DollarSign, Landmark, Cpu, Zap, Sparkles, ArrowRight, Send } from "lucide-react";

const services = [
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "B2B Sales",
    desc: "Enterprise ground-game. We provide the physical presence, reference installations, and relationship events needed to close complex deals.",
    tag: "SALES",
    slug: "b2b-sales",
  },
  {
    icon: <DollarSign size={28} strokeWidth={1.5} />,
    title: "FinTech",
    desc: "Cutting-edge marketing strategies tailored for financial technology firms, helping you build trust and scale user acquisition globally.",
    tag: "FINANCE TECH",
    slug: "fintech",
  },
  {
    icon: <Landmark size={28} strokeWidth={1.5} />,
    title: "Financial Services",
    desc: "Elevating traditional financial institutions with modern branding, ensuring compliance while driving digital transformation and engagement.",
    tag: "FINANCE",
    slug: "financial-services",
  },
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    title: "Technology",
    desc: "Comprehensive brand positioning for software vendors and hardware enterprises, translating complex technical specs into compelling narratives.",
    tag: "TECH",
    slug: "technology",
  },
  {
    icon: <Zap size={28} strokeWidth={1.5} />,
    title: "Energy",
    desc: "Strategic communications for the energy sector, highlighting sustainability initiatives, infrastructure developments, and grid modernizations.",
    tag: "ENERGY",
    slug: "energy",
  },
  {
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    title: "Brand Activation",
    desc: "High-impact experiential campaigns and pop-ups that transform passive observers into loyal brand advocates through immersive human connection.",
    tag: "ACTIVATION",
    slug: "brand-activation",
  },
];

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
      className="group relative bg-white border border-[#EBEBEB] rounded-2xl p-6 md:p-7 transition-all duration-300 hover:border-[#C8102E]/30 hover:shadow-[0_8px_30px_rgba(200,16,46,0.06)] hover:-translate-y-1 flex flex-col"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#FFF0F2] flex items-center justify-center text-[#C8102E] mb-5 transition-all duration-300 group-hover:bg-[#C8102E] group-hover:text-white">
        {svc.icon}
      </div>

      {/* Tag */}
      <span className="inline-block font-mono text-[9px] tracking-[0.15em] text-[#C8102E] bg-[#FFF0F2] px-2 py-0.5 rounded-sm mb-3 w-fit">
        {svc.tag}
      </span>

      {/* Title */}
      <h3 className="font-display text-[22px] md:text-[26px] text-[#1A1A1A] leading-none mb-3">
        {svc.title.toUpperCase()}
      </h3>

      {/* Desc */}
      <p className="font-body text-[13px] text-black/50 leading-[1.7] mb-6 flex-grow">
        {svc.desc}
      </p>

      {/* Bottom: Email (left) + Learn More (right) */}
      <div className="border-t border-black/5 pt-5 mt-auto">
        <div className="flex flex-col gap-3">
          {/* Inline email capture */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your work email"
              className="flex-1 min-w-0 bg-[#F9F9F9] border border-black/10 rounded-lg px-3 py-2 font-body text-[12px] text-[#1A1A1A] placeholder:text-[#999] focus:outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E] transition-all"
              required
            />
            <button
              type="submit"
              className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#C8102E] text-white flex items-center justify-center hover:bg-[#A00D24] transition-colors"
              aria-label="Submit email"
            >
              <Send size={14} strokeWidth={2} />
            </button>
          </form>
          {submitted && (
            <p className="font-body text-[11px] text-green-600 animate-pulse">Thank you! We'll be in touch.</p>
          )}

          {/* Learn more link */}
          <Link
            href={`/services/${svc.slug}`}
            className="inline-flex items-center justify-between font-body text-[13px] text-[#C8102E] font-medium hover:text-[#A00D24] transition-colors group/link"
          >
            <span>Learn more</span>
            <ArrowRight size={14} strokeWidth={2} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

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
            <ServiceCard key={i} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
