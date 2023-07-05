import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Edit from "../pages/Edit"

describe("<Edit />", () => {
  const currentUser = {}
  const readmes = []
  const deleteReadMes = jest.fn()
  const updateUser = jest.fn()
  const deleteUser = jest.fn()

  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Edit
          currentUser={currentUser}
          readmes={readmes}
          deleteReadMes={deleteReadMes}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      </BrowserRouter>
    )
  })

  it("renders the ReadMeShow component", () => {
    render(
      <BrowserRouter>
        <Edit
          currentUser={currentUser}
          readmes={readmes}
          deleteReadMes={deleteReadMes}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      </BrowserRouter>
    )
    const readMeShowComponent = screen.getByTestId("readme-show")
    expect(readMeShowComponent).toBeInTheDocument()
    expect(readMeShowComponent).toHaveAttribute("currentUser", currentUser)
    expect(readMeShowComponent).toHaveAttribute("readmes", readmes)
    expect(readMeShowComponent).toHaveAttribute("deleteReadMes", deleteReadMes)
    expect(readMeShowComponent).toHaveAttribute("updateUser", updateUser)
    expect(readMeShowComponent).toHaveAttribute("deleteUser", deleteUser)
  })

  it("renders the NotFound component for unknown routes", () => {
    render(
      <BrowserRouter>
        <Edit
          currentUser={currentUser}
          readmes={readmes}
          deleteReadMes={deleteReadMes}
          updateUser={updateUser}
          deleteUser={deleteUser}
        />
      </BrowserRouter>
    )
    const notFoundText = screen.queryByText("Page Not Found")
    expect(notFoundText).toBeInTheDocument()
  })
})