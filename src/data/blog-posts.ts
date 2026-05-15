export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  body: string[];
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-proptech-adoption-fails",
    title: "Why Proptech Adoption Fails (And Who's Actually Responsible)",
    excerpt:
      "Most proptech deployments stall below 30% adoption. The technology isn't the problem. The execution model is.",
    category: "Industry Insight",
    date: "2025-04-15",
    readTime: "5 min read",
    author: "NEXUS Team",
    tags: ["Proptech", "Adoption", "Property Management"],
    body: [
      "Every year, property management companies spend millions on smart building technology — access control systems, smart lockers, resident apps, energy management platforms. And every year, a significant portion of those deployments stall below 30% resident adoption.",
      "The technology vendors will tell you it's an operator education problem. The operators will tell you it's a product design problem. Neither of them is looking at the actual bottleneck: the execution gap between installation and activation.",
      "When ButterflyMX or Amazon Key finishes an installation, their job is done. They've delivered the hardware and the platform. But getting 1,200 residents across 8 properties to register, understand, and actually use a new system? That's a completely different operational challenge — one that requires on-the-ground presence, resident communication strategy, and persistent follow-through.",
      "No proptech vendor is built to do this. Their team is built for enterprise sales cycles and software deployments, not resident activation campaigns. So the gap stays open, adoption stays low, and ownership starts questioning the ROI of a technology they've already paid for.",
      "The operators who consistently achieve 80-90% adoption rates share one characteristic: they treat the activation campaign as a deployment phase, not an afterthought. They schedule it, staff it, and measure it with the same rigor as the installation itself.",
      "For property management companies managing technology rollouts across large portfolios, the answer isn't a better onboarding email. It's a structured activation partner — one that shows up on-site, trains residents directly, and delivers weekly utilization reports until the adoption target is hit.",
    ],
  },
  {
    slug: "lease-up-velocity-framework",
    title: "The Lease-Up Velocity Framework: Why Most Grand Openings Underperform",
    excerpt:
      "Developers who treat marketing as an afterthought consistently hit their occupancy targets 60-90 days late. Here's the framework that changes that.",
    category: "Real Estate",
    date: "2025-03-28",
    readTime: "7 min read",
    author: "NEXUS Team",
    tags: ["Real Estate", "Grand Opening", "Lease-Up", "Marketing"],
    body: [
      "The most common mistake in multifamily development marketing isn't choosing the wrong channels or messaging. It's starting too late.",
      "Most developers engage their marketing team 60-90 days before certificate of occupancy. At that point, there's no time to build brand awareness, create a qualified waitlist, or execute a strategic broker outreach program. The result is a grand opening with decent attendance, moderate media coverage, and an occupancy curve that takes 6-8 months to reach 85%.",
      "High-performing developments — the ones that hit 80%+ occupancy within 30-60 days of opening — almost universally share one characteristic: they begin their marketing 6-8 months before the first key is handed over.",
      "The Lease-Up Velocity Framework operates in three phases. Phase 1 is brand build: naming, visual identity, and positioning that differentiates the property in its specific submarket. Phase 2 is pre-leasing activation: waitlist mechanics, broker preview events, and digital demand generation that builds a qualified pipeline before opening day. Phase 3 is grand opening execution: an event that generates both media coverage and a room full of people ready to sign.",
      "The developers who engage this framework early consistently achieve lease-up timelines that their lender covenants were designed for. The ones who don't spend the back half of their first year in occupancy recovery mode.",
      "The question for every developer entering a new project isn't 'what's our marketing budget?' It's 'when does our pre-leasing campaign launch?' If the answer is anything later than 6 months before opening, the math stops working.",
    ],
  },
  {
    slug: "enterprise-proptech-sales-ground-game",
    title: "Enterprise Proptech Sales Needs a Ground Game. Here's Why Remote Closes Don't Scale.",
    excerpt:
      "Your inside sales team can close inbound deals. Breaking into new portfolios and new markets requires a fundamentally different motion.",
    category: "Proptech",
    date: "2025-03-10",
    readTime: "6 min read",
    author: "NEXUS Team",
    tags: ["Proptech", "Enterprise Sales", "B2B", "Pipeline"],
    body: [
      "Enterprise SaaS companies have spent the last decade perfecting the remote sales motion: inside sales, product-led growth, self-service trials, automated onboarding sequences. In most verticals, this model scales efficiently.",
      "In real estate technology, it doesn't. Not at the portfolio level.",
      "The operators making decisions about technology deployments across 2,000-unit portfolios are not signing contracts from a Zoom demo. They're making six- and seven-figure commitments based on peer relationships, site visits, and reference checks from operators they trust. The sales cycle is measured in quarters, not weeks.",
      "Proptech companies that try to break into new markets with a purely remote sales motion consistently hit the same ceiling: strong close rates on inbound, weak penetration on outbound. They have a great product. They have a competent sales team. But they don't have ground-level presence in the markets they're targeting.",
      "The companies that crack new markets systematically do two things differently. First, they invest in operator relationship programs — invitation-only roundtables, property tours, and peer-to-peer introductions that create the trust infrastructure their sales team can then convert. Second, they have a deployment partner who can run pilot installations with high adoption rates — giving the sales team a local reference they can point to when the next operator asks 'where is this working in my market?'",
      "The inside sales team is the closer. The ground game is what gets them in the room.",
    ],
  },
];
