import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import ReadMeShow from "./pages/Show";

import "./App.css";

import readmes from "./MockReadmes";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      <Header />
      <Navigation currentUser={currentUser}  setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/readme/:id"
          element={<ReadMeShow currentUser={currentUser} readmes={readmes} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
