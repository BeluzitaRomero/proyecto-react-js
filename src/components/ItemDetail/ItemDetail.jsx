import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ItemDetail({ details }) {
  const [cartButton, setCartButton] = useState(true);

  const [quantityToAdd, setQuantityToAdd] = useState(null);

  const onAdd = (quantityToAdd) => {
    if (quantityToAdd >= 1) {
      setQuantityToAdd(quantityToAdd);
      setCartButton(false);
    }
  };

  return (
    <div className="item-detail">
      <div className="item-detail-img">
        <img className="detail-img" src={details.img} alt={details.name} />
      </div>
      <div className="detalle">
        <h1>{details.name}</h1>
        <p className="descripcion">{details.descripcion}</p>
        <p>${details.precio}</p>
        <p>(Stock:{details.stock})</p>
        {cartButton ? (
          <ItemCount inStock={details.stock} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <Button>Ver {quantityToAdd} productos en el carrito</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
