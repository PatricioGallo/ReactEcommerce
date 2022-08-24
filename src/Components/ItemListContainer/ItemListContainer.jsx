import './ItemListContainer.css';

function ItemListContainer(props) {
    return (
        <div className="ItemListContainer">
            <div className="ItemList">
                <h1>{props.titulo}</h1>
                <p>{props.saludo}</p>
            </div>
        </div>
    );
}

export default ItemListContainer