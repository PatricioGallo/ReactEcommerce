import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import About from './Components/About/About';
import Contacto from './Components/Contacto/Contacto';
import Index from './Components/Index/Index';

function App() {
  
  return (    
    <BrowserRouter>
      <NavBar numberCart={0}/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route path="/productos/:category" element={<ItemListContainer/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
