import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-40 bg-[#F9F9F9]">
      <div className="relative ">
        <img
          src="/assets/aboutus.jpg"
          alt="image"
          className="w-[100%] h-[550px] rounded-b-3xl"
        />
        <h1 className="absolute text-6xl font-bold text-black top-1/2 left-0 ">
          About Us
        </h1>
      </div>
      <div className="mt-20 px-6">
        <div className="grid grid-cols-2 ">
          <div>
            <h3 className="text-4xl font-20px font-bold">
              We Work Hard To Provide
              <br /> You The Best Quality <br /> Plants And Succulents
            </h3>
          </div>
          <div>
            <p className="text-xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using.
            </p>

            <button className="bg-red-500 hover:bg-green-500 text-white mt-2 p-3 px-5 rounded-full font-bold">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-40">
          <h1 className="text-center text-6xl font-bold">Our Company</h1>
          <p className="text-center mt-5 text-xl">
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit <br /> amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo, when an
            unknown printer took a galley.
          </p>
          <img
            src="/assets/aboutus2.png"
            alt="image"
            className="w-[100%] mt-4 px-12"
          />
        </div>
        <div className="grid grid-cols-2 mt-10 px-10 ">
        <div>
          <p>
            It is a long established fact that a reader will be distracted by <br/>
            the readable content of a page when looking at its layout. The <br/> point
            of using Lorem Ipsum is that it has a more-or-less normal <br/>
            distribution of letters, as opposed to using ‘Content here, <br/> content
            here’, making it look like readable English. Many <br/> desktop publishing
            packages and web page editors
          </p>
        </div>
        <div>
          <p>
            There are many variations of passages of Lorem Ipsum <br/> available, but
            the majority have suffered alteration in some <br/> form, by injected
            humour, or randomised words which don’t <br/> look even slightly
            believable. If you are going to use a passage <br/> of Lorem Ipsum, you
            need to be sure there isn’t anything <br/> embarrassing hidden in the
            middle of text.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
