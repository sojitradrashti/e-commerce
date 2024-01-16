import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
   const arr = cart.filter((item) => item.id != id);
   setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="w-[90%] mx-auto mt-[190px]">
      {cart.map((item, index) => (
        <div key={index} className="flex items-center justify-between mt-[20px] pb-[5px] border border-black">
          <div className="flex w-[400px] items-center gap-3">
            <img className="w-[100px] h-[90px] p-2" src={item.img} />
            <p className="font-bold">{item.name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, +1)} className="w-[20px] bg-slate-300 border mr-2 border-gray-500">
              +
            </button>
            
            <button className="w-[20px] bg-slate-300 border mr-2 border-gray-500">
              {item.amount}
            </button>
            <button onClick={() => handleChange(item, -1)} className="w-[20px] bg-slate-300 border mr-2 border-gray-500">
              -
            </button>
          </div>
          <div className="flex">
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)} className="px-2 text-white text-xl bg-red-400  hover:bg-lime-500 rounded-md cursor-pointer">
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="justify-between flex">
        <span className="font-bold text-green-700 text-3xl">Subtotal
        </span>
        <span className="font-bold text-green-700 text-3xl"> ${price}</span>
      </div>
      <div className="text-center">
        <Link to="/Checkout">
        <button className="p-3 text-white bg-red-500 hover:bg-lime-500 m-5 text-2xl rounded-full">PROCEED TO CHECKOUT</button>
        </Link>
        </div>
    </div>
  );
};

export default Cart;
