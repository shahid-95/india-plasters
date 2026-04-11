"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-[#f5f4fb] via-white to-purple-50 py-12 overflow-hidden">
      
      <div className="max-w-8.5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div className="space-y-7 text-center md:text-left">
          
          {/* BADGE */}
          <p className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
            Bangalore’s Trusted False Ceiling Experts
          </p>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Transform Your Space with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Premium Ceiling Designs
            </span>
          </h1>

          {/* 🔥 SEXY DESCRIPTION */}
          <p className="text-gray-600 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed">
            Give your home or office a modern luxury look with our expert 
            <span className="font-semibold text-gray-800"> POP, Gypsum & PVC ceiling solutions</span>.  
            From elegant designs to flawless finishing — we deliver 
            <span className="text-purple-600 font-semibold"> durability, style, and perfection</span> in every project.
          </p>

          {/* EXTRA TRUST LINE */}
          <p className="text-sm text-gray-500">
            ✔ Fast Installation &nbsp; ✔ Affordable Pricing &nbsp; ✔ 100% Customer Satisfaction
          </p>
          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
           <a href="#services">
  <button className="bg-purple-700 text-white px-7 py-3 rounded-xl">
    View Our Services
  </button>
</a>

            <button
              onClick={() => router.push("/materials")}
              className="border px-7 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition"
            >
              🛒 Buy Materials
            </button>
          </div>

          {/* STATS */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            
            <div className="flex -space-x-2">
              <div className="w-9 h-9 bg-purple-300 rounded-full border-2 border-white" />
              <div className="w-9 h-9 bg-indigo-300 rounded-full border-2 border-white" />
              <div className="w-9 h-9 bg-pink-300 rounded-full border-2 border-white" />
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                1,200+ Happy Clients
              </p>
              <p className="text-sm text-gray-500">
                ⭐ 4.9 Rating Across Bangalore
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          
          <div className="bg-white p-3 rounded-2xl shadow-2xl w-full max-w-md hover:scale-105 transition">
            <img
              src="/hero.png"
              alt="ceiling"
              className="rounded-xl w-full h-[320px] md:h-[400px] object-cover"
            />
          </div>

          <div className="absolute -top-6 -right-6 bg-white shadow px-4 py-2 rounded-lg text-xs font-medium">
            ✔ Trusted Service
          </div>
        </div>
      </div>
    </section>
  );
}