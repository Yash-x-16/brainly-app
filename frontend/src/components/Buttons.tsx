interface buttonProp{
    text:string , 
    type:"primary"|"secondary" , 
    size:"sm"|"md"|"lg"  ,
    onclick?:undefined |string
} 



export function Button(prop:buttonProp){
    return <div className="flex p-3">
        <button className={`${prop.type=="primary"?"bg-teal-400":"bg-blue-400"}
            ${prop.size=="lg"?"w-full":null} p-2 font-medium text-xl hover:scale-103 
            duration-400 transition-all cursor-pointer active:scale-100 rounded-lg
            `}>
            {prop.text}
        </button>
    </div>
}