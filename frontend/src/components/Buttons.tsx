interface buttonProp{
    text:string , 
    type:"primary"|"secondary" , 
    size:"sm"|"md"|"lg"  ,
    onclick?:()=>void ,
    classname?:string
} 



export function Button(prop:buttonProp){
    return <div className="flex p-3">
        <button
        onClick={prop.onclick}
        className={`${prop.type=="primary"?"bg-teal-400":"bg-slate-900/50"}${prop.classname} 
        ${prop.type=="secondary"?"hover:bg-slate-800/50 text-teal-200 rounded-lg transition border border-teal-800":null}
            ${prop.size=="lg"?"w-full":null} p-2 font-medium text-xl hover:scale-103 
            duration-400 transition-all cursor-pointer active:scale-100 rounded-lg
            `}>
            {prop.text}
        </button>
    </div>
}