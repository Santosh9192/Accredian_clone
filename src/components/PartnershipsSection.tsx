"use client";

import { partnershipsData } from "@/data/content";

const clientNames = ["TechCorp", "InnovateInc", "DataPro", "CloudBase", "FinLeap", "AILabs"];

export default function PartnershipsSection() {
  return (
    <section id="clients" className="relative py-16 sm:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">{partnershipsData.title}</h2>
          <p className="text-gray-500 text-base">{partnershipsData.subtext}</p>
        </div>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientNames.map((name, index) => (
            <div
              key={name}
              className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-blue-50 group-hover:to-cyan-50 transition-all">
                  <span className="text-sm font-bold text-gray-400 group-hover:text-[#007aff] transition-colors">
                    {name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
