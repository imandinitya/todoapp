import express from "express";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.routes.js";

const app = express();

app.use(express.json());

app.use("/todos", todoRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
