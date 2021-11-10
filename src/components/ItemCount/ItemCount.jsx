import "./ItemCount.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

export function ItemCount({ inStock, onAdd }) {
  const [stock, setStock] = useState(inStock);

  const [count, setCount] = useState(0);

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

  return (
    <>
      <div className="seleccion">
        <div className="cantidad-seleccionada">
          <Button variant="primary" onClick={() => decreaseItem()}>
            -
          </Button>
          <p className="producto-seleccionado">{count}</p>
          <Button
            variant="primary"
            className="addBtn"
            onClick={() => addItem()}
          >
            +
          </Button>
        </div>

        <Button
          id="btn-agregar"
          variant="primary"
          onClick={() => {
            onAdd(count);
          }}
        >
          Agregar al carrito
        </Button>
      </div>
    </>
  );
}
