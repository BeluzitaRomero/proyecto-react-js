import "./ItemCount.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

export function ItemCount(props) {
  const [count, setCount] = useState(0);

  const addItem = () => {
    if (count < props.stock) setCount(count + 1);
    console.log(props.stock);
  };
  const decreaseItem = () => {
    if (count >= props.initial) setCount(count - 1);
    console.log(props.initial);
  };

  return (
    <div className="itemCount">
      <div className="seleccion">
        <div className="cantidad-seleccionada">
          <Button variant="primary" onClick={decreaseItem}>
            -
          </Button>
          <p className="producto-seleccionado">Producto</p>
          <Button variant="primary" className="addBtn" onClick={addItem}>
            +
          </Button>
        </div>
        <p>{count}</p>

        <Button variant="primary">Agregar producto</Button>
      </div>
    </div>
  );
}
