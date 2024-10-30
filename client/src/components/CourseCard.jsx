import axios from "axios";
import React, { useEffect, useState } from "react";

function CourseCard({ fileName, name, details, teacherId, difficulty, price }) {
	const [teacherName, setTeacherName] = useState("");

	useEffect(() => {
		axios.post("/api/teacher", { teacherId }).then((e) => {
			setTeacherName(e.data);
		});
	}, []);

	return (
		<div className=" border border-black p-10 flex  justify-around">
			<span className="flex">
				<div>
					<img
						className=" h-[170px] w-[170px]"
						src={`/api/download/course-profile-picture/${fileName}`}
					/>
				</div>
				<div className=" flex flex-col justify-evenly ml-6">
					<h1 className=" font-bold">{name}</h1>
					<h2>{details}</h2>
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
