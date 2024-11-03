import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

function ClassScreen() {
	const { id } = useParams();
	const [course, setCourse] = useState({});

	const [teacherName, setTeacherName] = useState("");

	// Use Effect to get the course Data
	useEffect(() => {
		axios.post("/api/course/edit", { _id: id }).then((e) => {
			setCourse(e.data.course[0]);
			console.log(e.data.course[0]);
		});
	}, []);

	useEffect(() => {
		const teacherId = course.teacherId;
		console.log(course);
		if (course.teacherId) {
			axios.post("/api/teacher", { teacherId }).then((e) => {
				setTeacherName(e.data);
			});
		}
	}, [course]);

	console.log(course);

	return (
		<div className=" pt-48 flex  justify-center ">
			<div className=" border border-black p-10 flex flex-col  justify-around w-[90%] rounded-md    ">
				<span className="flex">
					<div>
						<img
							className=" h-[170px] w-[170px]"
							src={`/api/download/course-profile-picture/${course.coursePicture?.fileName}`}
						/>
					</div>
					<div className=" flex flex-col justify-evenly ml-6">
						<h1 className=" font-bold">{course.courseName}</h1>
						<h2 className=" max-w-lg">{course.courseDetails}</h2>
						<h3 className=" text-xs text-black text-opacity-50 font-bold">
							{teacherName}
						</h3>
						<h3 className=" text-xs text-black text-opacity-50  font-bold">
							{course.courseDifficulty}
						</h3>
						<span className=" bg-[#FFAE51] bg-opacity-50 text-xs p-2 max-w-[90px]">
							Best Seller
						</span>
					</div>
				</span>

				{course.courseContent?.map((e) => {
					if (e) {
						return (
							<VideoCard fileName={e.fileName} name={e.className}></VideoCard>
						);
					}
				})}
			</div>
		</div>
	);
}

export default ClassScreen;
