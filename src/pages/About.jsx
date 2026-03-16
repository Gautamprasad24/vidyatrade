import React from "react";
import Founder from "../components/Founder";
import AboutSection from "../sections/AboutSection";
import CountUp from "react-countup";
import StatsCounter from "../components/StatsCounter";
export default function About() {

  return (
    <div>

      {/* HERO */}
      <section
  className="relative text-white min-h-[60vh] flex items-center justify-center text-center bg-cover bg-center bg-fixed"
  style={{
    backgroundImage: "url('/images/about-bg.png')"
  }}
>

  {/* overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 px-6">

    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      About Vidya Trade
    </h1>

    <p className="text-lg max-w-2xl mx-auto">
      Delivering premium stainless steel products with
      quality, innovation and durability.
    </p>

  </div>

</section>

      {/* MAIN ABOUT */}
      <AboutSection
        full={true}
        image="/images/about-page.png"
      />


      {/* MISSION VISION */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white p-10 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl">

            <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600">
              Our mission is to provide durable, eco-friendly and
              high-quality stainless steel products that improve
              everyday living while maintaining sustainability.
            </p>

          </div>

          <div className="bg-white p-10 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl">

            <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600">
              To become a trusted global brand in stainless steel
              kitchenware by delivering innovation, reliability
              and customer satisfaction.
            </p>

          </div>

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[var(--primary)] mb-16">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-8 shadow-lg rounded-xl text-center transition transform hover:scale-105 hover:shadow-2xl">

              <h3 className="text-xl font-semibold mb-3">
                Premium Quality
              </h3>

              <p className="text-gray-600">
                High grade stainless steel ensuring durability
                and long lasting performance.
              </p>

            </div>

            <div className="p-8 shadow-lg rounded-xl text-center transition transform hover:scale-105 hover:shadow-2xl">

              <h3 className="text-xl font-semibold mb-3">
                Modern Design
              </h3>

              <p className="text-gray-600">
                Stylish and modern designs that match today's
                lifestyle and kitchen needs.
              </p>

            </div>

            <div className="p-8 shadow-lg rounded-xl text-center transition transform hover:scale-105 hover:shadow-2xl">

              <h3 className="text-xl font-semibold mb-3">
                Trusted Brand
              </h3>

              <p className="text-gray-600">
                Trusted by distributors and customers for
                consistent quality and service.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* COMPANY STATS */}
 <StatsCounter />


      {/* FOUNDERS */}
      <Founder />

    </div>
  );
}