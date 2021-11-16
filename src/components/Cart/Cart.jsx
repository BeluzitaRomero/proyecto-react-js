import "./Cart.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <CartItem
                key={inCart.id}
                item={inCart}
                remove={() => removeItem(inCart)}
                total={inCart.precio * inCart.cantidad}
              />
            ))
          : "Tu carrito está vacío! :("}
      </div>
      {cart.length ? (
        <Button onClick={clear}>Vaciar carrito</Button>
      ) : (
        <Link to="/">
          <Button>Volver a seccion de compra</Button>
        </Link>
      )}
    </div>
  );
}
