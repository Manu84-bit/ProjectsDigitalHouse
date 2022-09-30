import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
import { CartItem } from "../components/CartItem";
import { formatCurrency } from "../util/formatCurency";

export const ShoppingCart =()=>{
     const {items, closeCart, cartItems} = useContext(ShoppingCartContext)

    return (
      <div className="modal">
        <div className="cart-content">
          <div className="cart-header">
            <h1>Carrito de Compras</h1>
            <button id="close-cart" onClick={closeCart}>
              X
            </button>
          </div>
          <div className="cart-body">
            <table className="stack-cart-table">
              <tbody>
              {cartItems.map(item => (
                <CartItem key={item.id} {...item} />)
                )}
              </tbody>
             </table>
             {cartItems.length>0 && <div className="total-price">
                <h3>Total: ${formatCurrency(cartItems.reduce((total, citem) =>{
                  const item = items.find(i=> i.id == citem.id)
                 return total + (item?.price || 0) * citem.quantity;
                }, 0))}</h3>
                <button className="total-price buy-btn">Comprar</button>
              </div>}
          </div>
        </div>
      </div>
    );
}