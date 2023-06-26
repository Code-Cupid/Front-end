import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Show from "../pages/Show"

describe("<Show />", () => {
  const currentUser = {}
  const readmes = []

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Show currentUser={currentUser} readmes={readmes} />
      </BrowserRouter>
    )
  })

  it("renders with gender", () => {
    render(
      <BrowserRouter>
        <Show currentUser={currentUser} readmes={readmes} />
      </BrowserRouter>
    )
    const gender = screen.getByText(/gender:/i)
    expect(gender).toBeInTheDocument()
  })

  it("renders with location", () => {
    render(
      <BrowserRouter>
        <Show currentUser={currentUser} readmes={readmes} />
      </BrowserRouter>
    )
    const location = screen.getByText(/location:/i)
    expect(location).toBeInTheDocument()
  })

  it("renders with a favorite programming language", () => {
    render(
      <BrowserRouter>
        <Show currentUser={currentUser} readmes={readmes} />
      </BrowserRouter>
    )
    const language = screen.getByText(/favorite programming language:/i)
    expect(language).toBeInTheDocument()
  })
})