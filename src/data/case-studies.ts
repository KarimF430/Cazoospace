export type CaseStudy = {
  slug: string;
  title: string;
  clientType: string;
  industry: "property-management" | "real-estate" | "proptech" | "events";
  services: string[];
  timeline: string;
  scale: string;
  challenge: string;
  approach: string[];
  results: {
    stat: string;
    label: string;
    description: string;
  }[];
  clientQuote: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  heroStat: string;
  heroStatLabel: string;
  heroContext: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "smart-locker-adoption-chicago",
    title: "47 Properties. 78% Resident Adoption in 3 Weeks.",
    clientType: "Property Management Company",
    industry: "property-management",
    services: ["Portfolio Activation", "Resident Onboarding", "Event Campaigns"],
    timeline: "6 Weeks",
    scale: "47 Properties · 8,200+ Units · Chicagoland Metro",
    challenge:
      "A regional property management firm managing 47 multifamily properties across Chicago had recently deployed smart locker infrastructure through a national proptech vendor. Six months post-install, adoption hovered at 12%. Residents weren't registering. Packages were piling up. The vendor's support team provided a PDF guide. The operator needed adoption, not documentation.",
    approach: [
      "Deployed on-site activation teams to all 47 properties across two consecutive weekends",
      "Designed and printed property-specific collateral kits (door hangers, elevator wraps, leasing office displays)",
      "Hosted 'Smart Move-In' events at each property with live locker demo stations",
      "Created a resident text campaign with QR-code deep-links to registration flows",
      "Trained leasing staff on resident objection handling and ongoing promotion",
    ],
    results: [
      {
        stat: "78%",
        label: "Resident Adoption",
        description: "Achieved within 3 weeks of activation campaign launch",
      },
      {
        stat: "47",
        label: "Properties Activated",
        description: "Simultaneously deployed across Chicagoland metro area",
      },
      {
        stat: "6wks",
        label: "Full Rollout",
        description: "From kickoff to full portfolio activation completion",
      },
    ],
    clientQuote: {
      text: "We had spent months trying to get residents to use the lockers. NEXUS came in and solved it in three weeks. Their on-site teams understood how to talk to residents in a way no vendor guide could.",
      author: "Director of Operations",
      role: "Director of Operations",
      company: "Regional Property Management Group",
    },
    heroStat: "78%",
    heroStatLabel: "Adoption Rate · Week 3",
    heroContext: "Smart locker activation · 47 properties · 8,200 units",
    tags: ["Smart Lockers", "Resident Adoption", "Portfolio Rollout", "Chicagoland"],
  },
  {
    slug: "proptech-pipeline-growth",
    title: "$3M Enterprise Pipeline Built in 12 Weeks.",
    clientType: "Enterprise Proptech Brand",
    industry: "proptech",
    services: ["B2B Activation", "Partner Summits", "Pipeline Development"],
    timeline: "12 Weeks",
    scale: "6 Metro Markets · 34 Operator Introductions",
    challenge:
      "A proptech company selling access control systems to multifamily operators had a strong product but a thin pipeline in new markets. Their enterprise sales team was closing deals through inbound referrals only. Breaking into new operators — especially those already locked into legacy vendors — required face-to-face presence and relationship-building that their remote sales team couldn't execute.",
    approach: [
      "Identified 6 target metro markets with high density of legacy access control installations",
      "Organized exclusive 'Property Tech Roundtable' dinners in each market — invitation-only, 8-12 decision-makers per event",
      "Managed all logistics: venue, catering, branded collateral, follow-up sequence",
      "Conducted live product walkthroughs and ROI sessions embedded within roundtable format",
      "Executed a 3-touch post-event follow-up sequence across email, LinkedIn, and phone",
    ],
    results: [
      {
        stat: "$3M",
        label: "Pipeline Generated",
        description: "Qualified enterprise deal flow across 6 metro markets",
      },
      {
        stat: "34",
        label: "Operator Introductions",
        description: "New decision-maker relationships established",
      },
      {
        stat: "12wks",
        label: "Campaign Duration",
        description: "Full market activation and pipeline development cycle",
      },
    ],
    clientQuote: {
      text: "The roundtable format was exactly what we needed. Decision-makers who had never returned our calls were sitting across from our team at dinner. NEXUS built the room — we closed the deals.",
      author: "VP of Enterprise Sales",
      role: "VP of Enterprise Sales",
      company: "Proptech Access Control Company",
    },
    heroStat: "$3M",
    heroStatLabel: "Pipeline · 12 Weeks",
    heroContext: "B2B enterprise deal flow · 6 metro markets · access control",
    tags: ["B2B Pipeline", "Partner Events", "Access Control", "Enterprise Sales"],
  },
  {
    slug: "luxury-access-control-onboarding",
    title: "94% Adoption. 12 Luxury Communities. 8 Weeks.",
    clientType: "Property Management Company",
    industry: "property-management",
    services: ["Access Control Onboarding", "Resident Experience", "Concierge Activation"],
    timeline: "8 Weeks",
    scale: "12 Luxury Communities · 3,400 Units · Southeast",
    challenge:
      "A luxury multifamily operator in the Southeast had deployed ButterflyMX video intercom systems across 12 communities. High-income residents — accustomed to concierge-level service — were resistant to self-service technology onboarding. Adoption sat at 31%. Low adoption was triggering negative reviews and resident complaints about delivery and guest access.",
    approach: [
      "Designed a white-glove 'Concierge Activation' program tailored to luxury resident expectations",
      "Stationed dedicated NEXUS activation specialists in leasing offices for 4 weeks",
      "Created premium printed welcome kits with personalized QR codes for each resident",
      "Hosted exclusive 'Resident Technology Open Houses' with champagne service and live demos",
      "Implemented a resident ambassador program incentivizing early adopters to assist neighbors",
    ],
    results: [
      {
        stat: "94%",
        label: "Adoption Rate",
        description: "Across all 12 luxury communities by week 8",
      },
      {
        stat: "4.8★",
        label: "Resident Satisfaction",
        description: "Average post-activation survey score (out of 5.0)",
      },
      {
        stat: "8wks",
        label: "Full Rollout",
        description: "White-glove program across 12 communities",
      },
    ],
    clientQuote: {
      text: "Our residents were skeptical of the new system. NEXUS turned the rollout into an amenity experience. Residents now consider the technology a premium perk, not an inconvenience.",
      author: "VP of Resident Experience",
      role: "VP of Resident Experience",
      company: "Southeast Luxury Multifamily Operator",
    },
    heroStat: "94%",
    heroStatLabel: "Adoption Rate · 8 Weeks",
    heroContext: "Access control onboarding · 12 luxury multifamily communities",
    tags: ["ButterflyMX", "Luxury Multifamily", "Resident Experience", "Access Control"],
  },
  {
    slug: "grand-opening-lease-up",
    title: "Zero to 87% Leased. One Grand Opening Campaign.",
    clientType: "Real Estate Developer",
    industry: "real-estate",
    services: ["Pre-Leasing Activation", "Grand Opening Events", "Brand Launch"],
    timeline: "16 Weeks",
    scale: "320-Unit Development · Nashville, TN",
    challenge:
      "A Nashville-based developer had a 320-unit luxury multifamily development opening in a competitive submarket. They had no existing brand presence, no resident pipeline, and a 90-day window to hit 75% occupancy or trigger a lender covenant. Marketing had been handled by the leasing team's generic email blasts. No brand identity. No activation strategy.",
    approach: [
      "Built the property's brand identity from scratch: naming, logo, color system, tone of voice",
      "Launched a 'Reserve Your Home' pre-leasing campaign 10 weeks before opening with waitlist mechanics",
      "Executed a three-phase grand opening: broker preview, resident soft launch, and public opening event",
      "Partnered with Nashville-area lifestyle brands for opening day activations and giveaways",
      "Deployed a 4-week post-opening resident referral program with incentive structure",
    ],
    results: [
      {
        stat: "87%",
        label: "Occupied at Opening",
        description: "Achieved within 30 days of grand opening event",
      },
      {
        stat: "1,200+",
        label: "Pre-Leasing Waitlist",
        description: "Registrations collected before keys were handed over",
      },
      {
        stat: "16wks",
        label: "Campaign Duration",
        description: "From brand build to grand opening execution",
      },
    ],
    clientQuote: {
      text: "We went from no brand to 87% leased at opening. The NEXUS team operated like they had a stake in the property. Every deadline was hit. Every event exceeded expectations.",
      author: "Managing Director",
      role: "Managing Director",
      company: "Nashville Multifamily Developer",
    },
    heroStat: "87%",
    heroStatLabel: "Occupied at Opening",
    heroContext: "Pre-leasing activation · 320-unit development · Nashville",
    tags: ["Grand Opening", "Lease-Up", "Pre-Leasing", "Brand Launch"],
  },
];
