import { Router } from "express";
import { getAllUsers } from "../controller/user.controller.js";
import { protectRoutes } from "../middleware/auth.middleware.js";
const router = Router();

router.get("/", protectRoutes, getAllUsers);
export default router;
