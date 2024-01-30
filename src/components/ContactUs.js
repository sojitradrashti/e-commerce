import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="bg-[#FAF9F8]">
      <div className="px-4">
        <div className="mt-10 relative">
          <img
            src="/assets/contactus.png"
            alt="image"
            className="lg:w-[100%] lg:h-[550px] sm:w-full rounded-b-3xl"
          />
          <h1 className="absolute lg:text-6xl font-bold text-black top-1/2 left-0">
            Contact Us
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 px-4 mt-6 ">
          <div className="px-4">
          <div>
            <h2 className="text-2xl font-semibold">Contact Details</h2>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <FaLocationDot />
            <h2 className="text-xl font-bold">Our Location</h2>
          </div>
          <div>
            <p>
              1569 2nd Ave, New York, <br /> NY 10028, USA​
            </p>
          </div>
          <div className="flex gap-2 items-center mt-3 ">
            <FaPhone />
            <h2 className="text-xl font-bold">Call Us</h2>
          </div>
          <div>
            <p>+123 456 7890</p>
            <p>+123 456 7891</p>
          </div>
       
        <div>
          <div className="flex gap-2 items-center mt-3">
            <MdEmail />
            <h2 className="text-xl font-bold">Our Email</h2>
          </div>
          <div>
            <p>info@example.com</p>
            <p>support@example.com</p>
          </div>
        </div>
        </div>

        <div className="mt-4 ">
          <div>
            <h1 className="text-2xl font-semibold">Send Us a Message</h1>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Name"
                id="name"
                className="border border-black p-3 w-[100%]"
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Email"
                className="border border-black p-3 w-[100%]"
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="subject"
                className="border border-black p-3 w-[100%]"
              />
            </div>
            <div className="mt-5">
              <textarea
                type="text"
                placeholder="Message"
                className="border border-black p-3 w-[100%]"
              />
              <button className="p-3 text-white rounded-full bg-red-500 hover:bg-green-600 mb-3">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
