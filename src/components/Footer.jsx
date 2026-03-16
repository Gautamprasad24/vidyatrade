import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer({ openModal }) {

  return (
    <footer className="bg-[#432D5E] text-white pt-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* LOGO */}
        <div>

          <img
            src="/logo.avif"
            alt="Vidya Trade Logo"
            className="h-24 mb-4"
          />

          <p className="text-gray-300">
            Premium stainless steel products designed for durability,
            sustainability and modern lifestyle.
          </p>

        </div>

        {/* CONTACT */}
        {/* CONTACT */}
        <div>

          <h3 className="text-lg font-semibold mb-4 text-[#F3B947]">
            CONTACT
          </h3>

          {/* EMAIL */}
          <p className="text-gray-300 mb-2">
            <a
              href="mailto:info@vidyatrade.com"
              className="hover:text-[#F3B947]"
            >
              info@vidyatrade.com
            </a>
          </p>

          {/* PHONE */}
          <p className="text-gray-300 mb-2">
            <a
              href="tel:+918181039039"
              className="hover:text-[#F3B947]"
            >
              +91 8181039039
            </a>
          </p>

          {/* LOCATION */}
          <p className="text-gray-300">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mumbai,Maharashtra,India"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F3B947]"
            >
              Mumbai, Maharashtra, India
            </a>
          </p>

        </div>
        {/* USEFUL LINKS */}
        <div>

          <h3 className="text-lg font-semibold mb-4 text-[#F3B947]">
            USEFUL LINKS
          </h3>

          <ul className="space-y-2 text-gray-300">

            <li>
              <Link to="/" className="hover:text-[#F3B947]">Home</Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-[#F3B947]">About</Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-[#F3B947]">Products</Link>
            </li>

            <li>
              <Link to="/founder" className="hover:text-[#F3B947]">Founder</Link>
            </li>

            <li>
              <Link to="/clients" className="hover:text-[#F3B947]">Clients</Link>
            </li>

            <li>
              <button
                onClick={openModal}
                className="hover:text-[#F3B947]"
              >
                Inquiry
              </button>
            </li>

          </ul>

        </div>

        {/* DEVELOPER */}
        <div>

          <h3 className="text-lg font-semibold mb-4 text-[#F3B947]">
            DEVELOPER
          </h3>

          <p className="text-gray-300 mb-4">
            Vidya Trade Development Team
          </p>

          <Link
            to="/"
            className="border border-white px-6 py-2 inline-block
            hover:bg-[#F3B947]
            hover:text-black
            transition"
          >
            VISIT WEBSITE
          </Link>

        </div>

      </div>

      {/* LINE */}
      <div className="border-t border-white/20 my-10"></div>

      {/* DISCLAIMER */}
      <div className="max-w-6xl mx-auto text-center px-6 text-gray-300 text-sm">

        <p>
          Disclaimer: The content provided on this website is for information
          purposes only and does not constitute an offer or solicitation.
          Product images and specifications may change without prior notice.
        </p>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-6 text-gray-300">

        Designed by <span className="text-[#F3B947]">Vidya Trade</span> 2026.
        All Rights Reserved

      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-6 mt-6 pb-10">

        <a
          href="https://facebook.com"
          target="_blank"
          className="w-10 h-10 rounded-full border border-[#F3B947]
          flex items-center justify-center
          hover:bg-[#F3B947] hover:text-black transition"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          className="w-10 h-10 rounded-full border border-[#F3B947]
          flex items-center justify-center
          hover:bg-[#F3B947] hover:text-black transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          className="w-10 h-10 rounded-full border border-[#F3B947]
          flex items-center justify-center
          hover:bg-[#F3B947] hover:text-black transition"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="w-10 h-10 rounded-full border border-[#F3B947]
          flex items-center justify-center
          hover:bg-[#F3B947] hover:text-black transition"
        >
          <FaLinkedinIn />
        </a>

      </div>

    </footer>
  );
}