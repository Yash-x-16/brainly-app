import { LuBrainCircuit } from "react-icons/lu";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Buttons"; 
import { useNavigate } from "react-router-dom"; 
import { useState } from "react"; 
import axios from "axios"
import { BACKEND_URL } from "../utils/urls";
import { Toaster,toast } from "react-hot-toast";
export function SignupPage(){
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('') 

    async function SendRequest(){
        const response = await axios.post(`${BACKEND_URL}/auth/signup`,{
            email,
            password , 
            username
        }) 
        console.log("response from signup is ",response.data) ; 
        if(response.data.message==="invalid validation"){
            toast.error(`${response.data.message}`,{duration:1500})
        } 
        if(response.data.message==="user created"){
            toast.success('sucess',{duration:1500}) 
            navigate('/signin')
        }
    }

    const navigate = useNavigate() ; 
    return <div className="h-screen flex w-screen justify-center items-center bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950"> 
                <Toaster/>
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
                            Save Your Favourite Youtube and Twitter links
                        </span>
                    </div> 
          </div>
            <div className="flex flex-col">
                <InputBox placeholder="email" label="Email" type="text" onChange={(e)=>{
                    if(!e)
                        return 
                    setEmail(e?.target.value)
                }} />
                <InputBox placeholder="username" label="Username" type="text" onChange={(e)=>{
                    if(!e)
                        return 
                    setUsername(e?.target.value)
                }} />
                <InputBox placeholder="•••••••"  label="Password" type="password" 
                 onChange={(e)=>{
                    if(!e)
                     return 
                    setPassword(e?.target.value)
                }} />
            </div>
            <div className="flex flex-col gap-1">
                <Button type="primary" text="Signup" size="lg" onclick={SendRequest}/> 
                <span
                onClick={()=>{navigate('/signin')}}
                 className="text-teal-400 cursor-pointer flex  justify-center">
                    already have an account ? signin
                </span>
            </div>
        </div>
    </div>
}