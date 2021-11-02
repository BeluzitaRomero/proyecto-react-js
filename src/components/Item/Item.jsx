import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      <Card key={item.id} style={{ width: "16rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <p>${item.precio}</p>

          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};
