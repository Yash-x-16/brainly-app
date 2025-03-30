import { Shareicons } from "../../icons/share"; 
interface cardprops{
    title:String , 
    url:  string,
    type:"youtube"|"tweet"
}

export function Card ({title,url,type}:cardprops){
    return <div>
            <div className="bg-white rounded-md  border-gray-200 p-4 max-w-72 border min-h-48"> 
              <div className="flex justify-between">
                     <div  className="flex items-center text-md">
                        <div className="pr-3 text-gray-500 ">
                             <Shareicons size="md"></Shareicons></div> 
                                {title}
                      </div>
                     <div className="flex items-center">
                        <div className="pr-3 text-gray-500"> 
                            <a href={url} target="_blank">
                                <Shareicons size="md"></Shareicons>
                                </a> 
                        </div>
                        <div className="pr-3 text-gray-500">
                                <Shareicons size="md"></Shareicons>
                        </div> 
                     </div>
        </div>
            <div className="pt-4"> 
                {type==="youtube"&&<iframe
           className="w-full" src={url.replace("watch?v=", "embed/")} 
           title="YouTube video player" frameBorder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerPolicy="strict-origin-when-cross-origin" 
           allowFullScreen>
           </iframe>}
          {type==="tweet" && <blockquote className="twitter-tweet">
                      <a href={url.replace("x.com","twitter.com")}></a> 
                </blockquote>}
                 
            </div>      
        </div>  
               
    </div>
}