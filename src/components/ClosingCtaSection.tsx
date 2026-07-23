"use client";

import { closingCtaContent } from "@/data/content";
import LeadCaptureModal from "./LeadCaptureModal";
import { useState } from "react";

export default function ClosingCtaSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 sm:py-24 overflow-hidden bg-dark-gradient">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-blue-300 font-medium text-sm sm:text-base mb-4 tracking-wider uppercase">
              {closingCtaContent.subtext}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {closingCtaContent.heading}
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-brand-gradient mb-10">
              {closingCtaContent.highlight}
            </p>

            <button
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-2 bg-white text-[#11101d] px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
            >
              {closingCtaContent.primaryCta}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <div className="mt-12 flex items-center justify-center gap-6 text-gray-500 text-xs">
              <span>Contact Us</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span>Enquire Now</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span>Speak with our Advisor</span>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
