
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <div className='App'>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={ <Cart/>}/>
    </Routes>
    
    </div>
    </>
  );
}

export default App;
