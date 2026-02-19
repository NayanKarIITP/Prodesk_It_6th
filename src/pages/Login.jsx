import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Look for the "from" location in state, default to "/"
  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    login();
    // Send them back to where they were trying to go
    navigate(from, { replace: true });
  };

  return (
    <div className="flex justify-center items-center mt-32">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center max-w-sm w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
        <p className="text-gray-500 mb-8">Please log in to continue.</p>
        <button 
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition"
        >
          Login as Guest
        </button>
      </div>
    </div>
  );
}