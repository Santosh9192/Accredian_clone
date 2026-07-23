"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export default function HowItWorksSection() {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeadingVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setImageVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 sm:py-20 bg-white">
      {/* Anchor for #cat nav link */}
      <div id="cat" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">
            The <span className="text-[#1a73e8]">CAT Framework</span>
          </h2>
          <p className="text-gray-500 text-base">
            Our Proven Approach to <span className="text-[#1a73e8]">Learning Excellence</span>
          </p>
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className={`relative w-full max-w-5xl mx-auto transition-all duration-700 ${
            imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Image
            src="/The_CAT_framework.png"
            alt="The CAT Framework - Our Proven Approach to Learning Excellence"
            width={1933}
            height={610}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
