import { createContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react"; 

// 1. Define base content types
type contentOptions = "YOUTUBE" | "TWITTER"; 

export interface contentType{
    title:string , 
    tag?:string , 
    link:string , 
    type:contentOptions, 
    contentId?:number
}

// 2. Define the Context Interface to hold the array state and its setter
interface ContentContextType {
    // The state itself is an array of content, or undefined
    data: contentType[] | undefined; 
    
    // The setter function must manage the array state
    setData: Dispatch<SetStateAction<contentType[] | undefined>>; 
}

// 3. Define the default content as an EMPTY ARRAY
//    An empty array (or undefined) is the proper initial state for an array of content.
const defaultContent: contentType[] = []; 

// 4. Define the default context value
const defaultContextValue: ContentContextType = {
    data: defaultContent, // Default data is an empty array
    setData: () => {},     // Default setter is a no-op function
};


// 5. Create Context using the new ContentContextType interface
export const ContentDataContext = createContext<ContentContextType>(defaultContextValue);


// 6. Update the Provider Component
export function ContentDataProvider({children}:{children:ReactNode}){ 
    
    // The state must be initialized as an array type (contentType[] | undefined)
    const [data, setData] = useState<contentType[] | undefined>(defaultContent);

    // The context value matches ContentContextType
    const contextValue = { data, setData };

    return (
        <ContentDataContext.Provider value={contextValue}>
            {children} 
        </ContentDataContext.Provider>
    );
}