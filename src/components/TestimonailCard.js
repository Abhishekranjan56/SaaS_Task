import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const TestimonialCards = ({
  imageSrc,
  altText,
  rating,
  name,
  location,
  text,
}) => {
  return (
    <div className="testimonials-card">
      <p className="testimonials-text">{text}</p>
      <div className="testimonials-credits">
        <div>
          <img src={imageSrc} alt={altText} />
        </div>
        <div>
          <p>
            {Array.from({ length: Math.floor(rating) }, (_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="testimonials-credits-icon"
              />
            ))}
            {rating % 1 > 0.5 && (
              <FontAwesomeIcon
                icon={faStarHalf}
                className="testimonials-credits-icon"
              />
            )}
            <br />
            {name} <br />
            <span>{location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
