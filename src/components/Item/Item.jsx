import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ item }) => {
  return (
    <Card className="card" key={item.id} style={{ width: "14rem" }}>
      <Link to={`/item/${item.id}`}>
        <Card.Img variant="top" src={item.img} />
      </Link>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <p>${item.precio}</p>

        <Link to={`/item/${item.id}`}>
          <Button variant="primary">Ver producto</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
