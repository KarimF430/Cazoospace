"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    { num: "01", title: "Identify", desc: "We map your portfolio's technology stack and adoption gaps across every property." },
    { num: "02", title: "Match", desc: "We assign specialized field teams trained on your exact hardware and software." },
    { num: "03", title: "Activate", desc: "We deploy on-site, face-to-face activation campaigns that drive real adoption." },
    { num: "04", title: "Scale", desc: "We replicate winning playbooks across your entire portfolio simultaneously." },
  ];

  return (
    <section className="section-padding bg-white">
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
            HOW WE WORK
          </span>
          <h2 className="section-heading mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Our <span className="text-[#C8102E]">Process</span>
          </h2>
          <p className="font-body text-[14px] text-black/50 max-w-lg mx-auto">
            A proven four-step framework that delivers measurable results every time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#C8102E]/10 via-[#C8102E]/30 to-[#C8102E]/10 z-0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative z-10 text-center"
            >
              {/* Step number circle */}
              <div className="w-[56px] h-[56px] rounded-full bg-[#FFF0F2] border-2 border-[#C8102E]/20 flex items-center justify-center mx-auto mb-5">
                <span className="font-display text-[#C8102E] text-[20px]">{step.num}</span>
              </div>

              <h3 className="font-display text-[22px] md:text-[26px] text-[#1A1A1A] leading-none mb-3">
                {step.title.toUpperCase()}
              </h3>
              <p className="font-body text-[13px] text-black/50 leading-[1.7] max-w-[240px] mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
