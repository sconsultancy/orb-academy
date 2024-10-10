import express from "express";
import path from "path";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

// app.use(notFound);
app.use(errorHandler);

// app.get("/", (req, res) => {
//   res.send("the server is ready");

app.get("/", async (req, res) => res.send("server is ready"));

// });
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "client/dist")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  );
} else {
  app.get("/", async (req, res) => res.send("server is ready"));
}
app.listen(PORT, () => console.log("server started on port ", PORT));
