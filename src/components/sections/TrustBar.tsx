const companies = [
  "Amazon Key",
  "ButterflyMX",
  "Greystar",
  "Lincoln Property Co.",
  "CBRE Residential",
  "Equity Residential",
  "AvalonBay",
  "Aimco",
  "Cortland",
  "NexPoint",
  "Latch",
  "Package Concierge",
];

export default function TrustBar() {
  // Duplicate for seamless loop
  const doubled = [...companies, ...companies];

  return (
    <section
      className="py-5 bg-white border-y border-[#E6E3DE] overflow-hidden"
      aria-label="Clients we've worked alongside"
    >
      <div className="container-brand mb-3">
        <p className="font-body font-bold text-[9px] uppercase tracking-[0.2em] text-[#94928E]">
          Worked alongside
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, white, transparent)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, white, transparent)",
          }}
          aria-hidden="true"
        />

        {/* Marquee track */}
        <div
          className="marquee-track"
          role="list"
          aria-label="Company logos"
        >
          {doubled.map((company, i) => (
            <div
              key={`${company}-${i}`}
              role="listitem"
              className="flex-shrink-0 px-4 py-2 rounded-full border border-[#E6E3DE] bg-[#F7F5F1] flex items-center"
            >
              <span className="font-body font-bold text-[9px] uppercase tracking-[0.15em] text-[#94928E] whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
