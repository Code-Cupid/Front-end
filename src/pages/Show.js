import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";


const ReadMeShow = ({ currentUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [readme, setReadme] = useState(null);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else {
      fetch(`http://localhost:3001/readme/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
          }
          return response.json();
        })
        .then((json) => setReadme(json))
        .catch((error) => console.error("Error:", error));
    }
  }, [currentUser, id, navigate]);

  if (!readme) {
    return "Loading...";
  }

return (
  <>
    <div class="readme-container">
      <h1>{readme?.name}</h1>
      <img src={readme?.image} alt={readme?.image} />
      <p>Age: {readme?.age} </p>
      <p>Gender:{readme?.gender} </p>
      <p>Gender Preference:{readme?.gender_preference} </p>
      <p>Location:{readme?.location} </p>
      <p>Favorite Programming Language:{readme?.programming_language} </p>
    </div>

    <div>
      <NavLink to={`/edit/${currentUser.id}`} className="nav-link">
        Edit ReadMe Profile
      </NavLink>
    </div>
  </>
);
}

export default ReadMeShow;
