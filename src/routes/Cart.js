import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]); // Include cart in the dependency array to recalculate the price when cart changes

  return (
    <>
      <div className="w-[90%] mx-auto mt-[190px]">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between mt-[20px] pb-[5px]">
            <div className="flex w-[400px] items-center gap-3">
              <img className="w-[100px] h-[90px] p-2" src={item.img} alt={item.name} />
              <p className="font-bold">{item.name}</p>
              <br />
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
            <div className="justify-between flex">
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)} className="space-x-2 bg-lime-500 rounded text-black cursor-pointer">
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="justify-between flex">
          <span className="font-bold text-green-700 text-3xl">Total Price of your Cart</span>
          <span className="font-bold text-green-700 text-3xl"> ${price}</span>
        </div>
      </div>
    </>
  );
};

export default Cart;
