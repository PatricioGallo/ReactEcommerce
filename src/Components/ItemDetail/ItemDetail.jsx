import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState , useEffect} from "react";
const ItemDetail = (props) => {
  const [count, setcount]= useState(0);
  const onAdd = (dato)=>{
    setcount(dato);
  }
  return (
    <>
        <div className="image">
            <img src="" alt="" />
        </div>

        <div className="description">
            <div className="title"><h1>{props.title}</h1></div>
            <div className='price'><h2>${props.price}</h2></div>
            <div className='description_content'><p>{props.description}</p></div>
            <ItemCount title={props.title}  onAdd={onAdd}/>
            <p>{count}</p>
        </div>
    </>
  )
}

export default ItemDetail