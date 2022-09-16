import './ItemSlide.css'
import {Link} from 'react-router-dom';
const ItemSlide = (props) => {
  return (

  <div className="ItemSlide-Container"> 
      <div className="item-container_slide">
        
          <div className="item-title_Slide">
              <h1>{props.title}</h1>
          </div>

          <div className="item-image_Slide">
              <img src={props.url} alt='' />
          </div>
          <div className="item-button_Slide">
              <Link to={`/detail/${props.id}`} className="link_boton_Slide">
              <button type="button">Ver detalle</button>
              </Link>
          </div>
      </div>
    </div> 

  )
}

export default ItemSlide