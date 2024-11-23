import { Router } from "express";
import { requireAdmin,protectRoutes } from "../middleware/auth.middleware.js";
import {
  getAllSong,
  getFeaturedSong,
  getMadeForYouSongs,
  getTrendingSong,
} from "../controller/song.controller.js";
const router = Router();

router.get("/", protectRoutes, requireAdmin, getAllSong);
router.get("/featured", getFeaturedSong);
router.get("/made-for-you", getMadeForYouSongs);
router.get("/trending", getTrendingSong);
export default router;
