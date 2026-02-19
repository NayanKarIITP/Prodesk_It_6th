// import React, { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// export default function CartProvider({ children }) {

//   const [cart, setCart] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // ADD ITEM
//   const addToCart = (product) => {
//     setCart(prev => {
//       const existing = prev.find(item => item.id === product.id);

//       if (existing) {
//         return prev.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   // INCREASE
//   const increaseQty = (id) => {
//     setCart(prev =>
//       prev.map(item =>
//         item.id === id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   // DECREASE
//   const decreaseQty = (id) => {
//     setCart(prev =>
//       prev
//         .map(item =>
//           item.id === id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter(item => item.quantity > 0)
//     );
//   };

//   // REMOVE
//   const removeItem = (id) => {
//     setCart(prev => prev.filter(item => item.id !== id));
//   };

//   // TOTAL
//   const totalPrice = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider value={{
//       cart,
//       addToCart,
//       increaseQty,
//       decreaseQty,
//       removeItem,
//       totalPrice
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// }




import React, { createContext, useEffect, useState, useMemo } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // Initialize from localStorage safely
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("shopzone_cart");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      return [];
    }
  });

  // Sync with localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("shopzone_cart", JSON.stringify(cart));
  }, [cart]);

  // ADD ITEM
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // INCREASE
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // DECREASE (Includes automatic removal if quantity drops below 1)
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // TOTAL PRICE (Wrapped in useMemo for performance optimization)
  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}