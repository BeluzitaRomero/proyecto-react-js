import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ItemDetail({ details }) {
  const [stock, setStock] = useState(details.stock);

  const [count, setCount] = useState(0);

  const [flag, setflag] = useState(true);

  const addItem = () => {
    if (stock > 0) {
      setCount(count + 1);
      setStock(stock - 1);
    } else {
      setStock(0);
    }
  };
  const decreaseItem = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
      setStock(stock + 1);
    }
  };

  const toCart = (count) => {
    setflag(false);
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
        <p>(Stock:{stock})</p>
        {flag ? (
          <ItemCount
            stock={stock}
            addItem={addItem}
            decreaseItem={decreaseItem}
            count={count}
            toCart={toCart}
          />
        ) : (
          <Link to="/cart">
            <Button>Ir al carrito</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
