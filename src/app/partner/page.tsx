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
                <div className="bg-white border border-black/5 rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-12 shadow-xl shadow-black/5">
                  <form className="flex flex-col gap-6 md:gap-8">
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-mono text-[11px] text-[#555] tracking-wider uppercase pl-1">Full Name & Company</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="bg-[#F9F9F9] border border-black/10 rounded-xl px-4 md:px-5 py-3 md:py-4 font-body text-[15px] text-[#1A1A1A] placeholder:text-[#999] focus:outline-none focus:border-[#C8102E] focus:bg-white focus:ring-1 focus:ring-[#C8102E] transition-all" 
                        placeholder="Jane Doe, Acme Corp" 
                        required 
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-mono text-[11px] text-[#555] tracking-wider uppercase pl-1">Work Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="bg-[#F9F9F9] border border-black/10 rounded-xl px-4 md:px-5 py-3 md:py-4 font-body text-[15px] text-[#1A1A1A] placeholder:text-[#999] focus:outline-none focus:border-[#C8102E] focus:bg-white focus:ring-1 focus:ring-[#C8102E] transition-all" 
                        placeholder="jane@acmecorp.com" 
                        required 
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="type" className="font-mono text-[11px] text-[#555] tracking-wider uppercase pl-1">Primary Goal / Engagement Type</label>
                      <div className="relative">
                        <select 
                          id="type" 
                          name="type" 
                          className="w-full bg-[#F9F9F9] border border-black/10 rounded-xl px-4 md:px-5 py-3 md:py-4 font-body text-[15px] text-[#1A1A1A] focus:outline-none focus:border-[#C8102E] focus:bg-white focus:ring-1 focus:ring-[#C8102E] transition-all appearance-none cursor-pointer"
                        >
                          <option value="b2b-sales">B2B Sales Acceleration</option>
                          <option value="event-marketing">Event Marketing / Activation</option>
                          <option value="branding">Corporate Branding</option>
                          <option value="digital">Digital Advertising / Social</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                        <div className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#555]">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="details" className="font-mono text-[11px] text-[#555] tracking-wider uppercase pl-1">Tell us about your project goals...</label>
                      <textarea 
                        id="details" 
                        name="details" 
                        rows={5} 
                        className="bg-[#F9F9F9] border border-black/10 rounded-xl px-4 md:px-5 py-3 md:py-4 font-body text-[15px] text-[#1A1A1A] placeholder:text-[#999] focus:outline-none focus:border-[#C8102E] focus:bg-white focus:ring-1 focus:ring-[#C8102E] transition-all resize-none" 
                        placeholder="What are you looking to achieve? E.g., App downloads, B2B pipeline, brand awareness..." 
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="mt-2 md:mt-4 w-full group relative inline-flex items-center justify-center font-body text-[15px] md:text-[16px] font-bold text-white bg-[#C8102E] px-8 py-4 md:py-5 rounded-xl hover:bg-[#A00D24] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <span>Request Briefing</span>
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                    
                    <p className="text-center font-body text-[12px] text-[#999] mt-2">
                      By submitting, you agree to our <a href="/privacy" className="underline hover:text-[#555] transition-colors">Privacy Policy</a>.
                    </p>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
