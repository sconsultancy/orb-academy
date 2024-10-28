import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

cors({
	origin: process.env.CLIENT_URL,
	methods: ["GET", "POST", "DELETE", "PUT"],
	allowedHeaders: ["Content-Type", "Authorization"],
});

app.use(express.json());

// database connection
mongoose
	.connect(MONGO_URI)
	.then(() => {
		console.log("mongo connected");
	})
	.catch((e) => console.log(e));

// Routes Configuration

app.get("/", (req, res) => {
	res.send({
		message: "Welcome to wizerSkills",
	});
});

app.listen(PORT, () => {
	console.log("server started");
});
