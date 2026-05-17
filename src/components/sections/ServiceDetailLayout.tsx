"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight, Check, Send } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCapability {
  title: string;
  desc: string;
  icon: ReactNode;
}

interface ServiceProcess {
  step: string;
  title: string;
  desc: string;
}

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface ServiceDetailProps {
  tag: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  heroDescription: string;
  capabilities: ServiceCapability[];
  process: ServiceProcess[];
  whySection: {
    heading: string;
    points: string[];
  };
  faqs: ServiceFAQ[];
}

export default function ServiceDetailLayout({
  tag,
  title,
  titleAccent,
  subtitle,
  heroDescription,
  capabilities,
  process,
  whySection,
  faqs,
}: ServiceDetailProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden border-b border-black/5">
        <div className="container-site max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <span className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-[#FFF0F2] border border-[#C8102E]/10 text-[#C8102E] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
              {tag}
            </span>

            <h1 className="font-display text-[#1A1A1A] leading-[1] mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              {title} <span className="text-[#C8102E]">{titleAccent}</span>
            </h1>

            <p className="font-body text-[#555] text-[16px] md:text-[18px] leading-[1.8] mb-10 max-w-2xl">
              {heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 font-body text-[15px] font-bold text-white bg-[#C8102E] px-8 py-4 rounded-xl hover:bg-[#A00D24] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get Started <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-body text-[15px] font-medium text-[#1A1A1A] bg-[#F5F5F5] px-8 py-4 rounded-xl hover:bg-[#EBEBEB] transition-all duration-300"
              >
                All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SUBTITLE BAND ─── */}
      <section className="py-12 md:py-16 bg-[#F9F9F9] border-b border-black/5">
        <div className="container-site max-w-5xl mx-auto">
          <p className="font-body text-[#1A1A1A] text-[20px] md:text-[24px] leading-[1.6] font-medium text-center max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      {/* ─── CAPABILITIES ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-white border border-black/5 text-[#C8102E] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-6 shadow-sm mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
              WHAT WE DELIVER
            </span>
            <h2 className="font-display text-[#1A1A1A] leading-[1.1] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Core <span className="text-[#C8102E]">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="group bg-white border border-[#EBEBEB] rounded-2xl p-7 md:p-8 transition-all duration-300 hover:border-[#C8102E]/30 hover:shadow-[0_8px_30px_rgba(200,16,46,0.06)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF0F2] flex items-center justify-center text-[#C8102E] mb-5 transition-all duration-300 group-hover:bg-[#C8102E] group-hover:text-white">
                  {cap.icon}
                </div>
                <h3 className="font-display text-[20px] md:text-[22px] text-[#1A1A1A] leading-none mb-3">
                  {cap.title.toUpperCase()}
                </h3>
                <p className="font-body text-[14px] text-black/50 leading-[1.7]">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-16 md:py-24 bg-[#F9F9F9] border-y border-black/5">
        <div className="container-site max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-white border border-black/5 text-[#C8102E] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-6 shadow-sm mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
              OUR PROCESS
            </span>
            <h2 className="font-display text-[#1A1A1A] leading-[1.1] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              How We <span className="text-[#C8102E]">Execute</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="flex gap-6 md:gap-8 items-start bg-white rounded-2xl p-6 md:p-8 border border-[#EBEBEB] hover:border-[#C8102E]/20 transition-colors"
              >
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#C8102E] text-white flex items-center justify-center font-display text-[20px] md:text-[24px]">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display text-[18px] md:text-[22px] text-[#1A1A1A] leading-none mb-2">{step.title.toUpperCase()}</h3>
                  <p className="font-body text-[14px] text-black/50 leading-[1.7]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CAZOO SPACE ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-white border border-black/5 text-[#C8102E] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
                WHY US
              </span>
              <h2 className="font-display text-[#1A1A1A] leading-[1.1] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                {whySection.heading}
              </h2>
              <div className="flex flex-col gap-4">
                {whySection.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFF0F2] flex items-center justify-center text-[#C8102E] mt-0.5">
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <p className="font-body text-[14px] md:text-[15px] text-[#555] leading-[1.7]">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Inline CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1A1A1A] rounded-[24px] p-8 md:p-10"
            >
              <h3 className="font-display text-white text-[24px] md:text-[28px] leading-[1.1] mb-4">
                Ready to <span className="text-[#C8102E]">talk?</span>
              </h3>
              <p className="font-body text-white/60 text-[14px] leading-[1.7] mb-8">
                Drop your email and we will have one of our execution directors reach out to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 font-body text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-[#C8102E] transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full group inline-flex items-center justify-center gap-2 font-body text-[15px] font-bold text-white bg-[#C8102E] px-8 py-4 rounded-xl hover:bg-[#A00D24] transition-all duration-300"
                >
                  <span>Request Briefing</span>
                  <Send size={14} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
                </button>
                {submitted && (
                  <p className="font-body text-[13px] text-green-400 text-center animate-pulse">Thank you! Our team will reach out soon.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 bg-[#F9F9F9] border-t border-black/5">
        <div className="container-site max-w-4xl mx-auto px-4 md:px-0">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-[#1A1A1A] leading-[1.1] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Frequently Asked <span className="text-[#C8102E]">Questions</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;
              return (
                <div
                  key={index}
                  className={`border transition-colors duration-300 ${isOpen ? 'border-[#C8102E]/20 bg-white shadow-sm' : 'border-black/5 bg-white hover:border-black/10'}`}
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                  >
                    <span className={`font-body text-[16px] md:text-[18px] font-medium transition-colors duration-300 ${isOpen ? 'text-[#C8102E]' : 'text-[#1A1A1A] group-hover:text-[#C8102E]'}`}>
                      {faq.question}
                    </span>
                    <div className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#1A1A1A]/5 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#C8102E]/10 text-[#C8102E]' : 'text-[#1A1A1A]'}`}>
                      <ChevronDown size={18} strokeWidth={2} />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 md:p-6 pt-0 font-body text-[14px] md:text-[15px] text-[#555] leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#C8102E] via-[#D42A4A] to-[#9E0C22] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(255,255,255,0.08)_0%,_transparent_50%)] pointer-events-none" />
        <div className="container-site max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-display text-white leading-[1.1] mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            LET'S <span className="italic">EXECUTE.</span>
          </h2>
          <p className="font-body text-white/80 text-[16px] leading-[1.8] mb-10 max-w-xl mx-auto">
            Stop paying for presentations. Start paying for results. Book a capability briefing and see what real execution looks like.
          </p>
          <Link
            href="/partner"
            className="inline-flex items-center justify-center font-body text-[15px] font-bold text-[#C8102E] bg-white px-10 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Initiate Engagement →
          </Link>
        </div>
      </section>
    </div>
  );
}
