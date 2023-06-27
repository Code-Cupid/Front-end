import React from 'react'

const UserIndex = ({ readmes }) => {
  return (
    <div className="user-index">
      <h1>List of users</h1>
      {readmes.map((readme) => {
        return (
          <>
            <p>{readme.name}</p>
            <p>Age: {readme.age}</p>
            <p>Gender: {readme.gender}</p>
            <img src={readme.image} alt="Apartment" />
          </>
        )
      })}
    </div>
  )
}

export default UserIndex