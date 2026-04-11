"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Bottom() {
  return (
      <section
  id="contact"
  className="scroll-mt-28 w-full bg-gradient-to-b from-gray-50 to-white py-20 px-6"
>
  <div className="max-w-7xl mx-auto">
    
    {/* HEADING */}
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-gray-800">
        Contact & Our Work
      </h2>
      <p className="text-gray-500 mt-3">
        Get in touch with us for plaster materials & professional services
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-10">
      
      {/* LEFT - SHOP DETAILS */}
      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Shop Details
        </h3>

        <div className="space-y-4 text-gray-600">  
            <p><strong>🏪 Shop:</strong> India Plasters</p>
            <p><strong> GSTIN:</strong> 29BLZPA8056P1ZZ</p>
            <p><strong>📍 Location:</strong> Devanahalli, Budigere Main Road, Bangalore - 562110</p>
            <p><strong>📞 Phone:</strong> +91 9945294303</p>
             <p><strong>✉️ Email:</strong> indiaplastersceilingpro@gmail.com</p>
          </div>

        {/* WHATSAPP BUTTON */}
          <a
        href="tel:9945294303"
         target="_blank"
          className="mt-6 inline-block w-full bg-black/70 hover:bg-black/80 backdrop-blur text-white py-3 rounded-lg text-center  font-semibold border border-white/30"
        >
        📞 Call
      </a>
        <a
          href="https://wa.me/919580275258?text=Hi%20I%20want%20plaster%20service"
          target="_blank"
          className="mt-6 inline-block w-full bg-green-500 text-white py-3 rounded-lg text-center font-medium hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* RIGHT - EXPERIENCE */}
      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Our Experience
        </h3>

        <ul className="space-y-4 text-gray-600">
          <li>✔ 5+ Years Experience in Plaster Work</li>
          <li>✔ 100+ Completed Projects</li>
          <li>✔ Skilled & Professional Team</li>
          <li>✔ High Quality Materials</li>
        </ul>
      </div>
    </div>
  </div>
</section>

  );
}