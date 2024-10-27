import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const AddClassScreen = () => {
	const [name, setName] = useState("");
	const [detail, setDetail] = useState("");
	const [difficulty, setDiff] = useState("");
	const [picture, setPic] = useState("");
	const [price, setPrice] = useState("");

	const { userInfo } = useSelector((s) => s.auth);

	const handleAddCourseClick = async (e) => {
		e.preventDefault();

		const form = new FormData();
		// const form
		form.append("name", name);
		form.append("detail", detail);
		form.append("difficulty", difficulty);
		form.append("teacherId", userInfo._id);
		form.append("price", price);

		form.append("picture", picture);

		const res = await axios.post("/api/add-course", form, {});
		console.log(res);
	};

	return (
		<div className=" pt-40">
			<form
				action="/api/add-course"
				method="post"
				encType="multipart/form-data"
				className="flex flex-col space-y-4 items-center justify-center"
			>
				<span>
					<label htmlFor="teacher_course_name">Name of the Course:</label>
					<input
						type="text"
						id="teacher_course_name"
						name="course-name"
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
						name="courseProfile"
						id="course_profile_pic"
						onChange={(e) => setPic(e.target.files[0])}
					/>
				</span>

				<span>
					<label htmlFor="">Price</label>

					<input
						type="text"
						id="teacher_course_price"
						name="course-price"
						className=" border"
						placeholder="Price of the course"
						onChange={(e) => setPrice(e.target.value)}
					/>
				</span>

				<button onClick={handleAddCourseClick}>Add Course</button>
			</form>
		</div>
	);
};

export default AddClassScreen;
