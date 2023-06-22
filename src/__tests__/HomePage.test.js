import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Homepage from "../pages/Homepage"

describe('<Homepage />', () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    )
  })

  it('renders with a heading', () => { 
    render(
      <BrowserRouter>
        <Homepage />
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
        <Homepage />
      </BrowserRouter>
    )
    const footer = screen.getByText(/©2023 cupid/i)
    expect(footer).toBeInTheDocument()
  })
}) 