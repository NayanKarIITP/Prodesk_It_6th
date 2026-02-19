import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-[80vh] flex flex-col items-center justify-center text-center px-4 rounded-xl mt-4">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Welcome to ShopZone <span className="text-blue-600">🛒</span>
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl">
        Your one-stop shop for everything you love. Discover amazing products at unbeatable prices today.
      </p>
      <Link to="/shop">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
          Start Shopping
        </button>
      </Link>
    </div>
  );
}