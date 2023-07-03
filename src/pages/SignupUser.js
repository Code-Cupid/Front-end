// SignupUser.js
import React, { useState } from "react";
import "../styles/Signup.css";

const SignupUser = ({ createUser, goToNextStep }) => {
  const [formUser, setFormUser] = useState({
    email: "",
    password: "",
  });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setFormUser((prevFormUser) => ({
      ...prevFormUser,
      [name]: value,
    }));
  };

  const handleNext = async (e) => {
    const userData = {
      email: formUser.email,
      password: formUser.password,
    };

    try {
      const userResponse = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!userResponse.ok) {
        throw new Error("HTTP error " + userResponse.status);
      }

      const userJson = await userResponse.json();

      if (userJson.errors) {
        alert("Error creating user");
        return;
      }

      createUser(userJson);
      goToNextStep();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h3 className="step-title">User Information</h3>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formUser.email}
          onChange={handleUserChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formUser.password}
          onChange={handleUserChange}
          required
        />
      </div>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default SignupUser;
