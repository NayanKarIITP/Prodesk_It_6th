import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div className="text-center mt-20 text-xl font-semibold">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="md:w-1/2 flex justify-center">
          <img src={product.thumbnail} alt={product.title} className="max-h-96 object-contain rounded-md" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.title}</h1>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.description}</p>
          <h2 className="text-3xl font-bold text-blue-600 mb-8">${product.price}</h2>
          
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors w-max"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}