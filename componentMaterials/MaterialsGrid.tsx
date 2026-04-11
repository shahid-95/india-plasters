"use client";

import { useState, useRef } from "react";

const data = [
  { title: "Gypsum Gyproc Board", category: "Gypsum Board", img: "/materials/gyproc.jpg" },
  { title: "Gypsum Gypblock Board", category: "Gypsum Board", img: "/materials/gyp.jpg" },
  { title: "Gypsum Regular Board", category: "Gypsum Board", img: "/materials/regular.jpeg" },
  { title: "Cement Sheet", category: "Cement Sheet", img: "/materials/cement sheet.webp" },
  { title: "Grid", category: "Grid", img: "/materials/grid.webp" },
  { title: "Gypsum Powder", category: "POP", img: "/materials/pop.webp" },
  { title: "Gyproc Compound", category: "POP", img: "/materials/gyproc.webp" },
  { title: "Expert Bottom", category: "Channel", img: "/materials/bottom.jpeg" },
  { title: "Expert Patti", category: "Channel", img: "/materials/patti.jpeg" },
  { title: "Expert Parameter", category: "Channel", img: "/materials/paraex.webp" },
  { title: "Expert L", category: "Channel", img: "/materials/l.webp" },
  { title: "Regular Channel", category: "Channel", img: "/materials/local.webp" },
  { title: "Magnic Bottom", category: "Channel", img: "/materials/magBottom.webp" },
  { title: "Magnic Patti", category: "Channel", img: "/materials/magnic patti.webp" },
  { title: "Magnic Parameter", category: "Channel", img: "/materials/magPara.jpeg" },
  { title: "Magnic L", category: "Channel", img: "/materials/magL.webp" },
  { title: "PVC Panel White Gold", category: "PVC", img: "/materials/pvcwhite.png" },
  { title: "PVC Panel White Silver", category: "PVC", img: "/materials/pvcSilver.jpeg" },
  { title: "PVC Panel Red", category: "PVC", img: "/materials/pvcred.jpg" },
  { title: "PVC Panel Classic", category: "PVC", img: "/materials/pvc1.jpg" },
  { title: "PVC Panel Brown", category: "PVC", img: "/materials/pvc2.png" },
  { title: "Fluted Panel White Gold", category: "Fluted", img: "/materials/whitefluted.webp" },
  { title: "Fluted Panel 9s 103", category: "Fluted", img: "/materials/fluted1.webp" },
  { title: "Fluted Panel Wood Gold", category: "Fluted", img: "/materials/fluted4.jpeg" },
  { title: "Fluted Panel Classic", category: "Fluted", img: "/materials/fluted2.jpeg" },
  { title: "WPVC Panel", category: "WPVC", img: "/materials/wpvcc.avif" },
  { title: "WPVC Panel  White", category: "WPVC", img: "/materials/wpvc.jpg" },
  { title: "WPVC Panel Brown", category: "WPVC", img: "/materials/wpvc1.jpeg" },
  { title: "WPVC Panel Wooden", category: "WPVC", img: "/materials/wpvc3.avif" },
  { title: "Stad", category: "Stad & Floor", img: "/materials/stad1.jpg" },
  { title: "Floor", category: "Stad & Floor", img: "/materials/stad.webp" },
  { title: "Screw 1 inch", category: "Screw", img: "/materials/screw1.5.webp" },
  { title: "Screw 2 inch", category: "Screw", img: "/materials/2 screw.avif" },
  { title: "Metal Screw", category: "Screw", img: "/materials/metal screw.webp" },
  { title: "Fasnar", category: "GiriBolt", img: "/materials/fasnar.jpg" },
  { title: "Gatta", category: "Gatta", img: "/materials/gataa.jpeg" },
  { title: "Joint Tape", category: "Joint Tape", img: "/materials/joint tape.webp" },
  { title: "Gyproc Tape", category: "Joint Tape", img: "/materials/tape.jpeg" },
];

const filters = ["All","POP","Gypsum Board","Channel","PVC","Fluted","WPVC","Grid","Screw","Joint Tape"];

// ✅ TYPES
type CartType = Record<string, number>;

type ErrorType = {
  name?: string;
  phone?: string;
  address?: string;
};

