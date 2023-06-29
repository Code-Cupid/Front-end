import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../styles/Signup.css'

const Signup = ({ createUser, createReadme }) => {
  const [step, setStep] = useState(1);
  const [formUser, setFormUser] = useState({
    email: "",
    password: "",
  });
  const [formReadme, setFormReadme] = useState({
    name: "",
    age: "",
    gender: "",
    gender_pref: "",
    location: "",
    programming_language: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setFormUser((prevFormUser) => ({
      ...prevFormUser,
      [name]: value,
    }));
  };

  const handleReadmeChange = (e) => {
    const { name, value } = e.target;
    setFormReadme((prevFormReadme) => ({
      ...prevFormReadme,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const userData = {
    user: {
      email: formUser.email,
      password: formUser.password,
    },
  };

  const readmeData = {
    readme: {
      name: formReadme.name,
      age: formReadme.age,
      gender: formReadme.gender,
      gender_pref: formReadme.gender_pref,
      location: formReadme.location,
      programming_language: formReadme.programming_language,
      image: formReadme.image,
    },
  };

  try {
    const userResponse = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userData,
        ...readmeData,
      }),
    });

    if (!userResponse.ok) {
      throw new Error("HTTP error " + userResponse.status);
    }

    const userJson = await userResponse.json();

    if (userJson.errors) {
      alert("Error creating user");
    } else {
      navigate(`/readme/${userJson.readme.id}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <form className="multi-step-form">
      {step === 1 && (
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
          <div className="bs-button">
            <button type="button" onClick={handleGoHome}>
              Cancel
            </button>
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="step-title">Readme File</h3>
          <p className="step-tag">Other users will see this information</p>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formReadme.name}
              onChange={handleReadmeChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={formReadme.age}
              onChange={handleReadmeChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={formReadme.gender}
              onChange={handleReadmeChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gender_pref">Gender Preference</label>
            <select
              name="gender_pref"
              id="gender_pref"
              value={formReadme.gender_pref}
              onChange={handleReadmeChange}
              required
            >
              <option value="">Select Gender Preference</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              value={formReadme.location}
              onChange={handleReadmeChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="programming_lang">
              Preferred Programming Language
            </label>
            <input
              type="text"
              name="programming_language"
              id="programming_lang"
              value={formReadme.programming_language}
              onChange={handleReadmeChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image"
              id="image"
              value={formReadme.image}
              onChange={handleReadmeChange}
              required
            />
          </div>
          <div className="bs-button">
            <button type="button" onClick={handlePrevious}>
              Go Back
            </button>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
};
export default Signup;
