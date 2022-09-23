import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const ItemDetail = ({Item,alertOn}) => {

  const [buttonChange, setButtonChange] = useState(false);

  const {addItem} = useContext(CartContext);
  const onAdd = (dato)=>{
    addItem(Item,dato);
    alertOn();
    setButtonChange(true);
  }



  return (
    <div className='itemDetailContainer'>
        
        <div className="image">
            <img src={Item.pictureUrl} alt="" />
        </div>

        <div className="description">
              <div className='category'><p>Categoria {Item.categoria}</p></div>
              <div className="title"><h1>{Item.title}</h1></div>
              <div className='price'><h2>${Item.price}</h2></div>
              <div className='cuotas'><p>Hasta 12 cuotas sin interes</p></div>
              <ItemCount title={Item.title}  onAdd={onAdd} buttonChange={buttonChange}/>
              <div className='compraSegura'><p>Compra Protegida, recibí el producto que esperabas o te devolvemos tu dinero.</p></div>
        </div>
    </div>
  )
}

export default ItemDetail