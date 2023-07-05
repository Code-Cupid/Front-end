import React from 'react'
import { Button, NavLink } from 'reactstrap'
import '../styles/UserIndex.css'

const UserIndex = ({ readmes }) => {
  return (
    <h1 className="main-title">
      List of users
      <div className="container">

          <div className="product-grid">
            {readmes?.map((readme) => {
              return (
                <>
                  <div className="card">
                    <img src={readme.image} alt="" class="card__img" />
                    <div className="card__content">
                      <p className="card__age">Age: {readme.age}</p>
                      <p className="card__description">Gender: {readme.gender}</p>
                    </div>
                    <Button>
                      <NavLink href={`/readme/${readme.id}`} className='meet-button'>
                        Meet {readme.name}
                      </NavLink>
                    </Button>
                  </div>
                </>
              );
            })}
          </div>

      </div>
    </h1>
  );
}

export default UserIndex