import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState , useEffect} from "react";
import { getItems } from '../Data/AsyncMock';

const ItemDetailContainer = (props) => {

    const [Item, setItem] = useState({});

    useEffect(() => {
        getItems().then( (datos) => {
        setItem(datos[props.index]);})
    },[]);

  return (
    <div className="ItemDetailContainer">
        <ItemDetail title={Item.title} price={Item.price} description={Item.description} url={Item.pictureUrl}/>
    </div>
  )
}

export default ItemDetailContainer