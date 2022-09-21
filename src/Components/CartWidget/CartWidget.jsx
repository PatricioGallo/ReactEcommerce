import './CartWidget.css';
import carritoImg from '../../media/images/carrito.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const CartWidget = (props) => {
  
  const {cartNumber } = useContext(CartContext);

  return (
    <>

    {cartNumber!==0 ?     <Link className='Link' to="/CartProdudcts">
    <div className="CartWidget">
        <img src={carritoImg} alt="" />
        <div className="numero_cart">
            <p>{props.number}</p>
        </div>
    </div>
    </Link>
    :
      <div className="CartWidget">
        <img src={carritoImg} alt="" />
      </div>
  }

    </>
  )
}

export default CartWidget