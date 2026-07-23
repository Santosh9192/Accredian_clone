"use client";

import { faqData } from "@/data/content";
import { useState, useRef, useEffect } from "react";

function AccordionItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-100 transition-colors">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50/50 transition-colors"
      >
        <span className="text-sm font-medium text-gray-800 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLeftVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRightVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faqs" className="relative py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left Side: Heading + Category Buttons */}
          <div
            ref={leftRef}
            className={`w-full lg:w-72 xl:w-80 flex-shrink-0 transition-all duration-700 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">
              Frequently Asked{" "}
              <span className="text-[#1a73e8]">Questions</span>
            </h2>
            <p className="text-gray-500 text-base mb-8">
              Everything you need to know about Accredian Enterprise.
            </p>

            {/* Category buttons - vertical */}
            <div className="flex flex-col gap-2">
              {faqData.map((cat, index) => (
                <button
                  key={cat.category}
                  onClick={() => { setActiveCategory(index); setOpenItems([]); }}
                  className={`w-full text-left px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeCategory === index
                      ? "bg-[#1a73e8] text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: FAQ Items */}
          <div
            ref={rightRef}
            className={`flex-1 space-y-3 transition-all duration-700 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {faqData[activeCategory].items.map((item, idx) => (
              <AccordionItem
                key={idx}
                question={item.question}
                answer={item.answer}
                isOpen={openItems.includes(idx)}
                onClick={() => toggleItem(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
