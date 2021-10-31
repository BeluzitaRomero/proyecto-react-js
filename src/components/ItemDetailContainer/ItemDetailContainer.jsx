import Productos from "../../../src/Productos.json";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState();

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
    getItemDetail(Productos[0])
      .then((result) => setItemDetail(result))
      .catch((err) => console.log(err));
  }, []);

  console.log(itemDetail);

  return (
    <div className="itemDetailContainer">
      {itemDetail ? <ItemDetail details={itemDetail} /> : "cargando..."}
    </div>
  );
}