export default function MaterialsGrid() {
  const [active, setActive] = useState("All");
  const [cart, setCart] = useState<CartType>({});
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState<ErrorType>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLTextAreaElement>(null);

  let filtered =
    active === "All"
      ? data
      : data.filter((item) => item.category === active);

  filtered = filtered.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const addItem = (title: string) => {
    setCart((prev) => ({
      ...prev,
      [title]: (prev[title] ?? 0) + 1,
    }));
  };

  const removeItem = (title: string) => {
    setCart((prev) => {
      const updated = { ...prev };

      if ((updated[title] ?? 0) > 1) {
        updated[title]--;
      } else {
        delete updated[title];
      }

      return updated;
    });
  };

  const totalItems = Object.values(cart).reduce(
    (total: number, item: number) => total + item,
    0
  );

  const sendWhatsAppOrder = () => {
    let err: ErrorType = {};

    if (!name) err.name = "Enter name";
    if (!phone) err.phone = "Enter phone";
    if (!address) err.address = "Enter address";

    setErrors(err);

    if (err.name) return nameRef.current?.focus();
    if (err.phone) return phoneRef.current?.focus();
    if (err.address) return addressRef.current?.focus();

    const items = Object.entries(cart)
      .map(([title, qty]) => `${title} - ${qty}`)
      .join("\n");

    const msg = `I want order:
Name: ${name}
Phone: ${phone}
Address: ${address}
Materials:
${items}`;

    window.open(
      `https://wa.me/919945294303?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f4f6ff] to-white px-4 py-6">
      {/* 🏪 PREMIUM SHOP HEADER */}
<div className="relative overflow-hidden rounded-2xl mb-6">

  {/* GRADIENT BG */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600"></div>

  {/* GLOW */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

  <div className="relative p-5 md:p-6 text-white">

    {/* TITLE */}
    <h2 className="text-xl md:text-2xl font-bold leading-tight">
      India Plasters
    </h2>

    <p className="text-xs md:text-sm text-white/80 mt-1">
      Gypsum • POP • PVC • Grid • Partition •All work & Wholesale
    </p>

    {/* BADGES */}
    <div className="flex flex-wrap gap-2 mt-3 text-xs">
      <span className="bg-white/20 px-2 py-1 rounded-full">✔ Trusted Work</span>
      <span className="bg-white/20 px-2 py-1 rounded-full">⚡ Fast Service</span>
      <span className="bg-white/20 px-2 py-1 rounded-full">🏗 Expert Team</span>
    </div>

    {/* INFO */}
    <div className="mt-4 text-xs md:text-sm space-y-1 text-white/90">
      <p>📍 Devanahalli Budigere Main Road, Bangalore</p>
      <p>📞 9945294303</p>
      <p>🧾 GSTIN: 29BLZPA8056P1ZZ</p>
    </div>

    {/* BUTTONS */}
    <div className="flex gap-3 mt-5">
      <a
        href="tel:9945294303"
        className="flex-1 text-center bg-black/30 backdrop-blur text-white py-2 rounded-lg text-sm font-semibold border border-white/30"
      >
        📞 Call
      </a>

    </div>

  </div>
</div>

      {/* SEARCH */}
      <input
        placeholder="Search materials..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border px-3 py-2 rounded-lg mb-4"
      />

      {/* FILTER */}
      <div className="flex gap-2 overflow-x-auto mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-1 rounded-full text-sm ${
              active === f ? "bg-purple-600 text-white" : "bg-gray-100"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map((item, i) => {
          const qty = cart[item.title] || 0;

          return (
            <div key={i} className="bg-white rounded-xl shadow p-2">
              <img src={item.img} className="h-32 md:h-40 w-full object-cover rounded-lg" />
              <h3 className="text-sm mt-2 font-semibold">{item.title}</h3>

              {qty === 0 ? (
                <button onClick={() => addItem(item.title)} className="w-full mt-2 bg-purple-600 text-white py-1 rounded">
                  Add
                </button>
              ) : (
                <div className="flex justify-between mt-2 bg-gray-100 px-2 py-1 rounded">
                  <button onClick={() => removeItem(item.title)}>−</button>
                  <span>{qty}</span>
                  <button onClick={() => addItem(item.title)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 🔥 STICKY BAR */}
      {totalItems > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-6 py-3 rounded-xl shadow-xl flex gap-6 items-center z-50">
          <span>{totalItems} items</span>
          <button onClick={() => setShowModal(true)} className="bg-white text-purple-600 px-4 py-1 rounded">
            Order
          </button>
        </div>
      )}

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-5 rounded-xl w-full max-w-md">

            <input ref={nameRef} placeholder="Name" className="w-full border p-2 mb-2" onChange={(e)=>setName(e.target.value)} />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

            <input ref={phoneRef} placeholder="Phone" className="w-full border p-2 mb-2" onChange={(e)=>setPhone(e.target.value)} />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

            <textarea ref={addressRef} placeholder="Address" className="w-full border p-2 mb-3" onChange={(e)=>setAddress(e.target.value)} />
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}

            <div className="flex gap-3">
              <button onClick={()=>setShowModal(false)} className="w-full border py-2 rounded">
                Cancel
              </button>

              <button onClick={sendWhatsAppOrder} className="w-full bg-green-500 text-white py-2 rounded">
                WhatsApp Order
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}