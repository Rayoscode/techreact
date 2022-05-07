
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/itemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer';

function App() {

  return (
    <div className='font-mono antialiased font-semibold bg-gray-900'>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer type="" greetings="Bienvenidos a la Página!"/>}/>
        <Route path='/electronicos' element={<ItemListContainer type="electronicos" greetings="Bienvenidos a la Página!"/>}/>
        <Route path="/informaticos" element={<ItemListContainer type="informaticos" greetings="Bienvenidos a la Página!"/>}/>
        <Route path="/Item/:prodId" element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
