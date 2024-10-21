import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import multer from "multer";
import { nanoid } from "nanoid";
const router = express.Router();
import Course from "../models/courseModel.js";
// const path = require("path");
import path from "path";
import fs from "fs";

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
    const { name, detail, difficulty, teacherId } = req.body;

    const course = new Course({
      courseName: name,
      courseDetails: detail,
      courseDifficulty: difficulty,
      teacherId,
      coursePicture: {
        fileName: req.file.filename,
        path: req.file.path,
      },
    });

    const newCourse = await course.save();
    console.log(newCourse);
    res.status(200).json({ ...newCourse });
  } catch (error) {
    res.send(error);
  }

  // res.send("got picture");
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
export default router;
