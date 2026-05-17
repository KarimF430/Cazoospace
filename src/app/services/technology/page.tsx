import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import { Monitor, Code, Rocket, Database } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Marketing Agency in Canada | Cazoo Space",
  description: "Brand positioning for software vendors and hardware enterprises in Canada. We translate complex technical specs into compelling narratives that close deals.",
  alternates: { canonical: "https://cazoospace.com/services/technology" },
};

export default function TechnologyPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <ServiceDetailLayout
          tag="TECHNOLOGY"
          title="Complex Products."
          titleAccent="Clear Stories."
          subtitle="The biggest challenge in technology marketing isn't building a great product — it's getting people to understand why they need it."
          heroDescription="Whether you're a SaaS platform targeting enterprise procurement teams, a hardware manufacturer launching a new device lineup, or a PropTech startup — we provide the strategic positioning and physical execution that translates innovation into adoption across the Canadian market."
          capabilities={[
            { title: "Product Launch Strategy", desc: "We plan and execute go-to-market strategies for technology products — from pre-launch hype campaigns to day-one activations and sustained adoption programs.", icon: <Rocket size={24} strokeWidth={1.5} /> },
            { title: "Technical Storytelling", desc: "We translate complex product specifications and technical differentiators into clear, compelling narratives that resonate with CTOs, procurement teams, and end users.", icon: <Code size={24} strokeWidth={1.5} /> },
            { title: "Hardware Rollout Execution", desc: "We manage the logistics, on-site installation support, user training, and adoption tracking for portfolio-wide hardware rollouts across Canada.", icon: <Monitor size={24} strokeWidth={1.5} /> },
            { title: "Platform Adoption Campaigns", desc: "We build sustained adoption campaigns that drive daily active usage, reduce churn, and turn passive accounts into power users who advocate for your platform.", icon: <Database size={24} strokeWidth={1.5} /> },
          ]}
          process={[
            { step: "01", title: "Technical Deep-Dive", desc: "Our team embeds with your product and engineering teams to deeply understand your technology — its architecture, use cases, and competitive advantages." },
            { step: "02", title: "Positioning & Narrative Design", desc: "We craft a clear market positioning that differentiates your product, including messaging hierarchies and persona-specific value props." },
            { step: "03", title: "Multi-Touch Activation", desc: "We execute across trade shows, on-site demos, webinar programs, partnership activations, and digital campaigns." },
            { step: "04", title: "Adoption Tracking & Optimization", desc: "We track adoption metrics — installs, daily active users, feature usage — and continuously refine our campaigns to maximize sustainable growth." },
          ]}
          whySection={{
            heading: "Why Canadian tech companies choose us to bring products to market.",
            points: [
              "We go deeper than surface-level marketing — our team learns your product's technical architecture to tell authentic stories.",
              "We handle both digital campaigns and physical execution under one roof.",
              "Our campaigns are measured by adoption metrics that matter — DAU, feature usage, NPS — not vanity impressions.",
              "We have direct experience marketing PropTech, SaaS, IoT, and enterprise hardware across Canada.",
              "Our field teams can be trained on your specific technology stack to provide live, hands-on demonstrations.",
            ],
          }}
          faqs={[
            { question: "Do your teams actually understand technical products?", answer: "Yes. We invest significant time upfront in technical deep-dives with your product and engineering teams. Our field teams are trained on how your product actually works — so they can demo it live and answer technical questions." },
            { question: "Can you handle a hardware rollout across multiple Canadian cities?", answer: "This is one of our core competencies. We manage end-to-end hardware deployment logistics — from receiving inventory to coordinating installations and user training across multiple cities simultaneously." },
            { question: "How do you market a complex SaaS product to non-technical buyers?", answer: "We use 'outcome-first storytelling.' Instead of leading with features, we lead with business problems your product solves and measurable outcomes it delivers." },
            { question: "Do you work with early-stage startups or only enterprise companies?", answer: "We work with both. For startups, we focus on product-market fit validation. For enterprise companies, we manage larger-scale rollouts. Our engagement models scale with your stage." },
            { question: "What's your experience with PropTech specifically?", answer: "PropTech is one of our deepest verticals. We have extensive experience deploying smart building technologies and resident engagement platforms across multifamily portfolios in Canada." },
            { question: "How long does a typical technology marketing engagement last?", answer: "Most engagements run 3-12 months. A focused product launch might run 8-12 weeks, while an ongoing platform adoption program can extend 6-12 months." },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
