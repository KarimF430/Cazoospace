import { caseStudies } from "@/data/case-studies";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import CTAStrip from "@/components/sections/CTAStrip";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 86400;

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} | NEXUS Case Study`,
    description: `${study.heroStat} ${study.heroStatLabel} — ${study.heroContext}`,
    openGraph: {
      title: study.title,
      description: study.heroContext,
      images: [`/og/work-${slug}.jpg`],
    },
    alternates: {
      canonical: `https://nexusagency.com/work/${slug}`,
    },
  };
}

const industryLabels: Record<string, string> = {
  "property-management": "Property Management",
  "real-estate": "Real Estate Developer",
  proptech: "Proptech Brand",
  events: "Events & Brand",
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const related = caseStudies
    .filter((c) => c.slug !== slug && c.industry === study.industry)
    .slice(0, 2);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: study.title,
            description: study.heroContext,
            author: { "@type": "Organization", name: "NEXUS Agency" },
            publisher: { "@type": "Organization", name: "NEXUS Agency", logo: { "@type": "ImageObject", url: "https://nexusagency.com/logo.svg" } },
          }),
        }}
      />

      <NavBar />
      <main id="main-content">
        {/* HERO */}
        <section className="relative bg-[#0A0A0B] pt-32 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-red-grid"
            style={{ backgroundSize: "36px 36px" }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-16 -right-32 w-[350px] h-[350px] bg-[#6B1A2A] rounded-[12px]"
            style={{ transform: "rotate(15deg)", opacity: 0.25 }}
            aria-hidden="true"
          />
          <div className="container-brand relative z-10">
            <span
              className="inline-block font-body font-bold text-[9px] uppercase tracking-[0.15em] px-2 py-1 rounded mb-5"
              style={{
                color: "rgba(200,16,46,0.8)",
                backgroundColor: "rgba(200,16,46,0.1)",
              }}
            >
              {industryLabels[study.industry]} · {study.clientType}
            </span>
            <h1
              className="font-body font-black text-white leading-tight tracking-tight max-w-3xl mb-8"
              style={{ fontSize: "clamp(28px, 4.5vw, 56px)" }}
            >
              {study.title}
            </h1>

            {/* 3 key stats inline */}
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {study.results.map((r) => (
                <div key={r.label}>
                  <div className="font-mono font-black text-white text-[28px] leading-none">
                    <span className="text-[#C8102E]">{r.stat[0]}</span>
                    {r.stat.slice(1)}
                  </div>
                  <p className="font-body font-bold text-[9px] uppercase tracking-[0.15em] text-white/40 mt-1">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="py-20 bg-white">
          <div className="container-brand grid md:grid-cols-[220px_1fr] gap-12 md:gap-16 items-start">
            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              <div>
                <p className="font-body font-bold text-[9px] uppercase tracking-[0.15em] text-[#C8102E] mb-2">
                  Industry
                </p>
                <p className="font-body text-[12px] text-[#0A0A0B]">
                  {industryLabels[study.industry]}
                </p>
              </div>
              <div>
                <p className="font-body font-bold text-[9px] uppercase tracking-[0.15em] text-[#C8102E] mb-2">
                  Timeline
                </p>
                <p className="font-body text-[12px] text-[#0A0A0B]">
                  {study.timeline}
                </p>
              </div>
              <div>
                <p className="font-body font-bold text-[9px] uppercase tracking-[0.15em] text-[#C8102E] mb-2">
                  Scale
                </p>
                <p className="font-body text-[12px] text-[#0A0A0B]">
                  {study.scale}
                </p>
              </div>
              <div>
                <p className="font-body font-bold text-[9px] uppercase tracking-[0.15em] text-[#C8102E] mb-2">
                  Services
                </p>
                <div className="flex flex-col gap-1">
                  {study.services.map((s) => (
                    <p key={s} className="font-body text-[12px] text-[#0A0A0B]">
                      {s}
                    </p>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main content */}
            <article>
              {/* Challenge */}
              <div className="mb-10">
                <h2 className="font-body font-black text-[#0A0A0B] text-[20px] mb-4">
                  The Challenge
                </h2>
                <p className="font-body text-[#94928E] text-[13px] leading-[1.8]">
                  {study.challenge}
                </p>
              </div>

              {/* Approach */}
              <div className="mb-10">
                <h2 className="font-body font-black text-[#0A0A0B] text-[20px] mb-4">
                  Our Approach
                </h2>
                <ul className="flex flex-col gap-3">
                  {study.approach.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-mono text-[#C8102E] text-[11px] font-bold mt-0.5 flex-shrink-0">
                        0{i + 1}
                      </span>
                      <p className="font-body text-[#0A0A0B] text-[13px] leading-[1.7]">
                        {step}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="mb-10">
                <h2 className="font-body font-black text-[#0A0A0B] text-[20px] mb-6">
                  The Results
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {study.results.map((r) => (
                    <div
                      key={r.label}
                      className="bg-[#0A0A0B] rounded-[8px] p-6 text-center"
                    >
                      <div className="font-mono font-black text-white text-[36px] leading-none mb-2">
                        <span className="text-[#C8102E]">{r.stat[0]}</span>
                        {r.stat.slice(1)}
                      </div>
                      <p className="font-body font-bold text-[9px] uppercase tracking-[0.15em] text-white/40 mb-2">
                        {r.label}
                      </p>
                      <p className="font-body text-[10px] text-white/30 leading-snug">
                        {r.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              <blockquote className="relative border-l-2 border-[#C8102E] pl-6 py-2">
                <p className="font-body text-[#0A0A0B] text-[14px] italic leading-[1.8] mb-4">
                  &ldquo;{study.clientQuote.text}&rdquo;
                </p>
                <cite className="not-italic">
                  <span className="font-body font-bold text-[12px] text-[#0A0A0B] block">
                    {study.clientQuote.author}
                  </span>
                  <span className="font-body text-[11px] text-[#94928E]">
                    {study.clientQuote.role}, {study.clientQuote.company}
                  </span>
                </cite>
              </blockquote>
            </article>
          </div>
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="py-16 bg-[#F7F5F1]" aria-label="Related case studies">
            <div className="container-brand">
              <p className="eyebrow mb-8">More Results</p>
              <div className="grid md:grid-cols-2 gap-4">
                {related.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/work/${c.slug}`}
                    className="group block bg-[#0A0A0B] rounded-[8px] p-7 dark-card-hover"
                    id={`related-${c.slug}`}
                  >
                    <h3 className="font-body font-bold text-white text-[15px] mb-2 group-hover:text-[#C8102E] transition-colors">
                      {c.title}
                    </h3>
                    <p className="font-body text-white/30 text-[11px]">
                      {c.heroContext}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTAStrip variant="red" />
      </main>
      <Footer />
    </>
  );
}
