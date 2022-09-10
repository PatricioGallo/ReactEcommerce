import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState , useEffect} from "react";
import { getItems } from '../Data/AsyncMock';
import { useParams } from 'react-router-dom';
const ItemDetailContainer = (props) => {

    const [Item, setItem] = useState({});
    const { idProduct} = useParams();

    useEffect(() => {
        getItems().then( (datos) => {
        setItem(datos.find( item => item.id === parseInt(idProduct)));
      })
    },[idProduct]);

  return (
    <div className="ItemDetailContainer">
        <ItemDetail title={Item.title} price={Item.price} description={Item.description} url={Item.pictureUrl}/>
    </div>
  )
}

export default ItemDetailContainer