// SignupReadme.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const SignupReadme = ({ handlePrevious, onSubmit, userId }) => {
  // Assuming userId is passed as props
  const [formReadme, setFormReadme] = useState({
    name: "",
    age: "",
    gender: "",
    gender_preference: "",
    location: "",
    programming_language: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleReadmeChange = (e) => {
    const { name, value } = e.target;
    setFormReadme((prevFormReadme) => ({
      ...prevFormReadme,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(e);

    try {
      // Sending readme data
      const readmeResponse = await fetch("http://localhost:3000/readmes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId, // user's ID is needed when creating a readme
          ...formReadme, // using formReadme state instead of readmeData
        }),
      });
      

      if (!readmeResponse.ok) {
        throw new Error(
          `HTTP error while creating readme! status: ${readmeResponse.status}`
        );
      }

      const readmeResult = await readmeResponse.json(); //this is needed to use the data from the server's response (like editing)

      // redirect to homepage if successful after submitting
      navigate("/");// Redirect to the homepage
    } catch (error) {
      console.error(
        "An error occurred while trying to create a readme.",
        error
      );
      alert(
        "An error occurred while trying to create a readme. Please try again."
      );
    }
  };
  return (
    <form className="multi-step-form" onSubmit={handleSubmit}>
      <div>
        <h3 className="step-title">Readme File</h3>
        <p className="step-tag">Other users will see this information</p>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="string"
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
          <label htmlFor="gender_preference">Gender Preference</label>
          <select
            name="gender_preference"
            id="gender_preference"
            value={formReadme.gender_preference}
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
            type="string"
            name="location"
            id="location"
            value={formReadme.location}
            onChange={handleReadmeChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="programming_language">
            Preferred Programming Language
          </label>
          <input
            type="text"
            name="programming_language"
            id="programming_language"
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
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default SignupReadme;
