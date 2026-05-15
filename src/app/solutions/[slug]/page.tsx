import { solutions } from "@/data/solutions";
import { caseStudies } from "@/data/case-studies";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import CTAStrip from "@/components/sections/CTAStrip";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDescription,
      images: [`/og/solutions-${slug}.jpg`],
    },
    alternates: {
      canonical: `https://nexusagency.com/solutions/${slug}`,
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const relatedStudy = caseStudies.find(
    (c) => c.slug === solution.relatedCaseStudy
  );

  return (
    <>
      {/* JSON-LD Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `NEXUS — ${solution.industry}`,
            description: solution.metaDescription,
            provider: {
              "@type": "Organization",
              name: "NEXUS Agency",
              url: "https://nexusagency.com",
            },
            serviceType: solution.industry,
            areaServed: { "@type": "Country", name: "United States" },
          }),
        }}
      />
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: solution.faq.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }),
        }}
      />

      <NavBar />
      <main id="main-content">
        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-end bg-[#0A0A0B] overflow-hidden pt-32 pb-20">
          <div
            className="absolute inset-0 bg-red-grid"
            style={{ backgroundSize: "36px 36px" }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-20 -right-32 w-[400px] h-[400px] bg-[#6B1A2A] rounded-[16px]"
            style={{ transform: "rotate(15deg)", opacity: 0.25 }}
            aria-hidden="true"
          />
          <div className="container-brand relative z-10">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{
                border: "1px solid rgba(200,16,46,0.4)",
                backgroundColor: "rgba(200,16,46,0.08)",
              }}
            >
              <span className="text-[#C8102E] font-body font-bold text-[10px] uppercase tracking-[0.15em]">
                {solution.industry}
              </span>
            </div>

            <h1
              className="font-body font-black text-white leading-tight tracking-tight mb-5 max-w-2xl"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              {solution.heroHeadline}
            </h1>
            <p className="text-white/50 font-body text-[15px] leading-[1.7] max-w-[480px] mb-8">
              {solution.heroSub}
            </p>
            <Link
              href="/partner"
              className="btn btn-primary"
              id={`solution-hero-cta-${slug}`}
            >
              {solution.heroCTA}
            </Link>
          </div>
        </section>

        {/* PROBLEM STATEMENT */}
        <section className="py-20 bg-white" aria-labelledby="problem-heading">
          <div className="container-brand grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="eyebrow mb-4">The Problem</p>
              <h2
                id="problem-heading"
                className="font-body font-black text-[#0A0A0B] leading-tight tracking-tight"
                style={{ fontSize: "clamp(22px, 3.5vw, 36px)" }}
              >
                {solution.problemHeadline}
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {solution.problemBody.map((para, i) => (
                <p
                  key={i}
                  className="font-body text-[#94928E] text-[13px] leading-[1.7]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK — NUMBERED STEPS */}
        <section
          className="py-20 bg-[#F7F5F1]"
          aria-labelledby="steps-heading"
        >
          <div className="container-brand">
            <p className="eyebrow mb-4">How We Work</p>
            <h2
              id="steps-heading"
              className="font-body font-black text-[#0A0A0B] leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(22px, 3.5vw, 36px)" }}
            >
              A process built for scale.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {solution.steps.map((step) => (
                <div key={step.number} className="flex flex-col gap-4">
                  <div
                    className="font-mono font-black text-[#C8102E] leading-none"
                    style={{ fontSize: "40px" }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>
                  <div
                    className="w-8 h-[2px] bg-[#C8102E]"
                    aria-hidden="true"
                  />
                  <h3 className="font-body font-bold text-[#0A0A0B] text-[13px]">
                    {step.title}
                  </h3>
                  <p className="font-body text-[#94928E] text-[11px] leading-[1.7]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES GRID */}
        <section className="py-20 bg-white" aria-labelledby="cap-heading">
          <div className="container-brand">
            <p className="eyebrow mb-4">What We Deploy</p>
            <h2
              id="cap-heading"
              className="font-body font-black text-[#0A0A0B] leading-tight tracking-tight mb-12"
              style={{ fontSize: "clamp(22px, 3.5vw, 36px)" }}
            >
              Built for your use case.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {solution.capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-[#F7F5F1] border border-[#E6E3DE] rounded-[8px] p-6 card-hover"
                >
                  <div
                    className="w-10 h-10 rounded-[6px] flex items-center justify-center mb-4 text-lg"
                    style={{ backgroundColor: "rgba(200,16,46,0.06)" }}
                    aria-hidden="true"
                  >
                    {cap.icon}
                  </div>
                  <h3 className="font-body font-bold text-[#0A0A0B] text-[12px] mb-2">
                    {cap.title}
                  </h3>
                  <p className="font-body text-[#94928E] text-[11px] leading-[1.7]">
                    {cap.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED CASE STUDY */}
        {relatedStudy && (
          <section className="py-20 bg-[#F7F5F1]" aria-label="Related case study">
            <div className="container-brand">
              <p className="eyebrow mb-8">Proof at Scale</p>
              <Link
                href={`/work/${relatedStudy.slug}`}
                className="group block bg-[#0A0A0B] rounded-[8px] p-8 md:p-10 overflow-hidden relative dark-card-hover"
                id={`solution-case-study-${relatedStudy.slug}`}
              >
                <div
                  className="absolute -top-8 -right-8 w-32 h-32 bg-[#6B1A2A] rounded-[8px]"
                  style={{ transform: "rotate(20deg)", opacity: 0.5 }}
                  aria-hidden="true"
                />
                <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6 items-end">
                  <div>
                    <span
                      className="inline-block font-body font-bold text-[9px] uppercase tracking-[0.15em] px-2 py-1 rounded mb-4"
                      style={{
                        color: "rgba(200,16,46,0.8)",
                        backgroundColor: "rgba(200,16,46,0.1)",
                      }}
                    >
                      {relatedStudy.clientType}
                    </span>
                    <h3 className="font-body font-black text-white leading-tight mb-3" style={{ fontSize: "clamp(20px, 3vw, 28px)" }}>
                      {relatedStudy.title}
                    </h3>
                    <p className="font-body text-white/40 text-[11px]">
                      {relatedStudy.scale}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-body font-bold text-[11px] uppercase tracking-[0.12em] text-[#C8102E] group-hover:gap-4 transition-all">
                    Read Case Study →
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-20 bg-white" aria-labelledby="faq-heading">
          <div className="container-brand max-w-2xl">
            <p className="eyebrow mb-4">Common Questions</p>
            <h2
              id="faq-heading"
              className="font-body font-black text-[#0A0A0B] leading-tight tracking-tight mb-10"
              style={{ fontSize: "clamp(22px, 3.5vw, 36px)" }}
            >
              Everything you need to know.
            </h2>
            <FAQAccordion items={solution.faq} />
          </div>
        </section>

        <CTAStrip variant="red" />
      </main>
      <Footer />
    </>
  );
}
