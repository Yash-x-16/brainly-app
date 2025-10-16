import type { Request, Response } from "express";
import { signinValidation,signupValidation } from "../validations/validation.js"; 
import  bcrypt from "bcrypt"
import dotenv from "dotenv"
import { client } from "../db/db.js";
import jwt, { type JwtPayload } from "jsonwebtoken"

dotenv.config() 

export const  signup  = async(req:Request,res:Response)=>{
    const result = signupValidation.safeParse(req.body)
    if(result.error){
        res.json({
            message:"invalid validation" , 
            error:result.error
        })
        return
    }
    try{
        const {email,username,password} = result.data ; 
        const alreadyUser = await client.user.findUnique({
            where:{
                email
            }
        })
        if(alreadyUser){
            res.json({
                message:"user already exist" , 
            })

            return
        }
        else{
            const Salt = process.env.SALT
            const hashedPassword = await bcrypt.hash(password,Number(Salt))
            const response = await client.user.create({
                data:{
                    email,
                    username , 
                    password:hashedPassword
                }
            })

            res.json({
                message:"user created" , 
                user:{...response,password:null} 
            })
        }
    }catch(e){
        res.json({
            message:"error in the signup controller" , 
            error:e
        })
    }
}

export const  signin  = async(req:Request,res:Response)=>{
   
    const result = signinValidation.safeParse(req.body)    
    
    if(result.error){
        res.json({
            message:"invalid validation" , 
            error:result.error 
        })

        return
    }
    try{
        
        const{email,password} = result.data 
        const isUserExist = await client.user.findUnique({
            where:{
                email
            }
        })
        if(isUserExist===null){

            res.json({
                message:"user not found " , 
            })
            return 

        }
        else{
            const hashedPassword = await bcrypt.compare(password,isUserExist.password) 
            if(hashedPassword){
                const JWT_SECRET=process.env.JWT_SECRET  ;
                
                const token = jwt.sign({userId:isUserExist.userId} as JwtPayload,JWT_SECRET as string) 
                
                res.status(200).json({
                    message:"user logged in" , 
                    token
                })

            }else{
                res.status(404).json({
                    message:"invalid password" 
                })
            }
        }
    }catch(e){
        res.status(400).json({
            message:"error in the signin controller" , 
            error:e
        })
    }
}