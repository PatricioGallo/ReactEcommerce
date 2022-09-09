import './ItemCount.css'

const ItemCount = (props) => {

    const Add = ()=> {
        if(props.count < props.stock){
            props.Addcount();
        }     
    }

    const Remove = ()=> {
        if(props.count > 1){  
            props.removeCount();
        }
    }

    const onAdd = ()=> {
        props.onAddCart();
    }

    
  return (

    <div className="item-count">
        <div className="item-count__text">
            <p>{props.title}</p>
        </div>
        <div className="item-count__box">
            <div className="item-count__box__content">
                <button onClick={Add}>+</button>
                <p>{props.count}</p>
                <button onClick={Remove}>-</button>
            </div>
        </div>
        <div className="item-count__button">
            <button onClick={onAdd}>AGREGAR AL CARRITO</button>
        </div>
    </div>
  )
}

export default ItemCount