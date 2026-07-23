"use client";

import { partnershipsData } from "@/data/content";
import Image from "next/image";

export default function PartnershipsSection() {
  return (
    <section id="clients" className="relative py-16 sm:py-20 bg-gray-50/50">
      {/* Hidden anchor for legacy #edge nav link */}
      <div id="edge" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">Our Proven <span className="text-[#1a73e8]">Partnerships</span></h2>
          <p className="text-gray-500 text-base">{partnershipsData.subtext}</p>
        </div>

        {/* Real Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-14">
          {partnershipsData.clients?.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="relative w-full h-12 sm:h-14 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 15vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Accredian Edge Card Panel */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 sm:p-10 lg:p-12 max-w-6xl mx-auto">
          <div className="text-center">
<h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">
              The <span className="text-[#1a73e8]">Accredian Edge</span>
            </h2>
            <p className="text-gray-500 text-base mb-8">
              Key Aspects of <span className="text-[#1a73e8]">Our Strategic Training</span>
            </p>

            <div className="relative w-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/The%20Accredian%20Edge.png"
                  alt="The Accredian Edge - Key Aspects of Our Strategic Training"
                  fill
                  className="object-contain rounded-xl"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
