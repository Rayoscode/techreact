
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/itemListContainer";


function App() {

  return (
    <div className='bg-neutral-100'>
      <Navbar></Navbar>
      <ItemListContainer greetings="Bienvenidos a la Página!"></ItemListContainer>
    </div>
  );
}

export default App;
