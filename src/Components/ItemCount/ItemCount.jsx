import './ItemCount.css'

const ItemCount = (props) => {
    
  return (

    <div className="item-count">
        <div className="item-count__text">
            <p>{props.title}</p>
        </div>
        <div className="item-count__box">
            <div className="item-count__box__content">
                <button onClick={props.add}>+</button>
                <p>{props.count}</p>
                <button onClick={props.remove}>-</button>
            </div>
        </div>
        <div className="item-count__button">
            <button onClick={props.onAdd}>AGREGAR AL CARRITO</button>
        </div>
    </div>
  )
}

export default ItemCount