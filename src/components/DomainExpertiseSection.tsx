"use client";

import { domainExpertiseData } from "@/data/content";
import { useRef, useEffect, useState } from "react";

const domainColors = [
  { accent: "from-blue-500 to-cyan-400" },
  { accent: "from-purple-500 to-pink-400" },
  { accent: "from-emerald-500 to-teal-400" },
  { accent: "from-orange-500 to-amber-400" },
  { accent: "from-rose-500 to-red-400" },
  { accent: "from-indigo-500 to-violet-400" },
  { accent: "from-cyan-500 to-sky-400" },
];

function DomainCard({ id, title, index }: {
  id: number;
  title: string;
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const color = domainColors[index % domainColors.length];
  const isLast = index === domainExpertiseData.length - 1;

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
      className={`group relative bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg hover:border-blue-100 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${
        isLast ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Left accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${color.accent} rounded-l-xl`} />

      <div className="flex items-center gap-3">
        {/* Number badge */}
        <div className={`flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${color.accent} text-white text-xs font-bold`}>
          {id}
        </div>

        {/* Title only */}
        <h3 className="text-sm font-bold text-[#11101d] transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function DomainExpertiseSection() {
  return (
    <section className="relative py-14 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
<h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">
            Our Domain{" "}
            <span className="text-[#1a73e8]">Expertise</span>
          </h2>
          <p className="text-gray-500 text-sm">
            <span className="text-[#1a73e8]">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {domainExpertiseData.map((domain, index) => (
            <DomainCard key={domain.id} id={domain.id} title={domain.title} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
