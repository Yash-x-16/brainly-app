import type { NextFunction, Request, Response } from "express";
import { JWT_SCRET } from "../utils/utils.js";
import jwt, { type JwtPayload } from "jsonwebtoken"
export const Middleware = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const token = req.headers["token"] 
        if(!token){
            res.status(404).json({
                message:"no token provided"
            })

            return 
        }
        const decoded = jwt.verify(token as string,JWT_SCRET as string)as JwtPayload

        if(decoded.userId){
            req.userId = Number(decoded.userId) 
            next()
        }else{
            res.status(404).json({
                message:"unauthorized by middleware"
            })
        }
    }catch(e){
        res.status(404).json({
            message:"error in middleware" , 
            error:e
        })
    }
}