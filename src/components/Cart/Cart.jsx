import { Button } from "react-bootstrap";
import "./Cart.css";
import { useCartContext } from "../../contexts/CartContext";
import { CartItem } from "../CartItem/CartItem";

export function Cart() {
  const { cart, clear, removeItem } = useCartContext();

  console.log(cart);

  return (
    <div className="cart">
      <h1 className="titulo">Productos en carrito</h1>
      <div className="productos-en-carrito">
        {cart.length
          ? cart.map((inCart) => (
              <CartItem key={inCart.id} item={inCart} remove={removeItem} />
            ))
          : "vacio"}
      </div>
      <Button onClick={clear}>Vaciar carrito</Button>
    </div>
  );
}
