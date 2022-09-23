import Item from "../Item/Item";
import './ItemList.css'
import {Link} from 'react-router-dom';
import destacados from '../../media/images/destacados.jpeg';

const ItemList = (props) => {

  const abrirSelector = () => {
    console.log("ure")
  };

  return (

    <div className="itemList">
      
        <div className="itemList_Img">
          <img src={destacados} alt="" />
        </div>

        <div className="content">

            <div className="itemFinder">
                <div className="categoriesBox">
                  <div className="titleBox">
                    <h1>Categorias</h1>
                  </div>
                </div>
                <div className="categories">
                    <div className="categoryBoxBorder">
                    <Link className="Link" to="/productos/PlacasDeVideo"><div className="categoryBox"> <p>Placas de Video </p></div></Link>
                    <Link className="Link" to="/productos/Gabinetes"><div className="categoryBox"><p>Gabinetes</p></div></Link>
                    <Link className="Link" to="/productos/Fuentes"><div className="categoryBox"><p>Fuentes</p></div></Link>
                    <Link className="Link" to="/productos/Notebook"><div className="categoryBox"><p>Notebooks</p></div></Link>
                    <Link className="Link" to="/productos/PlacasMadres"><div className="categoryBox"><p>Placas Madres</p></div></Link>
                    <Link className="Link" to="/productos/Auriculares"><div  className="categoryBox"><p>Auriculares</p></div></Link>
                  </div>
                </div>
            </div>

            <div className="itemListContent"> 
              <div className="orderFor">
                <div className="orderSelector" onClick={abrirSelector}>
                  <h2>Ordenar por...</h2>
                </div> 
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

              { !props.chargingCategory?
              
                 props.items.map( item =>  <Item title={item.title} price={item.price} url={item.pictureUrl} key={item.id} id={item.id}/>  )
            :
                <div className='carga'>
                  <span className='loaderContainer'>
                  </span>
                  <p>Cargando...</p>
                </div>
              
            }
            </div>
        </div>
    </div>
    )
}

export default ItemList