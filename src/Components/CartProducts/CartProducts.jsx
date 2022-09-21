import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import "./CartProducts.css"


const CartProducts = () => {

  const {ProductCartList,removeItem,cartNumber,clear,total} = useContext(CartContext);

  return (
    <div className="cart-products-container">
      
        { cartNumber >0 ? 
        <>
            <div className="cart-products">
              <div className='productsTitle'>
                <h1>Productos agregados</h1>
              </div>
            
                  {ProductCartList.map(item => { 
                      return ( 
                          <div className='products'>
                              <div className='productsImg'>
                                <img src="" alt="" />
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
                <p>El total a pagar por su compra es: ${total}</p>
              </div>
              <div className='detailsButtons'>
              <button onClick={clear}>Limpiar carrito</button>
              <button >Ir al pago</button>
              </div>     
            </div>
        </>
                    :
                    
           <div className='noProductsContainer'>
              <p>Todavia no agrego productos a su carrito</p>
              <Link className='Link_products' to="/productos">Seguir comprando</Link> 
          </div>

          }      

    </div>
  )
}

export default CartProducts