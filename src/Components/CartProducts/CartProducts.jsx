import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import "./CartProducts.css"

const CartProducts = () => {
    const {ProductCartList,removeItem,cartNumber,clear} = useContext(CartContext);
  return (
    <div className="cart-products-container">
      
        { cartNumber >0 ? 
        <>
        <div className="cart-products">
        
              {       
                  
              ProductCartList.map(item => { 
                  return ( 
                      <div className='products'>
                          <p>{item.quantity} x</p>
                          <p>{item.title}</p> 
                          <button onClick={() => removeItem(item.id)}>x</button>
                      </div>
                      )})}   
                   
        </div>
        <div className='details'>
          <button onClick={clear}>CLEAR</button>
        </div>
        </>
                    : 
                    <p>Todavia no agrego productos a su carrito</p>
            }      

    </div>
  )
}

export default CartProducts