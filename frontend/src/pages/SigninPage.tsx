import { LuBrainCircuit } from "react-icons/lu";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Buttons"; 
import { useNavigate } from "react-router-dom";
export function SigninPage(){
    const navigate = useNavigate() ; 
    return <div className="h-screen flex w-screen justify-center items-center bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950">
        <div className="h-auto p-3  w-96 rounded-xl shadow-md gap-4 flex flex-col bg-slate-900/80 text-white border border-emerald-800">
                <div className="flex items-center flex-col">
                    <div className="flex justify-center items-center p-2 size-14 mt-3 rounded-xl bg-teal-500">
                        <LuBrainCircuit size={"44px"}/>
                    </div> 
                    <div className="flex flex-col justify-center items-center mt-5 gap-2">
                        <h1 className="font-bold  text-white text-3xl">
                            Brainly
                        </h1> 
                        <span className="text-sm text-teal-400">
                            Welcome Back log in to visit your links
                        </span>
                    </div> 
          </div>
            <div className="flex flex-col">
                <InputBox placeholder="email" label="Email" type="text"/>
                <InputBox placeholder="•••••••"  label="Password" type="password" />
            </div>
            <div className="flex flex-col gap-1">
                <Button type="primary" text="Signin" size="lg"/> 
                <span
                onClick={()=>{navigate('/signup')}}
                 className="text-teal-400 cursor-pointer flex  justify-center">
                    new to Brainly? signup...
                </span>
            </div>
        </div>
    </div>
}