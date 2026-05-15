"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionCities() {
  const cities = [
    { name: "Calgary", province: "Alberta", image: "/calgary.png", properties: "120+" },
    { name: "Vancouver", province: "British Columbia", image: "/vancouver.png", properties: "85+" },
    { name: "Toronto", province: "Ontario", image: "/toronto.png", properties: "200+" },
  ];

  return (
    <section id="cities" className="section-padding bg-white">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <p className="label-mono-red mb-2">WHERE WE OPERATE</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Cazoo <span className="text-[#C8102E]">Cities</span>
          </h2>
        </motion.div>

        {/* City Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative h-[280px] md:h-[380px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <Image
                src={city.image}
                alt={`${city.name}, ${city.province}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end z-10">
                <span className="font-mono text-[10px] text-white/60 tracking-wider mb-1">{city.properties} PROPERTIES</span>
                <h3 className="font-display text-white leading-none mb-1" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                  {city.name.toUpperCase()}
                </h3>
                <span className="font-body text-[13px] text-white/70">{city.province}, Canada</span>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-4 right-4 w-9 h-9 bg-white/0 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-[#C8102E] font-body text-[14px] font-bold">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
