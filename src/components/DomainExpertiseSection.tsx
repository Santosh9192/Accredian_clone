"use client";

import { domainExpertiseData } from "@/data/content";
import { useRef, useEffect, useState } from "react";

function DomainCard({ title, description, skills, index }: {
  title: string;
  description: string;
  skills: string[];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-lg font-bold text-[#11101d] mb-2 group-hover:text-[#1a73e8] transition-colors">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function DomainExpertiseSection() {
  return (
    <section id="clients" className="relative py-16 sm:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <span className="text-sm font-medium text-[#1a73e8]">Domain Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-4">
            Our Domain{" "}
            <span className="text-[#1a73e8]">Expertise</span>
          </h2>
          <p className="text-gray-500 text-base">
            Specialized Programs Designed to Fuel Innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {domainExpertiseData.map((domain, index) => (
            <DomainCard key={domain.id} {...domain} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
