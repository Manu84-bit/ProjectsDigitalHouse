import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"

export const ProductDetails = ({ id, title, price, available_quantity, condition}) => {
  const { closeDetail} = useContext(ShoppingCartContext);

  return (
    <div className="modal">
      <h4>Product Details</h4>

      <div className="product-content">
        <h2>{title}</h2>
        <h2>{price}</h2>
        <h2>{available_quantity}</h2>
        <h2>{condition}</h2>
      </div>
      <button id="close-detail" onClick={()=>closeDetail(id)}>
        x
      </button>
    </div>
  );
};