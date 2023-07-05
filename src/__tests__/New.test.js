import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import New from '../pages/New'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn()
}))
jest.mock('reactstrap', () => ({
  Form: jest.fn(({ children }) => <form>{children}</form>),
  FormGroup: jest.fn(({ children }) => <div>{children}</div>),
  Label: jest.fn(({ children }) => <label>{children}</label>),
  Input: jest.fn(({ name, onChange, value, type }) => (
    <input
      name={name}
      onChange={onChange}
      value={value}
      type={type}
    />
  )),
  Button: jest.fn(({ onClick, name, children }) => (
    <button onClick={onClick} name={name}>
      {children}
    </button>
  ))
}))

describe('New', () => {
  const renderNew = (props) => {
    return render(<New {...props} />)
  }

  it('should display validation error messages for missing required fields', () => {
    const createReadme = jest.fn()
    const navigate = jest.fn()
    jest.spyOn(console, 'log').mockImplementation(() => {})

    const { getByText } = renderNew({ createReadme, currentUser: { id: '12345' } })

    fireEvent.click(getByText(/Submit Readme/i))

    expect(createReadme).not.toHaveBeenCalled()
    expect(navigate).not.toHaveBeenCalled()

    expect(getByText('Name is required')).toBeInTheDocument()
    expect(getByText('Age is required')).toBeInTheDocument()
    expect(getByText('Location is required')).toBeInTheDocument()
  })
})