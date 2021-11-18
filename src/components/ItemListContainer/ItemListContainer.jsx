import "./ItemListContainer.css";
// import Productos from "../../../src/Productos.json";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router";
import { getDocs, getFirestore } from "@firebase/firestore";
import { collection, query, where } from "firebase/firestore";

export const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let q = query(collection(db, "items"));

    if (!categoriaId) {
      getDocs(q).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => doc.data()));
      });
    } else {
      const q = query(
        collection(db, "items"),
        where("categoria", "==", categoriaId)
      );
      getDocs(q).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [categoriaId]);

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
