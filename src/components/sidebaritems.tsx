import { ReactElement } from "react"
export function Sidebaritems({texts,icons}:{ texts:String ,icons:ReactElement}){
    return <div className="flex text-gray-700  py-2 cursor-pointer hover:bg-gray-200 pl-4 max-w-48 transition-all duration-150"> 
    <div className="pr-2">
      {icons}  </div>
      <div >
      {texts}
      </div>
    </div>
} 