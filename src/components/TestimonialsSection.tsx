"use client";

import { testimonialsData } from "@/data/content";
import { useState } from "react";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <span className="text-sm font-medium text-[#1a73e8]">Testimonials from Our Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-4">
            What Our{" "}
            <span className="text-[#1a73e8]">Clients Are Saying</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative bg-white border rounded-xl p-6 sm:p-8 transition-all duration-500 ${
                index === activeIndex
                  ? "border-blue-200 shadow-xl shadow-blue-100/50 scale-[1.02]"
                  : "border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300"
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="text-4xl leading-none text-blue-200 mb-4">&ldquo;</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
              {index === activeIndex && (
                <div className="absolute -bottom-0.5 left-6 right-6 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#1a73e8] w-7" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
