import { useEffect, useState } from "react"
import axios from "axios"
import { StoreItem } from "../components/StoreItem";

export function Store(){
    const [items, setItems] = useState([]);
    const URL =
      "https://api.mercadolibre.com/sites/MLA/search?q=juegos-de-mesa+tablero";
    

    useEffect(()=>{
        const fetchData = async () => {
        const result = await axios.get(URL).catch(err=> console.log(err));
        setItems(result.data.results);
    }
      fetchData();
}, [URL])

    return (
      <div className="section">
        <h1>Juegos de mesa</h1>
        <div className="store-container">
          {items.map(item => (
            <div className="card" key={item.id}>
              <StoreItem {...item} />
            </div>
          ))}
        </div>
      </div>
    );
}