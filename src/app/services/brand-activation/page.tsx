import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import { PartyPopper, Camera, Heart, Megaphone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Activation Agency in Canada | Cazoo Space",
  description: "High-impact experiential campaigns and pop-up activations across Canada. We transform passive observers into loyal brand advocates through immersive human connection.",
  alternates: { canonical: "https://cazoospace.com/services/brand-activation" },
};

export default function BrandActivationPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <ServiceDetailLayout
          tag="BRAND ACTIVATION"
          title="Experiences That"
          titleAccent="Move People."
          subtitle="In a world drowning in digital ads, the brands that win are the ones people remember feeling something about. We create those feelings — in person, face to face, in moments that can't be scrolled past."
          heroDescription="We design and execute high-impact experiential marketing campaigns across Canada. From pop-up installations in downtown Toronto to multi-city roadshows reaching coast to coast — we build physical brand experiences that generate real conversations, genuine emotional connections, and measurable business results."
          capabilities={[
            { title: "Pop-Up Experiences", desc: "We concept, design, and execute branded pop-up installations that stop people in their tracks. From shopping malls to festivals to corporate campuses — we create moments people photograph, share, and remember.", icon: <PartyPopper size={24} strokeWidth={1.5} /> },
            { title: "Experiential Events", desc: "Immersive launch events, product reveal experiences, and interactive brand installations that engage all five senses. We handle everything from creative concept to on-site logistics to post-event reporting.", icon: <Camera size={24} strokeWidth={1.5} /> },
            { title: "Street Teams & Sampling", desc: "Professionally trained brand ambassadors deployed in high-traffic locations across Canadian cities. We handle recruitment, training, logistics, and real-time performance tracking for every activation.", icon: <Heart size={24} strokeWidth={1.5} /> },
            { title: "Multi-City Roadshows", desc: "We plan and execute coordinated brand experiences across multiple Canadian markets simultaneously — ensuring consistent quality and brand representation from Vancouver to Halifax.", icon: <Megaphone size={24} strokeWidth={1.5} /> },
          ]}
          process={[
            { step: "01", title: "Creative Brief & Concepting", desc: "We start with your business goals — not a creative whim. Every activation concept is designed to drive a specific, measurable outcome: sign-ups, downloads, purchases, or brand sentiment shifts." },
            { step: "02", title: "Design & Production", desc: "Our team handles the full creative production pipeline — from visual design and fabrication to technology integration and logistics planning. You approve the concept; we build it." },
            { step: "03", title: "Deployment & Execution", desc: "We manage every on-the-ground detail: permits, staffing, inventory, setup, teardown, and real-time quality control. Our field managers ensure every activation runs flawlessly." },
            { step: "04", title: "Data Capture & Reporting", desc: "Every interaction is tracked. We capture engagement data, lead information, social media amplification, and conversion metrics. You receive a comprehensive post-activation report with clear ROI analysis." },
          ]}
          whySection={{
            heading: "Why brands across Canada choose us for experiential activation.",
            points: [
              "We don't just execute events — we engineer measurable brand experiences with clear KPIs and ROI tracking.",
              "Our brand ambassadors are rigorously trained on your product, not just your talking points. They can demo, troubleshoot, and convert.",
              "We handle everything end-to-end: creative, production, logistics, staffing, and reporting. One partner, zero headaches.",
              "We have activation permits and venue relationships across every major Canadian market.",
              "Every activation is designed to generate both in-person engagement and digital amplification through shareable moments.",
            ],
          }}
          faqs={[
            { question: "What types of brands benefit most from experiential activations?", answer: "Any brand with a product or experience that benefits from being seen, touched, or tried in person. Our most successful activations have been for technology products, food and beverage brands, financial services, automotive companies, and consumer lifestyle brands. If your product has a story that's better experienced than read about, experiential is for you." },
            { question: "How do you handle logistics across multiple Canadian cities?", answer: "We have established logistics networks, venue relationships, and staffing partners in all major Canadian markets. Our operations team coordinates simultaneous deployments using centralized project management, ensuring consistent quality whether we're activating in one city or ten." },
            { question: "What's the typical lead time for a brand activation?", answer: "For a standard pop-up or street team activation, we need 4-6 weeks of lead time. For larger experiential installations, immersive events, or multi-city roadshows, we recommend 8-12 weeks to allow for proper creative development, production, and logistics planning." },
            { question: "How do you measure the success of an experiential campaign?", answer: "We measure engagement volume (foot traffic, interactions), lead capture (emails, sign-ups, downloads), social amplification (UGC, shares, reach), and direct conversion (purchases, sign-ups attributed to the activation). Every client receives a detailed post-campaign report." },
            { question: "Can you integrate digital and physical activation strategies?", answer: "Absolutely. We design activations with built-in digital amplification — shareable photo moments, social media contests, QR-code-driven experiences, and real-time digital displays. The physical experience feeds the digital conversation and vice versa." },
            { question: "Do you provide the staff for activations?", answer: "Yes. We recruit, train, and deploy brand ambassadors and event staff for every activation. Our teams go through product-specific training, brand immersion sessions, and on-site briefings before every deployment. We handle payroll, scheduling, and performance management." },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
