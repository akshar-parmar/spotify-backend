import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
  res.send("admin routes testing");
});
export default router;