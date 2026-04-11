"use client";

import { useState } from "react";

const services = [
  {
    title: "POP False Ceiling",
    desc: "Elegant and durable POP ceiling designs for modern interiors.",
    img: "services/pop1.png",
  },
  {
    title: "Gypsum Ceiling",
    desc: "Lightweight gypsum ceilings with smooth finish.",
    img: "services/gypsum.avif",
  },
  {
    title: "PVC Panels",
    desc: "Waterproof and low-maintenance panels.",
    img: "services/pvvcc.jpg",
  },
  {
    title: "Fluted Panels",
    desc: "Stylish wall panels.",
    img: "services/fluted.jpg",
  },
  {
    title: "Grid Ceiling",
    desc: "Strong and modern grid ceiling design.",
    img: "services/grid.webp",
  },
  {
    title: "Partition Work",
    desc: "Smart partition solutions.",
    img: "services/ption.png",
  },
  {
    title: "WPC Panels",
    desc: "Durable panel solutions.",
    img: "services/wpc.jpg",
  },
  {
    title: "Cornice Design",
    desc: "Decorative finishing.",
    img: "services/cornis.jpg",
  },
  //  {
  //   title: "Flower Design",
  //   desc: "Decorative finishing.",
  //   img: "/services/flo.jpg",
  // },
];

export default function Services() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.address || !form.service) {
      setError("⚠ Please fill all fields");
      return;
    }

    const message = `Hii,I want:
 Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}
Service: ${form.service} `;

 window.open(
      `https://wa.me/919580275258?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setError("");
    setOpen(false);
  };

  return (
    <section id="services" className="w-full py-16 bg-gray-50 px-6">
      <div className="max-w-8xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Our Premium Services With Materials
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setOpen(true)}
            className="bg-green-500 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-green-600 transition shadow-lg"
          >
            💬 Contact for Services
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-3 text-center">
          Get instant response on WhatsApp within minutes ⚡
        </p>

        {/* MODAL */}
        {open && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
            
            <div className="bg-white w-full max-w-md p-6 rounded-xl">
              
              <h3 className="text-xl font-semibold mb-4">
                Get Service
              </h3>

              {/* ERROR MESSAGE 🔴 */}
              {error && (
                <div className="bg-red-100 text-red-600 text-sm px-3 py-2 rounded mb-3">
                  {error}
                </div>
              )}

              {/* INPUTS */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-2 rounded mb-3"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border p-2 rounded mb-3"
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <textarea
                placeholder="Address"
                className="w-full border p-2 rounded mb-3"
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
              />

              {/* SERVICE SELECT */}
              <select
                className="w-full border p-2 rounded mb-4"
                onChange={(e) =>
                  setForm({ ...form, service: e.target.value })
                }
              >
                <option value="">Select Service</option>
                <option value="POP False Ceiling">POP False Ceiling</option>
                <option value="Gypsum Ceiling">Gypsum Ceiling</option>
                <option value="PVC Panels">PVC Panels</option>
                <option value="Fluted Panels">Fluted Panels</option>
                <option value="Grid Ceiling">Grid Ceiling</option>
                <option value="Cornice Design">Cornice Design</option>
                <option value="Partion">Partion</option>
                <option value="All Services">All Services</option>
              </select>

              <div className="flex gap-3">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-green-500 text-white py-2 rounded"
                >
                  Send
                </button>

                <button
                  onClick={() => {
                    setOpen(false);
                    setError("");
                  }}
                  className="flex-1 border py-2 rounded"
                >
                  Cancel
                </button>
              </div>

            </div>

          </div>
        )}
      </div>
    </section>
  );
}