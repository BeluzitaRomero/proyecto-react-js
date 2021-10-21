import { Card } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({ id, name, precio, descripcion, img }) => {
  return (
    <Card key={id} style={{ width: "16rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <p>${precio}</p>
        <ItemCount stock={10} initial={1} />
        {/* <Button variant="primary">Agregar al carrito</Button> */}
      </Card.Body>
    </Card>
  );
};
