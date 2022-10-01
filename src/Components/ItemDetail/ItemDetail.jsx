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
    <div className="containerDetail">

      <div className='itemDetailContainer'>

          <div className="image">
              <img src={Item.pictureUrl} alt="" />
          </div>

          <div className="description">
                <div className='category'><p>Categoria {Item.categoria}</p></div>
                <div className="title"><h1>{Item.title}</h1></div>
                <div className='price'><h2>${Item.price}</h2></div>
                <div className='cuotas'><p>Hasta 12 cuotas sin interes</p></div>
                <div className='itemCount'> 
                  <ItemCount title={Item.title}  onAdd={onAdd} buttonChange={buttonChange}/>
                </div>  
                <div className='compraSegura'><p>Compra Protegida, recibí el producto que esperabas o te devolvemos tu dinero.</p></div>
          </div>
      </div>
      <div className='descriptionContainer'>
        <div className='lineaGris'></div>
        <div className='descriptionBox'>
          <h1>Descripcion</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto non, consectetur laboriosam rerum facilis sit eligendi magnam tempora cupiditate odio voluptate sint ex nihil commodi deserunt libero nemo unde voluptatum.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae enim veritatis delectus, totam vitae tempora ratione. Fugit eaque impedit alias incidunt, vel eveniet facilis aliquam earum tenetur officia aspernatur sequi!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis omnis doloribus dolor, exercitationem asperiores natus fugit corrupti repellendus ducimus, numquam rem modi illo sed nisi similique voluptate inventore veniam dolorem!</p>
        </div>
      </div>
    </div>  
  )
}

export default ItemDetail

