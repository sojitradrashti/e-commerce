import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const ImageList = [
  {
    id: 1,
    img: "/assets/image2.jpg",
    title: "Up to 30% off on jewellery ",
    description:"lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: "/assets/image3.jpg",
    title: "Supper Offer on All Products",
    description:"Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: "/assets/image1.jpg",
    title: "Up to 70% off on all Product Sale",
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
          <div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:mt-[150px] mt-[80px]">
              <div className="flex flex-col  justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1 className="text-4xl sm:text-6xl lg:text-5xl  ml-8 font-bold ">
                  {data.title}
                </h1>
                <p className="text-sm ml-8 ">{data.description}</p>
                <div>
                  {/* <button 
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Order Now
                  </button> */}
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
    </div>
    </>
  );
};
export default Banner;
