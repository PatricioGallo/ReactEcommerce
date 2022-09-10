import './ItemSlide.css'
import {Link} from 'react-router-dom';
const ItemSlide = (props) => {
  return (

    <div className="item-container">

        <div className="item-title">
            <h1>{props.title}</h1>
        </div>

        <div className="item-image">
            <img src={props.url} alt='' />
        </div>
        <div className="item-button">
            <Link to={`/detail/${props.id}`} className="link_boton">
            <button type="button">Ver detalle</button>
            </Link>
        </div>
    </div>

  )
}

export default ItemSlide