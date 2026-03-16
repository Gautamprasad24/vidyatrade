import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {

  return (

    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-center text-[var(--primary)] mb-16">
          Contact Us
        </h1>

        {/* CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">

            <FaPhoneAlt className="text-2xl text-[var(--primary)] mx-auto mb-4" />

            <h3 className="font-semibold mb-2">
              Phone
            </h3>

            <p>+91 8928916824</p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">

            <FaEnvelope className="text-2xl text-[var(--primary)] mx-auto mb-4" />

            <h3 className="font-semibold mb-2">
              Email
            </h3>

            <p>info@vidyatrade.com</p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">

            <FaMapMarkerAlt className="text-2xl text-[var(--primary)] mx-auto mb-4" />

            <h3 className="font-semibold mb-2">
              Address
            </h3>

            <p>
              Maharashtra, India
            </p>

          </div>

        </motion.div>


        {/* COMPANY DETAILS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-10 mb-16"
        >

          <h2 className="text-2xl font-semibold text-[var(--primary)] mb-6">
            Company Information
          </h2>

          <div className="space-y-4">

            <p>
              <strong>Company Name:</strong> Vidya Trade
            </p>

            <p>
              <strong>Company Registration No:</strong> XXXXXXXX
            </p>

            <p>
              <strong>GST Number:</strong> XXXXXXXX
            </p>

          </div>

        </motion.div>


        {/* PAYMENT DETAILS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-10 text-center"
        >

          <h2 className="text-2xl font-semibold text-[var(--primary)] mb-6">
            Payment Details
          </h2>

          <p className="mb-6 text-gray-600">
            Scan the QR code below to make payment.
          </p>

          <img
            src="/qr.png"
            alt="Bank QR Code"
            className="w-60 mx-auto shadow-md rounded-lg"
          />

        </motion.div>

      </div>

    </section>
  );
}