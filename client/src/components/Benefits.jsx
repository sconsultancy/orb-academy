import React from "react";

function Benefits() {
  return (
    <div>
      <section className="flex justify-center my-20">
        <div className=" flex flex-col w-[80%]  ">
          <div>
            <h1 className=" text-4xl font-medium">Powerful Online Tuitions</h1>
            <h2 className=" text-3xl font-medium  text-black text-opacity-60">
              Designed for excellence
            </h2>
          </div>
          <div className=" flex justify-evenly my-16">
            <div className=" flex flex-col items-center">
              <img src="assets/home/benefits/benefit1.png" alt="" />
              <h4 className=" max-w-[200px] text-lg font-medium text-center mt-3">
                Build a Strong Conceptual Foundation
              </h4>
            </div>
            <div className=" flex flex-col items-center">
              <img
                src="assets/home/benefits/benefit2.png"
                className=" -mb-[60px]"
                alt=""
              />
              <h4 className=" max-w-[200px] text-lg font-medium text-center mt-3">
                Ace Your Career in your Life
              </h4>
            </div>
            <div className=" flex flex-col items-center">
              <img src="assets/home/benefits/benefit3.png" alt="" />
              <h4 className=" max-w-[200px] text-lg font-medium text-center mt-3">
                Get Help in your Development
              </h4>
            </div>
          </div>
          <h3 className=" text-lg font-medium text-center">
            Wizer Academy`s unique improvement based Coaching helps you Bemome a
            Pro
          </h3>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default Benefits;
