
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/itemListContainer";


function App() {

  return (
    <div className='font-mono antialiased font-semibold bg-gray-900'>
      <Navbar></Navbar>
      <ItemListContainer greetings="Bienvenidos a la Página!"></ItemListContainer>
    </div>
  );
}

export default App;
