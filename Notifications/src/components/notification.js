import  React from "react"
  

export const NotificationData  = [
    {
        id: 1,
        name : 'Mark Webber',
        image: "./Assets/images/avatar-mark-webber.webp",
        text : "reacted to your recent post My first tournament today!",
        time: "1m ago",
        read : false,},

    {
        id: 2,
        name:'Angela Gray',
        image:"./Assets/images/avatar-angela-gray.webp",
        text : "followed you",
        time : "5m Ago",
        read : false,
    },  
    
    {
        id:3,
        name: "Jacob Thompson",
        image: "./Assets/images/avatar-jacob-thompson.webp",
        text: "has joined your group Chess Club",
        time: "1 day ago",
        read : false,
        
    },

    {
        id:4,
        name:"Rizky Hasanuddin",
        image:"./Assets/images/avatar-rizky-hasanuddin.webp",
        text: "sent you a private message",
        time:"5 days ago",
        read:true,
        content:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and  I/'m already having lots of fun and improving my game.",
       
      
    },

    {
        id:5,
        name:"Kimberly Smith",
        image: "./Assets/images/avatar-kimberly-smith.webp",
        text: "commented on your picture",
        time: "1 week ago",
        read: false,
        
    },


    {
        id:6,
        name:"Nathan Peterson",
        image:"./Assets/images/avatar-nathan-peterson.webp",
        text: "reacted to your recent post 5 end-game strategies to increase your win rate",
        time: " 2 weeks ago",
        read : false,
    },

    {
        id: 7,
        name: "Anna Kim",
        image: "./Assets/images/avatar-anna-kim.webp",
        text: "left the group Chess Club",
        time: "2 weeks ago",
        read: false,
    }
]




// return(
    //     <div>
    //         {
    //         NotificationData && NotificationData.map(({id,name,image,text,time,content})=>(
    //          <div key = {id} >
    //            <img src = {image} alt =""/>
    //            <p>{name} {text}</p>
               
    //            <p>{time}</p>
    //            <p>{content}</p>
             
             
    //          </div>   
    //         )
            
            
    //         )
            
            
    //         }
    //     </div>

    // )