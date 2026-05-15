"use client";

import { useState, useEffect, useRef } from "react";

const categories = [
  { 
    id: "spaces", 
    label: "Spaces", 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    desc: "Room sharing & PGs"
  },
  { 
    id: "marketplace", 
    label: "Marketplace", 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
    desc: "Buy & sell items" 
  },
  { 
    id: "agency", 
    label: "Agency", 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    desc: "B2B & marketing services"
  },
  { 
    id: "cities", 
    label: "Cities", 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    desc: "Where we operate"
  },
  { 
    id: "briefing", 
    label: "Get Started", 
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.61.68 2.38a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.77.32 1.57.55 2.38.68a2 2 0 0 1 1.72 2.03z" />
      </svg>
    ),
    desc: "Book a briefing"
  },
];

export default function ServiceCategoryNav() {
  const [active, setActive] = useState("spaces");
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Intersection observer for sticky state
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Track which section is in view
  useEffect(() => {
    const sectionIds = categories.map((c) => c.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-120px 0px -40% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Sentinel element to detect when nav becomes sticky */}
      <div ref={sentinelRef} className="h-0" />
      
      <nav
        ref={navRef}
        className={`sticky top-16 md:top-20 z-30 transition-all duration-300 ${
          isSticky
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-black/5"
            : "bg-white border-b border-black/5"
        }`}
      >
        <div className="container-site">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2 md:py-3 -mx-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleClick(cat.id)}
                className={`group flex flex-col items-center gap-1 px-4 md:px-6 py-2 md:py-3 rounded-xl min-w-[80px] md:min-w-[100px] transition-all duration-200 flex-shrink-0 ${
                  active === cat.id
                    ? "bg-[#FFF0F2] text-[#C8102E]"
                    : "text-[#666] hover:bg-[#F5F5F5] hover:text-[#333]"
                }`}
              >
                <span className={`transition-colors duration-200 ${
                  active === cat.id ? "text-[#C8102E]" : "text-[#999] group-hover:text-[#666]"
                }`}>
                  {cat.icon}
                </span>
                <span className="font-body text-[11px] md:text-[12px] font-semibold whitespace-nowrap">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
