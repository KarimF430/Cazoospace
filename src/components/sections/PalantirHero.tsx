"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#C8102E] via-[#D42A4A] to-white">
      {/* Organic blob decoration */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_80%_20%,_rgba(255,200,210,0.3)_0%,_transparent_60%)] pointer-events-none" />

      {/* Detached Elephant Watermark */}
      <motion.div
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        animate={{ opacity: 0.08, rotate: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] pointer-events-none z-0 overflow-hidden rounded-[100px]"
      >
        <img 
          src="/logo-1.png" 
          alt="" 
          className="h-full w-auto max-w-none object-left"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </motion.div>

      <div className="container-site relative z-10 pt-16 md:pt-24 pb-12 md:pb-20">
        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] text-white/80 tracking-[0.15em] bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Canada
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-white leading-[0.9] mb-6" style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}>
          {["The Future of", "Brand Experience", "Powered by Innovation,", "Built for Impact"].map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap items-center gap-3 md:gap-4"
        >
          <Link 
            href="/partner" 
            className="inline-flex items-center justify-center font-body text-[13px] md:text-[14px] font-semibold text-[#C8102E] bg-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-black/10 hover:scale-[1.02]"
          >
            Get Started
          </Link>
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 font-body text-[13px] md:text-[14px] font-semibold text-white hover:text-white/80 transition-colors"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
