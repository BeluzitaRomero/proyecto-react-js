import "./CartWidget.css";
import cartFull from "../../assets/shoppingCart.png";
import empty from "../../assets/cart-vacio-color.png";
import { useCartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export const CartWidet = (props) => {
  const { cart } = useCartContext();


  const totalProductos = cart.reduce(
    (counter, item) => counter + item.cantidad,
    0
  );
  console.log(totalProductos, "total productos");
  return (
    <div className="cart-container">
      {cart.length ? (
        <>
          <p className="productos-carrito">{totalProductos}</p>
          <Link to="/cart">
            <img
              className="cart"
              src={cartFull}
              alt="shooping cart"
              width="60"
              height="60"
            />
          </Link>
        </>
      ) : (
        <Link to="/cart">
          <img
            className="cart"
            src={empty}
            alt="shooping cart"
            width="60"
            height="60"
          />
        </Link>
      )}
    </div>
  );
};
