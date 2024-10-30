import React from "react";

const Resources = () => {
  return (
    <div>
      <section className=" w-full flex flex-col items-center mb-14">
        <div className=" w-4/5 flex flex-col space-y-14 ">
          <div className=" flex flex-col space-y-4">
            <h1 className=" text-4xl font-medium">Resources</h1>
            <h2 className=" text-3xl font-medium  text-black text-opacity-60">
              To help you learn at your own pace
            </h2>
            <h3 className=" text-xl font-medium  text-black text-opacity-60 max-w-2xl">
              Be an independent self motivated learner. Our Classes are designed
              to improve your Career Potention many folds
            </h3>
          </div>

          <div className=" flex  max-md:flex-col items-center justify-evenly">
            <img src="assets/home/resources/rsc1.png" alt="" />
            <div>
              <h1 className=" text-3xl font-semibold mb-5">
                Concept Videos & Cheat Sheet
              </h1>

              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                Short & Crisp videos for better concept clarity
              </span>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                A disciplined approach for self paced coaching and improving
                Skills
              </span>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                A detailed Cheat Sheet to improve Efficiency and Effectictive
                Development
              </span>
            </div>
          </div>
          <div className=" flex  max-md:flex-col max-md:space-y-5 items-center  justify-evenly">
            <img
              src="assets/home/resources/rsc2.png"
              className=" max-md:inline md:hidden"
              alt=""
            />
            <div>
              <h1 className=" text-3xl font-semibold mb-5">
                Test and Smart Results
              </h1>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                Concept-wise Tests
              </span>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                Identify Your Weak areas through smart results
              </span>
            </div>
            <img
              src="assets/home/resources/rsc2.png"
              className=" max-md:hidden"
              alt=""
            />
          </div>
          <div className=" flex max-md:flex-col items-center justify-evenly">
            <img src="assets/home/resources/rsc3.png" alt="" />
            <div>
              <h1 className=" text-3xl font-semibold mb-5">
                Doubt`s Resolution
              </h1>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                Clear Your doubts via chat and stay doubtfree
              </span>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                Ask your question anytime - 24x7
              </span>
              <span className="flex">
                <img
                  src="assets/home/resources/rscicon.svg"
                  className=" mr-3"
                  alt=""
                />
                Connect with experts
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
