import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import { formatCurrency } from "../util/formatCurency";

export const CartItem = ({ id, quantity }) => {

  const { items, removeFromCart } = useContext(ShoppingCartContext);

  const item = items.find(i=> i.id===id);
  if(item == null) return null;


  return (
    <table className="stack-cart-table">
      <tbody>
        <tr>
          <td>
            <img src={item.thumbnail} alt={item.title} />
          </td>
          <td className="td-title">
            <h5>{item.title}</h5>
            <span>x{quantity}</span>
            <h5>${formatCurrency(item.price)}</h5>
          </td>
          <td>
            <div className="price-per-product">
                <span>${formatCurrency(quantity * item.price)}</span>
                <button id="remove-item" onClick={() => removeFromCart(id)}>Eliminar</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  ); 
};
