import Item from "../Item/Item";
import './ItemList.css'
import {Link} from 'react-router-dom';
import destacados from '../../media/images/destacados.jpeg';

const ItemList = (props) => {
  return (
    <div className="itemList">
      
        <div className="itemList_Img">
          <img src={destacados} alt="" />
        </div>

        <div className="content">

            <div className="itemFinder">
                <h1>Categorias</h1>
                <div className="categories">
                  <Link className="Link" to="/productos/categoria1"><div className="categoryBox">Categoria 1</div></Link>
                  <Link className="Link" to="/productos/categoria2"><div className="categoryBox">Categoria 2</div></Link>
                  <Link className="Link" to="/productos/categoria3"><div className="categoryBox">Categoria 3</div></Link>
                </div>
            </div>

            <div className="itemListContent"> 
              <div className="orderFor">
                  <h2>Ordenar por</h2>
              </div>
                    { props.category ? 
                        <div className="categoriesContainer">
                        <div className="categoriesList">
                          <p>{props.category}</p>
                          <Link className="Link" to="/productos"><div className="cross">x</div></Link>
                        </div>
                      </div>
                    :
                    null
                  }
              {props.items.map( item =>  <Item title={item.title} description={item.description} url={item.pictureUrl} key={item.id} id={item.id}/>  )}
            </div>
        </div>
    </div>
    )
}

export default ItemList