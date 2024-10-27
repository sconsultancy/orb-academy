import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";

const CourseScreen = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		axios.get("/api/courses").then((e) => {
			setCourses(e.data);
			console.log(e.data);
		});
	}, []);

	return (
		<div className=" pt-48">
			Course Page
			{courses.map((e) => {
				return (
					<CourseCard
						fileName={e.coursePicture?.fileName}
						name={e.courseName}
						details={e.courseDetails}
						teacherId={e.teacherId}
						difficulty={e.courseDifficulty}
						price={e.coursePrice}
					></CourseCard>
				);
			})}
		</div>
	);
};

export default CourseScreen;
