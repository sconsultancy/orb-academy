import React, { useState } from "react";
import { NavDropdown, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import ProfileDropdown from "./ProfileDropdown";
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

function Header() {
  const [burger, setBurger] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [sideProfile, setSideProfile] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const handleBurgerClick = (e) => {
    e.preventDefault();
    setBurger(!burger);
  };

  const handleLogin = () => {
    setIsOpen(true);
    setIsSignup(false);
  };
  const handleSignup = () => {
    setIsOpen(true);
    setIsSignup(true);
  };

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      id="header"
      className={`flex justify-around p-4 items-center h-[100px] bg-gradient-to-r 
      fixed w-[99.5vw]
      from-[rgba(255,255,255,0.1)] 
      to-[rgba(255,255,255,0)] 
      backdrop-blur-md z-50 
      border rounded-3xl 
      border-[rgba(255,255,255,0.1)]  
      shadow-md`}
    >
      <Link to="/" className="flex">
        <h1 className=" font-black text-2xl">Wizer Skills</h1>
      </Link>
      <div className="lg:flex  max-lg:hidden ">
        <Link to="/" className=" font-semibold mx-3">
          Home
        </Link>
        <Link to="/courses" className=" font-semibold mx-3">
          Courses
        </Link>
        <Link to="/resources" className=" font-semibold mx-3">
          Resources
        </Link>
        <Link to="/contact-us" className=" font-semibold mx-3">
          Contact Us
        </Link>
      </div>
      <div className="sm:flex space-x-8 max-sm:hidden ">
        {userInfo ? (
          <>
            <ProfileDropdown
              userInfo={userInfo}
              logoutHandler={logoutHandler}
            ></ProfileDropdown>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <button
                className="w-36 h-14 border border-black rounded-full font-semibold  max-sm:w-28"
                onClick={handleLogin}
              >
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button
                href="/register"
                className=" bg-black text-white font-semibold w-36 h-14 rounded-full max-sm:w-28  "
                onClick={handleSignup}
              >
                Signup
              </button>
            </Link>
          </>
        )}
      </div>

      {/* Burger Nav */}

      <button
        className=" lg:hidden max-lg:inline z-40"
        onClick={handleBurgerClick}
      >
        <div
          className={` w-6 h-1 bg-black m-1 ${
            burger ? "rotate-45  translate-y-[7px]" : ""
          } transition-all  duration-300  ease-in `}
        ></div>
        <div
          className={` w-6 h-1 bg-black m-1 ${
            burger ? " opacity-0" : ""
          } transition-all  duration-300  ease-in `}
        ></div>
        <div
          className={` w-6 h-1 bg-black m-1 ${
            burger ? "-rotate-45  translate-y-[-9px]" : ""
          } transition-all  duration-300  ease-in `}
        ></div>
      </button>
      {/* Mobile Navbar */}
      <div
        className={` ${
          burger ? "absolute" : "hidden"
        }   top-[99px] h-screen w-screen`}
      ></div>
      <div
        className={` absolute
       right-0 h-[88vh]
        top-[99px] 
        bg-white
         z-50 w-[50vw] 
        border rounded-3xl 
        border-[rgba(255,255,255,0.1)]  
        shadow-xl
        flex
         flex-col
          items-center
            space-y-4
			 pt-4

			 sm:justify-center
           ${burger ? " translate-x-0" : "translate-x-full "}

           transition
            transform
         duration-500
          ease-in
            
        `}
      >
        {userInfo ? (
          <div className=" flex flex-col border p-3">
            <span
              className=" flex"
              onClick={(e) => setSideProfile(!sideProfile)}
            >
              <FaUser></FaUser> <span className=" ml-2">{userInfo.name}</span>
            </span>

            {sideProfile ? (
              <div className=" flex flex-col ">
                <Link to="/profile">
                  <span className=" flex items-center space-y-2">
                    <FaUser></FaUser> <span>Profile</span>
                  </span>
                </Link>
                <Link onClick={logoutHandler} className=" flex items-center">
                  <IoLogOutOutline
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                  <span>Logout</span>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        <Link
          to="/"
          className={` burgLink  text-xl font-semibold mx-3 ${
            burger ? " translate-x-0 opacity-100" : " translate-x-4 opacity-0 "
          } tramsition duration-200 delay-[700ms]`}
        >
          Home
        </Link>
        <Link
          to="/classes"
          className={` burgLink  text-xl font-semibold mx-3 ${
            burger ? " translate-x-0 opacity-100" : " translate-x-4 opacity-0 "
          } tramsition duration-200 delay-[900ms]`}
        >
          Classes
        </Link>
        <Link
          to="/resources"
          className={` burgLink  text-xl font-semibold mx-3 ${
            burger ? " translate-x-0 opacity-100" : " translate-x-4 opacity-0 "
          } tramsition duration-200 delay-[1100ms]`}
        >
          Resources
        </Link>
        <Link
          to="/support"
          className={` burgLink  text-xl font-semibold mx-3 ${
            burger ? " translate-x-0 opacity-100" : " translate-x-4 opacity-0 "
          } tramsition duration-200 delay-[1300ms]`}
        >
          Support
        </Link>
        <Link
          to="/contact_us"
          className={` burgLink  text-xl font-semibold mx-3 ${
            burger ? " translate-x-0 opacity-100" : " translate-x-4 opacity-0 "
          } tramsition duration-200 delay-[1500ms]`}
        >
          Contact Us
        </Link>

        {userInfo ? (
          <></>
        ) : (
          <>
            <Link to={"/login"}>
              <button
                onClick={handleLogin}
                className="w-36 h-14 border border-black rounded-full font-semibold  max-sm:inline sm:hidden"
              >
                Login
              </button>
            </Link>

            <Link to={"/register"}>
              <button
                href="/register"
                onClick={handleSignup}
                className=" bg-black text-white font-semibold w-36 h-14 rounded-full max-sm:inline sm:hidden  "
              >
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
