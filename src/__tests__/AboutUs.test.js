import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import AboutUs from "../pages/AboutUs"

describe('<AboutUs />', () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
  })

  it('renders with a heading', () => { 
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    const header = screen.getByRole('heading', {name: /meet the creators!/i
    })
    expect(header).toBeInTheDocument()
  })

  it('renders with an image for Tucker', () => { 
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    const tucker = screen.getByRole('img', {name: /picture of tucker/i
    })
    expect(tucker).toBeInTheDocument()
  })  
  
  it('renders with an image for Ernesto', () => { 
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    const ernesto = screen.getByRole('img', {name: /picture of ernesto/i
    })
    expect(ernesto).toBeInTheDocument()
  })  
  
  it('renders with an image for Bea', () => { 
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    const bea = screen.getByRole('img', {name: /picture of bea/i
    })
    expect(bea).toBeInTheDocument()
  })  
  
  it('renders with an image for Rashaan', () => { 
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    const rashaan = screen.getByRole('img', {name: /picture of rashaan/i
    })
    expect(rashaan).toBeInTheDocument()  
  })

  it('renders with a previous button text for carousel', () => { 
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    const previous = screen.getByText(/previous/i)
    expect(previous).toBeInTheDocument()  
  })

  it('renders with a next button text for carousel', () => { 
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    const rashaan = screen.getByText(/next/i)
    expect(rashaan).toBeInTheDocument()
  })

  it('advances to the next image when clicking on the "Next" button', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )
    const nextButton = screen.getByText(/next/i)
    fireEvent.click(nextButton)
    const tucker = screen.getByRole('img', { name: /picture of tucker/i })
    expect(tucker).toBeInTheDocument()
  })
  
  it('moves to the previous image when clicking on the "Previous" button', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    const previousButton = screen.getByText(/previous/i)
    fireEvent.click(previousButton)
    const rashaan = screen.getByRole('img', { name: /picture of rashaan/i })
    expect(rashaan).toBeInTheDocument()
  })
})