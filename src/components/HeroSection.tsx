"use client";

import { heroContent } from "@/data/content";
import LeadCaptureModal from "./LeadCaptureModal";
import { useState } from "react";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 sm:pt-24 sm:pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/50" />
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-gradient-to-l from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading - "Next-Gen Expertise For Your Enterprise" */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#11101d] leading-[1.0] tracking-tight mb-6 animate-fade-in-up">
              {heroContent.headingParts.map((part, index) => {
                const isHighlighted = heroContent.headingHighlightIndices.includes(index);
                return isHighlighted ? (
                  <span key={index} className="text-[#1a73e8]">{part} </span>
                ) : (
                  <span key={index}>{part} </span>
                );
              })}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
              {heroContent.subheading}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in-up">
              {heroContent.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg text-sm text-[#1a73e8] font-medium">
                  <span className="w-1.5 h-1.5 bg-[#1a73e8] rounded-full" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Single CTA - Exact: bg=#1a73e8, color=white, borderRadius=8px, padding=12px 24px, fontSize=16px, fontWeight=600 */}
            <div className="animate-fade-in-up">
              <button
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-2 bg-[#1a73e8] text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-[#1557b0] transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                {heroContent.primaryCta}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
