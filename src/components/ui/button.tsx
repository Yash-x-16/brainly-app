type variants = "primary" | "secondary"
interface ButtonProp{
    variant : variants , 
    size : "md" | "sm" | "lg" , 
    text : string , 
    onclick ?: ()=>void, 
    onStart ?: any , 
    onEnd ?: any ,  
    fullwidth?: boolean  ,
    loading?:boolean
} 
 
const variantStyle = {
      "primary": "bg-blue-600 text-white", // Styles for primary variant
    "secondary": "bg-blue-300 text-blue-600"
} 
const sizeStyle = {
    "sm": "py-1 px-2b rounded-xl flex-item-center" , 
    "md" : "py-2 px-5 rounded-md flex-item-center", 
    "lg" : "py-4 px-7 h-8 rounded-md flex-item-center", 
} 

const DefaulStyles = "rounded-md flex font-light"
export const Button =(props:ButtonProp)=>{
    return <button onClick={props.onclick} className={`${variantStyle[props.variant]} ${DefaulStyles} ${props.fullwidth?" w-full flex justify-center items-center text-center":""}${sizeStyle[props.size]} ${props.loading?"opacity-45 ":""}` }>
 {props.onStart?<div className="pr-2 py-1">{props.onStart}</div>:null} {props.text}{props.onEnd?<div className="pl-2 py-1">{props.onEnd}</div>:null}</button>
}