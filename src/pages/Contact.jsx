import React from "react";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea 
            placeholder="How can we help you?" 
            rows="5"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition">
          Send Message
        </button>
      </form>
    </div>
  );
}