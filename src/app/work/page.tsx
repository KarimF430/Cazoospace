import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PalantirCaseStudies from "@/components/sections/PalantirCaseStudies";
import PalantirVerticals from "@/components/sections/PalantirVerticals";
import PalantirCTA from "@/components/sections/PalantirCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Case Studies | Cazoo Space",
  description: "Browse our portfolio of enterprise activations, rollouts, and branding campaigns.",
  alternates: { canonical: "https://cazoospace.com/work" },
};

export default function WorkPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        {/* HERO */}
        <section className="relative pt-32 pb-16 bg-dot-grid overflow-hidden border-b border-white/20">
          <div className="container-site relative z-10 max-w-4xl">
            <p className="label-mono-red mb-8">// ARCHIVE & LOGS</p>
            <h1
              className="font-display text-black leading-[0.9] tracking-tight mb-8"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
            >
              PROOF OF<br/>EXECUTION.
            </h1>
            <p className="font-body text-black/70 text-[16px] leading-[1.8] max-w-2xl">
              Log entries from successful enterprise proptech rollouts,
              luxury lease-up campaigns, and brand identity deployments.
            </p>
          </div>
        </section>

        <PalantirCaseStudies />
        <PalantirVerticals />
        <PalantirCTA />
      </main>
      <Footer />
    </>
  );
}
