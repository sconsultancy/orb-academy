import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

function TeacherEditScreen() {
	const { id } = useParams();
	const [course, setCourse] = useState({});
	const [classes, setclasses] = useState([]);
	const [class_name, setClass_name] = useState("");
	const [uploading, setUploading] = useState({
		progress: 0,
		isUploading: false,
	});
	const [classNumber, setClassNumber] = useState("");

	const [courseName, setCourseName] = useState({
		name: "",
		editable: false,
	});

	const [courseDetails, setCourseDetails] = useState({
		details: "",
		editable: false,
	});

	const [courseDifficulty, setCourseDifficulty] = useState({
		diff: "",
		editable: false,
	});

	const [coursePicture, setCoursePicture] = useState({
		picture: null,
		editable: false,
	});

	const [classVideo, setClassVideo] = useState(null);

	// Use Effect to get the course Data
	useEffect(() => {
		axios.post("/api/course/edit", { _id: id }).then((e) => {
			setCourse(e.data.course[0]);
			console.log(e.data);
		});
	}, []);

	// Add Class Video
	const addClasses = async (e) => {
		const form = new FormData();
		form.append("name", class_name);
		form.append("courseId", id);
		form.append("video", classVideo);
		form.append("vidNumber", classNumber);

		const res = await axios.post("/api/add-class", form, {
			onUploadProgress: (data) => {
				// console.log(Math.round(data.progress * 100));
				setUploading({
					progress: Math.round(data.progress * 100),
					isUploading: true,
				});

				document.getElementById(
					"upload_progress_bar"
				).style.width = `${Math.round(data.progress * 100)}%`;

				if (Math.round(data.progress * 100) == 100) {
					setUploading({
						progress: 0,
						isUploading: false,
					});
				}
			},
		});
		console.log(res.data.updatedCourse);
		setCourse(res.data.updatedCourse);

		document.getElementById("add_class_text").value = "";
		document.getElementById("add_class_number").value = "";

		document.getElementById("add_class_video").value = null;
	};

	// Handle Edit Course Name
	const handleEditCourseName = (e) => {
		e.preventDefault();
		const { name, editable } = courseName;
		setCourseName({ name, editable: !editable });
	};

	// Handle Change in name input File
	const handleCourseNameChange = (e) => {
		const { name, editable } = courseName;
		setCourseName({ name: e.target.value, editable });
	};

	// handle Change in Details text area
	const handleCourseDetailChange = (e) => {
		const { details, editable } = courseDetails;
		setCourseDetails({ details: e.target.value, editable });
	};

	// handle Edit Course Details
	const handleEditCourseDetail = (e) => {
		e.preventDefault();
		const { details, editable } = courseDetails;
		setCourseDetails({ details, editable: !editable });
	};

	// handle Click in Edit Difficulty
	const handleEditCourseDifficulty = (e) => {
		e.preventDefault();
		const { diff, editable } = courseDifficulty;
		setCourseDifficulty({ diff, editable: !editable });
	};

	const handleCourseDifficultyChange = (e) => {
		const { diff, editable } = courseDifficulty;
		setCourseDifficulty({ diff: e.target.value, editable });
		console.log(e.target.value);
	};

	const handleEditCoursePicture = (e) => {
		e.preventDefault();
		const { picture, editable } = coursePicture;
		setCoursePicture({
			picture,
			editable: !editable,
		});
	};

	const handleCoursePictureChange = (e) => {
		const { picture, editable } = coursePicture;
		setCoursePicture({
			picture: e.target.files[0],
			editable,
		});
	};

	const handleVideoEdit = (element, details) => {
		console.log(details);
	};
	const handleVideoDelete = async (videoDetails) => {
		const res = await axios.post("/api/delete-class", {
			vidId: videoDetails.classId,
			course,
		});
		console.log(res.data);
		setCourse(res.data.updatedCourse);
	};

	const handleEditCourseSubmit = async (e) => {
		e.preventDefault();
		// if Image send form data
		const formData = new FormData();
		if (coursePicture.editable) {
			if (courseName.editable) {
				formData.append("courseName", courseName.name);
			}
			if (courseDetails.editable) {
				formData.append("courseDetails", courseDetails.details);
			}
			if (courseDifficulty.editable) {
				formData.append("courseDifficulty", courseDifficulty.diff);
			}
			formData.append("id", id);
			formData.append("picture", coursePicture.picture);

			const response = await axios.post("/api/edit-course-withpic", formData);
			setCourse(response.data.updatedCourse);
		} else {
			const res = await axios.post("/api/edit-course", {
				id,
				courseName: courseName.editable ? courseName.name : null,
				courseDetails: courseDetails.editable ? courseDetails.details : null,
				courseDifficulty: courseDifficulty.editable
					? courseDifficulty.diff
					: null,
			});
			setCourse(res.data.updatedCourse);
			// console.log(res.data.updatedCourse);
		}
	};

	// console.log(uploading.progress);

	return (
		<div className=" pt-40 flex flex-col  items-center  mb-28  ">
			<div className=" flex flex-col  space-y-5">
				<button
					onClick={handleEditCourseSubmit}
					className=" bg-black text-white"
				>
					Submit
				</button>

				<div className=" border flex justify-between ">
					<h1 className=" ">
						<span>Course Name: </span>
						{course.courseName}

						{courseName.editable && (
							<input
								className=" ml-3 p-1"
								type="text"
								value={courseName.name}
								placeholder={"Write the new Name"}
								onChange={handleCourseNameChange}
							/>
						)}
					</h1>

					<button onClick={handleEditCourseName}>
						<CiEdit className=" w-5 h-5 " />
					</button>
				</div>

				<div className=" border flex justify-between">
					<h2 className=" max-w-lg">
						<span>Course Details: </span>
						{course.courseDetails}

						{courseDetails.editable && (
							<textarea
								className=" w-[20em] ml-3"
								placeholder="Enter the new Details"
								value={courseDetails.details}
								onChange={handleCourseDetailChange}
							></textarea>
						)}
					</h2>
					<button onClick={handleEditCourseDetail}>
						<CiEdit className=" w-5 h-5" />
					</button>
				</div>

				<div className=" border flex justify-between">
					<h2>
						<span> Course Difficulty: </span> {course.courseDifficulty}
						{courseDifficulty.editable && (
							<select
								name="course_difficult"
								id="course_select"
								onChange={handleCourseDifficultyChange}
							>
								<option value="">Select Level</option>
								<option value="beginner">Beginner</option>
								<option value="intermediate">Intermediate</option>
								<option value="advanced">Advanced</option>
							</select>
						)}
					</h2>
					<button onClick={handleEditCourseDifficulty}>
						<CiEdit className=" w-5 h-5" />
					</button>
				</div>
				<div className=" border flex justify-between">
					<span className=" flex">
						<span>Course Image: </span>
						<img
							className=" h-[170px] w-[170px]"
							src={`/api/download/course-profile-picture/${course.coursePicture?.fileName}`}
							alt=""
						/>
					</span>
					{coursePicture.editable && (
						<input
							type="file"
							name="courseProfile"
							id="course_profile_pic"
							onChange={handleCoursePictureChange}
						/>
					)}

					<button onClick={handleEditCoursePicture}>
						<CiEdit className=" w-5 h-5" />
					</button>
				</div>

				{/* Add course Content  here */}
				<span className=" flex flex-col space-y-5">
					{course.courseContent?.map((e) => {
						return (
							<div className=" border flex justify-between">
								<span>
									<h1>{e.className}</h1>
									<h2>Vid Number: {e.vidNumber}</h2>
									<video
										src={`/api/download/video/${e.fileName}`}
										controls
									></video>
								</span>
								<span className=" p-3">
									{/* <button onClick={(ele) => handleVideoEdit(ele, e)}>
										<CiEdit className=" w-5 h-5 mr-3" />
									</button> */}
									<button onClick={(ele) => handleVideoDelete(e)}>
										<MdDeleteForever className=" w-5 h-5" />
									</button>
								</span>
							</div>
						);
					})}
				</span>

				<span>
					{uploading.isUploading && (
						<div className="  w-full mb-4">
							Uploading
							<div className=" bg-white border  ">
								<div
									id="upload_progress_bar"
									className={`w-[0%] bg-slate-500 h-4`}
								></div>
							</div>
						</div>
					)}

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
		</div>
	);
}

export default TeacherEditScreen;
