import { useRef, useState,useContext } from "react";
import mainContext from "../Context/mainContext";
import MultiRangeSlider from "../Components/MultiRangeSlider";
function FilterPage() {
  const [manBorder,setmanBorder]=useState("2px solid green")
  const [womanBorder,setwomanBorder]=useState()
  const[maxage,setmaxage]=useState()
  const[minage,setminage]=useState()
    const { setfilter,filter } = useContext(mainContext);
  const [gender,setgender]=useState("MAN")
  let refmiesetas=useRef()

function gebderman(){
  setgender("MAN")
setmanBorder("2px solid green")
setwomanBorder("none")
}
function gebderwoman(){
  setgender("WOMAN")
  setwomanBorder("2px solid green")
setmanBorder("none")
}
function changeFilter(){
  let filterz={
    city:refmiesetas.current.value,
    gender:gender,
    ageTop:maxage,
    ageBottom:minage,
   
  }
  setfilter(filterz)
}
function setages(min,max){
setminage(min)
setmaxage(max)
console.log(maxage,minage)
}
  return (
    <div className="Filter">
      <select ref={refmiesetas} name="miestai" id="">
        <option value="">Visi</option>
      <option value="Kaunas">Kaunas</option>
    <option value="Klaipeda">Klaipeda</option>
    <option value="Vilnius">Vilnius</option></select>
    <div className="GenderPick">

<div onClick={gebderman} className="genderpick" style={{border:manBorder}}>MAN</div>
<div onClick={gebderwoman} className="genderpick" style={{border:womanBorder}}>WOMAN</div></div>
 <h3>Age range:</h3>
 <MultiRangeSlider
      min={0}
      max={100}
      onChange={({ min, max }) => setages(min,max)}
    />
<button onClick={changeFilter}>Make Changes</button>


    </div>
  );
}

export default FilterPage;