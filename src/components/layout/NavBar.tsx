"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
              className={`object-contain h-10 md:h-12 w-auto transition-all duration-300 ${
                !scrolled && !isOpen ? "brightness-0 invert" : ""
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-body text-[14px] font-medium transition-colors relative py-1 ${
                    scrolled
                      ? "text-black/60 hover:text-black"
                      : "text-white/80 hover:text-white"
                  } ${isActive ? (scrolled ? "!text-black" : "!text-white") : ""}`}
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
                scrolled || isOpen
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
                scrolled || isOpen
                  ? "bg-[#C8102E] text-white"
                  : "border-2 border-white text-white hover:bg-white hover:text-[#C8102E]"
              }`}
            >
              Get Started
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled || isOpen ? "text-black" : "text-white"}`}
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
      <div className={`fixed inset-0 bg-white z-40 transition-all duration-400 ease-in-out md:hidden flex flex-col justify-center ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}>
        <div className="container-site flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display text-[42px] text-[#1A1A1A] py-3 border-b border-black/5 hover:text-[#C8102E] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
