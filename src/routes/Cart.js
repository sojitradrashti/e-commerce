import React from "react";

const Cart = () => {
  return (
    <div className="px-3 m-9">
      <div className="grid grid-cols-2 gap-5 m-5">
        <div>
          <img src="/assets/j1.jpg" alt="image" />
        </div>
        <div>
          <p className="text-2xl cursor-pointer text-black hover:text-[#75C32C]">
            Plants
          </p>
          <h1 className="text-6xl">Boncellensis Secullant</h1>
          <h4 className="text-2xl text-black font-bold"> 
            $32.00<span className="font-light">+ Free Shipping</span></h4>
            <p className="text-2xl font-light text-gray-600">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame. Neque porro quisquam est, qui dolore ipsum quia dolor sit amet.</p>
         
        </div>
      </div>
    </div>
  );
};

export default Cart;
