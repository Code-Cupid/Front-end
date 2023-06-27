import { render, screen } from "@testing-library/react"
import UserIndex from "../pages/UserIndex"
import { BrowserRouter } from "react-router-dom"
import MockReadmes from "../MockReadmes"


describe("<UserIndex />", () => {


  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <UserIndex  readmes={MockReadmes} />
      </BrowserRouter>
    )
  })

  it("has a heading", () => {
    render(
      <BrowserRouter>
        <UserIndex  readmes={MockReadmes} />
      </BrowserRouter>
    )
    const heading = screen.getByRole('heading', { name: /list of users/i })
    expect(heading).toBeInTheDocument()
  })

  it("has a name", () => {
    render(
      <BrowserRouter>
        <UserIndex  readmes={MockReadmes} />
      </BrowserRouter>
    )
    const name = screen.getByText(/jesse matthews/i)
    expect(name).toBeInTheDocument()
  })

  it("has a age", () => {
    render(
      <BrowserRouter>
        <UserIndex  readmes={MockReadmes} />
      </BrowserRouter>
    )
    const age = screen.getByText(/age: 25/i)
    expect(age).toBeInTheDocument()
  })
  
  it("has a gender", () => {
    render(
      <BrowserRouter>
        <UserIndex  readmes={MockReadmes} />
      </BrowserRouter>
    )
    const gender = screen.getByText(/gender: male/i)
    expect(gender).toBeInTheDocument()
  })

})