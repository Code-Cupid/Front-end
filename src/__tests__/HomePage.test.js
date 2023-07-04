import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Homepage from "../pages/Homepage"
import 'jest-canvas-mock';

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

  it('renders with a tagline', () => { 
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    )
    const tagline = screen.getByText(/connecting_hearts_through code/i)
    expect(tagline).toBeInTheDocument()
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

  it('renders the animation component', () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    )
    const animation = screen.getByTestId("animation-component")
    expect(animation).toBeInTheDocument()
    expect(animation).toHaveAttribute("height", "500")
    expect(animation).toHaveAttribute("width", "100%")
  })
})