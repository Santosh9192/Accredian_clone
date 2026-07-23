"use client";

import { statsData } from "@/data/content";

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">Our Track Record</h2>
          <p className="text-gray-500 text-base">The Numbers Behind Our Success</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {statsData.map((stat, index) => (
            <div key={stat.label} className="text-center group relative p-6 sm:p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a73e8] mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
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
