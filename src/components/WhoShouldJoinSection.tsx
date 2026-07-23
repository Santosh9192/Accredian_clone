"use client";

import { whoShouldJoinData } from "@/data/content";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function JoinCard({ icon, title, description, index }: {
  icon: string;
  title: string;
  description: string;
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative group bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />

      {/* Icon */}
      <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow shadow-blue-500/10">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed">
        {description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent transition-all duration-500 rounded-full" />
    </div>
  );
}

export default function WhoShouldJoinSection() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Blue gradient background panel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8] via-[#1a5fc7] to-[#0d47a1]" />

      {/* Decorative circles */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-32 w-56 h-56 bg-cyan-300/20 rounded-full blur-3xl" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Box Panel */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12 pr-8 sm:pr-10 lg:pr-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Side: Heading + Image stacked */}
            <div className="w-full lg:w-[460px] xl:w-[540px] flex-shrink-0 flex flex-col gap-6">
              {/* Heading - left aligned */}
              <div className="text-left pl-8 sm:pl-10 lg:pl-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
                  Who Should{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                    Join?
                  </span>
                </h2>
                <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                  Strategic Skill Enhancement
                </p>
              </div>

              {/* Image - left aligned */}
              <div className="w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[520px] animate-fade-in">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/imagehuman.png"
                    alt="Professionals from diverse backgrounds"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 50vw, 380px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Cards 2x2 Grid with large font */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {whoShouldJoinData.map((item, index) => (
                <JoinCard key={item.title} {...item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
