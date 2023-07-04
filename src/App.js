import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Edit from "./pages/Edit";
import Homepage from "./pages/Homepage";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import UserIndex from "./pages/UserIndex";
import SignupReadme from "./pages/SignupReadme"
// file was named Show, best practice same name as the component
import ReadMeShow from "./pages/ReadMeShow";
// new imports for this branch
import SignUpBland from "./pages/SignUpBland"
import LogInBland from "./pages/LogInBland";
import New from "./pages/New"

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [readmes, setReadmes] = useState([]);
  // Stretch
  // const [users, setUsers] = useState([]);

  const url = "http://localhost:3000";

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token")
    console.log("token", loggedInUser)
    if(loggedInUser) {
      const authUserId = +JSON.parse(atob(loggedInUser?.split(".")[1])).sub
      setCurrentUser({ id: authUserId })
    }
    // perform read functionality after checking for authentication
    fetchReadmes();
  }, [])

  // display all readmes and users (STRETCH)
  const fetchReadmes = () => {
    fetch(`${url}/readmes`)
      .then((response) => response.json())
      .then((payload) => setReadmes(payload))
      .catch((error) => console.log("readme error", error))
  }

  // save new readmes to the db
  const createReadme = (readme) => {
    console.log(readme)
    fetch(`${url}/readmes`, {
      body: JSON.stringify(readme),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => fetchReadmes())
      .catch((errors) => console.log("Readme create errors:", errors))
  }

  // modify an existing readme
  const updateReadme = (editRead, id) => {
    fetch(`${url}/readmes/${id}`, {
      body: JSON.stringify(editRead),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => fetchReadmes())
      .catch((errors) => console.log("Readme update errors:", errors))
  }

  // delete an existing readme
  const deleteReadmes = (deleteId) => {
    fetch(`${url}/readmes/${deleteId}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => fetchReadmes())
      .catch((errors) => console.log("Readme delete errors:", errors))
  }

  // login, signup, logout are using devise/jwt to interact with user sessions
  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then(payload => {
        setCurrentUser(payload)
      })
      .catch(error => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      method: 'POST'
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then(payload => {
        setCurrentUser(payload)
      })
      .catch(error => console.log("login errors: ", error))
  }

  const logoutUser = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": 'application/json',
        "Authorization": localStorage.getItem("token")
      },
      method: 'DELETE'
    })
      .then(payload => {
        localStorage.removeItem("token")
        setCurrentUser(null)
      })
      .catch(error => console.log("log out errors: ", error))
  }

  return (
    <>
      <Navigation
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        logoutUser={logoutUser}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/userindex"
          element={<UserIndex readmes={readmes} />}
        />
        <Route 
          path="/signup" 
          element={<SignUpBland signup={signup} />} 
        />
        <Route 
          path="/login" 
          element={<LogInBland login={login}/>} 
        />
        {currentUser && (
          <>
            <Route 
              path="/new" 
              element={
                <New
                  createReadme={createReadme} 
                  currentUser={currentUser} 
                />
              } 
            />
            <Route
              path="/edit/:id"
              element={
                <Edit 
                  readmes={readmes} 
                  updateReadme={updateReadme} 
                  currentUser={currentUser}
                />
              }
            />
            <Route
              path="/readme/:id"
              element={
                <ReadMeShow
                  currentUser={currentUser}
                  readmes={readmes}
                  deleteReadmes={deleteReadmes}
                />
              }
            />
          </>
        )}
        <Route path="/cupids" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )

}
export default App;