import React from "react";

const MyAccount = () => {
  return (
    <div className="mt-60 px-20 ">
      <div>
        <div>
          <h1 className="text-3xl font-semibold ">My Account</h1>
          <h1 className="text-5xl font-bold">Login</h1>
        </div>
        <div className="lg:px-7 w-[100%] border border-black mt-4">
        <div className="px-7">
            <label For="Username or email address ">Username or email address</label><br/>
            <input type="text" className="border border-black w-full py-3 rounded-xl"/><br/>
            <label For="Password">Password</label><br/>
            <input type="password" id="password" name="password" className="w-full py-3 rounded-xl border border-black"/><br/>
            <input type="checkbox"/>
            <label> Remember me </label><br/>
            <button className="bg-red-500 hover:bg-green-500 px-6 mb-2 py-3 text-white rounded-full">LOG IN</button><br/>
            <button className="hover:text-green-500">Lost Your Password?</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
