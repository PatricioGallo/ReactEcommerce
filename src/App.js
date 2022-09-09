import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

function App() {
  
  return (    
    <div className="App">
      <div className="header">
      <NavBar numberCart={2}/>
      </div>

        <div className="body">
            {/* <ItemListContainer greeting="Nombre"/> */}
            <ItemDetailContainer index={1} />
        </div>
    </div>
  );
}

export default App;
