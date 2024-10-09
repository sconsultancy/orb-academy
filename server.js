import express from "express";
import path from "path";

const app = express();

const PORT = 5000;

// app.get("/", (req, res) => {
//   res.send("the server is ready");
// });

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "client/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
);

app.listen(PORT, () => console.log("server running"));
