import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart , handleChange }) => {

    const [price, setPrice] = useState(0);
    const handlePrice = () =>{
      let ans = 0;
      cart.map((item)=>(
        ans += item.amount * item.discountedPrice
      ))
      setPrice(ans);
    }
    const handleRemove = (id) =>{
      const arr = cart.filter((item)=>item.id !== id);
      setCart(arr);
    }
    useEffect(()=>{
      handlePrice();
    })


  return (
    <>
      <div>
        {
        cart.map((item)=>(
            <div className="" key={item.id}>
                <div>
                    <img className="" src={item.img}></img>
                    <span>{item.name}</span>
                </div>
                <div>
                    <button>+
                    </button>
                    <button>-
                    </button>
                </div>
                <div>
                    <span>{item.price}</span>
                    <span>Remove</span>
                </div>
            </div>
        ))}
      </div>
    </>
  );
};
export default Cart;
