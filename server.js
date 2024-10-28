import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send({
		message: "Welcome to wizerSkills",
	});
});

app.listen(5000, () => {
	console.log("server started");
});
