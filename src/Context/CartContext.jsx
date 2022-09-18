import React from 'react'
import { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider  = ({children} ) => {

    const [ProductCartList, SetproductCartList] = useState([]);
    const [cartNumber, setCartNumber] = useState(0);
    const [total, setTotal] = useState(0);
   
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
                 setTotal(total+ (item.price * quantity));

                 SetproductCartList(newLista);
                 setCartNumber(cartNumber + quantity);
        }else{

            const newProduct = {
                ...item,
                quantity: quantity
            };
            const newLista = [...ProductCartList];
            newLista.push(newProduct);
            newLista.map(item => setTotal(total+(item.price * item.quantity)))
            SetproductCartList(newLista);
            setCartNumber(cartNumber+quantity);
        }
    }

    const removeItem = (id,price,quantity) => {
        const newLista = ProductCartList.filter(item => item.id !== id);
        SetproductCartList(newLista);
        setCartNumber(cartNumber-quantity);
        setTotal(total-(price*quantity));
    }

    const clear = () => {
        SetproductCartList([]);
        setCartNumber(0);
        setTotal(0);
    }
    
    // const totalCount = () => {
    //     ProductCartList.map(item => setTotal( total + item.price));    
    // }


    return(
        <CartContext.Provider value={{ProductCartList,addItem,removeItem,cartNumber,clear,total,setTotal}}>
                {children}
        </CartContext.Provider>

    )

}