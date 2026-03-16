import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";

import Home from "./pages/Home";
import About from "./pages/About";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";


export default function App() {

  const [modalOpen, setModalOpen] = useState(false);

  return (

    <BrowserRouter>

      <Header openModal={() => setModalOpen(true)} />

      <Routes>

        <Route path="/" element={<Home openModal={() => setModalOpen(true)} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

<Route path="/category/:id" element={<Category />} />

<Route path="/product/:id" element={<ProductDetail />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

      {/* ENQUIRY MODAL */}
      {modalOpen && (
        <EnquiryModal closeModal={() => setModalOpen(false)} />
      )}

    </BrowserRouter>

  );
}
