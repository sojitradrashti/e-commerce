import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Plants = ({ plants,handleClick,addToCart}) => {
  return (
    <div className="bg-[#FAF9F8]">
      <div className="px-2  sm:px-8">
        <h3 className="text-3xl text-center font-bold underline m-10">
          FEATURED PLANTS
        </h3>
        <p className="text-xl text-black text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mx-auto md:grid grid-cols-4 gap-5">
          {plants.map((item) => (
            <div key={item.id} className="shadow-2xl my-4">
              <div className="relative">
                <button className="absolute m-3 px-3 p-1 rounded-2xl bg-white">
                  sale!
                </button>
                <img src={item.img} alt="image" />
              </div>
              <div className="bg-[#F9F9F9]">
                <p className="text-[#B1B3B6] ml-2 ">{item.type}</p>
                <h4 className="mt-2 ml-2">{item.name}</h4>
                <img src={item.rating} alt="rate" />
                <h4 className=" ml-2">${item.price}</h4>
                <div className="m-3 gap-2 flex">
                  <div>
                    <Link to="/">
                      <button className="bg-[#FC5F64] text-white hover:bg-[#75C32C] py-2 px-4 rounded-full cursor-pointer mb-3">
                        <FaShoppingCart onClick={()=>handleClick(item)}/>
                      </button>
                    </Link>
                  </div>
                  <div>
                    <button className="bg-[#FC5F64] text-white hover:bg-[#75C32C] py-1 px-4 rounded-full cursor-pointer mb-3">
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plants;
