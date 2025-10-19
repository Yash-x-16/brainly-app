
import type { ReactNode } from "react"

interface buttonProp{
    text:string , 
    type:"primary"|"secondary" , 
    size:"sm"|"md"|"lg"  ,
    onclick?:()=>void ,
    classname?:string ,
    iconOnStart?:ReactNode
    disabled?:boolean
} 



export function Button(prop:buttonProp){
    return <div className="flex p-3">
        <button
        onClick={prop.onclick}
        className={`${prop.type==="primary"?"bg-teal-400":""} ${prop.disabled?true:false}
            flex justify-center gap-2 items-center
        ${prop.type==="secondary"?"bg-slate-800/50  text-teal-200 rounded-lg transition border border-teal-800":null}
            ${prop.size=="lg"?"w-full":null} p-2 font-medium text-xl hover:scale-105 
            duration-300 transition-all cursor-pointer active:scale-100 rounded-lg
            `}> 
            <span className="text-gray-400 flex">
                {prop.iconOnStart}
            </span>
            <span className="text-md">
                {prop.text}
            </span>
            
        </button>
    </div>
} 
