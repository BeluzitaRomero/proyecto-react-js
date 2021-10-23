import { Item } from "../Item/Item";

export function ItemList({ items }) {
  return (
    <>
      {items.length
        ? items.map((items) => <Item item={items} key={items.id} />)
        : "Loading..."}
    </>
  );
}
