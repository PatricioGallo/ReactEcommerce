import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = (props) => {
  return (
    <>
        <div className="image">
            <img src="" alt="" />
        </div>

        <div className="description">
            <div className="title"><h1>{props.title}</h1></div>
            <div className='price'><h2>${props.price}</h2></div>
            <div className='description_content'><p>{props.description}</p></div>
            <ItemCount title={props.title}/>
        </div>
    </>
  )
}

export default ItemDetail