
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../util/formatCurency";

export function StoreItem({id, title, price, thumbnail }) {

const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useContext(ShoppingCartContext);

const quantity = getItemQuantity(id)

  return (
    <>
      <div className="info">
        <img src={thumbnail} alt={title} /> <Link>Ver detalle</Link>
      </div>
      <h4>{title}</h4>
      <h5>${formatCurrency(price)}</h5>
      <div className="card-btns">
        {quantity < 1 ? (
          <button id="add-btn" onClick={() =>{
              increaseCartQuantity(id);
          } }>
            + Agregar al carro
          </button>
        ) : (
          <>
            <div className="cart-btns">
              <button onClick={() =>  decreaseCartQuantity(id)}>-</button>
              <span>
                {" "}
                <span className="big-font">{quantity} </span>en el carro{" "}
              </span>
              <button onClick={() =>{
                  increaseCartQuantity(id);
              } }> +</button>
            </div>
            <button id="btn-remove" onClick={()=>removeFromCart(id)}>
              Remover todos
            </button>
          </>
        )}
      </div>
    </>
  );
}
