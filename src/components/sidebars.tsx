import { Sidebaritems } from "./sidebaritems"  
import { TweeterIcon } from "../icons/tweeterIcon" 
import { Youtubeicons } from "../icons/youtubeIcon" 
import { Logo } from "../icons/logo"
export function Sidebar(){
    return <div className="bg-white border-r h-screen w-72 fixed left-0 top-0  pl-6"> 
    <div className="flex text-2xl pt-4">
        <div className="pr-2 text-blue-600">
            <Logo/>
        </div>
        Brainly
    </div>
    <div className="pt-4 pl-4">
        <Sidebaritems texts={"Twitter"} icons={<TweeterIcon size="lg"/>}></Sidebaritems>
        <Sidebaritems texts={"Youtube"} icons={<Youtubeicons size="lg"/>}></Sidebaritems>
    </div>

    </div>
}