import './ItemListContainer.css';
import { useState , useEffect} from "react";
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import {getDocs, collection ,query , where } from 'firebase/firestore';
import { db } from '../../utils/firebase';


function ItemListContainer() {

  const[Items, setItems] = useState([]);
  const[categories, setCategories] = useState(false);
  const {category} = useParams();
  const[isUpload, setIsUpload] = useState(false);
  const[chargingCategory, setChargingCategory] = useState(false);

    const getTotalData = async() => {
      // creamos la referencia 
      const queryDB = collection(db, "items");
      const response = await getDocs(queryDB);
      const productos = response.docs.map(item =>{
        const newProduct = {
          ...item.data(),
          id: item.id
        }
        return newProduct;
      } )
      setItems(productos);
      setIsUpload(true);
    };

  const getCategory = async() => {
       // creamos la referencia 
       const queryDB = query(collection(db, "items"),where ("categoria","==",category));
       const response = await getDocs(queryDB);
       const productos = response.docs.map(item =>{
         const newProduct = {
           ...item.data(),
           id: item.id
         }
         return newProduct;
       } )
       setItems(productos);
       setIsUpload(true);
       setChargingCategory(false);
  };

  useEffect(() => {

      if(category){
        setCategories(category);
        getCategory();
        setChargingCategory(true);
      }else{
          setCategories(false);
          getTotalData();
        }

  },[category]);



    return (
        <div className="ItemListContainer">
          {isUpload ? 
          <ItemList items={Items} category={categories} chargingCategory={chargingCategory}/>
          :
          <div className='carga'>
            <span className='loaderContainer'>
            </span>
            <p>Cargando...</p>
          </div>
        }
        </div>
    );
}

export default ItemListContainer