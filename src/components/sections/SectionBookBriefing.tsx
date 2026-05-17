"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SectionBookBriefing() {
  return (
    <section id="briefing" className="section-padding bg-gradient-to-br from-[#C8102E] via-[#D42A4A] to-[#9E0C22] relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(255,255,255,0.08)_0%,_transparent_50%)] pointer-events-none" />
      
      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <span className="font-display text-white text-[48px] md:text-[64px] leading-none block">FREE</span>
                  <span className="font-body text-white/80 text-[18px] md:text-[24px] font-light block">Briefing</span>
                  <span className="font-mono text-[10px] text-white/50 mt-2 block">30 MIN CALL</span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-0 bg-white text-[#C8102E] px-4 py-2.5 rounded-xl shadow-lg animate-float">
                <span className="font-body text-[12px] font-bold block">Book Now</span>
                <span className="font-body text-[10px] text-[#C8102E]/60 block">No commitment</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              SCHEDULE A CALL
            </span>
            <h2 className="font-display text-white leading-[0.9] mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              BOOK A<br />CAPABILITY<br />BRIEFING.
            </h2>
            <p className="font-body text-[14px] text-white/80 leading-[1.8] mb-8 max-w-md">
              Get a 30-minute walkthrough of how we would execute for your specific portfolio. No pitch deck — just an honest assessment of impact.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {["Portfolio-specific strategy", "Timeline & deployment roadmap", "Custom pricing for your properties"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="font-body text-[13px] text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/partner" className="inline-flex items-center justify-center font-body text-[14px] font-semibold text-[#C8102E] bg-white px-8 py-3.5 rounded-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]">
              Request Briefing →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
