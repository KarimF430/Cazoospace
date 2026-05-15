"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "property-management",
    label: "Property Management",
    title: "Activate the technology your residents aren't using.",
    body: "You just signed a deal with ButterflyMX or Amazon Key. Now you need residents to actually use it. We deploy on-site activation campaigns across your entire portfolio — driving adoption, reducing friction, and giving you the utilization data to prove ROI to ownership.",
    bullets: [
      "On-site activation teams deployed to all properties",
      "Resident event programs and collateral kits",
      "Weekly adoption dashboards per property",
    ],
    stat: "78%",
    statLabel: "Avg. adoption rate",
    href: "/solutions/property-management",
  },
  {
    id: "developers",
    label: "Developers",
    title: "Build the brand before you open the doors.",
    body: "Pre-leasing and grand opening campaigns for multifamily and mixed-use developments. We build the brand activation strategy before a single unit is listed, then execute through opening day and beyond — maximizing lease-up velocity.",
    bullets: [
      "Property brand identity built from scratch",
      "Pre-leasing waitlist program with urgency mechanics",
      "Grand opening event end-to-end management",
    ],
    stat: "87%",
    statLabel: "Avg. occupancy at opening",
    href: "/solutions/real-estate-developers",
  },
  {
    id: "proptech-brands",
    label: "Proptech Brands",
    title: "Bridge the gap between your sales team and portfolio operators.",
    body: "You have the product. You need ground-level adoption across real estate portfolios that won't sign a SaaS contract without seeing it work first. We are the deployment partner that bridges your enterprise sales team and the property operators they're selling to.",
    bullets: [
      "Operator roundtable events in target markets",
      "Pilot activation management with adoption reporting",
      "Pipeline generation and deal flow acceleration",
    ],
    stat: "$3M",
    statLabel: "Pipeline per campaign",
    href: "/solutions/proptech-brands",
  },
  {
    id: "events-brand",
    label: "Events & Brand",
    title: "Events that generate outcomes, not just attendance.",
    body: "End-to-end execution for property showcases, partner summits, and large-scale resident activation events. We handle strategy, logistics, on-site staffing, and post-event measurement. You stay focused on the relationship.",
    bullets: [
      "Full event strategy and logistics management",
      "On-site staffing and brand ambassador teams",
      "Post-event ROI reporting and follow-up sequences",
    ],
    stat: "94%",
    statLabel: "Client re-engagement rate",
    href: "/solutions/events-brand",
  },
];

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <section
      className="py-16 bg-[#F7F5F1]"
      aria-labelledby="tabs-heading"
    >
      <div className="container-brand">
        {/* Header */}
        <div className="mb-10">
          <p className="eyebrow mb-4">Built For Your World</p>
          <h2
            id="tabs-heading"
            className="font-body font-black text-[#0A0A0B] leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
          >
            We speak your industry.
          </h2>
        </div>

        {/* Tab buttons — scroll horizontally on mobile */}
        <div
          className="flex gap-2 mb-8 overflow-x-auto pb-1 scrollbar-none"
          role="tablist"
          aria-label="Industry solutions"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-shrink-0 font-body font-bold text-[10px] uppercase tracking-[0.12em] px-5 py-2.5 rounded-[5px] border transition-all duration-200 whitespace-nowrap",
                activeTab === tab.id
                  ? "bg-[#C8102E] text-white border-[#C8102E]"
                  : "bg-white text-[#94928E] border-[#E6E3DE] hover:border-[#94928E] hover:text-[#0A0A0B]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div
          role="tabpanel"
          id={`panel-${activeContent.id}`}
          aria-labelledby={`tab-${activeContent.id}`}
          className="bg-white border border-[#E6E3DE] rounded-[8px] p-8 md:p-10"
        >
          <div className="grid md:grid-cols-[1fr_200px] gap-8 md:gap-12">
            <div>
              <h3 className="font-body font-bold text-[#0A0A0B] leading-snug mb-4" style={{ fontSize: "16px" }}>
                {activeContent.title}
              </h3>
              <p className="font-body text-[#94928E] leading-[1.7] text-[12px] mb-6 max-w-prose">
                {activeContent.body}
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {activeContent.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mt-1.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-body text-[11px] text-[#0A0A0B] leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={activeContent.href}
                className="btn btn-outline-dark inline-flex"
                id={`tab-cta-${activeContent.id}`}
              >
                Learn More →
              </a>
            </div>

            {/* Stat callout */}
            <div className="flex flex-col justify-center items-center text-center bg-[#0A0A0B] rounded-[6px] p-6 md:p-8">
              <div
                className="font-mono font-black text-white leading-none mb-2"
                style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
              >
                <span className="text-[#C8102E]">{activeContent.stat[0]}</span>
                {activeContent.stat.slice(1)}
              </div>
              <p className="font-body font-bold text-[9px] uppercase tracking-[0.15em] text-white/70">
                {activeContent.statLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
