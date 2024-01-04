import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const Mobile = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold underline m-5">
        Mobile & Accesories
      </h1>
       <div className="px-3">
        <div className="gap-2 grid xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-4  ">
          <div className="bg-slate-400 w-[15rem] h-[18rem]  rounded-2xl">
            <img
              src="/assets/m1.jpeg"
              alt=""
              className="h-[120px] w-[120px] mx-auto my-5 rounded-xl animate-pulse"
            />
            <h3 className="ml-3">realme 11 Pro 5G</h3>
            <h3 className="items-center flex font-bold">
              <FaRupeeSign className=" m-2" />
              21,999
            </h3>
            <button className="items-center flex text-white bg-lime-800 ml-2 rounded-xl gap-1 p-2 px-2">
              Buy Now
            </button>
          </div>
          <div className="bg-slate-400 w-[15rem] h-[18rem] rounded-2xl">
            <img
              src="/assets/m2.png"
              alt=""
              className="h-[120px] w-[120px] mx-auto my-5  rounded-xl animate-pulse"
            />
            <h3 className="ml-3">Earbuds</h3>
            <h3 className="items-center flex font-bold">
              <FaRupeeSign className="m-2" />
              999
            </h3>
            <button className="items-center flex text-white bg-lime-800 ml-2 rounded-xl gap-1 p-2 px-2">
              Buy Now
            </button>
          </div>
          <div className="bg-slate-400 w-[15rem] h-[18rem]  rounded-2xl">
            <img
              src="/assets/m3.png"
              alt=""
              className="h-[120px] w-[120px] mx-auto my-5  rounded-xl animate-pulse"
            />
            <h3 className="ml-3">Speaker</h3>
            <h3 className="items-center flex font-bold">
              <FaRupeeSign className=" m-2" />
              299
            </h3>
            <button className="items-center flex text-white bg-lime-800 ml-2 rounded-xl gap-1 p-2 px-2">
              Buy Now
            </button>
          </div>
          <div className="bg-slate-400 w-[15rem] h-[18rem]  rounded-2xl">
            <img
              src="/assets/m4.png"
              alt=""
              className="h-[120px] w-[120px] mx-auto my-5  rounded-xl animate-pulse"
            />
            <h3 className="ml-3">Headphone</h3>
            <h3 className="items-center flex font-bold">
              <FaRupeeSign className=" m-2" />
              499
            </h3>
            <button className="items-center flex text-white bg-lime-800 ml-2 rounded-xl gap-1 p-2 px-2">
              Buy Now
            </button>
          </div>
        </div>

        <div className="gap-3 mt-3 pr-10 flex  sm:grid-cols-1 xl:grid-cols-4 md:grid-cols-4 ">
          <div className="bg-slate-400 w-[15rem] h-[18rem] rounded-2xl">
            <img
              src="/assets/m5.png"
              alt=""
              className="h-[120px] w-[120px] mx-auto my-5 rounded-xl animate-pulse"
            />
            <h3 className="ml-3">Earbuds</h3>
            <h3 className="items-center flex font-bold">
              <FaRupeeSign className=" m-2" />
              1,999
            </h3>
            <button className="items-center flex text-white bg-lime-800 ml-2 rounded-xl gap-1 p-2 px-2">
              Buy Now
            </button>
          </div>
          <div className="bg-slate-400 w-[15rem] h-[18rem] rounded-2xl">
            <img
              src="/assets/m6.png"
              alt=""
              className="h-[120px] w-[120px] mx-auto my-5  rounded-xl animate-pulse"
            />
            <h3 className="ml-3">Laptop</h3>
            <h3 className="items-center flex font-bold">
              <FaRupeeSign className=" m-2 mr-[-20]" />
              59,999
            </h3>
            <button className="items-center flex text-white bg-lime-800 ml-2 rounded-xl gap-1 p-2 px-">
              Buy Now
            </button>
          </div>
          <div className="bg-slate-400 w-[15rem] h-[18rem] rounded-2xl">
            <img
              src="/assets/m7.png"
              alt=""
              className="h-[120px] w-[120px] mx-auto my-5  rounded-xl animate-pulse"
            />
            <h3 className="ml-3">Laptop charger</h3>
            <h3 className="items-center flex font-bold">
              <FaRupeeSign className=" m-2" />
              1,099
            </h3>
            <button className="items-center flex text-white bg-lime-800 ml-2 rounded-xl gap-1 p-2 px-2">
              Buy Now
            </button>
          </div>
          <div className="bg-slate-400 w-[15rem] h-[18rem] rounded-2xl">
            <img
              src="/assets/m8.png"
              alt=""
              className="h-[120px] w-[120px] mx-auto my-5 rounded-xl animate-pulse"
            />
            <h3 className="ml-3">Mobile holder</h3>
            <h3 className="items-center flex font-bold">
              <FaRupeeSign className=" m-2" />
              150
            </h3>
            <button className="items-center flex text-white bg-lime-800 ml-2 rounded-xl gap-1 p-2 px-2">
              Buy Now
            </button>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Mobile;
