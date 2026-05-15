"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#C8102E] via-[#D42A4A] to-[#9E0C22] relative overflow-hidden">
      {/* Elegant glassmorphic background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(255,255,255,0.06)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(255,255,255,0.04)_0%,_transparent_40%)] pointer-events-none" />
      
      <div className="container-site relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-white leading-[1] mb-6" style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}>
            READY TO<br />
            <span className="italic font-light text-white/90">EXECUTE?</span>
          </h2>
          <p className="font-body text-[15px] md:text-[17px] text-white/70 max-w-lg mx-auto leading-[1.6] mb-10 font-light">
            Stop paying for presentations. Start paying for results. Join the brands that are building the future with Cazoo Space.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/partner"
              className="inline-flex items-center justify-center font-body text-[14px] md:text-[15px] font-bold text-[#C8102E] bg-white px-9 md:px-10 py-3.5 md:py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
            >
              Initiate Engagement →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body text-[14px] font-medium text-white/70 hover:text-white transition-colors py-1.5 border-b border-white/20 hover:border-white transition-all"
            >
              Learn our story
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
