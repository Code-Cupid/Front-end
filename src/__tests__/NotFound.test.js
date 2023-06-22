import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import NotFound from "../pages/NotFound"

describe('<NotFound />', () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
  })

  it('renders "Page not found', () => { 
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const errorHead = screen.getByAltText(/page not found/i)
    expect(errorHead).toBeInTheDocument()
  })
})