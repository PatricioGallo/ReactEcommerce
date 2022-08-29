import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer(props) {
    return (
        <div className="ItemListContainer">
          <ItemCount Addcount={props.Addcount} count= {props.count} onAddCart={props.onAddCart}  removeCount={props.removeCount} stock={props.stock}/>
        </div>
    );
}

export default ItemListContainer