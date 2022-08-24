import './NavBar.css';
import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div className="navBar">
            <div className="logo_class">
                <a href=""><img src={logo} alt=""></img></a>
            </div>   
            
            <div className="menu">
                <a href="">INICIO</a>
                <a href="">PRODUCTOS</a>
                <a href="">SOBRE NOSOTROS</a>
                <a href="">CONTACTOS</a>        
            </div>

            <div className="login">
                <button type="button">Login</button>
                <CartWidget numero={2}/>
            </div>

            

        </div>
    );
  }

export default NavBar;

