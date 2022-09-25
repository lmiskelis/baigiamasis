import { useContext, useEffect } from "react";
import LikedCard from "../Components/LikedCard";
import mainContext from "../Context/mainContext";

function ILikePage() {
  const {iLiked,setliked,logedon}=useContext(mainContext)
  let user={username:logedon.username}
  useEffect(()=>{
 fetch('http://localhost:4000/filteredlikes', {
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
      setliked(data.data);
      
    }
  })

},[])
  return (
    <div className="card-container">
      {iLiked.length>0 &&iLiked.map((x,i)=><LikedCard x={x} key={i} />)}
    </div>
  );
}

export default ILikePage;