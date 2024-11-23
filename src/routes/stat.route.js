import { Router } from "express";
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";
import { getStats } from "../controller/stat.controller.js";
const router = Router();

router.get("/",protectRoutes,requireAdmin,getStats);
export default router;
