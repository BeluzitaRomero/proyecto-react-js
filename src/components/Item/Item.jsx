import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Item = ({ item }) => {
  return (
    <Card key={item.imgid} style={{ width: "16rem" }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.descripcion}</Card.Text>
        <p>${item.precio}</p>

        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};
