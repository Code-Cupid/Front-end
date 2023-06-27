import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import ReadMeShow from "./pages/Show";
import UserIndex from "./pages/UserIndex"

import Edit from "./pages/Edit";

import AboutUs from "./pages/AboutUs";

import "./App.css";

import readmes from "./MockReadmes";

const App = () => {
  const [currentUser, setCurrentUser] = useState(readmes);

  const updateUser = (readmes, id) => {
    console.log("readmes:", readmes)
    console.log("id:", id)
  };

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
        <Route path="/edit/:id" element={<Edit readmes={readmes} updateUser={updateUser} />}/>
        <Route
          path="/login"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route path="/cupids" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
