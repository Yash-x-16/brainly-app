import { useRef, useState } from "react"
import { Crossicons } from "../icons/crossicon"
import { Input } from "./input" 
import { Button } from "./ui/button"//@ts-ignore 
import axios from "axios" 
import { BACKEND_URL } from "../config"
enum ContentType  {
    youtube="youtube" , 
    tweeter= "tweeter"
}
export function CreateContentModel({open,onClose}:any){  
    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null) 
    const [type,Settype] = useState(ContentType.youtube)
    async function addContent(){
        const title = titleRef.current?.value
        const Link = linkRef.current?.value 
        axios.post( BACKEND_URL+'/api/v1/content',{
            title, 
            Link ,
            type
        },{
            headers:{
                "Authorization":localStorage.getItem("token") 
            }
        })
    }
return <div>
        {open && <div> 
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-65 flex justify-center ">
               
            </div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center ">
                <div className="flex flex-col justify-center items-center">
                    <span className="bg-white opacity-100 p-2 rounded fixed">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <Crossicons size="md" />
                            </div>
                        </div>
                        <div>
                            <Input placeholder={"Title"}  refrence={titleRef}/>
                            <Input placeholder={"Link"}  refrence={linkRef}/>
                        </div>
                        <div>
                           <div > 
                            <h1 className="text-center">Type</h1>
                            <div className="flex gap-1 p-4">
                                        <Button text="Youtube"variant={type===ContentType.youtube?"primary":"secondary"} size="md" onclick={()=>{
                                           Settype(ContentType.youtube)
                                                  }}></Button>
                                          <Button text="tweeter" variant={type===ContentType.tweeter?"primary":"secondary"} size="md"onclick={()=>{Settype(ContentType.tweeter)}}></Button>
                                     </div>
                                  <div className="flex gap-1 justify-center pb-2">
                                       <Button text="submit" variant= "primary" size="md" onclick={addContent} ></Button>
                                </div>
                            </div>
                        </div>
                        
                    </span>
                </div>     
            </div>
            
        </div>}
    </div>
}