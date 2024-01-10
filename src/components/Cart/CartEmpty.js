import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const CartEmpty = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7">
      <img src="/assets/emptybag.png" alt="emptybag" className="w-40 lg:36 sm:28 h-auto object-fill transition-all duration-300 hover:scale-110 " />
      <button type="button" className="px-7 py-1 rounded active:scale-90 transition-all duration-100 ease-in-out shadow-md sm:text-sm bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110">
        <FaArrowLeft className="w-5 h-5 text-slate-100" />
        <span>Back</span>
      </button>
    </div>
  );
};

export default CartEmpty;
