"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const mapLink =
    "https://www.google.com/maps/dir/?api=1&destination=Shop+No.1+Ganesh+Compound+Byachpura+Road+Budigere+Rd+Bangalore+562110";

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
      
      <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <a href="#" className="hover:text-black transition">
          <div className="w-9 h-9 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold shadow">
            IP
          </div>
          </a>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-gray-800">
              India Plasters
            </span>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">

          <a href="#" className="hover:text-black transition">
            Home
          </a>

          <a href="#services" className="hover:text-black transition">
            Services
          </a>

          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>

          <Link href="/materials" className="hover:text-black transition">
            Buy Materials
          </Link>

          {/* 📍 VISIT SHOP (DIRECT DIRECTION) */}
          <a
            href={mapLink}
            target="_blank"
            className="hover:text-black transition"
          >
            Visit Shop
          </a>

          {/* 💬 WHATSAPP */}
          <a
            href="https://wa.me/919945294303"
            target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition shadow"
          >
             WhatsApp
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">

          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          <Link href="/materials" onClick={() => setOpen(false)}>
            Buy Materials
          </Link>

          {/* 📍 VISIT SHOP */}
          <a
            href={mapLink}
            target="_blank"
            onClick={() => setOpen(false)}
          >
           Visit Shop
          </a>

          {/* 💬 WHATSAPP */}
          <a
            href="https://wa.me/919945294303"
            target="_blank"
            onClick={() => setOpen(false)}
            className="text-green-600 font-semibold"
          >
            WhatsApp
          </a>

        </div>
      )}

    </nav>
  );
}