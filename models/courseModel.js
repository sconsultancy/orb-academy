import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
	courseName: {
		type: String,
		required: true,
	},
	courseDetails: {
		type: String,
		required: true,
	},
	courseDifficulty: {
		type: String,
		required: true,
	},
	coursePrice: {
		type: String,
		required: true,
	},
	teacherId: {
		type: String,
		required: true,
	},
	coursePicture: {
		type: Object,
		required: true,
	},
	courseContent: {
		type: Array,
	},
});

const Course = mongoose.model("Courses", courseSchema);
export default Course;
