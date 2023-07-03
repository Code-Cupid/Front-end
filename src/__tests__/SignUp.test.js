import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter, useNavigate } from 'react-router-dom'
import SignUp from "../pages/SignUp"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn()
}))

describe("<SignUp />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
  })

  it("renders with a heading", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const heading = screen.getByRole("heading", { name: /user information/i })
    expect(heading).toBeInTheDocument()
  })

  it("renders with an email textbox", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const email = screen.getByRole("textbox", { name: /email/i })
    expect(email).toBeInTheDocument()
  })

  it("renders with a password label", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const password = screen.getByLabelText(/password/i)
    expect(password).toBeInTheDocument()
  })

  it("renders with a cancel button", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const cancel = screen.getByRole("button", { name: /cancel/i })
    expect(cancel).toBeInTheDocument()
  })

  it("renders with a next button", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const next = screen.getByRole("button", { name: /next/i })
    expect(next).toBeInTheDocument()
  })

  it("updates email value on user input", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const emailInput = screen.getByRole("textbox", { name: /email/i })
    fireEvent.change(emailInput, { target: { value: "test@example.com" } })
    expect(emailInput.value).toBe("test@example.com")
  })

  it("calls navigate function with correct path on cancel button click", () => {
    const mockNavigate = jest.fn()
    useNavigate.mockReturnValue(mockNavigate)

    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )

    const cancelButton = screen.getByRole("button", { name: /cancel/i })
    fireEvent.click(cancelButton)

    expect(mockNavigate).toHaveBeenCalledWith("/")
  })

  it("calls handleSubmit function on submit button click", () => {
    const mockHandleSubmit = jest.fn()
    jest.mock("../pages/SignUp", () => ({
      ...jest.requireActual("../pages/SignUp"),
      handleSubmit: mockHandleSubmit
    }))
  })
})