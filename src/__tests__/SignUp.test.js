import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import SignUp from "../pages/SignUp"

describe('<SignUp />', () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
  })

  it('renders with a heading', () => { 
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const heading = screen.getByRole('heading', {name: /user information/i})
    expect(heading).toBeInTheDocument()
  })

  it('renders with an email textbox', () => { 
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const email = screen.getByRole('textbox', {name: /email/i})
    expect(email).toBeInTheDocument()
  })

  it('renders with a password label', () => { 
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const password = screen.getByLabelText(/password/i)
    expect(password).toBeInTheDocument()
  })

  it('renders with a cancel button', () => { 
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const cancel = screen.getByRole('button', {name: /cancel/i})
    expect(cancel).toBeInTheDocument()
  })

  it('renders with a next button', () => { 
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const next = screen.getByRole('button', {name: /next/i})
    expect(next).toBeInTheDocument()
  })
})