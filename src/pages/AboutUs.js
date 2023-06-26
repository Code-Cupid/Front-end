import React, { useState } from "react";
import "../styles/AboutUs.css";
import CupidGang from "./CupidGang";
import dog from '../assets/dog.png'

// AccordionPanel component
const AccordionPanel = ({
  title,
  content,
  imgSrc,
  imgAlt,
  isActive,
  onToggle,
}) => {
  return (
    <div className={`accordion-panel ${isActive ? "active" : ""}`}>
      <h2 id={`${title}-heading`}>
        <button
          className="accordion-trigger"
          aria-expanded={isActive}
          onClick={onToggle}
        >
          <span className="accordion-title">{title}</span>
          <svg aria-hidden="true" className="accordion-icon">
            <use href="#icon"></use>
          </svg>
        </button>
      </h2>

      <div
        className="accordion-content"
        aria-labelledby={`${title}-heading`}
        aria-hidden={!isActive}
      >
        <p>{content}</p>
        <img className="accordion-image" src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};

// Accordion component
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionPanel
          key={index}
          isActive={activeIndex === index}
          onToggle={() => handleToggle(index)}
          {...item}
        />
      ))}
    </div>
  );
};

// AboutUs component
const items = CupidGang.map((person) => ({
  title: person.name,
  content: `${person.name} is from ${person.location}. Their birthday is on ${person.birthday}. They prefer ${person.lang_pref}. About them: ${person.about}`,
  imgSrc: dog, // Add relevant image sources
  imgAlt: `${person.name}'s image`, // Add alt text for each person's image
  // svg: <FontAwesomeIcon icon={faUser} className="accordion-icon" />, // Update this with the relevant svg for each person
}));

const AboutUs = () => {
  return (
    <div>
      <h1 className="cupid-title">meet the cupids</h1>
      <Accordion items={items} />
    </div>
  );
};

export default AboutUs;
