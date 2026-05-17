"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function SectionFeaturedSpaces() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const spaces = [
    {
      title: "Sharing a Room",
      price: "$1,700 CAD",
      location: "Calgary, AB",
      beds: 2,
      baths: 1,
      type: "SHARED",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    },
    {
      title: "Looking for a Roommate",
      price: "$1,700 CAD",
      location: "Calgary, AB",
      beds: 2,
      baths: 1,
      type: "ROOMMATE",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    },
    {
      title: "Paying Guest",
      price: "$1,700 CAD",
      location: "Calgary, AB",
      beds: 2,
      baths: 1,
      type: "PG",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    },
    {
      title: "Looking for a Roommate",
      price: "$1,700 CAD",
      location: "Calgary, AB",
      beds: 2,
      baths: 1,
      type: "ROOMMATE",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    },
  ];

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    }
  };

  return (
    <section id="spaces" className="pt-12 md:pt-20 pb-6 md:pb-10 bg-white">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
        >
          <div>
            <p className="label-mono-red mb-2">FEATURED SPACES</p>
            <h2 className="section-heading" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Find Your <span className="text-[#C8102E]">Perfect Space</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:border-[#C8102E] hover:text-[#C8102E] transition-colors"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:border-[#C8102E] hover:text-[#C8102E] transition-colors"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-4">
          {spaces.map((space, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className="card group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[200px] md:h-[220px] overflow-hidden bg-white">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 font-mono text-[10px] font-bold bg-white/90 backdrop-blur-sm text-[#C8102E] px-2.5 py-1 rounded-md">
                  {space.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-body font-semibold text-[15px] text-[#1A1A1A] mb-2 leading-tight">
                  {space.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-body font-bold text-[#C8102E] text-[15px]">{space.price}</span>
                  <span className="font-body text-[12px] text-black/40">{space.location}</span>
                </div>
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-black/5">
                  <span className="flex items-center gap-1.5 text-[12px] text-black/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" /></svg>
                    {space.beds} Beds
                  </span>
                  <span className="flex items-center gap-1.5 text-[12px] text-black/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" /><line x1="2" x2="22" y1="12" y2="12" /></svg>
                    {space.baths} Bath
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12 flex justify-center"
        >
          <button className="btn-secondary">Load More</button>
        </motion.div>
      </div>
    </section>
  );
}
