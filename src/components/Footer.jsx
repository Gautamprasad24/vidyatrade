import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {

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
        <div>

          <h3 className="text-lg font-semibold mb-4 text-[#F3B947]">
            CONTACT
          </h3>

          <p className="text-gray-300 mb-2">
            info@vidyatrade.com
          </p>

          <p className="text-gray-300 mb-2">
            +91 8181039039
          </p>

          <p className="text-gray-300">
            Mumbai, Maharashtra, India
          </p>

        </div>

        {/* USEFUL LINKS */}
        <div>

          <h3 className="text-lg font-semibold mb-4 text-[#F3B947]">
            USEFUL LINKS
          </h3>

          <ul className="space-y-2 text-gray-300">

            <li className="hover:text-[#F3B947] cursor-pointer">Home</li>
            <li className="hover:text-[#F3B947] cursor-pointer">About</li>
            <li className="hover:text-[#F3B947] cursor-pointer">Products</li>
            <li className="hover:text-[#F3B947] cursor-pointer">Founder</li>
            <li className="hover:text-[#F3B947] cursor-pointer">Clients</li>
            <li className="hover:text-[#F3B947] cursor-pointer">Inquiry</li>

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

          <button
            className="border border-white px-6 py-2
            hover:bg-[#F3B947]
            hover:text-black
            transition"
          >
            VISIT WEBSITE
          </button>

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

        <div className="w-10 h-10 rounded-full border border-[#F3B947]
        flex items-center justify-center
        hover:bg-[#F3B947] hover:text-black transition">

          <FaFacebookF />

        </div>

        <div className="w-10 h-10 rounded-full border border-[#F3B947]
        flex items-center justify-center
        hover:bg-[#F3B947] hover:text-black transition">

          <FaInstagram />

        </div>

        <div className="w-10 h-10 rounded-full border border-[#F3B947]
        flex items-center justify-center
        hover:bg-[#F3B947] hover:text-black transition">

          <FaXTwitter />

        </div>

        <div className="w-10 h-10 rounded-full border border-[#F3B947]
        flex items-center justify-center
        hover:bg-[#F3B947] hover:text-black transition">

          <FaLinkedinIn />

        </div>

      </div>

    </footer>
  );
}