import './CartWidget.css';
import carritoImg from '../../media/images/carrito.png';


const CartWidget = (props) => {
  return (
    <div className="CartWidget">
        <img src={carritoImg} alt="" />
        <div className="numero_cart">
            <p>{props.number}</p>
        </div>
    </div>
  )
}

export default CartWidget