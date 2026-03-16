import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import data from "../data/siteData.json";
import {  FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Founder() {

  return (

    <section
      id="founder"
      className="py-24 relative overflow-hidden
      bg-gradient-to-r from-[var(--primary)] via-[var(--pink)] to-[var(--gold)]"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Leadership Team
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {data.founders.map((founder, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                rotateX: 5,
                rotateY: 8,
                scale: 1.05
              }}
              transition={{ duration: 0.4 }}
              className="relative p-8 rounded-2xl
              bg-white/10 backdrop-blur-lg
              border border-white/20
              shadow-2xl text-white text-center"
            >

              {/* IMAGE */}
              <img
                src={founder.image}
                alt={founder.name}
                className="w-36 h-36 mx-auto rounded-full
                object-cover border-4 border-white shadow-xl mb-6"
              />

              {/* NAME */}
              <h3 className="text-2xl font-semibold">
                {founder.name}
              </h3>

              {/* DESIGNATION */}
              <p className="text-yellow-300 mb-4">
                {founder.designation}
              </p>

              {/* EDUCATION */}
              <div className="text-sm text-gray-200 mb-4">
                {founder.education.map((edu, i) => (
                  <p key={i}>• {edu}</p>
                ))}
              </div>

              {/* MESSAGE */}
              <p className="text-gray-200 leading-relaxed mb-6">
                {founder.message}
              </p>

              {/* LINKEDIN */}
              {/* SOCIAL ICONS */}
<div className="flex justify-center gap-4 mt-4">

  {/* LINKEDIN */}
  <a
    href={founder.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center
    rounded-full bg-white text-[var(--primary)]
    hover:bg-[var(--gold)] transition"
  >
    <FaLinkedin />
  </a>

  {/* INSTAGRAM */}
  <a
    href={founder.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center
    rounded-full bg-white text-[var(--primary)]
    hover:bg-[var(--gold)] transition"
  >
    <FaInstagram />
  </a>

  {/* FACEBOOK */}
  <a
    href={founder.facebook}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center
    rounded-full bg-white text-[var(--primary)]
    hover:bg-[var(--gold)] transition"
  >
    <FaFacebookF />
  </a>

</div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}