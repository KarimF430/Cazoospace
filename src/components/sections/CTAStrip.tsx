import Link from "next/link";
import { cn } from "@/lib/utils";

type CTAStripProps = {
  variant?: "red" | "dark";
  eyebrow?: string;
  headline?: string;
  sub?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaId?: string;
};

export default function CTAStrip({
  variant = "red",
  eyebrow = "Ready to Execute",
  headline = "Serious portfolios. Serious results.",
  sub = "We work with enterprise clients managing 100+ units. If that's you, let's talk strategy — not scope.",
  ctaLabel = "Schedule a Strategy Call →",
  ctaHref = "/partner",
  ctaId = "cta-strip-btn",
}: CTAStripProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "py-20 text-center",
        isDark ? "bg-[#0A0A0B]" : "bg-[#C8102E]"
      )}
      aria-labelledby="cta-strip-heading"
    >
      <div className="container-brand flex flex-col items-center gap-5">
        {/* Eyebrow */}
        <p
          className={cn(
            "font-body font-bold text-[9px] uppercase tracking-[0.2em]",
            isDark ? "text-[#C8102E]" : "text-white/80"
          )}
        >
          {eyebrow}
        </p>

        {/* Headline */}
        <h2
          id="cta-strip-heading"
          className={cn(
            "font-body font-black leading-tight tracking-tight max-w-lg",
            isDark ? "text-white" : "text-white"
          )}
          style={{ fontSize: "clamp(22px, 3vw, 30px)" }}
        >
          {headline}
        </h2>

        {/* Sub */}
        <p
          className={cn(
            "font-body text-[12px] leading-relaxed max-w-[440px]",
            isDark ? "text-white/70" : "text-white/80"
          )}
        >
          {sub}
        </p>

        {/* CTA */}
        <Link
          href={ctaHref}
          className={cn(
            "btn mt-2",
            isDark ? "btn-primary" : "btn-white"
          )}
          id={ctaId}
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
