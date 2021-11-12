import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";

export function ItemDetail({ item }) {
  const { addItem } = useCartContext();

  const [cartButton, setCartButton] = useState(true);

  const [quantity, setQuantity] = useState(null);

  const onAdd = (quantity) => {
    if (quantity >= 1) {
      setQuantity(quantity);
      setCartButton(false);
      addItem(item, quantity);
    }
  };

  return (
    <div className="item-detail">
      <div className="item-detail-img">
        <img className="detail-img" src={item.img} alt={item.name} />
      </div>
      <div className="detalle">
        <h1>{item.name}</h1>
        <p className="descripcion">{item.descripcion}</p>
        <p>${item.precio}</p>
        <p>(Stock:{item.stock})</p>
        {cartButton ? (
          <ItemCount inStock={item.stock} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <Button onClick={() => onAdd({ addItem })}>
              Ver {quantity} productos en el carrito
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
