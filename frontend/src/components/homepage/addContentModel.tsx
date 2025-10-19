import { BsTwitterX } from "react-icons/bs";
import { PiYoutubeLogo } from "react-icons/pi";
import { InputBox } from "../InputBox";
import { Button } from "../Buttons";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { useState, useContext } from "react";
import { sendContent } from "../../utils/axios";
import { ContentDataContext } from "../../contexts/contentDataContext";
import {type contentType } from "../../contexts/contentDataContext"; // Assuming contentType is exported here

export function AddContentModel() {  
    type contentOptions = "YOUTUBE" | "TWITTER"; 

    const ctx = useContext(ContentDataContext);
    
    if (!ctx) {
        return <div className="text-red-500">Error: Context not loaded.</div>;
    }

    const { setData } = ctx;

    const [Youtube, setYoutube] = useState<boolean | null>(null); 
    const [title, setTitle] = useState<string | null>(null);
    const [link, setLink] = useState<string | null>(null); 
    const [type, setTypes] = useState<string | null>(null); 
    const [tags, setTags] = useState<string | null>(null); 
 
    function validate() {
        // Trim strings before checking for emptiness
        const trimmedTitle = title ? title.trim() : null;
        const trimmedLink = link ? link.trim() : null;

        if (!trimmedTitle || !trimmedLink || Youtube === null) {
            toast.error("Title, URL, and Platform are required.", { duration: 1500 });
            return false;
        }
        return true;
    }

    const isValidContentOption = (str: string | null): str is contentOptions => {
        return str === "YOUTUBE" || str === "TWITTER";
    }

    // New helper function to reset all form state
    const resetForm = () => {
        setTitle(null);
        setLink(null);
        setTypes(null);
        setTags(null);
        setYoutube(null);
    }

    async function sendRequest() {
        // Ensure all required fields are validated before proceeding
        if (!validate()) {
            return;
        }
        
        const contentToSend: contentType = {
            title: title!.trim(),
            link: link!.trim(), 
            tag: tags ? tags.trim() : undefined, // Optional field
            type: type! as contentOptions, // Assertion is safer here after validation and platform selection
        }; 
        
        // Final type validation using the helper function
        if (!isValidContentOption(contentToSend.type)) {
            toast.error("Please select a valid platform.", { duration: 1500 });
            return; 
        }

        // 1. Optimistic UI Update: Update state before API call for instant feedback
        setData(prevData => {
            if (!prevData) {
                return [contentToSend];
            }
            return [...prevData, contentToSend]; 
        });
        
        // 2. Clear Form Fields IMMEDIATELY after successful optimistic update
        resetForm();

        const token = localStorage.getItem("token");
        
        try {
            // 3. Send Request to Backend
            const response = await sendContent(contentToSend, token as string); 
            
            if (response.data.error) {
                // Handle API error (e.g., if the link was bad or duplicate)
                // In a real app, you might roll back the state update here if the API fails
                toast.error(`Error adding content: ${response.data.error}`, { duration: 2500 }); 
            } else {
                toast.success("Content added successfully!", { duration: 1500 });
            }
            
        } catch (error) {
            toast.error("Network error. Could not add content.", { duration: 2500 });
        }
    }

    return (
        <div className="h-auto p-3 ml-4 bg-slate-800/50 border border-teal-800 shadow-md w-96 rounded-md flex flex-col gap-4">
            <Toaster/>
            <div className="text-white font-bold text-xl flex pl-3 pt-3">
                Add New Content  
            </div> 
            
            {/* Platform Selection */}
            <div className="gap-3">
                <div className="text-teal-400 font-medium">
                    Platform
                </div> 
                <div className="flex gap-3 items-center p-1 mt-1">  
                    <div
                        onClick={() => {
                            setYoutube(true); 
                            setTypes("YOUTUBE");
                        }}
                        className={`border-2 ${Youtube === true ? "bg-red-500 text-white border-red-500" : "text-teal-400 border-teal-700"}
                        p-3 cursor-pointer gap-2 w-1/2 
                        text-lg flex justify-center items-center rounded-lg transition-colors`}>
                        <span className={`${Youtube === true ? "text-white" : "text-red-500"}`}>
                            <PiYoutubeLogo size={"24px"} />
                        </span>
                        <span className="font-medium">
                            Youtube
                        </span>
                    </div>
                    <div 
                        onClick={() => {
                            setYoutube(false);
                            setTypes("TWITTER");
                        }}
                        className={`w-1/2 gap-2 p-3 
                        transition-all duration-300 
                        ${Youtube === false ? "bg-cyan-400 text-white border-cyan-400" : "text-teal-400 border-teal-700"}
                        cursor-pointer border-2
                        text-lg flex justify-center items-center rounded-lg`}>
                        <span className={`${Youtube === false ? "text-white" : "text-cyan-500"}`}>
                            <BsTwitterX size={"18px"} />
                        </span>
                        <span className={`${Youtube === false ? "text-white" : "text-teal-400"}`}>
                            Twitter
                        </span>
                    </div>
                </div>
            </div>
            
            {/* Input Fields */}
            <div>
                <InputBox placeholder="https://www.youtube.com?v=..." type="text" label={"URL"}
                    onChange={(e) => {
                        if(e===undefined)
                            return
                        setLink(e.target.value)}}
                />
                <InputBox placeholder="e.g., react, hooks, css" type="text" label={"Tags (Optional)"}
                    onChange={(e) => {
                        if(e===undefined)
                        return 

                        setTags(e.target.value)}}
                />
                <InputBox placeholder="A concise title for your brain entry" type="text" label={"Title"}
                    onChange={(e) => {
                        if(e===undefined)
                            return
                        setTitle(e.target.value)}}
                /> 
            </div>
            
            {/* Submission Button */}
            <div className="text-white">
                <Button type="primary" 
                    onclick={sendRequest} // Call sendRequest directly, which includes validation
                    size="lg" 
                    text={"Add Content"} 
                    iconOnStart={<FaPlus size={"22px"} color="white"/>}
                />
            </div>
        </div>
    );
}