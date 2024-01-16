import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import { useState } from "react";

  const App = () => {
    const [show,setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const handleChange = (item , d) => {
      let ind = -1;
      cart.forEach((data , index)=>{
        if(data.id === item.id)
          ind = index;
      });
      const temArr = cart;
      temArr[ind] += d;
      if (temArr[ind].amount === 0){
        temArr[ind].amount = 1;}
      setCart([...temArr])
    };


  return (
    <>
      <div className="App">
      <Navbar size={cart.length} setShow={setShow}/>
        {
          show ? <Home cart={cart} setCart={setCart}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        }
        </div>
    </>
  );
};

export default App;
