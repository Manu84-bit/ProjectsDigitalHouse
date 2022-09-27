import { useState } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../util/formatCurency";

export function StoreItem({ title, price, thumbnail }) {

  const [quantity, setQuantity] = useState(0);

  function addItems(){
    setQuantity((prev)=> prev+1);
  }

  function removeItems() {
    setQuantity(prev => prev>0? prev-1: prev);
  }

  function clearItems(){
    setQuantity(0);
  }

  return (
    <>
      <div className="info">
        <img src={thumbnail} alt={title} /> <Link>Ver detalle</Link>
      </div>
      <h4>{title}</h4>
      <h5>{formatCurrency(price)}</h5>
      <div className="card-btns">
        {quantity < 1 ? (
          <button id="add-btn" onClick={addItems}>
            + Agregar al carro
          </button>
        ) : (
          <>
            <div className="cart-btns">
              <button onClick={removeItems}>-</button>
              <span>
                {" "}
                <span className="big-font">{quantity} </span>en el carro{" "}
              </span>
              <button onClick={addItems}> +</button>
            </div>
            <button id="btn-remove" onClick={clearItems}>
              Remover todos
            </button>
          </>
        )}
      </div>
    </>
  );
}
