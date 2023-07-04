import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Button } from "reactstrap"


const ReadMeShow = ({ readmes, currentUser, deleteReadmes }) => {
  const { id } = useParams();
  let currentReadme = readmes?.find((readme) => readme.id === +id)
  console.log(currentReadme, currentUser)

return (
  <>
    <div class="readme-container">
      <h1>{currentReadme?.name}</h1>
      <img src={currentReadme?.image} alt={currentReadme?.image} />
      <p>Age: {currentReadme?.age} </p>
      <p>Gender:{currentReadme?.gender} </p>
      <p>Gender Preference:{currentReadme?.gender_preference} </p>
      <p>Location:{currentReadme?.location} </p>
      <p>Favorite Programming Language:{currentReadme?.programming_language} </p>
    </div>

    <div>
      <NavLink to={`/edit/${currentReadme?.id}`} className="nav-link">
        Edit ReadMe Profile
      </NavLink>
      <Button onClick={()=>deleteReadmes(currentReadme?.id)}>
        <NavLink to={"/userindex"} className="nav-link">
          Delete
        </NavLink>
      </Button>
    </div>
  </>
);
}

export default ReadMeShow;
