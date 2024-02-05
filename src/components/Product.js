import React from "react";
import { features } from "./Data";

const Product = () => {
 
  return (
    <div>
      <div className="px-2 sm:px-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5">
          {features?.map((item) => (
            <div key={item.id}>
              <div className=" shadow-2xl  bg-[#EEEDF3] hover:scale-105 duration-500 mt-10 rounded-2xl">
                <img src={item.img} alt="" className="h-[320px] mx-auto" />
                <h4 className="mt-2 ml-3 font-bold text-xl">{item.title}</h4>
                <p className="mt-2 ml-3 ">{item.description}</p>
                <a href="/">
                  <button className="text-[#FC5F64] hover:text-black cursor-pointer m-3">
                    {item.desc}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
