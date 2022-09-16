import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const Contacto = () => {
  const value = useContext(CartContext);

  return (
    <div>Contacto
    </div>
  )
}

export default Contacto