import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Product = () => {
  return (
    <div className="px-2 sm:px-8">
      <div>
        <h1 className="text-4xl m-5 text-center font-bold underline">Men</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        <div className=" shadow-2xl hover:bg-slate-300">
          <FaRegHeart className="mt-4 ml-2 " />
          <img src="/assets/i2.png" className="h-[320px] mx-auto" />
          <h4 className="text-center mt-2 ">Woolean Coat</h4>
          <p className="text-center mt-2 font-bold">$235</p>
          <div className="text-center mt-2">
            <button className="text-white bg-black mb-2 p-3  hover:bg-green-500">
              Buy Now
            </button>
          </div>
        </div>

        <div className=" shadow-2xl hover:bg-slate-300">
          <FaRegHeart className="mt-4 ml-2 " />
          <img src="/assets/i6.png" className="h-[320px] mx-auto" />
          <h4 className="text-center mt-2">Indo Western</h4>
          <p className="text-center mt-2 font-bold">$300</p>
          <div className="text-center mt-2">
            <button className="text-white bg-black mb-2 p-3  hover:bg-green-500">
              Buy Now
            </button>
          </div>
        </div>

        <div className=" shadow-2xl hover:bg-slate-300">
          <FaRegHeart className="mt-4 ml-2 " />
          <img src="/assets/i4.png" className="h-[320px] mx-auto" />
          <h4 className="text-center mt-2">Jacket</h4>
          <p className="text-center mt-2 font-bold">$23</p>
          <div className="text-center mt-2">
            <button className="text-white bg-black mb-2 p-3  hover:bg-green-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
