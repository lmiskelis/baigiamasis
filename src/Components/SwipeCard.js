import { useContext } from "react";
import mainContext from "../Context/mainContext";
import ImageSlider from "./Slider";

function Swipecard({x,setnext,next,allcards}) {
const {logedon,setliked}=useContext(mainContext)

function Like(){
console.log("hi")
let user={
    username:logedon.username,
    Likedusername:x.username
}


fetch('http://localhost:4000/addLike', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((data) => {
   
    console.log(data)
    if(allcards.length>next){
      setnext(next+1)
    }
      
    
  })

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




}
function Dislike(){
  if(allcards.length>next ){
      setnext(next+1)
    }
    
}

 
 
  return (
    <div className="swipe">
      {allcards.length>next && <div >
    <ImageSlider slides={x.images}/>
   
   <h3>{x.username}</h3></div>}
      
   {allcards.length>next && <div className="buttons">
    
    <button onClick={Like} className="Like">Like</button>
    <button onClick={Dislike} className="Dislike">Dislike</button>
   </div>}

  {allcards.length==next && <div>
   <img src="https://cdn.vectorstock.com/i/1000x1000/25/51/come-back-later-rubber-stamp-vector-13642551.webp"alt="" />
   <h3>NO More matches</h3></div>}
    </div>
  );
}

export default Swipecard;