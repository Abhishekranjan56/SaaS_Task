import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/fontawesome-free-regular";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  useEffect(() => {
    const links = document.querySelectorAll("a:not(.social-link)");
    const headerElement = document.querySelector(".header");

    links.forEach(function (link) {
      link.addEventListener("click", function (el) {
        el.preventDefault();
        const href = link.getAttribute("href");
        if (href === "#") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }

        if (href !== "#" && href.startsWith("#")) {
          const sectionElement = document.querySelector(href);
          sectionElement.scrollIntoView({ behavior: "smooth" });
        }
        if (link.classList.contains("nav-link")) {
          headerElement.classList.toggle("nav-open");
        }
      });
    });
  }, []);
  return (
    <header className={`header ${isNavOpen ? "nav-open" : ""}`}>
      <img
        src={require("../assets/omnifood-logo.png")}
        className="logo"
        alt="logo for omnifood"
      />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#learn" className="nav-link">
              How It Works
            </a>
          </li>
          <li>
            <a href="#meals" className="nav-link">
              Meals
            </a>
          </li>
          <li>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
          </li>
        </ul>
        <a href="#subscribe" className="btn solid-btn mobile-order nav-link">
          <FontAwesomeIcon icon={faCalendarCheck} />
        </a>
      </nav>
      <a href="#subscribe" className="btn solid-btn desktop-order nav-link">
        <FontAwesomeIcon icon={faCalendarCheck} style={{ paddingRight: 8 }} />
        Order Today
      </a>

      <button className="mobile-nav-btn" onClick={toggleNav}>
        <span className="mobile-open">
          <FontAwesomeIcon icon={faBars} className="mobile-open" />
        </span>
        <span className="mobile-close">
          <FontAwesomeIcon icon={faXmark} className="mobile-close" />
        </span>
      </button>
    </header>
  );
}

export default Header;
