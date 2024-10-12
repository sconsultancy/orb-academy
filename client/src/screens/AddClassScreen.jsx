import React, { useState } from "react";

const AddClassScreen = () => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [diff, setDiff] = useState("");
  const [pic, setPic] = useState("");

  const handleAddCourseClick = (e) => {
    e.preventDefault();
    console.log(name, detail, diff, pic);
  };

  return (
    <div className=" pt-40">
      <div className="flex flex-col space-y-4 items-center justify-center">
        <span>
          <label htmlFor="teacher_course_name">Name of the Course:</label>
          <input
            type="text"
            id="teacher_course_name"
            className=" border"
            placeholder="Name of the course"
            onChange={(e) => setName(e.target.value)}
          />
        </span>

        <span>
          <label htmlFor="course_area">Course Details:</label>

          <textarea
            className=" border"
            name="course-detail"
            id="course_area"
            placeholder="Enter Details"
            onChange={(e) => setDetail(e.target.value)}
          ></textarea>
        </span>

        <span>
          <label htmlFor="course_select">Difficulty Level</label>
          <select
            name="course_difficult"
            id="course_select"
            onChange={(e) => setDiff(e.target.value)}
          >
            <option value="">Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </span>

        <span>
          <label htmlFor="course_profile_pic">Profile Picture :</label>
          <input
            type="file"
            id="course_profile_pic"
            onChange={(e) => setPic(e.target.files[0])}
          />
        </span>

        <button onClick={handleAddCourseClick}>Add Course</button>
      </div>
    </div>
  );
};

export default AddClassScreen;
