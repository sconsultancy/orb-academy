import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TeacherScreen = () => {
  const { userInfo } = useSelector((s) => s.auth);
  return (
    <div className=" pt-40">
      <h1>welcome {userInfo.name}</h1> <Link to="/add-class">Add Course</Link>
    </div>
  );
};

export default TeacherScreen;
