import { formatCurrency } from "../util/formatCurency";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { ProductDetails } from "./ProductDetails";

export function StoreItem({
  id,
  title,
  price,
  thumbnail,
  available_quantity,
  condition,
  attributes
}) {


  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useContext(ShoppingCartContext);


  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const quantity = getItemQuantity(id);

  return (
    <>
      <div className="info">
        <img src={thumbnail} alt={title} />{" "}
        <button onClick={() => setIsOpenDetail(true)}>Ver detalle</button>
      </div>
      {isOpenDetail && 
      <ProductDetails title={title} price={formatCurrency(price)} thumbnail={thumbnail} condition={condition} available_quantity={available_quantity} closeProductDetail={()=>setIsOpenDetail(false)} marca={attributes}/>}
      <h4>{title}</h4>
      <h5>${formatCurrency(price)}</h5>
      <div className="card-btns">
        {quantity < 1 ? (
          <button
            id="add-btn"
            onClick={() => {
              increaseCartQuantity(id);
            }}
          >
            + Agregar al carro
          </button>
        ) : (
          <>
            <div className="cart-btns">
              <button onClick={() => decreaseCartQuantity(id)}>-</button>
              <span>
                {" "}
                <span className="big-font">{quantity} </span>en el carro{" "}
              </span>
              <button
                onClick={() => {
                  if (quantity < available_quantity) increaseCartQuantity(id);
                  if(quantity>= available_quantity) alert("Este producto tiene solo " + available_quantity + " unidades disponibles.")
                }}
              >
                {" "}
                +
              </button>
            </div>
            <button id="btn-remove" onClick={() => removeFromCart(id)}>
              Remover todos
            </button>
          </>
        )}
      </div>
    </>
  );
}
