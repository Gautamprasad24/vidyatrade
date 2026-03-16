import { motion } from "framer-motion";
import data from "../data/siteData.json";
import React from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Products() {

const navigate = useNavigate();

return(

<section id="products" className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6 relative">

<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--primary)]">
Our Products
</h2>

{/* LEFT BUTTON */}
<button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-lg hover:bg-[var(--gold)] transition">
<FaArrowLeft />
</button>

{/* RIGHT BUTTON */}
<button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-lg hover:bg-[var(--gold)] transition">
<FaArrowRight />
</button>

<Swiper
modules={[Navigation, Autoplay]}
spaceBetween={40}
navigation={{
prevEl: ".swiper-prev",
nextEl: ".swiper-next"
}}
autoplay={{ delay: 3500 }}
breakpoints={{
320: { slidesPerView: 1.1, spaceBetween:20 },
640: { slidesPerView: 2 },
1024: { slidesPerView: 3 }
}}
>

{data.products.map((p,i)=>(

<SwiperSlide key={i}>

<motion.div
whileHover={{ scale:1.05 }}
onClick={()=>navigate(`/category/${p.id}`)}
className="bg-white p-7 rounded-2xl shadow-xl cursor-pointer group"
>

<div className="w-full h-[280px] md:h-[300px] overflow-hidden rounded-xl mb-6">

<img
src={p.image}
alt={p.title}
className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
/>

</div>

<h3 className="text-2xl font-semibold mb-2">
{p.title}
</h3>

<p className="text-gray-600 text-sm">
{p.description}
</p>

</motion.div>

</SwiperSlide>

))}

</Swiper>

</div>

</section>

)
}