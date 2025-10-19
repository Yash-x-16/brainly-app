import { LuBrainCircuit } from "react-icons/lu";
import { Button } from "../Buttons";
import { IoIosLogOut } from "react-icons/io"; 
import { useContext } from "react";
import { userContext } from "../../contexts/UserContexts";
interface header{
    username:string
}
function logout (){
    const ctx  = useContext(userContext) ; 
    if(ctx===null){
        return 
    }
    
    const {setUser}  = ctx
    localStorage.removeItem("token")

    setUser(false) ; 
}
export function Header(prop:header){

    return <div className="w-full flex  h-auto gap-3 relative">  
    <div className="size-16 rounded-xl p-2 bg-teal-400 flex items-center justify-center text-white">
         <LuBrainCircuit size={"44px"}/>
    </div>
    <div className="flex flex-col">
       <h1 className="text-white font-bold text-3xl">
        Brainly
       </h1> 
       <span className="text-teal-400">
       greetings ! {prop.username}
       </span>
    </div> 
    <div className="text-teal-300 absolute right-10 text-sm font-light">
        <Button text="signout" size="lg" type="secondary" iconOnStart={<IoIosLogOut size={"24px"}/>} onclick={logout} />
    </div>

    </div>

}