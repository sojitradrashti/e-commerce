import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const CartEmpty = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7">
      <img src="/assets/emptybag.png" alt="emptybag" className="" />
      <button type="button" className="w-40 lg:36 sm:28 h-auto object-fill transition-all duration-300 hover:scale-110">
        <FaArrowLeft className="w-5 h-5 text-slate-100" />
        <span>Back</span>
      </button>
    </div>
  );
};

export default CartEmpty;
