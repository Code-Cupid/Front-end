import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Button } from "reactstrap";

import "../styles/ReadmeShow.css";

const ReadMeShow = ({ readmes, currentUser, deleteReadmes }) => {
  const { id } = useParams();
  let currentReadme = readmes?.find((readme) => readme.id === +id);
  console.log(currentReadme, currentUser);

  return (
    <div className="grid">
      <>
        <h1 className="main-title">{currentReadme?.name}</h1>
        <div className="pic-container">
          <img
            src={currentReadme?.image}
            alt={currentReadme?.image}
            className="card__img"
          />
        </div>
      </>

      <div className="readme-container">
        <>
          <p className="card__name">Age: {currentReadme?.age} </p>
          <p className="card__name">Gender: {currentReadme?.gender} </p>
          <p className="card__name">
            Gender Preference: {currentReadme?.gender_preference}{" "}
          </p>
          <p className="card__name">Location: {currentReadme?.location} </p>
          <p className="card__name">
            Favorite Programming Language: {currentReadme?.programming_language}{" "}
          </p>
        </>
        {currentUser.id === currentReadme?.id ? (
          <>
            <NavLink
              className="readme-button"
              to={`/edit/${currentReadme?.id}`}
            >
              Edit Readme
            </NavLink>
            <br/>
            <br/>
            <NavLink
              className="readme-button"
              onClick={() => deleteReadmes(currentReadme?.id)}
              to={"/userindex"}
            >
              Delete Readme
            </NavLink>
          </>
        ) : (
          <NavLink className="readme-button" to={"/userindex"}>
            Go Back to Meet Others
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default ReadMeShow;
