
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import Cart from './routes/Cart';

function App() {
  return (
    <>
    <div className='App'>
      {/* <Navbar/> */}
      
    
    <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    
    </div>
    </>
  );
}

export default App;
