import React from "react";
import { Link } from "react-router-dom";
import { lists } from "./Data";

const Plants = ({ item, handleClick }) => {
  return (
    <div>
      <div className="px-2">
        <div className="sm:px-8 mt-40">
          <h3 className="text-3xl text-center font-bold underline ">
            FEATURED PLANTS
          </h3>
          <p className="text-xl text-black text-center m-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mt-10 md:grid grid-cols-4 px-10 gap-5">
          {lists.map((item, index) => (
            <div key={item.id} className="shadow-2xl my-4 group">
              <div className="relative">
                <div>
                  <button className="absolute m-3 px-3 p-1 rounded-2xl  bg-white">
                    sale!
                  </button>
                  <img src={item.img} alt="" />

                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-0.9 w-full  mb-3 hidden group-hover:flex duration-200 group-hover:backdrop-blur-sm h-full px-20 py-40">
                    <Link>
                      <button
                        onClick={() => handleClick(item)}
                        className="px-6 py-1 bg-slate-200 text-black font-semibold text-center hover:bg-white hover:text-black rounded-full cursor-pointer text-sm"
                      >
                        ADD TO CART
                      </button>
           
                      <button
                        className="px-12 py-1 mt-3  bg-slate-200 text-black font-semibold text-center hover:bg-white hover:text-black rounded-full cursor-pointer text-sm"
                      >
                        VIEW
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="bg-[#F9F9F9]">
                  <p className="text-[#B1B3B6] ml-2 ">{item.type}</p>
                  <h4 className="mt-2 ml-2">{item.name}</h4>
                  <img src={item.rating} alt="rate" className="w-[20%]" />
                  <h4 className=" ml-2">${item.price}</h4>
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
