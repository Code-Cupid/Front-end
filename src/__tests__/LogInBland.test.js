import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import LogInBland from "../pages/LogInBland"

describe('<LogInBland />', () => {

  it('displays validation error when submitting without email', () => {
    render(
      <BrowserRouter>
        <LogInBland login={() => {}} />
      </BrowserRouter>
    )
  
    const loginButton = screen.getByRole('button', { name: /Login/i })
    fireEvent.click(loginButton)
  
    const emailError = screen.queryByText((content, element) => {
      return element.tagName.toLowerCase() === 'div' && content.includes('please enter your email')
    })
    expect(emailError).toBeInTheDocument()
  })

  it('handles server error and displays error message', async () => {
    render(
      <BrowserRouter>
        <LogInBland login={() => {}} />
      </BrowserRouter>
    )

    const login = jest.fn().mockRejectedValue(new Error('Login failed'))

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const loginButton = screen.getByRole('button', { name: /Login/i })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })

    fireEvent.click(loginButton)

    const errorMessage = await screen.findByText(/Login failed/i)
    expect(errorMessage).toBeInTheDocument()
  })
})