import './CartWidget.css';
import carritoImg from '../../media/images/carrito.png';
import { Link } from 'react-router-dom';


const CartWidget = (props) => {
  return (
    <Link className='Link' to="/CartProdudcts">
    <div className="CartWidget">
        <img src={carritoImg} alt="" />
        <div className="numero_cart">
            <p>{props.number}</p>
        </div>
    </div>
    </Link>
  )
}

export default CartWidget