import { Item } from "../Item/Item";

export function ItemList(items) {
  const item = items.items;

  return (
    <Item
      id={item.id}
      name={item.name}
      descripcion={item.descripcion}
      precio={item.precio}
      img={item.img}
    />
  );
}
