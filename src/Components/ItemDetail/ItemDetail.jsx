import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const ItemDetail = ({Item,alertOn}) => {
  const {addItem} = useContext(CartContext);

  const onAdd = (dato)=>{
    addItem(Item,dato);
    alertOn();
  }


  return (
    <>
        <div className="image">
            <img src="" alt="" />
        </div>

        <div className="description">
            <div className="title"><h1>{Item.title}</h1></div>
            <div className='price'><h2>${Item.price}</h2></div>
            <div className='description_content'><p>{Item.description}</p></div>
            <ItemCount title={Item.title}  onAdd={onAdd}/>
        </div>
    </>
  )
}

export default ItemDetail