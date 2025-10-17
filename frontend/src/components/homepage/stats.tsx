import type { ReactNode } from "react"

interface prop{
    icon:ReactNode , 
    title:string 
    number:string
}
export function Stats(prop:prop){
    return <div className="flex items-center justify-between shadow-md w-96 p-4 bg-slate-800/50  rounded-md  border border-teal-800 ">
        <div className="flex flex-col h-full gap-1">
            <div className=" text-teal-400 font">
                {prop.title}
            </div>
            <div className="text-white font-bold text-2xl">
                {prop.number}
            </div>
        </div>
        <div className={`
        ${prop.title==="YouTube"?"text-red-500":"text-teal-300"}`}>
            {prop.icon}
        </div>
    </div>
}