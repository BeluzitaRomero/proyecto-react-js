import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";

export function ItemDetail({ item }) {
  const { addItem , cart} = useCartContext();

  const [cartButton, setCartButton] = useState(true);

  const [quantity, setQuantity] = useState(null);

  const onAdd = (quantity) => {
    if (quantity >= 1) {
      setQuantity(quantity);
      setCartButton(false);
      addItem(item, quantity);
    }
  };

  const isInCart = cart.find(p => p.id === item.id);
  const update= ()=> {
    if(isInCart){
    const updateStock = isInCart.stock - isInCart.cantidad 
    //muestra la cantidad de stock restante si se confirma la compra
    return updateStock;
    }
    
  }
 
  
  return (
    <div className="item-detail">
      <div className="item-detail-img">
        <img className="detail-img" src={item.img} alt={item.name} />
      </div>
      <div className="detalle">
        <h1>{item.name}</h1>
        <p className="descripcion">{item.descripcion}</p>
        <p>${item.precio}</p>
        {isInCart ? (<p>(Stock:{update()})</p>) 
        : (<p>(Stock:{item.stock})</p>)}
        
        {cartButton ? (
          //muestra el stock disponible si se confirma la compra
          <ItemCount inStock={item.stock} updateStock={update()} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <Button>Ver {quantity} productos en el carrito</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
