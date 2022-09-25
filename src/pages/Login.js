import { useContext, useRef, useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import mainContext from "../Context/mainContext";

function LoginPage() {
  const { logedon,setlogedon,setliked,setLikedme } = useContext(mainContext);
  const [checked,setChecked]=useState(false)
  const [error,seterror]=useState()
  let nav=useNavigate()
  let refusername=useRef()
  let refpassword=useRef()
  
const handleChange = () => {
    setChecked(!checked);
  };


useEffect(()=>{
let  user ={username:localStorage.getItem('autoLogin')} 
if (user){
  console.log(user)
  fetch('http://localhost:4000/autologin', {
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
      nav("/profile")
    }
  })






}
},[])



  function Login(){
    
    let user={
      username:refusername.current.value,
      password:refpassword.current.value,
      
    }
    fetch('http://localhost:4000/login', {
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
      
      if(checked){
        localStorage.setItem('autoLogin', refusername.current.value)
       
      }
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
   nav("/profile")
    }
    else{seterror(data.message)}
  })
  }
  return (
    <div className="Form">
      <input type="text" placeholder="username" ref={refusername} />
      <input type="text" placeholder="password" ref={refpassword} />
      <div className="autologin">
      <input value={checked} onChange={handleChange} type="checkbox" id="html" />
      <label htmlFor="html" >Stay loged in</label></div>
      <button onClick={Login} >Log in</button>
      <h2>{error}</h2>
    </div>
  );
}

export default LoginPage;