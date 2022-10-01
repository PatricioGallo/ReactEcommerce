import React from 'react'
import './Footer.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import facebook from '../../media/images/facebook.png';
import instagram from '../../media/images/instagram.png';
import linkedin from '../../media/images/linkedin.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerContent'>
            <div className='footerBox'>
                <img src={logo} alt="" />
            </div>
            <div className='footerBox'>
                <p>Si tenees alguna sugerencia o comentario</p>
                <Link className='linkFooter' to="/contacto">contactanos</Link>
            </div>
            <div className='footerBox'>
            <p>Mira las novedades que tenemos para vos</p>
                <Link className='linkFooter' to="/contacto">productos</Link>
            </div>
            <div className='footerBox2'>
                <p>Seguinos en nustras redes</p>
                <div className='redes'>
                    <a href="https://www.facebook.com/" target={"_blank"} rel="noreferrer"> <img src={facebook} alt="" /> </a>
                    <a href="https://www.instagram.com/" target={"_blank"} rel="noreferrer"> <img src={instagram} alt="" /> </a>
                    <a href="https://www.linkedin.com/in/patoogallo/" target={"_blank"} rel="noreferrer"> <img src={linkedin} alt="" /> </a>
                </div>
            </div>
        </div>
        <div className='footerCopy'>
            <p>Designed by <a href="http://patriciogallo.com.ar/" target={'_blank'} rel="noreferrer">Patricio Gallo</a> | All rights reserved </p>
        </div>
    </div>
  )
}

export default Footer