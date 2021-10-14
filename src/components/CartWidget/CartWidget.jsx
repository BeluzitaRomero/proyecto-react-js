import "./CartWidget.css";
import cart from "../../img/shoppingCart.png";

export const CartWidet = (props) => {
  return (
    <div className="cartDiv">
      <img
        className="cart"
        src={cart}
        alt="shooping cart"
        width="60"
        height="60"
      />
    </div>
  );
};
