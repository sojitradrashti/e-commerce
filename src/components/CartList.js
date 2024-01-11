import React from 'react'

function CartList({cart}) {
  return (
    <div>
        {
            cart.map((cartItem) => {
                return(
                    <div>
                        <img src={cartItem.img} className='w-[10%]'/>
                        <span> {cartItem.name} </span>
                        <button className='border border-black rounded-sm px-2.5 bg-slate-200'>-</button>
                        <span> {cartItem.quantity} </span>
                        <button className='border border-black rounded-sm px-2.5 bg-slate-200'>+</button>
                        <span> {cartItem.price} </span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CartList