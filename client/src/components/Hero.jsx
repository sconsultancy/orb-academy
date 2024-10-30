import React from "react";
import HeroForm from "./HeroForm";
import Blob from "./Blob.jsx";
function Hero() {
  return (
    <div>
      {" "}
      <section className="flex justify-around   z-20  ">
        {/* Left Section */}
        <div className="flex flex-col max-w-md  space-y-1 my-10  items-center py-5 max-sm:z-20  ">
          <h1 className=" text-2xl font-semibold">Book your Free Class</h1>
          <p className=" font-semibold text-gray-500 ">
            Learn from India &apos; s Best Teachers
          </p>
          <h2 className=" text-xl font-semibold ">Enter Your Details</h2>
          <HeroForm></HeroForm>
        </div>
        {/* Right Section */}
        <div className="flex relative max-sm:absolute  w-1/3">
          <div className="absolute ">
            <Blob color="#59B2FF" width="500px"></Blob>
          </div>
          <div className="relative top-[300px] right-24 ">
            <Blob color="#80B2BD" width="300px"></Blob>
          </div>
          <div className="relative top-[250px] left-[300px] max-sm:-left-[250px] max-sm:top-[50px] ">
            <Blob color="#FDCB6E" width="300px"></Blob>
          </div>

          <img
            src="assets/home/hero_boy.png"
            alt=""
            className=" absolute -bottom-24 right-28 max-[820px]:right-16 max-md:hidden"
          />
          <img
            src="assets/home/hero_cat.png"
            alt=""
            className=" absolute -bottom-24 -right-20 max-sm:hidden"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
