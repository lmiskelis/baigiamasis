import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [error,seterror]=useState()
  let nav=useNavigate()
  let refusername=useRef()
  let refpassword1=useRef()
  let refpassword2=useRef()
  let refcity=useRef()
  let refgender=useRef()
  let refyearsOld=useRef()
  function Submit(){
    let user={
      username:refusername.current.value,
      password1:refpassword1.current.value,
      password2:refpassword2.current.value,
      city:refcity.current.value,
      gender:refgender.current.value,
      age:refyearsOld.current.value
    }
    fetch('http://localhost:4000/register', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    if(!data.error){
nav("/")
seterror()
    }
    else{
      seterror(data.message)
    }
  })
  
  }
  return (
    <div className="Form">
      <input type="text" placeholder="username" ref={refusername} />
      <input type="password" placeholder="password" ref={refpassword1} />
      <input type="password" placeholder="password" ref={refpassword2} />
     <select ref={refcity} name="miestai" id="">
        <option value="">Miestas</option>
      <option value="Kaunas">Kaunas</option>
      <option value="Vilnius">Vilnius</option>
      <option value="Klaipeda">Klaipeda</option>
      
      </select>
     <select ref={refgender} name="gender" id="">
        <option value="MAN">MAN</option>
      <option value="WOMAN">WOMAN</option>
     
      
      </select>
      <input type="text" placeholder="age" ref={refyearsOld} />
      <button onClick={Submit}>Sign up</button>
      <h2>{error}</h2>
    </div>
  );
}

export default RegisterPage;