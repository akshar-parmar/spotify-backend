import { Router } from "express";
import {
  checkAdmin,
  createAlbum,
  createSong,
  deleteAlbum,
  deleteSong,
} from "../controller/admin.controller.js";
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";
const router = Router();
router.use(protectRoutes, requireAdmin);
router.get("/check", checkAdmin);

//song routes
router.post("/songs", createSong);
router.delete("/songs/:id", deleteSong);

//album routes
router.post("/albums", createAlbum);
router.delete("/albums/:id", deleteAlbum);

export default router;
