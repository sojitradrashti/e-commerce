import React from "react";
import CartCount from "./Cart/CartCount";
import CartEmpty from "./Cart/CartEmpty";
import CartItem from "./Cart/CartItem";
import { useDispatch, useSelector} from "react-redux";
import { selectCartState, setCloseCart} from "../app/CartSlice.js";


const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState)
  const onCartToggle = () => {
    dispatch(setCloseCart({
      cartState : false
    }))
  }
  return (
    <>
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 w-full h-screen bg-white/50 bg-clip-padding backdrp-filter backdrop-blur bg-opacity-50 opacity-100 z-[250] shadow-sm shadow-slate-100 transition-all duration-300 ${ifCartState ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'}`}>
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
        >
          <CartCount onCartToggle={onCartToggle}/>
          <CartEmpty/>
          <CartItem/>
          <CartEmpty/>
        
        </div>
      </div>
    </>
  );
};

export default Cart;













// ${
//   ifCartState
//     ? "opacity-100 visible translate-x-0"
//     : "opacity-0 invisible translate-x-8"
// }`














{
  /* <div className="px-3 m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-grid-cols-2 gap-5   m-5">
        <div>
          <img src="/assets/j1.jpg" alt="image" />
        </div>
        <div>
          <p className="text-2xl cursor-pointer text-black hover:text-[#75C32C]">
            Plants
          </p>
          <h1 className="text-4xl">Boncellensis Secullant</h1>
          <br />
          <h4 className="text-2xl text-black font-bold">
            $32.00<span className="font-light">+ Free Shipping</span>
          </h4>
          <br />
          <p className="text-2xl font-light text-gray-600">
            Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
            consectetur adipisci velit, sed quia non numquam eius modi tempora
            incidunt lores ta porro ame. Neque porro quisquam est, qui dolore
            ipsum quia dolor sit amet.
          </p>
          <input
  type="number"
  id="numericInput"
  name="numericInput"
  min="1"
  step="1"
  value="1"
  class="border border-black w-[50px] text-black"
/>
          <Link to="/Cart">
            <button className="text-bold  m-4 text-white bg-[#FC5F5F] hover:bg-[#75C32C] py-3 px-20 rounded-full">
              SHOP NOW
            </button>
          </Link>
          <hr className="m-5" />
          <div className="flex text-xl">
            <p className="font-black">Catogory:</p>
            <p className="hover:text-[#75C32C] cursor-pointer"> Plants</p>
          </div>
        </div>
      </div>
    </div> */
}
