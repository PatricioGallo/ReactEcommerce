import Item from "../Item/Item";
import './ItemList.css'
import {Link} from 'react-router-dom';

const ItemList = (props) => {
  return (
    <div className="itemList">
        <div className="itemFinder">
            <h1>Categorias</h1>
            <div className="categories">
              <Link className="Link" to="/productos/categoria1">Categoria 1</Link>
              <Link className="Link" to="/productos/categoria2">Categoria 2</Link>
              <Link className="Link" to="/productos/categoria3">Categoria 3</Link>
            </div>
        </div>
        <div className="itemListContent"> 
          {props.items.map( item =>  <Item title={item.title} description={item.description} url={item.pictureUrl} key={item.id} id={item.id}/>  )}
        </div>
    </div>
    )
}

export default ItemList