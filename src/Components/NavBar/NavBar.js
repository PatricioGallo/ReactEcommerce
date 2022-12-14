import './NavBar.css';
import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


function NavBar() {
    const {cartNumber,loginOn} = useContext(CartContext);
    return (
        <div className="navBar">
            <div className="logo_class">
                <Link to="/"><img src={logo} alt=""></img></Link>
            </div>   
            
            <div className="menu">
                <NavLink to="/" className={({isActive})=> isActive? "presionado" : "sinPresionar" }>INICIO</NavLink>
                <NavLink to="/productos" className={({isActive})=> isActive? "presionado" : "sinPresionar" }>PRODUCTOS</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive? "presionado" : "sinPresionar" }>SOBRE NOSOTROS</NavLink>
                <NavLink to="/contacto" className={({isActive})=> isActive? "presionado" : "sinPresionar" }>CONTACTO</NavLink>        
            </div>

            <div className="login">
                <button type="button" onClick={loginOn}>Login</button>
                <CartWidget number={cartNumber}/>
            </div>

            

        </div>
    );
  }

export default NavBar;

