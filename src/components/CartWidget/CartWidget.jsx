import "./CartWidget.css";
import cartFull from "../../assets/shoppingCart.png";
import empty from "../../assets/cart-vacio-color.png";
import { useCartContext } from "../../contexts/CartContext";

export const CartWidet = (props) => {
  const { cart } = useCartContext;
  console.log("carrito", cart);

  return (
    <div>
      {cart === undefined ? (
        <img
          className="cart"
          src={empty}
          alt="shooping cart"
          width="60"
          height="60"
        />
      ) : (
        <img
          className="cart"
          src={cartFull}
          alt="shooping cart"
          width="60"
          height="60"
        />
      )}
    </div>
  );
};
