import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item';
import { useState } from "react";
import ItemList from '../ItemList/ItemList';



function ItemListContainer(props) {

  const[Items, setItems] = useState([]);

  const getData = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(ItemList);
    },5000);
  });

  getData.then((result) => {
      setItems(result);
  });

    return (
        <div className="ItemListContainer">

          {/* <ItemCount Addcount={props.Addcount} count= {props.count} onAddCart={props.onAddCart}  removeCount={props.removeCount} stock={props.stock}/> */}
          
          {Items.map(item =>  <Item title={item.title} description={item.description} url={item.pictureUrl} key={item.id} />  )}


        </div>
    );
}

export default ItemListContainer