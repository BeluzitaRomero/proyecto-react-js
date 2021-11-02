import "./ItemDetailContainer.css";
import Productos from "../../../src/Productos.json";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";

export function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState();

  const { itemId } = useParams();

  const getItemDetail = (data) =>
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
    getItemDetail(Productos)
      .then((result) => {
        setItemDetail(result.filter((details) => details.id === itemId));
      })
      .catch((err) => console.log(err));
  }, [itemId]);

  console.log(itemDetail, "este es ItemDetail");

  return (
    <div className="itemDetailContainer">
      {itemDetail
        ? itemDetail.map((itemDetail) => (
            <ItemDetail key={itemDetail.id} details={itemDetail} />
          ))
        : "cargando..."}
    </div>
  );
}
