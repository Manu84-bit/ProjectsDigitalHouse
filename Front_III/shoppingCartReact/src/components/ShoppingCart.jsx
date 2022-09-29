import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
import { CartItem } from "../components/CartItem";

export const ShoppingCart =()=>{
     const {closeCart, cartItems} = useContext(ShoppingCartContext)

    return (
      <div className="cart-modal">
        <div className="cart-content">
          <div className="cart-header">
            <h1>Carrito de Compras</h1>
            <button id="close-cart" onClick={closeCart}>
              X
            </button>
          </div>
          <div className="cart-body">
              {cartItems.map(item => (
                <CartItem key={item.id} {...item} />)
              )}
          </div>
        </div>
      </div>
    );
}