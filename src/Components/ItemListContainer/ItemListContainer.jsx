import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Item/Item';
import { useState , useEffect} from "react";
import ItemList from '../ItemList/ItemList';



function ItemListContainer(props) {

  const[Items, setItems] = useState([]);

  const getItem = () => {  
    const data = new Promise((resolve, reject) => {
      resolve (ItemList);
    }).then((datos) => {
        setTimeout(() => {
            setItems(datos);
        },2000);
    });
  }

  useEffect(() => {

    getItem();

  },[]);


    return (
        <div className="ItemListContainer">

          <ItemCount Addcount={props.Addcount} count= {props.count} onAddCart={props.onAddCart}  removeCount={props.removeCount} stock={props.stock}/>
          
          {Items.map(item =>  <Item title={item.name} description={item.description} url={item.pictureUrl} key={item.id} />  )}


        </div>
    );
}

export default ItemListContainer