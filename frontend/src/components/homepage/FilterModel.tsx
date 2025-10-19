import { CiFilter } from "react-icons/ci"; 
import { useContext } from "react"; 
import { contentContext } from "../../contexts/ContentContext";
export function FilterModel(){ 
    const ctx = useContext(contentContext) 
    if (!ctx) {
        return null;
    }

    const { setContentType, contentType } = ctx;

    const btnBase = "px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 text-center";

    return (
        <div className="flex flex-col ">
            <div className="flex justify-center items-center gap-3 text-teal-300 font-medium">
                <div className="text-teal-300">
                    <CiFilter size={"30px"}/>
                </div>

                <div className={`${btnBase} ${contentType === "All" ? "bg-teal-500 text-white" : "bg-slate-800/50 text-teal-200"}`}
                     onClick={() => setContentType("All")}>
                    All
                </div>

                <div className={`${btnBase} ${contentType === "YouTube" ? "bg-red-500 text-white" : "bg-slate-800/50 text-teal-200"}`}
                     onClick={() => setContentType("YouTube")}>
                    YouTube
                </div>

                <div className={`${btnBase} ${contentType === "Twitter" ? "bg-blue-400 text-white" : "bg-slate-800/50 text-teal-200"}`}
                     onClick={() => setContentType("Twitter")}>
                    Twitter
                </div>
            </div>
        </div>
    );
}