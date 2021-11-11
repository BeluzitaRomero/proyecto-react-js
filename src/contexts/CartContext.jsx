import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    if (!isInCart(item.id)) {
      setCart([...cart, item]);
      console.log(cart);
      return true;
    } else {
      return false;
    }
  };

  const isInCart = (id) => {
    const filteredCart = cart.filter((item) => item.id === id);

    const isIn = filteredCart.length === 0 ? false : true;

    return isIn;
  };

  const removeItem = (item) => {
    const refreshProd = cart.filter((prod) => prod.id !== item.id);
    setCart(refreshProd);
    console.log(cart, "producto eliminado");
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, isInCart, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}
