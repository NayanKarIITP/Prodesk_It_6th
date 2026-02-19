import React from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div className="flex flex-col items-center justify-center mt-32 text-center">
      <div className="bg-green-50 p-10 rounded-xl shadow-lg border border-green-200">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Payment Successful 🎉</h1>
        <p className="text-lg text-gray-700 mb-8">Thank you! Your order has been placed successfully.</p>
        <Link to="/shop">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded shadow transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}