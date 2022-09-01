import './Item.css'
const Item = (props) => {
  return (

    <div className="item-container">

        <div className="item-title">
            <h1>{props.title}</h1>
        </div>

        <div className="item-image">
            <img src={props.url} alt='' />
        </div>

        <div className="item-description">
            <p>{props.description}</p>
        </div>

        <div className="item-button">
            <button type="button">Ver detalle</button>
        </div>

    </div>

  )
}

export default Item