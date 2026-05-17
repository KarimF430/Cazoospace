import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PalantirCTA from "@/components/sections/PalantirCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Cazoo Space",
  description: "Privacy Policy detailing how Cazoo Space handles data in compliance with PIPEDA and Canadian privacy laws.",
  alternates: { canonical: "https://cazoospace.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
          <div className="container-site max-w-3xl mx-auto">
            <h1 className="font-display text-[#1A1A1A] leading-tight mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Privacy <span className="text-[#C8102E]">Policy</span>
            </h1>
            
            <div className="prose prose-lg max-w-none font-body text-[#555] leading-relaxed prose-headings:font-display prose-headings:text-[#1A1A1A] prose-a:text-[#C8102E]">
              <p className="text-sm text-gray-400 mb-8">Last Updated: {new Date().toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

              <h2>1. Introduction</h2>
              <p>
                Cazoo Space ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information in compliance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable Canadian privacy legislation.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We may collect personal information that you provide directly to us, such as your name, email address, phone number, and company details when you submit forms, subscribe to our newsletters, or engage our services. We also collect data automatically, such as IP addresses, browser types, and usage metrics via cookies and similar technologies.
              </p>

              <h2>3. How We Use Your Information</h2>
              <p>
                We use your personal information to:
              </p>
              <ul>
                <li>Provide, operate, and maintain our services;</li>
                <li>Communicate with you regarding service updates, marketing, and promotional offers (in compliance with Canada's Anti-Spam Legislation - CASL);</li>
                <li>Analyze website usage to improve our digital and physical marketing strategies;</li>
                <li>Process transactions and manage client relationships.</li>
              </ul>

              <h2>4. PIPEDA Compliance and Data Subject Rights</h2>
              <p>
                In accordance with PIPEDA, you have the right to access the personal information we hold about you and to request corrections if the information is inaccurate or incomplete. You may also withdraw your consent for the collection, use, or disclosure of your personal information at any time, subject to legal or contractual restrictions.
              </p>

              <h2>5. Data Sharing and Transfers</h2>
              <p>
                We do not sell your personal information to third parties. We may share your data with trusted third-party service providers (such as hosting partners and CRM platforms) who assist us in operating our business, provided they agree to keep this information confidential and secure in accordance with Canadian standards. 
              </p>

              <h2>6. CASL Compliance</h2>
              <p>
                We are fully committed to complying with Canada's Anti-Spam Legislation (CASL). We will only send you commercial electronic messages (CEMs) if we have your express or implied consent. You can unsubscribe from our communications at any time using the link provided in our emails.
              </p>

              <h2>7. Data Security</h2>
              <p>
                We implement robust physical, technical, and administrative security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>8. Contact Our Privacy Officer</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, or if you wish to exercise your rights under PIPEDA, please contact our Privacy Officer at:
                <br />
                <a href="mailto:privacy@cazoospace.com">privacy@cazoospace.com</a>
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
