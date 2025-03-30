import { Logo } from "../../icons/logo" 
import { Button } from "./button" 
import { UserIcon } from "../../icons/userIcon"
import { useNavigate } from "react-router-dom"
import { DarkIcon } from "../../icons/darkIcon"

export function Navbar(){ 
    const navigate = useNavigate() 
  
return (<div className="bg-gray-100 w-screen fixed flex justify-between">
    <div className="flex text-2xl p-4 ">
        <div className="pr-2 text-blue-600 ">
                    <Logo/>
                </div>
                Brainly
            </div> 
            <div className="pt-4 mr-4 flex p-2">
                <div className="pr-4 pt-1 cursor-pointer"> 
                <DarkIcon/>
                </div>
                <Button variant="primary" size="md" text="Login" onStart={<UserIcon/>} onclick={()=>{
                    navigate('/signin')
                }}/>
            </div>
    </div>
    )

}