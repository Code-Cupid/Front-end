import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Login from "../pages/Login"

describe('<Login />', () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
  })

  it('renders with a heading', () => { 
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
    const header = screen.getByRole('heading', {name: /login/i})
    expect(header).toBeInTheDocument()
  })

  it('renders with an email textbox', () => { 
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
    const email = screen.getByRole('textbox', {name: /email/i})
    expect(email).toBeInTheDocument()
  })

  it('renders with a password label', () => { 
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
    const password = screen.getByLabelText(/password/i)
    expect(password).toBeInTheDocument()
  })

  it('renders with a cancel button', () => { 
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
    const cancel = screen.getByRole('button', {name: /cancel/i})
    expect(cancel).toBeInTheDocument()
  })

  it('renders with a login button', () => { 
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
    const login = screen.getByRole('button', {name: /login/i})
    expect(login).toBeInTheDocument()
  })

  it('submits the form when the login button is clicked', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    const loginUser = jest.fn()

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const loginButton = screen.getByRole('button', {name: /login/i})

    fireEvent.change(emailInput, {target: {value: 'test@example.com'}})
    fireEvent.change(passwordInput, {target: {value: 'password123'}})

    fireEvent.click(loginButton)

    expect(loginUser).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    })
  })
})