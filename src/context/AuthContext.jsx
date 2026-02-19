// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {

//   const [user, setUser] = useState(
//     localStorage.getItem("user") === "true"
//   );

//   const login = () => {
//     setUser(true);
//     localStorage.setItem("user", "true");
//   };

//   const logout = () => {
//     setUser(false);
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }




import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Lazy initialization: reads from localStorage ONLY on the initial render
  const [user, setUser] = useState(() => {
    return localStorage.getItem("shopzone_user") === "true";
  });

  const login = () => {
    setUser(true);
    localStorage.setItem("shopzone_user", "true");
  };

  const logout = () => {
    setUser(false);
    localStorage.removeItem("shopzone_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}