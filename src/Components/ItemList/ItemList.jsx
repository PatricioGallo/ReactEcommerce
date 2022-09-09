import Item from "../Item/Item";

const ItemList = (props) => {
  return (
    <>
    {props.items.map( item =>  <Item title={item.name} description={item.description} url={item.pictureUrl} key={item.id} />  )}
    </>
    )
}

export default ItemList