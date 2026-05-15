import Link from "next/link";

const proofCards = [
  {
    stat: "47+",
    statLabel: "Properties Activated",
    statHighlight: true,
    context: "Single Campaign · Smart locker activation, 78% resident adoption week 3",
    details: "Chicago Metro · Property Management",
    href: "/work/smart-locker-adoption-chicago",
  },
  {
    stat: "$3M",
    statLabel: "Pipeline Generated",
    statHighlight: true,
    context: "12 Weeks · B2B enterprise deal flow across 6 metro markets",
    details: "National · Proptech Brand",
    href: "/work/proptech-pipeline-growth",
  },
  {
    stat: "94%",
    statLabel: "Adoption Rate",
    statHighlight: true,
    context: "8 Weeks · Access control onboarding, 12 luxury multifamily communities",
    details: "Southeast · Property Management",
    href: "/work/luxury-access-control-onboarding",
  },
];

export default function ProofSection() {
  return (
    <section
      className="py-16 bg-white"
      aria-labelledby="proof-heading"
    >
      <div className="container-brand">
        {/* Header */}
        <div className="mb-12">
          <p className="eyebrow mb-4">Proof at Scale</p>
          <h2
            id="proof-heading"
            className="font-body font-black text-[#0A0A0B] leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
          >
            Results that move portfolios.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {proofCards.map((card) => (
            <Link
              key={card.stat}
              href={card.href}
              className="group block relative bg-[#0A0A0B] rounded-[8px] p-8 overflow-hidden dark-card-hover card-hover"
              aria-label={`Case study: ${card.statLabel} — ${card.context}`}
            >
              {/* Rotated burgundy accent */}
              <div
                className="absolute -top-6 -right-6 w-20 h-20 bg-[#6B1A2A] rounded-[4px]"
                style={{ transform: "rotate(20deg)", opacity: 0.6 }}
                aria-hidden="true"
              />

              {/* Stat */}
              <div className="relative z-10 mb-6">
                <div
                  className="font-mono font-black text-white leading-none mb-2"
                  style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
                >
                  <span className="text-[#C8102E]">{card.stat[0]}</span>
                  {card.stat.slice(1)}
                </div>
                <p className="font-body font-bold text-[9px] uppercase tracking-[0.2em] text-white/70">
                  {card.statLabel}
                </p>
              </div>

              {/* Divider */}
              <div
                className="border-t mb-4"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
                aria-hidden="true"
              />

              {/* Context */}
              <p className="font-body text-[10px] text-white/70 leading-relaxed mb-3">
                {card.context}
              </p>

              {/* Details tag */}
              <span
                className="inline-block font-body font-bold text-[8px] uppercase tracking-[0.15em] px-2 py-1 rounded"
                style={{
                  color: "rgba(200,16,46,0.8)",
                  backgroundColor: "rgba(200,16,46,0.08)",
                }}
              >
                {card.details}
              </span>

              {/* Arrow on hover */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="#C8102E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-body font-bold text-[12px] uppercase tracking-[0.12em] text-[#C8102E] hover:text-[#A00D24] transition-colors"
          id="proof-view-all-cta"
        >
          View All Case Studies
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
