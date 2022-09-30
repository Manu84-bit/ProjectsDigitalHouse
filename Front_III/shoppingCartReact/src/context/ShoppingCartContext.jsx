import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ShoppingCartContext = createContext();
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../customHooks/useLocalStorage";

export function ShoppingCartProvider({children}){

  // const [cartItems, setCartItems]= useState([]);
  const [cartItems, setCartItems]= useLocalStorage("shopping-cart",[]);
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const URL =
    "https://api.mercadolibre.com/sites/MLA/search?q=juegos-de-mesa+tablero";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(URL).catch(err => console.log(err));
      setItems(result.data.results);
    };
    fetchData();
  }, [URL]);


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
      if (prev.find(citem => citem.id===id)?.quantity === 1) {
        return prev.filter(citem => 
          citem.id !== id
        )
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
          items,
          isOpen,
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
        {isOpen && <ShoppingCart />}
        {children}
      </ShoppingCartContext.Provider>
    ); 
}
