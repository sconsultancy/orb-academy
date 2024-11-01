import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import multer from "multer";
import { nanoid } from "nanoid";
const router = express.Router();
import Course from "../models/courseModel.js";
import path from "path";
import fs from "fs";
import User from "../models/userModel.js";

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads/course/picture");
	},
	filename: function (req, file, cb) {
		cb(null, `${nanoid()}-${file.originalname}`);
	},
});
const upload = multer({ storage });

router.post("/api/add-course", upload.single("picture"), async (req, res) => {
	try {
		const { name, detail, difficulty, teacherId, price } = req.body;

		const course = new Course({
			courseName: name,
			courseDetails: detail,
			courseDifficulty: difficulty,
			teacherId,
			coursePicture: {
				fileName: req.file.filename,
				path: req.file.path,
			},
			coursePrice: price,
		});

		const newCourse = await course.save();
		console.log(newCourse);
		res.status(200).json({ ...newCourse });
	} catch (error) {
		res.send(error);
	}

	res.status(200);
});

router.post("/api/course", async (req, res) => {
	const courses = await Course.find({ teacherId: req.body._id });
	res.send(courses);
});

router.post("/api/course/edit", async (req, res) => {
	const course = await Course.find({ _id: req.body._id });
	res.send({ course });
});

router.get("/api/download/course-profile-picture/:filename", (req, res) => {
	const fileName = req.params.filename;
	const filePath = path.join(
		path.resolve(),
		"uploads",
		"course",
		"picture",
		fileName
	);
	// res.send()

	try {
		if (fs.existsSync(filePath)) {
			res.sendFile(filePath);
		} else {
			res.status(404).json({ message: "File not found" });
		}
	} catch (err) {
		console.log(err);
	}
});

router.get("/api/courses", async (req, res) => {
	const courses = await Course.find({});
	res.send(courses);
});

router.post("/api/teacher", async (req, res) => {
	// console.log(req.body.teacherId);
	const teacher = await User.findOne({ _id: req.body.teacherId });
	res.send(teacher.name);
});

const videoStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads/course/video");
	},
	filename: function (req, file, cb) {
		cb(null, `${nanoid()}-${file.originalname}`);
	},
});
const uploadVideo = multer({ storage: videoStorage });

router.post("/api/add-class", uploadVideo.single("video"), async (req, res) => {
	const course = await Course.findOne({ _id: req.body.courseId });
	// console.log(course.courseContent);
	const className = req.body.name;
	const vidNumber = req.body.vidNumber;

	const fileName = req.file.filename;
	const filePath = req.file.path;
	const classId = nanoid();

	console.log(req.file);

	course.courseContent.push({
		className,
		vidNumber,
		fileName,
		filePath,
		classId,
	});

	const updatedCourse = await course.save();

	console.log(updatedCourse);

	res.send({
		updatedCourse,
	});
});

// Router to Send Video to frontend
router.get("/api/download/video/:filename", (req, res) => {
	const fileName = req.params.filename;
	const filePath = path.join(
		path.resolve(),
		"uploads",
		"course",
		"video",
		fileName
	);
	// res.send()

	try {
		if (fs.existsSync(filePath)) {
			res.sendFile(filePath);
		} else {
			res.status(404).json({ message: "File not found" });
		}
	} catch (err) {
		console.log(err);
	}
});

// Router to delete video from a course
router.post("/api/delete-class", async (req, res) => {
	// find the course from the course._id
	const course = await Course.findOne({ _id: req.body.course._id });

	// Deleting it from DB
	const newCourseContent = [];
	course.courseContent.map((e) => {
		if (e.classId == req.body.vidId) {
			// Delete file from FS
			if (fs.existsSync(e.filePath)) {
				fs.unlinkSync(e.filePath);
			} else {
				console.log("file not found");
				res.status(404).json({ message: "File not found" });
			}
		} else {
			newCourseContent.push(e);
		}
	});

	course.courseContent = newCourseContent;

	const updatedCourse = await course.save();

	res.send({ updatedCourse });
});

export default router;
