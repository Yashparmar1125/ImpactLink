import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//utilities imports
import connectDB from "./utils/connection.util.js";

//routes imports
import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import campaignRoute from "./routes/campaign.routes.js";
import registerRoute from "./routes/register.routes.js";
import certificateRoutes from "./routes/certificate.routes.js";

const CORS_OPTIONS = {
  origin: "http://localhost:5173",
  credentials: true,
};

//server config/initialization
dotenv.config();
const PORT = process.env.PORT || 3000;
connectDB();
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(CORS_OPTIONS));

//routes
app.use(healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ngo", campaignRoute);
app.use("/api/volunteer", registerRoute);
app.use("/api", certificateRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
