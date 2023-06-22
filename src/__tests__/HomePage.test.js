import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import HomePage from "../pages/Homepage"

describe("<Homepage />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    )
  })

  it('renders "Page not found"', () => { 
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
    const errorHead = screen.getByAltText(/page not found/i)
    expect(errorHead).toBeInTheDocument()
  })
})