

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
    setCount(1);
  };
  
  return (    
    <div className="App">
      <NavBar numberCart={numberCart}/>
        <div className="body">
          <div className="contenedorItemList">
            <ItemListContainer Addcount={add} count={count} onAddCart={onAddCart} removeCount={remove} stock={10}/>
          </div>
        </div>
    </div>
  );
}

export default App;
