import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <div className="bg-[#FAF9F8] py-20 ">
      <div className="mt-40">
        <div className=" bg-white shadow-xl hadow-black sm:px-5 flex flex-col justify-center lg:mx-auto md:mx-10 lg:w-[400px] items-center px-10 rounded-lg ">
          <form className="space-y-2 ">
            <div>
              <h1 className="text-3xl text-center font-semibold ">Login</h1>
            </div>
            <div>
              <div className="  mt-2 items-center">
                <p className="mr-5 font-semibold">Email</p>
                <input type="email" placeholder="Email" required className="outline-none h-10 border border-sm w-full"/>
              </div>
              <div className="mt-2">
              <p className="mr-5 font-semibold">Password</p>
              <input type="password" placeholder="Password" required className="outline-none h-10 border border-sm w-full"/>
              </div>
              <div className="flex gap-1 mt-3">
                <input type="checkbox"/>
                <p> Remember Me ? </p>
              </div>
              <button className="my-2 bg-red-400 w-full rounded-full hover:bg-red-600 duration-300">Login</button>
              <p className="text-xs text-end"> Forgot Password ? </p>
            </div>
          
          </form>
          <button className="underline font-bold pb-3 "><Link to="/Signup">Sign up</Link></button>
        </div>
        <Footer/>
      </div>
    </div>
  );
};


export default MyAccount;
