"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className="flex flex-col divide-y divide-[#E6E3DE]"
      role="list"
      aria-label="Frequently asked questions"
    >
      {items.map((item, i) => (
        <div key={i} role="listitem">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between text-left py-5 gap-4"
            aria-expanded={openIndex === i}
            id={`faq-btn-${i}`}
            aria-controls={`faq-panel-${i}`}
          >
            <span className="font-body font-semibold text-[13px] text-[#0A0A0B] leading-snug">
              {item.question}
            </span>
            <span
              className={cn(
                "flex-shrink-0 w-6 h-6 rounded-full border border-[#E6E3DE] flex items-center justify-center transition-all duration-200",
                openIndex === i
                  ? "bg-[#C8102E] border-[#C8102E] rotate-45"
                  : "bg-white"
              )}
              aria-hidden="true"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M5 1v8M1 5h8"
                  stroke={openIndex === i ? "white" : "#94928E"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>

          <div
            id={`faq-panel-${i}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            style={{
              maxHeight: openIndex === i ? "400px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <p className="font-body text-[12px] text-[#94928E] leading-[1.7] pb-5 pr-10">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
