import { LuBrainCircuit } from "react-icons/lu";
import { Button } from "../Buttons";

interface header{
    username:string
}
export function Header(prop:header){

    return <div className="w-full flex h-auto gap-3 relative">  
    <div className="size-16 rounded-xl p-2 bg-teal-400 flex items-center justify-center text-white">
         <LuBrainCircuit size={"44px"}/>
    </div>
    <div className="flex flex-col">
       <h1 className="text-white font-bold text-3xl">
        Brainly
       </h1> 
       <span className="text-teal-400">
        {prop.username}
       </span>
    </div> 
    <div className="text-teal-300 absolute right-10 text-sm font-light">
        <Button text="signOut" size="lg" type="secondary" classname="" />
    </div>
    </div>

}