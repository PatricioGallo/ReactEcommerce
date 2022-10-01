import React, { useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import "./CartProducts.css"
import {collection , addDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import tilde from '../../media/images/tilde.png';


const CartProducts = () => {

  const {ProductCartList,removeItem,cartNumber,clear,total} = useContext(CartContext);
  const [isUpload, setIsUpload] = useState(false);
  const [orderId, setOrderId] = useState("");
  const[alertForm, setAlertForm] = useState(false);


  const createOrder = (e) => {
    e.preventDefault();
    if(e.target[0].value){
        setIsUpload(true);
        setAlertForm(false);
        const order ={
          buyer:{
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value
          },
          items: ProductCartList,
          total: total
        }
        //creo una referencia 
        const queryRef = collection(db, "orders");
        //guardo en la coleccion
        addDoc(queryRef, order).then((response) => {
          setOrderId(response.id);
          setIsUpload(false);
          clear();
        });
      }else{
          setAlertForm(true);
      }
  };



  return (
    
    <div className="cart-products-container">
      
    {!isUpload ? 
      <>
      {!orderId ? 
      <>
        {cartNumber >0 ? 
          <>
              <div className="cart-products">
                <div className='productsTitle'>
                  <h1>Productos agregados</h1>
                </div>
              
                    {ProductCartList.map(item => { 
                        return ( 
                            <div key ={item.title} className='products'>
                                <div className='productsImg'>
                                  <img src={item.pictureUrl} alt="" />
                                </div>
                                <div className='productsDetails'>
                                  <div className='productNames'>
                                    <p>{item.quantity} x</p>
                                    <p>{item.title}</p> 
                                  </div>
                                  <div className='productPrice'>
                                    <h4>${item.price}</h4>
                                  </div>
                                </div>
                                <button onClick={() => removeItem(item.id,item.price,item.quantity)}>x</button>
                            </div>
                            )})}                 
              </div>
              <div className='details'>
                <div className='detailsTitle'>
                  <h1>Detalles</h1>
                </div>
                <div className='detailsContent'>
                  <p>El total a pagar por su compra es: <strong>${total}</strong></p>
                </div>
                <div className='orderForm'>
                  <form onSubmit={createOrder}>
                    <input type="text" placeholder='Nombre' />
                    <input type="email"  placeholder='Email' />
                    <input type="text" placeholder='Telefono'/>
                    <div className='detailsButtons'>
                      <button onClick={clear}>Limpiar carrito</button>
                      <button type="submit">Generar Orden</button>
                   </div>   
                   {alertForm?  
                    <div className='formAlert'> <p>Por favor rellene todos los campos</p> </div>
                    :
                    null
                  }
                  </form>
                </div>
              </div>
          </>
                   
                   :
                    
           <div className='noProductsContainer'>
              <p>Todavia no agrego productos a su carrito</p>
              <Link className='Link_products' to="/productos">Seguir comprando</Link> 
          </div>
          }     
      </> : 
           <div className='orderUplaod'>
            <img src={tilde} alt="" />
            <h2>Gracias por su orden</h2>
            <p>Su id de compra es: {orderId}</p>
            <Link className='Link_products' to="/productos">Seguir comprando</Link> 
          </div>
      
      }
    </> 
      
      : 
        <div className='orderUplaod'>
          <span class="loader"></span>        
        </div>  
      }

    </div>
  )
}

export default CartProducts

