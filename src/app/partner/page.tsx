import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
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
      <main id="main-content" className="bg-dot-grid min-h-screen">
        <section className="pt-28 md:pt-36 pb-20 md:pb-24 relative">
          <div className="container-site grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            <div>
              <p className="label-mono-red mb-4 md:mb-6">// INITIATE ENGAGEMENT</p>
              <h1
                className="font-display text-black leading-[0.85] mb-6 md:mb-8"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                REQUEST<br />CAPABILITY<br />BRIEFING.
              </h1>
              <p className="font-body text-black/60 text-[13px] md:text-[14px] leading-[1.8] mb-8 max-w-md">
                We engage exclusively with enterprise clients seeking measurable
                impact at scale. Submit the inquiry parameters below to initiate
                a capability briefing with our execution directors.
              </p>

              <div className="flex flex-col gap-5 font-mono text-[10px] md:text-[11px] text-black/40">
                <div className="border-l-2 border-[#C8102E] pl-4">
                  <p className="text-black mb-1">GENERAL INQUIRIES</p>
                  <a href="mailto:info@cazoospace.com" className="hover:text-[#C8102E] transition-colors">INFO@CAZOOSPACE.COM</a>
                </div>
                <div className="border-l-2 border-[#C8102E] pl-4">
                  <p className="text-black mb-1">HEADQUARTERS</p>
                  <p>CALGARY, AB, CANADA</p>
                </div>
              </div>
            </div>

            <div className="border border-black/10 bg-white p-6 md:p-10">
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-[10px] md:text-[11px] text-black/40">01 // ENTITY / NAME</label>
                  <input type="text" id="name" name="name" className="bg-black/[0.03] border border-black/10 px-4 py-3 font-mono text-[12px] md:text-[13px] text-black placeholder:text-black/25 focus:outline-none focus:border-[#C8102E] transition-colors" placeholder="Enter full name or entity" required />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-[10px] md:text-[11px] text-black/40">02 // COMM CHANNEL</label>
                  <input type="email" id="email" name="email" className="bg-black/[0.03] border border-black/10 px-4 py-3 font-mono text-[12px] md:text-[13px] text-black placeholder:text-black/25 focus:outline-none focus:border-[#C8102E] transition-colors" placeholder="name@company.com" required />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="type" className="font-mono text-[10px] md:text-[11px] text-black/40">03 // ENGAGEMENT TYPE</label>
                  <select id="type" name="type" className="bg-black/[0.03] border border-black/10 px-4 py-3 font-mono text-[12px] md:text-[13px] text-black focus:outline-none focus:border-[#C8102E] transition-colors appearance-none cursor-pointer">
                    <option value="b2b-sales">B2B Sales Acceleration</option>
                    <option value="event-marketing">Event Marketing / Activation</option>
                    <option value="branding">Corporate Branding</option>
                    <option value="digital">Digital Advertising / Social</option>
                    <option value="web">Web Design & Development</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="details" className="font-mono text-[10px] md:text-[11px] text-black/40">04 // PARAMETERS</label>
                  <textarea id="details" name="details" rows={4} className="bg-black/[0.03] border border-black/10 px-4 py-3 font-mono text-[12px] md:text-[13px] text-black placeholder:text-black/25 focus:outline-none focus:border-[#C8102E] transition-colors resize-none" placeholder="Outline your current execution needs..." required></textarea>
                </div>

                <button type="submit" className="btn-palantir-primary mt-2 w-full py-4">
                  TRANSMIT REQUEST
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
