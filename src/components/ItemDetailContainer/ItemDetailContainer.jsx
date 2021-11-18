import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import cute from "../../assets/cute.png";
import { getFirestore } from "../../firebase/index";
import { doc, getDoc } from "@firebase/firestore";

export function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState();

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "items", itemId);
    getDoc(item).then((snapshot) => {
      if (snapshot.exists()) {
        setItemDetail(snapshot.data());
      }
    });
  }, [itemId]);

  return (
    <div className="itemDetailContainer">
      {itemDetail ? (
        <ItemDetail item={itemDetail} />
      ) : (
        <div className="item-detail-carga">
          <img
            className="img-detail-carga"
            src={cute}
            alt="saludo astronauta"
          />
          <h2>¡Buenisima elección!</h2>
        </div>
      )}
    </div>
  );
}
