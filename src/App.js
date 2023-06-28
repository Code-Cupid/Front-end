import React, { useState,useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Edit from "./pages/Edit";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import ReadMeShow from "./pages/Show";
import Signup from "./pages/SignUp";
import UserIndex from "./pages/UserIndex"
import readmes from "./MockReadmes";

const App = () => {
  const [currentUser, setCurrentUser] = useState(readmes);

  const updateUser = (readmes, id) => {
    console.log("readmes:", readmes)
    console.log("id:", id)
  };
  // useEffect(() =>{
  //   const loggedInUser = localStorage.getItem('token') 
  //   console.log('token',loggedInUser)
  //   if (loggedInUser) {
  //     const authUserId = +JSON.parse(atob(loggedInUser?.split('.')[1]).sub,
  //     setCurrentUser({ id: authUserId }))
  //   }
  //   readMes()
  // }, [] )

  return (
    <>
      <Navigation currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/userindex" element={<UserIndex readmes={readmes} />} />
        <Route
          path="/readme/:id"
          element={<ReadMeShow currentUser={currentUser} readmes={readmes} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/edit/:id" 
        element={<Edit readmes={readmes} updateUser={updateUser} />}
        />
        <Route
          path="/login"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route path="/cupids" element={<AboutUs />} />

          {currentUser && (
            <Route path ='/readme/:id' 
            element={<ReadMeShow currentUser = {currentUser} readmes={readmes}/>}
            />
            )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
