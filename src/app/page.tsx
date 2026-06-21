import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PalantirHero from "@/components/sections/PalantirHero";

import SectionChemistry from "@/components/sections/SectionChemistry";
import PalantirServices from "@/components/sections/PalantirServices";
import PalantirVerticals from "@/components/sections/PalantirVerticals";
import PalantirCTA from "@/components/sections/PalantirCTA";
import SectionFAQ from "@/components/sections/SectionFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://cazoospace.com",
  },
};

// LocalBusiness JSON-LD for local SEO (Google Knowledge Panel, Maps)
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cazoo Space",
  description:
    "Enterprise execution partner bridging technology, real estate, and on-the-ground marketing activation.",
  url: "https://cazoospace.com",
  logo: "https://cazoospace.com/logo-1.png",
  email: "hello@cazoospace.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "Country", name: "Canada" },
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.linkedin.com/company/cazoospace",
    "https://www.instagram.com/cazoospace",
    "https://twitter.com/cazoospace",
  ],
};

export default function HomePage() {
  return (
    <>
      {/* LocalBusiness JSON-LD for local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <NavBar />
      <main id="main-content">
        <PalantirHero />

        {/* Below-fold sections use content-visibility for speed */}
        <div className="section-lazy">
          <SectionChemistry />
        </div>

        <div className="section-lazy">
          <PalantirServices />
        </div>


        <div className="section-lazy">
          <PalantirVerticals />
        </div>


        <div className="section-lazy">
          <PalantirCTA />
        </div>
        <div className="section-lazy">
          <SectionFAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
