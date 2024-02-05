import React from "react";

const Testimonials = () => {
  return (
    <div className="mt-20">
      <div className=" grid grid-cols-1 sm:grid-cols-2 px-10 gap-3 items-center">
        <div className="mt-0">
          <h1 className="text-4xl font-bold">Testimonials</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <img
              src="/assets/image4.png"
              alt="image"
              className="rounded-lg mt-4"
            />
            <div>
              <p>
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                consectetur adipisci velit, sed quia non numquam eius modi
                tempora incidunt.
              </p>
              <h2 className="text-xl font-semibold">Sarah Jones</h2>
              <p className="text-sm">Interior Designer</p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <img src="/assets/image5.png" alt="image" />
            <div>
              <p>
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                consectetur adipisci velit, sed quia non numquam eius modi
                tempora incidunt.
              </p>
              <h2 className="text-xl font-semibold">Jessica Foxx</h2>
              <p className="text-sm">Student</p>
            </div>
          </div>
          <br/>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <img src="/assets/image7.png" alt="image" />
            <div>
              <p>
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                consectetur adipisci velit, sed quia non numquam eius modi
                tempora incidunt.
              </p>
              <h2 className="text-xl font-semibold">Briana Luke</h2>
              <p className="text-sm">Student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

// <div className="px-4 ">
// <div className="my-7 items-center">
//   <div className="grid grid-cols-1 sm:grid-cols-2 w-[100%] px-10 py-5 ">
//     <div className=" items-center ">
//       <div>
//         <h4 className="text-5xl font-bold  ">Testimonial</h4>
//         <p className="text-xl">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </p>
//       </div>
//       <br />
//       <div className="grid grid-cols-2 gap-0  items-center ">
//         <div>
//           <img
//             src="/assets/image4.png"
//             className="w-[80%] h-[50%] rounded-lg"
//           />
//         </div>
//         <div>
//           <p>
//             Neque porro quisquam est, qui dolore ipsum quia dolor sit
//             amet, consectetur adipisci velit, sed quia non numquam eius
//             modi tempora incidunt.
//           </p>
//           <br />
//           <h4 className="font-bold text-xl">Sarah Jones</h4>
//           <p>Interior Designer</p>
//         </div>
//       </div>
//     </div>
//     <div className="w-[100%]">
//       <div className="grid-cols-2 sm:grid-cols-1">
//         <div>
//           <img
//             src="/assets/image5.png"
//             className="w-[80%] h-[50%] rounded-lg"
//           />
//         </div>
//         <div>
//           <p>
//             Neque porro quisquam est, qui dolore ipsum quia dolor sit
//             amet, consectetur adipisci velit, sed quia non numquam eius
//             modi tempora incidunt.
//           </p>
//           <br />
//           <h4 className="font-bold text-xl">Sarah Jones</h4>
//           <p>Interior Designer</p>
//         </div>
//         <div className="grid-cols-2 sm:grid-cols-1">
//           <div>
//             <img
//               src="/assets/image5.png"
//               className="w-[80%] h-[50%] rounded-lg"
//             />
//           </div>
//           <div>
//             <p>
//               Neque porro quisquam est, qui dolore ipsum quia dolor sit
//               amet, consectetur adipisci velit, sed quia non numquam eius
//               modi tempora incidunt.
//             </p>
//             <br />
//             <h4 className="font-bold text-xl">Sarah Jones</h4>
//             <p>Interior Designer</p>
//           </div>{" "}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
