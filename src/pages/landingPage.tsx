import { Button } from "../components/ui/button";
import { Navbar } from "../components/ui/navbar";
import { TweeterIcon } from "../icons/tweeterIcon";
import { ArrowIcon } from "../icons/arrow";
import img1 from "../components/images/ChatGPT_Image_Mar_29__2025__07_58_47_PM-removebg-preview.png"
export function LandingPage(){
    return <div>
        <Navbar/> 
        <div className="flex justify-start h-screen w-screen items-center bg-gray-100">
            <div className="flex items-end text-5xl bg-gray-100 h-half h-96 max-w-xl ml-36 font-normal flex-col">
                <div className=" mt-10 leading-20 tracking-wider font-normal ">Where 
                    <span className="text-blue-600"> Tweets </span> and 
                        <span className="text-blue-600 "> Videos </span><br />Find Their  Second Home
                        </div>
            <div className="bg-gray-100 size-auto text-lg mt-7">
                <p>
                    Manage your  favourite Youtube videos and Tweeter posts seamlessly with Brainly . Our platform allows you to
                    create a personal collection of links ensuring your valuable content  is organized and easily accesible.  
                </p>
            </div> 
            <div className=" size-72 flex-row mr-64 mt-10 text-base ">
                <Button variant="primary"  text="Get Started" size="md" onEnd={<ArrowIcon/>}/>
            </div>
            </div>
                <div className="h-96 w-96 bg-gray-100">
                <img className=" bg-gray-100 size-auto" src={img1} alt="Description" />
            </div>
        </div>        
    </div>
}