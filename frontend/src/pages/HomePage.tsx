import { useContext, useEffect, useState } from "react"
import { userContext } from "../contexts/UserContexts" 
import { Header } from "../components/homepage/header" 
import { LuBrainCircuit } from "react-icons/lu";
import toast, { Toaster } from "react-hot-toast"
import { getUser, setUserId } from "../utils/axios"
import { Stats } from "../components/homepage/stats"
import { PiYoutubeLogo } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { AddContentModel } from "../components/homepage/addContentModel";
import { FilterModel } from "../components/homepage/FilterModel";
import { ContentCard } from "../components/homepage/ContentCard";
import { getContent } from "../utils/axios";



export function Homepage (){
    type contentOptions = "YOUTUBE" | "TWITTER"  
    interface ContentItem{
        title:string , 
        tag?:string , 
        link:string , 
        type:contentOptions 
    } 

    const [username,setUsername]= useState<string|null>(null) 
    const [content,setContent]=useState<ContentItem[]| null>(null) 
    const token = localStorage.getItem("token") 
    const ctx = useContext(userContext) 
    
    if(ctx===null)
        return <div> context not provided </div>
    
    let ID :number; 

async function GETcontent(){
    const response = await getContent(token as string) ; 
     setContent(response.data.content) 
}
    
async function Getuser(){
    const response  = await getUser(ID as number, token as string) 
    const username = response.data.user.username 
    setUsername(username)
   
}

useEffect(()=>{
    console.log("updated content is : ",content)
    console.log(" filtered tags is ",content?.filter((x)=>x.tag))
},[content])
useEffect(()=>{
  
    if(token===null){
        toast.error("please signup",{duration:1500})
        return 
    }
    ID = setUserId(token)as number
    Getuser() 
    GETcontent() 
    console.log("effect ran",content) ; ;

},[]) 


console.log("username from outside the function is ",username)
return <div className="h-auto relative w-screen bg-gradient-to-br flex-col from-emerald-950 via-teal-900 to-cyan-950">
        <Toaster/>
            <div className="pt-4 pl-4">
                <Header username="yash"/>
            </div>
            <div className="flex gap-10 w-full justify-center items-start mt-10">
                <Stats title="Total brains" number="1" icon={<LuBrainCircuit size={"44px"}/>}/>
                <Stats title="YouTube" number="1" icon={<PiYoutubeLogo size={"44px"}/>}/>
                <Stats title="Twitter" number="1" icon={<BsTwitterX size={"30px"} color="#1fbfd8" />}/>
            </div>
            <div className="flex gap-5">
                <div className="mt-5">
                <AddContentModel/>
            </div> 
            <div className="flex flex-col gap-4 items-start p-2">
                    <div className="mt-5">
                        <FilterModel/>
                    </div> 
                    <div className="">
                        {content===null?<div>
                            no content yet
                        </div>:content.map((x,idx)=>{return <div key={idx} className="max-w-sm w-full sm:w-[300px]">
                                    <ContentCard
                                        title={x.title}
                                        url={x.link || x.link}
                                        tag={x.tag}
                                        type={x.type}
                                    />
                                    </div>})}
                    </div>
            </div>
       </div>
      
    </div>
}