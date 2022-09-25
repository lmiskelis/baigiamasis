
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import mainContext from "./Context/mainContext";
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ProfilePage from './pages/Profile';
import SwipePage from './pages/Swipe';
import ILikePage from './pages/ILike';
import TheyLike from './pages/TheyLike';
import FilterPage from './pages/Filter';
import { useEffect, useState } from 'react';
import Header from './Components/Header';
// import { io } from 'socket.io-client';
// const socket = io.connect("http://localhost:4000")
function App() {
const [logedon,setlogedon]=useState()
const [filter,setfilter]=useState({city:"",
    gender:"MAN",
    ageTop:100,
    ageBottom:0,})
const [allcards,setallcards]=useState([])
const [iLiked,setliked]=useState([])
const [likedME,setLikedme]=useState([])


  const state={
    setlogedon,
    logedon,
    filter,
    setfilter,
    allcards,
    setallcards,
    iLiked,
    setliked,
    likedME,
    setLikedme,
    
  }



  return (
    <div className="App">
      <mainContext.Provider value={state}>
   <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/swipe" element={<SwipePage />} />
            <Route path="/mylikes" element={<ILikePage/>} />
            <Route path="/peoplelikes" element={<TheyLike />} />
            <Route path="/filter" element={<FilterPage />} />

            <Route
             
            />
          </Routes>
        </BrowserRouter>
        </mainContext.Provider>
    </div>
  );
}

export default App;
