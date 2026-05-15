const cards = [
  {
    dark: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="#C8102E" strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="#C8102E" strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="#C8102E" strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="#C8102E" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Portfolio-Scale Rollouts",
    body: "We deploy across entire portfolios simultaneously, not one property at a time. 50 properties in 6 weeks is our standard, not our limit.",
  },
  {
    dark: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#C8102E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Measurable Adoption Rates",
    body: "Every campaign is tracked against your specific KPIs. We report utilization, enrollment, and adoption — not impressions or reach.",
  },
  {
    dark: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="#C8102E" strokeWidth="1.5"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#C8102E" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Enterprise Partner Status",
    body: "We embed with your team and operate as a long-term growth partner — not a rotating project vendor. You get one accountable contact, always.",
  },
  {
    dark: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#C8102E" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="#C8102E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke="#C8102E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Operational Efficiency",
    body: "One accountable partner for branding, activation, events, and tech rollout. No agency handoffs. No coordination tax.",
  },
];

export default function DifferentiatorGrid() {
  return (
    <section
      className="py-16 bg-[#F7F5F1]"
      aria-labelledby="diff-heading"
    >
      <div className="container-brand">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="eyebrow mb-4">The Gap Nobody Talks About</p>
          <h2
            id="diff-heading"
            className="font-body font-black text-[#0A0A0B] leading-tight tracking-tight mb-5"
            style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
          >
            Great technology. Zero adoption.{" "}
            <span className="text-[#C8102E]">We solve that.</span>
          </h2>
          <p className="font-body text-[#94928E] leading-[1.7] text-[13px] max-w-[520px] mx-auto">
            Enterprise proptech companies sell the hardware and the platform.
            But activation, resident adoption, and on-the-ground execution?
            That requires a different kind of partner.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`rounded-[8px] p-8 card-hover ${
                card.dark
                  ? "bg-[#0A0A0B] dark-card-hover"
                  : "bg-white border border-[#E6E3DE]"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-[6px] flex items-center justify-center mb-5"
                style={{
                  backgroundColor: card.dark
                    ? "rgba(200,16,46,0.12)"
                    : "rgba(200,16,46,0.06)",
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className={`font-body font-bold text-[12px] uppercase tracking-[0.08em] mb-3 ${
                  card.dark ? "text-white" : "text-[#0A0A0B]"
                }`}
              >
                {card.title}
              </h3>

              {/* Body */}
              <p
                className={`font-body text-[11px] leading-[1.7] ${
                  card.dark ? "text-white/70" : "text-[#94928E]"
                }`}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
