import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CourseCard({
	fileName,
	name,
	details,
	teacherId,
	difficulty,
	price,
	courseId,
}) {
	const [teacherName, setTeacherName] = useState("");

	useEffect(() => {
		axios.post("/api/teacher", { teacherId }).then((e) => {
			setTeacherName(e.data);
		});
	}, []);

	return (
		<div className=" border border-black p-10 flex  justify-around max-w-[80%] rounded-md    ">
			<span className="flex">
				<div>
					<Link to={`/courses/${courseId}`}>
						<img
							className=" h-[170px] w-[170px]"
							src={`/api/download/course-profile-picture/${fileName}`}
						/>
					</Link>
				</div>
				<div className=" flex flex-col justify-evenly ml-6">
					<Link to={`/courses/${courseId}`}>
						<h1 className=" font-bold">{name}</h1>
					</Link>
					<h2 className=" max-w-lg">{details}</h2>
					<h3 className=" text-xs text-black text-opacity-50 font-bold">
						{teacherName}
					</h3>
					<h3 className=" text-xs text-black text-opacity-50  font-bold">
						{difficulty}
					</h3>
					<span className=" bg-[#FFAE51] bg-opacity-50 text-xs p-2 max-w-[90px]">
						Best Seller
					</span>
				</div>
			</span>
			<div>₹{price}</div>
		</div>
	);
}

export default CourseCard;
