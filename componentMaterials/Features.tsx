"use client";

import { Layers, Zap, BadgeCheck } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Layers size={28} />,
      title: "Premium Materials",
      desc: "Sourced directly from certified manufacturers to ensure longevity and finish quality.",
    },
    {
      icon: <Zap size={28} />,
      title: "Fast Delivery",
      desc: "Same-day dispatch for most items within your area.",
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "Expert Support",
      desc: "Get free guidance to choose the right materials for your space.",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-20">
      
      <div className="max-w-7xl mx-auto">

        {/* HEADING (optional sexy touch) */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Quality, speed & trust — everything you need
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >

              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}