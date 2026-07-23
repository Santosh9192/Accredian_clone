"use client";

import { statsData } from "@/data/content";

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">Our <span className="text-[#1a73e8]">Track Record</span></h2>
          <p className="text-gray-500 text-base sm:text-lg">The Numbers Behind <span className="text-[#1a73e8]">Our Success</span></p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {statsData.map((stat, index) => (
            <div key={stat.label} className="text-center group relative p-8 sm:p-10 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1a73e8] mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-600 text-xs leading-relaxed max-w-xs mx-auto">
                {stat.label}
              </div>
              {index < statsData.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
