import React from "react";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

const Jewellery = () => {
  return (
    <div className="bg-[#FAF9F8]">
    <div className="px-2  sm:px-8">
      <h3 className="text-3xl text-center font-bold underline m-10">
        FEATURED PLANTS
      </h3>
      <p className="text-xl text-black text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
        <div className="max-w-[1200px] mx-auto md:grid grid-cols-4 gap-5 ">
            <div className="shadow-2xl my-4 ">
                <div className="relative" >
                    <button className="absolute m-3 px-3 p-1 rounded-2xl bg-white ">sale!</button>
                    <img src="assets/j1.jpg" alt="image" />
            </div>
            <div className="bg-[#F9F9F9]">
                <p className='text-[#B1B3B6] ml-2 '>Plants</p>
            <h4 className="mt-2 ml-2">Boncellensis Secullant</h4>
            <img src="/assets/Capture.png" alt="rate"/>
            <h4 className=" ml-2">$34</h4>
            <Link to="/Cart">
          <button className=" ml-20 bg-[#FC5F64] text-white hover:bg-[#75C32C] py-2 px-4 rounded-full cursor-pointer mb-3 ">
            ADD TO CART
          </button>
          </Link>
          </div>
        </div>

        <div className="shadow-2xl my-4 ">
        <div className="relative" >
            <button className="absolute m-3 px-3 p-1 rounded-2xl bg-white">sale!</button>
           <img src="assets/j2.jpg" alt="image" />
           </div>
          <div className="bg-[#F9F9F9]">
          <p className='text-[#B1B3B6] ml-2 '>Plants</p>
          <h4 className="ml-2">Cleistocactus</h4>
          <img src="/assets/Capture.png" alt="rate"/>
          <h4 className="ml-2">$25</h4>
          <Link to="/Cart">
          <button className=" ml-20 bg-[#FC5F64] text-white hover:bg-[#75C32C] py-2 px-4 rounded-full cursor-pointer mb-3 ">
            ADD TO CART
          </button>
          </Link>
          </div>
        </div>

        <div className="shadow-2xl my-4 ">
            <div>
            <img src="assets/j3.jpg" alt="image" />
       </div>
          <div className="bg-[#F9F9F9]">
          <p className='text-[#B1B3B6] ml-2 '>Plants</p>
            <h4 className="ml-2">Green Soil Lotus</h4>
            <img src="/assets/Capture.png" alt="rate"/>
            <h4 className="ml-2">$34</h4>
            <Link to="/Cart">
          <button className=" ml-20 bg-[#FC5F64] text-white hover:bg-[#75C32C] py-2 px-4 rounded-full cursor-pointer mb-3 ">
            ADD TO CART
          </button>
          </Link>
          </div>
          </div>
        
        <div className="shadow-2xl my-4 ">
        <div className="relative" >
            <button className="absolute m-3 px-3 p-1 rounded-2xl bg-white">sale!</button>
            <img src="assets/j4.jpg" alt="image" />
            </div>
          <div className="bg-[#F9F9F9]">
          <p className='text-[#B1B3B6] ml-2 '>Plants</p>
          <h4 className="ml-2">Money Plant</h4>
          <img src="/assets/Capture.png" alt="rate"/>
          <h4 className="ml-2">$20</h4>
          <Link to="/Cart">
          <button className=" ml-20 bg-[#FC5F64] text-white hover:bg-[#75C32C] py-2 px-4 rounded-full cursor-pointer mb-3 ">
            ADD TO CART
          </button>
          </Link>
        </div>
        </div>

        <div className="shadow-2xl my-4 ">
       <div>
          <img src="assets/j5.jpg" alt="image" />
          </div>
          <div className="bg-[#F9F9F9]">
          <p className='text-[#B1B3B6] ml-2 '>Plants</p>
          <h4 className=" ml-2">Old Lady Cactus</h4>
          <img src="/assets/Capture.png" alt="rate"/>
          <h4 className="ml-2">$12</h4>
          <Link to="/Cart">
          <button className=" ml-20 bg-[#FC5F64] text-white hover:bg-[#75C32C] py-2 px-4 rounded-full cursor-pointer mb-3 ">
            ADD TO CART
          </button>
          </Link>
        </div>
        </div>

        <div className="shadow-2xl my-4">
        <div className="relative" >
            <button className="absolute m-3 px-3 p-1 rounded-2xl bg-white">sale!</button>
          <img src="assets/j6.jpg" alt="image" />
          </div>
          <div className="bg-[#F9F9F9]">
          <p className='text-[#B1B3B6] ml-2 '>Plants</p>
          <h4 className="ml-2">Piorro Quisquam</h4>
          <img src="/assets/Capture.png" alt="rate"/>
          <h4 className="ml-2">$32</h4>
          <Link to="/Cart">
          <button className=" ml-20 bg-[#FC5F64] text-white hover:bg-[#75C32C] py-2 px-4 rounded-full cursor-pointer mb-3 ">
            ADD TO CART
          </button>
          </Link>
          </div>
        </div>

        <div className="shadow-2xl my-4">
        <div className="relative" >
            <button className="absolute m-3 px-3 p-1 rounded-2xl bg-white">sale!</button>
          <img src="assets/j7.jpg" alt="image" />
          </div>
          <div className="bg-[#F9F9F9]">
            <p className='text-[#B1B3B6] ml-2 '>Plants</p>
          <h4 className=" ml-2">Rattle Snake Tail</h4>
          <img src="/assets/Capture.png" alt="rate"/>
          <h4 className="ml-2">$45</h4>
          <Link to="/Cart">
          <button className=" ml-20 bg-[#FC5F64] text-white hover:bg-[#75C32C] py-2 px-4 rounded-full cursor-pointer mb-3 ">
            ADD TO CART
          </button>
          </Link>
        </div>
        </div>

        <div className="shadow-2xl my-4">
         <div>
          <img src="assets/j8.jpg" alt="image" />
          </div>
        <div className="bg-[#F9F9F9]">
        <p className='text-[#B1B3B6] ml-2 '>Plants</p>
          <h4 className=" ml-2">Star Cactus</h4>
          <img src="/assets/Capture.png" alt="rate"/>
          <h4 className="ml-2">$20</h4>
          <Link to="/Cart">
          <button className=" ml-20 bg-[#FC5F64] text-white hover:bg-[#75C32C] py-2 px-4 rounded-full cursor-pointer mb-3 ">
            ADD TO CART
          </button>
          </Link>
          </div>
        
        </div>
      </div>
    </div>
    </div>
  );
};

export default Jewellery;
