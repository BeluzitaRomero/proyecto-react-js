import "./Form.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { getFirestore } from "../../firebase/index";
import { collection, addDoc, doc, updateDoc } from "@firebase/firestore";
import swal from "sweetalert";

export function Form({ total }) {
  const { cart, setCart } = useCartContext();

  const [client, setClient] = useState({
    name: "",
    email: "",
    tel: "",
    tarjeta: "",
  });

  const handleClientOnChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    const order = {
      cliente: client,
      items: cart,
      total: total,
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => {
      swal(`Tu codigo de referencia de compra es: ${id}. 
    Gracias por elegir Tienda Moon ♥`);
    });

    // update stock
    cart.forEach((item) => {
      const docRef = doc(db, "items", item.id);
      updateDoc(docRef, { stock: item.stock - item.cantidad });
    });

    setClient({ name: "", email: "", tel: "" });
    setCart([]);
  };

  return (
    <>
      <form id="my-form" onSubmit={finalizarCompra}>
        <div className="grid-form">
          <input
            placeholder="Nombre"
            type="text"
            name="name"
            value={client.name}
            onChange={handleClientOnChange}
            required
          />

          <input
            placeholder="Email@email.com"
            type="email"
            name="email"
            value={client.email}
            onChange={handleClientOnChange}
            required
          />

          <input
            placeholder="Telefono"
            type="number"
            name="tel"
            value={client.tel}
            onChange={handleClientOnChange}
            required
          />

          <input
            placeholder="Numero de tarjeta"
            type="number"
            name="tarjeta"
            value={client.tarjeta}
            onChange={handleClientOnChange}
            required
          />
          <label>Debito</label>
          <input
            type="radio"
            name="card"
            value={client.card}
            onChange={handleClientOnChange}
            required
          />
          <label>Credito</label>
          <input
            type="radio"
            name="card"
            value={client.card}
            onChange={handleClientOnChange}
            required
          />
        </div>

        <Button
          type="submit"
          disabled={!(client.name && client.email && client.tel)}
        >
          Finalizar compra
        </Button>
      </form>
    </>
  );
}
