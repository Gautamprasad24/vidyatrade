import React from "react";
import { FaStar } from "react-icons/fa";
import data from "../data/siteData.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {

  return (

    <section className="py-24 bg-gray-50">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[var(--primary)] mb-16">
          Testimonials
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >

          {data.testimonials.map((item, index) => (

            <SwiperSlide key={index}>

              <div className="bg-white p-10 rounded-xl shadow-xl text-center">

                <p className="text-gray-600 mb-6 text-lg">
                  "{item.message}"
                </p>

                <div className="flex justify-center mb-4">

                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mx-1" />
                  ))}

                </div>

                <h4 className="font-semibold text-lg">
                  {item.name}
                </h4>

                <p className="text-gray-500 text-sm">
                  {item.company}
                </p>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}