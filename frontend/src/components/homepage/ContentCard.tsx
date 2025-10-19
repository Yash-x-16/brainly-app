import { PiYoutubeLogo } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa"; 
import { delContent, getContent } from "../../utils/axios";
import { ContentDataContext, type contentType } from "../../contexts/contentDataContext";
import { useContext } from "react";

interface content{
    title : string , 
    type:"YOUTUBE" |"TWITTER" ,
    tag?:string , 
    url:string  ,
    contentId?:Number
}

export function ContentCard (prop:content){ 
    const ctx = useContext(ContentDataContext) 
    
    const {setData}  = ctx 
    
    if(ctx ===undefined){
        return
    } 

async function Dcontent() {
    const token = localStorage.getItem("token");
    
    // 1. Delete the content
    // Note: Assuming 'prop' is available in the scope where Dcontent is called (e.g., passed as a prop to the ContentCard component)
    const deleteResponse = await delContent(token as string, prop.contentId as number);
    console.log("deleted response is ", deleteResponse.data);

    // 2. Get the updated list of content
    const response2 = await getContent(token as string);
    
    // 3. FIX: Access the nested 'content' property from the response data.
    // We assume response2.data is an object like { content: [...] }
    const updatedContentArray = response2.data.content as contentType[] | undefined; 

    // 4. Update the state with the array
    setData(updatedContentArray); 
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
            onClick={async ()=>{await Dcontent()}}
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