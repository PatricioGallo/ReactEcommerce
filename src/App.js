import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import About from './Components/About/About';
import Contacto from './Components/Contacto/Contacto';
import Index from './Components/Index/Index';
import { CartProvider } from './Context/CartContext';
import CartProducts from './Components/CartProducts/CartProducts';

function App() {
  
  return (   
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/productos/:category" element={<ItemListContainer/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
          <Route path="/CartProdudcts" element={<CartProducts/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
