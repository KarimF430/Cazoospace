import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import { ShieldCheck, Building, PieChart, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Services Marketing in Canada | Cazoo Space",
  description: "Elevate your financial institution's brand with modern marketing. We ensure compliance while driving digital transformation and customer engagement across Canada.",
  alternates: { canonical: "https://cazoospace.com/services/financial-services" },
};

export default function FinancialServicesPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <ServiceDetailLayout
          tag="FINANCIAL SERVICES"
          title="Modern Branding,"
          titleAccent="Unshakable Trust."
          subtitle="Canada's financial services landscape is evolving rapidly. Your clients expect digital convenience without sacrificing the trust and reliability that legacy institutions are built on. We help you deliver both."
          heroDescription="We specialize in helping banks, credit unions, insurance companies, and wealth management firms modernize their brand presence while maintaining the regulatory compliance and institutional credibility that their clients depend on. From branch-level activations to national digital campaigns, we bridge the gap between traditional finance and modern expectations."
          capabilities={[
            {
              title: "Compliant Brand Modernization",
              desc: "We refresh your visual identity, messaging, and digital presence to appeal to younger demographics — without sacrificing the trust signals that existing clients rely on. Every asset is reviewed for regulatory compliance.",
              icon: <ShieldCheck size={24} strokeWidth={1.5} />,
            },
            {
              title: "Branch-Level Activations",
              desc: "We deploy field teams to physical branches and community locations to drive product adoption, educate customers on digital tools, and create memorable face-to-face interactions that strengthen loyalty.",
              icon: <Building size={24} strokeWidth={1.5} />,
            },
            {
              title: "Digital Transformation Marketing",
              desc: "Launching a new mobile app? Migrating customers to digital banking? We create omnichannel campaigns that drive adoption of your digital products while reducing branch support burden.",
              icon: <PieChart size={24} strokeWidth={1.5} />,
            },
            {
              title: "Community Engagement",
              desc: "Financial institutions thrive on community trust. We plan and execute local sponsorship activations, financial literacy events, and community partnership programs that deepen your roots.",
              icon: <Users size={24} strokeWidth={1.5} />,
            },
          ]}
          process={[
            {
              step: "01",
              title: "Compliance Review & Positioning",
              desc: "Before we touch anything creative, we map out your regulatory requirements — OSFI guidelines, provincial regulations, and internal compliance policies. Every campaign is built within these guardrails from day one.",
            },
            {
              step: "02",
              title: "Brand & Audience Analysis",
              desc: "We analyze your current brand perception across different customer segments — long-term account holders, new Canadians, Gen-Z digital natives — and identify the gaps between perception and aspiration.",
            },
            {
              step: "03",
              title: "Omnichannel Campaign Execution",
              desc: "We launch coordinated campaigns across digital channels (social, SEM, email) and physical touchpoints (branch activations, community events, direct mail) to ensure consistent messaging everywhere.",
            },
            {
              step: "04",
              title: "Measurement & Reporting",
              desc: "We track customer acquisition costs, product adoption rates, Net Promoter Score changes, and branch-level engagement metrics. Every dollar spent is tied to a measurable business outcome.",
            },
          ]}
          whySection={{
            heading: "Why Canada's leading financial institutions work with us.",
            points: [
              "We understand the regulatory landscape (OSFI, PIPEDA, provincial securities regulations) and build campaigns that are compliant from concept to execution.",
              "Our team has deep experience marketing for banks, credit unions, insurance companies, and wealth management firms across Canada.",
              "We bridge the digital-physical divide with campaigns that drive online adoption through trusted, in-person interactions.",
              "We respect institutional heritage while pushing creative boundaries to attract the next generation of financial services customers.",
              "Our bilingual capabilities ensure consistent brand experiences across both English and French-speaking Canadian markets.",
            ],
          }}
          faqs={[
            {
              question: "How do you handle compliance in financial services marketing?",
              answer: "Compliance is built into our process from day one — not bolted on at the end. We begin every engagement with a thorough review of your regulatory requirements, including OSFI guidelines, provincial regulations, and your internal compliance policies. All creative assets go through a compliance review checklist before deployment.",
            },
            {
              question: "Can you help us market to younger demographics without alienating existing customers?",
              answer: "This is one of our core specialties. We develop segmented campaigns that speak authentically to Gen-Z and Millennial audiences through the channels and visual language they expect, while maintaining the institutional credibility and trust signals that your established customer base relies on. It's not about choosing one over the other — it's about speaking to each audience in the way they want to be spoken to.",
            },
            {
              question: "Do you work with credit unions and smaller financial institutions?",
              answer: "Absolutely. We work with financial institutions of all sizes — from Canada's Big Five banks to regional credit unions and independent insurance brokers. Our engagement models are flexible and scaled to match your budget and market footprint.",
            },
            {
              question: "What kind of branch-level activations do you run?",
              answer: "Our branch activations range from digital product education sessions (teaching customers how to use mobile banking apps) to community financial literacy workshops, grand opening events, and seasonal campaigns. We deploy trained field teams that represent your brand professionally and can handle customer questions in real time.",
            },
            {
              question: "Can you support bilingual campaigns for Quebec markets?",
              answer: "Yes. We develop fully bilingual campaign assets and deploy bilingual field teams for Quebec-based activations. All French-language materials are reviewed by native speakers and checked for compliance with Quebec language regulations (Bill 96).",
            },
            {
              question: "How do you measure the success of a financial services campaign?",
              answer: "We track metrics that matter to financial institutions: new account openings, digital product adoption rates (app downloads, online banking enrollment), customer acquisition cost, Net Promoter Score changes, and branch foot traffic. We deliver monthly executive reports tied directly to these KPIs.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
