import {getDocs, collection } from 'firebase/firestore';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { CartContext } from '../../Context/CartContext';
import { db } from '../../utils/firebase';

const Contacto = () => {
  const value = useContext(CartContext);

  useEffect(() => {

    const getData = async() => {
      // creamos la referencia 
      const query = collection(db, "items");
      const response = await getDocs(query);
      const productos = response.docs.map(item =>{
        const newProduct = {
          ...item.data(),
          id: item.id
        }
        return newProduct;
      } )

      console.log(productos);

    };

    getData();

  },[])


  return (
    <div>Contacto
    </div>
  )
}

export default Contacto