import React from "react";

const Shop = () => {
  return (
    <div className="bg-[#FAF9F8]">
    <div className="px-2 m-5 ">
      <div className="p-3 m-9 flex-col sm:flex-row ">
        <h3 className="text-3xl text-center font-semibold mt-20">
          Interested? Shop This Plant
          <br /> Collection!
        </h3>
      </div>
      <div>
        <p className="text-center text-xl lg:px-40">
          Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
          consectetur adipisci velit, sed quia non numquam eius modi tempora
          incidunt.
        </p>
      </div>
      <div className="text-center m-5 pb-3">
      <button className=" bg-[#FC5F5F] px-3 py-2 rounded-3xl hover:bg-[#75C32C] text-white ">GO TO SHOP</button>
      </div>
      <div>
        <img src="/assets/image6.png" alt="image" className="object-cover w-full"/>
      </div>
    </div>
    </div>
  );
};

export default Shop;
