import { useContext} from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { StoreItem } from "../components/StoreItem";

export function Store(){
    const {items} = useContext(ShoppingCartContext)

    return (
      <div className="section">
        <h1>Juegos de mesa</h1>
        <div className="store-container">
          {items.map(item => (
            <div className="card" key={item.id}>
              <StoreItem
                {...item}
                attributes={item.attributes[1].values[0].name}
              />
            </div>
          ))}
        </div>
      </div>
    );
}