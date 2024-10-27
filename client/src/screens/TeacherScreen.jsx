import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const TeacherScreen = () => {
	const [courses, setCourses] = useState([]);
	const { userInfo } = useSelector((s) => s.auth);

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.post("/api/course", {
				_id: userInfo._id,
			})
			.then((e) => {
				setCourses(e.data);
				console.log(e.data);
			});
	}, []);

	const handleEdit = (ele, e) => {
		console.log(e._id);
		navigate(`/teacher/${e._id}`);
	};

	return (
		<div className=" pt-40 flex justify-center">
			<div className="">
				<h1>Welcome: {userInfo.name}</h1>{" "}
				<Link to="/add-class">Add Course</Link>
				<table>
					<tr>
						<th>Name</th>
						<th>Difficulty</th>
						<th>Actions</th>
					</tr>

					{courses.map((e) => {
						return (
							<tr>
								<td className=" border p-2">{e.courseName}</td>
								<td className=" border p-2 ">{e.courseDifficulty}</td>
								<td className=" border p-2">
									<button
										className=" m-2"
										onClick={(ele) => handleEdit(ele, e)}
									>
										Edit
									</button>
									<button className=" m-2">Delete</button>
								</td>
							</tr>
						);
					})}
				</table>
			</div>
		</div>
	);
};

export default TeacherScreen;
