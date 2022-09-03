import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import  {useState} from 'react';

function App() {

  const [count, setCount] = useState(1);
  const [numberCart, setNumberCart] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const remove = () => {
    setCount(count - 1);
  };
  const onAddCart = () => {
    setNumberCart(count);
    
  };
  
  return (    
    <div className="App">
      <div className="header">
      <NavBar numberCart={numberCart}/>
      </div>

        <div className="body">
            {/* <ItemListContainer Addcount={add} count={count} onAddCart={onAddCart} removeCount={remove} stock={10}/> */}
            <ItemDetailContainer index={1} />
        </div>
    </div>
  );
}

export default App;
