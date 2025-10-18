import { CiFilter } from "react-icons/ci"; 
import { useContext } from "react"; 
import { contentContext } from "../../contexts/ContentContext";
export function ContentModel(){ 
    const ctx = useContext(contentContext) 
    if (!ctx) {
  return null;
}

    const {setContentType} = ctx ; 


    return <div className="flex flex-col ">
        <div className="flex justify-center items-center gap-3 text-teal-300 font-medium">
            <div className="text-teal-300">
                <CiFilter size={"30px"}/>
            </div>
            <div className="text-white items-center justify-center">
               <div 
               onClick={()=>{
                setContentType("All")
               }}
               className="bg-slate-800/50 cursor-pointer text-white px-4 py-2 rounded-lg ">
                All
               </div>
            </div> 
            <div className="px-4 py-2 bg-slate-800/50 rounded-lg cursor-pointer">
                YouTube
            </div>
            <div className="px-4 py-2 bg-slate-800/50 rounded-lg cursor-pointer">
                Twitter
            </div>
        </div>
    </div>
}