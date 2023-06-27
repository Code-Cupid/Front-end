import { render, screen } from "@testing-library/react"
import UserIndex from "../pages/UserIndex"
import { BrowserRouter } from "react-router-dom"
import MockReadmes from "../MockReadmes"


describe("<UserIndex />", () => {
  // const currentUser = {}
  // const readmes = []

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <UserIndex  readmes={MockReadmes} />
      </BrowserRouter>
    )
    screen.logTestingPlaygroundURL()
  })

  it("has a heading", () => {
    render(
      <BrowserRouter>
        <UserIndex  readmes={MockReadmes} />
      </BrowserRouter>
      
    )
    screen.logTestingPlaygroundURL()
  })


})