import { blogPosts } from "@/data/blog-posts";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import CTAStrip from "@/components/sections/CTAStrip";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | NEXUS Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [`/og/blog-${slug}.jpg`],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://nexusagency.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* JSON-LD Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            author: {
              "@type": "Organization",
              name: "NEXUS Agency",
            },
            publisher: {
              "@type": "Organization",
              name: "NEXUS Agency",
              logo: {
                "@type": "ImageObject",
                url: "https://nexusagency.com/logo.svg",
              },
            },
            datePublished: post.date,
            keywords: post.tags.join(", "),
          }),
        }}
      />

      <NavBar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-[#0A0A0B] pt-32 pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-red-grid"
            style={{ backgroundSize: "36px 36px" }}
            aria-hidden="true"
          />
          <div
            className="absolute -top-16 -right-24 w-[280px] h-[280px] bg-[#6B1A2A] rounded-[12px]"
            style={{ transform: "rotate(15deg)", opacity: 0.25 }}
            aria-hidden="true"
          />
          <div className="container-brand relative z-10 max-w-2xl">
            {/* Meta row */}
            <div className="flex items-center gap-4 mb-6">
              <span
                className="font-body font-bold text-[9px] uppercase tracking-[0.15em] px-2 py-1 rounded"
                style={{
                  color: "rgba(200,16,46,0.8)",
                  backgroundColor: "rgba(200,16,46,0.1)",
                }}
              >
                {post.category}
              </span>
              <span className="font-body text-white/30 text-[10px]">
                {post.readTime}
              </span>
              <span className="font-body text-white/30 text-[10px]">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <h1
              className="font-body font-black text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
            >
              {post.title}
            </h1>
          </div>
        </section>

        {/* Article body */}
        <section className="py-20 bg-white">
          <div className="container-brand">
            <div className="grid md:grid-cols-[1fr_240px] gap-12 md:gap-16">
              {/* Main article */}
              <article aria-label={post.title}>
                {/* Excerpt / lead */}
                <p className="font-body font-semibold text-[#0A0A0B] text-[16px] leading-[1.75] mb-8 pb-8 border-b border-[#E6E3DE]">
                  {post.excerpt}
                </p>

                {/* Body paragraphs */}
                <div className="flex flex-col gap-5">
                  {post.body.map((para, i) => (
                    <p
                      key={i}
                      className="font-body text-[#0A0A0B] text-[14px] leading-[1.85]"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-[#E6E3DE]">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body font-bold text-[9px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-[#E6E3DE] text-[#94928E]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="flex flex-col gap-8">
                {/* Author */}
                <div className="bg-[#F7F5F1] border border-[#E6E3DE] rounded-[8px] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-[#C8102E] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-body font-black text-white text-[12px]">
                        N
                      </span>
                    </div>
                    <div>
                      <p className="font-body font-bold text-[12px] text-[#0A0A0B]">
                        {post.author}
                      </p>
                      <p className="font-body text-[10px] text-[#94928E]">
                        Enterprise Execution Partner
                      </p>
                    </div>
                  </div>
                  <p className="font-body text-[11px] text-[#94928E] leading-[1.6]">
                    Insights from the NEXUS team, based on 500+ property
                    activations across the US.
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-[#0A0A0B] rounded-[8px] p-6 text-center">
                  <p className="font-body font-bold text-[10px] uppercase tracking-[0.15em] text-[#C8102E] mb-3">
                    Ready to Execute?
                  </p>
                  <p className="font-body text-white/50 text-[11px] leading-[1.6] mb-5">
                    Let&apos;s talk about your portfolio and what adoption actually looks like at scale.
                  </p>
                  <Link
                    href="/partner"
                    className="btn btn-primary w-full justify-center text-[10px]"
                    id="blog-sidebar-cta"
                  >
                    Partner With Us
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="py-16 bg-[#F7F5F1]" aria-label="More insights">
            <div className="container-brand">
              <p className="eyebrow mb-8">More Insights</p>
              <div className="grid md:grid-cols-2 gap-5">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block bg-white border border-[#E6E3DE] rounded-[8px] p-6 card-hover"
                    id={`blog-related-${p.slug}`}
                  >
                    <span
                      className="inline-block font-body font-bold text-[9px] uppercase tracking-[0.15em] px-2 py-1 rounded mb-3"
                      style={{
                        color: "rgba(200,16,46,0.8)",
                        backgroundColor: "rgba(200,16,46,0.06)",
                      }}
                    >
                      {p.category}
                    </span>
                    <h3 className="font-body font-bold text-[#0A0A0B] text-[14px] leading-snug group-hover:text-[#C8102E] transition-colors">
                      {p.title}
                    </h3>
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
