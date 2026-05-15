import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PalantirHero from "@/components/sections/PalantirHero";
import PalantirStats from "@/components/sections/PalantirStats";
import SectionChemistry from "@/components/sections/SectionChemistry";
import PalantirAbout from "@/components/sections/PalantirAbout";
import PalantirServices from "@/components/sections/PalantirServices";
import SectionBookBriefing from "@/components/sections/SectionBookBriefing";
import PalantirCallout from "@/components/sections/PalantirCallout";
import SectionDeliverables from "@/components/sections/SectionDeliverables";
import PalantirVerticals from "@/components/sections/PalantirVerticals";
import PalantirCaseStudies from "@/components/sections/PalantirCaseStudies";
import PalantirProcess from "@/components/sections/PalantirProcess";
import PalantirCTA from "@/components/sections/PalantirCTA";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <PalantirHero />
        <PalantirStats />
        <SectionChemistry />
        <PalantirAbout />
        <PalantirServices />
        <SectionBookBriefing />
        <SectionDeliverables />
        <PalantirVerticals />
        <PalantirCaseStudies />
        <PalantirProcess />
        <PalantirCallout />
        <PalantirCTA />
      </main>
      <Footer />
    </>
  );
}
