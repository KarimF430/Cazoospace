import Link from "next/link";
import Image from "next/image";

const footerSections = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Careers", href: "/partner" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Contact Us", href: "/partner" },
    { label: "Feedback", href: "#" },
  ],
  Legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  {
    label: "Facebook",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
  },
  {
    label: "Instagram",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>,
  },
  {
    label: "LinkedIn",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>,
  },
  {
    label: "Twitter",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4.01c-1 .49-1.98.68-3 .99-1.12-1.27-2.74-1.25-4.04-.27-1.3 1-1.6 2.8-1.04 4.31-4.32-.23-8.15-2.29-10.7-5.83-.8 1.4-.42 3.12.83 4.16-.86-.02-1.68-.25-2.4-.66v.05c0 2.5 1.76 4.67 4.19 5.2-.44.12-.9.18-1.37.18-.34 0-.68-.03-1.02-.1.6 2.08 2.56 3.6 4.78 3.64-1.8 1.4-4.08 2.22-6.49 2.22-.44 0-.88-.03-1.31-.08 2.3 1.47 5.03 2.33 7.91 2.33 9.4 0 14.54-7.78 14.54-14.54v-.66c1.02-.74 1.9-1.66 2.58-2.72z" /></svg>,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 md:pt-20 pb-8">
      <div className="container-site">
        {/* Top: Logo + Socials */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-white/10">
          <Image
            src="/logo-1.png"
            alt="Cazoo Space"
            width={200}
            height={48}
            className="object-contain h-[53px] w-auto brightness-0 invert"
          />
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body font-semibold text-[14px] text-white mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="font-body text-[13px] text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[12px] text-white/30">
            © {new Date().getFullYear()} Cazoo Space Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="font-body text-[12px] text-white/30 hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/privacy" className="font-body text-[12px] text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/cookies" className="font-body text-[12px] text-white/30 hover:text-white/60 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
