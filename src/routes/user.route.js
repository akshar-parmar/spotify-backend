import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("user route testing");
});
export default router;