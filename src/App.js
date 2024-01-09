
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <div className='App'>
    <Cart/>
    <Routes>
      <Route path="/" element={<Home/>}/>
   
    </Routes>
    
    </div>
    </>
  );
}

export default App;
