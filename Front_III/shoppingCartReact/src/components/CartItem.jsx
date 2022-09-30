import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import { formatCurrency } from "../util/formatCurency";

export const CartItem = ({ id, quantity }) => {

  const { items, cartItems, removeFromCart } = useContext(ShoppingCartContext);

  const item = items.find(i=> i.id===id);
  if(item == null) return null;


  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td className="td-title">
        <h5>{item.title}</h5>
        <h5>${formatCurrency(item.price)}/unidad</h5>
        <span>x{quantity}</span>
      </td>
      <td>
        <div className="price-per-product">
          <span>${formatCurrency(quantity * item.price)}</span>
          <button id="remove-item" onClick={() => removeFromCart(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              fill="#ffffff"
            >
              <path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21ZM7 6v13h10V6Zm2 10q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9Zm4 0q0 .425.288.712.287.288.712.288t.713-.288Q15 16.425 15 16V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9ZM7 6v13V6Z" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  ); 
};
