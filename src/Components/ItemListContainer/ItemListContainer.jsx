import './ItemListContainer.css';
import { useState , useEffect} from "react";
import ItemList from '../ItemList/ItemList';
import {getItems} from '../Data/AsyncMock';

function ItemListContainer() {

  const[Items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((productos) => {
          setItems(productos);
  });
  },[]);


    return (
        <div className="ItemListContainer">
        <ItemList items={Items}/>
        </div>
    );
}

export default ItemListContainer