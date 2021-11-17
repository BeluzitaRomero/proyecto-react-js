import "./ItemList.css";
import { Item } from "../Item/Item";
import flying from "../../assets/flying.png";

export function ItemList({ items }) {
  return (
    <div className="list-container">
      {items.length ? (
        items.map((items) => <Item item={items} key={items.id} />)
      ) : (
        <div className="item-list">
          <img
            className="img-list-carga"
            src={flying}
            alt="abrazo astronauta"
          />
          <h2>Buscando productos de otro planeta!</h2>
        </div>
      )}
    </div>
  );
}
