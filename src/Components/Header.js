import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../Context/mainContext";


function Header() {
let nav=useNavigate()
 let {logedon,setlogedon,likedME,iLiked}=useContext(mainContext)


 function goLogin(){
nav("/")
 }
  function goRegister(){
nav("/register")
 }
  function goLogout(){
nav("/")
localStorage.removeItem("autoLogin")
setlogedon()
 }
 function goPeopleILiked(){
nav("/mylikes")

 }
 function gopeoplewholikedme(){
nav("/peoplelikes")

 }
 function goFilter(){
nav("/filter")

 }
 function goProfile(){
nav("/profile")

 }
  function goSwipe(){
nav("/swipe")

 }
 
  return (
    <div className="Header">
    {!logedon &&<div className="header">
        <h2 onClick={goRegister}>Register</h2>
        <h2 onClick={goLogin}>Login</h2>
    </div> }
    {logedon&&logedon.images.length<2 &&<div className="header"><h2  onClick={goLogout}>Logout</h2></div> }
    {logedon&&logedon.images.length>=2 && <div className="header">
    <h2  onClick={goProfile}>Profile</h2>
    <h2  onClick={goFilter}>Filter</h2>
    <h2  onClick={goSwipe}>Swipe</h2>
    <h2  onClick={goPeopleILiked}>People I Liked({iLiked.length})</h2>
    <h2  onClick={gopeoplewholikedme}>People who liked me({likedME.length})</h2>
    <h2  onClick={goLogout}>Logout</h2></div>}
    
    </div>
  );
}

export default Header;