import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Product = () => {
  return (
    <div className="px-2 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 m-5">
        <div className=" shadow-2xl  bg-[#EEEDF3] hover:scale-105 duration-500">
          <FaRegHeart className="mt-8 ml-2 " />
          <img src="/assets/i1.png" className="h-[320px] mx-auto" />
          <h4 className="mt-2 ml-3 font-bold text-xl">
            Beautiful Plant Varieties
          </h4>
          <p className="mt-2 ml-3 ">
            Luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-[#FC5F64]  hover:text-black cursor-pointer m-3">
            see collection
          </p>
        </div>

        <div className=" shadow-2xl bg-[#EEEDF3] hover:scale-105 duration-500">
          <FaRegHeart className="mt-4 ml-2 " />
          <img src="/assets/i2.png" className="h-[320px] mx-auto" />
          <h4 className="ml-3 font-bold text-x mt-2">
            Trendy Cactus Varieties
          </h4>
          <p className="mt-2 ml-3 ">
            Luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-[#FC5F64]  hover:text-black cursor-pointer m-3">
            see collection
          </p>
        </div>

        <div className=" shadow-2xl  bg-[#EEEDF3] hover:scale-105 duration-500">
          <FaRegHeart className="mt-4 ml-2 " />
          <img src="/assets/i3.png" className="h-[320px] mx-auto" />
          <h4 className="ml-3 font-bold text-xmt-2">Gardening Accessories</h4>
          <p className="mt-2 ml-3 ">
            Luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-[#FC5F64] hover:text-black cursor-pointer m-3">
            VISIT THE STORE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
