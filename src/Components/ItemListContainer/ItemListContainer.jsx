import './ItemListContainer.css';
import { useState , useEffect} from "react";
import ItemList from '../ItemList/ItemList';
import {getItems} from '../Data/AsyncMock';
import {useParams} from 'react-router-dom';

function ItemListContainer() {

  const[Items, setItems] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    getItems().then((productos) => {
      if(category ){
        setItems(productos.filter(item => item.categoria === category));
      }else{
          setItems(productos);}
  });
  },[category]);


    return (
        <div className="ItemListContainer">
        <ItemList items={Items}/>
        </div>
    );
}

export default ItemListContainer