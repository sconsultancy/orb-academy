"use client";
import React from "react";
import Hero_Dropdown from "./Hero_Dropdown.jsx";

function HeroForm() {
  const handleFocusInput = (e) => {
    const labels = document.getElementsByTagName("label");
    e.target.style.borderColor = "rgb(30 64 175)";
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      if (e.target.id == label.htmlFor) {
        label.style.transform = "translateY(-20px)";
        label.style.color = "rgb(30 64 175)";
      }
    }
  };
  const handleBlurInput = (e) => {
    const labels = document.getElementsByTagName("Label");
    if (!e.target.value) {
      for (let i = 0; i < labels.length; i++) {
        const label = labels[i];
        if (e.target.id == label.htmlFor) {
          label.style.transform = "translateY(0px)";
          label.style.color = "rgb(107 114 128)";
        }
        e.target.style.borderColor = "rgb(209 213 219)";
      }
    }
  };
  return (
    <div className="">
      <form action="#" className="flex flex-col space-y-4 pt-3    ">
        <div className="relative flex flex-col">
          <input
            type="text"
            id="hero_form_name"
            className=" border-b-2 outline-none text-[17px] border-b-gray-300 transition-colors  duration-300     h-9  w-full"
            required
            name="name"
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
          <label
            htmlFor="hero_form_name"
            className="inputLabel absolute bottom-[10px] left-0 text-gray-500 pointer-events-none duration-200  ease-in "
          >
            Name
          </label>
        </div>
        <div className="relative pt-[10px]">
          <span className="  flex justify-between  rounded-md  h-9 w-80">
            <input
              id="hero_form_number"
              name="hero_form_number"
              type="text"
              className="border-b-2 outline-none text-[17px] border-b-gray-300 transition-colors  duration-300     h-9  w-full"
              onFocus={handleFocusInput}
              onBlur={handleBlurInput}
            />
            {/* <label className="inputLabel"></label> */}
            {/* <button className=" bg-gradient-to-r from-blue-400 to-emerald-400 rounded-md text-white font-semibold text-[13px] w-24">
              Send OTP
            </button> */}
          </span>
          <label
            htmlFor="hero_form_number"
            className="inputLabel absolute bottom-[10px] left-0 text-gray-500 pointer-events-none duration-200  ease-in"
          >
            Mobile Number
          </label>
        </div>
        <div className="relative pt-[10px]">
          <input
            id="hero_form_email"
            type="text"
            name="hero_form_name"
            className="border-b-2 outline-none text-[17px] border-b-gray-300 transition-colors  duration-300     h-9  w-full"
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
          />
          <label
            htmlFor="hero_form_email"
            className="inputLabel absolute bottom-[10px] left-0 text-gray-500 pointer-events-none duration-200  ease-in"
          >
            Email Id
          </label>
        </div>

        <Hero_Dropdown></Hero_Dropdown>

        <button
          type="submit"
          className="h-10 bg-gradient-to-r from-sky-400 to-indigo-900 font-bold text-white z-20"
        >
          Schedule a Free Class
        </button>
      </form>
    </div>
  );
}

export default HeroForm;
