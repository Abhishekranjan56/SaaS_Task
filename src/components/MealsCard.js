import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faFire, faHeart } from "@fortawesome/free-solid-svg-icons";

const MealCard = ({
  imageSrc,
  altText,
  mealTypes,
  heading,
  description,
  calories,
  nutriScore,
  rating,
}) => {
  return (
    <div className="meal-card">
      <img src={imageSrc} alt={altText} />
      <div className="meal-card-body">
        <ul className="meal-types-list">
          {mealTypes.map((type, index) => (
            <li key={index} className={type.toLowerCase()}>
              {type}
            </li>
          ))}
        </ul>
        <p className="meal-card-heading">{heading}</p>
        <p className="meal-card-desc">{description}</p>
        <ul className="meal-stats">
          <li>
            <FontAwesomeIcon icon={faFire} className="meal-stats-icon" />
            <span>{calories}</span> Calories
          </li>
          <li>
            <FontAwesomeIcon icon={faAward} className="meal-stats-icon" />
            NutriScore Ⓡ <span>{nutriScore}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} className="meal-stats-icon" />
            <span>{rating}</span> Rating
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MealCard;
