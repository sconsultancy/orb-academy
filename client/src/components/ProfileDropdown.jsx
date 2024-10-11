import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

const ProfileDropdown = ({ userInfo, logoutHandler }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <Link>
        <div
          id="nav-profile"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className=" flex items-center "
        >
          <FaUser></FaUser> <span className=" ml-2">{userInfo.name}</span>
        </div>
      </Link>

      <div
        className={` bg-white ${
          dropdownOpen ? "absolute" : "hidden"
        }  top-[80%] w-72 right-[20%]`}
      >
        <div className=" flex flex-col space-y-1 p-4">
          <Link to="/profile">
            <span className=" flex items-center space-x-2">
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
      </div>
    </div>
  );
};

export default ProfileDropdown;
