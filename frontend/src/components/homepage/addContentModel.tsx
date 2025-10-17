import { BsTwitterX } from "react-icons/bs";
import { PiYoutubeLogo } from "react-icons/pi";
import { InputBox } from "../InputBox";
import { Button } from "../Buttons";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { sendContent } from "../../utils/axios";

export function AddContentModel(){ 
    const[Youtube,setYoutube] =  useState<boolean| null>(null) 
    const [title,setTitle] = useState<string | null>(null)
    const [link,setLink] = useState<string | null>(null) 
    const [type,setTypes]=useState<string| null>(null) 
    const [tags,setTags]=useState<string| null>(null) 
  
    function validate(){
        if(title==="" || link==="" || title===null || link===null||Youtube===null){
            toast.error("emty fields not allowed",{duration:1500})
            return false
        }else{
            return true
        }
    }
  async  function sendRequest(){
        const data ={
            title :title as string,
            link :link as string, 
            type :type as string, 
            tag:tags as string
        }
        const token = localStorage.getItem("token")
      const reponse =   await sendContent(data,token as string) 
      if(reponse.data.message==="content added !!"){
        toast.success("content added",{duration:1500})
      }
    }



    return <div className="h-auto p-3 ml-4 bg-slate-800/50 border border-teal-800 shadow-md  w-96 rounded-md flex flex-col gap-4">
        <Toaster/>
        <div className="text-white font-bold text-xl  flex pl-3  pt-3">
          Add New Content  
        </div> 
        <div className="gap-3">
            <div className="text-teal-400 font-medium ">
                Platform
            </div> 
            <div className="flex gap-3 items-center p-1 mt-1">  
                <div
                onClick={()=>{
                    setYoutube(true) 
                    setTypes("YOUTUBE")
                }}
                 className={`border-2 ${Youtube?"bg-red-500 text-white":"text-teal-400"}
                     p-3 cursor-pointer gap-2 border-teal-700 w-1/2 
                     text-lg  flex justify-center items-center rounded-lg`}>
                    <span className={`${Youtube?"text-white":"text-red-500"}`}>
                        <PiYoutubeLogo size={"24px"} />
                    </span>
                    <span className="font-medium">
                        Youtube
                    </span>
                </div>
                <div 
                onClick={()=>{
                    setYoutube(false)
                    setTypes("TWITTER")
                }}
                className={`w-1/2 gap-2 p-3 
                    transition-all duration-300 
                    ${Youtube===false?" bg-cyan-400":"text-teal-400"}
                    cursor-pointer border-2 border-teal-700
                     text-white flex justify-center items-center rounded-lg text-lg`}>
                    <span className={`${Youtube===false?"text-white":"text-cyan-500"}`}>
                        <BsTwitterX size={"18px"} />
                    </span>
                    <span className={`${Youtube===false?"text-white":"text-teal-400"}`}>
                        Twitter
                    </span>
                </div>
            </div>
        </div>
        <div>
            <InputBox placeholder="example :https:www.youtube.com?v/23456" type="text" label={"URL"} onChange={(e)=>{
                if(!e)
                    return 
                setLink(e.target.value)
            }}/>
            <InputBox placeholder="example :https:www.youtube.com?v/23456" type="text" label={"Tags(Optional)"} 
            onChange={(e)=>{
                if (!e)
                    return 
                setTags(e.target.value)
            }}/>
            <InputBox placeholder="first youtube video" type="text" label={"Title"}
            onChange={(e)=>{
                if(!e)
                    return
                setTitle(e.target.value)
            }}/> 

        </div>
        <div className="text-white ">
            <Button type="primary" 
            onclick={()=>{
               if( validate()){
                sendRequest()
               }
            }}
            size="lg" 
            text={"AddContent"} 
            iconOnStart={<FaPlus 
            size={"22px"}
             color="white"/>}/>
        </div>
    </div>
}