import "./ItemListContainer.css";
import Productos from "../../../src/Productos.json";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);

  const getProductos = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encontró ningun elemento");
        }
      }, 2000);
    });

  useEffect(() => {
    getProductos(Productos)
      .then((result) => setProductos(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="itemListContainer">
      <h1>Bienvenidx a Tienda Moon</h1>
      <h2>{title}</h2>
      <div className="listaProductos">
        <ItemList items={productos} />
      </div>
    </div>
  );
};
