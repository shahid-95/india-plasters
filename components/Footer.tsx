"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  // scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll to top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full border-t mt-10 py-6 px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">

        {/* LEFT */}
        <p className="text-center md:text-left">
          © 2026 <span className="font-semibold text-gray-800">IndiaPlasters</span>. All rights reserved.
        </p>

        {/* RIGHT */}
        <div className="flex gap-4 flex-wrap justify-center">
          <span className="cursor-pointer hover:text-black transition">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-black transition">
            Terms of Service
          </span>
        </div>

      </div>

      {/* 🔥 SCROLL TO TOP BUTTON */}
      {showTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <ArrowUp size={15} />
        </button>
      )}
    </>
  );
}