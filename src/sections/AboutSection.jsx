import React from "react";
import { motion } from "framer-motion";
import data from "../data/siteData.json";

export default function AboutSection({ full, image  }) {

  return (
    <section className="py-20 bg-white" id="about">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        {/* IMAGE */}
   <div className="overflow-hidden rounded-xl">
<motion.img
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  whileHover={{ scale: 1.08 }}
  transition={{ duration: 0.4 }}
  src={image || "/logo.avif"}
  alt="About Vidya Trade"
  className={`object-cover w-full 
  ${full ? "h-[420px]" : "h-[320px]"}`}
/>
</div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl font-bold text-[var(--primary)] mb-6">
            About {data.company}
          </h2>

          {/* SHORT DESCRIPTION (Homepage) */}
          <p className="text-gray-600 leading-relaxed mb-4">
            Vidya Trade offers premium stainless steel products designed to
            deliver durability, performance, and modern industrial standards.
            Our manufacturing focuses on quality craftsmanship and reliable
            materials that support everyday usage and long-term value.
          </p>

          {/* FULL CONTENT (About Page) */}
          {full && (
            <>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our product line includes stainless steel bottles, coffee mugs,
                and various steel utility products built with high-grade steel
                and modern finishing techniques.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Located in Maharashtra, Vidya Trade ensures reliable supply,
                efficient manufacturing, and customer satisfaction through
                consistent quality and innovation.
              </p>
            </>
          )}

        </motion.div>

      </div>

    </section>
  );
}