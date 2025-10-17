import express from "express" 
import { getUser, signin, signup } from "../controller/authController.js";
import { Middleware } from "../middleware/middleware.js";


const router = express.Router()


router.post('/signup',signup)
router.post('/signin',signin)
router.get('/getUser',Middleware,getUser)

export default router ; 