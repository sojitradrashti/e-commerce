import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";


const Plants = ({ plants,handleClick,addToCart}) => {
  
  const lists =[
    {
      id: 1,
      img: "assets/j1.jpg",
      type: "Plants",
      name: "Boncellensis Secullant",
      rating: "/assets/Capture.png",
      price: 34,
      amount: 1,
    },
    {
      id: 2,
      img: "assets/j2.jpg",
      type: "Plants",
      name: "Cleistocactus",
      rating: "/assets/Capture.png",
      price: 25,
      amount: 1,
    },
    {
      id: 3,
      img: "assets/j3.jpg",
      type: "Plants",
      name: "Green Soil Lotus",
      rating: "/assets/Capture.png",
      price: 34,
      amount: 1,
    },
    {
      id: 4,
      img: "assets/j4.jpg",
      type: "Plants",
      name: "Money Plant",
      rating: "/assets/Capture.png",
      price: 20,
      amount: 1,
    },
    {
      id: 5,
      img: "assets/j5.jpg",
      type: "Plants",
      name: "Old Lady Cactus",
      rating: "/assets/Capture.png",
      price: 12,
      amount: 1,
    },
    {
      id: 6,
      img: "assets/j6.jpg",
      type: "Plants",
      name: "Piorro Quisquam",
      rating: "/assets/Capture.png",
      price: 32,
      amount: 1,
    },

    {
      id: 7,
      img: "assets/j7.jpg",
      type: "Plants",
      name: "Rattle Snake Tail",
      rating: "/assets/Capture.png",
      price: 45,
      amount: 1,
    },
    {
      id: 8,
      img: "assets/j8.jpg",
      type: "Plants",
      name: "Star Cactus",
      rating: "/assets/Capture.png",
      price: 20,
      amount: 1,
    },
  ]

  const [id , img ,rating ,name , price ,amount ,type] = lists

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
          {lists.map((item ,index ) => (
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
                    <Link>
                      <button onClick={()=> handleClick(item)} className="bg-[#FC5F64] text-white hover:bg-[#75C32C] py-2 px-4 rounded-full cursor-pointer mb-3">
                        <FaShoppingCart />
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
