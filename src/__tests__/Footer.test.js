import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Footer from "../components/Footer"

describe('<Footer />', () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
  })

  it('renders with a footer', () => { 
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const footer = screen.getByText(/©2023 cupid/i)
    expect(footer).toBeInTheDocument()
  })
}) 