"use client";

import { useRouter } from "next/navigation";

const materials = [
  {
    title: "Gypsum Boards",
    category: "Boards",
    img: "materials/gyproc.jpg",
  },
  {
    title: "PVC Pannel",
    category: "PVC",
   
  },
  {
    title: "Gypsum Powder",
    category: "POP",
  },
  {
    title: "Expert Channel",
    category: "Channel",
  },
];

export default function Materials() {
  const router = useRouter();

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-b from-[#f7f7fb] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Best-Selling Materials
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Premium quality materials for ceiling & interior work.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT - LIST (FIRST ON DESKTOP) */}
          <div className="space-y-4 order-2 md:order-1">

            {materials.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {item.category}
                  </p>
                </div>

                <span className="text-yellow-500 text-sm">
                  ★ 4.8
                </span>
              </div>
            ))}

            {/* BUTTON */}
            <div className="pt-4">
              <button
                onClick={() => router.push("/materials")}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:scale-105 transition shadow-lg"
              >
                📦 Buy Materials
              </button>
            </div>

          </div>

          {/* RIGHT - IMAGE */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-full max-w-md group">
              
              <img
                src={materials[0].img}
                alt="material"
                className="w-full h-[280px] md:h-[350px] object-cover rounded-2xl shadow-xl group-hover:scale-105 transition duration-500"
              />

              <span className="absolute top-4 left-4 bg-white text-gray-700 text-xs px-3 py-1 rounded-full shadow">
                {materials[0].category}
              </span>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}