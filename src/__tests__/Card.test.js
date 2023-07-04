import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import CardContainer from "../components/Card"

describe('<CardContainer />', () => {
  const mockPeople = [
    {
      name: "John Doe",
      age: "30",
      gender: "Male",
      location: "New York, USA",
      imgSrc: "path/to/image.jpg"
    },
    {
      name: "Jane Smith",
      age: "25",
      gender: "Female",
      location: "Los Angeles, USA",
      imgSrc: "path/to/image2.jpg"
    }
  ]

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <CardContainer people={mockPeople} />
      </BrowserRouter>
    )
  })

  it('renders with all people', () => { 
    render(
      <BrowserRouter>
        <CardContainer people={mockPeople} />
      </BrowserRouter>
    )
    const personElements = screen.getAllByRole('img', { name: /John Doe|Jane Smith/i })
    expect(personElements.length).toBe(2)
  })
})
