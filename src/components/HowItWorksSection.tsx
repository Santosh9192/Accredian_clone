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
      className={`relative group transition-all duration-600 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {index < catFrameworkData.length - 1 && (
        <div className="hidden lg:block absolute top-12 left-[calc(50%+3rem)] right-[calc(-50%+3rem)] h-0.5 bg-gradient-to-r from-blue-200 to-cyan-200" />
      )}

      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-center group-hover:shadow-lg group-hover:border-blue-200 transition-all">
          <span className="text-3xl font-bold text-[#007aff]">{step}</span>
        </div>
        <h3 className="text-xl font-bold text-[#11101d] mb-3">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{description}</p>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="howItWorks" className="relative py-16 sm:py-20 bg-white">
      {/* Anchor for #cat nav link */}
      <div id="cat" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <span className="text-sm font-medium text-[#007aff]">Our Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">
            The CAT Framework
          </h2>
          <p className="text-gray-500 text-base">
            Our Proven Approach to Learning Excellence
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
