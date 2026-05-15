import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PalantirServices from "@/components/sections/PalantirServices";
import PalantirProcess from "@/components/sections/PalantirProcess";
import PalantirCTA from "@/components/sections/PalantirCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Cazoo Space",
  description: "Enterprise ground-game execution, B2B sales, event marketing, and digital branding.",
  alternates: { canonical: "https://cazoospace.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        {/* HERO */}
        <section className="relative pt-32 pb-16 bg-dot-grid overflow-hidden">
          <div className="container-site relative z-10 max-w-4xl">
            <p className="label-mono-red mb-8">// CAPABILITIES</p>
            <h1
              className="font-display text-black leading-[0.9] tracking-tight mb-8"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
            >
              ENGINEERED<br/>FOR SCALE.
            </h1>
            <p className="font-body text-black/70 text-[16px] leading-[1.8] max-w-2xl">
              From portfolio-wide hardware installations to national pre-leasing events. 
              We provide the human and digital infrastructure required to execute massive deployments.
            </p>
          </div>
        </section>

        {/* We reuse the homepage components to maintain absolute consistency */}
        <div className="pt-0 border-t border-white/20">
          <PalantirServices />
        </div>
        
        <PalantirProcess />
        <PalantirCTA />
      </main>
      <Footer />
    </>
  );
}
