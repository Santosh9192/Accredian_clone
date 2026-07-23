"use client";

import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-white">
      {/* Anchor for #cat nav link */}
      <div id="cat" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">
            The <span className="text-[#1a73e8]">CAT Framework</span>
          </h2>
          <p className="text-gray-500 text-base">
            Our Proven Approach to <span className="text-[#1a73e8]">Learning Excellence</span>
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-5xl mx-auto">
          <Image
            src="/The_CAT_framework.svg"
            alt="The CAT Framework - Our Proven Approach to Learning Excellence"
            width={1933}
            height={610}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
