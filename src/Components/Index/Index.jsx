import banner1 from '../../media/images/banner1.jpeg';
import './Index.css';
import ItemSlide from '../ItemSlide/ItemSlide';
import { useState , useEffect} from "react";
import { db } from '../../utils/firebase';
import {getDocs, collection } from 'firebase/firestore';

const Index = () => {
  const[Items, setItems] = useState([]);
  const[reference, setreference] = useState(0);
  const[maxLenght, setmaxLenght] = useState(5);


  useEffect(() => {

    const getData = async() => {
      // creamos la referencia 
      const query = collection(db, "items");
      const response = await getDocs(query);
      const productos = response.docs.map(item =>{
        const newProduct = {
          ...item.data(),
          id: item.id
        }
        return newProduct;
      } );

      setItems(productos);
      console.log(Items);

        };
    getData();
  },[])

  const sumaAutomatica = () => {
    if(reference < maxLenght){
      setTimeout(( ) => {
      setreference(reference+3);},7000);
      console.log(reference);
    }else{
      setreference(0);
    }
  }

  return (
    <div className="container">
        <div className="banner">
            <img src={banner1} alt="" />
        </div>
        <div className="novedades">
          <div className="novedadesTitle">
            <h1>Ultimas Novedades</h1>
            <div className='linea'></div>
          </div>
          <div className="novedadesSlide">
            <div className='slideContent'>
                {Items.map( (item,index) => {
                  if( reference <=index && index <  reference+3){
                  return(
                <ItemSlide title={item.title}  url={item.pictureUrl} key={item.title} id={item.id}/>)}       
              } 
                )}
                {sumaAutomatica()}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Index