import React, { useState } from "react";
import { motion } from "framer-motion";
import data from "../data/gallery.json";
import { FaPlay } from "react-icons/fa";
export default function Gallery() {

  const [activeItem, setActiveItem] = useState(null);

  return (

    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center text-[var(--primary)] mb-16">
          Our Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {data.gallery.map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveItem(item)}
              className="relative rounded-xl overflow-hidden shadow-lg bg-white group cursor-pointer"
            >

              {/* IMAGE */}
              {item.type === "image" && (
                <img
                  src={item.src}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              )}

              {/* VIDEO */}
              {item.type === "video" && (
  <div className="relative">

    <video
      src={item.src}
      className="w-full h-64 object-cover"
      muted
    />

    {/* VIDEO ICON */}
    <div className="absolute inset-0 flex items-center justify-center">

      <div className="bg-black/60 p-4 rounded-full">

        <FaPlay className="text-white text-xl" />

      </div>

    </div>

  </div>
)}

              {/* TEXT OVERLAY */}
              {item.title && (

                <div className="
                absolute inset-0
                bg-black/40
                opacity-0 group-hover:opacity-100
                transition
                flex items-end
                p-4 text-white">

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                </div>

              )}

            </motion.div>

          ))}

        </div>

      </div>


      {/* MODAL */}
      {activeItem && (

  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
    onClick={() => setActiveItem(null)}
  >

    <div
      className="relative w-full max-w-5xl max-h-[90vh]"
      onClick={(e) => e.stopPropagation()}
    >

      {/* IMAGE */}
      {activeItem.type === "image" && (
        <img
          src={activeItem.src}
          className="w-full max-h-[85vh] object-contain rounded-xl shadow-xl"
        />
      )}

      {/* VIDEO */}
      {activeItem.type === "video" && (
        <video
          src={activeItem.src}
          controls
          autoPlay
          className="w-full max-h-[85vh] rounded-xl shadow-xl"
        />
      )}
      <button
className="absolute top-4 right-4 text-white text-3xl"
onClick={()=>setActiveItem(null)}
>
✕
</button>

    </div>

  </div>

)}

    </section>
  );
}