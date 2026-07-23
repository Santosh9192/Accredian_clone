"use client";

import { catFrameworkData } from "@/data/content";
import { useRef, useEffect, useState } from "react";

function StepCard({ step, title, description, index }: {
  step: string;
  title: string;
  description: string;
  index: number;
}) {
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
    <div
      ref={ref}
      className={`relative group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Connector line */}
      {index < catFrameworkData.length - 1 && (
        <div className="hidden lg:block absolute top-12 left-[calc(50%+3rem)] right-[calc(-50%+3rem)] h-0.5 bg-gradient-to-r from-blue-200 to-cyan-200" />
      )}

      {/* Card container */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 text-center shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 h-full flex flex-col items-center group">
        {/* Step number */}
        <div className="w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br from-[#EEF5FF] to-blue-100 flex items-center justify-center group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
          <span className="text-2xl font-bold text-[#1a73e8]">{step}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#11101d] mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function DeliveryResultsSection() {
  return (
    <section id="howItWorks" className="relative py-16 sm:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">
            How We <span className="text-[#1a73e8]">Deliver Results</span> That Matter?
          </h2>
          <p className="text-gray-500 text-base">
            A Structured Three-Step Approach to <span className="text-[#1a73e8]">Skill Development</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {catFrameworkData.map((item, index) => (
            <StepCard key={item.step} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
