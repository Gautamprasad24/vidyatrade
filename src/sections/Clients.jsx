import React from "react";
import { motion } from "framer-motion";
import data from "../data/siteData.json";

export default function Clients() {

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[var(--primary)] mb-16">
          Our Clients
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {data.clients.map((client, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col items-center"
            >

              <img
                src={client.logo}
                alt={client.name}
                className="h-16 object-contain mb-4"
              />

              <p className="text-sm text-gray-600 text-center">
                {client.name}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}