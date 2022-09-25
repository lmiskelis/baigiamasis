import { useContext, useEffect, useRef, useState } from "react";
import mainContext from "../Context/mainContext";
import ImageSlider from "../Components/Slider";

function ProfilePage() {
   const { logedon,setlogedon,} = useContext(mainContext)
   
   let refimg=useRef()
let user={username:logedon.username}


   function addPicture(){
    let user ={
    username:logedon.username,
    picture:refimg.current.value
  }
    fetch('http://localhost:4000/addpicture', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((data) => {
   
    console.log(data)
    if(!data.error){
      setlogedon(data.data);
    
    }
  })
   }

   
  return (
    <div className="Profile">
      
      <div className="mover">
      {logedon.images.length>0 && <ImageSlider slides={logedon.images}/>}
        </div>
        {logedon.images.length===0 &&<div><p>You must add at least 2 pictures to proceed further</p>
          <img src="https://media.istockphoto.com/vectors/missing-image-of-a-person-placeholder-vector-id1288129985?k=20&m=1288129985&s=612x612&w=0&h=OHfZHfKj0oqIDMl5f_oRqH13MHiB63nUmySYILbWbjE=" alt="" /></div>}
        
      <div className="Form" style={{backgroundColor:"white",boxShadow:"none"}}>
      <input type="text" placeholder="photo url" ref={refimg}/>
      <button onClick={addPicture} style={{boxShadow:"0 0 2px black"}}>Add photo</button></div>
    </div>
  );
}

export default ProfilePage;