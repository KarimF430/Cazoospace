"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SectionChemistry() {
  const features = [
    {
      id: "02",
      titleTop: "MATCH",
      titleBottom: "YOUR TEAM!",
      desc: "We assign specialized field teams trained on your exact hardware and software. We align our experts with your requirements.",
      btnText: "FIND YOURS!",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      layout: "image-right",
      borderRadius: "80px 80px 20px 80px",
      marginTop: "0px"
    },
    {
      id: "03",
      titleTop: "ACTIVATE",
      titleBottom: "YOUR SPACE!",
      desc: "We deploy on-site, face-to-face activation campaigns that drive real adoption. We make sure your residents know how to use it.",
      btnText: "ACTIVATE NOW!",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      layout: "image-left",
      borderRadius: "20px 80px 80px 80px",
      marginTop: "-50px" // Overlap slightly
    },
    {
      id: "04",
      titleTop: "SCALE",
      titleBottom: "YOUR GROWTH!",
      desc: "We replicate winning playbooks across your entire portfolio simultaneously. We ensure consistent execution across all locations.",
      btnText: "SCALE FAST!",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      layout: "image-right",
      borderRadius: "80px 20px 80px 80px",
      marginTop: "50px"
    },
  ];

  return (
    <section className="relative py-8 md:py-16 bg-white overflow-hidden">
      <div className="container-site relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-10 md:mb-20 relative max-w-[1200px] mx-auto px-0 md:px-4"
        >
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#C8102E]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

          {/* Detached Elephant Watermark */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: -5 }}
            whileInView={{ opacity: 0.03, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 right-[-10%] md:right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none z-0 overflow-hidden rounded-3xl"
          >
            <Image
              src="/logo-1.png"
              alt=""
              width={500}
              height={500}
              className="h-full w-auto max-w-none object-left"
              style={{ filter: "grayscale(100%)" }}
              aria-hidden="true"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center relative z-10">
            {/* Left Column: The Big Hook */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-black/5 text-[#C8102E] font-mono text-[11px] tracking-[0.2em] font-semibold mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
                WHO WE ARE
              </span>
              <h2 className="font-display text-[2.5rem] md:text-[3.5rem] leading-[1.05] text-[#1A1A1A] mb-8">
                Modern <span className="text-[#C8102E] italic font-light pr-2">experiential</span> marketing & brand growth.
              </h2>

              {/* Highlight Stat */}
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white shadow-xl shadow-black/10 w-full md:max-w-[340px]">
                <div className="font-display text-[4rem] md:text-[5rem] leading-none text-[#C8102E]">
                  20<span className="text-white">+</span>
                </div>
                <div className="font-body text-[13px] md:text-[14px] leading-relaxed text-white/80 font-medium">
                  Years of combined<br />
                  industry experience
                </div>
              </div>
            </div>

            {/* Right Column: The Details & Industries */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="font-body text-[16px] md:text-[18px] text-[#555] leading-[1.8] font-light mb-6 md:mb-10">
                <strong className="text-[#1A1A1A] font-semibold">CAZOO SPACE</strong> focuses on creating meaningful human connections through innovative marketing, experiential activations, and strategic engagement.
                <br /><br />
                Through years of building relationships with major corporations, developers, and emerging brands, we help businesses increase visibility, strengthen trust, and drive long-term growth in today’s evolving market.
              </p>

              <div className="flex flex-col gap-4">
                <p className="font-mono text-[10px] text-[#C8102E] tracking-widest font-semibold uppercase">Our Expertise Across</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {[
                    { label: "B2B Sales", href: "/services/b2b-sales" },
                    { label: "FinTech", href: "/services/fintech" },
                    { label: "Financial Services", href: "/services/financial-services" },
                    { label: "Technology", href: "/services/technology" },
                    { label: "Energy", href: "/services/energy" },
                    { label: "Brand Activation", href: "/services/brand-activation" }
                  ].map((tag) => (
                    <Link key={tag.label} href={tag.href} className="px-4 py-2 rounded-full border border-black/10 text-[13px] font-body text-[#1A1A1A] bg-black/[0.02] hover:bg-[#C8102E] hover:text-white hover:border-[#C8102E] transition-colors">
                      {tag.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Staggered Alternating Layout */}
        <div className="relative max-w-[1000px] mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`flex flex-col ${feature.layout === 'image-left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-center relative z-10 mb-6 md:mb-0`}
              style={{ marginTop: 0 }}
            >
              {/* Image Block */}
              <div className="w-full md:w-1/2 relative h-[260px] md:h-[400px] px-0 md:px-8">
                <div
                  className="absolute inset-y-4 inset-x-2 md:inset-8 overflow-hidden bg-white"
                  style={{
                    borderRadius: feature.borderRadius,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                    border: "8px solid white"
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.titleTop}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Block */}
              <div className={`w-full md:w-1/2 flex flex-col justify-center relative px-4 md:px-12 mt-2 md:mt-0 ${feature.layout === 'image-left' ? 'text-left md:items-start' : 'text-left md:items-end md:text-right'}`}>

                <h3 className="font-display text-[#C8102E] leading-[1.1] mb-2" style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)" }}>
                  <span className="font-bold">{feature.titleTop}</span><br />
                  <span className="font-light">{feature.titleBottom}</span>
                </h3>

                {/* Connecting Line */}
                <div className="relative w-full h-[2px] my-4 md:my-6">
                  <div 
                    className="absolute top-0 h-full bg-[#C8102E] z-0" 
                    style={{
                      width: 'calc(100% + 40px)',
                      ...(feature.layout === 'image-left' 
                        ? { right: 0 } 
                        : { left: 0 })
                    }} 
                  />
                </div>

                <div className={`pt-2 mb-6 ${feature.layout === 'image-left' ? 'md:pr-12' : 'md:pl-12'}`}>
                  <p className="font-body text-[12px] md:text-[13px] text-[#C8102E] leading-relaxed max-w-[300px]">
                    {feature.desc}
                  </p>
                </div>

                <div>
                  <Link href="/partner" className="inline-flex items-center justify-center font-body font-bold text-[11px] md:text-[12px] uppercase tracking-wide text-white bg-[#C8102E] px-6 py-2.5 rounded-full hover:bg-[#9E0C22] transition-colors shadow-lg shadow-[#C8102E]/20">
                    {feature.btnText}
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
