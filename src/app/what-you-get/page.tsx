import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import SectionDeliverables from "@/components/sections/SectionDeliverables";
import PalantirCTA from "@/components/sections/PalantirCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What You Get | Cazoo Space",
  description: "Tangible deliverables. Every engagement produces measurable outputs.",
  alternates: { canonical: "https://cazoospace.com/what-you-get" },
};

export default function WhatYouGetPage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="pt-24 md:pt-32 pb-16">
        <SectionDeliverables />
        <PalantirCTA />
      </main>
      <Footer />
    </>
  );
}
