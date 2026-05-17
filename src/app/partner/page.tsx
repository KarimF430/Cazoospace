import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PartnerForm from "@/components/sections/PartnerForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us | Cazoo Space",
  description: "Initiate an engagement with Cazoo Space — the enterprise execution partner for real estate, proptech, and multifamily marketing.",
  alternates: { canonical: "https://cazoospace.com/partner" },
};

export default function PartnerPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="bg-[#F9F9F9] min-h-screen">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container-site max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Copy & Authority */}
              <div className="lg:col-span-5 lg:sticky lg:top-40">
                <span className="inline-flex items-center gap-3 py-1.5 px-4 rounded-full bg-white border border-black/10 text-[#C8102E] font-mono text-[10px] tracking-[0.2em] font-bold uppercase mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
                  INITIATE ENGAGEMENT
                </span>
                
                <h1 className="font-display text-[#1A1A1A] leading-[1] mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                  Let's build your next <span className="text-[#C8102E]">activation.</span>
                </h1>
                
                <p className="font-body text-[#555] text-[15px] md:text-[16px] leading-[1.8] mb-10 max-w-md">
                  We engage exclusively with enterprise clients seeking measurable impact at scale. Submit your project details below to initiate a capability briefing with our execution directors.
                </p>

                {/* Social Proof / Trust Signals */}
                <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white border border-black/5 shadow-sm mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F0F0F0] flex items-center justify-center text-[#C8102E]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    </div>
                    <div>
                      <p className="font-display text-[#1A1A1A] text-[24px] leading-none mb-1">150+</p>
                      <p className="font-mono text-[10px] text-[#555] tracking-wider uppercase">Successful Campaigns</p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-black/5" />
                  <div className="flex flex-col gap-1">
                    <p className="font-body text-[13px] text-[#555] italic leading-relaxed">"Cazoo Space is the ultimate execution layer. They took our hardware and put it directly into the hands of 10,000 active users."</p>
                    <p className="font-mono text-[10px] text-[#C8102E] uppercase mt-2">— Enterprise Client</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-5 font-mono text-[11px] text-[#555]">
                  <div className="border-l-2 border-[#C8102E] pl-4">
                    <p className="text-[#1A1A1A] font-bold mb-1">GENERAL INQUIRIES</p>
                    <a href="mailto:info@cazoospace.com" className="hover:text-[#C8102E] transition-colors">INFO@CAZOOSPACE.COM</a>
                  </div>
                  <div className="border-l-2 border-[#C8102E] pl-4">
                    <p className="text-[#1A1A1A] font-bold mb-1">HEADQUARTERS</p>
                    <p>CALGARY, AB, CANADA</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Light Form */}
              <div className="lg:col-span-7 w-full">
                <PartnerForm />
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
