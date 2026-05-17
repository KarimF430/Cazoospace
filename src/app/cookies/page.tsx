import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import PalantirCTA from "@/components/sections/PalantirCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Cazoo Space",
  description: "Learn how Cazoo Space uses cookies to improve your browsing experience.",
  alternates: { canonical: "https://cazoospace.com/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
          <div className="container-site max-w-3xl mx-auto">
            <h1 className="font-display text-[#1A1A1A] leading-tight mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Cookie <span className="text-[#C8102E]">Policy</span>
            </h1>
            
            <div className="prose prose-lg max-w-none font-body text-[#555] leading-relaxed prose-headings:font-display prose-headings:text-[#1A1A1A] prose-a:text-[#C8102E]">
              <p className="text-sm text-gray-400 mb-8">Last Updated: {new Date().toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply analytical information to website owners.
              </p>

              <h2>2. How We Use Cookies</h2>
              <p>
                Cazoo Space uses cookies to understand how you interact with our website, to remember your preferences, and to ensure our marketing campaigns are targeted and effective. As a Canadian business, we ensure our cookie usage complies with the transparency requirements of Canadian privacy frameworks.
              </p>

              <h2>3. Types of Cookies We Use</h2>
              <ul>
                <li><strong>Essential Cookies:</strong> These are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas or fill out inquiry forms securely.</li>
                <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website. This helps us improve the way our website works.</li>
                <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website, enabling us to personalize content and remember your preferences.</li>
                <li><strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed. We use this information to make our website and marketing more relevant to your interests.</li>
              </ul>

              <h2>4. Managing Your Cookies</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. Please note that disabling essential cookies may impact the functionality of our website.
              </p>

              <h2>5. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay aware of any changes.
              </p>

              <h2>6. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
                <br />
                <a href="mailto:privacy@cazoospace.com">privacy@cazoospace.com</a>
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
