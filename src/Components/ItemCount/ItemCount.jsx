import { useState } from 'react';
import './ItemCount.css'

const ItemCount = (props) => {
    const [count, setcount] = useState(1);
    const add = ()=>{
      setcount(count+1);
    }
    const remove = ()=>{
      if(count >1){
        setcount(count-1);
      }
    }

  return (

    <div className="item-count">
        <div className="item-count__text">
            <p>{props.title}</p>
        </div>
        <div className="item-count__box">
            <div className="item-count__box__content">
                <button onClick={add}>+</button>
                <p>{count}</p>
                <button onClick={remove}>-</button>
            </div>
        </div>
        <div className="item-count__button">
            <button onClick={()=>props.onAdd(count)}>AGREGAR AL CARRITO</button>
        </div>
    </div>
  )
}

export default ItemCount