import { TweeterIcon } from "../../icons/tweeterIcon" 
import { InstaIcon } from "../../icons/instaIcon"
import { LinkedInIcon } from "../../icons/linkedIn"
export function Footer(){
    return <div className="bg-white justify-center w-screen flex p-2 ">
        <div className="flex ">
            follow us on 
            <div className="pt-1 pl-2">
                <TweeterIcon size="lg"/>
            </div>
            <div className="pt-1 pl-2">
                <InstaIcon/>
            </div>
            <div className="pt-1 pl-2">
                <LinkedInIcon/>
            </div>
            
        </div>
    </div>
}