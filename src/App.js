

import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (    
    <div className="App">
      <NavBar/>
        <div className="body">
          <div className="contenedorItemList">
            <ItemListContainer titulo="Hola este es un titulo 1" saludo="Hola este es un saludo 1" />
            <ItemListContainer titulo="Hola este es un titulo 2" saludo="Hola este es un saludo 2" />
            <ItemListContainer titulo="Hola este es un titulo 3" saludo="Hola este es un saludo 3" />
          </div>
        </div>
    </div>
  );
}

export default App;
