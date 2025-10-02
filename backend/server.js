import express from "express";
import cors from "cors";
import reviewRoutes from "./routes/reviews.js";


const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/reviews", reviewRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
