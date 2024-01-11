
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import { useState } from 'react';
import CartList from './components/CartList';


function App() {

const [list,setList] = useState([
  {
    id:1 ,
    img:"assets/j1.jpg",
    type:"Plants",
    name:"Boncellensis Secullant",
    rating:"/assets/Capture.png",
    price:34
  },
  {
    id: 2,
    img:"assets/j2.jpg",
    type:"Plants",
    name:"Cleistocactus",
    rating:"/assets/Capture.png",
    price:25
  },
  {
    id: 3,
    img:"assets/j3.jpg",
    type:"Plants",
    name:"Green Soil Lotus",
    rating:"/assets/Capture.png",
    price:34
  },
  {
    id: 4,
    img:"assets/j4.jpg",
    type:"Plants",
    name:"Money Plant",
    rating:"/assets/Capture.png",
    price:20
  },
  {
    id: 5,
    img:"assets/j5.jpg",
    type:"Plants",
    name:"Old Lady Cactus",
    rating:"/assets/Capture.png",
    price:12
  },
  {
    id: 6,
    img:"assets/j6.jpg",
    type:"Plants",
    name:"Piorro Quisquam",
    rating:"/assets/Capture.png",
    price:32
  },
  
  {
    id: 7,
    img:"assets/j7.jpg",
    type:"Plants",
    name:"Rattle Snake Tail",
    rating:"/assets/Capture.png",
    price:45
  },
  {
    id: 8,
    img:"assets/j8.jpg",
    type:"Plants",
    name:"Star Cactus",
    rating:"/assets/Capture.png",
    price:20
  }
])

const [cart,setCart] = useState([])
console.log(cart)

const addToCart = (data) => {

setCart([...cart , {...data,quantity:1}])
}
  return (
    <>
    <div className='App'>
   <CartList  cart={cart}  size={cart.length}/>
   
    <Routes>
      <Route path="/" element={<Home list={list} addToCart={addToCart}/>}/>
      
    </Routes>
    
    </div>
    </>
  );
}

export default App;
