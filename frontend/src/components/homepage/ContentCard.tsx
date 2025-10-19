import { PiYoutubeLogo } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa"; 
import { delContent } from "../../utils/axios";


interface content{
    title : string , 
    type:"YOUTUBE" |"TWITTER" ,
    tag?:string , 
    url:string  ,
    contentId?:Number
}

export function ContentCard (prop:content){ 
  async  function Dcontent(){
        const token = localStorage.getItem("token")
        const response = await delContent(token as string , prop.contentId as number) 
        console.log(response.data)
    }
    return <div className="bg-slate-800/50 p-4 shadow-md group min-w-96 flex border border-teal-800 transition-all duration-300 gap-4 flex-col rounded-md hover:border-teal-600">
        <div className="flex justify-between items-center">
             <div className="flex  items-center gap-2"> 
                <div className={`${prop.type==="YOUTUBE"?"bg-red-500":"bg-blue-400"} p-2 rounded-lg`}>
                    {prop.type==="YOUTUBE"? <PiYoutubeLogo color="white" />:<BsTwitterX color="white"/>}
                       
                </div> 
                <span className="text-sm font-semibold text-teal-400">
                   {prop.type.toLowerCase()}
                </span>
            </div>
            <div
            onClick={Dcontent}
             className="text-red-500 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto cursor-pointer hover:text-red-600 transition-opacity duration-200">
                <MdDelete size={"24px"}/>
            </div>
        </div>
        <div className="text-white font-medium text-md"> 
            <div className="flex flex-col gap-2">
                <span>
                {prop.title}
            </span> 
            <div className="flex gap-2  items-center ">
                <span className="text-blue-400 text-sm cursor-pointer">
                       {prop.url}
                </span> 

                <a 
                target="_blank"
                href={prop.url}
                className="opacity-0 cursor-pointer group-hover:opacity-100 ml-1 transition-opacity duration-200 text-teal-300">
                    <FaExternalLinkAlt size={"14px"}/>
                </a>
            </div>
            </div>
        </div> 
        {prop.tag?<div className="self-start bg-teal-700/20 text-teal-200 px-3 py-1 rounded-full text-xs font-semibold border border-teal-800 shadow-sm">
            {prop.tag}
        </div>:""}
    </div>
}