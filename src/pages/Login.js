import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Login.css";

const Login = ({ setCurrentUser, loginUser }) => {
  // const [formValues, setFormValues] = useState({
  //   email: "",
  //   password: "",
  // });
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const user = await loginUser(formValues);
  //     if (user) {
  //       setCurrentUser(user);
  //       navigate(`/readme/${user.id}`);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("Invalid Credentials");
  //   }
  // };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="step-title">Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="bs-button">
        <button type="button" onClick={handleGoHome}>
          Cancel
        </button>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
