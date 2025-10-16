import { useContext } from "react"
import { userContext } from "../contexts/UserContexts" 
import { Header } from "../components/homepage/header"
export function Homepage (){
    const ctx = useContext(userContext) 
    if(ctx===null)
        return <div> context not provided </div>
    const {setUser} = ctx

    return <div className="h-screen w-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950">
       <div className="pt-4 pl-4">
        <Header username="yash"/>
       </div>
        homepage 
        <button onClick={()=>{ 
            setUser(false) ; 
        }}>
            logout 
        </button>
    </div>
}