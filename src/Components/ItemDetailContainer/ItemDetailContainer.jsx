import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemList from '../ItemList/ItemList';
import { useState , useEffect} from "react";

const ItemDetailContainer = (props) => {

    const [Item, setItem] = useState({});

    const getItems = ()=> {
        const data = new Promise((resolve, reject) => {
            resolve(ItemList);
        }).then((datos) =>{
            setTimeout(() =>{
                setItem(datos[props.index]);
            },2000);
        })
    }

    useEffect(() => {
        getItems();
    },[]);

  return (
    <div className="ItemDetailContainer">
        <ItemDetail title={Item.title} price={Item.price} description={Item.description} url={Item.pictureUrl}/>
    </div>
  )
}

export default ItemDetailContainer