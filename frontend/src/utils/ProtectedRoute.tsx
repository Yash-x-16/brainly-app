import { useContext } from "react"; 
import { userContext } from "../contexts/UserContexts";
import { Outlet, Navigate } from "react-router-dom";

export function ProtectedRoute(){
    const ctx = useContext(userContext)

    // handle missing context to satisfy TypeScript
    if (!ctx) return <Navigate to={'/signin'} />

    const { user } = ctx
    return user ? <Outlet/> : <Navigate to={'/signin'}/>
}