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
    <div className="w-[100%] mt-[190px]">
      {cart.map((item, index) => (
        <div
          key={index}
          className="px-3 flex-row sm:flex col mx-5 items-center justify-between mt-4"
        >
          <div>
            <img className="w-[100px] h-[90px] " src={item.img} />
            </div>
            <div className="w-[150px]">
              <p className="font-bold  xs:text-sm">{item.name}</p>
          </div>
          <div className="">
            <button
              onClick={() => handleChange(item, +1)}
              className="w-6 bg-slate-300 border mr-2 border-gray-500"
            >
              +
            </button>

            <button className="w-6 bg-slate-300 border mr-2 border-gray-500">
              {item.amount}
            </button>
            <button
              onClick={() => handleChange(item, -1)}
              className="w-6 bg-slate-300 border mr-2 border-gray-500"
            >
              -
            </button>
          </div>
          <div className="flex">
            <span>{item.price}</span>
            </div>
            <div>
            <button
              onClick={() => handleRemove(item.id)}
              className="px-2 mr-2 text-white text-xl bg-red-400  hover:bg-lime-500 rounded-md cursor-pointer"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <br />
<div className="lg:w-[40%] sm:[20%]">
      <div className=" border border-black ml-5 mr-7">
        <div className="border-b-2 border-black ">
          <h2 className="text-2xl m-3">Cart totals</h2>
          <hr />
        </div>
        <div className="flex justify-between border-b-2 p-2">
          <p>subtotal</p>
          <p>${price}</p>
        </div>
        <div className="flex justify-between border-b-2 p-2">
          <p>total</p>
          <p>${price}</p>
        </div>
        <Link to="/Checkout">
          <button className="lg:px-3 md:px-2 p-3 text-white bg-red-500 hover:bg-lime-500 m-5 text-2xl rounded-full">
            PROCEED TO CHECKOUT
          </button>
        </Link>
      </div>
      <div className="text-center"></div>
    </div>
    </div>
  );
};

export default Cart