import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/products.json";

export default function Category(){

const { id } = useParams();

const category = data.categories.find(c => c.id === id);

if(!category){
  return <h2 className="text-center py-20">Category not found</h2>
}

return(

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h1 className="text-4xl font-bold mb-12">
{category.name}
</h1>

<div className="grid md:grid-cols-3 gap-10">

{(category.products || []).map((product)=> (

<Link key={product.id} to={`/product/${product.id}`}>

<div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">

<div className="w-full h-[300px] overflow-hidden rounded-lg mb-4">

  <img
    src={product.images?.[0]}
    className="w-full h-full object-cover"
  />

</div>

<h3 className="font-semibold">
{product.name}
</h3>

</div>

</Link>

))}

</div>

</div>

</section>

)

}