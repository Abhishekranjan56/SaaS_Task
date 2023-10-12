import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="section-pricing" id="pricing">
      <h1 className="subheading">Pricing Options</h1>
      <h2 className="body-heading">
        Find a plan that works <span>for you</span>
      </h2>
      <div className="toggle-prices">
        <input
          type="checkbox"
          id="toggle"
          checked={!isMonthly}
          onChange={togglePricing}
        />
        <label htmlFor="toggle" className="toggle-wrapper">
          <p>Monthly</p>
          <p>Annually</p>
        </label>
      </div>

      <div className="pricing-card-wrapper">
        <div className="pricing-card">
          <div className="pricing-heading">
            <h3>Starter</h3>
            <h1>
              <span className="dollar-sign">$</span>
              <span className="pricing-num">{isMonthly ? "399" : "3995"}</span>
            </h1>
            <small>That's about {isMonthly ? "$13" : "$11"} per meal!</small>
          </div>
          <ul className="pricing-list-items">
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="pricing-list-items-icon"
              />{" "}
              1 meal per day
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="pricing-list-items-icon"
              />{" "}
              Order from 11am to 9pm
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="pricing-list-items-icon"
              />{" "}
              Delivery is free
            </li>
          </ul>
          <a href="#subscribe" className="btn solid-btn">
            Select Plan
          </a>
        </div>
        <div className="pricing-card selected-pricing">
          <div className="pricing-heading">
            <h3>Complete</h3>
            <h1>
              <span className="dollar-sign">$</span>
              <span className="pricing-num">{isMonthly ? "649" : "6995"}</span>
            </h1>
            <small> That’s about {isMonthly ? "$11" : "$9"} per meal!</small>
          </div>
          <ul className="pricing-list-items">
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="pricing-list-items-icon"
              />{" "}
              <span>2 meals</span> per day
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="pricing-list-items-icon"
              />{" "}
              Order <span>24/7</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="pricing-list-items-icon"
              />{" "}
              Delivery is free
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="pricing-list-items-icon"
              />{" "}
              Access to <span>exclusive</span> recipes
            </li>
          </ul>
          <a href="#subscribe" className="btn selected-btn">
            Select Plan
          </a>
        </div>
        <div className="pricing-card">
          <div className="pricing-heading">
            <h3>Custom</h3>
            <h1>
              <span className="dollar-sign">$</span>
              <span className="pricing-num">{isMonthly ? "999" : "9995"}</span>
            </h1>
            <small>Connect with an expert nutritionist!</small>
          </div>
          <ul className="pricing-list-items">
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="pricing-list-items-icon"
              />{" "}
              <span>3 meals</span> per day
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="pricing-list-items-icon"
              />{" "}
              Order <span>24/7</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="pricing-list-items-icon"
              />{" "}
              Access to <span>exclusive</span> recipes
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCheck}
                className="pricing-list-items-icon"
              />{" "}
              Access to <span>expert</span> nutritionists
            </li>
          </ul>
          <a href="#subscribe" className="btn solid-btn">
            Select Plan
          </a>
        </div>
      </div>
      <p className="pricing-message">
        Prices include all applicable taxes. You can cancel any time.
      </p>
    </section>
  );
};

export default PricingSection;
