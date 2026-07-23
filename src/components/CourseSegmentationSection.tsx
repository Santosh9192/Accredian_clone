"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const segmentationCards = [
  {
    src: "/program_specific.png",
    alt: "Program Specific - Certificate, Executive, Post Graduate Certificate",
    title: "Program Specific",
    items: ["Certificate", "Executive", "Post Graduate Certificate"],
  },
  {
    src: "/Industry_specific.png",
    alt: "Industry Specific - IT, Healthcare, Retail, Finance, Education, Manufacturing",
    title: "Industry Specific",
    items: ["IT", "Healthcare", "Retail", "Finance", "Education", "Manufacturing"],
  },
  {
    src: "/Topic_specific.png",
    alt: "Topic Specific - Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    title: "Topic Specific",
    items: ["Machine Learning", "Design", "Analytics", "Cybersecurity", "Cloud"],
  },
  {
    src: "/level_specific.png",
    alt: "Level Specific - Senior Leadership, Mid-Career Professionals, Freshers",
    title: "Level Specific",
    items: ["Senior Leadership", "Mid-Career Professionals", "Freshers"],
  },
];

function SegmentationCard({ card, index }: { card: typeof segmentationCards[0]; index: number }) {
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
      className={`bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg hover:border-blue-100 transition-all duration-500 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative w-full aspect-[3/4] mb-4">
        <Image
          src={card.src}
          alt={card.alt}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
        />
      </div>
      <h3 className="text-lg font-bold text-[#1a73e8] mb-3">{card.title}</h3>
      <ul className="space-y-1.5">
        {card.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-1 h-1 bg-[#1a73e8] rounded-full flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CourseSegmentationSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">Tailored <span className="text-[#1a73e8]">Course Segmentation</span></h2>
          <p className="text-gray-500 text-base">
            Explore <span className="text-[#1a73e8]">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segmentationCards.map((card, index) => (
            <SegmentationCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
