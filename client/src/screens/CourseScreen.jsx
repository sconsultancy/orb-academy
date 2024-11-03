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
		<div className=" pt-32">
			{courses.map((e) => {
				return (
					<div className=" flex my-5  justify-center">
						<CourseCard
							fileName={e.coursePicture?.fileName}
							name={e.courseName}
							details={e.courseDetails}
							teacherId={e.teacherId}
							difficulty={e.courseDifficulty}
							price={e.coursePrice}
							courseId={e._id}
						></CourseCard>
					</div>
				);
			})}
		</div>
	);
};

export default CourseScreen;
