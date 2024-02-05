import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="m-7 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        <div>
          <img src="/assets/logo.png"className="h-[200px] w-[200px]" />
          <h2 className="text-2xl font-bold">Simply Natural</h2>
          <div className="flex gap-3 ">
            <FaFacebookSquare size={30} className="hover:bg-[#75C32C]" />
            <FaTwitter size={30} className="hover:bg-[#75C32C]" />
            <FaInstagramSquare size={30} className="hover:bg-[#75C32C]" />
            <FaLinkedinIn size={30} className="hover:bg-[#75C32C]" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <p className="hover:text-[#75C32C] cursor-pointer">Introduction</p>
          <p className="hover:text-[#75C32C] cursor-pointer">know more About Us</p>
          <p className="hover:text-[#75C32C] cursor-pointer">Visit Store</p>
          <p className=" hover:text-[#75C32C] cursor-pointer">Let’s Connect</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Important Links</h3>
          <p className=" hover:text-[#75C32C] cursor-pointer">Privacy Policy</p>
          <p className=" hover:text-[#75C32C] cursor-pointer">Shipping Details</p>
          <p className=" hover:text-[#75C32C] cursor-pointer">Terms & Conditions</p>
          <p className="hover:text-[#75C32C] cursor-pointer">Media Kit</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Get In Touch With Us For <br/> The Best Quality Plants & <br/> Succulents</h3>
          <p className="cursor-pointer">
            Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit,
            sed quia non numquam eius modi tempora incidunt lores ta porro ame.
          </p>
         
        </div>
      </div>
      
    </div>
    
    
  );
};

export default Footer;
