"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Determine if the navbar should use white text/icons.
  // We use dark text if scrolled, if mobile menu is open, or if we are on a page with a light background at the top.
  const lightPages = ['/about', '/partner', '/terms', '/privacy', '/cookies'];
  const isLightPage = lightPages.includes(pathname) || pathname.startsWith('/services');
  const useWhiteText = !scrolled && !isOpen && !isLightPage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-site h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50 relative flex items-center" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo-1.png"
              alt="Cazoo Space"
              width={200}
              height={48}
              className={`object-contain h-12 md:h-[58px] w-auto transition-all duration-300 ${
                useWhiteText ? "brightness-0 invert" : ""
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-body text-[14px] font-medium transition-colors relative py-1 ${
                    !useWhiteText
                      ? "text-black/60 hover:text-black"
                      : "text-white/80 hover:text-white"
                  } ${isActive ? (!useWhiteText ? "!text-black" : "!text-white") : ""}`}
                >
                  {link.label}
                  <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#C8102E] rounded-full origin-left transition-transform duration-200 ${
                    isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                  }`} />
                </Link>
              );
            })}
            <Link
              href="/partner"
              className={`font-body text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 ${
                !useWhiteText
                  ? "bg-[#C8102E] text-white hover:bg-[#9E0C22]"
                  : "border-2 border-white text-white hover:bg-white hover:text-[#C8102E]"
              }`}
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3 z-50 relative">
            <Link
              href="/partner"
              className={`font-body text-[12px] font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
                !useWhiteText
                  ? "bg-[#C8102E] text-white"
                  : "border-2 border-white text-white hover:bg-white hover:text-[#C8102E]"
              }`}
            >
              Get Started
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${!useWhiteText ? "text-black" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-all duration-400 ease-in-out md:hidden flex flex-col ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        <div className="container-site flex flex-col h-full pt-28 pb-10 justify-between overflow-y-auto">
          
          {/* Top Links */}
          <nav className="flex flex-col gap-2 mt-4">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Partner Program", href: "/partner" },
            ].map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between py-5 border-b border-black/5"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-display text-[2.5rem] leading-none text-[#1A1A1A] group-hover:text-[#C8102E] transition-colors">
                  {link.label}
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C8102E] opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>

          {/* Bottom Info Area */}
          <div className="flex flex-col gap-8 mt-12 bg-[#F9F9F9] -mx-4 px-4 py-8 border-t border-black/5">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-[#C8102E] tracking-widest font-bold uppercase">Get In Touch</span>
              <a href="mailto:hello@cazoospace.com" className="font-body text-[18px] font-medium text-[#1A1A1A] hover:text-[#C8102E] transition-colors">
                hello@cazoospace.com
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <a key={social} href="#" className="font-body text-[13px] font-medium text-[#555] hover:text-[#C8102E] transition-colors">
                  {social}
                </a>
              ))}
            </div>
            
            <div className="font-body text-[11px] text-[#1A1A1A]/40 mt-4">
              © {new Date().getFullYear()} CAZOO SPACE. All rights reserved.
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
