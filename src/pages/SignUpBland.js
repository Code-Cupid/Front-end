// import
import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"

import '../styles/Signup.css'

// declare functional component
const SignUp = ({ signup }) => {

  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password },
    }
    signup(userInfo)
    navigate("/")
    e.target.reset()
  }

  return (
    <>
      <div className="card">
        <h3 className="step-title">Signup</h3>
        <form className="form-group" ref={formRef} onSubmit={handleSubmit}>
          Email: <input type="email" name="email" placeholder="email" />
          <br />
          Password:{" "}
          <input type="password" name="password" placeholder="password" />
          <br />
          Confirm Password:{" "}
          <input
            type="password"
            name="password_confirmation"
            placeholder="confirm password"
          />
          <br />
          <input className="signup-login-button" type="submit" value="Submit" />
        </form>
        <br />
        <div>
          Already registered? <a href="/login">Login</a> here.
        </div>
      </div>
    </>
  );
}
export default SignUp