import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    //agregar cantidad en producto
    const itemQuantity = { ...item, cantidad: quantity };

    //corroborar con some si el producto se encuentra en cart
    const isInCart = cart.some((p) => p.id === item.id);
    if (!isInCart) {
      //se agrega el producto completo
      setCart([...cart, itemQuantity]);
      console.log(cart);
    } else {
      //si encuentra el producto, se suma la cantidad
      const addQuantity = cart.find((prod) => prod.id === item.id);
      //guardo el prod para poder acceder a cantidad y sumar

      addQuantity.cantidad = addQuantity.cantidad + quantity;
      console.log(addQuantity, "este es quantity");
      setCart([...cart]);
    }
  };

  //ESTA NO ESTA ANDANDO MUY BIEN-----!!!!!!!!!!!!!! No me filtra por id, name, etc.

  const removeItem = (item) => {
    const refreshProd = cart.find((prod) => prod.cantidad > 1);
    console.log(refreshProd, "este es refresh");

    if (refreshProd) {
      refreshProd.cantidad = refreshProd.cantidad - 1;
      const nuevoItem = { item, cantidad: refreshProd.cantidad };
      console.log(nuevoItem);

      setCart([...cart]);

      console.log("entro por el if");
    } else {
      //No le llegan los atributos, por eso no esta encontrando por find y no se puede encontrar el indice para borrar
      const refreshCart = cart.find((p) => p.id === item.id);
      console.log(refreshCart, "este es refresh cart por else");
      const index = cart.indexOf(refreshCart);
      cart.splice(index, 1);

      setCart([...cart]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}
