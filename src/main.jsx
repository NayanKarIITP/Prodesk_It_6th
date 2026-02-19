import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; // Make sure your Tailwind directives are in here!
import App from "./App";
import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode is a best practice to catch hidden bugs in React apps
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);