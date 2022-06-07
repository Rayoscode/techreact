
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/itemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer';
import CartProvider from './context/cartContext';

import { CartComponent } from './components/cartComponent';

function App (){
  return (
    <div className='font-mono antialiased font-semibold bg-gray-900'>

        <CartProvider>
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/productos/:typeId" element={<ItemListContainer/>}/>
            <Route path="/productos/:typeId/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/Item/:prodId" element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartComponent/>}/>
          </Routes>
          </BrowserRouter>
      </CartProvider>
    </div>

  );
  }

export default App;
