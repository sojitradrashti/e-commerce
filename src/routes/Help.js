import React from "react";
import { FaPhone } from "react-icons/fa";

const Help = () => {
  return (
    <div className="bg-[#FAF9F8]">
    <div className="px-4 pb-8 mt-20 ">
      <div className="justify-between grid grid-cols-1 sm:grid-cols-2 gap-1 my-20">
        <div>
          <h3 className="font-bold text-5xl mt-15">
            Need help in choosing the right plants?
          </h3>
         
            <button className="text-[#FC5F64] mt-8 hover:text-black  ">
              <FaPhone className="text-[#FC5F64] hover:text-black" /> ASK FOR
              HELP
            </button>
          
        </div>
        <div>
          <h4 className="text-xl">
            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
            primis eget maecenas sedurna malesuada consectetuer.
          </h4>
          <br />
          <h4 className="text-xl">
            Ornare integer commodo mauris et ligula purus, praesent cubilia
            laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat
            fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum
            tempor quis, turpis luctus dolor sapien vivamus.
          </h4>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Help;
