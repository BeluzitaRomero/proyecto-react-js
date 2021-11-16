import { Card, Button } from "react-bootstrap";
// import { useCartContext } from "../../contexts/CartContext";

export const CartItem = ({ item, total, remove }) => {
  // const { removeItem } = useCartContext;

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <p>${item.precio}</p>
          <Card.Text>{item.descripcion}</Card.Text>
          <p>En carrito:{item.cantidad}</p>
          <p>Total: ${total}</p>
          <Button
            id={`btn-remove-${item.id}`}
            variant="primary"
            onClick={remove}
          >
            Eliminar
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
