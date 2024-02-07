import React, { useState } from "react";
import Categories from "./Categories";
import Help from "./Help";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Store = () => {
  const [data, setData] = useState(Categories);
  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  return (
    <div className="mt-40 ">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-[100%] px-10 ">
        <button
          className="hover:bg-gray-200 bg-black shadow-xl border border-black rounded-full  text-white hover:text-black"
          onClick={() => setData(Categories)}
        >
          All
        </button>

        <button
          className="hover:bg-gray-200 bg-black shadow-xl border border-black rounded-full  text-white hover:text-black"
          onClick={() => filterResult("Plants")}
        >
          Plants
        </button>

        <button
          className="hover:bg-gray-200 bg-black shadow-xl border border-black rounded-full  text-white hover:text-black"
          onClick={() => filterResult("Cactus")}
        >
          Cactus
        </button>
      </div>
      <div className="px-5 mt-10 grid grid-cols-1 sm:grid-cols-3">
        {data?.map((item) => (
          <div key={item.id} className="lg:px-10 sm:px-4 ">
            <div>
            <Link to="/ProductDetails">
              <img 
                src={item.img}
                alt="image"
                
                className="bg-slate-200 lg:w-[100%] h-[350px] sm:w-[500px] mt-5"
              /></Link>
              <p className="text-gray-500">{item.type}</p>
            </div>

            <div className="mt-2">
              <h4 className="font-semibold">{item.title}</h4>
              <img src={item.rating} className="font-bold w-[20%]" />
              <p className="font-bold text-gray-700">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Help/>
      <Footer/>
    </div>
    
   
  );
};

export default Store;
