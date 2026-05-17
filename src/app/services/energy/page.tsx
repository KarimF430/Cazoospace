import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import ServiceDetailLayout from "@/components/sections/ServiceDetailLayout";
import { Wind, Leaf, HardHat, BarChart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Sector Marketing in Canada | Cazoo Space",
  description: "Strategic communications for Canada's energy sector. We highlight sustainability initiatives, infrastructure projects, and grid modernizations.",
  alternates: { canonical: "https://cazoospace.com/services/energy" },
};

export default function EnergyPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <ServiceDetailLayout
          tag="ENERGY"
          title="Power the"
          titleAccent="Transition."
          subtitle="Canada's energy landscape is transforming. Whether you're an oil and gas leader pivoting to renewables, a cleantech startup building momentum, or a utility modernizing its grid — your story needs to be heard."
          heroDescription="We provide strategic marketing communications for Canada's energy sector. From stakeholder engagement programs to community relations campaigns, we help energy companies build public trust, attract investment, and communicate complex infrastructure projects in ways that resonate with diverse audiences."
          capabilities={[
            { title: "Sustainability Communications", desc: "We help energy companies articulate their environmental commitments authentically — without greenwashing. Our campaigns are built on real data, measurable targets, and transparent progress reporting.", icon: <Leaf size={24} strokeWidth={1.5} /> },
            { title: "Community Engagement", desc: "Infrastructure projects depend on community support. We plan and execute stakeholder engagement programs, town halls, and local partnership initiatives that build trust and address concerns proactively.", icon: <HardHat size={24} strokeWidth={1.5} /> },
            { title: "Clean Energy Positioning", desc: "For cleantech companies, we develop brand positioning and go-to-market strategies that communicate your technology's impact to investors, regulators, and early-adopter customers.", icon: <Wind size={24} strokeWidth={1.5} /> },
            { title: "Investor Relations Support", desc: "We create compelling investor-facing materials, ESG reports, and thought leadership content that positions your energy company as a forward-thinking leader in Canada's energy transition.", icon: <BarChart size={24} strokeWidth={1.5} /> },
          ]}
          process={[
            { step: "01", title: "Stakeholder Mapping", desc: "We identify and map all relevant stakeholders — communities, regulators, investors, media, employees — and understand their specific concerns and information needs." },
            { step: "02", title: "Narrative Development", desc: "We craft a master narrative that connects your business objectives to broader societal benefits — energy security, job creation, environmental stewardship — in authentic, human terms." },
            { step: "03", title: "Multi-Channel Execution", desc: "We execute across earned media, digital content, community events, stakeholder briefings, and investor communications to ensure consistent messaging across all audiences." },
            { step: "04", title: "Impact Measurement", desc: "We track media sentiment, stakeholder perception shifts, community engagement metrics, and investor interest indicators to measure the real impact of our communications." },
          ]}
          whySection={{
            heading: "Why Canadian energy companies trust us with their brand.",
            points: [
              "We understand the unique sensitivities of energy communications in Canada — from Alberta's oil sands to Quebec's hydroelectric infrastructure.",
              "Our campaigns are built on facts and measurable outcomes, never greenwashing or empty promises.",
              "We have experience navigating Indigenous consultation requirements and community benefit agreements.",
              "We work with both established energy majors and emerging cleantech startups across Canada.",
              "Our bilingual capabilities ensure consistent messaging across English and French-speaking communities.",
            ],
          }}
          faqs={[
            { question: "Do you work with both traditional and renewable energy companies?", answer: "Yes. We work across the full energy spectrum — oil and gas producers, pipeline companies, electric utilities, solar and wind developers, hydrogen startups, and energy storage companies. Our approach is tailored to each client's specific transition narrative and stakeholder landscape." },
            { question: "How do you handle community opposition to energy projects?", answer: "We take a proactive, transparent approach to community engagement. This includes early stakeholder mapping, listening sessions to understand concerns, clear communication of project benefits and mitigations, and ongoing dialogue throughout the project lifecycle. We never spin or minimize legitimate concerns." },
            { question: "Can you help with ESG reporting and communications?", answer: "Absolutely. We help energy companies develop ESG frameworks, write sustainability reports, and create investor-facing communications that articulate environmental, social, and governance performance in a credible, data-driven way." },
            { question: "Do you understand Canadian energy regulations?", answer: "We have working knowledge of the regulatory landscape including the CER (Canada Energy Regulator), provincial energy boards, and environmental assessment requirements. We don't provide legal advice, but we ensure our communications are consistent with regulatory requirements and public commitments." },
            { question: "What's your experience with Indigenous engagement?", answer: "We approach Indigenous engagement with deep respect and cultural sensitivity. We have experience supporting clients through Indigenous consultation processes, developing community benefit agreements, and creating communications that honor Indigenous perspectives and treaty rights." },
            { question: "How do you help cleantech startups stand out in a crowded market?", answer: "We focus on differentiating through impact storytelling — not just what your technology does, but the measurable environmental and economic outcomes it delivers. We also leverage physical activations and industry events to put your team in front of the right investors and partners." },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
