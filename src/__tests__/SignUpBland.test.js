import { render, screen } from "@testing-library/react"
import SignUpBland from "../pages/SignUpBland"
import { BrowserRouter } from "react-router-dom"

describe("<SignUpBland />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <SignUpBland />
      </BrowserRouter>
    )
  })

  it("renders with a textbox for an email", () => {
    render(
      <BrowserRouter>
        <SignUpBland />
      </BrowserRouter>
    )
    const email = screen.getByRole('textbox')
    expect(email).toBeInTheDocument()
  })

  it("renders with a next button", () => {
    render(
      <BrowserRouter>
        <SignUpBland />
      </BrowserRouter>
    )
    const next = screen.getByRole('button', { name: /submit/i })
    expect(next).toBeInTheDocument()
  })

  it("renders with text for email", () => {
    render(
      <BrowserRouter>
        <SignUpBland />
      </BrowserRouter>
    )
    const emailtext = screen.getByText(/email/i)
    expect(emailtext).toBeInTheDocument()
  })

  it("renders text for password", () => {
    render(
      <BrowserRouter>
        <SignUpBland />
      </BrowserRouter>
    )
    const pwtext = screen.getByText(/password/i)
    expect(pwtext).toBeInTheDocument()
  })
})