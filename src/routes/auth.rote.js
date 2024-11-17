import {Router} from "express";
const router = Router();

router.get('/',(req,res)=>{
    res.send("auth route testing")
})
export default router;