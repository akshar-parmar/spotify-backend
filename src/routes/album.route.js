import { Router } from "express";
import { protectRoutes } from "../middleware/auth.middleware.js";
import {
  getAllAlbum,
  getAllAlbumById,
} from "../controller/album.controller.js";
const router = Router();
router.get("/", getAllAlbum);
router.get("/:albumId", getAllAlbumById);
export default router;
