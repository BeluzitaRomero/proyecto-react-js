import "./ItemListContainer.css";
import Productos from "../../../src/Productos.json";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
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
      <h1>SALE!</h1>
      <div className="listaProductos">
        {productos.length
          ? productos.map((producto) => (
              <ItemList items={producto} key={producto.id} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
};
