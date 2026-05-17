import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import { Shield, Smartphone, TrendingUp, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinTech Marketing Agency in Canada | Cazoo Space",
  description: "Cutting-edge marketing strategies for FinTech firms in Canada. We help financial technology companies build trust, acquire users, and scale globally.",
  alternates: { canonical: "https://cazoospace.com/services/fintech" },
};

export default function FinTechPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <ServiceDetailLayout
          tag="FINTECH MARKETING"
          title="Scale Trust."
          titleAccent="Acquire Users."
          subtitle="FinTech companies face a unique challenge: you're asking people to trust you with their money. Marketing in this space isn't about being loud — it's about being credible, compliant, and deeply human."
          heroDescription="We help Canadian FinTech companies break through the noise with marketing strategies that balance innovation with trust. From user acquisition campaigns to physical product education events, we build the brand credibility that drives downloads, sign-ups, and long-term retention."
          capabilities={[
            {
              title: "Trust-First Branding",
              desc: "We position your FinTech brand as a safe, credible, and forward-thinking alternative. Our campaigns emphasize security, transparency, and real customer outcomes over flashy features.",
              icon: <Shield size={24} strokeWidth={1.5} />,
            },
            {
              title: "User Acquisition at Scale",
              desc: "Coordinated digital and physical campaigns designed to drive app downloads and account sign-ups. We run on-the-ground activations in major Canadian cities, targeting high-intent user segments.",
              icon: <Smartphone size={24} strokeWidth={1.5} />,
            },
            {
              title: "Growth Marketing",
              desc: "Data-driven growth experiments that optimize every stage of your funnel — from awareness to activation to referral. We track cost-per-acquisition and lifetime value, not vanity metrics.",
              icon: <TrendingUp size={24} strokeWidth={1.5} />,
            },
            {
              title: "Cross-Border Strategy",
              desc: "Planning to expand beyond Canada? We develop market-entry strategies that adapt your messaging and brand for new regulatory environments and cultural expectations.",
              icon: <Globe size={24} strokeWidth={1.5} />,
            },
          ]}
          process={[
            {
              step: "01",
              title: "Regulatory & Brand Audit",
              desc: "We start by understanding your compliance landscape and brand positioning. This ensures every campaign we build is both effective and fully compliant with OSFI, FINTRAC, and provincial regulations.",
            },
            {
              step: "02",
              title: "Audience Segmentation",
              desc: "We identify and map your highest-value user segments — early adopters, underserved demographics, and high-net-worth individuals — to tailor messaging that resonates deeply.",
            },
            {
              step: "03",
              title: "Multi-Channel Activation",
              desc: "We execute across digital (paid social, SEM, content) and physical (in-person demos, campus activations, partnership events) channels to drive qualified sign-ups.",
            },
            {
              step: "04",
              title: "Retention & Advocacy",
              desc: "We don't stop at acquisition. We build referral programs, community events, and retention campaigns that turn first-time users into lifelong advocates for your platform.",
            },
          ]}
          whySection={{
            heading: "Why Canadian FinTechs trust us to grow their user base.",
            points: [
              "We understand Canadian financial regulations (OSFI, PIPEDA, CASL) and build campaigns that are compliant from day one.",
              "Our blend of digital and physical marketing means we reach users where competitors can't — in person, on campus, and at community events.",
              "We measure what matters: cost-per-install, DAU/MAU ratios, and customer lifetime value — not impressions.",
              "Our field teams are trained on your specific platform, so they can demonstrate features and answer questions in real time.",
              "We have deep experience marketing to Canadian demographics including underbanked populations, Gen-Z, and new Canadians.",
            ],
          }}
          faqs={[
            {
              question: "Do you understand Canadian financial regulations for marketing?",
              answer: "Absolutely. We work within the frameworks set by OSFI, FINTRAC, and provincial securities regulators. Every campaign we produce is reviewed for compliance with PIPEDA (privacy), CASL (anti-spam), and any specific advertising guidelines from your industry's regulatory body.",
            },
            {
              question: "How do physical activations help a digital FinTech product?",
              answer: "Trust is the biggest barrier to FinTech adoption. When potential users can meet a real person, ask questions face-to-face, and get hands-on help downloading and setting up your app, conversion rates increase dramatically. Our in-person activations consistently deliver 3-5x higher sign-up rates compared to digital-only campaigns.",
            },
            {
              question: "Can you help us expand into the US or other international markets?",
              answer: "Yes. While our primary operations are in Canada, we have frameworks for developing market-entry strategies for the US, UK, and other markets. We handle the brand positioning, regulatory research, and initial activation planning for cross-border expansion.",
            },
            {
              question: "What FinTech verticals do you work with?",
              answer: "We work across the full FinTech spectrum — neobanks, payment processors, lending platforms, robo-advisors, InsurTech, and crypto/Web3 companies. Our approach adapts to each vertical's unique regulatory and user trust requirements.",
            },
            {
              question: "How quickly can we see results from a user acquisition campaign?",
              answer: "Most clients see measurable results within the first 30 days of activation. However, we always recommend a minimum 90-day engagement to properly optimize targeting, messaging, and channel mix for sustained, efficient growth.",
            },
            {
              question: "What does a typical FinTech marketing engagement cost?",
              answer: "Pricing depends on the scope of channels, geographic coverage, and campaign duration. We work with FinTech startups at pre-Series A all the way through to publicly traded financial institutions. Book a briefing and we will provide a custom proposal tailored to your stage and goals.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
