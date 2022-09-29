import { createContext, useState } from "react";
export const ShoppingCartContext = createContext();


export function ShoppingCartProvider({children}){

  const [cartItems, setCartItems]= useState([]);
  const [isOpen, setIsOpen] = useState(false);


  const cartQuantity = cartItems.reduce((quantity, citem)=>
    citem.quantity + quantity, 0)

  function getItemQuantity(id) {
    return cartItems.find(citem => citem.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id){
    setCartItems(prev=>{
      if(prev.find(citem=> citem.id===id) == null){
        return [...prev, { id, quantity: 1 }];
      }
      else {
        return prev.map(citem=>{
          if(citem.id === id){
            return { ...citem, quantity: citem.quantity + 1 };
          } else {
            return citem;
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id) {
    setCartItems(prev => {
      if (prev.find(citem => citem.id)?.quantity == 1) {
        return prev.filter(citem => {
          citem.id !== id;
        });
      } else {
        return prev.map(citem => {
          if (citem.id === id) {
            return { ...citem, quantity: citem.quantity - 1 };
          } else {
            return citem;
          }
        });
      }
    });
  }

  function removeFromCart(id){
    setCartItems(prevCartItems=>{
      return prevCartItems.filter(citem=> citem.id !== id)
    })
  }

  
  function openCart(){
    setIsOpen(true)
  }
  function closeCart(){
    setIsOpen(false)
  }
  
    return (
      <ShoppingCartContext.Provider
        value={{
          openCart,
          closeCart,
          cartItems,
          cartQuantity,
          getItemQuantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    ); 
}
