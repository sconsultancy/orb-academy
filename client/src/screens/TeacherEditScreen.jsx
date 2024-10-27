import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TeacherEditScreen() {
	const { id } = useParams();
	const [course, setCourse] = useState({});
	const [classes, setclasses] = useState([]);
	const [class_name, setClass_name] = useState("");
	const [classNumber, setClassNumber] = useState("");

	const [classVideo, setClassVideo] = useState(null);

	useEffect(() => {
		axios.post("/api/course/edit", { _id: id }).then((e) => {
			setCourse(e.data.course[0]);
			console.log(e.data);
		});
	}, []);

	const addClasses = async (e) => {
		const form = new FormData();
		form.append("name", class_name);
		form.append("courseId", id);
		form.append("video", classVideo);
		form.append("vidNumber", classNumber);

		const res = await axios.post("/api/add-class", form);
		console.log(res);

		document.getElementById("add_class_text").value = "";
		document.getElementById("add_class_number").value = "";

		document.getElementById("add_class_video").value = null;
	};

	return (
		<div className=" pt-40 flex flex-col space-y-5  items-center">
			<button>Submit</button>
			<h1 className="">
				<span>Course Name: </span>
				{course.courseName}
			</h1>
			<h2>
				<span>Course Details: </span>
				{course.courseDetails}
			</h2>
			<h2>
				<span> Course Difficulty: </span> {course.courseDifficulty}
			</h2>
			<span className=" flex">
				<span>Course Image: </span>
				<img
					className=" h-[170px] w-[170px]"
					src={`/api/download/course-profile-picture/${course.coursePicture?.fileName}`}
					alt=""
				/>
			</span>

			{/* Add course Content  here */}
			<span>
				{course.courseContent?.map((e) => {
					return (
						<div>
							<h1>{e.className}</h1>
							<h2>Vid Number: {e.vidNumber}</h2>
							<video src={`/api/download/video/${e.fileName}`} controls></video>
						</div>
					);
				})}
			</span>

			<span>
				<input
					type="number"
					name="add_class_number"
					id="add_class_number"
					placeholder="Number of Video"
					onChange={(e) => setClassNumber(e.target.value)}
				/>
				<input
					type="text"
					name="add_class_text"
					id="add_class_text"
					placeholder="Name of the Video"
					onChange={(e) => setClass_name(e.target.value)}
				/>
				<input
					type="file"
					name="add_class_video"
					id="add_class_video"
					single
					onChange={(e) => setClassVideo(e.target.files[0])}
				/>

				<button onClick={addClasses}>Add Course Content</button>
			</span>
		</div>
	);
}

export default TeacherEditScreen;
