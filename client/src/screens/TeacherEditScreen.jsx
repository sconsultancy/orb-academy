import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TeacherEditScreen() {
  const { id } = useParams();
  const [course, setCourse] = useState({});

  useEffect(() => {
    axios.post("/api/course/edit", { _id: id }).then((e) => {
      setCourse(e.data.course[0]);
      console.log(e.data.course[0]);
    });
  }, []);

  return (
    <div className=" pt-40">
      <h1>{course.courseName} </h1>
      <h2>{course.courseDetails}</h2>
      <h2>{course.courseDifficulty}</h2>
      {/* {course.courseContent.map} */}
    </div>
  );
}

export default TeacherEditScreen;
