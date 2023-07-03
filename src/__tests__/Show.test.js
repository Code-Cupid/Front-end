import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Show from "../pages/Show"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn()
}))

describe("<Show />", () => {
  const currentUser = { id: 1 }
  const readmes = [
    {
      id: 1,
      name: "John Doe",
      gender: "Male",
      location: "New York",
      programming_language: "JavaScript"
    }
  ]

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Show currentUser={currentUser} readmes={readmes} />
      </BrowserRouter>
    )
  })

  it("redirects to login page when currentUser is not available", () => {
    const navigateMock = jest.fn()
    render(
      <BrowserRouter>
        <Show currentUser={null} readmes={readmes} />
      </BrowserRouter>
    )
    expect(navigateMock).toHaveBeenCalledWith("/login")
  })

  it("fetches readme data and displays it correctly", async () => {
    const readmeData = {
      id: 1,
      name: "Tucker",
      gender: "Male",
      location: "New York",
      programming_language: "JavaScript"
    }

    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(readmeData)
    })

    render(
      <BrowserRouter>
        <Show currentUser={currentUser} readmes={readmes} />
      </BrowserRouter>
    )
q
    expect(global.fetch).toHaveBeenCalledWith(
      `http://localhost:3001/readme/${currentUser.id}`
    )
    expect(await screen.findByText(/name: Tucker/i)).toBeInTheDocument()
    expect(screen.getByText(/gender: Male/i)).toBeInTheDocument()
    expect(screen.getByText(/location: New York/i)).toBeInTheDocument()
    expect(
      screen.getByText(/favorite programming language: JavaScript/i)
    ).toBeInTheDocument()
  })

})