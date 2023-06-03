import React, { useState } from "react"
import { NotificationData } from "./notification"

export const Parent = () => {


 const [notify,setNotify] = useState(()=>NotificationData.map((notify)=>({
    ...notify,
 })

        
 )); 
 
 const  markAllAsRead = () =>{
    const Updatednotify = notify.map((notify) => ({
        ...notify,
        read: !false,
    }));
  setNotify(Updatednotify);

 }
 return(
    <>
    <button OnClick={markAllAsRead}>Mark All As Read</button>
     <div>
      {
        notify && notify.map(({id,name,image,text,content,time,})=>(
            <div key ={id} style = {{fontWeight :notify.read ? 900 : 400}}>
              <img src ={image} alt ={name}/>
              <p>{name}  {text}</p>
              <p>{time}</p>
              <p>{content}</p>
         


            </div>

        )
        )
      }

     </div>
    
    
    </>
     
      


 )   
}