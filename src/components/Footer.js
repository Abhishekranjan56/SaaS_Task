import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="section-footer">
        <div className="footer-info">
          <img
            src={require("../assets/omnifood-logo.png")}
            className="logo"
            alt="several bowls of healthy green salads"
          />
          <p className="footer-info-desc">
            Omnifood uses AI to provide 365-days-per-year food subscription
            services that will make you eat healthy again. Users can use our app
            to select their diet and foods they like and dislike, and our AI
            algorithm will create a custom and individual weekly meal plan.
          </p>
          <div className="footer-socials">
            <a
              href="mailto:ranjan321ab@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="email"
            >
              <FontAwesomeIcon
                className="footer-socials-icons"
                icon={faEnvelope}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="X"
            >
              <FontAwesomeIcon
                className="footer-socials-icons"
                icon={faXTwitter}
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="github"
            >
              <FontAwesomeIcon
                className="footer-socials-icons"
                icon={faGithub}
              />
            </a>
            <a
              href="https://linkedin.com/in"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="linkedin"
            >
              <FontAwesomeIcon
                className="footer-socials-icons"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
        <nav className="footer-nav">
          <div className="account-links">
            <ul className="footer-links">
              <li>Account</li>
              <li>
                <a href="#">Member Portal</a>
              </li>
              <li>
                <a href="#">Create Account</a>
              </li>
              <li>
                <a href="#">Referral Program</a>
              </li>
            </ul>
          </div>
          <div className="resource-links">
            <ul className="footer-links">
              <li>Resources</li>
              <li>
                <a href="#">Recipe Directory</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Privacy & Terms</a>
              </li>
            </ul>
          </div>
          <div className="company-links">
            <ul className="footer-links">
              <li>Company</li>
              <li>
                <a href="#">About Omnifood</a>
              </li>
              <li>
                <a href="#">Cooking Partners</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="contact-info">
            <ul className="footer-links">
              <li>Contact</li>
              <li>
                623 Bahadur Street, <br />
                Ghaziabad, UP 201003
              </li>
              <li>
                415-201-6370 <br />
                help@omnifood.dev
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
