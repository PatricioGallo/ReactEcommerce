import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState , useEffect} from "react";
const ItemDetail = (props) => {
  const [count, setcount] = useState(0);
  const add = ()=>{
    setcount(count+1);
  }
  const remove = ()=>{
    if(count >1){
      setcount(count-1);
    }
  }
  const onAdd = ()=>{

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
            <ItemCount title={props.title} count={count} add={add} remove={remove} onAdd={onAdd}/>
        </div>
    </>
  )
}

export default ItemDetail