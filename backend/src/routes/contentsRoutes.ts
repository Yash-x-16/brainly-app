import express from "express"
import { Middleware } from "../middleware/middleware.js"
import {
    
    addContent,
    deleteContent,
    getContent, 
    shareContent,
    shareContentById

    } from "../controller/contentController.js"


const router = express.Router() 

router.post('/addContent',Middleware,addContent)
router.get('/getContent',Middleware,getContent)
router.delete('/deleteContent/:contentId',Middleware,deleteContent)
router.post('/content/share',Middleware,shareContent) 
router.get('/content/:id',Middleware,shareContentById)


export default router  ; 