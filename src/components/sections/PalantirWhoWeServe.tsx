"use client";

import { motion } from "framer-motion";

export default function PalantirWhoWeServe() {
  const clients = [
    { type: "PROPERTY MANAGEMENT", desc: "National and regional operators managing 100+ unit portfolios." },
    { type: "REAL ESTATE DEVELOPERS", desc: "Firms launching new multifamily and mixed-use developments." },
    { type: "PROPTECH BRANDS", desc: "Enterprise technology providers needing ground-level adoption." },
    { type: "EVENT & BRAND MANAGERS", desc: "Directors requiring serious execution capabilities for corporate events." },
  ];

  return (
    <section id="clients" className="py-16 bg-white text-black">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="label-mono-red mb-4">// 003 — CLIENTS</p>
          <h2 className="font-display text-black text-[48px] md:text-[64px] leading-none">
            WE WORK WITH SERIOUS PORTFOLIOS
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-black">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="group white-row px-4 py-8 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 cursor-default"
            >
              {/* Type */}
              <span className="font-mono text-[12px] uppercase w-full md:w-1/3 text-black group-hover:text-white transition-colors duration-200">
                {client.type}
              </span>
              
              {/* Desc */}
              <p className="font-body text-[15px] text-black/65 group-hover:text-white/80 transition-colors duration-200 w-full md:w-1/2">
                {client.desc}
              </p>

              {/* Arrow */}
              <span className="font-mono text-cazoo-red hidden md:block">
                →
              </span>
              <span className="font-mono text-cazoo-red md:hidden mt-2">
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
