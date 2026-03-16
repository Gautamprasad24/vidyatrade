import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import data from "../data/siteData.json";

export default function Header({ openModal }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md sticky top-0 bg-white z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <Link to="/">
          <img
            src="/logo.avif"
            alt="Vidya Trade"
            className="h-20"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 font-medium">

          {data.navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="hover:text-[var(--gold)] transition"
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {/* ENQUIRY BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="hidden md:block bg-[var(--primary)] text-white px-5 py-2 rounded-lg shadow-lg hover:bg-[var(--gold)] transition"
          >
            Enquiry
          </motion.button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl text-[var(--primary)]"
          >
            <FaBars />
          </button>

        </div>

      </div>

      {/* MOBILE SIDE MENU */}
      {menuOpen && (

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50 p-6"
        >

          {/* CLOSE BUTTON */}
          <div className="flex justify-between items-center mb-8">

            <img src="/logo.avif" className="h-20" />

            <button
              onClick={() => setMenuOpen(false)}
              className="text-xl"
            >
              <FaTimes />
            </button>

          </div>

          {/* MOBILE LINKS */}
          <nav className="flex flex-col gap-6 font-medium">

            {data.navLinks.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                onClick={() => setMenuOpen(false)}
                className="border-b pb-2 hover:text-[var(--gold)]"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* MOBILE ENQUIRY BUTTON */}
          <button
            onClick={() => {
              setMenuOpen(false);
              openModal();
            }}
            className="mt-8 w-full bg-[var(--primary)] text-white py-3 rounded-lg"
          >
            Enquiry
          </button>

        </motion.div>

      )}

    </header>
  );
}