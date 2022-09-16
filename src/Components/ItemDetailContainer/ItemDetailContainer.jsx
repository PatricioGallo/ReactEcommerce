import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState , useEffect} from "react";
import { getItems } from '../Data/AsyncMock';
import { useParams } from 'react-router-dom';
const ItemDetailContainer = (props) => {

    const [Item, setItem] = useState({});
    const { idProduct} = useParams();
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        getItems().then( (datos) => {
        setItem(datos.find( item => item.id === parseInt(idProduct)));
      })
    },[idProduct]);

    const alertOn = () => {
        setAlert(true)
        setTimeout( () => {
          setAlert(false);
        },2000);
    }


  return (
    <div className="ItemDetailContainer">

      {alert ? 
    
        <div className="alert">
            <div className='alertTitle'>
                <h3>Producto agregado al carrito</h3>
            </div>
            <div className='alertInformation'>
                <p>Producto: {Item.title}</p>
                <p>Precio: ${Item.price}</p>  
            </div>
        </div>

        : null
      }
        <ItemDetail Item={Item} alertOn={alertOn}/>

    </div>
  )
}

export default ItemDetailContainer