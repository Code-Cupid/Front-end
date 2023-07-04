import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import SignupReadme from "../pages/SignupReadme"

describe('<SignupReadme />', () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <SignupReadme />
      </BrowserRouter>
    )
  })

  it('renders with a heading', () => { 
    render(
      <BrowserRouter>
        <SignupReadme />
      </BrowserRouter>
    )
    const header = screen.getByRole('heading', {
      name: /readme file/i
    })
    expect(header).toBeInTheDocument()
  })

  it('informs other users can see the details', () => { 
    render(
      <BrowserRouter>
        <SignupReadme />
      </BrowserRouter>
    )
    const views = screen.getByText(/other users will see this information/i)
    expect(views).toBeInTheDocument()
  })

  it('informs other users can see the details', () => { 
    render(
      <BrowserRouter>
        <SignupReadme />
      </BrowserRouter>
    )
    const views = screen.getByText(/other users will see this information/i)
    expect(views).toBeInTheDocument()
  })

  it('renders a spinbutton for age', () => { 
    render(
      <BrowserRouter>
        <SignupReadme />
      </BrowserRouter>
    )
    const views = screen.getByRole('spinbutton', {name: /age/i})
    expect(views).toBeInTheDocument()
  })

  it('renders a textbox for name', () => { 
    render(
      <BrowserRouter>
        <SignupReadme />
      </BrowserRouter>
    )
    const namebox = screen.getByRole('textbox', {name: /name/i})
    expect(namebox).toBeInTheDocument()
  })
}) 