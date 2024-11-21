import { Router } from "express";
const router = Router();

router.get("/", (req, res, next) => {
  try {
    console.log("Inside user route try");
    throw new Error("testing");
  } catch (error) {
    console.log("inside catch user test updated");
    // console.log("printing error", error);
    next(error);
  }
});
export default router;
