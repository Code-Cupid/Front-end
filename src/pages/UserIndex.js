import React from 'react'
import { Button, NavLink } from 'reactstrap'
import '../styles/UserIndex.css'

const UserIndex = ({ readmes }) => {
  return (
    <h1 className="main-title">
      List of users
      <div className="container">

          <div class="product-grid">
            {readmes?.map((readme) => {
              return (
                <>
                  <div class="card">
                    <img src={readme.image} alt="" class="card__img" />
                    <div class="card__content">
                      <p class="card__name">{readme.name}</p>
                      <p class="card__age">Age: {readme.age}</p>
                      <p class="card__description">Gender: {readme.gender}</p>
                    </div>
                    <Button>
                      <NavLink href={`/readme/${readme.id}`}>
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