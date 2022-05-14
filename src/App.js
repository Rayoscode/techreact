
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/itemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer';
import CartProvider from './context/cartContext';
import { cartComponent } from './components/cartComponent';
function App() {

  return (
    <div className='font-mono antialiased font-semibold bg-gray-900'>
        <CartProvider>
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer type="" greetings="Bienvenidos a la Página!"/>}/>
            <Route path="/productos/:typeId" element={<ItemListContainer greetings="Bienvenidos a la Página!"/>}/>
            <Route path="/productos/:typeId/:categoryId" element={<ItemListContainer greetings="Bienvenidos a la Página!"/>}/>
            <Route path="/Item/:prodId" element={<ItemDetailContainer/>}/>
            <Route path='/finalizarCompra' element={<cartComponent/>}/>
          </Routes>
          </BrowserRouter>
      </CartProvider>
    </div>

  );
}

export default App;
