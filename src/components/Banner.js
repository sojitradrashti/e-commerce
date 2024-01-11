import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const ImageList = [
  {
    id: 1,
    img: "/assets/image1.png",
    title: "Best house plants varieties ",
    description:"Beautiful living greenery for homes and offices.",
  },
  {
    id: 2,
    img: "/assets/image2.png",
    title: "Beauty of Plants",
    description:"Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: "/assets/image3.png",
    title: "Proper Care of Plants",
    description:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
function Banner () {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  
  return (
    <>
    <div className="bg-[#FAF9F8]  relative overflow-hidden min-h-[100px] sm:min-h-[450px] justify-center items-center">
    <div className="pb-8 sm:pb-0">
      <Slider {...settings}>
        {ImageList.map((data) => (
          <div key={data.id}>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:mt-[150px] mt-[80px]">
              <div className="flex flex-col  justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1 className="text-4xl sm:text-6xl lg:text-5xl  ml-8 font-bold ">
                  {data.title}
                </h1>
                <p className="text-xl ml-8 ">{data.description}</p>
                <div>
                  <Link to="/Cart">
                  <button 
                  className="text-bold  ml-6 text-white bg-[#FC5F5F] hover:bg-[#75C32C] py-2 px-4 rounded-full">
                    SHOP NOW
                  </button>
                  </Link>
                </div>
              </div>
              <div className="order-1 sm:order-2 ">
                <div className="relative z-10">
                  <img
                    src={data.img}
                    alt=""
                    className="w-[300px] h-[300px]  sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <div className="px-10 mt-5  ">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex items-center">
          <img src="/assets/logo1.png" alt="logo"/>
         <div>
          <h4 className="font-bold text-xl">Plants Collection</h4>
          <p>Free shipping on order</p>
          </div>
        </div>
        <div>
        <div className="flex items-center">         
             <img src="/assets/logo2.png" alt="logo"/>
             <div>
          <h4 className="font-bold text-xl">Free Shipping</h4>
          <p>Any plants for your space</p>
        </div>
        </div>
        </div>

        <div>
        <div className="flex items-center"> 
          <img src="/assets/logo3.png" alt="logo"/>
          <div>
          <h4 className="font-bold text-xl">100% Money Back</h4>
          <p>If the item didn't suit you</p>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};
export default Banner;
