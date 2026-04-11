"use client";

import { Clock, ShieldCheck, CheckCircle } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full bg-[#f7f7fb] py-16">
      <div className="max-w-8xl mx-auto  grid md:grid-cols-3 gap-110 text-center">
        
        {/* ITEM 1 */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 mb-4">
            <Clock className="text-purple-600 w-6 h-6" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">
            Quick WhatsApp Quotes
          </h3>
          <p className="text-gray-500 text-sm mt-2 max-w-xs">
            Send us your room measurements and get a detailed estimate within 2 hours.
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 mb-4">
            <ShieldCheck className="text-purple-600 w-6 h-6" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">
            5-Year Warranty
          </h3>
          <p className="text-gray-500 text-sm mt-2 max-w-xs">
            Every installation comes with a structural and paint warranty for your peace of mind.
          </p>
        </div>

        {/* ITEM 3 */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 mb-4">
            <CheckCircle className="text-purple-600 w-6 h-6" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">
            Expert Installers
          </h3>
          <p className="text-gray-500 text-sm mt-2 max-w-xs">
            Our certified technicians ensure a mess-free, professional installation process.
          </p>
        </div>

      </div>
    </section>
  );
}