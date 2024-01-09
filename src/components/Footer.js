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
          <img src="/assets/logo.png" />
          <h2 className="text-2xl font-bold">Simply Natural</h2>
          <div className="flex gap-3 ">
            <FaFacebookSquare size={30} className=" hover:bg-[#75C32C]" />
            <FaTwitter size={30} className="hover:bg-[#75C32C]" />
            <FaInstagramSquare size={30} className="hover:bg-[#75C32C]" />
            <FaLinkedinIn size={30} className="hover:bg-[#75C32C]" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Quick Links</h3>
          <p className="text-xl hover:text-[#75C32C] cursor-pointer">Introduction</p>
          <p className="text-xl hover:text-[#75C32C] cursor-pointer">know more About Us</p>
          <p className="text-xl hover:text-[#75C32C] cursor-pointer">Visit Store</p>
          <p className="text-xl hover:text-[#75C32C] cursor-pointer">Let’s Connect</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Important Links</h3>
          <p className="text-xl hover:text-[#75C32C] cursor-pointer">Privacy Policy</p>
          <p className="text-xl hover:text-[#75C32C] cursor-pointer">Shipping Details</p>
          <p className="text-xl hover:text-[#75C32C] cursor-pointer">Terms & Conditions</p>
          <p className="text-xl hover:text-[#75C32C] cursor-pointer">Media Kit</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Get In Touch With Us For <br/> The Best Quality Plants & <br/> Succulents</h3>
          <p className="text-xl hover:text-[#75C32C] cursor-pointer">
            Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit,
            sed quia non numquam eius modi tempora incidunt lores ta porro ame.
          </p>
         
        </div>
      </div>
      <hr className="mt-6 "/>
      <div className="grid grid-cols-1 sm:grid-cols-2 pb-5">
        <h5>Copyright © 2024 Simply Natural</h5>
        <h5 className="text-end">Powered by Simply Natural</h5>
      </div>
    </div>
    
    
  );
};

export default Footer;
