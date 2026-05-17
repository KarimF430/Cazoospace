import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PalantirCTA from "@/components/sections/PalantirCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Cazoo Space",
  description: "Terms and conditions for Cazoo Space experiential marketing services.",
  alternates: { canonical: "https://cazoospace.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
          <div className="container-site max-w-3xl mx-auto">
            <h1 className="font-display text-[#1A1A1A] leading-tight mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Terms & <span className="text-[#C8102E]">Conditions</span>
            </h1>
            
            <div className="prose prose-lg max-w-none font-body text-[#555] leading-relaxed prose-headings:font-display prose-headings:text-[#1A1A1A] prose-a:text-[#C8102E]">
              <p className="text-sm text-gray-400 mb-8">Last Updated: {new Date().toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

              <h2>1. Introduction</h2>
              <p>
                Welcome to Cazoo Space. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. Cazoo Space operates within Canada and these terms reflect Canadian operational standards.
              </p>

              <h2>2. Services Provided</h2>
              <p>
                Cazoo Space provides experiential marketing, brand activations, enterprise enablement, and field team deployment services ("Services"). The specific scope of Services will be defined in individual Statements of Work (SOWs) or Master Service Agreements (MSAs) executed between Cazoo Space and the client.
              </p>

              <h2>3. Canadian Jurisdiction and Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Ontario, Canada.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>
                All content, trademarks, logos, and service marks displayed on our site are the property of Cazoo Space or their respective owners. You are not permitted to use these marks without our prior written consent. All proprietary marketing playbooks and deployment strategies remain the intellectual property of Cazoo Space unless otherwise agreed upon in writing.
              </p>

              <h2>5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable Canadian law, Cazoo Space shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from (a) your use of or inability to use our services; or (b) any unauthorized access to or use of our servers.
              </p>

              <h2>6. Compliance with Canadian Law</h2>
              <p>
                Clients engaging our Services agree to comply with all applicable Canadian laws and regulations, including but not limited to the Competition Act, the Personal Information Protection and Electronic Documents Act (PIPEDA), and Canada's Anti-Spam Legislation (CASL) during any brand activation or marketing campaign.
              </p>

              <h2>7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms and Conditions on this page. Your continued use of the Services after such modifications constitutes your acknowledgment and agreement to the modified Terms.
              </p>

              <h2>8. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
                <br />
                <a href="mailto:legal@cazoospace.com">legal@cazoospace.com</a>
                <br />
                Toronto, Ontario, Canada
              </p>
            </div>
          </div>
        </section>
        <PalantirCTA />
      </main>
      <Footer />
    </>
  );
}
