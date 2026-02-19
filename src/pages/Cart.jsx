import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, totalPrice, increaseQty, decreaseQty, removeItem } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 gap-6">
        <h2 className="text-3xl font-bold text-gray-700">Your cart is empty 🛒</h2>
        <Link to="/shop">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition">
            Go Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Items List */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cart.map((item) => (
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow" key={item.id}>
            <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            
            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button onClick={() => decreaseQty(item.id)} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">-</button>
              <span className="font-semibold">{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">+</button>
            </div>
            
            <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 font-semibold ml-4">
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary Sidebar */}
      <div className="bg-gray-50 p-6 rounded-lg shadow h-fit lg:w-80">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">Order Summary</h2>
        <div className="flex justify-between mb-6 text-lg font-semibold">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <Link to="/checkout" className="block w-full">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded transition">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}