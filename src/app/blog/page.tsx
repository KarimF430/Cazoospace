import { blogPosts } from "@/data/blog-posts";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import CTAStrip from "@/components/sections/CTAStrip";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | Cazoo Space",
  description:
    "Insights on experiential marketing, brand activation, and enterprise execution strategy from the Cazoo Space team.",
  alternates: { canonical: "https://cazoospace.com/blog" },
  openGraph: {
    title: "Blog | Cazoo Space",
    description:
      "Experiential marketing, brand activation, and enterprise execution strategy.",
    images: ["/og/blog.jpg"],
  },
};

export default function BlogPage() {
  return (
    <>
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
            className="absolute -top-16 -right-24 w-[300px] h-[300px] bg-[#6B1A2A] rounded-[12px]"
            style={{ transform: "rotate(15deg)", opacity: 0.25 }}
            aria-hidden="true"
          />
          <div className="container-brand relative z-10">
            <p className="eyebrow mb-4">Insights & Perspective</p>
            <h1
              className="font-body font-black text-white leading-tight tracking-tight max-w-2xl"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Execution intelligence.
            </h1>
          </div>
        </section>

        {/* Blog grid */}
        <section className="py-20 bg-[#F7F5F1]" aria-label="Blog posts">
          <div className="container-brand">
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white border border-[#E6E3DE] rounded-[8px] overflow-hidden card-hover"
                  id={`blog-card-${post.slug}`}
                  aria-label={post.title}
                >
                  {/* Color bar */}
                  <div className="h-1 bg-[#C8102E]" aria-hidden="true" />

                  <div className="p-7">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="font-body font-bold text-[9px] uppercase tracking-[0.15em] px-2 py-1 rounded"
                        style={{
                          color: "rgba(200,16,46,0.8)",
                          backgroundColor: "rgba(200,16,46,0.06)",
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="font-body text-[10px] text-[#94928E]">
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-body font-black text-[#0A0A0B] text-[15px] leading-snug mb-3 group-hover:text-[#C8102E] transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="font-body text-[#94928E] text-[12px] leading-[1.7] mb-5">
                      {post.excerpt}
                    </p>

                    {/* Date + CTA */}
                    <div className="flex items-center justify-between">
                      <span className="font-body text-[10px] text-[#94928E]">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="font-body font-bold text-[11px] text-[#C8102E] uppercase tracking-[0.1em] group-hover:gap-3 transition-all">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTAStrip variant="dark" />
      </main>
      <Footer />
    </>
  );
}
