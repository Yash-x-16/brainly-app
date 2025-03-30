import { Input } from "../components/input"
import { Button } from "../components/ui/button" 
import axios from "axios" 
import { BACKEND_URL } from "../config" 
import { useRef } from "react" 
import { useNavigate } from "react-router-dom"
export function Signin(){ 
      const userNameRef = useRef<HTMLInputElement>(null) 
    const passwordRef = useRef<HTMLInputElement>(null)
     const navigate = useNavigate()
   async function signin (){ 
        const username = userNameRef.current?.value
        const password = passwordRef.current?.value 
    const response =   await  axios.post(BACKEND_URL +"/api/v1/signin",{
            
                username:username , 
                password:password
            
        })
        const jwt = response.data.token ; 
        localStorage.setItem("token",jwt) 
        navigate("/dashboard")
    }
    return <div className="flex justify-center bg-gray-200 items-center h-screen w-screen">
        <div className="bg-white rounded border min-w-48 p-8">
                <Input placeholder="username" refrence={userNameRef}/>
                <Input placeholder="password" refrence={passwordRef}/>
                <div className="flex justify-center pt-4">
                <Button variant="primary" size="lg" text="Login" fullwidth={true} loading={false} onclick={signin}/>
                </div>
        </div>
    </div>
}