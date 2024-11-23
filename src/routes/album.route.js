import { Router } from "express";
import { protectRoutes } from "../middleware/auth.middleware";
import { getAllAlbum, getAllAlbumById } from "../controller/album.controller";
const router = Router();
router.get("/", getAllAlbum);
router.get("/:albumId", getAllAlbumById);
export default router;
