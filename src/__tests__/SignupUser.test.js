import { render, screen } from "@testing-library/react"
import SignupUser from "../pages/SignupUser"
import { BrowserRouter } from "react-router-dom"


describe("<SignupUser />", () => {

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
  })

  it("renders with a heading", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
    const heading = screen.getByRole('heading', {name: /user information/i})
    expect(heading).toBeInTheDocument()
  })

  it("renders with a textbox for an email", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
    const email = screen.getByRole('textbox', {name: /email/i})
    expect(email).toBeInTheDocument()
  })

  it("renders with a box to input a password", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
    const password = screen.getByLabelText(/password/i)
    expect(password).toBeInTheDocument()
  })
  
  it("renders with a next button", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
    const next = screen.getByRole('button', {name: /next/i})
    expect(next).toBeInTheDocument()
  })  
  
  it("renders with text for email", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
    const emailtext = screen.getByText(/email/i)
    expect(emailtext).toBeInTheDocument()
  })  
  
  it("renders text for password", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
    const pwtext = screen.getByText(/password/i)
    expect(pwtext).toBeInTheDocument()
  })
})