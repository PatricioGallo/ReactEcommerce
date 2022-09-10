import banner1 from '../../media/images/banner1.jpeg';
import './Index.css';
import ItemSlide from '../ItemSlide/ItemSlide';
import {getItems} from '../Data/AsyncMock';
import { useState , useEffect} from "react";

const Index = () => {
  const[Items, setItems] = useState([]);
  const[reference, setreference] = useState(0);
  const[maxLenght, setmaxLenght] = useState(2);


  useEffect( () =>{
    getItems().then((items) =>{
      setmaxLenght(items.length);
      setItems(items);
    })
  },[]);

  const sumaAutomatica = () => {
    if(reference < maxLenght){
      setTimeout(( ) => {
      setreference(reference+3);},5000);
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
                <ItemSlide title={item.title}  url={item.pictureUrl} key={item.id} id={item.id}/>)}       
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