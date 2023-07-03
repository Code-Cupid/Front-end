import React, { useState } from "react";
import "../styles/Signup.css";

const SignupUser = ({ setUserId, handleNext }) => {
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

  const handleLocalNext = async (e) => {
    e.preventDefault();
    handleNext(e);

    try {
      // Sending user data
      console.log(
        JSON.stringify({
          ...formUser,
        })
      );
      const userResponse = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formUser
        }),
      });

      if (!userResponse.ok) {
        throw new Error(
          `HTTP error while creating user! status: ${userResponse.status}`
        );
      }

      const userResult = await userResponse.json();
      setUserId(userResult.id); // Assuming setUserData is a function to lift the state up
    } catch (error) {
      console.error("An error occurred while trying to create a user.", error);
      alert(
        "An error occurred while trying to create a user. Please try again."
      );
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
      <button type="button" onClick={handleLocalNext}>
        Next
      </button>
    </div>
  );
};

export default SignupUser;
