import React from "react";
import "../styles/Components.css";

function Card({ person, featured }) {
  const { name, age, gender, location, imgSrc } = person;

  return (
    <div className={`card stacked ${featured ? "featured" : ""}`}>
      <img src={imgSrc} alt={name} className="card__img" />
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <p className="card__price">{`${age}, ${gender}`}</p>
        <p className="card__description">{location}</p>
      </div>
    </div>
  );
}

function CardContainer({ people }) {
  return (
    <main>
      <div className="container">
        <h1 className="main-title">All</h1>
        <div className="product-grid">
          {people.map((person, index) => (
            <Card key={index} person={person} featured={index === 0} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default CardContainer;
