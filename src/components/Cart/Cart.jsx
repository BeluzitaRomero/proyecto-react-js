import "./Cart.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import { CartItem } from "../CartItem/CartItem";
import globos from "../../assets/globos.png";

export function Cart() {
  const { cart, clear, removeItem, removeProduct } = useCartContext();

  console.log(cart);

  const totalAPagar = cart.reduce(
    (counter, item) => counter + item.precio * item.cantidad,
    0
  );

  return (
    <div className="cart">
      <h1 className="titulo">Productos en carrito</h1>
      <div className="productos-en-carrito">
        {cart.length ? (
          cart.map((inCart) => (
            <CartItem
              key={inCart.id}
              item={inCart}
              removeItem={() => removeItem(inCart)}
              removeProd={() => removeProduct(inCart)}
              total={inCart.precio * inCart.cantidad}
            />
          ))
        ) : (
          <div>
            <img
              className="img-empty"
              src={globos}
              alt="astronauta con globos"
            />
            <h2>Tu carrito está vacío 😕</h2>
            <p>¡Te esperamos nuevamente por nuestra seccion de compras! 🚀</p>
          </div>
        )}
      </div>
      <div>
        <p className="total-a-pagar">Total a pagar: ${totalAPagar}</p>
        <Button>Finalizar compra</Button>
      </div>

      {cart.length ? (
        <Button className="btn-clear" onClick={clear}>
          Vaciar carrito
        </Button>
      ) : (
        <Link to="/">
          <Button>Volver a seccion de compra</Button>
        </Link>
      )}
    </div>
  );
}
