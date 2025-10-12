import type { Request, Response } from "express";
import { ContentValidations,  shareValidation } from "../validations/validation.js";
import { client } from "../db/db.js";
import { random } from "../utils/utils.js";

export const addContent = async(req:Request,res:Response)=>{
    
    const results  = ContentValidations.safeParse(req.body) ; 
    
    if(results.error){
        res.status(400).json({
            message:"invalid validation" , 
            error:results.error
        })
        return 

    }

    try{
        const {link,title,tag,type} = results.data 
        const response = await client.content.create({
            data:{
                title , 
                type,
                link , 
                user:{connect:{
                    userId:Number(req.userId)
                }}
            },
        })
        res.json({
            message:"content added !!"
        })
    }catch(e){
        res.json({
            message:"error in the addContent" , 
            error:e
        })
    }
}

export const getContent = async(req:Request,res:Response)=>{
        try {
            const userId = req.userId ; 
            const response = await client.content.findMany({
                where:{
                    userId:Number(userId)
                }
            }) 

            res.json({
                message:"here are your contents",
                content:{...response,userId:null}
            })

        } catch (error) {
            res.json({
                message:"error in fetching" , 
                error
            })
        }
}

export const deleteContent = async(req:Request,res:Response)=>{
    try {
        const {contentId} =req.body ; 
        await client.content.delete({
            where:{
                contentId
            }
        })  

        res.json({
            message:"content deleted"
        })
    } catch (error) {
        res.status(404).json({
            message:"error occured in deleting" , 
            error
        })
    }
}

export const shareContent = async(req:Request,res:Response)=>{
    const result = shareValidation.safeParse(req.body) 
    if(result.error){
        res.status(400).json({
            message:"only boolean values are allowed"
        })

        return ;
    }  
    try {
        const share = result.data 
        if(share){
            const response = await client.link.create({
                data:{
                    hash:random(10), 
                    user:
                    {connect:{
                        userId:Number(req.userId)
                    }}              
                  },
            })
            res.status(200).json({
                message:"here is your link" ,
                link:{...response}
            })
        }else{
            await client.link.delete({
                where:{
                    userId:Number(req.userId) 
                }
            })
            res.status(200).json({
                message:"link deleted"
            })
        }
    } catch (error) {
        res.json({
            message:"error in the shareContent",
            error
        })
    }

}

export const shareContentById =async(req:Request,res:Response)=>{
 
    try {
        const hash = req.params.id
        if(!hash){
            res.status(404).json({
                message:"invalid link"

            })
            return
        }
        const response = await client.link.findFirst({
            where:{
                hash ,
                AND:{
                    userId:Number(req.userId)
                }
            }
        })
        
        if(!response){
            res.status(404).json({
                message:"no hash found"
            })
            return
        }
        const xId = response.userId 

        const content = await client.content.findMany({
            where:{
                userId:xId
            }
        })
        if(!content){
   
            res.status(404).json({
                "message":"no content found"
            })
            return

        }
        res.json({
            message:"here are your content x " , 
            content:{...content}
        })
    } catch (error) {
         res.json({
            message:"error in the shareContent",
            error
        })
    }
}