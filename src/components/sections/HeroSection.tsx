import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "500+", label: "Properties Activated" },
  { number: "$3B+", label: "Client Portfolio Value" },
  { number: "12wk", label: "Avg. Rollout Time" },
  { number: "98%", label: "Client Retention" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0B]"
      aria-label="Hero"
    >
      {/* Red grid pattern background */}
      <div
        className="absolute inset-0 bg-red-grid bg-grid"
        style={{ backgroundSize: "36px 36px" }}
        aria-hidden="true"
      />

      {/* Large rotated burgundy rectangle accent */}
      <div
        className="absolute -top-32 -right-48 w-[600px] h-[600px] bg-[#6B1A2A] rounded-[20px]"
        style={{
          transform: "rotate(15deg)",
          opacity: 0.3,
        }}
        aria-hidden="true"
      />

      {/* Secondary smaller accent */}
      <div
        className="absolute bottom-20 -left-24 w-[300px] h-[300px] bg-[#6B1A2A] rounded-[12px]"
        style={{
          transform: "rotate(-8deg)",
          opacity: 0.15,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-brand relative z-10 pt-32 pb-24">
        {/* Eyebrow pill */}
        <div
          className="hero-animate hero-animate-1 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            border: "1px solid rgba(200,16,46,0.4)",
            backgroundColor: "rgba(200,16,46,0.08)",
          }}
        >
          <span className="text-[#C8102E] text-[10px]">★</span>
          <span className="text-[#C8102E] font-body font-bold text-[10px] uppercase tracking-[0.15em]">
            Enterprise Execution Partner · USA
          </span>
        </div>

        {/* H1 */}
        <h1
          className="hero-animate hero-animate-2 font-body font-black text-white leading-[1.0] tracking-[-2px] mb-6 max-w-[820px]"
          style={{
            fontSize: "clamp(40px, 7vw, 88px)",
          }}
        >
          The human layer that{" "}
          <span className="text-[#C8102E]">makes proptech stick.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="hero-animate hero-animate-3 font-body text-white/70 leading-[1.75] mb-10 max-w-[480px]"
          style={{ fontSize: "15px" }}
        >
          We activate, scale, and drive adoption of enterprise property
          technology across multifamily portfolios — where Amazon Key and
          ButterflyMX stop, we begin.
        </p>

        {/* CTA Row */}
        <div className="hero-animate hero-animate-4 flex flex-col xs:flex-row items-start xs:items-center gap-4 mb-14">
          <Link
            href="/work"
            className="btn btn-primary"
            id="hero-cta-see-work"
          >
            See Our Work
          </Link>
          <Link
            href="/partner"
            className="btn btn-outline flex items-center gap-2"
            id="hero-cta-partner"
          >
            Partner With Us
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Divider */}
        <div
          className="border-t mb-10"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
          aria-hidden="true"
        />

        {/* Stats row */}
        <div
          className="hero-animate hero-animate-5 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1 ${i > 0 ? "md:pl-8" : ""}`}
            >
              <span className="stat-number font-mono">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(10,10,11,0.4))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
