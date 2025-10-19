import { createContext, useState } from "react"; 
import { type ReactNode } from "react";
type contentOptions = "All" | "YouTube" | "Twitter"  ; 

interface CONTEXTTYPE{
    contentType:contentOptions , 
    setContentType:React.Dispatch<React.SetStateAction<contentOptions >>
}
export  const ContentType = createContext<CONTEXTTYPE | null>(null) 

export function ContentContextProvider({children}:{children:ReactNode}){
    const [contentType,setContentType] = useState<contentOptions>("All")
    return <ContentType.Provider value={{
        contentType , 
        setContentType
    }} >
        {children}
    </ContentType.Provider>
}