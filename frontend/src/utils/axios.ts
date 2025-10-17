import axios from "axios";
import { jwtDecode } from "jwt-decode"; 
import toast from "react-hot-toast";
import { BACKEND_URL } from "./urls";
interface myJWt{
     userId:string
    }

export function setUserId(token:string){
        if(token===null){
            toast.error("please login",{duration:1500}) ; 
           return
        }
        const decoded  = jwtDecode<myJWt>(token)  
        const userId = decoded.userId 
        return Number(userId)  ;
} 

export async function getUser(Id:Number,token:string){
    const response  = await axios.get(`${BACKEND_URL}/auth/getUser`,{headers:{
        token
    }}) 
    return response 
}

interface content{
    userid?:number , 
    type:string, 
    tag?:string , 
    link:string
}

export async function sendContent(data:content,token:string){
    const response = await axios.post(`${BACKEND_URL}/content/addContent`,data,
{headers:{
    token
}}) 

return response 
}

export async function getContent(token :string){
    const response = await axios.get(`${BACKEND_URL}/content/getContent`,{
        headers:{
            token
        }
    })
    return response
}
