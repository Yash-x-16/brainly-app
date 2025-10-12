import type { EnumType } from "typescript"
import z from "zod" 

export const signupValidation = z.object({
        username:z.string().min(6).max(20),
        email:z.email() ,
        password:z.string().min(6).max(25) , 
        profilePicture:z.string().optional()
}) 

export const signinValidation = z.object({
    email:z.email() , 
    password:z.string().min(6).max(25)
}) 

export const linksValidation = z.object({
    title:z.string(), 
    link:z.string()  
})

const Type = ["YOUTUBE","TWITTER","NOTES"]

export const ContentValidations = z.object({
    title:z.string() , 
    link:z.url() , 
    tag:z.string().optional()  , 
    type:z.enum(["YOUTUBE","TWITTER","NOTE"])
})

export const shareValidation = z.object({
    share:z.boolean()
})

