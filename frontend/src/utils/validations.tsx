import toast from "react-hot-toast";

export function Validation(data:any){
    if(data.username.length <6 ||data.password.length<6 ){
        return toast("username must be atleat 6 character ")
    }else{
        return true
    }
}