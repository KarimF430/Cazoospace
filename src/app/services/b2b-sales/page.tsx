"use client";

import { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Package, Wifi, Megaphone, Wrench, Plus, Minus } from "lucide-react";

const divisions = [
  {
    num: "01",
    icon: <Building2 size={28} strokeWidth={1} />,
    title: "PropTech & Intercom Solutions",
    body: "Our highest-ticket and most scalable division. We manage full deployment cycles from property manager outreach to installation coordination, driving scalable growth for PropTech brands.",
    services: [
      "Channel partnership sales",
      "Portfolio-level introductions",
      "Demo setup",
      "Property manager outreach",
      "Condo board presentations",
      "Installation coordination",
      "Vendor onboarding",
      "Marketing campaigns",
      "Trade shows & activations",
      "National rollout management",
    ],
  },
  {
    num: "02",
    icon: <Package size={28} strokeWidth={1} />,
    title: "Locker & Smart Delivery",
    body: "Dedicated to the representation and deployment of smart parcel locker solutions for multi-residential and mixed-use developments, handling the complete project lifecycle.",
    services: [
      "Property identification",
      "Developer & strata outreach",
      "Product demonstrations",
      "Installation coordination",
      "Post-installation support",
    ],
  },
  {
    num: "03",
    icon: <Wifi size={28} strokeWidth={1} />,
    title: "Telecom & Connectivity",
    body: "Acting as channel partners to identify and secure MDU bulk internet agreements and fibre upgrades, generating compounding long-term value through strategic property relationships.",
    services: [
      "Bulk internet negotiations",
      "Connectivity assessments",
      "Property manager meetings",
      "Contract facilitation",
      "Account management",
    ],
  },
  {
    num: "04",
    icon: <Megaphone size={28} strokeWidth={1} />,
    title: "Experiential Marketing",
    body: "Deploying high-impact branded field teams, pop-up activations, and immersive events designed to transform passive audiences into highly engaged brand advocates.",
    services: [
      "Brand activation events",
      "Resident engagement",
      "Field ambassador deployment",
      "Trade show representation",
      "Pop-up management",
    ],
  },
  {
    num: "05",
    icon: <Wrench size={28} strokeWidth={1} />,
    title: "Installation Network",
    body: "The operational backbone managing large-scale hardware installations. We coordinate certified installer networks to ensure flawless execution across national portfolios.",
    services: [
      "Network coordination",
      "Project scheduling",
      "Site readiness assessments",
      "Quality assurance",
      "Post-installation certification",
    ],
  },
];

export default function B2BSalesPage() {
  // Start with the first division open by default
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleDivision = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <NavBar />
      <main id="main-content" className="bg-white">
        {/* ── HERO ── */}
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
                  B2B Sales
                </span>
              </div>

              <h1 className="font-display text-[#1A1A1A] leading-[0.95] mb-8 text-5xl md:text-6xl lg:text-7xl">
                Company <span className="text-[#C8102E] italic font-light">Structure.</span>
              </h1>

              <p className="font-body text-[#555] text-[18px] md:text-[22px] leading-[1.6] max-w-2xl font-light">
                Five specialized divisions operating in synergy. We provide the physical presence, strategic positioning, and expert execution required to scale operations and close enterprise deals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── INTERACTIVE ACCORDION LIST ── */}
        <section className="pb-24 md:pb-32">
          <div className="container-site max-w-5xl mx-auto px-4 md:px-6">
            <div className="border-t border-black/10">
              {divisions.map((div, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={div.num}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-black/10 group"
                  >
                    {/* Header (Clickable) */}
                    <button
                      onClick={() => toggleDivision(index)}
                      className="w-full flex items-center justify-between py-8 md:py-10 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-6 md:gap-12">
                        <span 
                          className={`font-mono text-xl md:text-2xl transition-colors duration-500 ${
                            isActive ? "text-[#C8102E]" : "text-[#1A1A1A]/20 group-hover:text-[#1A1A1A]/40"
                          }`}
                        >
                          {div.num}
                        </span>
                        <h2 
                          className={`font-display text-2xl md:text-4xl lg:text-5xl transition-colors duration-500 ${
                            isActive ? "text-[#1A1A1A]" : "text-[#1A1A1A]/60 group-hover:text-[#1A1A1A]"
                          }`}
                        >
                          {div.title}
                        </h2>
                      </div>
                      
                      <div className="flex items-center gap-8">
                        {/* Desktop Icon - Hidden on small screens */}
                        <div 
                          className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
                            isActive ? "bg-[#FFF0F2] text-[#C8102E]" : "bg-transparent text-[#1A1A1A]/20"
                          }`}
                        >
                          {div.icon}
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
                          <div className="pb-10 pl-[52px] md:pl-[84px] pr-4 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                            
                            {/* Left: Body Description */}
                            <div className="md:col-span-6 lg:col-span-7">
                              <p className="font-body text-[#555] text-[16px] md:text-[18px] leading-[1.8] font-light">
                                {div.body}
                              </p>
                              
                              <Link
                                href="/partner"
                                className="inline-flex items-center gap-3 mt-8 font-body text-[14px] font-bold text-white bg-[#1A1A1A] hover:bg-[#C8102E] px-8 py-4 rounded-xl transition-all duration-300 group/link hover:shadow-lg hover:shadow-[#C8102E]/20"
                              >
                                Get Started
                                <ArrowRight size={16} strokeWidth={2.5} className="group-hover/link:translate-x-1 transition-transform" />
                              </Link>
                            </div>

                            {/* Right: Services List */}
                            <div className="md:col-span-6 lg:col-span-5 border-l-0 md:border-l border-black/5 md:pl-10">
                              <span className="font-mono text-[10px] tracking-[0.2em] text-[#1A1A1A]/40 font-semibold uppercase block mb-5">
                                Services Offered
                              </span>
                              <ul className="flex flex-col gap-3">
                                {div.services.map((svc) => (
                                  <li key={svc} className="flex items-start gap-3">
                                    <span className="w-1 h-1 rounded-full bg-[#C8102E] mt-2.5 flex-shrink-0" />
                                    <span className="font-body text-[15px] text-[#333] leading-snug">{svc}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
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

        {/* ── CTA ── */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#C8102E] via-[#D42A4A] to-[#9E0C22] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.08)_0%,transparent_50%)] pointer-events-none" />
          <div className="container-site max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
              Ready to <span className="italic font-light">execute?</span>
            </h2>
            <p className="font-body text-white/80 text-[17px] md:text-[19px] leading-[1.8] mb-10 max-w-xl mx-auto font-light">
              Tell us your objective. We will match you to the right division and deploy within days.
            </p>
            <Link
              href="/partner"
              className="inline-flex items-center justify-center gap-3 font-body text-[15px] font-bold text-[#C8102E] bg-white px-10 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Partner With Us <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
