import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      {/* Global Layout Wrapper */}
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Route */}
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {/* Simple Footer */}
        <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm mt-auto">
          <p>&copy; {new Date().getFullYear()} ShopZone SPA. Built with React Router & Context API.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}