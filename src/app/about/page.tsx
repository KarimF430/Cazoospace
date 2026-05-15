import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PalantirCTA from "@/components/sections/PalantirCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Cazoo Space",
  description:
    "We are the execution layer for enterprise real estate and proptech. We build adoption velocity at scale.",
  alternates: { canonical: "https://cazoospace.com/about" },
};

const values = [
  {
    title: "EXECUTION OVER OPTICS.",
    body: "We measure success in adoption rates, lease velocity, and pipeline value — not impressions or awards.",
  },
  {
    title: "SCALE IS A REQUIREMENT.",
    body: "Every process we build is designed to work across 5 properties or 500. We don't make exceptions for scale.",
  },
  {
    title: "ABSOLUTE ACCOUNTABILITY.",
    body: "One partner, one contract, one point of contact. If something isn't working, you talk to the person who can fix it.",
  },
  {
    title: "EMBEDDED, NOT OUTSOURCED.",
    body: "We operate as an extension of your team — not a rotating vendor who reads the brief on the day of the event.",
  },
];

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        {/* HERO */}
        <section className="relative pt-32 pb-24 bg-dot-grid overflow-hidden border-b border-white/20">
          <div className="container-site relative z-10 max-w-4xl">
            <p className="label-mono-red mb-8">// THE EXECUTION LAYER</p>
            <h1
              className="font-display text-black leading-[0.9] tracking-tight mb-8"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
            >
              NOT A MARKETING AGENCY.<br/>
              A GROWTH PARTNER.
            </h1>
            <p className="font-body text-black/70 text-[16px] leading-[1.8] max-w-2xl">
              Cazoo Space exists because enterprise proptech companies solve the
              technology problem — not the adoption problem. We solve the
              adoption problem. At scale.
            </p>
          </div>
        </section>

        {/* MISSION STATEMENT */}
        <section className="py-24 bg-white border-b border-white/20">
          <div className="container-site grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="label-mono-red mb-6">// OUR POSITION</p>
              <h2
                className="font-display text-black leading-[1.1] mb-8"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                THE GAP BETWEEN GREAT TECHNOLOGY AND ACTUAL ADOPTION IS WHERE WE OPERATE.
              </h2>
              <p className="font-body text-black/70 text-[14px] leading-[1.8] mb-6">
                Hardware vendors sell the infrastructure. Property
                management companies sign the contracts. But between product
                installation and resident adoption sits a gap that no technology
                vendor is equipped to fill — and no traditional marketing agency
                understands.
              </p>
              <p className="font-body text-black/70 text-[14px] leading-[1.8]">
                Cazoo Space fills that gap. We are the human execution layer: on-site,
                on-brand, and accountable to your KPIs.
              </p>
            </div>

            {/* Terminal Stats block */}
            <div className="flex flex-col border border-white/20 bg-white/5">
              {[
                { number: "500+", label: "PROPERTIES ACTIVATED" },
                { number: "$3B+", label: "CLIENT PORTFOLIO VALUE" },
                { number: "98%", label: "CLIENT RETENTION" },
                { number: "12WK", label: "AVG. ROLLOUT TIME" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center justify-between p-6 ${i !== 3 ? "border-b border-white/20" : ""}`}
                >
                  <span className="font-mono text-[11px] text-black/50">{stat.label}</span>
                  <span className="font-mono text-black text-[24px]"><span className="text-cazoo-red">{stat.number[0]}</span>{stat.number.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24 bg-dot-grid border-b border-white/20">
          <div className="container-site">
            <div className="mb-16">
              <p className="label-mono-red mb-6">// OPERATING PRINCIPLES</p>
              <h2
                className="font-display text-black leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                HOW WE EXECUTE
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-px bg-white/20">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="bg-white p-10 palantir-card flex flex-col"
                >
                  <span className="font-mono text-[11px] text-black/30 mb-8">0{i + 1} //</span>
                  <h3 className="font-display text-[24px] text-black mb-4">
                    {v.title}
                  </h3>
                  <p className="font-body text-black/70 text-[14px] leading-[1.8]">
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
