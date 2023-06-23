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
    const errorHead = screen.getByRole('heading', {name: /user information/i})
    expect(errorHead).toBeInTheDocument()
  })

  it('renders with an email textbox', () => { 
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const errorHead = screen.getByRole('textbox', {name: /email/i})
    expect(errorHead).toBeInTheDocument()
  })

  it('renders with an email input textbox', () => { 
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const errorHead = screen.getByRole('textbox', {name: /email/i})
    expect(errorHead).toBeInTheDocument()
  })

  it('renders with a password label', () => { 
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const errorHead = screen.getByLabelText(/password/i)
    expect(errorHead).toBeInTheDocument()
  })

  it('renders with a cancel button', () => { 
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const errorHead = screen.getByRole('button', {name: /cancel/i
    })
    expect(errorHead).toBeInTheDocument()
  })

  it('renders with a next button', () => { 
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const errorHead = screen.getByRole('button', {name: /next/i})
    expect(errorHead).toBeInTheDocument()
  })
})