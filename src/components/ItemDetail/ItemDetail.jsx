import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";

export function ItemDetail({ item }) {
  const { addItem } = useCartContext();

  const [cartButton, setCartButton] = useState(true);

  const [quantityToAdd, setQuantityToAdd] = useState(null);

  const onAdd = (quantityToAdd) => {
    if (quantityToAdd >= 1) {
      setQuantityToAdd(quantityToAdd);
      setCartButton(false);
      item.quantity = quantityToAdd;
      addItem(item);
      console.log(item, "MIRAR ACA SI AGREGO CANTIDAD");
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
              Ver {quantityToAdd} productos en el carrito
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
