import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState , useEffect} from "react";
import { useParams } from 'react-router-dom';
import { doc , getDoc} from 'firebase/firestore';
import { db } from '../../utils/firebase';

const ItemDetailContainer = (props) => {

    const [Item, setItem] = useState({});
    const { idProduct} = useParams();
    const [alert, setAlert] = useState(false);
    const[Upload, setUpload] = useState(false);

    useEffect(() => {
      const getData = async()=> {
        const query = doc(db, "items", idProduct);
        const response = await getDoc(query);
        const newProduct = {
          ...response.data(),
          id: response.id
        }
        setItem(newProduct);
        setUpload(true);
      };
      getData();
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

      {Upload ?
        <ItemDetail Item={Item} alertOn={alertOn} />
        :
        <p>Cargando ...</p>
      }
    </div>
  )
}

export default ItemDetailContainer