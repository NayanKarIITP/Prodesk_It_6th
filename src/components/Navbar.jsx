// import React from "react";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// export default function Navbar() {
//   const { cart } = useContext(CartContext);

//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/shop">Shop</Link>
//       <Link to="/cart">Cart ({cart.reduce((acc,i)=>acc+i.quantity,0)})</Link>
//       <Link to="/checkout">Checkout</Link>
//     </nav>
//   );
// }




import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
// Importing AuthContext to handle Level 3 Fake Authentication
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext); 
  const navigate = useNavigate();

  // Moving the logic out of the JSX keeps the return statement cleaner
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-blue-400">
          ShopZone
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-blue-300 transition-colors">Shop</Link>
          
          {/* Cart with Notification Badge */}
          <Link to="/cart" className="relative hover:text-blue-300 transition-colors flex items-center">
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Level 3: Protected Routes & Auth UI */}
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/checkout" className="hover:text-blue-300 transition-colors">Checkout</Link>
              <button 
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm font-semibold transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm font-semibold transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}