import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PalantirServices from "@/components/sections/PalantirServices";
import PalantirProcess from "@/components/sections/PalantirProcess";
import PalantirCTA from "@/components/sections/PalantirCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Cazoo Space",
  description: "Enterprise ground-game execution, B2B sales, event marketing, and digital branding.",
  alternates: { canonical: "https://cazoospace.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-24 md:pt-32">
        {/* We reuse the homepage components to maintain absolute consistency */}
        <PalantirServices />
        <PalantirProcess />
        <PalantirCTA />
      </main>
      <Footer />
    </>
  );
}
