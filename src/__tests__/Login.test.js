import { render, screen } from "@testing-library/react"
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
    screen.logTestingPlaygroundURL()
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
}) 