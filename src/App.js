import React, { useState, useEffect } from "react";
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

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [readmes, setReadmes] = useState([])
  const [users, setUsers] = useState([])


  const url = "http://localhost:3000"

  
    useEffect(() =>{
      fetchReadmes()
      fetchUsers()
      const loggedInUser = localStorage.getItem('token') 
      if (loggedInUser) {
        const authUserId = +JSON.parse(atob(loggedInUser?.split(".")[1])).user_id
        fetchUsers(authUserId)
      }
    }, [])

  const fetchReadmes = () => {
    fetch(`${url}/readmes`)
      .then(response => response.json())
      .then(payload => setReadmes(payload))
      .catch((error) => console.log('error', error))
  }
  const fetchUsers = () => {
    fetch(`${url}/users/`)
    .then(response => response.json())
    .then(payload => setUsers(payload))
    .catch(error => console.error('Error', error))
  }
  const fetchUser = (id) => {
    fetch(`${url}/users/${id}`)
    .then(response => response.json())
    .then(payload => setCurrentUser(payload))
    .catch(error => console.error('Error', error))
  }
  const createUser = (user) => {
    fetch(`${url}/users`, {
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => fetchUsers(payload))
      .catch((errors) => console.log("User create errors:", errors))
  }

  const createReadme = (readme) => {
    fetch(`${url}/readmes`, {
      body: JSON.stringify(readme),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => fetchReadmes(payload))
      .catch((errors) => console.log("ReadMes create errors:", errors))
  }
  const updateUser = (id, data) => {
    fetch(`${url}/user/${id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => fetchUsers(payload))
      .catch((errors) => console.log("update errors:", errors))
  }

  const updateReadme = (id, data) => {
    fetch(`${url}/readmes/${id}`, {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => fetchReadmes(payload))
      .catch((errors) => console.log("ReadMe update errors:", errors))
  }
  const deleteReadMes = (id) => {
    fetch(`${url}/readmes/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => fetchReadmes(payload))
      .catch((errors) => console.log("ReadMe delete errors:", errors))
  }

  const deleteUser = (id) => {
    fetch(`${url}/users/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => fetchUsers(payload))
      .catch((errors) => console.log("User delete errors:", errors))
  }
const logout = () => {
  setCurrentUser(null)
  localStorage.removeItem('token')
}

  return (
    <>
      <Navigation currentUser={currentUser} setCurrentUser={setCurrentUser} logout = {logout}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/userindex" element={<UserIndex users={users} readmes={readmes} />} />
        <Route
          path="/readme/:id"
          element={<ReadMeShow currentUser={currentUser} readmes={readmes} />}
        />
        <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} createUser={createUser} createReadme={createReadme} /> }/>
        <Route path="/edit/:id" 
        element={<Edit readmes={readmes} updateReadme={updateReadme} />}
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
            element={<ReadMeShow currentUser = {currentUser} readmes={readmes} deleteReadMes={deleteReadMes} updateUser={updateUser} deleteUser={deleteUser}/>}
            />
            )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
