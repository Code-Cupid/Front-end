import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const ReadMeShow = ({ currentUser, readmes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const readmeShow = readmes.find((readmeShow) => readmeShow.id === Number(id));

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    currentUser && (
      <div class="readme-container">
        <h1>{readmeShow?.name}</h1>
        <img src={readmeShow?.image} alt={readmeShow?.image} />
        <p>Age: {readmeShow?.age} </p>
        <p>Gender:{readmeShow?.gender} </p>
        <p>Location:{readmeShow?.location} </p>
        <p>Favorite Programming Language:{readmeShow?.programming_lang} </p>
      </div>
    )
  );
};

export default ReadMeShow;
