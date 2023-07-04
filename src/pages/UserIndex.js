import React from 'react'
import { Button, NavLink } from 'reactstrap'

const UserIndex = ({ readmes }) => {
  return (
    <div className="user-index">
      <h1>List of users</h1>
      {readmes?.map((readme) => {
        return (
          <>
            <p>{readme.name}</p>
            <p>Age: {readme.age}</p>
            <p>Gender: {readme.gender}</p>
            <img src={readme.image} alt="A handsome man" />
            <Button>
              <NavLink href={`/readme/${readme.id}`}>
                More Details
              </NavLink>
            </Button>
          </>
        )
      })}
    </div>
  )
}

export default UserIndex