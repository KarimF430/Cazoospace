import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import { Target, Handshake, BarChart3, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Sales Acceleration in Canada | Cazoo Space",
  description: "Enterprise ground-game execution for B2B sales in Canada. We provide physical presence, reference installations, and relationship events to close complex deals faster.",
  alternates: { canonical: "https://cazoospace.com/services/b2b-sales" },
};

export default function B2BSalesPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <ServiceDetailLayout
          tag="B2B SALES"
          title="Enterprise"
          titleAccent="Ground-Game."
          subtitle="Closing enterprise deals requires more than cold emails and slide decks. It demands physical presence, strategic positioning, and relationship capital built face-to-face. That's where we come in."
          heroDescription="We are the boots on the ground for your B2B sales engine. From reference installations that let prospects experience your product live, to high-touch relationship events that accelerate pipeline — we provide the human infrastructure that turns interest into signed contracts across Canada."
          capabilities={[
            {
              title: "Reference Installations",
              desc: "We install and showcase your product in live environments so prospects can see it in action — not in a demo, not in a pitch deck, but running in the real world where it matters.",
              icon: <Target size={24} strokeWidth={1.5} />,
            },
            {
              title: "Relationship Events",
              desc: "Intimate executive dinners, industry roundtables, and on-site product experiences designed to build the trust and rapport that enterprise sales cycles demand.",
              icon: <Handshake size={24} strokeWidth={1.5} />,
            },
            {
              title: "Pipeline Analytics",
              desc: "We don't just generate leads. We track every interaction, measure engagement quality, and report against your pipeline KPIs so you know exactly which activities are driving revenue.",
              icon: <BarChart3 size={24} strokeWidth={1.5} />,
            },
            {
              title: "National Coverage",
              desc: "Whether your prospects are in Toronto, Vancouver, Calgary, or Montreal — our field teams are trained and deployed to represent your brand professionally in every major Canadian market.",
              icon: <MapPin size={24} strokeWidth={1.5} />,
            },
          ]}
          process={[
            {
              step: "01",
              title: "Discovery & Mapping",
              desc: "We audit your current sales pipeline, identify high-value target accounts, and map out the physical touchpoints that would have the greatest impact on deal velocity.",
            },
            {
              step: "02",
              title: "Team Training & Deployment",
              desc: "Our field teams are rigorously trained on your product, your value proposition, and your competitive differentiators. They represent you like an extension of your own sales team.",
            },
            {
              step: "03",
              title: "Activation & Engagement",
              desc: "We execute reference installations, host relationship-building events, and create physical proof points that your sales team can leverage throughout the deal cycle.",
            },
            {
              step: "04",
              title: "Reporting & Optimization",
              desc: "Every engagement is tracked and measured. We provide detailed reporting on pipeline impact, prospect engagement, and conversion metrics so we can continuously optimize.",
            },
          ]}
          whySection={{
            heading: "Why companies across Canada choose us for B2B sales acceleration.",
            points: [
              "We shorten enterprise sales cycles by giving prospects tangible, physical proof — not just promises.",
              "Our field teams are trained specifically on your product and messaging, not generic brand ambassadors.",
              "Every engagement is tied to hard pipeline metrics — meetings booked, proposals sent, deals closed.",
              "We operate across every major Canadian market with consistent quality and brand representation.",
              "Our approach is designed for complex, high-value deals where trust and personal relationships are the deciding factors.",
            ],
          }}
          faqs={[
            {
              question: "What types of B2B products work best with your approach?",
              answer: "Our methodology is most effective for high-value, complex products where buyers need to see, touch, or experience the solution before committing. This includes enterprise software, hardware solutions, PropTech platforms, and industrial equipment. If your average deal size is over $50K and involves multiple decision-makers, we can dramatically accelerate your pipeline.",
            },
            {
              question: "How do reference installations work?",
              answer: "We coordinate with existing clients or partner locations to install and showcase your product in a live, operational environment. When a prospect visits, they see your solution running in the real world — not in a controlled demo environment. This creates significantly more trust and urgency than any traditional sales presentation.",
            },
            {
              question: "Do your field teams replace our existing sales team?",
              answer: "Not at all. We work as an extension of your sales team, not a replacement. Our field teams handle the physical execution — installations, event logistics, on-site demonstrations — while your account executives focus on closing. Think of us as your sales team's boots on the ground.",
            },
            {
              question: "What markets in Canada do you cover?",
              answer: "We currently operate in all major Canadian metropolitan areas, including Toronto, Vancouver, Calgary, Montreal, Ottawa, and Edmonton. We can also coordinate deployments in mid-size markets based on your target account distribution.",
            },
            {
              question: "How do you measure ROI on B2B sales activations?",
              answer: "We track a comprehensive set of metrics including meetings generated, pipeline influenced, proposal conversions, and ultimately, revenue attributed to physical engagement activities. We provide monthly reporting that directly ties our activities to your sales funnel progression.",
            },
            {
              question: "What is the typical engagement timeline?",
              answer: "A standard B2B sales acceleration engagement runs 3-6 months. The first 2-3 weeks are dedicated to discovery and team training. We begin active deployment in week 3-4 and continuously optimize throughout the engagement based on performance data.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
