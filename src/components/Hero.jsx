import React from "react";
import { motion } from "framer-motion";

export default function Hero({ openModal }) {

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/vidya_trade_office.png')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative text-center text-white max-w-3xl px-6">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Premium Stainless Steel Products
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          Durable • Eco-Friendly • Modern Design
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6"
        >

          <button
            onClick={openModal}
            className="bg-[var(--primary)] px-6 py-3 rounded-lg shadow-xl hover:bg-[var(--gold)] transition"
          >
            Enquiry Now
          </button>

          <a
            href="#products"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Our Products
          </a>

        </motion.div>

      </div>

    </section>
  );
}