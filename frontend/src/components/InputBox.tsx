import type { ReactNode } from "react"

interface inputProp{
    ref? : React.RefObject<HTMLInputElement> 
    placeholder:string , 
    iconOnEnd?:ReactNode , 
    label:string,
    type:"text" | "password" , 
    onClick? :()=>void
}


export function InputBox(prop:inputProp){
    return <div className="flex  p-2 flex-col gap-1">
        <span className="text-teal-400 text-sm font-bold">
           {prop.label}
        </span> 
        <input type={prop.type} placeholder={prop.placeholder} 
        onClick={prop.onClick}
        className={`hover:scale-103 text-gray-400 transition-all duration-300  focus:outline-none border border-teal-800 rounded-lg p-2`}/>
    </div>
}