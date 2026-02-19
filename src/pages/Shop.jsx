import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-20 text-xl font-semibold">Loading Products...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col" key={p.id}>
            <Link to={`/product/${p.id}`}>
              <img src={p.thumbnail} alt={p.title} className="w-full h-48 object-cover border-b" />
              <div className="p-4 flex-grow">
                <h4 className="text-lg font-bold text-gray-800 truncate mb-2">{p.title}</h4>
                <p className="text-blue-600 font-bold text-xl">${p.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}