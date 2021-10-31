import "./ItemCount.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

export function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  const addItem = () => {
    if (count < stock) setCount(count + 1);
    console.log(stock);
  };
  const decreaseItem = () => {
    if (count > initial) setCount(count - 1);
    console.log(initial);
  };

  return (
    <>
      <div className="seleccion">
        <div className="cantidad-seleccionada">
          <Button variant="primary" onClick={decreaseItem}>
            -
          </Button>
          <p className="producto-seleccionado">{count}</p>
          <Button variant="primary" className="addBtn" onClick={addItem}>
            +
          </Button>
        </div>

        <Button variant="primary">Agregar producto</Button>
      </div>
    </>
  );
}
