import React from "react";

const Shop = () => {
  return (
    <div className="bg-[#FAF9F8]">
    <div className="px-2 m-5 ">
      <div className="p-3 m-9 flex-col sm:flex-row ">
        <h3 className="text-4xl text-center font-semibold">
          Interested? Shop This Plant
          <br /> Collection!
        </h3>
      </div>
      <div>
        <p className="text-center text-2xl">
          Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
          consectetur adipisci velit, sed <br/> quia non numquam eius modi tempora
          incidunt.
        </p>
      </div>
      <div className="text-center m-5 pb-3">
      <button className=" bg-[#FC5F5F] p-3 rounded-3xl hover:bg-[#75C32C] text-white ">GO TO SHOP</button>
      </div>
      <div>
        <img src="/assets/image6.png" alt="image" className="object-cover w-full"/>
      </div>
    </div>
    </div>
  );
};

export default Shop;
