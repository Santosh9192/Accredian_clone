"use client";

import { courseSegmentationData } from "@/data/content";

export default function CourseSegmentationSection() {
  return (
    <section className="relative py-16 sm:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11101d] mb-3">Tailored Course Segmentation</h2>
          <p className="text-gray-500 text-base">
            Explore Custom-fit Courses Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseSegmentationData.map((segment) => (
            <div key={segment.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-100 transition-all group">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${segment.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-white font-bold text-sm">{segment.id}</span>
              </div>
              <h3 className="text-lg font-bold text-[#11101d] mb-3">{segment.title}</h3>
              <ul className="space-y-1.5">
                {segment.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
