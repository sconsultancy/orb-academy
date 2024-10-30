import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <section className=" mt-[150px] flex justify-evenly  max-[1165px]:flex-col max-[1165px]:items-center max-[1165px]:space-y-6 ">
      {userInfo ? (
        userInfo.type === "student" ? (
          <div className="flex bg-[#EBFBF3] h-80 max-w-[549px] p-3 rounded">
            <div className="flex flex-col   justify-center  ">
              <h1 className=" font-bold  text-xl">Student Dashboard</h1>
              <h3 className=" w-72  text-gray-500 font-medium text-lg mt-5">
                Get Study Material, Sample Papers, Notes & NCERT Textbook
                Solution
              </h3>
              <button className="bg-gradient-to-r from-orange-400 to-rose-400 h-9  w-48 rounded-md text-white font-semibold mt-9">
                Student Dashboard
              </button>
            </div>
            <div className=" relative flex  items-end">
              <img
                src="assets/home/dashboard/dna.png"
                alt=""
                className="absolute top-0 left-16 "
              />
              <img
                src="assets/home/dashboard/earth.png"
                alt=""
                className="absolute  top-16 left-0 "
              />
              <img
                src="assets/home/dashboard/satelite_small.png"
                alt=""
                className="absolute bottom-14 -left-3 "
              />
              <img
                src="assets/home/dashboard/satelite.png"
                alt=""
                className="absolute  top-8 right-8"
              />
              <img
                src="assets/home/dashboard/setting.png"
                alt=""
                className="absolute  bottom-20 -left-2"
              />
              <img
                src="assets/home/dashboard/stu_boy.png"
                alt=""
                className="  z-10"
              />
            </div>
          </div>
        ) : (
          <div className="flex bg-[#EBFBF3] items-center h-80 max-w-[549px] p-3 pl-6">
            <div className="flex flex-col   justify-center w-72 ">
              <h1 className="font-bold  text-xl">Teacher Dashboard</h1>
              <h3 className="w-72  text-gray-500 font-medium text-lg mt-5 z-10">
                View Your Dashboard and Manage Your Classes
              </h3>
              <Link to="/teacher">
                <button className="bg-gradient-to-r from-orange-400 to-rose-400 h-9  w-48 rounded-md text-white font-semibold mt-9">
                  Teacher Dashboard
                </button>
              </Link>
            </div>

            <img
              src="assets/home/dashboard/teacher.png"
              alt=""
              className=" top-36 max-w-72 h-36"
            />
          </div>
        )
      ) : (
        ""
      )}
    </section>
  );
};

export default Dashboard;
