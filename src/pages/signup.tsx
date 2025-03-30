import axios from "axios"
import { useRef } from "react"
import { Input } from "../components/input"
import { Button } from "../components/ui/button"
import { BACKEND_URL } from "../config" 
import { useNavigate } from "react-router-dom"
export function Signup(){
    const userNameRef = useRef<HTMLInputElement>(null) 
    const passwordRef = useRef<HTMLInputElement>(null) 
    const navigate = useNavigate()
   async function signup (){ 
        const username = userNameRef.current?.value
        const password = passwordRef.current?.value 
      await  axios.post(BACKEND_URL +"/api/v1/signup",{
            
                username:username , 
                password:password
            
        })
        alert("you've signed up !!!") 
        navigate("/signin")
    }
    return <div className="flex justify-center bg-gray-200 items-center h-screen w-screen">
        <div className="bg-white rounded border min-w-48 p-8">
                <Input placeholder="username" refrence={userNameRef}/>
                <Input placeholder="password" refrence={passwordRef}/>
                <div className="flex justify-center pt-4">
                <Button variant="primary" size="lg" text="SignUp" fullwidth={true} loading={false} onclick={signup}/>
                </div>
        </div>
    </div>
}