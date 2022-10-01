import React from 'react';
import Footer from '../Footer/Footer';
import './Contacto.css';


const Contacto = () => {
  
  return (
    <div className='bodyContact'>
      <div className='contactContent'>
        <div className='contentTitle'>
          <h1>Contactate con nosotros</h1>
        </div>
        <div className='formulario'>
          <form action="">
            <input type="text" name='nombre' placeholder='Nombre'/>
            <input type="text" name='apellido' placeholder='Apellido' />
            <input type="email" name='email' placeholder='Email' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Dejanos un mensaje'></textarea>
            <button type='submit'>Enviar</button>
          </form>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Contacto