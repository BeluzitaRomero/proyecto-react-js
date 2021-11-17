import { Card, Button } from "react-bootstrap";
import "./CartItem.css";

export const CartItem = ({ item, total, removeItem, removeProd }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <p className="card-text">Precio: ${item.precio}</p>
          <Card.Text>{item.descripcion}</Card.Text>
          <p className="card-text">En carrito:{item.cantidad}</p>
          <p className="card-text">Total: ${total}</p>
          <Button
            id={`btn-remove-${item.id}`}
            variant="primary"
            onClick={removeItem}
          >
            Eliminar cantidad
          </Button>
          <Button
            id={`rem-prod-${item.id}`}
            variant="primary"
            onClick={removeProd}
          >
            Eliminar producto
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
