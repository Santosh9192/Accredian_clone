"use client";

import { whoShouldJoinData } from "@/data/content";

export default function WhoShouldJoinSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">Who Should Join?</h2>
          <p className="text-gray-500 text-base">Strategic Skill Enhancement</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoShouldJoinData.map((item) => (
            <div key={item.title} className="text-center bg-gradient-to-b from-gray-50 to-white rounded-xl border border-gray-200 p-6 sm:p-8 hover:shadow-lg hover:border-blue-100 transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#11101d] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
