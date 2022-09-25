import { useContext, useEffect } from "react";
import LikedCard from "../Components/LikedCard";
import mainContext from "../Context/mainContext";
function TheyLike() {
  const {likedME,setLikedme,logedon}=useContext(mainContext)
  let user={username:logedon.username}
  useEffect(()=>{
 fetch('http://localhost:4000/filterhavelikes', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((data) => {
   
    console.log(data.data)
    if(!data.error){
      setLikedme(data.data);
      
    }
  })

},[])
  return (
    <div className="card-container">
      {likedME.length>0 &&likedME.map((x,i)=><LikedCard x={x} key={i} />)}
    </div>
  );
}

export default TheyLike;