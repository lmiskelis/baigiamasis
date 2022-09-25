import { useContext, useEffect, useState } from "react";
import Swipecard from "../Components/SwipeCard";
import mainContext from "../Context/mainContext";

function SwipePage() {
  const {filter,allcards,setallcards,logedon}=useContext(mainContext)
 const [next,setnext]=useState(0)

  
  let user={username:logedon.username,
  reqageHigh:filter.ageTop,
reqagelow:filter.ageBottom,
reqcity:filter.city,
reqgender:filter.gender}

  useEffect(()=>{
 fetch('http://localhost:4000/data', {
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
      setallcards(data.data);
      
    }
  })

},[])
  return (
    <div className="App">
     {allcards.length>0&&allcards.length>next &&<Swipecard x={allcards[next]} allcards={allcards} next={next} setnext={setnext}/> } 
     {allcards.length===next && <div className="swipe">
   <img src="https://thumbs.dreamstime.com/b/come-back-later-stamp-red-white-background-95570190.jpg" alt="" />
   <h3>NO More matches</h3></div>}
        </div>
  );
}

export default SwipePage;