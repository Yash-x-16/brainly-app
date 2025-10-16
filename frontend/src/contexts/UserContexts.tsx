import { createContext,  useState, type ReactNode } from "react"; 


export  const userContext = createContext<AuthUser | null>(null) ; 

interface AuthUser{
    user: boolean;
    setUser: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContextProvider = ({children}:{children:ReactNode})=>{ 
    const[user,setUser] = useState(true) ; 
    return <userContext.Provider value={{
        user , 
        setUser
    }}>
        {children}
    </userContext.Provider>
}
