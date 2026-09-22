import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import db from "./db/connect.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRoutes);

app.get("/test", (req, res) => {
  res.send("Server is running successfully at port 8000");
});

const port = process.env.PORT || 8008;
app.listen(port, async () => {
  await db();
  console.log(`Server is running on port ${port}`);
});
