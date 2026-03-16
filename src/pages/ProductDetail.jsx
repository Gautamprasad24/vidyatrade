import { useParams, useNavigate } from "react-router-dom";
import data from "../data/products.json";
import { useState } from "react";
import React from "react";

export default function ProductDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

const product = data.categories
  .flatMap(category => category.products)
  .find(p => p.id === id);

  if (!product) {
    return <h2 className="text-center py-20">Product not found</h2>;
  }

  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (

    <section className="py-20 bg-gray-100 relative">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="
          absolute
          top-4 right-4
          md:top-8 md:right-8
          bg-[var(--primary)] text-white
          px-6 py-2 rounded-lg shadow-md
          hover:scale-105 transition
        "
      >
        Back
      </button>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT IMAGE */}
        <div>

          {/* BIG IMAGE */}
          <div className="w-full h-[420px] bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">

            <img
              src={activeImage}
              className="max-h-full max-w-full object-contain transition duration-300"
            />

          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-4 mt-6">

            {product.images.map((img, i) => (

              <div
                key={i}
                onClick={() => setActiveImage(img)}
                className={`
                  w-20 h-20 rounded-lg border-2 cursor-pointer
                  flex items-center justify-center overflow-hidden
                  transition
                  ${activeImage === img
                    ? "border-[var(--primary)]"
                    : "border-gray-300"}
                `}
              >

                <img
                  src={img}
                  className="w-full h-full object-cover"
                />

              </div>

            ))}

          </div>

        </div>


        {/* RIGHT DETAILS */}
        <div className="pt-6 md:pt-0 ">

          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-lg ">
          <span className="text-[var(--gold)] font-bold">  Contact person: </span>{product.contact}
          </p>

          <p className="mb-6 text-lg">
            <span className="text-[var(--gold)] font-bold"> Phone No: </span> {product.phone}
          </p>

          <div className="space-y-3">

          {Object.entries(product.details || {}).map(([key, value]) => (
  <p key={key}>
    <strong className="text-[var(--gold)]">{key}:</strong>{" "}
    <span dangerouslySetInnerHTML={{ __html: value }} />
  </p>
))}

          </div>

          {/* CONNECT BUTTON */}
          <a
            href={`tel:${product.phone}`}
            className="
              inline-block mt-8
              bg-[var(--primary)]
              text-white
              px-8 py-3
              rounded-lg
              shadow-md
              hover:bg-[var(--gold)]
              transition
            "
          >
            Connect
          </a>

        </div>

      </div>

    </section>
  );
}