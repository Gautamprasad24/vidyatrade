import React from "react";

import AboutSection from "../sections/AboutSection";
import Products from "../components/Products";
import Hero from "../components/Hero";
import Founder from "../components/Founder";
import Testimonials from "../sections/TestimonialsPage";
import Clients from "../sections/Clients";
import Enquiry from "../sections/Enquiry";
import StatsCounter from "../components/StatsCounter";
export default function Home( {openModal }) {

  return (
    <>
    <Hero openModal={openModal} />
      <AboutSection full={false} />
      <StatsCounter />
      <Products />
      <Founder />
      <Clients />
      <Testimonials />
      <Enquiry />
    </>
  );
}