import { useContext, useEffect, useState } from "react"
import { userContext } from "../contexts/UserContexts" 
import { Header } from "../components/homepage/header" 
import { LuBrainCircuit } from "react-icons/lu";
import toast, { Toaster } from "react-hot-toast"
import { getUser, setUserId } from "../utils/setUserId"
import { Stats } from "../components/homepage/stats"
import { PiYoutubeLogo } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { AddContentModel } from "../components/homepage/addContentModel";
export function Homepage (){ 
    const [username,setUsername]= useState<string|null>(null) 
    const token = localStorage.getItem("token") 
    const ctx = useContext(userContext) 
    if(ctx===null)
        return <div> context not provided </div>
    const {setUser} = ctx
    let ID :number; 
useEffect(()=>{
  
    if(token===null){
        toast.error("please signup",{duration:1500})
        return 
    }
    ID = setUserId(token)as number
    gu()
},[]) 

async function gu(){
    const response  = await getUser(ID as number, token as string) 
    const username = response.data.user.username 
    setUsername(username)
   
}

console.log("username from outside the function is ",username)
return <div className="h-screen relative w-screen bg-gradient-to-br flex-col from-emerald-950 via-teal-900 to-cyan-950">
    <Toaster/>
       <div className="pt-4 pl-4">
        <Header username="yash"/>
       </div>
       <div className="flex gap-10 w-full justify-center items-start mt-10">
        <Stats title="Total brains" number="1" icon={<LuBrainCircuit size={"44px"}/>}/>
        <Stats title="YouTube" number="1" icon={<PiYoutubeLogo size={"44px"}/>}/>
        <Stats title="Twitter" number="1" icon={<BsTwitterX size={"44px"} color="#1fbfd8" />}/>
       </div>
       <div className="mt-5">
        <AddContentModel/>
       </div>
    </div>
}