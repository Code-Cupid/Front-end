import { render, screen, fireEvent } from "@testing-library/react"
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
    const heading = screen.getByRole("heading", { name: /user information/i })
    expect(heading).toBeInTheDocument()
  })

  it("renders with a textbox for an email", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
    const emailInput = screen.getByRole("textbox", { name: /email/i })
    expect(emailInput).toBeInTheDocument()
  })

  it("renders with a box to input a password", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
    const passwordInput = screen.getByLabelText(/password/i)
    expect(passwordInput).toBeInTheDocument()
  })

  it("renders with a next button", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
    const nextButton = screen.getByRole("button", { name: /next/i })
    expect(nextButton).toBeInTheDocument()
  })

  it("updates email input value when typed", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
    const emailInput = screen.getByRole("textbox", { name: /email/i })
    fireEvent.change(emailInput, { target: { value: "test@example.com" } })
    expect(emailInput.value).toBe("test@example.com")
  })

  it("updates password input value when typed", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
    const passwordInput = screen.getByLabelText(/password/i)
    fireEvent.change(passwordInput, { target: { value: "password123" } })
    expect(passwordInput.value).toBe("password123")
  })

  it("submits the form with user data", () => {
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
  
    const emailInput = screen.getByRole("textbox", { name: /email/i })
    const passwordInput = screen.getByLabelText(/password/i)
    const nextButton = screen.getByRole("button", { name: /next/i })
  
    fireEvent.change(emailInput, { target: { value: "test@example.com" } })
    fireEvent.change(passwordInput, { target: { value: "password123" } })
    fireEvent.click(nextButton)
  })

  it("displays an error message when user creation fails", async () => {
    // Mock the fetch function to simulate a failed request
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.reject(new Error("Mock error"))
    )
  
    render(
      <BrowserRouter>
        <SignupUser />
      </BrowserRouter>
    )
  
    const emailInput = screen.getByRole("textbox", { name: /email/i })
    const passwordInput = screen.getByLabelText(/password/i)
    const nextButton = screen.getByRole("button", { name: /next/i })
  
    fireEvent.change(emailInput, { target: { value: "test@example.com" } })
    fireEvent.change(passwordInput, { target: { value: "password123" } })
    fireEvent.click(nextButton)
  })

  it("navigates to the next step after successful user creation", async () => {
    // Mock the fetch function to simulate a successful request
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    )
  
    const createUserMock = jest.fn()
const goToNextStepMock = jest.fn()

render(
  <BrowserRouter>
    <SignupUser createUser={createUserMock} goToNextStep={goToNextStepMock} />
  </BrowserRouter>
)

const emailInput = screen.getByRole("textbox", { name: /email/i })
const passwordInput = screen.getByLabelText(/password/i)
const nextButton = screen.getByRole("button", { name: /next/i })

fireEvent.change(emailInput, { target: { value: "test@example.com" } })
fireEvent.change(passwordInput, { target: { value: "password123" } })
fireEvent.click(nextButton)

expect(createUserMock).toHaveBeenCalled()
expect(goToNextStepMock).toHaveBeenCalled()

  })
})