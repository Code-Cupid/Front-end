import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Card from "../components/Card"


describe('<Card />', () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Card />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
  })

  it('renders with a heading', () => { 
    render(
      <BrowserRouter>
        <Card />
      </BrowserRouter>
    )
    const header = screen.getByRole('heading', {
      name: /codecupid/i
    })
    expect(header).toBeInTheDocument()
  })

  it('renders with a footer', () => { 
    render(
      <BrowserRouter>
        <Card />
      </BrowserRouter>
    )
    const footer = screen.getByText(/©2023 cupid/i)
    expect(footer).toBeInTheDocument()
  })
}) 