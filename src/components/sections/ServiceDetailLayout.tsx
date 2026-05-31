"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowRight, Check, Send, Plus, Minus } from "lucide-react";
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
  const [activeCap, setActiveCap] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    setError(false);

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Quick Lead (Service Page)",
          email: email,
          type: tag,
          details: `Lead captured from the inline email form on the ${title} detailed service page.`
        }),
      });

      if (!response.ok) throw new Error();

      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  const toggleCap = (index: number) => {
    setActiveCap(activeCap === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Subtle animated background blur */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8102E]/[0.03] rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
        
        <div className="container-site max-w-5xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-[#C8102E]" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#C8102E] font-semibold uppercase">
                {tag}
              </span>
            </div>

            <h1 className="font-display text-[#1A1A1A] leading-[0.95] mb-8 text-5xl md:text-6xl lg:text-7xl">
              {title} <span className="text-[#C8102E] italic font-light">{titleAccent}</span>
            </h1>

            <p className="font-body text-[#555] text-[18px] md:text-[22px] leading-[1.6] max-w-2xl font-light">
              {heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SUBTITLE BAND ─── */}
      <section className="py-12 md:py-16 bg-[#F9F9F9] border-y border-black/5">
        <div className="container-site max-w-5xl mx-auto px-4 md:px-6">
          <p className="font-body text-[#1A1A1A] text-[20px] md:text-[24px] leading-[1.6] font-light text-center max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      {/* ─── CAPABILITIES (INTERACTIVE ACCORDION) ─── */}
      <section className="py-20 md:py-28">
        <div className="container-site max-w-5xl mx-auto px-4 md:px-6">
          <div className="mb-12 md:mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#C8102E] font-semibold uppercase block mb-4">
              WHAT WE DELIVER
            </span>
            <h2 className="font-display text-[#1A1A1A] text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Core <span className="italic font-light">Capabilities.</span>
            </h2>
          </div>

          <div className="border-t border-black/10">
            {capabilities.map((cap, index) => {
              const isActive = activeCap === index;
              const num = (index + 1).toString().padStart(2, "0");

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-black/10 group"
                >
                  {/* Header (Clickable) */}
                  <button
                    onClick={() => toggleCap(index)}
                    className="w-full flex items-center justify-between py-8 md:py-10 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-6 md:gap-12">
                      <span 
                        className={`font-mono text-xl md:text-2xl transition-colors duration-500 ${
                          isActive ? "text-[#C8102E]" : "text-[#1A1A1A]/20 group-hover:text-[#1A1A1A]/40"
                        }`}
                      >
                        {num}
                      </span>
                      <h3 
                        className={`font-display text-2xl md:text-4xl lg:text-5xl transition-colors duration-500 ${
                          isActive ? "text-[#1A1A1A]" : "text-[#1A1A1A]/60 group-hover:text-[#1A1A1A]"
                        }`}
                      >
                        {cap.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-8">
                      {/* Desktop Icon - Hidden on small screens */}
                      <div 
                        className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
                          isActive ? "bg-[#FFF0F2] text-[#C8102E]" : "bg-transparent text-[#1A1A1A]/20"
                        }`}
                      >
                        {cap.icon}
                      </div>
                      {/* Toggle Icon */}
                      <div 
                        className={`flex items-center justify-center transition-transform duration-500 ${
                          isActive ? "rotate-180 text-[#C8102E]" : "text-[#1A1A1A]/40"
                        }`}
                      >
                        {isActive ? <Minus size={24} strokeWidth={1.5} /> : <Plus size={24} strokeWidth={1.5} />}
                      </div>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pl-[52px] md:pl-[84px] pr-4 max-w-3xl">
                          <p className="font-body text-[#555] text-[16px] md:text-[18px] leading-[1.8] font-light mb-8">
                            {cap.desc}
                          </p>
                          
                          <Link
                            href="/partner"
                            className="inline-flex items-center gap-3 font-body text-[14px] font-bold text-white bg-[#1A1A1A] hover:bg-[#C8102E] px-8 py-4 rounded-xl transition-all duration-300 group/link hover:shadow-lg hover:shadow-[#C8102E]/20"
                          >
                            Get Started
                            <ArrowRight size={16} strokeWidth={2.5} className="group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-20 md:py-28 bg-[#F9F9F9] border-y border-black/5">
        <div className="container-site max-w-5xl mx-auto px-4 md:px-6">
          <div className="mb-12 md:mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#C8102E] font-semibold uppercase block mb-4">
              OUR PROCESS
            </span>
            <h2 className="font-display text-[#1A1A1A] text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              How We <span className="italic font-light">Execute.</span>
            </h2>
          </div>

          <div className="flex flex-col border-t border-black/10">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-black/10 group"
              >
                <div className="flex-shrink-0 font-mono text-3xl md:text-4xl text-[#1A1A1A]/10 group-hover:text-[#C8102E] transition-colors duration-300">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display text-[22px] md:text-[28px] text-[#1A1A1A] leading-none mb-4 group-hover:text-[#C8102E] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-body text-[16px] md:text-[17px] text-[#555] leading-[1.8] font-light max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#C8102E] font-semibold uppercase block mb-4">
                WHY US
              </span>
              <h2 className="font-display text-[#1A1A1A] leading-[1.1] mb-10 text-4xl md:text-5xl lg:text-6xl">
                {whySection.heading}
              </h2>
              <div className="flex flex-col gap-6">
                {whySection.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mt-2.5 flex-shrink-0" />
                    <p className="font-body text-[16px] md:text-[18px] font-light text-[#555] leading-[1.7]">{point}</p>
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
              className="bg-[#1A1A1A] rounded-[24px] p-8 md:p-12 shadow-2xl"
            >
              <h3 className="font-display text-white text-[28px] md:text-[36px] leading-[1.1] mb-4">
                Ready to <span className="text-[#C8102E] italic font-light">talk?</span>
              </h3>
              <p className="font-body text-white/60 text-[16px] leading-[1.7] mb-8 font-light">
                Drop your email and we will have one of our execution directors reach out to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  placeholder="Your work email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 font-body text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-[#C8102E] transition-all disabled:opacity-50"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group inline-flex items-center justify-center gap-3 font-body text-[15px] font-bold text-white bg-[#C8102E] px-8 py-4 rounded-xl hover:bg-[#A00D24] transition-all duration-300 disabled:opacity-50"
                >
                  <span>{loading ? "Requesting..." : "Request Briefing"}</span>
                  {!loading && <Send size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />}
                </button>
                {submitted && (
                  <p className="font-body text-[13px] text-green-400 text-center animate-pulse mt-2">Thank you! Our team will reach out soon.</p>
                )}
                {error && (
                  <p className="font-body text-[13px] text-red-400 text-center animate-pulse mt-2">Failed to submit. Try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 md:py-28 bg-[#F9F9F9] border-t border-black/5">
        <div className="container-site max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-display text-[#1A1A1A] leading-[1.1] text-4xl md:text-5xl lg:text-6xl">
              Frequently Asked <span className="text-[#C8102E] italic font-light">Questions.</span>
            </h2>
          </div>

          <div className="flex flex-col border-t border-black/10">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;
              return (
                <div key={index} className="border-b border-black/10">
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none group"
                  >
                    <span className={`font-body text-[17px] md:text-[20px] font-light transition-colors duration-300 pr-8 ${isOpen ? 'text-[#C8102E]' : 'text-[#1A1A1A] group-hover:text-[#C8102E]'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#C8102E]' : 'text-[#1A1A1A]/40'}`}>
                      {isOpen ? <Minus size={24} strokeWidth={1.5} /> : <Plus size={24} strokeWidth={1.5} />}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 font-body text-[16px] md:text-[17px] text-[#555] font-light leading-[1.8] max-w-3xl">
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#C8102E] via-[#D42A4A] to-[#9E0C22] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.08)_0%,transparent_50%)] pointer-events-none" />
        <div className="container-site max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Ready to <span className="italic font-light">execute?</span>
          </h2>
          <p className="font-body text-white/80 text-[17px] md:text-[19px] leading-[1.8] mb-10 max-w-xl mx-auto font-light">
            Tell us your objective. We will match you to the right team and deploy within days.
          </p>
          <Link
            href="/partner"
            className="inline-flex items-center justify-center gap-3 font-body text-[15px] font-bold text-[#C8102E] bg-white px-10 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Partner With Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
