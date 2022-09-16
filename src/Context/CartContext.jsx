import React from 'react'
import { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider  = ({children} ) => {

    const [ProductCartList, SetproductCartList] = useState([]);
    const [cartNumber, setCartNumber] = useState(0);

   
    const isInCart = (product) => {

        const itemTrue = ProductCartList.filter(item =>item.title === product.title  )

        if(itemTrue.length > 0) {
            return true;
        }else{
            return false;
        }
    }

    const addItem = (item , quantity) => {
       
        if( isInCart(item)){
                const newLista = [...ProductCartList];
                newLista.map( product => {  
                    if( product.title === item.title ){
                        product.quantity = product.quantity + quantity;
                    }
                 });
                 SetproductCartList(newLista);
                 console.log('se realizo la suma')
        }else{

            const newProduct = {
                ...item,
                quantity: quantity
            };
            const newLista = [...ProductCartList];
            newLista.push(newProduct);
            SetproductCartList(newLista);
            setCartNumber(cartNumber+1);
        }
    }

    const removeItem = (id) => {
        const newLista = ProductCartList.filter(item => item.id !== id);
        SetproductCartList(newLista);
        setCartNumber(cartNumber-1);
    }

    const clear = () => {
        SetproductCartList([]);
        setCartNumber(0);
    }
    
    return(
        <CartContext.Provider value={{ProductCartList,addItem,removeItem,cartNumber,clear}}>
                {children}
        </CartContext.Provider>

    )

}