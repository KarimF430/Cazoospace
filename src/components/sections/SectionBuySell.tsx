"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SectionBuySell() {
  const items = [
    {
      title: "Modern Sofa",
      price: "$450",
      condition: "Like New",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    },
    {
      title: "Dining Table Set",
      price: "$320",
      condition: "Good",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
    },
    {
      title: "Office Desk",
      price: "$180",
      condition: "Excellent",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
    },
    {
      title: "Leather Armchair",
      price: "$210",
      condition: "Good",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    },
  ];

  return (
    <section id="marketplace" className="section-padding bg-[#FAFAFA]">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-10"
        >
          <div>
            <p className="label-mono-red mb-2">MARKETPLACE</p>
            <h2 className="section-heading" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              Buy & Sell <span className="text-[#C8102E]">Home Items</span>
            </h2>
            <p className="font-body text-[14px] text-black/50 mt-2 max-w-md">
              Furnish your space or sell items you no longer need. Secure payments, competitive prices.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/partner" className="btn-primary text-[13px] px-5 py-2.5">
              Sell an Item
            </Link>
            <Link href="/partner" className="btn-secondary text-[13px] px-5 py-2.5">
              Browse All
            </Link>
          </div>
        </motion.div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className="relative h-[200px] md:h-[220px] overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <span className="absolute top-3 right-3 font-body text-[11px] font-semibold bg-green-50 text-green-700 px-2.5 py-1 rounded-md">
                  {item.condition}
                </span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-body font-semibold text-[15px] text-[#1A1A1A]">{item.title}</h3>
                <span className="font-body font-bold text-[#C8102E] text-[16px]">{item.price}</span>
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
