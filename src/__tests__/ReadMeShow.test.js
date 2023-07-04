import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import ReadMeShow from "../pages/ReadMeShow"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "1" })
}))

describe("<ReadMeShow />", () => {
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
        <ReadMeShow
          currentUser={currentUser}
          readmes={readmes}
          deleteReadmes={() => {}}
        />
      </BrowserRouter>
    )
  })

  it("displays the correct readme data", () => {
    render(
      <BrowserRouter>
        <ReadMeShow
          currentUser={currentUser}
          readmes={readmes}
          deleteReadmes={() => {}}
        />
      </BrowserRouter>
    )

    expect(screen.getByText(/John Doe/)).toBeInTheDocument()
    expect(screen.getByText(/Gender:.*Male/)).toBeInTheDocument()
    expect(screen.getByText(/Location:.*New York/)).toBeInTheDocument()
    expect(
      screen.getByText(/Favorite Programming Language:.*JavaScript/)
    ).toBeInTheDocument()
  })

  it("calls deleteReadmes function when delete button is clicked", () => {
    const deleteReadmesMock = jest.fn()
    render(
      <BrowserRouter>
        <ReadMeShow
          currentUser={currentUser}
          readmes={readmes}
          deleteReadmes={deleteReadmesMock}
        />
      </BrowserRouter>
    )

    const deleteButton = screen.getByText("Delete")
    deleteButton.click()

    expect(deleteReadmesMock).toHaveBeenCalledWith(1)
  })
})