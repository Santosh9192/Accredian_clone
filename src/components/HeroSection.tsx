"use client";

import { heroContent } from "@/data/content";
import LeadCaptureModal from "./LeadCaptureModal";
import { useState } from "react";
import Image from "next/image";

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
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left - Text Panel */}
            <div className="flex-1 max-w-xl">
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#11101d] leading-[1.1] tracking-tight mb-6 animate-fade-in-up">
                <span className="block">
                  <span>Next-Gen </span>
                  <span className="text-[#1a73e8]">Expertise</span>
                </span>
                <span className="block">
                  <span>For Your </span>
                  <span className="text-[#1a73e8]">Enterprise</span>
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up">
                {heroContent.subheading}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up">
                {heroContent.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg text-sm text-[#1a73e8] font-medium">
                    <span className="w-1.5 h-1.5 bg-[#1a73e8] rounded-full" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
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

            {/* Right - Image Panel */}
            <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
              <div className="relative w-full max-w-lg lg:max-w-xl aspect-[4/3]">
                <Image
                  src="/corporate-big-hero-v4.png"
                  alt="Corporate training and team collaboration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
