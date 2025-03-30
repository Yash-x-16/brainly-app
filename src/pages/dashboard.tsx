import { useState } from "react"
import { CreateContentModel } from "../components/createcontentmodel"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/cards"
import {PlusIcon} from "../icons/plusIcons" 
import { Shareicons } from "../icons/share" 
import { Sidebar } from "../components/sidebars"  
// import { useContent } from "../hooks/useContent"
// const content = useContent()
export function Dashboard() {
  const [modal,Setmodal]= useState(false)

  return  <div> 
        <Sidebar />   
        <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2"> 
<div className="flex justify-end gap-4 m-4">
  <Button variant="primary" size="md" text="add content" onStart={<PlusIcon size="md"/> } onclick={()=>{Setmodal(true)}}></Button> 
  <Button variant="secondary" size="md" text="share brain" onStart={<Shareicons size="md"/>}></Button>
  </div> 
<CreateContentModel open={modal} onClose={()=>{Setmodal(false)}}></CreateContentModel>
<div className="flex gap-4 ">
<Card type="tweet" url="https://x.com/Waliilaww/status/1902753276686430338" title={"productivity"}></Card>
<Card type="tweet" url="https://x.com/karaan_dev/status/1902723773243199977" title={"pro"}></Card>

{/* {content.map(({type,Link,title}:any)=><Card type={type} url={Link}title={title}></Card>)} */}
    </div>
    </div>
    </div>
  
}

