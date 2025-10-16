import { useContext } from "react"
import { userContext } from "../contexts/UserContexts"
export function Homepage (){
    const ctx = useContext(userContext) 
    if(ctx===null)
        return <div> context not provided </div>
    const {setUser} = ctx
    return <div>
        homepage 
        <button onClick={()=>{
            setUser(false) ; 
        }}>
            logout 
        </button>
    </div>
}