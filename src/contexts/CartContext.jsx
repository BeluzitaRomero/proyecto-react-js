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

  const removeItem = (item) => {
    //que busque el producto cuando tiene cantidad mayor a 1 y el id,
    // por si otros tambien tienen mas de 1 y que no me encuentre el incorrecto
    const eliminarCantidad = cart.find(
      (prod) => prod.cantidad > 1 && prod.id === item.id
    );

    if (eliminarCantidad) {
      eliminarCantidad.cantidad = eliminarCantidad.cantidad - 1;
      const nuevoItem = { item, cantidad: eliminarCantidad.cantidad };
      console.log(nuevoItem);

      setCart([...cart]);
      console.log("entro por el if");

    } else {
      const eliminarProducto = cart.find(
        (p) => p.id === item.id && p.cantidad === 1
      );
      console.log(eliminarProducto, "este es refresh cart por else");
      const index = cart.indexOf(eliminarProducto);
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
