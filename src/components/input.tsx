export function Input({refrence,placeholder}:{refrence?:any,placeholder:string}){
return <div>
    <input type="text" placeholder={placeholder} ref={refrence} className="px-4 py-2 border rounded m-3" />
</div>
}