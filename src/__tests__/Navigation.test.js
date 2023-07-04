import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Navigation from "../components/Navigation"


describe('<Navigation />', () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('renders with a logo', () => { 
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    const logo = screen.getByRole('img', {name: /logo/i})
    expect(logo).toBeInTheDocument()
  })

  it('renders with a login button', () => { 
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    const login = screen.getByRole('button', {name: /login/i})
    expect(login).toBeInTheDocument()
  })  
  
  it('renders with a list item', () => { 
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    const listitem = screen.getByRole('listitem')
    expect(listitem).toBeInTheDocument()
  })  
  
  it('renders with a signup button', () => { 
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    const signup = screen.getByRole('button', {name: /signup/i})
    expect(signup).toBeInTheDocument()
  })  
  
  it('renders with a list', () => { 
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })  
  
  it('renders with a link for the logo', () => { 
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    const link = screen.getByRole('link', { name: /logo/i })
    expect(link).toBeInTheDocument()
  })
}) 