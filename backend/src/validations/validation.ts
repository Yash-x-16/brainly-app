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
