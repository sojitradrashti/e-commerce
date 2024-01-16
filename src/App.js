import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import Checkout from "./routes/Checkout";
import { useState } from "react";
  const App = () => {

    const [cart, setCart] = useState([]);
  
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((Product) => {
      if (item.id === Product.id) isPresent = true;
    })
    if (isPresent) {
      return;
    }
    setCart([...cart, item]);
  };
  const handleChange = (item , d) => {
    let ind = -1;
    cart.forEach((data, index)=>{
      if(data.id === item.id)
        ind = index;
    });
    const temArr = cart;
    temArr[ind].amount += d;
    if (temArr[ind].amount === 0)
      temArr[ind].amount = 1;
    setCart([...temArr])
  }

  return (
  
      <div>
      <Navbar size={cart.length}/>
      
       <Routes>
        <Route path="/" element={<Home handleClick={handleClick}/>}/>
        <Route path="/Cart" 
        element={<Cart cart={cart}
        setCart={setCart}
      handleChange={handleChange}/>}/>
      <Route path="/Checkout" element={<Checkout />}/>
        </Routes>
       
        </div>
    
  );
};

export default App;
