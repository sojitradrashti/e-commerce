import React from "react";
import { CgChevronDoubleLeft } from "react-icons/cg";
import { FaSquareXmark } from "react-icons/fa6";
// import { setCloseCart, slectCartState } from "../app/CartSlice.js"

const CartCount = () => {
  return (
    <>
      <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 right-0 w-full">
        <div className="flex items-center gap-3 ">
          <div className="grid items-center cursor-pointer">
            <CgChevronDoubleLeft className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[]" />
          </div>
          <div className="grid items-center">
            <h1 className="text-base font medium text-slate-900">
              Your Cart{" "}
              <span className="bg-gradient-to-b from slate-900 to-gray-900 shadow-sm shadow-gray-900 rounded px-1 py-0.5 test-slate-100 font-normal text-xs">
                (Items)
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="rounded bg-gradient-to-b from slate-900 to-gray-900 shadow-sm shadow-gray-900 active:scale-90 p-0.5"
          >
            <FaSquareXmark className="w-5 h-5  stroke-[2]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
