import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <section className="section-hero">
      <div className="hero-group">
        <div className="hero-text-wrapper">
          <h1 className="hero-heading">
            A healthy meal delivered to your door,
            <span>every single day</span>
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you
            <span>eat healthy again</span>. Tailored to your
            <span>personal tastes and nutritional needs</span>.
          </p>
          <div className="hero-marquee">
            <ul className="meal-types-list marquee-animation">
              <li className="paleo">Paleo</li>
              <li className="vegan">Vegan</li>
              <li className="gluten-free">Gluten-Free</li>
              <li className="lactose-free">Lactose-Free</li>
              <li className="pesca">Pescatarian</li>
              <li className="vegetarian">Vegetarian</li>
              <li className="keto">Keto</li>
              <li className="fodmap">Low FODMAP</li>
              <li className="kid-friendly">Kid-Friendly</li>
              <li className="paleo">Paleo</li>
              <li className="vegan">Vegan</li>
              <li className="gluten-free">Gluten-Free</li>
              <li className="lactose-free">Lactose-Free</li>
              <li className="pesca">Pescatarian</li>
              <li className="vegetarian">Vegetarian</li>
              <li className="keto">Keto</li>
              <li className="fodmap">Low FODMAP</li>
              <li className="kid-friendly">Kid-Friendly</li>
            </ul>
          </div>
          <div className="hero-buttons">
            <a href="#learn" className="btn outline-btn">
              Learn More
            </a>
            <a href="#subscribe" className="btn solid-btn">
              Get Started
            </a>
          </div>
        </div>
        <div className="hero-img-wrapper">
          <img
            src={require("../assets/hero/meals.png")}
            alt="Several bowls of healthy meals, primarily salads and vegetarian"
          />
        </div>
        <div className="mobile-hero-img">
          <img
            src={require("../assets/bowls.jpg")}
            alt="Several bowls of healthy meals, primarily salads and vegetarian"
          />
        </div>
      </div>
      <div className="hero-customer-proof">
        <div className="customer-img-wrapper">
          <img
            src={require("../assets/customers/customer-1.jpg")}
            alt="profile picture of customer"
          />
          <img
            src={require("../assets/customers/customer-2.jpg")}
            alt="profile picture of customer"
          />
          <img
            src={require("../assets/customers/customer-3.jpg")}
            alt="profile picture of customer"
          />
          <img
            src={require("../assets/customers/customer-4.jpg")}
            alt="profile picture of customer"
          />
          <img
            src={require("../assets/customers/customer-5.jpg")}
            alt="profile picture of customer"
          />
          <img
            src={require("../assets/customers/customer-6.jpg")}
            alt="profile picture of customer"
          />
        </div>
        <p className="customer-data">
          <span>310,000+</span> meals delivered this year!
          <br />
          <i className="fa-regular fa-heart"></i>{" "}
          <FontAwesomeIcon
            icon={faHeart}
            className="customer-data-icon"
            style={{ paddingRight: 4 }}
          />
          <span>4.6 (10.9K Reviews)</span>
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
