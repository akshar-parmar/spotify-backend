import express from "express";
import dotenv, { configDotenv } from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import authRoutes from "./routes/auth.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statRoutes from "./routes/stat.route.js";
import connectDB from "./lib/db.js";
import fileUpload from "express-fileupload";
import path from "path";
dotenv.config();
const __dirname = path.resolve();
console.log("__DIRNAME", __dirname);
const app = express();
const PORT = process.env.PORT;

app.use(express.json()); //to parse the req.body
app.use(clerkMiddleware()); //this will add auth to req body => req.auth.userId
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
      fileSize: 20 * 1024 * 1024, //20 mb max size
    },
  })
);

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statRoutes);

//error handler
app.use((err, req, res, next) => {
  console.log("Inside error handler");
  const msg =
    process.env.NODE_ENV === "development"
      ? err.message
      : "Internal server error";
  res.status(500).json({ message: msg });
});

app.listen(PORT, () => {
  console.log("server is running on port : ", PORT);
  connectDB();
});
