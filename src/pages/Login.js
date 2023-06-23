import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/Login.css'

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission here
    console.log(formValues);
  };

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
