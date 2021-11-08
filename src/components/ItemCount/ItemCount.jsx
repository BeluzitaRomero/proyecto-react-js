import "./ItemCount.css";
import { Button } from "react-bootstrap";

export function ItemCount({ decreaseItem, addItem, count, toCart }) {
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

        <Button id="btn-agregar" variant="primary" onClick={toCart}>
          Agregar producto
        </Button>
      </div>
    </>
  );
}
