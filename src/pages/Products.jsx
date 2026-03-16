import React from "react";
import { Link } from "react-router-dom";
import data from "../data/products.json";

export default function Products(){

return(

<section className="py-20 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<h1 className="text-4xl text-center font-bold mb-16 text-[var(--primary)]">
Our Products
</h1>

<div className="grid md:grid-cols-3 gap-10">

{data.categories.map((category)=> (

<Link
key={category.id}
to={`/category/${category.id}`}
className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
>

<img
src={category.image}
className="w-full h-56 object-cover"
/>

<div className="p-6">

<h3 className="text-xl font-semibold">
{category.name}
</h3>

</div>

</Link>

))}

</div>

</div>

</section>

)

}