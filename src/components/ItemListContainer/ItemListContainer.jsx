import "./ItemListContainer.css";

import { Item } from "../Item/Item";
import grisino1 from "../../img/grisino1.jpg";
import grisino2 from "../../img/grisino2.jpg";
import grisino3 from "../../img/grisino3.jpg";
import grisino4 from "../../img/grisino4.jpg";
import grisino6 from "../../img/grisino6.jpg";

export const ItemListContainer = (props) => {
  return (
    <div className="itemListContainer">
      <h1>{props.text}</h1>;
      <div className="items">
        <Item
          img={grisino1}
          title="Remera Fruti Lover"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <Item
          img={grisino2}
          title="Musculosa Pink Hearts"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <Item
          img={grisino3}
          title="Calza Red Hearts"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <Item
          img={grisino4}
          title="Remera Be Happy"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <Item
          img={grisino6}
          title="Remera Skull Beach"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
      </div>
    </div>
  );
};
