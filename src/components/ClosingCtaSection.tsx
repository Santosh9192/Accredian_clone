"use client";

import { closingCtaContent } from "@/data/content";
import LeadCaptureModal from "./LeadCaptureModal";
import { useState, useRef, useEffect } from "react";

export default function ClosingCtaSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={ref}
        className={`relative py-10 sm:py-14 overflow-hidden bg-dark-gradient transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            {/* Left - Text Content */}
            <div className="flex-1 max-w-lg text-center lg:text-left">
              <p className="text-blue-300 font-medium text-xs sm:text-sm mb-2 tracking-wider uppercase">
                {closingCtaContent.subtext}
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                {closingCtaContent.heading}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-brand-gradient">
                {closingCtaContent.highlight}
              </p>

              {/* Bottom indicators */}
              <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-gray-500 text-[11px]">
                <span>Contact Us</span>
                <span className="w-0.5 h-0.5 bg-gray-600 rounded-full" />
                <span>Enquire Now</span>
                <span className="w-0.5 h-0.5 bg-gray-600 rounded-full" />
                <span>Speak with our Advisor</span>
              </div>
            </div>

            {/* Right - CTAs */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              {/* Contact Us button */}
              <button
                onClick={() => setModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#3b82f6] px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {closingCtaContent.secondaryCta}
              </button>

              {/* Enquire Now button */}
              <button
                onClick={() => setModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1a73e8] text-white px-6 py-2.5 rounded-lg text-base hover:bg-[#1557b0] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                {closingCtaContent.primaryCta}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Speak with our Advisor link */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setModalOpen(true); }}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Speak with our Advisor &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
