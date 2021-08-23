import React, { createContext, useState } from "react";
export const ShoppingCart = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <ShoppingCart.Provider value={{ cart, setCart }}>
      {children}
    </ShoppingCart.Provider>
  );
};

export default CartProvider;
