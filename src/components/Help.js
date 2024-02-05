import React from "react";
import { FaPhone } from "react-icons/fa";

const Help = () => {
  return (
    <div className="lg:px-20">
    <div className="pb-8 mt-20 ">
      <div className="justify-between px-6 py-6 bg-slate-100 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-1 my-20">
        <div>
          <h3 className="font-bold text-3xl mt-15">
            Need help in choosing the <br/>right plants?
          </h3>
         <div className="flex mt-8 gap-2 items-center text-[#FC5F64] hover:text-black">
           <FaPhone />
            <button className="text-[#FC5F64] hover:text-black  ">
              ASK FOR
              HELP
            </button>
            </div>
        </div>
        <div>
          <h4>
            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
            primis eget maecenas sedurna malesuada consectetuer.
          </h4>
          <br />
          <h4>
            Ornare integer commodo mauris et ligula purus, praesent cubilia
            laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat
            fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum
            tempor quis, turpis luctus dolor sapien vivamus.
          </h4>
        </div>
      </div>
    </div>
    <hr className="mt-10"/>
    </div>
   
  );
};

export default Help;
