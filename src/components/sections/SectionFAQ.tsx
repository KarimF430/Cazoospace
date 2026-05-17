"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What exactly does Cazoo Space do?",
    answer: "We are the human execution layer for your technology. We combine modern branding, experiential activations, and growth-focused marketing solutions. Whether you are rolling out new hardware across a massive portfolio or launching an app that needs real user adoption, we help increase visibility and drive long-term growth."
  },
  {
    question: "How do your field teams work with our technology?",
    answer: "We assign specialized field teams that are specifically trained on your exact hardware and software. We align our experts precisely with your requirements to ensure seamless integration and accurate on-site representation."
  },
  {
    question: "What is included in a Brand Activation campaign?",
    answer: "Our brand activations are high-impact experiential campaigns and pop-ups. We deploy on-site, face-to-face campaigns designed to transform passive observers into loyal brand advocates and drive real adoption."
  },
  {
    question: "How do you support B2B Enterprise Sales?",
    answer: "We provide the enterprise ground-game. This includes the physical presence, reference installations, and relationship events needed to close complex deals and drive enterprise pipeline through targeted outreach and positioning."
  },
  {
    question: "Can you handle large-scale rollouts across multiple properties?",
    answer: "Yes. We specialize in large-scale rollouts by deploying field teams across multiple properties simultaneously. We replicate winning playbooks across your entire portfolio to ensure consistent execution across all locations."
  },
  {
    question: "How do you measure the success of an activation?",
    answer: "We focus heavily on measurable growth. We track hard data like registrations, app downloads, and daily active users—reporting directly against your specific KPIs to ensure accountability."
  },
  {
    question: "Do you work with highly regulated industries like FinTech or Financial Services?",
    answer: "Absolutely. We elevate traditional financial institutions with modern branding while strictly ensuring compliance. For FinTech firms, we deploy cutting-edge strategies to build trust and scale user acquisition globally."
  },
  {
    question: "What does your Growth Consulting service entail?",
    answer: "Our growth consulting involves a comprehensive audit of your current brand presence. We then engineer scalable, data-driven growth models tailored specifically to your industry, translating complex technical specs into compelling narratives."
  }
];

export default function SectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F9F9F9]">
      <div className="container-site max-w-4xl mx-auto px-4 md:px-0">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-[#1A1A1A] leading-[1.1] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Frequently Asked <span className="text-[#C8102E]">Questions</span>
          </h2>
          <p className="font-body text-[#555555] text-[15px] md:text-[18px]">
            Everything you need to know about our experiential marketing and field operations.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`border transition-colors duration-300 ${isOpen ? 'border-[#C8102E]/20 bg-white shadow-sm' : 'border-black/5 bg-white hover:border-black/10'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                >
                  <span className={`font-body text-[16px] md:text-[18px] font-medium transition-colors duration-300 ${isOpen ? 'text-[#C8102E]' : 'text-[#1A1A1A] group-hover:text-[#C8102E]'}`}>
                    {faq.question}
                  </span>
                  <div className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#1A1A1A]/5 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#C8102E]/10 text-[#C8102E]' : 'text-[#1A1A1A]'}`}>
                    <ChevronDown size={18} strokeWidth={2} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 md:p-6 pt-0 font-body text-[14px] md:text-[15px] text-[#555555] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
