"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const executionCards = [
    {
      title: "Large-Scale Rollouts",
      desc: "We deploy field teams across multiple properties simultaneously, ensuring technology is activated portfolio-wide.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
      ),
    },
    {
      title: "Measurable Growth",
      desc: "We track registrations, app downloads, and daily active users — reporting directly against your KPIs.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white relative overflow-hidden scroll-mt-20">
      <div className="container-site relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Sticky Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-white border border-black/5 text-[#C8102E] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
                About Us
              </span>
              <h2 className="font-display text-[3rem] md:text-[4rem] leading-[0.95] text-[#1A1A1A] mb-6">
                Our <span className="text-[#C8102E] italic font-light">DNA.</span>
              </h2>
              <p className="font-body text-[14px] md:text-[15px] text-[#555] leading-[1.8] font-light pr-4 mb-10">
                At <strong className="text-[#1A1A1A] font-semibold">CAZOO SPACE</strong>, we believe the future of marketing is built through human connection, creativity, and strategic engagement. Our agency combines modern branding, experiential activations, and growth-focused marketing solutions to help businesses stand out in today's competitive market.
              </p>

              {/* WORLD-CLASS 'TRINITY-MIRROR' LOGO ASSEMBLY */}
              <div className="relative w-full py-12 md:py-16 flex items-center justify-start overflow-visible group/logo-area">
                <motion.div
                  className="relative h-20 md:h-28 w-full max-w-[450px]"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {/* FRAGMENT 1: THE ICON (Elephant) */}
                  <motion.div
                    className="absolute inset-0 z-30"
                    variants={{
                      initial: { x: -60, y: -10, opacity: 0, scale: 0.9 },
                      animate: {
                        x: 0, y: 0, opacity: 1, scale: 1,
                        transition: { type: "spring", stiffness: 180, damping: 15 }
                      }
                    }}
                  >
                    <img
                      src="/logo-1.png"
                      alt="Brand Icon"
                      className="h-full w-auto"
                      style={{ clipPath: 'inset(0 69% 0 0)' }} // Small overlap to hide seam
                    />
                  </motion.div>

                  {/* FRAGMENT 2: THE PRIMARY TEXT (CAZOO) */}
                  <motion.div
                    className="absolute inset-0 z-20"
                    variants={{
                      initial: { x: 40, y: 15, opacity: 0, scale: 1.1, filter: "blur(10px)" },
                      animate: {
                        x: 0, y: 0, opacity: 1, scale: 1, filter: "blur(0px)",
                        transition: { type: "spring", stiffness: 160, damping: 20, delay: 0.05 }
                      }
                    }}
                  >
                    <img
                      src="/logo-1.png"
                      alt="Brand Text"
                      className="h-full w-auto"
                      style={{ clipPath: 'inset(0 0 32% 30%)' }}
                    />
                  </motion.div>

                  {/* FRAGMENT 3: THE SUB-TEXT (SPACE) */}
                  <motion.div
                    className="absolute inset-0 z-10"
                    variants={{
                      initial: { y: 30, opacity: 0, scale: 0.8 },
                      animate: {
                        y: 0, opacity: 1, scale: 1,
                        transition: { type: "spring", stiffness: 140, damping: 22, delay: 0.15 }
                      }
                    }}
                  >
                    <img
                      src="/logo-1.png"
                      alt="Brand Subtext"
                      className="h-full w-auto"
                      style={{ clipPath: 'inset(67% 0 0 30%)' }} // Small overlap with the text above
                    />
                  </motion.div>

                  {/* Energy Aura Pulse */}
                  <motion.div
                    className="absolute inset-0 bg-[#C8102E]/5 blur-[100px] rounded-full scale-150 -z-10"
                    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.3, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8 pt-2 lg:pt-4">

            {/* Vision & Mission Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-mono text-[12px] text-[#C8102E] tracking-[0.15em] font-semibold uppercase mb-4 flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#C8102E]" /> Vision
                </h3>
                <p className="font-body text-[17px] md:text-[20px] text-[#1A1A1A] leading-[1.6] font-medium">
                  To shape the future of experiential marketing by creating impactful campaigns that leave lasting impressions and build long-term brand loyalty.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-mono text-[12px] text-[#C8102E] tracking-[0.15em] font-semibold uppercase mb-4 flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#C8102E]" /> Mission
                </h3>
                <p className="font-body text-[17px] md:text-[20px] text-[#1A1A1A] leading-[1.6] font-medium">
                  To provide the most updated and effective business offering, experience, and quality coupled with the best level of service in smart marketing and innovation.
                </p>
              </motion.div>
            </div>

            <hr className="border-black/5 mb-12" />

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-14"
            >
              <h3 className="font-mono text-[12px] text-[#C8102E] tracking-[0.15em] font-semibold uppercase mb-4 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#C8102E]" /> Core Values
              </h3>
              <p className="font-body text-[15px] md:text-[16px] text-[#555] leading-[1.8] font-light max-w-[700px]">
                At <strong className="text-[#1A1A1A] font-semibold">CAZOO SPACE</strong>, our core values define everything we create and every partnership we build. We believe in innovation, creativity, and strategic thinking that drive meaningful growth, while staying rooted in authentic connections, trust, and long-term relationships.
                <br /><br />
                With a customer-first mindset and a passion for modern brand culture, we focus on delivering real-world impact through thoughtful execution and experience-driven marketing solutions.
              </p>
            </motion.div>

            {/* Rollout & Growth Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {executionCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  className="p-6 md:p-8 rounded-3xl bg-[#FAFAFA] border border-black/5 hover:border-[#C8102E]/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#C8102E] mb-5 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                  <h4 className="font-display text-[19px] text-[#1A1A1A] mb-3">{card.title}</h4>
                  <p className="font-body text-[14px] text-[#777] leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
