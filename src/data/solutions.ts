export type Solution = {
  slug: string;
  industry: string;
  nav: string;
  heroHeadline: string;
  heroSub: string;
  heroCTA: string;
  problemHeadline: string;
  problemBody: string[];
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
  capabilities: {
    icon: string;
    title: string;
    body: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  relatedCaseStudy: string;
  metaTitle: string;
  metaDescription: string;
};

export const solutions: Solution[] = [
  {
    slug: "property-management",
    industry: "Property Management",
    nav: "Property Management",
    heroHeadline: "You deployed the technology. Now drive the adoption.",
    heroSub:
      "We activate proptech across your entire portfolio — driving resident adoption, reducing friction, and delivering the utilization data your ownership needs.",
    heroCTA: "See How We Deploy",
    problemHeadline:
      "You just signed a deal with Amazon Key or ButterflyMX. Residents aren't using it.",
    problemBody: [
      "You spent months evaluating vendors, negotiating contracts, and coordinating installation across your portfolio. The technology is live. The vendor is done. And adoption is at 14%.",
      "Residents don't read welcome emails. They ignore QR codes on the wall. And your leasing team doesn't have bandwidth to become tech support. The vendor's onboarding program is a PDF and a Zoom link.",
      "This is where we come in. NEXUS deploys on-site activation campaigns across your entire portfolio — from door-hanger campaigns to in-person tech events — driving real adoption against real KPIs.",
    ],
    steps: [
      {
        number: "01",
        title: "Portfolio Audit",
        description:
          "We assess your current adoption rates, installation coverage, and resident communication history across your portfolio.",
      },
      {
        number: "02",
        title: "Activation Strategy",
        description:
          "We design a property-by-property deployment plan with timelines, staffing, collateral, and event calendar.",
      },
      {
        number: "03",
        title: "On-Site Execution",
        description:
          "Our teams deploy to your properties with branded kits, resident events, and direct enrollment support.",
      },
      {
        number: "04",
        title: "Adoption Reporting",
        description:
          "We deliver weekly adoption dashboards so you can report utilization rates to ownership with confidence.",
      },
    ],
    capabilities: [
      {
        icon: "📍",
        title: "On-Site Activation Teams",
        body: "Deployed to your properties with everything needed — no vendor coordination required from you.",
      },
      {
        icon: "📦",
        title: "Property Collateral Kits",
        body: "Custom-branded door hangers, elevator wraps, leasing office displays, and digital assets.",
      },
      {
        icon: "🎯",
        title: "Resident Event Programs",
        body: "Live demo events, tech open houses, and resident ambassador programs that drive word-of-mouth adoption.",
      },
      {
        icon: "📊",
        title: "Adoption KPI Tracking",
        body: "Weekly reporting dashboards tied to your specific utilization targets — not vanity metrics.",
      },
      {
        icon: "🏢",
        title: "Portfolio-Scale Coordination",
        body: "We manage across your entire portfolio simultaneously — not property by property.",
      },
      {
        icon: "🤝",
        title: "Leasing Team Enablement",
        body: "Training and scripts for your on-site teams so they can sustain adoption after we complete the rollout.",
      },
    ],
    faq: [
      {
        question: "How large does a portfolio need to be for NEXUS to engage?",
        answer:
          "We work with operators managing 100+ units across at least 2 properties. Our model is designed for scale — portfolio deployments are where we create the most value.",
      },
      {
        question: "Do you work with any proptech vendor, or only specific ones?",
        answer:
          "We are vendor-agnostic. We've activated smart lockers, access control systems, delivery management platforms, resident apps, and building Wi-Fi. If your residents need to adopt it, we can drive that adoption.",
      },
      {
        question: "What does a typical engagement timeline look like?",
        answer:
          "For a portfolio of 10–50 properties, expect a 4–8 week activation window. We can run properties simultaneously to compress the timeline.",
      },
      {
        question: "Can you work alongside our existing property management team?",
        answer:
          "Yes. We embed with your on-site teams and train leasing staff so adoption continues after our activation window closes.",
      },
      {
        question: "What does adoption reporting look like?",
        answer:
          "We provide weekly utilization dashboards per property, with aggregate rollup metrics at the portfolio level. All data is formatted to present directly to ownership.",
      },
    ],
    relatedCaseStudy: "smart-locker-adoption-chicago",
    metaTitle: "Property Management Portfolio Activation | NEXUS Agency",
    metaDescription:
      "Drive proptech adoption across your multifamily portfolio. NEXUS deploys on-site activation campaigns for Amazon Key, ButterflyMX, and all smart building systems.",
  },
  {
    slug: "real-estate-developers",
    industry: "Real Estate Developers",
    nav: "Developers",
    heroHeadline: "Build the brand before you break ground.",
    heroSub:
      "Pre-leasing campaigns, grand opening activations, and lease-up strategies for multifamily and mixed-use developments — from concept to full occupancy.",
    heroCTA: "Build Your Launch Strategy",
    problemHeadline:
      "Your development is ready. Your marketing isn't.",
    problemBody: [
      "Most developers treat marketing as the last line item on the budget. Leasing starts 60 days before opening with a generic website, stock photos, and an email list built from broker relationships.",
      "That's how you get a slow lease-up, miss your lender covenants, and spend 18 months at 72% occupancy. High-performing developments treat marketing as a phase of construction — not an afterthought.",
      "NEXUS builds your brand activation strategy before a single unit is listed, then executes through opening day and beyond. We operate like a development partner, not an agency.",
    ],
    steps: [
      {
        number: "01",
        title: "Brand & Positioning",
        description:
          "We develop your property's brand identity, naming, visual system, and resident positioning — tailored to your submarket and buyer profile.",
      },
      {
        number: "02",
        title: "Pre-Leasing Campaign",
        description:
          "Launch a waitlist program with urgency mechanics, broker preview events, and community-building content to generate a qualified pipeline before opening.",
      },
      {
        number: "03",
        title: "Grand Opening Execution",
        description:
          "Full-service grand opening event management: staging, staffing, brand partners, media, and day-of coordination.",
      },
      {
        number: "04",
        title: "Lease-Up Optimization",
        description:
          "Post-opening resident referral programs, retention campaigns, and occupancy reporting until you hit your stabilized target.",
      },
    ],
    capabilities: [
      {
        icon: "🏗️",
        title: "Property Brand Development",
        body: "Naming, logo, color system, and tone of voice built for your specific submarket and resident demographic.",
      },
      {
        icon: "⏰",
        title: "Pre-Leasing Waitlist Programs",
        body: "Reservation campaigns, urgency mechanics, and broker preview events that build your pipeline before keys are cut.",
      },
      {
        icon: "🎉",
        title: "Grand Opening Events",
        body: "End-to-end grand opening execution: staging, catering, brand partners, media, staffing, and day-of management.",
      },
      {
        icon: "📈",
        title: "Lease-Up Velocity Strategy",
        body: "Occupancy optimization programs designed around your lender covenants and pro forma targets.",
      },
      {
        icon: "🤝",
        title: "Broker Relationship Programs",
        body: "Exclusive broker preview events and incentive programs to drive third-party leasing referrals.",
      },
      {
        icon: "📱",
        title: "Digital Presence Build",
        body: "Property website, social presence, and digital advertising strategy aligned with your brand and timeline.",
      },
    ],
    faq: [
      {
        question: "When should we engage NEXUS relative to our project timeline?",
        answer:
          "Ideally 6–8 months before certificate of occupancy. This gives us time to build the brand, launch a pre-leasing campaign, and have a qualified waitlist ready for opening day.",
      },
      {
        question: "Do you work on both luxury and workforce housing developments?",
        answer:
          "Yes. We adapt our brand and activation strategy to the resident demographic. Luxury developments get a white-glove approach. Workforce housing gets straightforward, value-forward messaging.",
      },
      {
        question: "What's a realistic lease-up timeline if we start early?",
        answer:
          "Clients who engage us 6+ months before opening typically achieve 80–90% occupancy within 60 days of grand opening. Clients who engage us at opening typically achieve the same milestone in 120–180 days.",
      },
      {
        question: "Can you handle projects outside our local market?",
        answer:
          "Yes. We deploy nationally. We've executed in Chicago, Nashville, Atlanta, Dallas, Phoenix, and the Mid-Atlantic corridor.",
      },
      {
        question: "Do you also handle the property management transition?",
        answer:
          "We partner with your property management team and ensure our activation strategy aligns with their leasing workflow. We don't replace property management — we amplify their results.",
      },
    ],
    relatedCaseStudy: "grand-opening-lease-up",
    metaTitle: "Real Estate Developer Marketing & Grand Opening Activation | NEXUS Agency",
    metaDescription:
      "Pre-leasing campaigns, grand opening events, and lease-up strategies for multifamily developers. NEXUS builds your brand before you break ground.",
  },
  {
    slug: "proptech-brands",
    industry: "Proptech Brands",
    nav: "Proptech Brands",
    heroHeadline: "You have the product. The portfolio operators need to see it work first.",
    heroSub:
      "We are the deployment partner that bridges your enterprise sales team and the real estate operators they're selling to — driving adoption inside portfolios before the contract is signed.",
    heroCTA: "Deploy With Us",
    problemHeadline:
      "Your enterprise sales team closes software deals. Operator adoption requires something different.",
    problemBody: [
      "Proptech companies are built around SaaS sales motions: inside sales, demos, contract negotiations, implementation calls. But real estate operators — especially the regional and mid-market firms managing thousands of units — don't buy from a Zoom demo.",
      "They buy from relationships. From seeing the product work at a property they trust. From peer-to-peer referrals at industry events. Your enterprise sales team is excellent at closing. They're not built for ground-level adoption campaigns inside 50-property portfolios.",
      "NEXUS is. We've driven adoption of smart lockers, access control systems, delivery platforms, and resident apps across hundreds of properties. We speak the language of property operators because we operate inside their buildings.",
    ],
    steps: [
      {
        number: "01",
        title: "Target Portfolio Mapping",
        description:
          "We identify and research the specific operators in your target markets — sized, segmented, and prioritized by adoption likelihood.",
      },
      {
        number: "02",
        title: "Operator Engagement Program",
        description:
          "Executive roundtables, property tours, and peer-to-peer events that get your product in front of the right decision-makers in a relationship context.",
      },
      {
        number: "03",
        title: "Pilot Deployment Support",
        description:
          "We manage the ground-level activation for pilot installations — ensuring high adoption rates that create the case study your sales team can use to close the next deal.",
      },
      {
        number: "04",
        title: "Portfolio Scale Activation",
        description:
          "Once the contract is signed, we execute the portfolio-wide rollout — driving adoption across all properties simultaneously.",
      },
    ],
    capabilities: [
      {
        icon: "🎯",
        title: "Operator Roundtable Events",
        body: "Invitation-only executive dinners and roundtables that create relationship context for your product conversations.",
      },
      {
        icon: "🏢",
        title: "Pilot Activation Management",
        body: "We run your pilot deployments like a full activation campaign — ensuring the adoption numbers that make your case study bulletproof.",
      },
      {
        icon: "📊",
        title: "Adoption Rate Reporting",
        body: "Utilization dashboards that give your sales team the data they need to close the next portfolio deal.",
      },
      {
        icon: "🤝",
        title: "Sales Team Enablement",
        body: "We train your enterprise sales team on operator objections, leasing workflow integration, and portfolio-scale deployment timelines.",
      },
      {
        icon: "🌐",
        title: "Multi-Market Deployment",
        body: "We execute simultaneously across your target metro markets — not one city at a time.",
      },
      {
        icon: "📈",
        title: "Pipeline Acceleration",
        body: "Our operator relationship programs generate qualified introductions that your sales team converts — shortening the average deal cycle.",
      },
    ],
    faq: [
      {
        question: "Do you work with pre-Series A proptech companies?",
        answer:
          "We work with proptech companies at Series A and beyond that have a proven product and are entering a scaling phase. We're not the right fit for pre-revenue or pure MVP-stage companies.",
      },
      {
        question: "How do you ensure the roundtable format reaches the right decision-makers?",
        answer:
          "We maintain an active network of property management executives, developers, and real estate operators across major US metros. Invitations are curated by role and portfolio size — not just open registration.",
      },
      {
        question: "Can you replace our inside sales team?",
        answer:
          "No — and you shouldn't want us to. We create the operator relationships and activation proof points that make your inside sales team dramatically more effective. We're the air support. Your team closes.",
      },
      {
        question: "How do you measure the ROI of operator engagement programs?",
        answer:
          "We track: qualified operator introductions, pilot conversion rates, portfolio deal velocity, and adoption rates per property. All metrics are formatted for your board and investor reporting.",
      },
      {
        question: "How quickly can you deploy across a new market?",
        answer:
          "We can launch an operator engagement program in a new metro market within 4–6 weeks. Portfolio-scale activation following a signed contract typically runs 6–12 weeks depending on portfolio size.",
      },
    ],
    relatedCaseStudy: "proptech-pipeline-growth",
    metaTitle: "Proptech Brand Deployment & Operator Adoption | NEXUS Agency",
    metaDescription:
      "Drive proptech adoption across real estate portfolios. NEXUS bridges enterprise sales teams and property operators with on-the-ground activation programs.",
  },
  {
    slug: "events-brand",
    industry: "Events & Brand",
    nav: "Events & Brand",
    heroHeadline: "End-to-end event execution. Zero day-of surprises.",
    heroSub:
      "Property showcases, partner summits, and large-scale resident activation events — we handle strategy, logistics, staffing, and measurement so you stay focused on the relationship.",
    heroCTA: "Plan Your Event",
    problemHeadline:
      "Your events need to do more than look good. They need to generate measurable outcomes.",
    problemBody: [
      "Most event agencies deliver a venue, a catering order, and a branded step-and-repeat. Then they invoice you and disappear. You're left without a post-event strategy, follow-up sequence, or ROI metric to justify the budget.",
      "Enterprise-level events in real estate and proptech require a different operating model. The right roundtable dinner creates $1M in pipeline. The wrong grand opening loses 6 months of lease-up momentum. The stakes are too high for a vendor who just books venues.",
      "NEXUS operates as your end-to-end event execution partner. We build the strategy, manage the logistics, staff the event, and deliver the post-event measurement — because the event is a growth mechanism, not a line item.",
    ],
    steps: [
      {
        number: "01",
        title: "Event Strategy & Design",
        description:
          "We develop the event concept, format, audience curation strategy, and measurable outcome targets before any logistics are booked.",
      },
      {
        number: "02",
        title: "Logistics & Production",
        description:
          "Venue sourcing, vendor coordination, AV, catering, branded collateral, and day-of run-of-show management.",
      },
      {
        number: "03",
        title: "Audience Activation",
        description:
          "Invitation strategy, RSVP management, and pre-event communication sequences that maximize qualified attendance.",
      },
      {
        number: "04",
        title: "Post-Event Measurement",
        description:
          "We deliver a post-event report with attendance, engagement data, pipeline generated, and recommended follow-up sequences.",
      },
    ],
    capabilities: [
      {
        icon: "🎪",
        title: "Property Showcase Events",
        body: "Grand openings, broker previews, and resident open house events designed to drive leasing velocity.",
      },
      {
        icon: "🍽️",
        title: "Executive Roundtables",
        body: "Invitation-only dinners and summits for proptech brands to access property management decision-makers.",
      },
      {
        icon: "🏘️",
        title: "Resident Activation Events",
        body: "Community events, technology launch parties, and amenity activations that drive resident engagement and retention.",
      },
      {
        icon: "📋",
        title: "End-to-End Logistics",
        body: "Venue, catering, AV, staffing, collateral production, and day-of management — one point of contact for everything.",
      },
      {
        icon: "👥",
        title: "On-Site Staffing",
        body: "Trained brand ambassadors, event coordinators, and activation specialists for the day of your event.",
      },
      {
        icon: "📊",
        title: "Event ROI Reporting",
        body: "Post-event measurement reports with pipeline generated, attendance data, and actionable follow-up recommendations.",
      },
    ],
    faq: [
      {
        question: "What's the minimum lead time for event planning?",
        answer:
          "For a standard property event or resident activation (50–200 attendees), we recommend 4–6 weeks. For a major partner summit or grand opening (200+ attendees), we recommend 8–12 weeks.",
      },
      {
        question: "Do you handle events outside major metro areas?",
        answer:
          "Yes. We execute nationally. We've run events in tier-1 metros and secondary markets including Nashville, Austin, Charlotte, Salt Lake City, and Denver.",
      },
      {
        question: "Can you source and manage event venues?",
        answer:
          "Yes. Venue sourcing, contract negotiation, and vendor management are all included. You don't need to coordinate with a separate venue team.",
      },
      {
        question: "How do you measure event ROI?",
        answer:
          "We establish measurable goals before the event — qualified attendees, pipeline introductions, adoption registrations, press coverage — and report against them post-event.",
      },
      {
        question: "Do you provide post-event follow-up support?",
        answer:
          "Yes. We deliver a recommended follow-up sequence (email, LinkedIn, phone) and can execute it on your behalf or hand it off to your internal team.",
      },
    ],
    relatedCaseStudy: "proptech-pipeline-growth",
    metaTitle: "Property & Proptech Event Execution | NEXUS Agency",
    metaDescription:
      "End-to-end event execution for property showcases, partner summits, and resident activation events. NEXUS handles strategy, logistics, staffing, and measurement.",
  },
];
