import express from "express";
import cors from "cors";
import reviewRoutes from "../routes/reviews.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/reviews", reviewRoutes);

export default app;
