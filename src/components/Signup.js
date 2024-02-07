import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="bg-[#FAF9F8] py-20 ">
      <div className="mt-40">
      <div className=" bg-white shadow-xl hadow-black sm:px-5 flex flex-col justify-center lg:mx-auto lg:w-[400px] items-center px-10 rounded-lg ">
          <form className="space-y-2 ">
            <div>
              <h1 className="text-3xl text-center font-semibold ">Sign Up</h1>
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
              <button className="my-2 bg-red-400 w-full rounded-full hover:bg-red-600 duration-300">Sign up</button>
              <p className="text-xs text-end"> Forgot Password ? </p>
            </div>
            <div className="flex gap-3">
          <p className="text-gray-500 text-sm"> Already Account Exist?</p>
          <button className="underline font-bold pb-3 "><Link to="/MyAccount">Sign in </Link></button>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;
