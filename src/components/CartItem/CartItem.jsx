import { Card, Button } from "react-bootstrap";

export const CartItem = ({ item, remove }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <p>En carrito:{item.quantity}</p>
          <Card.Text>{item.descripcion}</Card.Text>
          <Button id={`btn${item.id}`} variant="primary" onClick={remove}>
            Eliminar
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
