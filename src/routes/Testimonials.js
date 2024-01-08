import React from "react";

const Testimonials = () => {
  return (
    <div className="px-2  ">
      <div className="my-7 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div>
                <h4 className="text-5xl font-bold  ">Testimonial</h4>
          <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-12 mx-3 px-5">
            <img src="/assets/image4.png" />
            <div>
              <p className="text-2xl w-[70%]">
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                consectetur adipisci velit, sed quia non numquam eius modi
                tempora incidunt.{" "}
              </p>
              <div>
              <h3 className="font-bold text-2xl">Sarah Jones</h3>
              <p>Interior Designer</p>
            </div>
            </div>
          </div>
          </div>
       


        <div className="px-5">
          <div className="flex flex-col sm:flex-row items-center">
            <img src="/assets/image5.png" />
            <div>
              <p className="text-2xl w-[70%]">
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                consectetur adipisci velit, sed quia non numquam eius modi
                tempora incidunt.
              </p>
              <div>
              <h3 className="font-bold text-2xl">Jessica Foxx</h3>
              <p>Student</p>
            </div>
            </div>
            </div>
            
           
            <div className="flex flex-col sm:flex-row items-center">
            <img src="/assets/image7.png" />
            <div>
              <p className="text-2xl w-[70%]">
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                consectetur adipisci velit, sed quia non numquam eius modi
                tempora incidunt.
              </p>
              <div>
              <h3 className="font-bold text-2xl">Briana Luke</h3>
              <p>Student</p>
              </div>
            </div>
            </div>
            </div>
            </div>
        </div>
     
    </div>
  );
};

export default Testimonials;
