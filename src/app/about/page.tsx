import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PalantirCTA from "@/components/sections/PalantirCTA";
import Image from "next/image";
import { Users, Star, LayoutGrid, Activity } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Cazoo Space",
  description: "At CAZOO SPACE, we believe the future of marketing is built through human connection, creativity, and strategic engagement.",
  alternates: { canonical: "https://cazoospace.com/about" },
};

const corePillars = [
  {
    title: "MATCH YOUR TEAM",
    body: "We assign specialized field teams trained on your exact hardware and software. We align our experts with your requirements.",
    icon: <Users size={22} strokeWidth={1.5} />
  },
  {
    title: "ACTIVATE YOUR SPACE",
    body: "We deploy on-site, face-to-face activation campaigns that drive real adoption. We make sure your residents know how to use it.",
    icon: <Star size={22} strokeWidth={1.5} />
  },
  {
    title: "SCALE YOUR GROWTH",
    body: "We replicate winning playbooks across your entire portfolio simultaneously. We ensure consistent execution across all locations.",
    icon: <LayoutGrid size={22} strokeWidth={1.5} />
  },
  {
    title: "MEASURABLE KPI'S",
    body: "We track registrations, app downloads, and daily active users — reporting directly against your KPIs to ensure measurable growth.",
    icon: <Activity size={22} strokeWidth={1.5} />
  },
];

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        
        {/* CLEANER, SMALLER HERO */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden border-b border-black/5">
          {/* Subtle Red Accent */}
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[600px] bg-[#C8102E]/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
          
          <div className="container-site relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-black/5 text-[#C8102E] font-mono text-[10px] md:text-[11px] tracking-[0.2em] font-semibold mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
              ABOUT US
            </div>
            
            <h1 className="font-display text-[#1A1A1A] leading-[1.05] tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Modern <span className="text-[#C8102E] italic font-light">experiential</span> marketing & brand growth.
            </h1>
            
            <p className="font-body text-[#555] text-[15px] md:text-[17px] leading-[1.8] max-w-2xl font-light">
              At <strong className="text-[#1A1A1A] font-semibold">CAZOO SPACE</strong>, we believe the future of marketing is built through human connection, creativity, and strategic engagement. Our agency combines modern branding, experiential activations, and growth-focused marketing solutions to help businesses stand out in today's competitive market.
            </p>
          </div>
        </section>

        {/* THE STORY LAYOUT */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container-site relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-8">
                <h2 className="font-display text-[2rem] md:text-[3rem] leading-[1.1] text-[#1A1A1A] mb-6">
                  Creating meaningful <span className="text-[#C8102E]">human</span> connections.
                </h2>
                
                <p className="font-body text-[15px] md:text-[16px] text-[#555] leading-[1.8] font-light mb-6">
                  Through years of building relationships with major corporations, developers, and emerging brands, we help businesses increase visibility, strengthen trust, and drive long-term growth in today's evolving market.
                </p>
                
                <p className="font-body text-[15px] md:text-[16px] text-[#555] leading-[1.8] font-light mb-10">
                  Whether you are rolling out new hardware across a massive portfolio or launching an app that needs real user adoption, we are the human execution layer: on-site, on-brand, and accountable to your KPIs.
                </p>

                {/* Stat Grid */}
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white shadow-xl shadow-black/10 w-full max-w-[400px]">
                  <div className="font-display text-[3.5rem] md:text-[4.5rem] leading-none text-[#C8102E]">
                    20<span className="text-white">+</span>
                  </div>
                  <div className="font-body text-[12px] md:text-[13px] leading-relaxed text-white/80 font-medium">
                    Years of combined<br />
                    industry experience
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-6 w-full h-[300px] md:h-[450px] relative rounded-[30px] md:rounded-[60px] overflow-hidden shadow-xl shadow-black/5">
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80" 
                  alt="Meaningful Human Connections"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

            </div>
          </div>
        </section>

        {/* OUR DNA / BENTO GRID */}
        <section className="py-16 md:py-24 bg-[#F9F9F9] border-t border-black/5">
          <div className="container-site">
            <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-black/5 text-[#C8102E] font-mono text-[10px] md:text-[11px] tracking-[0.2em] font-semibold mb-4 shadow-sm">
                OUR EXPERTISE
              </span>
              <h2 className="font-display text-[2rem] md:text-[3rem] text-[#1A1A1A] leading-tight">
                How We <span className="text-[#C8102E] italic font-light">Execute.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {corePillars.map((v, i) => (
                <div
                  key={v.title}
                  className="bg-white p-8 rounded-[24px] border border-black/5 hover:border-[#C8102E]/30 transition-colors group flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center group-hover:bg-[#C8102E] group-hover:text-white transition-colors duration-300">
                      {v.icon}
                    </div>
                    <h3 className="font-display text-[1.25rem] md:text-[1.5rem] text-[#1A1A1A] mt-1">
                      {v.title}
                    </h3>
                  </div>
                  
                  <p className="font-body text-[#555] text-[14px] md:text-[15px] leading-[1.8] font-light">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PalantirCTA />
      </main>
      <Footer />
    </>
  );
}
